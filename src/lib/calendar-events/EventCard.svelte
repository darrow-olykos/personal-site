<script lang="ts">
	import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
	import shareFill from '@iconify/icons-eva/share-fill.js';
	import type { CalendarEvent } from '$lib/calendar-events/calendar-event';
	import { time } from '$lib/stores';

	// props
	export let data: CalendarEvent;

	// behavior
	function formatDatetimeFromMs(ms: number) {
		return new Date(ms).toLocaleDateString(undefined, {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	// reactive declarations
	$: daysUntilEvent = Math.round((data.datetimeInMs - $time.getTime()) / (1000 * 60 * 60 * 24));
	$: formattedDatetime = formatDatetimeFromMs(data.datetimeInMs);
</script>

<div class="row justify-content-center align-items-center event__details">
	<div class="col text-center">
		<div class="row event__info">
			<div class="col-12 event__name">
				{data.name}
			</div>
			<div class="col-12 event__group">
				{data.group.name}
			</div>
			<div class="col">
				<div class="row">
					<div class="col event__datetime">
						{formattedDatetime}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xs-12 text-center event__notice">
		<div class="row">
			<div class="col-12 event__time-until">
				Starts in {daysUntilEvent} days
			</div>
            <div class="col-12">
				<a href={data.permaLink}>see event details</a>
			</div>
			<div class="col-12">
				<div class="event__share-button">
					<Icon icon={shareFill} />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.event__name {
		font-weight: 700;
	}

	.event__details {
		line-height: 24px;
		border: 1px solid white;
		padding-top: 8px;
		padding-bottom: 8px;
	}

	.event__datetime {
		color: var(--secondary-color);
		text-transform: uppercase;
		line-height: 36px;
		white-space: nowrap;
	}

	.event__notice {
		height: 100%;
        max-width: 300px;
        margin: 0 16px;
		font-weight: 800;
		border-radius: 10px;
		background-color: var(--primary-color);
		color: var(--tertiary-color);
		white-space: nowrap;
	}

    .event__time-until {
        padding-top: 3px;
    }

	.event__name {
		font-family: 'Inconsolata-expanded-bold';
	}

	.event__share-button :global(svg) {
		cursor: pointer;
		box-shadow: 0 0 0 0 black;
	}

	.event__group {
		color: gray;
	}
</style>
