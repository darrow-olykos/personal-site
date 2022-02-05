<script lang="ts">
</script>

<div class="container">
	<div>
		What would you like to do?
		<ul class="horizontal-stack">
			{#each ['Read blog', 'Find events', 'Answer Polls'] as text}
				<li>{text}</li>
			{/each}
		</ul>
	</div>
	<div>
		Featured
		<ul class="vertical-stack">
			{#each ['Latest Blog Post: Implementing Visitor Pattern in Rust', 'Upcoming Event: Rust for Rustaceans Chapter 3 Discussion', 'Poll: Recommend Software Engineering Book for Senior Devs?'] as text}
				<li>{text}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center;
	}

	.vertical-stack {
		display: flex;
		flex-direction: column;
		justify-content: start;
		list-style: none;
		gap: 16px;
	}

	.vertical-stack > * {
		border: 1px var(--primary-color) solid;
		height: 100px;
		padding: 10px;
		width: 392px;
	}

	.horizontal-stack {
		display: flex;
		justify-content: start;
		list-style: none;
		gap: 16px;
	}

	.horizontal-stack > * {
		border: 1px var(--primary-color) solid;
		width: 120px;
		height: 376px;
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
		0% {
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
			box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.7);
		}

		100% {
			transform: scale(1.06);
			box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
		}
	}
</style>
