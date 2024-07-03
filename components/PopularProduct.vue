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
		<div class="md:hidden">
			<button
				class="max-md:mt-5 max-md:w-full flex items-center gap-3 text-[16px] border border-[#454545] py-3 max-md:pl-[150px] md:px-[50px] bg-[#FFFFFF] rounded-[100px]"
			>
				Весь каталог
				<img class="w-[14px] h-[10px]" src="/1.png" />
			</button>
		</div>
	</div>
</template>

<style scoped></style>
