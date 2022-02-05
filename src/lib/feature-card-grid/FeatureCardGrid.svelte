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
</style>
