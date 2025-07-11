// Import defineConfig from fumadocs-mdx/config
import { defineConfig } from "fumadocs-mdx/config"

export default defineConfig({
  name: "OpenRouter AI Docs",
  description: "Documentation for OpenRouter AI API (OpenAI SDK compatible)",
  links: {
    github: "https://github.com/unreal-art", // Update with your actual GitHub repo
  },
  search: {
    includeHeadings: true,
  },
  rootDir: "content",
})
