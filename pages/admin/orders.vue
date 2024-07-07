<script setup>
import { usePiniaStore } from '../store'

const store = usePiniaStore()
definePageMeta({
	layout: 'admin',
	middleware: ['auth'],
})
</script>

<template>
	<h1 class="text-[40px] p-[20px]">Orders</h1>
	<div class="w-full mt-[20px]" v-for="item in store.orders">
		<div class="flex rounded-[15px] justify-between p-[10px] border">
			<div>
				<p class="text-[18px] font-semibold mb-[8px]">Full Name</p>
				<p>{{ item.full_name }}</p>
			</div>
			<div class="item-center">
				<p class="text-[18px] font-semibold mb-[8px]">Phone</p>
				<p>{{ item.phone }}</p>
			</div>
			<div>
				<p class="text-[18px] font-semibold mb-[8px]">Email</p>
				<p>{{ item.email }}</p>
			</div>
			<div>
				<p class="text-[18px] font-semibold mb-[8px]">Address</p>
				<p>{{ item.address }}</p>
			</div>
			<div>
				<p class="text-[18px] font-semibold mb-[8px]">Product Name</p>
				<div v-for="product in item.products">
					<p>{{ product.title }}</p>
				</div>
			</div>
			<div>
				<p class="text-[18px] font-semibold mb-[8px]">Count</p>
				<div v-for="product in item.products">
					<p>{{ product.count }}</p>
				</div>
			</div>
			<div>
				<p class="text-[18px] font-semibold mb-[8px]">Total Price</p>
				<p>{{ item.totalPrice }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
