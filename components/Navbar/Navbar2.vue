<template>
	<div class="container">
		<div
			class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center"
		>
			<div class="flex items-center">
				<span class="text-green-500 text-xl mr-1">
					<img src="/gamburger.png" />
				</span>
				<h1 class="text-xl">Designer</h1>
			</div>
			<span class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
				<i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
			</span>

			<ul
				class="md:flex md:items-center md:mx-0 px-3 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in"
				:class="[open ? 'left-0' : 'left-[-100%]']"
			>
				<li class="md:mx-4 md:my-0 my-6" v-for="link in Links">
					<a class="text-xl hover:text-green-500" :href="link.link">{{
						link.name
					}}</a>
				</li>
				<Button> Get Started </Button>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { reactive } from 'vue'
import { ref } from 'vue'

import Button from './Button.vue'

const open = ref(true)

const Links = reactive([
	{ name: 'home', link: '#' },
	{ name: 'Services', link: '#' },
	{ name: 'About', link: '#' },
	{ name: 'Blogs', link: '#' },
	{ name: 'Contact', link: '#' },
])
</script>

<style lang="scss" scoped></style>
