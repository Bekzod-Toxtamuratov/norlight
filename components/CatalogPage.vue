<template>
	<div class="container mx-auto pt-8">
		<div class="flex flex-col md:flex-row justify-between items-center pb-4">
			<div class="flex justify-between gap-2">
				<nuxt-link to="/"> Главная > </nuxt-link>
				<nuxt-link to="/katalog"><p>Каталог</p></nuxt-link>
			</div>
		</div>
		<div class="flex justify-between pb-4">
			<h2 class="text-2xl font-bold mb-6 text-center flex">Каталог</h2>
		</div>
		<div class="grid grid-cols-2 md:grid-cols-3 gap-6">
			<div
				v-for="item in catalogItems"
				:key="item.title"
				class="bg-gray-100 p-4 rounded-lg shadow flex flex-col hover:bg-changeHover hover:text-white"
			>
				<div class="flex flex-col justify-between h-full p-2">
					<h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
					<div class="flex justify-end">
						<img
							:src="item.image"
							:alt="item.title"
							class="max-md:mx-auto max-md:w-full object-cover rounded-md"
						/>
					</div>
					<p class="text-gray-500">{{ item.price }}</p>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-2 md:grid-cols-2 gap-6 pt-5 pb-10">
			<div
				v-for="item in doubleItems"
				:key="item.title"
				class="bg-gray-100 p-4 rounded-lg shadow flex flex-col hover:bg-changeHover hover:text-white"
			>
				<div class="flex flex-col justify-between h-full p-2">
					<h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
					<div class="flex justify-end">
						<img
							:src="item.image"
							:alt="item.title"
							class="max-md:mx-auto max-md:w-full object-cover rounded-md"
						/>
					</div>

					<p class="text-gray-500">{{ item.price }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const catalogItems = reactive([
	{ title: 'Люстры', image: '/images2/lyustra.png', price: 'От 540₽' },
	{ title: 'Светильники', image: 'images2/svetil.png', price: 'От 540₽' },
	{ title: 'Бра', image: '/images2/bra.png', price: 'От 540₽' },
	{ title: 'Торшеры', image: '/images2/torsher.png', price: 'От 540₽' },
	{
		title: 'Настольные лампы',
		image: '/images2/lampa.png',
		price: 'От 540₽',
	},
	{ title: 'Споты', image: '/images2/spot.png', price: 'От 540₽' },
	{
		title: 'Самые низкие цены',
		price: 'От 540₽',
		image: '/images2/track.png',
	},
	{
		title: 'Быстрая доставка',
		price: 'От 540₽',
		image: '/images2/street.png',
	},
	{
		title: 'Большой ассортимент',
		price: 'От 540₽',
		image: '/images2/tech.png',
	},
])
const doubleItems = reactive([
	{
		title: 'Быстрая доставка',
		price: 'От 540₽',
		image: '/images2/diod.png',
	},
	{
		title: 'Большой ассортимент',
		price: 'От 540₽',
		image: '/images2/complect.png',
	},
])
</script>

<style scoped></style>
