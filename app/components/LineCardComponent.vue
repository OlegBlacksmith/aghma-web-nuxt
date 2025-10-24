<script setup lang="ts">
defineProps<{
    isDark?: boolean 
    picPath?: string
    title?: string
    text?: string
}>()
</script>

<template>
  <div class="outer-container" :class="isDark ? 'dark-container' : 'light-container' ">
    <div class="inner-container wrapper">
        <div class="frame-icon" :class="isDark ? 'light-frame' : 'dark-frame'">
            <img class="icon" :src="picPath" alt="pic">
        </div>
        <div class="text-container">
            <div class="title-container">
                <h3 class="l-card-title" :class="isDark ? 'text-white' : 'text-dark'">{{ title }}</h3>
                <div :class="isDark ? 'divider-white' : 'divider-dark'"></div>
            </div>
            
            <p class="l-card-text" :class="isDark ? 'text-white' : 'text-dark'">{{ text }}</p>
        </div>
    </div>
  </div>
</template>

<style scoped>
.dark-container{
    background-color: var(--p-dark-color);
}

.light-container{
    background-color: var(--p-white-color);
}

.outer-container{
   display: flex;
   justify-content: center;
   padding: 12px 0;
}

.inner-container{
    display: flex;
    align-items: center;
    gap: 13px;
}

.frame-icon{
    width: 77px;
    height: 77px;
    padding: 20px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dark-frame{
    background-color: var(--p-dark-color);
}

.light-frame{
    background-color: var(--p-white-color);
}

.l-card-title{
    position: relative;
    font-size: var(--h3);
    font-weight: 600;
    margin-bottom: 6px;
}

.divider-dark{
    background-color: var(--p-dark-color);
    height: 2px;
    width: 120px;
}

.divider-white{
    background-color: var(--p-white-color);
    height: 2px;
    width: 120px;
}

.l-card-text{
    margin-top: 8px;
    font-size: var(--text-m);
    line-height: 110%;
}

.text-white{
    color: var(--p-white-color);
}

.text-dark{
    color: var(--p-dark-color);
}
</style>