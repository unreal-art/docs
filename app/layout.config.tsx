"use client";

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import Image from "next/image"
import { WalletButton } from "@/components/wallet/WalletButton"

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src="/logo.webp" alt="Logo" width={24} height={24} />
        Unreal OpenAI Router
      </>
    ),
    children: <div className="ml-auto"><WalletButton /></div>,
  },
  githubUrl: "https://github.com/unreal-art",

  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
}
