<script setup>
import { usePiniaStore } from '../store'

const store = usePiniaStore()

const orderDeleted = index => {
	store.orders.splice(index, 1)
}

definePageMeta({
	layout: 'admin',
	// middleware: ['auth'],
})
</script>

<template>
	<h1 class="text-[40px] p-[20px]">Orders</h1>
	<div
		class="w-full mt-[20px]"
		v-for="(item, index) in store.orders"
		:key="item"
	>
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
				<div v-for="product in item.products" :key="product">
					<p>{{ product.title }}</p>
				</div>
			</div>
			<div>
				<p class="text-[18px] font-semibold mb-[8px]">Count</p>
				<div v-for="product in item.products" :key="product">
					<p>{{ product.count }}</p>
				</div>
			</div>
			<div>
				<p class="text-[18px] font-semibold mb-[8px]">Total Price</p>
				<p>{{ item.totalPrice }}</p>
			</div>
			<div>
				<button
					@click="orderDeleted(index)"
					class="py-2 px-4 bg-[blue] text-white rounded-full"
				>
					Order Deleted
				</button>
				<!-- <Icon icon="mingcute:delete-fill" /> -->
			</div>
		</div>
	</div>
</template>

<style scoped></style>
