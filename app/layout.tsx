import "@/app/global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import { OPENAI_URL } from "@/config"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Unreal OpenAI Documentation",
  description: "Documentation for Unreal OpenAI API (OpenAI SDK compatible)",
  metadataBase: new URL(OPENAI_URL),
  openGraph: {
    title: "Unreal OpenAI Documentation",
    description: "Documentation for Unreal OpenAI API (OpenAI SDK compatible)",
    images: ["https://docs.unreal.art/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unreal OpenAI Documentation",
    description: "Documentation for Unreal OpenAI API (OpenAI SDK compatible)",
    images: ["/logo.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
