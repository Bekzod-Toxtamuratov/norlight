<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const products = ref(null)
const isLoading = ref(true)
const hasError = ref(false)

onMounted(async () => {
	try {
		const response = await axios.get(
			'https://66855e79b3f57b06dd4c795c.mockapi.io/BlogProduct'
		)
		products.value = response.data
	} catch (error) {
		console.error('error:', error)
		hasError.value = true
	} finally {
		isLoading.value = false
	}
})
</script>

<template>
	<div class="container mt-[100px]">
		<div v-if="isLoading" class="text-center py-10">
			<Loading />
		</div>
		<div v-else>
			<div class="flex justify-between items-center mb-[53px]">
				<h2 class="text-[28px] max-md:mb-[-30px] font-bold md:text-[40px]">
					Блог
				</h2>
				<nuxt-link to="/blog">
					<button
						class="max-md:hidden border border-black rounded-full p-5 px-6 text-sm items-center flex gap-1 h-3 hover:bg-[#FF58065B] hover:text-white"
					>
						Перейти в блог
						<svg
							width="15"
							height="12"
							viewBox="0 0 15 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0 6H14M14 6L9 11M14 6L9 1" stroke="#454545" />
						</svg>
					</button>
				</nuxt-link>
			</div>

			<div v-if="hasError" class="text-center text-red-500">
				Ошибка при загрузке данных. Пожалуйста, попробуйте позже.
			</div>

			<div
				v-else-if="!products || products.length === 0"
				class="text-center text-gray-500"
			>
				Нет доступных блогов.
			</div>

			<div v-else class="grid md:grid-cols-3 gap-4">
				<BlogCard v-for="item in products" :key="item?.id" :data="item" />
			</div>

			<nuxt-link to="/blog">
				<button
					class="md:hidden border w-full text-center mt-5 border-black rounded-full p-5 px-6 text-sm justify-center items-center flex gap-1 h-3 hover:bg-[#FF58065B] hover:text-white"
				>
					Перейти в блог
					<svg
						width="15"
						height="12"
						viewBox="0 0 15 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 6H14M14 6L9 11M14 6L9 1" stroke="#454545" />
					</svg>
				</button>
			</nuxt-link>
		</div>
	</div>
</template>

<style scoped></style>
