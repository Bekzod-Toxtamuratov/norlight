<script setup>
import {computed} from 'vue'
import {usePiniaStore } from '../store'
const store = usePiniaStore()
const props = defineProps({
	data: Object,
})
const toogleLike = () => {
	store.addProductToLiked(props.data)
}
const toogleDelte=()=>{
	store.deleteProductFromLiked(props.data)
}
const isLiked = computed(() => {
	const index = store.likedProducts.findIndex(p => p.id == props.data.id)
	return index == -1
})


// const isDeleted = computed(() => {
//       const index = store.basket.findIndex(p => p.id == props.data.id)
//      return index == -1

// })

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
				<button  @click="toogleDelte"    class="bg-[#454545] py-[5px] px-[15px] rounded-[100px]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2em"
						height="30px"
						viewBox="0 0 16 16"
					>
						<path
							fill="currentColor"
							d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>
<style scoped></style>
