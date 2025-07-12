import { publicClient } from '../../config/wallet';
import { type Address, type WalletClient, parseSignature } from 'viem';
import { waitForTransactionReceipt } from './torus';

// ERC20 Permit ABI (EIP-2612)
const erc20PermitAbi = [
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'address', name: 'spender', type: 'address' },
			{ internalType: 'uint256', name: 'value', type: 'uint256' },
			{ internalType: 'uint256', name: 'deadline', type: 'uint256' },
			{ internalType: 'uint8', name: 'v', type: 'uint8' },
			{ internalType: 'bytes32', name: 'r', type: 'bytes32' },
			{ internalType: 'bytes32', name: 's', type: 'bytes32' }
		],
		name: 'permit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

export interface PermitData {
	owner: Address;
	spender: Address;
	value: bigint;
	nonce: bigint;
	deadline: bigint;
}

export async function executePermit(
	token: Address,
	permit: PermitData,
	permitSignature: `0x${string}`,
	wallet: WalletClient
): Promise<string> {
	const { r, s, v, yParity } = parseSignature(permitSignature);

	console.log(
		JSON.stringify({
			owner: permit.owner,
			spender: permit.spender,
			nonce: permit.nonce.toString(),
			value: permit.value.toString(),
			deadline: permit.deadline.toString()
		})
	);

	const txHash = await wallet.writeContract({
		address: token,
		abi: erc20PermitAbi,
		functionName: 'permit',
		args: [permit.owner, permit.spender, permit.value, permit.deadline, v, r, s],
		account: wallet.account ?? permit.owner,
		chain: null
	});

	console.log('permit Tx', txHash);
	// console.log("permit", permit)

	// Use type assertion to fix the type incompatibility with publicClient
	await waitForTransactionReceipt(publicClient as any, txHash, 1);
	return txHash;
}
