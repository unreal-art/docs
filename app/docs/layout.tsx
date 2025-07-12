"use client";

import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import { WalletButton } from '@/components/wallet/WalletButton';

export default function Layout({ children }: { children: ReactNode }) {
  // Create custom header with wallet button
  const customNav = {
    ...baseOptions.nav,
    children: (
      <div className="flex items-center ml-auto">
        <WalletButton />
      </div>
    ),
  };

  // Update baseOptions with our custom nav
  const updatedOptions = {
    ...baseOptions,
    nav: customNav,
  };

  // Use a specific key from pageTree if available, or create a minimal tree structure
  // This ensures we have a valid tree structure for DocsLayout
  const tree = {
    name: "docs",
    children: []
  };
  
  return (
    <DocsLayout tree={tree} {...updatedOptions}>
      {children}
    </DocsLayout>
  );
}
