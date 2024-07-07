<script setup>
import axios from 'axios'
definePageMeta({
	layout: 'admin',
	middleware: ['auth'],
})
const data = ref(null)
const loading = ref(true)
const fetchProducts = () => {
	loading.value = true
	axios
		.get('https://66855e79b3f57b06dd4c795c.mockapi.io/products', {})
		.then(res => {
			data.value = res.data
			console.log('Succesfull')
		})
		.catch(err => {
			console.log('err', err)
		})
		.finally(() => {
			loading.value = false
		})
}

async function deleteProduct(id) {
	axios
		.delete(`https://66855e79b3f57b06dd4c795c.mockapi.io/products/${id}`)
		.then(response => {
			fetchProducts()
		})
		.catch(error => {
			console.error('Error deleting product:', error)
		})
}
onMounted(() => {
	fetchProducts()
})
</script>

<template>
	<div class="p-[15px]">
		<h1 class="text-[28px]">Manage Product</h1>
		<div v-if="loading" class="text-3xl text-gray-500 text-center py-10">
			<Loading />
		</div>
		<div class="grid-cols-2 grid md:grid-cols-4 gap-4 w-full">
			<div v-for="item in data" :key="item.id" :data="item">
				<div
					class="relative w-[100%] px-1 md:px-3 py-[30px] bg-white shadow-lg rounded-md"
				>
					<div class="flex justify-between">
						<img
							:src="item?.image"
							alt="image"
							class="w-[80%] md:w-[65%] h-[220px] object-cover mx-auto rounded mb-2"
						/>
					</div>
					<div class="flex flex-col gap-5 pl-6 mt-[30px]">
						<h2 class="text-[17px] max-w-[227px] text-[Manrope] line-clamp-1">
							{{ item?.title }}
						</h2>
						<div class="flex justify-between items-center">
							<div>
								<h3 class="text-[12px] text-[#9F9F9F] line-through">
									{{ item?.oldPrice }}₽
								</h3>
								<p class="text-[20px] primary">{{ item?.newPrice }}₽</p>
							</div>
							<nuxt-link :to="`/admin/${item.id}`">
								<button
									class="bg-[#fff] w-[55px] flex items-center p-[10px] rounded-[100px] border"
								>
									<img
										class="w-[15px] h-[16px] ml-[8px] mr-[8px]"
										src="../../public/adminpnaledit.png"
										alt=""
									/>
								</button>
							</nuxt-link>
							<button
								@click="deleteProduct(item.id)"
								class="bg-[#454545] w-[55px] flex items-center p-[10px] rounded-[100px]"
							>
								<img
									class="w-[15px] h-[16px] md:h-[18px] ml-[11px] mr-[11px]"
									src="../../public/adminpanelbasketicon.png"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
