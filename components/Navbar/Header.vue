<script setup>
import { reactive } from 'vue'

const myData = reactive([
	{
		name: 'Доставка и оплата',
		link: '/Доставка',
	},
	{
		name: 'Возврат',
		link: '/Возврат',
	},
	{
		name: 'Гарантии',
		link: '/Гарантии',
	},
	{
		name: 'Контакты',
		link: '/Контакты',
	},
	{
		name: 'Блог',
		link: '/Блог',
	},
])
</script>

<template>
	<header>
		<div class="flex container mb-8 justify-between">
			<div class="py-4 flex items-center justify-between bg-[#FFFFFF]">
				<div class="flex gap-x-8 text-[#454545]">
					<div v-for="item in myData" :key="item.link">
						<nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
					</div>
				</div>
			</div>
			<div class="flex gap-3 items-center">
				<p class="cursor-pointer">8 (800) 890-46-56</p>
				<button>Заказать звонок</button>
			</div>
		</div>
		<div class="container flex gap-3 items-center">
			<div class="flex items-center gap-[4px] pr-[30px]">
				<img class="w-[27.44px] h-[27px]" src="/sun.png" />
				<h2 class="text-[#454545] text-[29px] font-medium cursor-pointer">
					NORNLIGHT
				</h2>
			</div>
			<button
				class="flex bg-[#454545] text-[white] py-3 px-8 items-center gap-3 rounded-[100px]"
			>
				<img src="/gamburger.png" />
				<p>Каталог</p>
			</button>

			<div class="relative w-[50%]">
				<input
					class="py-3 w-full rounded-[50px] border pl-5 outline-none"
					placeholder="Поиск по товарам"
				/>
				<img class="absolute top-1/2 -translate-y-1/2 right-5" src="/search.png" />
			</div>

			<div class="flex gap-[22px] pl-[40px]">
				<div class=" ">
					<img class="w-5 h-[18px]" src="/yurak.png" />
					<p class="mt-[6px] text-[12px] leading-3 font-semibold">Избранное</p>
				</div>
				<div class=" ">
					<img class="w-5 h-[18px]" src="/sravnaniya.png" />
					<p class="mt-[6px] text-[12px] leading-3 font-semibold">Сравнение</p>
				</div>
				<div class=" ">
					<img class="w-5 h-[18px]" src="/korzinka.png" />
					<p class="mt-[6px] text-[12px] leading-3 font-semibold">Корзина</p>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped></style>
