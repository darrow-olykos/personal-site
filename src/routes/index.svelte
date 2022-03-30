<script context="module" lang="ts">
	export const prerender = true;
	export async function load() {
        return {
            status: 302,
            redirect: "/resume"
        };
    }
</script>

<script lang="ts">
	import FeatureCardGrid from '$lib/feature-card-grid/FeatureCardGrid.svelte';
</script>

<svelte:head>
	<title>Home | rustbinaries.com</title>
</svelte:head>

<section>
	<FeatureCardGrid />
</section>

<style>
	section {
		margin-top: 49px;
	}
</style>
