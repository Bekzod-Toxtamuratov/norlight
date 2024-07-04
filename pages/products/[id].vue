<template>
	<div class="my-10">
		<div class="container p-6">
			<div v-if="product">
				<div class="grid grid-cols-2 gap-10">
					<div class="">
						<img
							class="w-full h-auto object-cover rounded-lg shadow-lg"
							:src="product.image"
							alt=""
						/>
					</div>
					<div>
						<h1 class="text-[40px] font-medium">{{ product.title }}</h1>
						<p class="text-[#B3B3B3] font-normal mb-4">Scott</p>
						<div class="flex">
							<p class="text-[#B3B3B3]">Артикул : 7655-188</p>
							<div class="flex gap-2">
								<img
									src="/images/socials.png"
									alt=""
									class="hover:bg-slate-800"
								/>
								<img
									src="/images/socials.png"
									alt=""
									class="hover:bg-slate-800"
								/>
								<img
									src="/images/socials.png"
									alt=""
									class="hover:bg-slate-800"
								/>
								<img
									src="/images/socials.png"
									alt=""
									class="hover:bg-slate-800"
								/>
								<img
									src="/images/socials.png"
									alt=""
									class="hover:bg-slate-800"
								/>
							</div>
						</div>
						<div class="flex items-center gap-8 mt-10">
							<h2 class="font-medium text-[40px]">{{ product.newPrice }} $</h2>
							<h2 class="font-medium text-[18px]">{{ product.oldPrice }} $</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import api from '@/api'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const product = ref(null)
const loading = ref(false)
const backPage = () => {
	router.go(-1)
}
const fetchProduct = () => {
	loading.value = true
	api
		.get(`/products/${route.params.id}`)
		.then(res => {
			product.value = res.data
			console.log('ok', product.value)
		})
		.catch(err => console.log(err))
		.finally(() => {
			loading.value = false
		})
}
fetchProduct()
</script>

<style lang="scss" scoped></style>
