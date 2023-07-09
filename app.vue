<script setup>
  useUpdateSectionData();
  useUpdateArticles();

  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  })
</script>

<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
