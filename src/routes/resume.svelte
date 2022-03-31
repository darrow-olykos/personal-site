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
	Click <a href="/no_number_chris_dillinger_resume.pdf" download="no_number_chris_dillinger_resume">here</a> to download resume.
	<svelte:component this={PdfViewer} url="/no_number_chris_dillinger_resume.pdf" />
	(The PDF Renderer I'm using does not render in mobile browser)
</section>

<style>
	section {
		margin-top: 49px;
	}
</style>
