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
				class="w-full md:w-[80%] h-[126px] md:h-[216px] object-cover md:pl-6 rounded mb-2"
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 48 48"
			>
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="4"
					d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"
				/>
			</svg>
		</div>

		<div class="flex flex-col gap-1 md:gap-5 pl-6">
			<h2 class="text-[16px] md:text-xl max-w-[118px] md:max-w-[227px]">
				Card title: {{ props.data?.title }}
			</h2>
			<p class="text-sm line-through text-[20px] leading-6">
				{{ props.data?.oldPrice }}
			</p>
			<div class="flex justify-between items-center">
				<p class="text-sm font-bold">{{ props.data?.newPrice }}</p>
				<button class="bg-[#454545] py-2 md:py-3 px-3 md:px-5 rounded-[100px]">
					<img src="/111.png" />
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
