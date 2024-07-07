<template>
	<div class="container mx-auto p-10">
		<div class="flex justify-between pb-4">
			<h2 class="text-2xl font-bold mb-6 text-center flex">Каталог</h2>

			<nuxt-link to="/Katalog">
				<button
					class="hover:translate-x-4 max-md:hidden border border-black rounded-full p-5 px-6 text-sm items-center flex gap-1 h-3 hover:bg-[#FF58065B] hover:text-white"
				>
					Весь каталог
					<svg
						width="15"
						height="12"
						viewBox="0 0 15 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 6H14M14 6L9 11M14 6L9 1" stroke="#454545" />
					</svg>
				</button>
			</nuxt-link>
		</div>

		<router-link to="/catalog">
			<div class="grid grid-cols-2 md:grid-cols-3 gap-6">
				<div
					v-for="item in catalogItems"
					:key="item.title"
					class="bg-gray-100 p-4 rounded-lg shadow flex flex-col hover:bg-[#FF58065B] hover:text-white"
				>
					<div class="flex flex-col justify-between h-full p-2">
						<h3
							class="text-[16px] md:text-xl font-semibold mb-2 hover:text-white"
						>
							{{ item.title }}
						</h3>
						<div class="flex justify-end">
							<img
								:src="item.image"
								:alt="item.title"
								class="max-md:mx-auto max-md:w-3/3 object-cover rounded-md"
							/>
						</div>

						<p class="text-gray-500 hover:text-white text-[14px]">
							{{ item.price }}
						</p>
					</div>
				</div>
			</div>
		</router-link>

		<nuxt-link to="/katalog">
			<button
				class="hidden justify-center max-md:flex border w-full mt-5 border-black rounded-full p-5 px-6 text-sm items-center gap-1 h-3 hover:bg-[#FF58065B] hover:text-white"
			>
				Весь каталог
				<svg
					width="15"
					height="12"
					viewBox="0 0 15 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 6H14M14 6L9 11M14 6L9 1" stroke="#454545" />
				</svg>
			</button>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			catalogItems: [
				{ title: 'Люстры', image: '/images/lyustra.png', price: 'От 540₽' },
				{ title: 'Светильники', image: 'images/svetil.png', price: 'От 540₽' },
				{ title: 'Бра', image: '/images/bra.png', price: 'От 540₽' },
				{ title: 'Торшеры', image: '/images/torsher.png', price: 'От 540₽' },
				{
					title: 'Настольные лампы',
					image: '/images/lampa.png',
					price: 'От 540₽',
				},
				{ title: 'Споты', image: '/images/spot.png', price: 'От 540₽' },
			],
		}
	},
}
</script>
<style scoped></style>
