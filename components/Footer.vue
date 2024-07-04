<template>
	<footer class="bg-gray-100 py-10">
		<div
			class="container mx-auto flex justify-between flex-col md:flex-row items-center space-y-6 md:space-y-0"
		>
			<div class="flex flex-col items-center md:items-start">
				<img src="/images/logo.png" alt="Nornlight Logo" class="mb-4" />
				<p class="text-lg font-semibold">8 (800) 890-46-56</p>
				<div class="flex items-center mt-4 space-x-4">
					<img src="/images/visa.png" alt="Visa" class="h-8" />
				</div>
				<ul class="mt-4 space-y-2 text-center md:text-left">
					<li>
						<a href="#" class="text-gray-500 hover:text-gray-700"
							>Политика конфиденциальности</a
						>
					</li>
					<li>
						<a href="#" class="text-gray-500 hover:text-gray-700"
							>Пользовательское соглашение</a
						>
					</li>
				</ul>
				<div class="flex mt-4 space-x-3">
					<a href="#"
						><svg
							width="36"
							height="36"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.824 24L8.08 12.48H9.816L13.008 22.312L16.24 12.48H17.976L14.232 24H11.824ZM19.1825 24V12.48H20.8545V17.856L25.6785 12.48H27.7585L22.6625 18.104L28.1345 24H25.9905L20.8545 18.496V24H19.1825Z"
								fill="#454545"
							/>
							<circle cx="18" cy="18" r="17.5" stroke="#454545" />
						</svg>
					</a>
					<a href="#"
						><svg
							width="36"
							height="36"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.824 24L8.08 12.48H9.816L13.008 22.312L16.24 12.48H17.976L14.232 24H11.824ZM19.1825 24V12.48H20.8545V17.856L25.6785 12.48H27.7585L22.6625 18.104L28.1345 24H25.9905L20.8545 18.496V24H19.1825Z"
								fill="#454545"
							/>
							<circle cx="18" cy="18" r="17.5" stroke="#454545" />
						</svg>
					</a>
					<a href="#"
						><svg
							width="36"
							height="36"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.824 24L8.08 12.48H9.816L13.008 22.312L16.24 12.48H17.976L14.232 24H11.824ZM19.1825 24V12.48H20.8545V17.856L25.6785 12.48H27.7585L22.6625 18.104L28.1345 24H25.9905L20.8545 18.496V24H19.1825Z"
								fill="#454545"
							/>
							<circle cx="18" cy="18" r="17.5" stroke="#454545" />
						</svg>
					</a>
				</div>
			</div>

			<div
				class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left"
			>
				<div class="space-y-2">
					<h4 class="font-semibold">Покупателям</h4>
					<ul class="space-y-1">
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700"
								>О компании</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700"
								>Доставка и оплата</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700">Возврат</a>
						</li>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700">Гарантии</a>
						</li>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700">Контакты</a>
						</li>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700">Блог</a>
						</li>
					</ul>
				</div>
				<div class="space-y-2">
					<h4 class="font-semibold">Товары</h4>
					<ul class="space-y-1">
						<nuxt-link to="/products">
							<li>
								<a href="#" class="text-gray-500 hover:text-gray-700">Люстры</a>
							</li>
						</nuxt-link>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700"
								>Светильники</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700">Бра</a>
						</li>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700">Торшеры</a>
						</li>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700"
								>Комплектующие</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700"
								>Настольные лампы</a
							>
						</li>
					</ul>
				</div>
				<div class="space-y-2">
					<h4 class="font-semibold">Споты</h4>
					<ul class="space-y-1">
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700"
								>Трековые светильники</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700"
								>Уличные светильники</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700"
								>Технические светильники</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-500 hover:text-gray-700"
								>Светодиодные ленты</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup></script>

<style scoped></style>
