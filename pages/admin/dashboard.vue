<script setup>
definePageMeta({
    layout: "admin",
});
const { data } = await useFetch(
    `https://6684d16356e7503d1ae140ec.mockapi.io/products`
)
</script>

<template>
    <div class="flex justify-around">
        <div class="w-[400px] mt-[30px] h-[250px] bg-primary/10 p-[20px] pl-[50px] rounded-[20px]">
            <h1 class="text-[64px] text-[Monrope] text-primary/500">{{ data.length }}</h1>
            <p class="text-[40px] mt-[55px] text-[Monrope] text-primary/500">Products</p>
        </div>
        <div class="w-[400px] mt-[30px] h-[250px] bg-primary/10 p-[20px] pl-[50px] rounded-[20px]">
            <h1 class="text-[64px] text-[Monrope] text-primary/500">{{ data.length }}</h1>
            <p class="text-[40px] mt-[55px] text-[Monrope] text-primary/500">Orders</p>
        </div>
    </div>
</template>

<style scoped></style>
