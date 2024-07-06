<script setup>
useHead({
	title: 'Main page',
	link: {
		href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
		rel: 'stylesheet',
	},
})
definePageMeta({
	layout: 'default',
})
</script>
<template>
	<div class="">
		<Carusel />
		<Catalog />
		<why-norlight />
		<PopularProducts />
		<Swipper />
		<BlogProduct />
		<Manufacturing class="mt-[100px]" />
	</div>
</template>

<style scopeds></style>
