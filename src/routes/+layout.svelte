<script lang="ts">
	// import { dev } from '$app/environment';
	//TODO: enable for vercel analytics
	// import { inject } from '@vercel/analytics';
	// inject({ mode: dev ? 'development' : 'production' });
	import { page } from '$app/stores';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import { faBars, faXmark,faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { AnimatePresence } from 'svelte-motion/src';
	$: isOpen = false;
	import '../app.css';
	const routes = [
		{ path: '/', name: 'Home' },
		{ path: '/about', name: 'About' },
		{ path: '/blog', name: 'Blog' }
	];
	$: console.log('hello');
	$: isLinkActive = (path: string) =>
		$page.url.pathname === path && 'sm:!bg-gray-300 border-l-4 border-l-gray-200 sm:border-0';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://use.typekit.net/hqa3mex.css" />
</svelte:head>

<nav
	class="px-3 py-4 flex items-center border-b-2 sm:border-0 justify-between w-full font-sofia_pro"
>
	<div class=" sm:w-[30%] font-bold text-center text-3xl">John Kwong</div>
	<button class="sm:hidden" on:click={() => (isOpen = !isOpen)}>
		{#if isOpen}
			<Fa icon={faXmark} size="2x" />
		{:else}
			<Fa icon={faBars} size="2x" />
		{/if}
	</button>
	<div class="hidden sm:block">
		{#each routes as route, index (index)}
			<a
				href={route.path}
				class=" hover:bg-gray-200/80 transition delay-75 p-3 rounded-lg {isLinkActive(
					route.path
				)} mr-3 last:mr-0">{route.name}</a
			>
		{/each}
		<div class="inline-block relative menu ">
			<a href="/contact" class="heroButton text-white p-3 rounded-full {isLinkActive('/contact')}">
				Contact me</a
			>
			<div class="absolute menu-list right-0 pt-4 z-10">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/johnjaller"
					class="socialItem rounded-xl hover:!bg-[#eaeaea] flex items-center z-10"
					><Fa icon={faGithub} class="mr-2" /> GitHub</a
				>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://twitter.com/johnajller_freq"
					class="socialItem rounded-xl hover:!bg-[#eaeaea] flex items-center z-10"
					><Fa icon={faTwitter} class="mr-2" />Twitter</a
				>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/john-kwong-dev/"
					class="socialItem rounded-xl hover:!bg-[#eaeaea] flex items-center z-10"
					><Fa icon={faLinkedin} class="mr-2" />LinkedIn</a
				>
				<a
					target="_blank"
					rel="noreferrer"
					href="mailto:johnjaller@hotmail.com"
					class="socialItem rounded-xl hover:!bg-[#eaeaea] flex items-center z-10"
					><Fa icon={faEnvelope} class="mr-2" />Email</a
				>
			</div>
		</div>
	</div>
</nav>
<div class="px-3 relative overflow-x-clip">
	<AnimatePresence show={isOpen}>
		<Motion
			let:motion
			initial={{ right: '-100%', opacity: 0 }}
			animate={{ right: 0, opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.5 }}
			exit={{ right: '-100%' }}
		>
			<div
				class="absolute bg-white text-dark {isOpen
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
					class=" hover:bg-gray-200/80 p-3 fixed bottom-10 heroButton rounded-full {isLinkActive(
						'/contact'
					)}"
					on:click={() => (isOpen = !isOpen)}>Contact me</a
				>
			</div>
		</Motion>
	</AnimatePresence>
</div>
<main>
	<slot />
</main>

<style lang="scss">
	@keyframes changeBackgroundColor {
		0% {
			background-position: 50% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,600;1,6..96,400;1,6..96,600&display=swap');
	.heroButton {
		background-size: 200% 200%;
		background-image: radial-gradient(
			circle farthest-corner at 92.3% 71.5%,
			rgba(83, 138, 214, 1) 0%,
			rgba(134, 231, 214, 1) 90%
		);
		background-position: 50% 50%;
	}
	.heroButton:hover {
		animation: changeBackgroundColor 0.4s;
		background-position: 0% 50%;
	}
	.socialItem {
		text-align: center;
		min-width: 160px;
		opacity: 0;
		transform: translateY(-200%);
		// margin: 20px 0 0 0;
		padding: 10px 20px;
		background-color: white;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	}
	.socialItem:not(:first-child) {
		margin: 20px 0 0 0;
	}
	.menu-list {
		// display: hidden;
		transition: all 0.45s ease-in-out;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
	}
	.menu:hover {
		.menu-list {
			// display: block;
			opacity: 1;
			transition: all 0.45s ease-in-out;

			pointer-events: all;
			visibility: visible;
		}
		.socialItem {
			opacity: 1;
			transform: translateY(0);
		}
		.socialItem:nth-child(1) {
			transition: all 0.4s ease-in;
		}
		.socialItem:nth-child(2) {
			transition: all 0.45s ease-in;

		}
		.socialItem:nth-child(3) {
			transition: all 0.5s ease-in;

			// animation: scrollDown 0.5s linear;
		}
		.socialItem:nth-child(4) {
			transition: all 0.55s ease-in;

		}
	}
	@keyframes scrollDown {
		0% {
			opacity: 0;
			transform: translateY(-200%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
