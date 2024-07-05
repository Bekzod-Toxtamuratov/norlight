<script setup>
const props = defineProps({
	data: Object,
})
</script>
<template>
	<div class="card px-3 py-[30px] bg-white shadow-lg rounded-md">
		<div class="flex justify-between px-2">
			<img
				:src="props.data?.image"
				alt="image"
				class="w-full h-[126px] md:h-[304px] object-cover md:pl-6 rounded mb-2"
			/>
		</div>
		<div class="flex flex-col gap-1 md:gap-5 pl-6">
			<div class="flex justify-between items-center">
				<p class="text-xl font-bold">{{ props.data?.sana }}</p>
				<button class="bg-[white] py-2 md:py-3 px-3 md:px-5 rounded-[100px]">
					<img src="/korsat.svg" />
				</button>
			</div>
			<h2
				class="mb-3 text-[14px] leading-[15px] max-w-[118px] md:max-w-[227px]"
			>
				{{ props.data?.title }}
			</h2>
		</div>
	</div>
</template>

<style scoped></style>
