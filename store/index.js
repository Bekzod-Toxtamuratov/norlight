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
			const index=this.likedProducts.findIndex(p=> p.id === product.id)

			if(index==-1){
				this.likedProducts.push(product)
			}else{
				this.likedProducts.splice(index, 1)
			}
		},
	},
	persist: true,
})