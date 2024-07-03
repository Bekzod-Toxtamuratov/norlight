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
				class="w-[80%] h-[216px] object-cover pl-6 rounded mb-2"
			/>
			<img class="w-[20px] h-[19px]" src="/200.png" />
		</div>

		<div class="flex flex-col gap-5 pl-6">
			<h2 class="text-xl max-w-[227px]">Card title: {{ props.data?.title }}</h2>
			<p class="text-sm font-bold line-through text-[20px] leading-6">
				{{ props.data?.oldPrice }}
			</p>
			<div class="flex justify-between items-center">
				<p class="text-sm font-bold">{{ props.data?.newPrice }}</p>
				<button class="bg-[#454545] py-3 px-4 rounded-lg">
					<img src="/111.png" />
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
