<script setup>
import BlogCard from './BlogCard.vue'

const products = ref(null)
const loading = ref(false)
const getProducts = async () => {
	loading.value = true
	const { data, pending, error, refresh } = await useFetch(
		'https://66855e79b3f57b06dd4c795c.mockapi.io/BlogProduct'
	)
	products.value = data._rawValue
	loading.value = false
}
getProducts()
</script>
<template>
	<div class="container mt-[100px]">
		<div class="loading" v-if="loading">Loading ...</div>
		<div class="flex justify-between ">
			<h2 class="text-[40px]">Блог</h2>
			<div class="flex items-center justify-center mb-8">
				<button
					class="max-md:w-full px-6 flex items-center gap-3 text-[16px] border border-[#454545] py-3 bg-[#FFFFFF] rounded-[100px]"
				>
					Весь каталог
					<img class="w-[14px] h-[10px]" src="/1.png" />
				</button>
			</div>
		</div>
		<div class="md:grid md:grid-cols-3 gap-4">
			<BlogCard v-for="item in products" :key="item?.id" :data="item" />
		</div>
	</div>
</template>
<style scoped></style>
