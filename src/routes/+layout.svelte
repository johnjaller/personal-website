<script lang="ts">
	import { page } from '$app/stores';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import Fa from 'svelte-fa/src/fa.svelte';
	import { AnimatePresence,M } from 'svelte-motion/src';
	$: isOpen = false;
	import '../app.css';
	const routes = [
		{ path: '/', name: 'Home' },
		{ path: '/about', name: 'About' },
		{ path: '/work', name: 'Work' },
		{ path: '/blog', name: 'Blog' }
	];

	$: isLinkActive = (path: string) =>
		$page.url.pathname === path && 'sm:!bg-gray-300 border-l-4 border-l-gray-200 sm:border-0';
</script>

<nav class="px-3 py-4 flex items-center border-b-2 sm:border-0 justify-between w-full">
	<div class="font-Bodoni_Moda sm:w-[30%] font-bold text-center text-2xl">John Kwong</div>
	<button class="sm:hidden" on:click={() => (isOpen = !isOpen)}>
  {#if isOpen}
   <Fa icon={faXmark} size='2x'/>  
   {:else}
   <Fa icon={faBars} size='2x'/>
   {/if}
    </button>
	<div class="hidden sm:block">
		{#each routes as route, index (index)}
			<a
				href={route.path}
				class=" hover:bg-gray-200/80 transition delay-75 p-3 rounded-lg {isLinkActive(route.path)} mr-3 last:mr-0"
				>{route.name}</a
			>
		{/each}

            <a
			href="/contact"
			class="heroButton text-white p-3 rounded-full {isLinkActive(
                '/contact'
                )}"
			on:click={() => (isOpen = !isOpen)}>Contact me</a
            >
        </div>
</nav>
<main class="px-3 relative overflow-x-clip">
	<AnimatePresence show={isOpen}>
		<Motion
			let:motion
			initial={{ right: '-100%', opacity: 0 }}
			animate={{ right: 0, opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.5 }}
			exit={{ right: '-100%' }}
		>
			<div
				class="absolute bg-white text-dark {!!isOpen
					? 'right-0'
					: 'right-[-100%]'} top-0 flex w-[50%] z-10 h-screen items-center border-l-2 flex-col"
				use:motion
				use
			>
            <div class="flex flex-col w-full">

                {#each routes as route, index (index)}
                <a
                href={route.path}
                class=" hover:bg-gray-200/80 p-3   {isLinkActive(route.path)}"
                on:click={() => (isOpen = !isOpen)}>{route.name}</a
                >
				{/each}
            </div>
				<a
					href="/contact"
					class=" hover:bg-gray-200/80 p-3 fixed bottom-10 heroButton rounded-full {isLinkActive('/contact')}"
					on:click={() => (isOpen = !isOpen)}>Contact me</a
				>
			</div>
		</Motion>
	</AnimatePresence>
</main>
<slot />

<style>
     @keyframes changeBackgroundColor {
         0%{background-position:50% 50%}
        100%{background-position:25% 50%}
}
	@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,600;1,6..96,400;1,6..96,600&display=swap');
	.heroButton {
        background-size: 400% 400%;
        background-image: radial-gradient( circle farthest-corner at 92.3% 71.5%,  rgba(83,138,214,1) 0%, rgba(134,231,214,1) 90% );
        background-position:50% 50%;

	}
	.heroButton:hover {
      animation:changeBackgroundColor 0.4s ;
      background-position:25% 50%
	}
   
</style>
