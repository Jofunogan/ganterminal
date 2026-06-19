import { normalizeInput } from "./normalizer"
import { detectIntent } from "./intent_engine"
import { route } from "./router"
import { updateState } from "./state_manager"
import { execute } from "../executor/action_executor"

export function run(input: string) {
  const normalized = normalizeInput(input)

  const intent = detectIntent(normalized)

  const module = route(intent.name)

  const result = execute(intent)

  updateState({
    lastIntent: intent.name
  })

  return {
    intent,
    module,
    result
  }
}