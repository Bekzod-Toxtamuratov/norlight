<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { usePiniaStore } from '../store'
const store = usePiniaStore()
const route = useRoute()
const product = ref(null)

const isLiked = computed(() => {
	console.log('islikd')
	const index = store.likedProducts.findIndex(p => p.id == route.params.id)
	return index == -1
})

const quantity = ref(1)
const toogleLike = () => {
	store.addProductToLiked(product.value)
}

const isOrdered = computed(() => {
	const index = store.basket.findIndex(p => p.id == product.value.id)
	return index == -1
})

const addBasket = () => {
	if (isOrdered.value) {
		store.basket.push({ ...product.value, quantity: quantity.value })
	} else {
		alert('this product is already in the basket')
	}
}
const fetchProduct = async () => {
	try {
		const response = await fetch(
			`https://6684d16356e7503d1ae140ec.mockapi.io/products/${route.params.id}`
		)
		const data = await response.json()
		product.value = {
			...data,
			image: data.image || '/default-image.png',
		}
	} catch (error) {
		console.error('Error fetching product:', error)
		product.value = {
			name: 'Default Product Name',
			brand: 'Default Brand',
			price: '0',
			oldPrice: '0',
			description: 'Default description',
			image: '/default-image.png',
		}
	}
}

const updateQuantity = amount => {
	if (quantity.value + amount > 0) {
		quantity.value += amount
	}
}

const totalNewPrice = computed(() => {
	return product.value
		? (product.value.newPrice * quantity.value).toFixed(2)
		: '0'
})

const totalOldPrice = computed(() => {
	return product.value
		? (product.value.oldPrice * quantity.value).toFixed(2)
		: '0'
})

onMounted(() => {
	fetchProduct()
})
</script>

<template>
	<div class="container pt-10">
		<div class="flex flex-col md:flex-row gap-6">
			<div class="md:w-1/2">
				<img
					v-if="product && product.image"
					:src="product.image"
					alt="Product Image"
					class="w-full h-auto object-cover rounded-lg shadow-lg"
				/>
				<div
					v-else
					class="w-full h-auto object-cover rounded-lg shadow-lg bg-gray-200 flex items-center justify-center"
				>
					<p class="text-gray-500">Image not available</p>
				</div>
			</div>
			<div class="md:w-1/2 space-y-4 py-4">
				<div class="text-4xl">{{ product?.title }}</div>
				<div class="text-gray-500">Scott</div>
				<div class="flex justify-between">
					<div class="text-gray-500">Артикул: 7655-188</div>
					<div class="flex gap-2"></div>
				</div>
				<div class="text-green-500">В наличии</div>
				<div class="flex items-center py-5">
					<div class="text-[40px] leading-[64px] font-bold text-black">
						{{ totalNewPrice ? totalNewPrice : '' }} ₽
					</div>
					<div class="line-through text-gray-400 justify-start pl-4">
						{{ totalOldPrice ? totalOldPrice : '' }} ₽
					</div>
				</div>
				<p class="text-[#4C4C4C] max-w-[607px] text-[16px] leading-7">
					{{ product?.description }}
				</p>
				<div class="flex items-center space-x-4">
					<div class="flex items-center border border-gray-300 rounded-lg">
						<button @click="updateQuantity(-1)" class="px-4 py-2 text-gray-600">
							-
						</button>
						<input
							type="text"
							:value="quantity"
							class="w-12 text-center border-none focus:outline-none"
							readonly
						/>
						<button @click="updateQuantity(1)" class="px-4 py-2 text-gray-600">
							+
						</button>
					</div>
					<button
						@click="addBasket"
						class="bg-black text-white rounded-lg py-2 px-6 hover:bg-gray-800"
					>
						В корзину
					</button>
					<button
						@click="toogleLike"
						class="border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-200"
					>
						<Icon
							v-if="isLiked"
							name="weui:like-outlined"
							color="black"
							class="text-xl md:text-2xl"
						/>
						<Icon
							v-else
							name="flat-color-icons:like"
							class="text-xl md:text-2xl"
							color="black"
						/>
					</button>
				</div>
			</div>
		</div>
		<Spec class="my-[50px]" />
	</div>
</template>

<style scoped></style>
