<script lang="ts">
	import CreateTransaction from '$lib/components/CreateTransaction.svelte';
	import CreateUser from '$lib/components/CreateUser.svelte';
	import Transactions from '$lib/components/sections/Transactions.svelte';
	import Users from '$lib/components/sections/Users.svelte';
	import { manageTransactions } from '$lib/scripts/transactions';
	import { manageUsers } from '$lib/scripts/users';
	import getFinals from '$lib/scripts/calculate';
	import type { Finals } from '$lib/scripts/types';
	import Balance from '$lib/components/sections/Balance.svelte';

	// $: console.log($manageUsers);
	// $: console.log($manageTransactions);
</script>

<div class="flex flex-row gap-4 pt-8 px-wrap2xl">
	<div class="flex flex-col w-1/3 gap-4">
		<Users />
		<Balance />
	</div>
	<div class="w-2/3">
		<Transactions />
	</div>
</div>
