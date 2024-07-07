import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Vue3Marquee from 'vue3-marquee'

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(Vue3Marquee, { name: 'Vue3Marquee' }, ElementPlus)
})

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(ElementPlus)
// })
