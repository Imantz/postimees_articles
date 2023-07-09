<script setup lang="ts">
    import { SectionData } from 'composables/section';

    const { data: section } = useNuxtData<SectionData>('section');
</script>

<template>
    <NuxtLink :to="'https://' + section?.meta.brandLogoUrl">
        <img src="~/assets/img/logo.png" :alt="section?.meta.name" />
    </NuxtLink>
</template> 