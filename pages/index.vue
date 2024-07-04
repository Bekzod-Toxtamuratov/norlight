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
		<PopularProduct />
		<Swipper />
		<BlogProduct />
		<Manufacturing class="mt-[100px]" />
	</div>
</template>

<style scopeds></style>
