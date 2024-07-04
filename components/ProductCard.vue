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
const isLiked = computed(() => {
	const index = store.likedProducts.findIndex(p => p.id == props.data.id)
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
					class="text-2xl"
				/>
				<Icon
					v-else
					name="flat-color-icons:like"
					class="text-2xl"
					color="black"
				/>
			</button>
		</div>
		<div class="pl-6">
			<h2 class="text-[16px] md:text-xl max-w-[118px] md:max-w-[227px]">
				{{ data?.title }}
			</h2>
			<p class="text-sm line-through text-[20px] leading-6">
				{{ props.data?.oldPrice }}
			</p>
			<div class="items-center">
				<p class="text-sm font-bold">{{ data?.newPrice }}</p>
			</div>
		</div>
	</div>
</template>
<style scoped></style>
