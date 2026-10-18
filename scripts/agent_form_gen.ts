// Reference "external agent" for the sketch -> form contract (spec §5).
// Reads a sketch JSON file, validates it, produces a form JSON the app can
// import — no screenshots, no browser automation.
//
//   node scripts/agent_form_gen.ts sketch.json > form.json
//
// Node >= 23 runs TypeScript directly; imports resolve to the app's own
// contract modules, so the agent can never drift from the schema.
import { readFileSync } from "node:fs"
import { validateSketch, formToJson } from "../src/core/schemas.ts"
import { generateRock } from "../src/core/rockgen.ts"

const path = process.argv[2]
if (!path) {
  console.error("usage: node scripts/agent_form_gen.ts <sketch.json>")
  process.exit(2)
}

const obj = JSON.parse(readFileSync(path, "utf8"))
const { sketch, errors } = validateSketch(obj)
if (!sketch) {
  console.error(errors.join("\n"))
  process.exit(1)
}

// A real agent would reason about the sketch; for the contract demo the
// procedural loft stands in — depth is its judgment call, per the spec.
const form = generateRock(sketch, sketch.objectType || "rock")
process.stdout.write(JSON.stringify(formToJson(form), null, 2) + "\n")
