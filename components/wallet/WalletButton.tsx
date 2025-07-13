"use client";

import React from 'react';
import { useApi } from '@/lib/ApiContext';

export function WalletButton() {
  const {
    isAuthenticated,
    isLoading,
    walletAddress,
    openaiAddress,
    connectWallet,
    disconnectWallet,
    registerWithWallet
  } = useApi();

  const handleConnect = async () => {
    try {
      await connectWallet();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectWallet();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  const handleRegister = async () => {
    try {
      // Default to 0 calls for registration
      await registerWithWallet(0);
    } catch (error) {
      console.error('Failed to register:', error);
    }
  };

  // Brand palette
const PRIMARY_COLOR = '#10b981'   // emerald
const SECONDARY_COLOR = '#6b7280' // gray-600
const DISABLED_COLOR = '#9ca3af'  // gray-400
const SUCCESS_COLOR = '#22c55e'   // green-500

const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontWeight: 500,
    marginLeft: '0.5rem',
    cursor: 'pointer',
    backgroundColor: PRIMARY_COLOR,
    color: 'white',
    border: 'none',
    transition: 'background-color 0.2s',
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: SECONDARY_COLOR,
  };

  const disabledStyle = {
    ...buttonStyle,
    backgroundColor: DISABLED_COLOR,
    cursor: 'not-allowed',
  };

  const outlineStyle = {
    ...buttonStyle,
    backgroundColor: SUCCESS_COLOR,
    border: 'none',
    color: 'white',
  };

  const containerStyle = {
    display: 'flex',
    gap: '0.5rem',
  };

  if (isLoading) {
    return <button disabled style={disabledStyle}>Loading...</button>;
  }

  // Connected to wallet but not authenticated
  if (walletAddress && !isAuthenticated) {
    return (
      <div style={containerStyle}>
        <button onClick={handleRegister} style={buttonStyle}>
          Register
        </button>
        <button onClick={handleDisconnect} style={secondaryButtonStyle}>
          Disconnect
        </button>
      </div>
    );
  }

  // Connected and authenticated
  if (walletAddress && isAuthenticated) {
    return (
      <div style={containerStyle}>
        <button disabled style={outlineStyle}>
          Connected
        </button>
        <button onClick={handleDisconnect} style={secondaryButtonStyle}>
          Disconnect
        </button>
      </div>
    );
  }

  // Not connected
  return (
    <button onClick={handleConnect} style={buttonStyle}>
      Connect Wallet
    </button>
  );
}
