<script setup>
import axios from 'axios'
const emit = defineEmits(['close'])
const fullName = ref('')
const phone = ref('')
const closeModal = () => {
	emit('close')
}
const handleSubmit = async () => {
	closeModal()
}
</script>
<template>
	<div
		class="w-full h-full bg-primary/10 fixed top-0 z-10"
		@click="closeModal"
	></div>
	<div
		class="container relative max-w-[390px] md:max-w-[800px] bg-white p-16 z-20 rounded-[50px]"
	>
		<button class="absolute right-6 top-6 font-bold" @click="closeModal">
			<img src="/public/close.svg" alt="" />
		</button>
		<h1 class="md:text-6xl text-3xl font-bold mb-14">
			Заполните,<br />
			и мы перезвоним
		</h1>
		<form class="flex flex-col" @submit.prevent="handleSubmit">
			<input
				v-model="fullName"
				class="border py-4 px-5 mb-3 rounded-full border-primary text-primary/50 outline-none"
				type="text"
				placeholder="ФИО"
			/>
			<input
				v-model="phone"
				class="border py-4 px-5 rounded-full border-primary text-primary/50 outline-none"
				type="tel"
				placeholder="телефон"
			/>
			<button
				type="submit"
				class="border mt-7 py-4 bg-primary text-white rounded-full"
			>
				Отправить
			</button>
		</form>
	</div>
</template>

<style lang="scss" scoped></style>
