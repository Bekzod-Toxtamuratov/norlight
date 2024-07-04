<script setup>
const showModal = ref(false)
const showInput = ref(true)
const showSidebar = ref(false)
const toggleModal = () => {
	showModal.value = !showModal.value
	showInput.value = !showInput.value
}
const toggleSidebar = () => {
	showSidebar.value = !showSidebar.value
	showInput.value = !showInput.value
}
</script>
<template>
	<div class="container md:mb-16">
		<div class="md:flex hidden items-center justify-between py-3 text-sm">
			<nav>
				<ul class="flex gap-7 text-primary/50 font-semibold">
					<li><nuxt-link to="/about">О компании</nuxt-link></li>
					<li><nuxt-link to="/shipping">Доставка и оплата</nuxt-link></li>
					<li><nuxt-link to="/Return">Возврат</nuxt-link></li>
					<li><nuxt-link to="/Garant">Гарантии</nuxt-link></li>
					<li><nuxt-link to="/Contacts">Контакты</nuxt-link></li>
					<li><nuxt-link to="/Blog">Блог</nuxt-link></li>
				</ul>
			</nav>
			<div class="flex gap-6">
				<a class="text-primary text-sm" href="tel:+8 (800) 890-46-56"
					>8 (800) 890-46-56</a
				>
				<button class="text-primary/50 font-semibold" @click="toggleModal">
					Заказать звонок
				</button>
			</div>
		</div>
		<div class="flex items-center justify-between mt-6">
			<div class="flex gap-5">
				<img
					@click="toggleSidebar"
					class="md:hidden"
					:src="showSidebar ? '/close.svg' : '/burger.svg'"
					alt=""
				/>

				<nuxt-link to="/">
					<img v-if="showInput" class="max-md:w-40" src="/logo.svg" alt="" />
				</nuxt-link>
			</div>
			<nuxt-link
				to="/Katalog"
				class="bg-primary py-3 md:flex hidden px-7 rounded-full text-white gap-2"
				><img src="/catalog.svg" alt="icon" />Каталог</nuxt-link
			>
			<form action="" class="relative md:block hidden">
				<input
					class="border py-3 rounded-full border-primary outline-none px-6 pr-12 w-[626px]"
					type="text"
					placeholder="Поиск по товарам"
					name=""
					id=""
				/>
				<img class="absolute right-5 top-4" src="/search.svg" alt="" />
			</form>
			<div class="flex items-center gap-8">
				<nuxt-link to="/Favourite">
					<div class="flex flex-col items-center">
						<img src="/like.svg" alt="" />
						<p class="md:block hidden">Избранное</p>
					</div>
				</nuxt-link>
				<img v-if="showModal" src="/reyting.svg" alt="" />
				<div class="md:flex hidden flex-col items-center">
					<img v-if="showInput" src="/reyting.svg" alt="" />
					<p>Сравнение</p>
				</div>
				<div class="flex flex-col items-center">
					<img src="/cart.svg" alt="" />
					<p class="md:block hidden">Корзина</p>
				</div>
			</div>
		</div>

		<form action="" class="relative mt-5 block md:hidden">
			<input
				class="border py-3 rounded-full border-primary outline-none px-6 pr-12 w-[378px]"
				type="text"
				placeholder="Поиск по товарам"
				name=""
				id=""
			/>
			<img class="absolute right-5 top-4" src="/search.svg" alt="" />
		</form>
		<div v-if="showSidebar" @click="toggleSidebar" class="modal_mobile mt-10">
			<div
				class="justify-between py-3 text-sm z-50 fixed bg-white top-14 w-full"
				v-if="showSidebar"
			>
				<nav>
					<ul
						class="flex flex-col items-center gap-7 text-primary/50 font-semibold border-t"
					>
						<li class="border-b py-4 w-full text-center">
							<nuxt-link to="/about">О компании</nuxt-link>
						</li>
						<li class="border-b py-4 w-full text-center">
							<nuxt-link to="/shipping">Доставка и оплата</nuxt-link>
						</li>
						<li class="border-b py-4 w-full text-center">
							<nuxt-link to="/Return">Возврат</nuxt-link>
						</li>
						<li class="border-b py-4 w-full text-center">
							<nuxt-link to="/Garant">Гарантии</nuxt-link>
						</li>
						<li class="border-b py-4 w-full text-center">
							<nuxt-link to="/Contacts">Контакты</nuxt-link>
						</li>
						<li class="border-b py-4 w-full text-center">
							<nuxt-link to="/Blog">Блог</nuxt-link>
						</li>
					</ul>
				</nav>
				<nuxt-link
					to="/Katalog"
					class="bg-primary py-3 items-center px-40 mt-7 flex rounded-full text-white gap-2 w-[370px] mx-auto"
					><img src="/catalog.svg" alt="icon" />Каталог</nuxt-link
				>
				<div class="flex flex-col items-center gap-3 mt-8">
					<a class="text-primary text-sm" href="tel:+8 (800) 890-46-56"
						>8 (800) 890-46-56</a
					>
					<button class="text-primary/50 font-semibold" @click="toggleModal">
						Заказать звонок
					</button>
				</div>
			</div>
		</div>
		<div v-if="showModal" class="modal-overlay" @click.self="toggleModal">
			<PhoneModal @close="toggleModal" />
		</div>
	</div>
</template>

<style scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
}

.modal_mobile {
	position: fixed;
	top: 2.5%;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
}
</style>
