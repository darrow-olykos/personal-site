<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	let PdfViewer;

	onMount(async () => {
		// polyfill structuredClone which does not exist on safari
		const structuredCloneModule = await import('@ungap/structured-clone');
		window.structuredClone = structuredCloneModule.default;
		const module = await import('svelte-pdf');
		PdfViewer = module.default;
	});

	const RESUME_FILE_NAME = 'no_number_chris_dillinger_resume_latest.pdf';
	const RESUME_PATH = '/' + RESUME_FILE_NAME;
</script>

<svelte:head>
	<title>Resume | rustbinaries.com</title>
</svelte:head>

<section>
	<svelte:component this={PdfViewer} url={RESUME_PATH} />
	Click <a href={RESUME_PATH} download={RESUME_FILE_NAME}>here</a> to download.
</section>

<style>
	section {
		margin-top: 49px;
	}
</style>
