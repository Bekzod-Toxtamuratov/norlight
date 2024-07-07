export const usePiniaStore = defineStore('pinia', {
	state() {
		return {
			likedProducts: [],
			basket: [],
		}
	},
	actions: {
		addProductToLiked(product) {
			console.log('product', product)
			const index = this.likedProducts.findIndex(p => p.id === product.id)

			if (index == -1) {
				this.likedProducts.push(product)
			} else {
				this.likedProducts.splice(index, 1)
			}
		},
		addProductToBasket(product, quantity) {
			console.log('product', product)
			const index = this.basket.findIndex(p => p.id === product.id)

			if (index == -1) {
				this.basket.push({
					...product,
					quantity: quantity || 1,
				})
			} else {
				this.basket.splice(index, 1)
			}
		},
		removeProductBasket(id){
			this.basket = this.basket.filter(p => p.id!== id)
		}
	},
	persist: true,
})
