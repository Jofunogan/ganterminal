import { executeCommand } from "../executor/command_executor"

export function run(input: string): string {
  if (!input) return ""

  const [cmd, ...args] = input.split(" ")

  return executeCommand(cmd, args)
}