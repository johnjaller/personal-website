<script lang="ts">
	import { Lottie } from 'lottie-svelte';

	import Fa from 'svelte-fa/src/fa.svelte';
	import { faReact, faVuejs, faNodeJs, faAngular } from '@fortawesome/free-brands-svg-icons';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	$: spin = true;
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
	@keyframes shine {
		to {
			background-position-x: -200%;
		}
	}
	.skeleton {
		background: #eee;
		background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
		background-size: 400% 400%;
		background-position: -100% 100%;
		animation: shine 1s linear infinite;
	}
</style>
