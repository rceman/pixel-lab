<script setup lang="ts">
import { computed, onMounted } from "vue"
import { activeAsset, loadProject, store } from "./core/store"
import { hasRenderable } from "./core/pipeline"
import { Mode } from "./core/types"
import SceneView from "./components/SceneView.vue"
import SketchView from "./components/SketchView.vue"
import FormView from "./components/FormView.vue"
import LightView from "./components/LightView.vue"
import MaterialView from "./components/MaterialView.vue"
import SpriteView from "./components/SpriteView.vue"

onMounted(() => void loadProject())

const steps: { id: Mode; label: string }[] = [
  { id: "scene", label: "Scene" },
  { id: "sketch", label: "Sketch" },
  { id: "form", label: "3D Form" },
  { id: "light", label: "Light" },
  { id: "material", label: "Material" },
  { id: "sprite", label: "Sprite" },
]

function stepEnabled(id: Mode): boolean {
  const a = activeAsset()
  switch (id) {
    case "scene": return true
    case "sketch": return !!a
    case "form": return !!a
    case "light": return !!a && hasRenderable(a)
    case "material": return !!a && !!a.levels
    case "sprite": return !!a && !!a.levels
  }
}

function goto(id: Mode) {
  if (stepEnabled(id)) store.mode = id
}

const view = computed(() => ({
  scene: SceneView, sketch: SketchView, form: FormView,
  light: LightView, material: MaterialView, sprite: SpriteView,
}[store.mode]))
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <div class="app-title">Pixel Lab</div>
      <nav class="stepper">
        <button
          v-for="s in steps"
          :key="s.id"
          :class="{ current: store.mode === s.id }"
          :disabled="!stepEnabled(s.id)"
          @click="goto(s.id)"
        >{{ s.label }}</button>
      </nav>
    </header>
    <main class="app-main">
      <component :is="view" v-if="store.loaded" />
      <div v-else class="hint" style="padding: 24px">Loading…</div>
    </main>
  </div>
</template>
