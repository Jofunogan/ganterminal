import readline from "readline"
import { run } from "../core/engine"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "ganterminal> "
})

console.log("🚀 GanTerminal iniciado")
console.log("Digite seus comandos abaixo:\n")

rl.prompt()

rl.on("line", (input) => {
  const result = run(input)

  console.log("\n📦 Resultado:")
  console.log(result)

  rl.prompt()
})

rl.on("close", () => {
  console.log("\n👋 Encerrando GanTerminal...")
  process.exit(0)
})