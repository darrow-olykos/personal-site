<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
	import shareFill from '@iconify/icons-eva/share-fill.js';
	let today = Date.now();
	setInterval(() => {
		today = Date.now();
	}, 1000);
	let upcomingEvent = new Date(2022, 1, 10, 19, 0, 0).getTime();
	$: timeUntilUpcomingEvent = Math.round((upcomingEvent - today) / (1000 * 60 * 60 * 24));
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

<section>
	<div class="upcoming-event">
		<h3 class="upcoming-event__header">Next Event</h3>
		<div class="upcoming-event__details">
			<div class="upcoming-event__time-until">Starts in {timeUntilUpcomingEvent} days</div>
			<div class="upcoming-event__datetime">Thurs, Feb 10th, @ 7:00 PM EST</div>
			<div class="upcoming-event__title-row">
				<div class="upcoming-event__title-container">
					<div class="upcoming-event__name">Book Club: Rust for Rustaceans</div>
					<div class="upcoming-event__group">Rust DC</div>
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

	.upcoming-event__datetime {
		color: var(--secondary-color);
		text-transform: uppercase;
	}

	.upcoming-event__time-until {
		float: right;
	}

	.upcoming-event__name {
		font-family: 'Inconsolata-expanded-bold';
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

	.upcoming-event__share-button {
		float: right;
		padding-bottom: -100px;
	}
	.upcoming-event__share-button:hover > :global(svg) {
		cursor: pointer;
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
		animation: pulse-white 1.7s infinite;
		animation-fill-mode: forwards;
		transform: scale(1);
	}

	.upcoming-event__group {
		color: gray;
	}

	section {
		margin-top: 49px;
	}

	@keyframes pulse-white {
		0% {
			box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
		}

		100% {
			box-shadow: 0 0 0 5px rgba(255, 255, 255, 0);
		}
	}
</style>
