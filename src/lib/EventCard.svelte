<script lang="ts">
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
	import shareFill from '@iconify/icons-eva/share-fill.js';

    // props
    export let groupName: string;
    export let name: string;
    export let thumbnailUrl: string;
    export let thumbnailAlt: string;
    export let datetimeInMs: number;

    export let recurs: undefined | 'weekly' | 'biweekly';

    // behavior
    const UPDATE_FREQUENCY_IN_MS = 1000;
	let todayInMs = Date.now();
    function updateLatestTime(){
        todayInMs = Date.now();
    }
	setInterval(updateLatestTime, UPDATE_FREQUENCY_IN_MS);

    function formatDatetimeFromMs(ms: number){
        return new Date(ms).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    // reactive declarations
	$: daysUntilEvent = Math.round((datetimeInMs - todayInMs) / (1000 * 60 * 60 * 24));
    $: formattedDatetime = formatDatetimeFromMs(datetimeInMs);
</script>

<div class="event event--bordered">
    <div class="event__details">
        <div class="event__time-until">Starts in {daysUntilEvent} days</div>
        <div class="event__datetime">{formattedDatetime}</div>
        <div class="event__title-row">
            <div class="event__title-container">
                <div class="event__name">{name}</div>
                <div class="event__group">{groupName}</div>
            </div>
            <img
                class="event__thumbnail"
                src={thumbnailUrl}
                alt={thumbnailAlt}
            />
            <div class="event__recurrence">
                {#if recurs}
                    Recurs {recurs}
                {:else}
                    No recurrence
                {/if}
            </div>
        </div>
        <div class="event__share-button">
            <Icon icon={shareFill} />
        </div>
    </div>
</div>

<style>
	.event {
		display: flex;
		flex-direction: column;
	}

    .event.event--bordered > .event__details {
        border: 1px white solid;
    }

	.event__details {
		padding: 10px;
		line-height: 24px;
	}

	.event__details:not(:first-of-type){
		margin-top: 167px;
	}

	.event__datetime {
		color: var(--secondary-color);
		text-transform: uppercase;
	}

	.event__time-until {
		float: right;
	}

	.event__name {
		font-family: 'Inconsolata-expanded-bold';
	}

	.event__title-row {
		display: flex;
		gap: 24px;
	}

	.event__title-container {
		display: flex;
		flex-direction: column;
	}

	.event__thumbnail {
		height: 80px;
		width: 80px;
		object-fit: cover;
		object-position: 100% -15px;
	}

    .event__recurrence {
        margin-left: auto;
    }

	.event__share-button {
		float: right;
		padding-bottom: -100px;
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

