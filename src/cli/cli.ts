import readline from "readline"
import { run } from "../core/engine"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "ganterminal> "
})

console.log("🚀 GanTerminal iniciado")
console.log("Digite 'help' para ver comandos\n")

rl.prompt()

rl.on("line", (input) => {
  const result = run(input.trim())

  if (result === "__exit__") {
    rl.close()
    return
  }

  console.log(result)
  rl.prompt()
})

rl.on("close", () => {
  console.log("👋 Saindo do GanTerminal...")
  process.exit(0)
})