<script setup>
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
		<Product />
		<Swipper />
		<div class="container"></div>
	</div>
</template>

<style scopeds></style>
