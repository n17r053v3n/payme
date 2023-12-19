export interface User {
	name: string;
	id: number;
}
export interface Transaction {
	id: number;
	name: string;
	payer_id: number;
	debter_ids: number[];
	amount: number;
}

export interface Finals {
	user_id: number;
	balance: number;
}

export interface Payment {
	from_id: number;
	to_id: number;
	amount: number;
}
