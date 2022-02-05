<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
	import shareFill from '@iconify/icons-eva/share-fill';
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

<section>
	<div class="upcoming-event">
		<h2 class="upcoming-event__header">Next Event</h2>
		<img
			src="/photos/photo-rust-ferris.jpeg"
			alt="ferris, the crab mascot of rust, painted in water-color"
			class="upcoming-event__icon"
		/>
		<div class="upcoming-event__group">DC Rust Book Club</div>
		<div class="upcoming-event__datetime">Thursday, Feb 10th, @7:00pm</div>
		<div class="upcoming-event__name">DC Rust Book Club: Rust for Rustaceans</div>
		<div class="upcoming-event__share-button">
			<Icon icon={shareFill} />
		</div>
	</div>
</section>

<style>
	.upcoming-event__icon {
		height: 100px;
		width: 100px;
		object-fit: cover;
		object-position: 100% -15px;
	}

	section {
		margin-top: 49px;
	}
</style>
