<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <div class="container">
    <NuxtLink class="nuxt-link" v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  gap: 10px;
}

.nuxt-link{
  position: relative;
  color: white;
}

.nuxt-link::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background-color: #ffffff;
    transition: width 0.3s ease;
}

.nuxt-link:hover::after {
    width: 100%;
}
</style>