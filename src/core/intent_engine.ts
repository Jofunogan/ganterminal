import { NormalizedInput, Intent } from "./types"

export function detectIntent(input: NormalizedInput): Intent {
  const text = input.text

  if (text.includes("arquivo") && text.includes("criar")) {
    return {
      name: "FILE_CREATE",
      confidence: 0.9,
      entities: {
        name: extractFileName(text)
      }
    }
  }

  return {
    name: "UNKNOWN",
    confidence: 0.5
  }
}

function extractFileName(text: string) {
  const parts = text.split(" ")
  return parts[parts.length - 1] || "file.txt"
}