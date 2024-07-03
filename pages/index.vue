<script setup>
import BlogProduct from '../components/BlogProduct.vue'
import PopularProduct from '../components/PopularProduct.vue'

// definePageMeta({
// 	layout: 'user',
// })
useHead({
	title: 'Main page',
	link: {
		href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
		rel: 'stylesheet',
	},
})
</script>
<template>
	<!-- <NavbarHeader /> -->
	<div class="">
		<Carusel />
		<Katalog />
		<Pochemu />
		<PopularProduct />
		<Swipper />
		<BlogProduct />
		<div class="container"></div>
	</div>
</template>

<style scopeds></style>
