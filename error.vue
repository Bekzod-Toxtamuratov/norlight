<template>
	<div class="container">
		<NavbarHeader />
		<div class="flex justify-center box mt-[126px]">
			<img class="max-md:w-[319px] max-md:h-[187px]" src="/404.png" />
		</div>
		<div class="flex justify-center">
			<h2 class="text-[#454545] text-2xl font-semibold text-center mt-8 mb-10">
				Похоже, ничего не нашлось :(
			</h2>
		</div>
		<div class="md:flex md:justify-center">
			<nuxt-link to="/">
				<button
					class="max-md:w-[100%] py-4 px-10 bg-[#454545] text-white rounded-[100px]"
				>
					На главную
				</button>
			</nuxt-link>
		</div>
	</div>
</template>
<script setup></script>

<style lang="scss" scoped></style>
