export type Intent = {
  name: string
  confidence: number
  entities?: Record<string, any>
}

export type NormalizedInput = {
  text: string
}

export type State = {
  cwd: string
  lastIntent?: string
  sessionMode?: string
}