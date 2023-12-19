<script lang="ts">
	import Transactions from '$lib/components/sections/Transactions.svelte';
	import Users from '$lib/components/sections/Users.svelte';

	import Balance from '$lib/components/sections/Balance.svelte';
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

<svelte:head><title>Payme</title></svelte:head>
