<script setup lang="ts">
import type NavItem from '../../shared/models/NavItem.model'
defineProps<{
  navAnchor?: NavItem[]
  navPages?: NavItem[]
}>()

function scrollToAnchor(anchor: string) {
  const el = document.querySelector(anchor)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
    <header class="header">
        <img class="bg" src="../assets/backgrounds/header-bg.png" alt="bg">
        <div class="wrapper container">
            <nav class="nav">
                <NuxtLink class="anchors" v-for="item in navPages" :key="item.link" :to="$localePath(item.link)">
                    {{ item.title ? $t(item.title) : '' }}
                </NuxtLink>
                <div class="nav-button-container" v-for="item in navAnchor" :key="item.link" >
                    <a class="anchors" href="javascript:void(0)"  @click.prevent="scrollToAnchor(item.link)">
                        <img :src="item.imagePath" :alt="item.imagePath">
                    </a>
                    <a class="anchors" href="javascript:void(0)" @click.prevent="scrollToAnchor(item.link)">
                        {{ item.title ? $t(item.title) : '' }}
                    </a>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    z-index: 10;
}

.bg {
    position: absolute;
    top: 0;
    left: -32.9px;
    z-index: -1;
}

.container {
    display: flex;
    justify-content: end;
}

.nav {
    display: flex;
    gap: 30px;
    align-items: center;
}

.anchors {
    font-size: var(--text-l);
    font-weight: 600;
    color: var(--p-dark-text);
    cursor: pointer;
    transition: color 0.5s;
}

.anchors:hover {
    color: var(--p-dark-text-h);
}

.change-lang-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 30px;
}
</style>