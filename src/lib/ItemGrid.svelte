<script lang="ts">
    export let items;
    export let component;
</script>

<div class="row">
    {#each items as item}
        <div class="col">
            <svelte:component this={component} {...item} />
        </div>
    {/each}
</div>

<style>
</style>