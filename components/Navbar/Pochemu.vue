<template>
	<div class="container mx-auto p-6">
		<div class="mt-16">
			<h2 class="text-2xl font-bold mb-6 text-center">Почему NORNLIGHT?</h2>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
				<div
					v-for="benefit in benefits"
					:key="benefit.title"
					class="bg-white p-4 rounded-lg shadow text-center"
				>
					<div class="mb-4">
						<img :src="benefit.imageSrc" alt="" class="w-12 h-12 mx-auto" />
					</div>
					<div>
						<h3 class="text-xl font-semibold mb-2">{{ benefit.title }}</h3>
						<p class="text-gray-500">{{ benefit.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			benefits: [
				{
					title: 'Быстрая доставка',
					description: 'Мы доставляем товары быстро и безопасно.',
					imageSrc: '/100.jpg',
				},
				{
					title: 'Высокое качество',
					description: 'Наши товары соответствуют самым высоким стандартам.',
					imageSrc: '/101.jpg',
				},
				{
					title: 'Отличная поддержка',
					description: 'Мы всегда готовы помочь вам с любыми вопросами.',
					imageSrc: '/100.jpg',
				},
				{
					title: 'Доступные цены',
					description: 'Мы предлагаем товары по конкурентным ценам.',
					imageSrc: '/101.jpg',
				},
			],
		}
	},
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
