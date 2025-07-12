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

  const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontWeight: 500,
    marginLeft: '0.5rem',
    cursor: 'pointer',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    transition: 'background-color 0.2s',
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4b5563',
  };

  const disabledStyle = {
    ...buttonStyle,
    backgroundColor: '#94a3b8',
    cursor: 'not-allowed',
  };

  const outlineStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    border: '1px solid #d1d5db',
    color: '#1f2937',
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
