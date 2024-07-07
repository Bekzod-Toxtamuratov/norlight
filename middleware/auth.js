export default defineNuxtRouteMiddleware((to, from) => {
	const token = localStorage.getItem('user')

	if (!token) {
		console.log('Token not found, redirecting to login page')
		return navigateTo('/auth/login')
	}
	//  else {
	// 	return navigateTo('/admin')
	// }
})
