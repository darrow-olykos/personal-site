<script lang="ts">
</script>

<div class="container">
	<ul class="vertical-stack">
		{#each [0, 1, 2] as i}
			<li>{i}</li>
		{/each}
	</ul>
	<ul class="horizontal-stack">
		{#each [0, 1, 2] as i}
			<li>{i}</li>
		{/each}
	</ul>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
		justify-content: center;
	}

	.vertical-stack {
		display: flex;
		flex-direction: column;
		justify-content: start;
		list-style: none;
		gap: 24px;
	}

	.vertical-stack > * {
		border: 1px var(--primary-color) solid;
		height: 80px;
		padding: 10px;
		width: 392px;
	}

	.horizontal-stack {
		display: flex;
		justify-content: start;
		list-style: none;
		gap: 24px;
	}

	.horizontal-stack > * {
		border: 1px var(--primary-color) solid;
		width: 100px;
		height: 332px;
		padding: 10px;
	}

	li:hover {
		cursor: pointer;
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
		animation: grow-white 1.7s, pulse-white 1.7s infinite;
		animation-fill-mode: forwards;
		transform: scale(1);
	}

	@keyframes grow-white {
		40% {
			transform: scale(1.06);
		}

		100% {
			transform: scale(1.06);
		}
	}

    @keyframes pulse-white {
		40% {
			box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
		}

		100% {
			box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
		}
	}

    li:active {
        animation: strong-pulse-white 1s;
        animation-fill-mode: forwards;
    }

    @keyframes strong-pulse-white {
        0% {
            transform: scale(1.06);
            box-shadow: 0 0 0 20px rgba(255, 255, 255, .7);
        }

        100% {
            transform: scale(1.06);
            box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
        }
    }

</style>
