<script setup>
import axios from 'axios'
const isLoading = ref(true)
const products = ref([])
onMounted(async () => {
	try {
		const response = await axios.get(
			`https://6684d16356e7503d1ae140ec.mockapi.io/products`
		)
		products.value = response.data
		isLoading.value = false
	} catch (error) {
		console.log('error: ' + error)
		isLoading.value = false
	}
})
</script>
<template>
	<div class="container mt-[100px]">
		{{ products.value }}
		<div class="flex items-center justify-between mb-[90px]">
			<h2 class="text-[28px] md:text-[40px] font-bold text-[#454545]">
				Популярные товары
			</h2>
			<div class="flex items-center justify-center">
				<nuxt-link to="/products">
					<button
						class="max-md:hidden border border-black rounded-full p-5 px-6 text-sm items-center flex gap-1 h-3 hover:bg-[#FF58065B] hover:text-white"
					>
						Все товары
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
		</div>
		<div v-if="isLoading" class="text-3xl text-gray-500 text-center py-10">
			<Loading />
		</div>
		<div v-else class="grid-cols-2 grid md:grid-cols-4 gap-4">
			<ProductCard v-for="item in products" :key="item?.id" :data="item" />
		</div>

		<nuxt-link to="/">
			<button
				class="md:hidden w-full mt-10 border border-black rounded-full p-5 px-6 text-sm items-center justify-center flex gap-1 h-3 hover:bg-[#FF58065B] hover:text-white"
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
<style scoped></style>
