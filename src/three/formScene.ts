// Three.js form preview + 32x32 sprite rasterizer (spec §6-8).
// Orthographic camera only. One directional light + ambient. Ground plane
// with ShadowMaterial receives the cast shadow as a SEPARATE layer from the
// object pixels. A light gizmo + ground guide show direction and where the
// shadow should fall.
import * as THREE from "three"
import { FormData } from "../core/schemas"
import { CameraState, LightSettings } from "../core/types"

const TILE = 32
const CENTER = new THREE.Vector3(16, 16, 16)

export interface Render32Result {
  rgba: Uint8Array        // object pass, NCELLS*4
  shadowAlpha: Uint8Array // NCELLS 0..255
  /** Direction TOWARD the light in screen space (x right, y down). */
  lightScreen: { x: number; y: number }
}

export class FormScene {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera: THREE.OrthographicCamera
  private group = new THREE.Group()
  private sun = new THREE.DirectionalLight(0xffffff, 1)
  private ambient = new THREE.AmbientLight(0xffffff, 0.35)
  private ground: THREE.Mesh
  private arrow = new THREE.ArrowHelper()
  private guide: THREE.Line
  private rt = new THREE.WebGLRenderTarget(TILE, TILE)
  private cam: CameraState = { yawDeg: 0, pitchDeg: 12, orthoScale: 1, offsetX: 0, offsetY: 0, objYawDeg: 0, objPitchDeg: 0, objRollDeg: 0, locked: false }
  private lightCfg = { azimuthDeg: -35, elevationDeg: 55, intensity: 1, ambient: 0.35, shadowEnabled: true, shadowStrength: 0.55, shadowSoftness: 0.5 }
  private container: HTMLElement | null = null
  private ro: ResizeObserver | null = null
  private objectMats: THREE.Material[] = []

