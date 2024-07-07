<template>
	<div class="container">
		<h1
			class="text-[28px] leading-[38px] md:text-[64px] font-bold md:leading-[71px] my-[30px]"
		>
			Избранные товары
		</h1>
		<div
			v-if="store.likedProducts.length == 0"
			class="flex flex-col items-center justify-between mt-20"
		>
			<h2 class="text-2xl md:text-5xl text-center text-black mb-5">
				No your Favourite Product
			</h2>
			<i class="fas fa-box-open text-5xl md:text-9xl"></i>
		</div>
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
import '@fortawesome/fontawesome-free/css/all.css'
import { usePiniaStore } from '../store'
const store = usePiniaStore()
</script>
<style lang="scss" scoped></style>
