// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
// 	devtools: { enabled: true },
// 	modules: ['@nuxtjs/tailwindcss'],
// })
export default {
	// Global page headers
	head: {
		title: 'nuxt-app',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	// Global CSS
	css: [],
	// Plugins to run before rendering page
	plugins: [],
	// Auto import components
	components: true,
	// Modules for dev and build
	buildModules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
		'@nuxt/typescript-build',
	],
	// Modules
	modules: ['@nuxtjs/tailwindcss'],
	// Build Configuration
	build: {},
}
