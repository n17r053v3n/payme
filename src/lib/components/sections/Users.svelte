<script lang="ts">
	import { manageUsers } from '$lib/scripts/users';
	import CreateUser from '../CreateUser.svelte';
	let openCreateUser = false;
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-row items-center gap-4">
		<h2 class="text-2xl font-bold">Users</h2>
		<button
			class="text-black bg-white rounded-full w-7 h-7"
			on:click={() => (openCreateUser = !openCreateUser)}
		>
			+
		</button>
	</div>
	<div class="flex flex-row flex-wrap gap-2">
		{#each $manageUsers as user}
			<p class="p-2 bg-gray-600 rounded-md">{user.name}</p>
		{/each}
	</div>
</div>
{#if openCreateUser}
	<CreateUser on:close={() => (openCreateUser = !openCreateUser)} />
{/if}
