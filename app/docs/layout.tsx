"use client";

import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
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

  return (
    <DocsLayout tree={source.pageTree} {...updatedOptions}>
      {children}
    </DocsLayout>
  );
}
