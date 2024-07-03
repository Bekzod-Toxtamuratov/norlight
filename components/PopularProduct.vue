<script setup>
useHead({
	title: 'Main page',
	link: {
		href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
		rel: 'stylesheet',
	},
})

const products = ref(null)
const loading = ref(false)
const getProducts = async () => {
	loading.value = true
	const { data, pending, error, refresh } = await useFetch(
		'https://6684d16356e7503d1ae140ec.mockapi.io/products'
	)
	// console.log(data._rawValue);
	products.value = data._rawValue
	loading.value = false
}
getProducts()
</script>
<template>
	<div class="container mt-[100px]">
		<div class="loading" v-if="loading">Loading ...</div>
		<div class="grid-cols-2 grid md:grid-cols-4 gap-4">
			<ProductCard v-for="item in products" :key="item?.id" :data="item" />
		</div>
	</div>
</template>

<style scoped></style>
