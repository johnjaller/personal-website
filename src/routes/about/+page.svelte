<script lang='ts'>
	let count = 0;
</script>

<div>About my self</div>
<button
	on:click={() => {
		count = count + 1;
		console.log(count);
	}}>{count}</button
>
