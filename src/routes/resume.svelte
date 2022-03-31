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

	const RESUME_FILE_NAME = 'no_number_chris_dillinger_resume.pdf';
	const RESUME_PATH = '/' + RESUME_FILE_NAME;
</script>

<svelte:head>
	<title>Resume | rustbinaries.com</title>
</svelte:head>

<section>
	<h3>My Philosophy</h3>
	<ul>
		<li>Ask questions with forethought and humility.</li>
		<li>Consider my coworkers and I to be in collaborative intellectual pursuit.</li>
		<li>Work hard, but remain light-hearted.</li>
		<li>Pay it forward.</li>
		<li>
			When in doubt, gain inspiration from <a
				target="_blank"
				rel="noopener noreferrer"
				href="https://cloud.google.com/architecture/devops/devops-culture-westrum-organizational-culture"
				>Westrum Organizational Culture</a
			>.
		</li>
	</ul>
	<svelte:component this={PdfViewer} url={RESUME_PATH} scale={1} />
	<br />
	Click <a href={RESUME_PATH} download={RESUME_FILE_NAME}>here</a> to download.
</section>

<style>
	section {
		margin-top: 49px;
	}

	li {
		margin-left: 36px;
	}
</style>
