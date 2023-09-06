<template lang="pug">
main
  section.section
    .container
      ArticleListBlock(:data="articles")
</template>

<script setup>
const articles = useState('articles', () => {
  return {
    articles: [
      {
        title: "Есть над чем задуматься: небо темнеет",
        link: "/article-2",
        image: "https://devtwit8.ru/img/p2.png"
      },
      {
        title: "Мелочь, а приятно: чистосердечное признание облегчает душу",
        link: "/article-3",
        image: "https://devtwit8.ru/img/p3.png"
      },
      {
        title: "Очевидцы сообщают, что слышали старческий скрип Амстердама",
        link: "/article-4",
        image: "https://devtwit8.ru/img/p4.png"
      }
    ]
  }
})
</script>

<style scoped>

</style>
