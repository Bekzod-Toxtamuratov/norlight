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
	<div class="container py-5 max-sm:px-3">
		<div class="flex justify-between cursor-pointer group py-6">
			<h2
				class="text-[#454545] text-[28px] max-md:max-w-[328px] md:text-[40px] font-bold"
			>
				Только проверенные бренды
			</h2>
		</div>
		<Vue3Marquee :duration="speed">
			<img src="/brandTwo.png" alt="" class="px-4 m-3 h-[50%] md:h-2/3" />
			<img src="/brandThree.png" alt="" class="px-4 m-3 h-[50%] md:h-2/3" />
			<img src="/odeon.png" alt="" class="px-4 h-[50%] m-3 md:h-2/3" />
			<img src="/brandTwo.png" alt="" class="px-4 h-[50%] m-3 md:h-2/3" />
		</Vue3Marquee>
	</div>
</template>

<style scoped></style>
