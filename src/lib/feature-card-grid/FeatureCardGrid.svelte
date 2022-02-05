<script lang="ts">
</script>

<div class="container">
	<div>
		What would you like to do?
		<ul class="horizontal-stack">
			<li class="left">
				<a href="/blog">
					<div class="text">Read Blog</div>
				</a>
			</li>
			<li class="middle-left">
				<a href="/events">
					<div class="text">Find Events</div>
				</a>
			</li>
			<li class="middle-right">
				<a href="/polls">
					<div class="text">Answer polls</div>
				</a>
			</li>
			<li class="right">
				<a href="/photos">
					<div class="text">View photos</div>
				</a>
			</li>
		</ul>
	</div>
	<div>
		Featured
		<ul class="vertical-stack">
			{#each ['Latest Blog Post: Implementing Visitor Pattern in Rust', 'Upcoming Event: Rust for Rustaceans Chapter 3 Discussion', 'Poll: Recommend Software Engineering Book for Senior Devs?', 'Latest Photo: "Downtown Boston Sunrise"'] as text}
				<li>{text}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	ul > li {
		position: relative;
	}

	.text {
		color: var(--primary-color);
		z-index: 3;
		position: relative;
		padding-left: 10px;
		margin-top: 10px;
		height: 100%;
	}

	a {
		text-decoration: none;
		color: var(--primary-color);
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		display: block;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center;
	}

	.horizontal-stack {
		display: flex;
		justify-content: start;
		list-style: none;
		gap: 16px;
	}

	.horizontal-stack > * {
		border: 1px var(--primary-color) solid;
		width: 108px;
		height: 376px;
		padding: 10px;
	}

	.horizontal-stack > .left {
		background-image: url(/photos/photo-charles-river-bw.jpeg);
		background-size: cover;
	}

	.horizontal-stack > .middle-left {
		background-image: url(/photos/photo-charles-river-bw.jpeg);
		background-size: cover;
		background-position-x: -132px;
	}

	.horizontal-stack > .middle-right {
		background-image: url(/photos/photo-charles-river-bw.jpeg);
		background-size: cover;
		background-position-x: -260px;
	}

	.horizontal-stack > .right {
		background-image: url(/photos/photo-charles-river-bw.jpeg);
		background-size: cover;
		background-position: right;
		background-position-x: 142px;
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
		height: 65.5px;
		padding: 10px;
		width: 380px;
	}

	.left::after,
	.middle-left::after,
	.middle-right::after,
	.right::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 2;
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
