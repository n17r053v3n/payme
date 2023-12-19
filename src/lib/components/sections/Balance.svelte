<script lang="ts">
	import type { Finals, Payment } from '$lib/scripts/types';
	import getFinals from '$lib/scripts/calculate';
	import { manageTransactions } from '$lib/scripts/transactions';
	import { manageUsers } from '$lib/scripts/users';

	let debts;
	let finals: Finals[];
	let payments: Payment[];
	$: $manageTransactions,
		(debts = getFinals($manageUsers, $manageTransactions)),
		(finals = debts.finals),
		(payments = debts.payments);
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col gap-2">
		<h2 class="text-2xl font-bold">Balance</h2>
		{#each $manageUsers as user}
			<div class="flex flex-row justify-between w-full p-2 bg-gray-600 rounded-md">
				<p>{user.name}</p>
				<p>
					${finals.find((item) => item.user_id === user.id)?.balance}
				</p>
			</div>
		{/each}
	</div>
	<div>
		<div class="flex flex-col gap-2">
			<h2 class="text-2xl font-bold">Who pays who</h2>
			{#each payments as payment}
				<div class="flex flex-row justify-start w-full gap-4 p-2 bg-gray-600 rounded-md">
					<p>{$manageUsers.find((item) => item.id === payment.from_id)?.name}</p>
					<p>--></p>
					<p>{$manageUsers.find((item) => item.id === payment.to_id)?.name}</p>
					<p class="ml-auto">${payment.amount}</p>
				</div>
			{/each}
		</div>
	</div>
	<button on:click={() => manageTransactions.clear()} class="p-2 rounded-md bg-system-primary"
		>Settle up</button
	>
</div>
