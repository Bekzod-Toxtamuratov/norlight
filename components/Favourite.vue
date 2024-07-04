<template>
	<div>
		<h1>Favourites</h1>
		<ProductCard
			v-for="item in store.likedProducts"
			:data="item"
			:key="item.id"
		/>
	</div>
</template>

<script setup>
import { usePiniaStore } from '../store'
import ProductCard from './ProductCard.vue'
const store = usePiniaStore()
</script>
<style lang="scss" scoped></style>
