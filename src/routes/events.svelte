<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import EventCard from '$lib/EventCard.svelte';
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

<section>
	<div class="event-list">
		<h3 class="upcoming-event__header">Next Event</h3>
		<EventCard
			groupName="Rust DC"
			name="Book Club: Rust for Rustaceans"
			datetimeInMs={new Date(2022, 1, 10, 19, 0, 0).getTime()}
			thumbnailUrl="/photos/photo-rust-ferris.jpeg"
			thumbnailAlt="ferris, the crab mascot of rust, painted with water-color"
		/>
	</div>

	<div class="event-list">
		<h3 class="upcoming-event__header">Upcoming Events</h3>
		<EventCard
			groupName="Rust DC"
			name="Book Club: Rust for Rustaceans"
			datetimeInMs={new Date(2022, 1, 10, 19, 0, 0).getTime()}
			thumbnailUrl="/photos/photo-rust-ferris.jpeg"
			thumbnailAlt="ferris, the crab mascot of rust, painted with water-color"
		/>
		<EventCard
			groupName="Rust DC"
			name="Book Club: Rust for Rustaceans"
			datetimeInMs={new Date(2022, 1, 10, 19, 0, 0).getTime()}
			thumbnailUrl="/photos/photo-rust-ferris.jpeg"
			thumbnailAlt="ferris, the crab mascot of rust, painted with water-color"
		/>
	</div>
</section>

<style>
	.event-list {
		display: flex;
		flex-direction: column;
	}

	section {
		margin-top: 49px;
	}
</style>
