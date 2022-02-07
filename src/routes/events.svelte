<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import EventCard from '$lib/EventCard.svelte';
</script>

<svelte:head>
	<title>Events | rustbinaries.com</title>
</svelte:head>

<section>
	<div class="event-list">
		<h3 class="event-list__header">Next Event</h3>
		<EventCard
			groupName="Rust DC"
			name="Book Club: Rust for Rustaceans"
			datetimeInMs={new Date(2022, 1, 10, 19, 0, 0).getTime()}
			thumbnailUrl="/photos/photo-rust-ferris.jpeg"
			thumbnailAlt="ferris, the crab mascot of rust, painted with water-color"
			recurs="biweekly"
		/>
	</div>

	<div class="event-list">
		<h3 class="event-list__header">Upcoming Events</h3>
		<EventCard
			groupName="Rust DC"
			name="Book Club: Rust for Rustaceans"
			datetimeInMs={new Date(2022, 1, 24, 19, 0, 0).getTime()}
			thumbnailUrl="/photos/photo-rust-ferris.jpeg"
			thumbnailAlt="ferris, the crab mascot of rust, painted with water-color"
			recurs="biweekly"
		/>
		<EventCard
			groupName="Rust DC"
			name="Book Club: Rust for Rustaceans"
			datetimeInMs={new Date(2022, 2, 3, 19, 0, 0).getTime()}
			thumbnailUrl="/photos/photo-rust-ferris.jpeg"
			thumbnailAlt="ferris, the crab mascot of rust, painted with water-color"
			recurs="biweekly"
		/>
		<EventCard
			groupName="Mock Group"
			name="Mock event name"
			datetimeInMs={new Date(2023, 7, 3, 19, 0, 0).getTime()}
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

	.event-list > :global(*):not(:first-of-type) {
		margin-top: 16px;
	}

	.event-list:not(:first-of-type) > .event-list__header {
		padding-top: 16px;
	}

	section {
		margin-top: 49px;
	}
</style>
