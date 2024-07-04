<template>
	<div class="container">
		<h1>Favourites</h1>
		<div class="grid-cols-2 grid md:grid-cols gap-2">
			<ProductCard
				v-for="item in store.likedProducts"
				:data="item"
				:key="item.id"
			/>
		</div>
	</div>
</template>

<script setup>
import { usePiniaStore } from '../store'
const store = usePiniaStore()
</script>
<style lang="scss" scoped></style>
