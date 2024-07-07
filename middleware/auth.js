export default defineNuxtRouteMiddleware((to,from)=>{
	const token=null;
	console.log('test',to);
	if(!token){
		return navigateTo('/auth/login');
	}
})	