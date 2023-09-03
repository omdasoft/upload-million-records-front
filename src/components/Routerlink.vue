<script setup>
defineProps({
    name: String,
})
</script>
<template>
    <router-link class="mx-2 font-semibold active">{{ name }}</router-link>
</template>