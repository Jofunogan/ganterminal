export function normalizeInput(input: string) {
  return {
    text: input.trim().toLowerCase()
  }
}