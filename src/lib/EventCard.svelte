<script lang="ts">
	import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
	import shareFill from '@iconify/icons-eva/share-fill.js';

	import { time } from './stores';

	// props
	export let groupName: string;
	export let name: string;
	export let thumbnailUrl: string;
	export let thumbnailAlt: string;
	export let datetimeInMs: number;
	export let recurs: 'weekly' | 'biweekly' = undefined;
    export let permaLink: string;

	// behavior
	function formatDatetimeFromMs(ms: number) {
		return new Date(ms).toLocaleDateString(undefined, {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	// reactive declarations
	$: daysUntilEvent = Math.round((datetimeInMs - $time.getTime()) / (1000 * 60 * 60 * 24));
	$: formattedDatetime = formatDatetimeFromMs(datetimeInMs);
</script>

<div class="row">
	<div class="col-12 event__details">
		<div class="row">
			<div class="col-sm-6 col-xs-12 event__datetime">
				{formattedDatetime}
			</div>
			<div class="col-sm-6 col-xs-12 text-sm-right event__time-until">
				Starts in {daysUntilEvent} days
			</div>
		</div>
		<div class="row">
			<div class="col-md-5 col-sm-12">
				<div class="row">
					<div class="col-12">
						{name}
					</div>
					<div class="col-12 event__group">
						{groupName}
					</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-4">
				<img class="event__thumbnail" src={thumbnailUrl} alt={thumbnailAlt} />
			</div>
			<div class="col-md-3 col-sm-8 text-center text-sm-right text-xs-center event__share-button">
                <Icon icon={shareFill} />
            </div>
		</div>
	</div>
</div>

<style>
	.event__details {
		line-height: 24px;
		white-space: nowrap;
		border: 1px solid white;
        margin-bottom: 16px;
        padding-top: 16px;
        padding-bottom: 16px;
	}

	.event__datetime {
		color: var(--secondary-color);
		text-transform: uppercase;
	}

	.event__time-until {
		margin-bottom: 16px;
	}

	.event__name {
		font-family: 'Inconsolata-expanded-bold';
	}

	.event__thumbnail {
		height: 60px;
		width: 60px;
		object-fit: cover;
		object-position: 100% -10px;
		border-radius: 10%;
	}

    .event__share-button {
        align-self: flex-end;
    }

	.event__share-button:hover > :global(svg) {
		cursor: pointer;
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
		animation: pulse-white 1.7s infinite;
		animation-fill-mode: forwards;
		transform: scale(1);
	}

	.event__group {
		color: gray;
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
