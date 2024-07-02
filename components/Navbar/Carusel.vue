<template>
	<div class="">
		<swiper :pagination="true" :modules="modules" class="mySwiper">
			<swiper-slide><Intro /></swiper-slide>
			<swiper-slide><Intro /></swiper-slide>
			<swiper-slide><Intro /></swiper-slide>
			<swiper-slide><Intro /></swiper-slide>
			<swiper-slide><Intro /></swiper-slide>
			<swiper-slide><Intro /></swiper-slide>
			<swiper-slide><Intro /></swiper-slide>
			<swiper-slide><Intro /></swiper-slide>
		</swiper>
	</div>
</template>
<script>
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { defineComponent, ref } from 'vue'
import Intro from './Intro.vue'

export default defineComponent({
	components: {
		Swiper,
		SwiperSlide,
		Intro,
	},
	setup() {
		const modules = ref([Pagination])
		return {
			modules,
		}
	},
})
</script>

<style scoped>
/* Add any additional styles here */
</style>
