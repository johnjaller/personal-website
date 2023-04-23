<script lang="ts">
	import Image from '../../lib/Image.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-6xl font-bold py-4">Blog</h1>
	<div class="flex w-full justify-evenly flex-wrap gap-2 max-sm:px-8">
		{#each data.posts as post (post.id)}
			<div class="rounded-xl card max-sm:w-full w-[300px]">
				<Image image={'/demo.jpeg'} />
				<div class="px-4 p-2 card-container transition-all w-full">
					<div class=" text-xl font-serif ">
						{post.title}
					</div>
					<div class="flex">
						{#if Array.isArray(post.tags) && typeof post === 'object'}
							{#each post.tags as tag}
								<div class="rounded-2xl bg-[#eaeaea] p-2 mr-2">{tag?.name}</div>
							{/each}
						{/if}
					</div>
					<div class="">
						{post.content}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.card {
		min-width: 200px;
		height: 400px;
		// max-height: 500px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	}
	.card:hover {
		:global(.skeleton) {
			height: 150px !important;
			transition: height linear 200ms;
			filter: brightness(80%);
		}
		:global(img) {
			height: 150px !important;
			object-fit: cover;
			width: 100% !important;
			transition: all linear 200ms;
			filter: brightness(80%);
		}
	}
</style>
