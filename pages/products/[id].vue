<template>
	<div class="container mx-auto p-6">
		<div class="flex flex-col md:flex-row gap-6">
			<!-- Product Image -->
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

			<!-- Product Details -->
			<div class="md:w-1/2 space-y-4 py-4">
				<h1 class="text-3xl font-semibold">{{ product?.name }}</h1>
				<div class="text-4xl">{{ product?.title }}</div>
				<div class="text-gray-500">Scott</div>
				<div class="flex justify-between">
					<div class="text-gray-500">Артикул: 7655-188</div>
					<div class="flex gap-2">
						<img src="/images/socials.png" alt="" />
						<img src="/images/socials.png" alt="" class="hover:bg-slate-800" />
						<img src="/images/socials.png" alt="" class="hover:bg-slate-800" />
						<img src="/images/socials.png" alt="" class="hover:bg-slate-800" />
						<img src="/images/socials.png" alt="" class="hover:bg-slate-800" />
					</div>
				</div>

				<div class="text-green-500">В наличии</div>

				<div class="flex items-center py-5">
					<div class="text-3xl font-bold text-black">{{ totalNewPrice }} ₽</div>
					<div class="text-xl line-through text-gray-400 justify-start pl-4">
						{{ totalOldPrice }} ₽
					</div>
				</div>

				<p class="text-gray-600">{{ product?.description }}</p>

				<!-- Quantity and Add to Cart -->
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
						class="bg-black text-white rounded-lg py-2 px-6 hover:bg-gray-800"
					>
						В корзину
					</button>
					<button
						class="border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-200"
					>
						<img src="/images/heart.png" alt="" />
					</button>
				</div>
			</div>
		</div>
		<Spec class="my-[50px]" />
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const product = ref(null)
const quantity = ref(1)

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
		? (product.value.newPrice * quantity.value).toFixed(2): '0'
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

<style scoped></style>
