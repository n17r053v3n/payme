import { writable } from 'svelte/store';
import type { Transaction } from './types';
import { browser } from '$app/environment';

// const underConstruction = writable(boolean)

let transactions: Transaction[] = [];
let id = 0;
if (browser) {
	if (typeof localStorage.getItem('transactions') === 'string') {
		transactions = JSON.parse(localStorage.getItem('transactions') as string);
	}
	if (typeof localStorage.getItem('maxTransactionId') === 'string') {
		id = parseInt(localStorage.getItem('maxTransactionId') as string);
	}
}

const transactionFunc = () => {
	const { subscribe, set } = writable(transactions);

	return {
		subscribe,
		add: (payer_id: number, amount: number, debter_ids: number[], name: string) => {
			set((transactions = [...transactions, { id, name, payer_id, amount, debter_ids }]));
			id++;
			localStorage.setItem('transactions', JSON.stringify(transactions));
			localStorage.setItem('maxTransactionId', id.toString());
		},
		clear: () => {
			set((transactions = []));
			localStorage.removeItem('transactions');
		}
	};
};

export const manageTransactions = transactionFunc();
