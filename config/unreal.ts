import { parseEther, type Address } from "viem"
export const UNREAL_AMOUNT = parseEther(`${1}`)
import axios from "axios"

export const UNREAL_ADDRESS =
  "0xA409B5E5D34928a0F1165c7a73c8aC572D1aBCDB".toLowerCase() as unknown as Address

export const OPENAI_URL =
  process.env.NEXT_PUBLIC_OPENAI_URL || "https://openai.ideomind.org"

export const OPENAI_BASE_URL =
  process.env.NEXT_PUBLIC_OPENAI_BASE_URL || "https://openai.ideomind.org/v1"

console.log("OPENAI_URL", OPENAI_URL)
console.log("OPENAI_BASE_URL", OPENAI_BASE_URL)

export const openaiClient = axios.create({
  baseURL: OPENAI_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})
openaiClient.defaults.withCredentials = true

// Cookie is already set for authentication, no need for Authorization header
openaiClient.interceptors.request.use((config) => {
  // No need to add Authorization header as cookie is already set
  return config
})
