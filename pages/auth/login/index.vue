<template>
	<div class="bg-gray-300 h-screen flex justify-center items-center">
		<div class="bg-white w-[500px] p-10 rounded">
			<h1 class="text-center text-3xl mb-5">Login</h1>
			<form @submit.prevent="loginUser" class="flex flex-col gap-5">
				<label for="">
					Username
					<input
						v-model="userData.username"
						class="text-black text-xl w-full py-3 px-5 border rounded outline-none focus:border-primary"
						type="text"
					/>
				</label>
				<label for="" class="relative">
					Password
					<input
						v-model="userData.password"
						class="text-black text-xl w-full py-3 px-5 border rounded outline-none focus:border-primary"
						:type="check ? 'password' : 'text'"
					/>
					<button
						type="button"
						@click="myfunction"
						class="absolute top-1/2 right-5 transform -translate-y-1/2"
					></button>
				</label>
				<button
					type="submit"
					class="py-3 px-5 text-xl bg-primary rounded text-white"
				>
					Login
				</button>
			</form>
		</div>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../../../api2'

const check = ref(false)
const router = useRouter()
const userData = reactive({
	username: 'emilys',
	password: 'emilyspass',
})

const myfunction = () => {
	check.value = !check.value
	console.log('check', check.value)
}

const loginUser = async () => {
	try {
		const res = await api.post('/auth/login', userData)
		console.log('API Response:', res)

		// Handle different response structures
		const responseData = res.data || res
		if (responseData) {
			localStorage.setItem('user', JSON.stringify(responseData))
			router.push('/')
		} else {
			throw new Error('Invalid response data')
		}
	} catch (err) {
		console.error('Login error:', err)
	}
}
</script>

<style scoped></style>
