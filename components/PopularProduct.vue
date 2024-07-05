<script setup>
const loading = ref(false)
loading.value = true
const { data: products } = await useFetch(
	'https://6684d16356e7503d1ae140ec.mockapi.io/products'
)
loading.value = false
</script>
<template>
	<div class="container mt-[100px]">
		<div class="loading" v-if="loading">Loading ...</div>
		<div class="grid-cols-2 grid md:grid-cols-4 gap-4">
			<ProductCard v-for="item in products" :key="item?.id" :data="item" />
		</div>
		<div class="md:hidden flex items-center justify-center">
			<button
				class="max-md:mt-5 max-md:w-full flex items-center gap-3 text-[16px] border border-[#454545] py-3 max-md:pl-[120px] bg-[#FFFFFF] rounded-[100px]"
			>
				Весь каталог
				<img class="w-[14px] h-[10px]" src="/1.png" />
			</button>
		</div>
	</div>
</template>
<style scoped></style>
