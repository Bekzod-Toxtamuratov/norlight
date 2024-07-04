<template>
	<div class="container">
		<h1 class="text-[64px] font-bold leading-[71px] my-[30px]">
			Избранные товары
		</h1>
		<div class="grid-cols-4 grid md:grid-cols mb-[100px] gap-2">
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
