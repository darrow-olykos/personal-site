<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import type { CalendarEvent } from '$lib/calendar-events/calendar-event';
	import EventCard from '$lib/calendar-events/EventCard.svelte';

	let data: Array<CalendarEvent> = [
		{
			permaLink: '/events/1',
			group: {
                name: 'Rust DC',
                image: {
                    url: "/photos/rust-dc-meetup-logo.jpeg",
                    alt: "rust logo photoshopped onto whitehouse"
                },
            },
			name: 'Book Club: Rust for Rustaceans',
			datetimeInMs: new Date(2022, 1, 10, 19, 0, 0).getTime(),
			image: {
				url: '/photos/photo-rust-ferris.jpeg',
				alt: 'ferris, the crab mascot of rust, painted with water-color'
			},
			recurrence: 'biweekly'
		},
		{
			permaLink: '/events/2',
            group: {
                name: 'Rust DC',
                image: {
                    url: "/photos/rust-dc-meetup-logo.jpeg",
                    alt: "rust logo photoshopped onto whitehouse"
                },
            },
			name: 'Mock event name',
			datetimeInMs: new Date(2022, 2, 11, 20, 0, 0).getTime(),
			image: {
				url: '/photos/photo-plant-french-press.jpeg',
				alt: 'a plant and a french press on my desk'
			},
            recurrence: 'none'
		}
	];
</script>

<svelte:head>
	<title>Events | rustbinaries.com</title>
</svelte:head>

<section>
    {#each data as event}
	    <div class="container">
            <EventCard data={event} />
        </div>
    {/each}
</section>

<style>
	section {
		margin-top: 49px;
	}

    .container {
        margin-bottom: 16px;
    }
</style>
