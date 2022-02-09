<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import type { CalendarEvent } from '$lib/calendar-events/calendar-event';
	import EventCard from '$lib/calendar-events/EventCard.svelte';
	import { withRecurrencesExpanded } from '$lib/calendar-events/with-recurrences-expanded';

	let data: Array<CalendarEvent> = [
		{
			id: '1',
			group: {
				name: 'Rust DC',
				image: {
					url: '/photos/rust-dc-meetup-logo.jpeg',
					alt: 'rust logo photoshopped onto whitehouse'
				}
			},
			name: 'Rust for Rustaceans Chapter Discussion',
			datetimeInMs: new Date(2022, 1, 10, 19, 0, 0).getTime(),
			image: {
				url: '/photos/photo-rust-ferris.jpeg',
				alt: 'ferris, the crab mascot of rust, painted with water-color'
			},
			recurrence: {
				pattern: 'biweekly',
				anEarlierInstanceExists: false
			}
		},
		{
			id: '2',
			group: {
				name: 'Designing Data-Intensive Applications Book Club',
				image: {
					url: '/photos/rust-dc-meetup-logo.jpeg',
					alt: 'rust logo photoshopped onto whitehouse'
				}
			},
			name: 'DDIA Chapter Discussion',
			datetimeInMs: new Date(2022, 1, 11, 20, 0, 0).getTime(),
			image: {
				url: '/photos/photo-plant-french-press.jpeg',
				alt: 'a plant and a french press on my desk'
			},
			recurrence: {
				pattern: 'weekly',
				anEarlierInstanceExists: false
			}
		}
	];

	let events = withRecurrencesExpanded(data);
</script>

<svelte:head>
	<title>Events | rustbinaries.com</title>
</svelte:head>

<section>
	<div class="container">
		<h3>Next Event</h3>
		<div class="container">
			<EventCard data={events[0]} />
		</div>
	</div>
	<div class="container">
		<h3>Future Events</h3>
		{#each events.splice(1) as event}
			<div class="container">
				<EventCard data={event} />
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		margin-top: 49px;
	}

	.container {
		margin-bottom: 16px;
	}
</style>
