<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import ItemGrid from '$lib/ItemGrid.svelte';
	import PhotoThumbnail from '$lib/PhotoThumbnail.svelte';
    
	const items = [
		{ imageUrl: '/photos/photo-airplane-trip.jpeg' },
		{ imageUrl: '/photos/photo-lambertville-river.jpeg' },
        { imageUrl: '/photos/photo-boston-building.jpeg' },
        { imageUrl: '/photos/photo-boston-downtown.jpeg' },
        { imageUrl: '/photos/photo-lambertville-river.jpeg' },
        { imageUrl: '/photos/photo-airplane-trip.jpeg' },
        { imageUrl: '/photos/photo-boston-building.jpeg' },
        { imageUrl: '/photos/photo-boston-downtown.jpeg' },
        { imageUrl: '/photos/photo-airplane-trip.jpeg' },
	];
</script>

<svelte:head>
	<title>Photos | rustbinaries.com</title>
</svelte:head>

<section>
	<ItemGrid component={PhotoThumbnail} items={items} />
</section>

<style>
	section {
		margin-top: 49px;
	}
</style>
