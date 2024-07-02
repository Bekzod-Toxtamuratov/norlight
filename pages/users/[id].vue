<script setup>
const route = useRoute();

// definePageMeta({
//   layout: "user",
// });
</script>

<template>
  <div class="container">
    <h1>User by ID: {{ route.params.id }}</h1>
  </div>
</template>

<style scoped></style>
