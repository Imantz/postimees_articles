<template>
    <NuxtLink :to="to">
        <img :src="src" :alt="alt" />
    </NuxtLink>
</template> 

<script setup lang="ts">
    defineProps<{
        src: string,
        alt: string,
        to: string
    }>()
</script>
