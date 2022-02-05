<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
	import shareFill from '@iconify/icons-eva/share-fill.js';
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

<section>
	<div class="upcoming-event">
		<h3 class="upcoming-event__header">Next Event</h3>
		<div class="upcoming-event__details">
			<div class="upcoming-event__datetime">Thursday, Feb 10th, @7:00pm</div>

			<div class="upcoming-event__title-row">
				<div class="upcoming-event__title-container">
					<div class="upcoming-event__name">DC Rust Book Club: Rust for Rustaceans</div>
					<div class="upcoming-event__group">DC Rust</div>
				</div>
				<img
					class="upcoming-event__thumbnail"
					src="/photos/photo-rust-ferris.jpeg"
					alt="ferris, the crab mascot of rust, painted in water-color"
				/>
			</div>

			<div class="upcoming-event__share-button">
				<Icon icon={shareFill} />
			</div>
		</div>
	</div>
</section>

<style>
	.upcoming-event {
		display: flex;
		flex-direction: column;
	}

	.upcoming-event__details {
		border: 1px white solid;
		padding: 10px;
		line-height: 24px;
	}


	.upcoming-event__title-row {
		display: flex;
		gap: 24px;
	}

	.upcoming-event__title-container {
		display: flex;
		flex-direction: column;
	}

	.upcoming-event__thumbnail {
		height: 80px;
		width: 80px;
		object-fit: cover;
		object-position: 100% -15px;
	}

	section {
		margin-top: 49px;
	}
</style>
