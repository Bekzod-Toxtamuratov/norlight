<script setup>
import { usePiniaStore } from '../store'
const store = usePiniaStore()
const products = store.basket
function increment(id) {
	const foundProduct = products.find(product => product.id === id)
	if (foundProduct) {
		foundProduct.count += 1
	}
}
function decrement(id) {
	const foundProduct = products.find(product => product.id === id)
	if (foundProduct && foundProduct.count > 1) {
		foundProduct.count -= 1
	}
}
function calculateTotalPrice() {
	let totalPrice = 0
	store.basket.forEach(product => {
		totalPrice += Number(product.newPrice) * Number(product.count)
	})
	return totalPrice
}
function removeProductById(id) {
	const index = store.basket.findIndex(product => product.id === id)
	if (index !== -1) {
		store.basket.splice(index, 1)
	} else {
		console.error('Product Not Found')
	}
}
const order = ref({
	full_name: '',
	phone: '',
	email: '',
	address: '',
	comment: '',
	products: products,
	totalPrice: calculateTotalPrice() + 580,
})
function addorder() {
	store.addOrder(order.value)
}
</script>

<template>
	<div v-if="store.basket.length" class="container mt-[60px] mb-[80px]">
		<div class="relative w-[400px]">
			<div>
				<h1 class="text-[64px] primary text-[Manrope] mb-[30px]">Корзина</h1>
			</div>
		</div>
		<div class="w-full bg-[#F2F2F2] rounded-[20px] p-[30px] pl-[50px]">
			<div class="flex justify-between items-center pr-[180px]">
				<div class="w-[170px] flex justify-between">
					<p class="text-primary text-[16px]">Фото</p>
					<p class="text-primary text-[16px]">Товары</p>
				</div>
				<p class="text-primary text-[16px]">Описание</p>
				<p class="text-primary text-[16px]">Артикул</p>
				<p class="text-primary text-[16px]">Количество</p>
			</div>
			<div v-for="item in products" :key="item">
				<div>
					<div class="mt-[20px] pr-[70px]">
						<hr class="text-[#000]" />
						<div class="mt-[10px] w-full flex justify-between items-center">
							<div class="w-[280px] flex">
								<img
									class="w-[80px] h-[80px] rounded-[15px]"
									:src="item.image"
									alt=""
								/>
								<div class="ml-[40px]">
									<p class="text-primary text-[16px] line-clamp-1">
										{{ item.title }}
									</p>
									<p class="mt-[25px] font-semibold">{{ item.newPrice }}₽</p>
								</div>
							</div>
							<p class="w-[250px] line-clamp-3">{{ item.description }}</p>
							<p class="w-[250px] line-clamp-3">
								RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
							</p>
							<div
								class="flex p-[16px] border justify-between w-[123px] rounded-[10px] text-[#101010]"
							>
								<button @click="decrement(item.id)">-</button>
								<p>{{ item?.count }}</p>
								<button @click="increment(item.id)">+</button>
							</div>
							<button @click="removeProductById(item.id)">
								<img
									class="w-[20px] h-[20px]"
									src="../public/basketicon.png"
									alt=""
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="w-full h-[628px] p-[50px] bg-[#F2F2F2] mt-[30px] rounded-[20px]"
		>
			<div>
				<h1 class="text-[32px]">Оформление</h1>
				<div class="flex justify-between mt-[20px] mb-[40px]">
					<input
						class="p-[10px] w-[373px] bg-[#F2F2F2] border border-[#000] rounded-[100px] text-[#000]"
						required
						placeholder="ФИО"
						v-model="order.full_name"
						type="text"
					/>
					<input
						class="p-[10px] w-[373px] bg-[#F2F2F2] border border-[#000] rounded-[100px] text-[#000]"
						required
						placeholder="телефон"
						v-model="order.phone"
						type="text"
					/>
					<input
						class="p-[10px] w-[373px] bg-[#F2F2F2] border border-[#000] rounded-[100px] text-[#000]"
						required
						placeholder="Электронная почта"
						email
						v-model="order.email"
						type="text"
					/>
				</div>
				<hr />
				<div class="mt-[30px]">
					<h1 class="text-[32px]">Доставка</h1>
					<input
						class="mt-[20px] p-[10px] w-[767px] bg-[#F2F2F2] border border-[#000] rounded-[100px] text-[#000]"
						required
						placeholder="Адрес доставки"
						v-model="order.address"
						type="text"
					/><br />
					<input
						class="mt-[30px] p-[20px] pb-[100px] w-[767px] bg-[#F2F2F2] border border-[#000] rounded-[28px] text-[#000]"
						required
						placeholder="Комментарий"
						v-model="order.comment"
						type="text"
					/>
				</div>
			</div>
		</div>
		<div
			class="w-full h-[361px] p-[50px] bg-[#F2F2F2] mt-[30px] rounded-[20px]"
		>
			<h1 class="text-[32px]">Оплата</h1>
			<div class="flex w-[600px] justify-between mt-[30px]">
				<p class="text-[16px] text-primary/50">
					Товары.............................................{{
						calculateTotalPrice()
					}}₽
				</p>
				<p class="text-[16px] text-primary/50">
					Доставка..............................................580₽
				</p>
			</div>
			<div class="mt-[35px]">
				<h1 class="text-[22px] fond-semibold">
					{{ calculateTotalPrice() + 580 }}₽
				</h1>
				<div class="mt-[30px] flex justify-between w-[650px] items-center">
					<button
						@click="addorder()"
						class="w-[324px] p-[8px] rounded-[100px] text-[#fff] bg-[#454545]"
					>
						Купить
					</button>
					<div class="flex items-center">
						<input type="radio" />
						<p class="text-[12px] text-primary/50 ml-[5px]">
							Я согласен наобработку моих персональных данных
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped></style>
