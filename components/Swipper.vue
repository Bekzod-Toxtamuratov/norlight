<script setup>
const speed = ref(10)

const speedUp = () => {
	if (speed.value > 1) {
		speed.value--
	}
}

const speedDown = () => {
	if (speed.value < 10) {
		speed.value++
	}
}
</script>
<template>
	<div class="container py-5">
		<div class="flex justify-between cursor-pointer group py-6">
			<h2
				class="text-[#454545] text-[18px] md:max-w-[328px] leading-[38px] md:text-3xl font-bold"
			>
				Только проверенные бренды
			</h2>
			<!-- <div class="flex md:gap-2">
				<i
					class="bx bx-left-arrow-alt border px-1 sm:px-1 md:px-4 text-xl"
					@click="speedDown"
				></i>
				<i
					class="bx bx-right-arrow-alt border px-1 sm:px-1 md:px-4 text-xl"
					@click="speedUp"
				></i>
			</div> -->
		</div>
		<Vue3Marquee :duration="speed" class="flex justify-between gap-8">
			<img    src="/12.png" alt="" class="px-20" />
			<img src="/13.png" alt="" class="px-20" />
			<img src="/14.png" alt="" class="px-20" />
		</Vue3Marquee>
	</div>
</template>

<style scoped></style>
