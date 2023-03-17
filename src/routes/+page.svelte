<script lang="ts">
	import { Lottie } from 'lottie-svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
	import { faReact, faVuejs, faNodeJs, faAngular } from '@fortawesome/free-brands-svg-icons';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	$: spin = true;
</script>

<div class="flex w-full items-center flex-col-reverse md:flex-row">
	<div class="sm:w-[40%] flex flex-col md:items-end items-center">
		<div class="font-bold text-3xl mb-4 text-center md:text-end">Bring Your ideas to life</div>
		<div class=" text-xl text-center md:text-end">
			My name is John Kwong. I'm a full-stack developer
		</div>
	</div>
	<Lottie path="./factory.json" />
</div>
<div style='height:80vw; padding-top:50px'>
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
			<!-- <Fa
				style="position:absolute"
				class="bottom-[50%] right-[50%] translate-x-[-50%]"
				icon={faNodeJs}
				size="2x"
				bind:spin
			/> -->
		</div>
	</Motion>
</div>
