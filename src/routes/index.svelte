<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
		import FeatureCardGrid from '$lib/feature-card-grid/FeatureCardGrid.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<FeatureCardGrid />
</section>

<style>
</style>
