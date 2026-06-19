import fs from "fs"

export const FileActions = {
  create(name: string) {
    fs.writeFileSync(name, "")
    return `Arquivo ${name} criado`
  },

  delete(name: string) {
    fs.unlinkSync(name)
    return `Arquivo ${name} deletado`
  }
}