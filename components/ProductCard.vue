<script setup>
import { computed } from 'vue'
import { usePiniaStore } from '../store'

const store = usePiniaStore()

const props = defineProps({
	data: Object,
})

const toggleLike = () => {
	store.addProductToLiked(props.data)
}

const toggleDelete = () => {
	store.addProductToBasket(props.data)
}

const isLiked = computed(() => {
	return store.likedProducts.findIndex(p => p.id === props.data.id) === -1
})

const isInKorzina = computed(() => {
	return store.basket.findIndex(p => p.id === props.data.id) !== -1
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
			<button @click="toggleLike">
				<Icon
					:name="isLiked ? 'weui:like-outlined' : 'flat-color-icons:like'"
					color="black"
					class="text-xl md:text-2xl"
				/>
			</button>
		</div>
		<div class="md:pl-6">
			<h2
				class="text-[14px] md:text-[16px] md:text-xl line-clamp-1 overflow-hidden"
			>
				{{ props.data?.title }}
			</h2>
			<p class="text-sm line-through text-[20px] leading-6">
				{{ props.data?.oldPrice }}
			</p>
			<div class="flex justify-between items-center">
				<p class="text-sm font-bold">{{ props.data?.newPrice }}</p>
				<button
					@click="toggleDelete"
					class="bg-[#454545] py-[3px] px-[3px] rounded-[100px] md:py-[8px] md:px-[10px]"
				>
					<Icon
						:name="
							isInKorzina ? 'vaadin:cart-o' : 'material-symbols:delete-outline'
						"
						style="color: white"
						class="text-xl md:text-2xl"
					/>
				</button>
			</div>
		</div>
	</div>
</template>

<!-- Scoped styles can be added if needed -->
<style scoped>
/* Add scoped styles here if necessary */
</style>
