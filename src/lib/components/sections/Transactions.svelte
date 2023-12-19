<script lang="ts">
	import { manageTransactions } from '$lib/scripts/transactions';
	import { manageUsers } from '$lib/scripts/users';
	let openCreateTransaction = false;
	import CreateTransaction from '../CreateTransaction.svelte';
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-row items-center gap-4">
		<h2 class="text-2xl font-bold">Transactions</h2>
		<button
			class="text-black bg-white rounded-full w-7 h-7"
			on:click={() => (openCreateTransaction = !openCreateTransaction)}
		>
			+
		</button>
	</div>

	<div class="flex flex-col gap-2">
		{#each $manageTransactions as transaction}
			<div class="flex flex-col flex-wrap p-2 bg-gray-600 rounded-md">
				<div class="flex flex-row">
					<p class="w-1/3">Event: {transaction.name}</p>
					<p class="w-1/3">Bill: ${transaction.amount}</p>
					<div class=" w1/3">
						{#each $manageUsers as user}
							{#if transaction.payer_id === user.id}
								<p>
									Paid by: <span class="text-system-primary">{user.name}</span>
								</p>
							{/if}
						{/each}
					</div>
				</div>
				<div class="flex flex-row items-center gap-2">
					<p>Paid for:</p>
					<div class="flex flex-row gap-4">
						{#each $manageUsers as user}
							{#if transaction.debter_ids.includes(user.id)}
								<p class="p-2 rounded-md bg-system-primary">
									{user.name}
								</p>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
{#if openCreateTransaction}
	<CreateTransaction on:close={() => (openCreateTransaction = !openCreateTransaction)} />
{/if}
