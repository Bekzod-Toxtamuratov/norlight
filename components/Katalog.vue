<template>
	<div class="container my-[100px]">
		<div class="md:flex justify-between">
			<h2 class="text-[#454545] font-bold text-[28px] md:text-[40px] leading-8">
				Каталог
			</h2>
			<nuxt-link to="/Katalog">
				<button
					class="max-md:mt-5 max-md:w-full flex items-center gap-3 md:text-[16px] text-[8px] border border-[#454545] py-3 max-md:pl-[150px] md:px-[50px] bg-[#FFFFFF] rounded-[100px]"
				>
					Весь каталог
					<img class="w-[14px] h-[10px]" src="/1.png" />
				</button>
			</nuxt-link>
		</div>
		<div class="box grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
			<div v-for="item in myData" :key="item.title">
				<div
					class="md:flex justify-between border bg-[#F2F2F2] py-[32px] px-[33px] rounded-[20px]"
				>
					<div class="flex flex-col justify-between">
						<p class="font-bold">{{ item.title }}</p>
						<p>{{ item.price }}</p>
					</div>
					<img
						class="w-[90px] h-[92px] md:w-[180px] md:h-[206px]"
						:src="item.img"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { reactive } from 'vue'
const myData = reactive([
	{
		title: 'Люстры',
		price: 'От 540₽',
		img: '/2.png',
	},
	{
		title: 'Светильники',
		price: 'От 540₽',
		img: '/3.png',
	},
	{
		title: 'Бра',
		price: 'От 540₽',
		img: '/4.png',
	},
	{
		title: 'Торшеры',
		price: 'От 540₽',
		img: '/5.png',
	},
	{
		title: 'Настольные',
		price: 'От 540₽',
		img: '/6.png',
	},
	{
		title: 'Споты',
		price: 'От 540₽',
		img: '/7.png',
	},
])
</script>

<style lang="scss" scoped></style>
