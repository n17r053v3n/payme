import type { Transaction, User, Finals, Payment } from './types';

export default function getFinals(users: User[], transactions: Transaction[]) {
	// Balance
	const finals: Finals[] = [];
	// console.log(users, transactions);
	users.forEach((user) => {
		let userGets = 0;
		let userPays = 0;
		transactions
			.filter((element) => element.payer_id === user.id)
			.forEach((transaction) => {
				// console.log('pofilter', transaction);
				if (transaction.debter_ids.includes(transaction.payer_id)) {
					userGets +=
						transaction.amount *
						((transaction.debter_ids.length - 1) / transaction.debter_ids.length);
				} else {
					userGets += transaction.amount;
				}
			});
		transactions
			.filter((element) => element.debter_ids.includes(user.id) && element.payer_id !== user.id)
			.forEach((transaction) => {
				userPays += transaction.amount * (1 / transaction.debter_ids.length);
			});
		// console.log(user.name, 'pays: ', userPays, 'gets: ', userGets);
		// finals.push({ user_id: user.id, balance: userGets - userPays });
		finals.push({ user_id: user.id, balance: Math.round((userGets - userPays) * 10) / 10 });
	});

	// Payments
	const below: Finals[] = [];
	let over: Finals[] = [];
	let payments: Payment[] = [];
	finals.forEach((final) => {
		if (final.balance !== 0) {
			if (final.balance <= 0) {
				below.push(final);
			} else {
				over.push(final);
			}
		}
	});
	below.forEach((pays) => {
		let balance = pays.balance;
		console.log(balance);
		over.forEach((gets) => {
			if (balance !== 0) {
				console.log('pays, gets, payments', pays, gets, payments);
				if (gets.balance + balance === 0) {
					console.log('===');
					payments.push({
						from_id: pays.user_id,
						to_id: gets.user_id,
						amount: Math.round(balance * -10) / 10
					});
					over = over.filter((item) => item.user_id !== gets.user_id);
					balance = 0;
				} else if (gets.balance + balance > 0) {
					console.log('>');

					payments.push({
						from_id: pays.user_id,
						to_id: gets.user_id,
						amount: Math.round(balance * -10) / 10
					});
					over = [
						...over.filter((item) => item.user_id !== gets.user_id),
						{ user_id: gets.user_id, balance: gets.balance - balance }
					];
					balance = 0;
				} else {
					console.log('<');

					payments.push({
						from_id: pays.user_id,
						to_id: gets.user_id,
						amount: Math.round(gets.balance * 10) / 10
					});
					over = over.filter((item) => item.user_id !== gets.user_id);
					balance += gets.balance;
				}
			}
		});
		console.log(balance);
	});
	payments = payments.filter((item) => item.amount !== 0);

	return { finals, payments };
}
