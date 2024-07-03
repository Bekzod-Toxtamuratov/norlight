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
				class="w-full md:w-[80%] h-[160px] md:h-[216px] object-cover md:pl-6 rounded mb-2"
			/>
			<img class="max-md:hidden md:w-[20px] md:h-[19px]" src="/200.png" />
		</div>

		<div class="flex flex-col gap-5 pl-6">
			<h2 class="text-[16px] md:text-xl max-w-[227px]">
				Card title: {{ props.data?.title }}
			</h2>
			<p class="text-sm line-through text-[20px] leading-6">
				{{ props.data?.oldPrice }}
			</p>
			<div class="flex justify-between items-center">
				<p class="text-sm font-bold">{{ props.data?.newPrice }}</p>
				<button class="bg-[#454545]  py-2  md:py-3   px-3  md:px-5 rounded-[100px]">
					<img src="/111.png" />
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
