import { fileExecutor } from "./file_executor"
import { systemExecutor } from "./system_executor"

export function execute(intent: any) {
  switch (intent.name) {
    case "FILE_CREATE":
      return fileExecutor.create(intent.entities)

    case "FILE_DELETE":
      return fileExecutor.delete(intent.entities)

    default:
      return {
        success: false,
        message: "Intent não suportada ainda"
      }
  }
}