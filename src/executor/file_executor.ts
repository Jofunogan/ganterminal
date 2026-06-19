import fs from "fs"

export const fileExecutor = {
  create(entities: any) {
    const name = entities?.name || "file.txt"

    try {
      fs.writeFileSync(name, "")
      return {
        success: true,
        message: `Arquivo ${name} criado`
      }
    } catch (err: any) {
      return {
        success: false,
        message: err.message
      }
    }
  },

  delete(entities: any) {
    const name = entities?.name

    if (!name) {
      return { success: false, message: "Nome não fornecido" }
    }

    try {
      fs.unlinkSync(name)
      return {
        success: true,
        message: `Arquivo ${name} deletado`
      }
    } catch (err: any) {
      return {
        success: false,
        message: err.message
      }
    }
  }
}