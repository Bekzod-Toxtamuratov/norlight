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
	<header class="sticky top-0 z-50 bg-white shadow-md">
		<div class="container mx-auto flex justify-between py-4">
			<div class="flex items-center gap-x-8 text-gray-700">
				<div v-for="item in myData" :key="item.link">
					<nuxt-link :to="item.link" class="hover:text-gray-900">{{
						item.name
					}}</nuxt-link>
				</div>
			</div>
			<div class="flex items-center gap-3">
				<p class="cursor-pointer">8 (800) 890-46-56</p>
				<button class="bg-blue-500 text-white px-4 py-2 rounded-full">
					Заказать звонок
				</button>
			</div>
		</div>
		<div class="container mx-auto flex gap-3 items-center py-4">
			<div class="flex items-center gap-2 pr-6">
				<img class="w-7 h-7" src="/sun.png" alt="Logo" />
				<h2 class="text-gray-700 text-2xl font-medium cursor-pointer">
					NORNLIGHT
				</h2>
			</div>
			<button
				class="flex bg-gray-700 text-white py-2 px-6 items-center gap-2 rounded-full"
			>
				<img src="/gamburger.png" alt="Menu" />
				<p>Каталог</p>
			</button>
			<div class="relative w-1/2">
				<input
					class="py-2 w-full rounded-full border pl-5 pr-10 outline-none"
					placeholder="Поиск по товарам"
				/>
				<img
					class="absolute top-1/2 transform -translate-y-1/2 right-3"
					src="/search.png"
					alt="Search"
				/>
			</div>
			<div class="flex gap-6 pl-10">
				<div class="text-center">
					<img class="w-5 h-5 mx-auto" src="/yurak.png" alt="Favorites" />
					<p class="mt-1 text-xs font-semibold">Избранное</p>
				</div>
				<div class="text-center">
					<img class="w-5 h-5 mx-auto" src="/sravnaniya.png" alt="Comparison" />
					<p class="mt-1 text-xs font-semibold">Сравнение</p>
				</div>
				<div class="text-center">
					<img class="w-5 h-5 mx-auto" src="/korzinka.png" alt="Cart" />
					<p class="mt-1 text-xs font-semibold">Корзина</p>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped></style>
