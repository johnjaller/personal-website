<script lang="ts">
	import { Lottie } from 'lottie-svelte';
	import IntersectionObserver from '../lib/IntersectionObserver.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
	// import type { AnimationEvent } from 'lottie-svelte/iface';

	// import { faReact, faVuejs, faNodeJs, faAngular } from '@fortawesome/free-brands-svg-icons';
	// import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	// $: spin = true;
	// function handler(event: AnimationEvent) {
	// 	const animation = event.detail.; // lottie-web AnimationItem
	// 	animation.setSpeed(0.2);
	// 	setTimeout(() => animation.pause(), 1500);
	// }
</script>

<div class="flex w-full items-center flex-col-reverse md:flex-row">
	<div class="sm:w-[40%] flex flex-col md:items-end items-center justify-around">
		<div class=" text-2xl mb-4 text-center md:text-end">Bring Your ideas to life</div>
		<div class=" text-2xl font-bold text-center md:text-end">My name is John Kwong.</div>
		<div class=" text-3xl font-extrabold text-center md:text-end">I'm a developer</div>
	</div>
	<div class="skeleton" style=" min-height:150px;  width:100%;">
		<Lottie path="./factory.json" />
	</div>
</div>
<IntersectionObserver let:intersecting once>
	{#if intersecting}
		<section class="flex font-sofia_pro justify-center gap-5 w-full mt-4 max-md:flex-col px-8 mb-10 profile ">
			<div class="min-w-20 border-r-black border-r-2 md:pr-6 max-md:border-r-0 ">
				<h1 class="text-7xl mb-10 ">About me</h1>
				<img
					src="/profile.jpeg"
					alt="profile pic"
					loading="lazy"
					class="rounded-full max-w-[300px] max-h-[300px] max-md:w-full "
				/>
			</div>
			<div class="max-w-6xl flex flex-col justify-center text-xl max-md:border-b-2 max-md:pb-4 border-[#eaeaea]">
				<p class="mb-4">
					My name is Kwong Chin Fung. You can also call me John. I born in Hong Kong and grduated
					from science bachelor degree in major of Chemistry. I love science since Secondary School.
					I have studied Physics and Chemistry and Economics. My favorite subject is Chemistry. I
					also like to learn new sets of technlogies and different skills
				</p>
				<!-- <p class="mb-4">
					However, I find that chemistry related jobs were so limited becuase of COVID-19. Then, I
					realised that the opportunity of being a scientist or working at laboratory In Hong Kong
					is resetricted. It is too repetitive and boring. I want to look for something more
					challenging and exciting. So I change my gear and try to become a full-fledge web
					developer
				</p>
				<p class="">
					However, I find that chemistry related jobs were so limited becuase of COVID-19. Then, I
					realised that the opportunity of being a scientist or working at laboratory In Hong Kong
					is resetricted. It is too repetitive and boring. I want to look for something more
					challenging and exciting. So I change my gear and try to become a full-fledge web
					developer
				</p> -->
				<a class="self-end flex items-center justify-center mt-3" href="/about">Continue Reading<Fa icon={faArrowRight} class='ml-2' size=''/></a>
			</div>
		</section>
	{/if}
</IntersectionObserver>
<IntersectionObserver let:intersecting top={100}>
	{#if intersecting}
	<section
	class="flex items-center justify-center flex-col intro"
	>
<h3 class=" text-5xl font-bold self-start ">What Can I do?</h3>
<img src="/meme.png" alt="" class="intro max-md:w-full my-4">
<div class='flex md:shrink overflow-x-scroll items-start w-full'>
<div class='mr-4'>
	<div class="mb-3">Utilizing popular framework</div>
<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat alias natus. Incidunt animi et cupiditate quidem ipsum accusantium harum laborum! Quia, vel maiores quasi facilis tempora quis soluta exercitationem.</div>
</div>
<div class='mr-4'>
	<div class="mb-3">Utilizing popular framework</div>
<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat alias natus. Incidunt animi et cupiditate quidem ipsum accusantium harum laborum! Quia, vel maiores quasi facilis tempora quis soluta exercitationem.</div>
</div>	
<div>
	<div class="mb-3">Utilizing popular framework</div>
<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat alias natus. Incidunt animi et cupiditate quidem ipsum accusantium harum laborum! Quia, vel maiores quasi facilis tempora quis soluta exercitationem.</div>
</div>	
</div>
</section>
{/if}
</IntersectionObserver>
<IntersectionObserver let:intersecting top={100} class="flex items-center justify-center flex-col px-8 !h-[600px] bg-center bg-cover bg  mt-[40px]"
style="background-image: url('./contact.jpg');">
{#if intersecting}
<!-- <section

> -->
<IntersectionObserver let:intersecting top={10} class="flex items-center justify-center flex-col">
	{#if intersecting}
<h3 class=" text-3xl font-bold mb-10 title" >
	Get In Touch
</h3>
<a href="mailto:johnjaller@hotmail.com" class="rounded-full px-5 py-4 flex items-center bg-slate-300 title">Send me a Email<Fa icon={faArrowRight} class='ml-2' size=''/></a>
{/if}
</IntersectionObserver>	
<!-- </section> -->
{/if}
</IntersectionObserver>
<!-- <div style='height:80vw; padding-top:50px'>
	<Motion
		initial={{display:'hidden'}}
		animate={{ rotate: [0, 360] }}
		transition={{ duration: 10, repeat: 1, ease: 'linear', onComplete: () => (spin = false) }}
		let:motion
	>
		<div
			use:motion
			style="position:relative; height:50vw; width:50vw; max-height:50vw; max-width:50vw; text-align:center; margin:10px auto"
		>
			<Fa
				style="position:absolute "
				class="top-0 left-[50%] translate-x-[-50%]"
				icon={faReact}
				size="2x"
				bind:spin
			/>
			<Fa style="position:absolute" class="bottom-0 left-0  " icon={faVuejs} size="2x" bind:spin />
			<Fa
				style="position:absolute"
				class="bottom-[50%] right-[50%]"
				icon={faNodeJs}
				size="4x"
				bind:spin
			/>
			
		</div>
	</Motion>
</div> -->
<style lang="scss">
	section{
		margin: 40px 0;
	}
	section:last-child{
		margin-bottom: 0;
	}
	@keyframes shine {
		to {
			background-position-x: -200%;
		}
	}
	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateX(50%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	@keyframes fadeInOpacity {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fadeInTopBottom {
		0% {
			opacity: 0;
			transform: translateY(-50%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	@keyframes fadeInTopBottomHigher {
		0% {
			opacity: 0;
			transform: translateY(-200%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	.skeleton {
		background: #eee;
		background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
		background-size: 400% 400%;
		background-position: -100% 100%;
		animation: shine 1s linear infinite;
	}
	.profile {
		animation: fadeIn 2s ease;
	}
	.intro {
		animation: fadeInTopBottom 1s ease;
	}
	.title {
		animation-delay: 2000ms;
		animation: fadeInTopBottomHigher 2.5s ease;
	}
	.bg {
		animation: fadeInOpacity 2s ease;
	}
</style>
