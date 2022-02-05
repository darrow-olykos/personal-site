<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

<section>
	<div class="upcoming-event">
		<img
			width="400px"
			src="/photos/photo-rust-ferris.jpeg"
			alt="ferris, the crab mascot of rust, painted in water-color"
			class="upcoming-event__icon"
		/>
		<div class="upcoming-event__group" />
		<div class="upcoming-event__datetime" />
		<div class="upcoming-event__name" />
		<div class="upcoming-event__share-button" />
	</div>
</section>

<style>
	.upcoming-event__icon {
		width: 100px;
		object-position: 100% 0;
	}

	section {
		margin-top: 49px;
	}
</style>
