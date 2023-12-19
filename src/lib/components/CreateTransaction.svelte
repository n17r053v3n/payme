<script lang="ts">
	import Modal from './Modal.svelte';
	import { manageTransactions } from '$lib/scripts/transactions';
	let name = '';
	let payer: number;
	let debters: number[] = [];
	let amount: number;
	$: console.log(debters);
	import { createEventDispatcher } from 'svelte';
	import { manageUsers } from '$lib/scripts/users';
	const dispatch = createEventDispatcher();
</script>

<Modal>
	<div class="bg-system-dark-900 w-[500px] rounded-xl relative">
		<form
			class="flex flex-col gap-4 p-10"
			on:submit|preventDefault={() => {
				manageTransactions.add(
					payer,
					amount,
					debters.sort(function (a, b) {
						return a - b;
					}),
					name
				);
				name = '';
				dispatch('close');
			}}
		>
			<h2 class="text-3xl">Create user</h2>
			<label class="flex flex-col">
				<span>Name</span>
				<input type="text" class="px-2 text-xl rounded-lg" bind:value={name} required />
			</label>
			<label class="flex flex-col">
				<span>Amount</span>
				<input type="number" class="px-2 text-xl rounded-lg" bind:value={amount} required />
			</label>
			<label class="flex flex-col gap-1">
				<span>Who paid</span>
				<input type="text" class="hidden px-2 text-xl rounded-lg" bind:value={payer} required />
				<div class="flex flex-row gap-2 select-none">
					{#each $manageUsers as user}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							class="p-2 rounded-md {payer === user.id ? 'bg-white' : 'bg-system-primary'}"
							on:click={() => {
								payer = user.id;
								debters = [...debters, user.id];
							}}
						>
							<p class={payer === user.id ? 'text-system-primary' : ''}>{user.name}</p>
						</div>
					{/each}
				</div>
			</label>
			<label class="flex flex-col gap-1">
				<span>Paid for</span>
				<input type="text" class="hidden px-2 text-xl rounded-lg" bind:value={debters} required />
				<div class="flex flex-row gap-2 select-none">
					{#each $manageUsers as user}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							class="p-2 rounded-md {debters.includes(user.id) ? 'bg-white' : 'bg-system-primary'}"
							on:click={() => {
								if (debters.includes(user.id)) {
									debters = debters.filter((item) => item !== user.id);
								} else {
									debters = [...debters, user.id];
								}
							}}
						>
							<p class={debters.includes(user.id) ? 'text-system-primary' : ''}>{user.name}</p>
						</div>
					{/each}
				</div>
			</label>
			<button type="submit" class="w-full px-4 py-2 bg-system-primary rounded-xl">Save</button>
		</form>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="absolute flex items-center justify-center rounded-full cursor-pointer w-7 h-7 bg-system-red top-5 right-5"
			on:click={() => dispatch('close')}
		>
			X
		</div>
	</div>
</Modal>
