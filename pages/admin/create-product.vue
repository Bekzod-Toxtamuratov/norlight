<script setup>
import axios from 'axios'
definePageMeta({
	layout: 'admin',
	// middleware: ['auth'],
})
const router = useRouter()
const newProduct = {
	title: '',
	newPrice: '',
	oldPrice: '159.0',
	image: '',
	description: '',
}

function createProduct() {
	try {
		axios.post(
			'https://66855e79b3f57b06dd4c795c.mockapi.io/products',
			newProduct
		)
		router.push('/admin/dashboard')
	} catch (error) {
		console.error(error)
	}
}
</script>

<template>
	<div class="ml-[30px]">
		<h1 class="text-[28px]">Create Product</h1>
		<div class="mt-[20px]">
			<p class="text-[16px] text-[16px]">Title</p>
			<input
				class="w-[620px] text-[18px] p-[10px] h-[50px] bg-[#F8F8F8] rounded-[10px] mt-[10px]"
				v-model="newProduct.title"
				required
				type="text"
			/>
		</div>
		<div class="mt-[20px]">
			<p class="text-[16px] text-[16px]">Price</p>
			<input
				class="w-[620px] text-[18px] p-[10px] h-[50px] bg-[#F8F8F8] rounded-[10px] mt-[10px]"
				v-model="newProduct.newPrice"
				required
				type="text"
			/>
		</div>
		<div class="mt-[20px]">
			<p class="text-[16px] text-[16px]">Image-url</p>
			<input
				class="w-[620px] text-[18px] p-[10px] h-[50px] bg-[#F8F8F8] rounded-[10px] mt-[10px]"
				v-model="newProduct.image"
				required
				type="text"
			/>
		</div>
		<div class="mt-[20px]">
			<p class="text-[16px] text-[16px]">Description</p>
			<input
				class="w-[620px] text-[18px] pl-[10px] pt-[30px] h-[50px] pb-[120px] bg-[#F8F8F8] rounded-[10px] mt-[10px]"
				v-model="newProduct.description"
				required
				type="text"
			/>
		</div>
		<button
			@click="createProduct"
			type="submit"
			class="w-[180px] h-[50px] bg-[#454545] rounded-[8px] text-[#fff] mt-[20px]"
		>
			Create
		</button>
	</div>
</template>

<style scoped></style>
