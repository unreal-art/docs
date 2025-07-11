"use client";

import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
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

  return <HomeLayout {...updatedOptions}>{children}</HomeLayout>;
}
