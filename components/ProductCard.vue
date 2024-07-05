<script setup>
import { computed } from 'vue'
import { usePiniaStore } from '../store'
const store = usePiniaStore()
const props = defineProps({
	data: Object,
})
const toogleLike = () => {
	store.addProductToLiked(props.data)
}
const toogleDelte = () => {
	store.addProductToBasket(props.data)
}
const isLiked = computed(() => {
	const index = store.likedProducts.findIndex(p => p.id == props.data.id)
	return index == -1
})
const isInKorzina = computed(() => {
	const index = store.basket.findIndex(p => p.id == props.data.id)
	return index == -1
})
</script>
<template>
	<div class="bg-white">
		<div class="flex gap-y-5 items-start">
			<nuxt-link :to="'/products/' + props.data?.id">
				<img
					:src="props.data?.image"
					alt="image"
					class="w-full md:w-[90%] h-[126px] md:h-[216px] object-cover md:pl-6 mb-2"
				/>
			</nuxt-link>
			<button @click="toogleLike">
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
		<div class="pl-6">
			<h2 class="text-[16px] md:text-xl">
				{{ data?.title }}
			</h2>
			<p class="text-sm line-through text-[20px] leading-6">
				{{ props.data?.oldPrice }}
			</p>
			<div class="flex justify-between items-center">
				<p class="text-sm font-bold">{{ data?.newPrice }}</p>
				<button
					@click="toogleDelte"
					class="bg-[#454545] py-[5px] px-[15px] rounded-[100px]"
				>
					<div class="py-3">
						<button
							@click="toggleBasket"
							class="bg-[#454545] px-4 rounded-2xl py-2"
						>
							<Icon
								v-if="isInKorzina"
								name="vaadin:cart-o"
								width="24"
								height="24"
								style="color: white"
								class="text-2xl"
							/>
							<Icon
								v-else
								name="material-symbols:delete-outline"
								width="24"
								height="24"
								style="color: white"
								class="text-2xl"
							/>
						</button>
					</div>
				</button>
			</div>
		</div>
	</div>
</template>
<style scoped></style>
