import type { PublicClient } from 'viem';

// Use a more flexible type to accommodate different client configurations
export async function waitForTransactionReceipt(
	client: Pick<PublicClient, 'waitForTransactionReceipt'>,
	txHash: `0x${string}`,
	confirmations?: number
) {
	const receipt = await client.waitForTransactionReceipt({
		hash: txHash,
		confirmations: confirmations ?? 1
	});
	return receipt;
}
