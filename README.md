# Unreal OpenAI Documentation

**Interactive API Documentation & Integration Guide**

This repository contains the official documentation for Unreal's OpenAI-compatible API. Built with Next.js and Fumadocs, it provides comprehensive guides, API references, and code examples for developers integrating with Unreal's AI services.

> 📚 The definitive resource for integrating with Unreal's OpenAI-compatible endpoints

---

## ✨ Key Features

• **Interactive API Explorer** – Test API endpoints directly in the browser
• **OpenAI SDK Compatibility** – Complete guides for using the standard OpenAI SDK
• **Code Examples** – Ready-to-use snippets in multiple languages
• **Authentication Guides** – Detailed wallet-based auth workflows
• **OpenAPI Specification** – Auto-generated from the latest API schema
• **Responsive Design** – Optimized for both desktop and mobile viewing

---

## 🗺️ Documentation Structure

```
docs/
├─ content/
│  ├─ docs/
│  │  ├─ index.mdx           # Main landing page
│  │  ├─ api/                # API reference documentation
│  │  └─ guides/             # Integration guides and tutorials
├─ app/                      # Next.js application
├─ components/               # Reusable UI components
├─ lib/                      # Utility functions and API client
└─ scripts/                  # Documentation generation scripts
```

---

## 📑 Content Sections

| Section | Description |
|---------|-------------|
| Getting Started | Quick setup guide for new developers |
| API Reference | Comprehensive endpoint documentation |
| Authentication | Wallet connection and API key management |
| Code Examples | Implementation samples in multiple languages |
| Advanced Features | Complex integration patterns and optimizations |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Documentation**: Fumadocs (MDX-based documentation)
- **API Specs**: OpenAPI/Swagger integration
- **Styling**: Tailwind CSS
- **Syntax Highlighting**: Shiki
- **Interactive Examples**: React components

---

## 🧩 Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build static documentation
bun run build

# Generate API docs from OpenAPI spec
bun run gen:docs
```

---

## 🔄 Documentation Updates

The documentation is automatically generated from:

1. **MDX Content** – Hand-crafted guides and explanations
2. **OpenAPI Schema** – API endpoints and parameters
3. **Code Examples** – Regularly tested against the live API

Updates to the OpenAI Router are automatically reflected in the documentation through CI/CD pipelines.

---

## 🌐 Deployment

The documentation is deployed at [docs.unreal.art/api](https://docs.unreal.art/api) and is automatically updated when changes are pushed to the main branch.

---

## 📜 License

MIT © Unreal AI contributors
