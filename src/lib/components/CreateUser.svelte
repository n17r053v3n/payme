<script lang="ts">
	import Modal from './Modal.svelte';
	import { manageUsers } from '$lib/scripts/users';
	let newUsername = '';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<Modal>
	<div class="bg-system-dark-900 w-[500px] rounded-xl relative">
		<form
			class="flex flex-col gap-4 p-10"
			on:submit|preventDefault={() => {
				manageUsers.add(newUsername);
				newUsername = '';
				dispatch('close');
			}}
		>
			<h2 class="text-3xl">Create user</h2>
			<label for="name" class="flex flex-col">
				<span>username</span>
				<input type="text" class="px-2 text-xl rounded-lg" bind:value={newUsername} required />
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
