<script lang="ts">
	import { slide } from 'svelte/transition';
	import DisableScroll from './DisableScroll.svelte';
	export let zindex = 40;
	export let delay = 0;
	// import Nav from './Nav.svelte';
	// export let ModalData:any
</script>

<div
	class="lg:px-wrap fixed top-14 left-0 flex bg-system-dark-900 bg-opacity-50 flex-col items-center justify-center px-4 h-[calc(100vh-3.5rem)] w-full z-{zindex}"
	transition:slide={{ delay: delay, duration: 300 }}
>
	<!-- <Nav pages{}/> -->
	<slot />
</div>

<DisableScroll />
