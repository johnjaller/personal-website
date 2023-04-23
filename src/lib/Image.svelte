<script lang="ts">
	export let image: string | null = '/demo.jpeg';
	// $: image;
	$: console.log(image);
	const preload = async (src: string | null) => {
		if (!src) return;
		const resp = await fetch(src);
		const blob = await resp.blob();

		return new Promise<string>((resolve, reject) => {
			let reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onload = () => {
				console.log(reader.result);
				reader.result ? resolve(image as string) : resolve('');
			};
			reader.onerror = (error) => reject(`Error: ${error}`);
		});
	};
</script>

{#if image}
	{#await preload(image)}
		<div class="skeleton rounded-t-xl" />
	{:then base64}
		<img
			src={base64}
			alt="Alright Buddy!"
			{...$$props}
			class="rounded-t-xl w-full h-[200px] object-cover"
		/>
	{:catch}
		<slot name="fallback">
			<div class="skeleton rounded-t-xl" />
		</slot>
	{/await}
{:else}
	<slot name="fallback">
		<div class="skeleton rounded-t-xl" />
	</slot>
{/if}

<style lang="scss">
	@keyframes shine {
		to {
			background-position-x: -200%;
		}
	}
	.skeleton {
		height: 200px;
		min-width: 100%;
		background: #eee;
		background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
		background-size: 400% 400%;
		background-position: -100% 100%;
		animation: shine 1.5s linear infinite;
		transition: all 200ms;
	}
</style>
