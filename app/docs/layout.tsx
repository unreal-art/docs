"use client";

import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import { WalletButton } from '@/components/wallet/WalletButton';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  // Use the actual docs tree from source.pageTree (first value) or fallback
  const docsTree = Object.values(source.pageTree)[0] ?? { name: 'docs', children: [] };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', top: 16, right: 24, zIndex: 1000 }}>
        <WalletButton />
      </div>
      <DocsLayout tree={docsTree} {...baseOptions}>
        {children}
      </DocsLayout>
    </div>
  );
}
