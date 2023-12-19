<script lang="ts">
	import '../app.postcss';
	import '$lib/styles/css-reset.css';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />
<div class="pt-14">
	<slot />
</div>