  constructor() {
    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, preserveDrawingBuffer: true })
    this.renderer.setPixelRatio(1)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.camera = new THREE.OrthographicCamera(-16, 16, 16, -16, 0.1, 400)
    this.scene.add(this.group, this.sun, this.sun.target, this.ambient, this.arrow)

    const groundGeo = new THREE.PlaneGeometry(TILE * 2, TILE * 2)
    groundGeo.rotateX(-Math.PI / 2)
    this.ground = new THREE.Mesh(groundGeo, new THREE.ShadowMaterial({ opacity: 0.55 }))
    this.ground.receiveShadow = true
    this.ground.position.set(16, 0, 16)
    this.scene.add(this.ground)

    // ground guide: light direction projected onto the ground plane
    const ggeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()])
    this.guide = new THREE.Line(ggeo, new THREE.LineBasicMaterial({ color: 0xfbf236 }))
    this.scene.add(this.guide)

    this.sun.castShadow = true
    this.sun.shadow.mapSize.set(1024, 1024)
    const sc = this.sun.shadow.camera
    sc.left = -28; sc.right = 28; sc.top = 28; sc.bottom = -28; sc.far = 200
    this.sun.shadow.bias = -0.002
    this.applyLight()
    this.applyCamera()
  }

  mount(el: HTMLElement) {
    this.container = el
    el.appendChild(this.renderer.domElement)
    this.ro = new ResizeObserver(() => this.resize())
    this.ro.observe(el)
    this.resize()
  }

  unmount() {
    this.ro?.disconnect()
    this.ro = null
    if (this.renderer.domElement.parentElement === this.container)
      this.container?.removeChild(this.renderer.domElement)
    this.container = null
  }

  dispose() {
    this.unmount()
    this.rt.dispose()
    this.renderer.dispose()
  }

  resize() {
    if (!this.container) return
    const w = this.container.clientWidth, h = this.container.clientHeight
    this.renderer.setSize(w, h, false)
    // fit the 32-unit square tile inside the widget
    const aspect = w / h
    const half = 16 * this.cam.orthoScale
    if (aspect >= 1) this.setFrustum(-half * aspect, half * aspect, half, -half)
    else this.setFrustum(-half, half, half / aspect, -half / aspect)
    this.renderOnce()
  }

  private setFrustum(l: number, r: number, t: number, b: number) {
    this.camera.left = l; this.camera.right = r; this.camera.top = t; this.camera.bottom = b
    this.camera.updateProjectionMatrix()
  }

  setForm(form: FormData | null) {
    this.group.clear()
    this.objectMats = []
    if (form) {
      for (const m of form.meshes) {
        // vertices are in world coords; re-center on the tile so object
        // rotation pivots around the tile center, not the origin
        const shifted = m.positions.map((v) => v - 16)
        const geo = new THREE.BufferGeometry()
        geo.setAttribute("position", new THREE.Float32BufferAttribute(shifted, 3))
        geo.setIndex(m.faces.flat())
        geo.computeVertexNormals()
        const mat = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true })
        const mesh = new THREE.Mesh(geo, mat)
        mesh.castShadow = true
        mesh.receiveShadow = false
        this.objectMats.push(mat)
        this.group.add(mesh)
      }
    }
    this.renderOnce()
  }

  setGroundY(y: number) {
    this.ground.position.y = y
    this.renderOnce()
  }

  setLight(l: LightSettings) {
    this.lightCfg = { ...l }
    this.applyLight()
    this.renderOnce()
  }

  setCamera(c: CameraState) {
    this.cam = { ...c }
    this.applyCamera()
    this.resize()
  }

  getCamera(): CameraState {
    return { ...this.cam }
  }

  private lightDir(): THREE.Vector3 {
    const az = THREE.MathUtils.degToRad(this.lightCfg.azimuthDeg)
    const el = THREE.MathUtils.degToRad(this.lightCfg.elevationDeg)
    // direction TOWARD the light
    return new THREE.Vector3(
      Math.cos(el) * Math.sin(az),
      Math.sin(el),
      Math.cos(el) * Math.cos(az),
    )
  }

  private applyLight() {
    const d = this.lightDir()
    this.sun.position.copy(CENTER).addScaledVector(d, 80)
    this.sun.target.position.copy(CENTER)
    this.sun.intensity = this.lightCfg.intensity
    this.sun.castShadow = this.lightCfg.shadowEnabled
    this.sun.shadow.radius = 1 + this.lightCfg.shadowSoftness * 8
    this.ambient.intensity = this.lightCfg.ambient
    ;(this.ground.material as THREE.ShadowMaterial).opacity = this.lightCfg.shadowStrength

    // gizmo: arrow from center toward the light
    this.arrow.position.copy(CENTER)
    this.arrow.setDirection(d)
    this.arrow.setLength(14, 3, 2)
    this.arrow.setColor(new THREE.Color(0xfbf236))

    // ground guide: where the shadow should fall (opposite light, on y plane)
    const base = new THREE.Vector3(CENTER.x, this.ground.position.y + 0.05, CENTER.z)
    const flat = new THREE.Vector3(-d.x, 0, -d.z)
    if (flat.lengthSq() > 1e-6) flat.normalize()
    const tip = base.clone().addScaledVector(flat, 12)
    this.guide.geometry.setFromPoints([base, tip])
  }

  private applyCamera() {
    const c = this.cam
    const yaw = THREE.MathUtils.degToRad(c.yawDeg)
    const pitch = THREE.MathUtils.degToRad(c.pitchDeg)
    const dist = 120
    const pos = new THREE.Vector3(
      Math.cos(pitch) * Math.sin(yaw),
      Math.sin(pitch),
      Math.cos(pitch) * Math.cos(yaw),
    ).multiplyScalar(dist).add(new THREE.Vector3(16 + c.offsetX, 16 + c.offsetY, 16))
    this.camera.position.copy(pos)
    this.camera.up.set(0, 1, 0)
    this.camera.lookAt(16 + c.offsetX, 16 + c.offsetY, 16)
    this.group.rotation.set(
      THREE.MathUtils.degToRad(c.objPitchDeg),
      THREE.MathUtils.degToRad(c.objYawDeg),
      THREE.MathUtils.degToRad(c.objRollDeg),
    )
    this.group.position.copy(CENTER)
  }

  renderOnce() {
    this.renderPasses(false)
  }

  /** Camera looks down -z of its local frame; project the light direction
   * onto the camera plane for edge-highlight math (screen y is down). */
  lightScreenDir(): { x: number; y: number } {
    const d = this.lightDir()
    const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 0)
    const up = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 1)
    return { x: d.dot(right), y: -d.dot(up) }
  }

  private renderPasses(capture: boolean): Render32Result | null {
    const prevTarget = this.renderer.getRenderTarget()
    const gizmoVisible = !capture
    this.arrow.visible = gizmoVisible
    this.guide.visible = gizmoVisible
    if (!capture) {
      this.ground.visible = true
      this.renderer.setRenderTarget(null)
      this.renderer.render(this.scene, this.camera)
      this.renderer.setRenderTarget(prevTarget)
      return null
    }
    // Pass A: object only (transparent background)
    this.ground.visible = false
    this.renderer.setRenderTarget(this.rt)
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
    const rgba = new Uint8Array(TILE * TILE * 4)
    this.renderer.readRenderTargetPixels(this.rt, 0, 0, TILE, TILE, rgba)
    // Pass B: shadow layer — ground ShadowMaterial visible, object hidden via
    // colorWrite=false (material.visible=false would also remove it from the
    // shadow map, so nothing would cast).
    this.ground.visible = true
    for (const m of this.objectMats) (m as THREE.Material).colorWrite = false
    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
    const shadowPx = new Uint8Array(TILE * TILE * 4)
    this.renderer.readRenderTargetPixels(this.rt, 0, 0, TILE, TILE, shadowPx)
    const shadowAlpha = new Uint8Array(TILE * TILE)
    for (let i = 0; i < TILE * TILE; i++) shadowAlpha[i] = shadowPx[i * 4 + 3]
    // restore
    for (const m of this.objectMats) (m as THREE.Material).colorWrite = true
    this.arrow.visible = true
    this.guide.visible = true
    this.renderer.setRenderTarget(prevTarget)
    this.renderer.setRenderTarget(null)
    this.renderer.render(this.scene, this.camera)
    return { rgba, shadowAlpha, lightScreen: this.lightScreenDir() }
  }

  /** Render the locked camera view into 32x32 (spec §8). */
  renderSprite32(): Render32Result | null {
    if (!this.objectMats.length) return null
    // square frustum: the 32-unit tile exactly fills the frame
    this.setFrustum(-16 * this.cam.orthoScale, 16 * this.cam.orthoScale, 16 * this.cam.orthoScale, -16 * this.cam.orthoScale)
    const res = this.renderPasses(true)
    this.resize() // restore widget frustum + repaint
    return res
  }
}
