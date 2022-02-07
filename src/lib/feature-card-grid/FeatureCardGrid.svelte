<script lang="ts">
</script>

<div class="container">
	<div class="row justify-content-center">
		<div class="col-lg">
            <div class="title">What would you like to do?</div>
			<div class="row no-gutters things-to-do-container">
				<div class="col action cell1">
					<a href="/blog">
						<div class="text">Read Blog</div>
					</a>
				</div>
                <div class="col action cell2">
                    <a href="/events">
                        <div class="text">Find Events</div>
                    </a>
				</div>
                <div class="col action cell3">
                    <a href="/polls">
                        <div class="text">Answer polls</div>
                    </a>
				</div>
                <div class="col action cell4">
                    <a href="/photos">
                        <div class="text">View photos</div>
                    </a>
				</div>
			</div>
		</div>
        <div class="col">
            <div class="title">Featured</div>
            <div class="row no-gutters featured-container">
                {#each ['Latest Blog Post: Implementing Visitor Pattern in Rust', 'Upcoming Event: Rust for Rustaceans Chapter 3 Discussion', 'Poll: Recommend Software Engineering Book for Senior Devs?', 'Latest Photo: "Downtown Boston Sunrise"'] as text}
                    <div class="col-12 action">{text}</div>
                {/each}
            </div>
        </div>
	</div>
</div>

<style>
	.title {
		margin-bottom: 16px;
	}

	/* TODO: is there a less brittle way to accomplish this effect? */
	.cell1 {
		background-image: url(/photos/photo-charles-river-bw.jpeg);
		background-size: cover;
	}

	.cell2 {
		background-image: url(/photos/photo-charles-river-bw.jpeg);
		background-size: cover;
		background-position-x: -132px;
	}

	.cell3 {
		background-image: url(/photos/photo-charles-river-bw.jpeg);
		background-size: cover;
		background-position-x: -260px;
	}

	.cell4 {
		background-image: url(/photos/photo-charles-river-bw.jpeg);
		background-size: cover;
		background-position: right;
		background-position-x: 142px;
	}

	.things-to-do-container {
		margin-bottom: 32px;
	}

	.things-to-do-container > .action {
		position: relative;
		border: 1px var(--primary-color) solid;
		max-width: 108px;
		height: 376px;
		padding: 10px;
		margin-right: 16px;
	}

	.cell1::after,
	.cell2::after,
	.cell3::after,
	.cell4::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 2;
	}

	.action:hover {
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

	.action:active {
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

	.featured-container > * {
		border: 1px var(--primary-color) solid;
		min-height: 82px;
		padding: 10px;
		width: 380px;
		margin-bottom: 16px;
	}

	.text {
		color: var(--primary-color);
		z-index: 3;
		position: relative;
		padding-left: 10px;
		padding-right: 10px;
		margin-top: 10px;
		height: 100%;
	}

	a {
		text-decoration: none;
		color: var(--primary-color);
	}

	@media (max-width: 600px) {
		.things-to-do-container > .action {
			width: 78px;
			margin-right: 10px;
		}
	}

    @media (max-width: 460px) {
        .things-to-do-container > .action {
            max-width: unset;
            height: unset;
            margin-bottom: 10px;
        }

        .text {
            padding: 0;
            margin: auto;
        }
    }
</style>
