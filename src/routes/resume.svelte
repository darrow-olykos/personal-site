<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	let PdfViewer;

	onMount(async () => {
		const module = await import('svelte-pdf');
		PdfViewer = module.default;
	});
</script>

<svelte:head>
	<title>Resume | rustbinaries.com</title>
</svelte:head>

<section>
	<svelte:component this={PdfViewer} url="/no_number_chris_dillinger_resume.pdf" />
</section>

<style>
	section {
		margin-top: 49px;
	}
</style>
