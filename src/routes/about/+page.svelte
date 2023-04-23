<script lang="ts">
	let count = 0;
</script>

<div class="flex flex-col items-center">

	<img
	src="/profile.jpeg"
	alt="profile pic"
	class="rounded-full max-w-[300px] max-h-[300px] max-md:w-full profile"
	/>
</div>

<style scoped>
		@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateY(50%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	.profile {
		animation: fadeIn 2s ease;
	}

</style>