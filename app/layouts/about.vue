<script setup lang="ts">
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import { navAnchors } from '../../data/nav-anchors'
import { navPages } from '../../data/nav-pages'

const homeNavPage = navPages[1] ? [navPages[1]] : [];

</script>

<template>

  <HeaderComponent 
    :nav-pages="homeNavPage"
  />
  <main>
      <NuxtPage />
  </main>
  <FooterComponent />

</template>

<style scoped>

</style>