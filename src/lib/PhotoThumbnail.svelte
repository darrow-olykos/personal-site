<script lang="ts">
    export let imageUrl: string;
    export let height: string = "300px";
</script>

<div>
    <img src={imageUrl} alt="" height={height}>
</div>
