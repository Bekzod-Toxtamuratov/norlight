<script setup>
const props = defineProps({
	data: Object,
})
</script>

<template>
	<div class="card px-3 py-[100px] bg-white shadow-lg rounded-md">
		<img
			:src="props.data?.image"
			alt="image"
			class="w-[173px] h-[216px] object-cover pl-6 rounded mb-2"
		/>
		<div class="flex flex-col gap-5 pl-6">
			<h2 class="text-xl max-w-[227px]">Card title: {{ props.data?.title }}</h2>
			<p class="text-sm font-bold line-through text-[20px] leading-6">
				{{ props.data?.oldPrice }}
			</p>
			<p class="text-sm font-bold">{{ props.data?.newPrice }}</p>
		</div>
	</div>
</template>

<style scoped></style>
