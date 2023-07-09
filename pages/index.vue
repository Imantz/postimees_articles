<script setup lang="ts">
    const { data: section } = useNuxtData('section');
    const { data: articles } = useNuxtData('articles');

    useSeoMeta({
        title: section.value.name,
        description: section.value.description,
    }); 
</script>

<template>
    <div>
        <li v-for="(item, index) in articles">
            <Article :index="index" :item="item" />
        </li>
    </div>
</template>
