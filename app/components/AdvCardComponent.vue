<script setup lang="ts">
defineProps<{
    cardIndex?: number
    title?: string
    text?: string
}>()
</script>

<template>
  <div class="card-body">
    <div class="icon-frame">
      <p class="icon-num">{{ cardIndex }}</p>
    </div>
    <div class="text-content">
      <h4 class="adv-card-title">{{ title }}</h4>
      <span class="adv-card-text">{{ text }}</span>
    </div>
  </div>
</template>

<style scoped>
.card-body{
  background-color: var(--p-dark-color);
  border-radius: var(--r-min);
  padding: 25px;
  width: 380px;
  transition: background-color 0.3s;
}

.card-body:hover{
  background-color: var(--p-dark-color-h);
}

.icon-frame{
  background-color: var(--p-white-color);
  width: 45px;
  height: 45px;
  border-radius: var(--r-min);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;
}

.icon-num{
  font-size: var(--text-s);
  font-weight: 900;
}

.text-content{
  height: 230px;
}

.adv-card-title, .adv-card-text{
  color: var(--p-light-text);
}

.adv-card-title{
  font-size: var(--h4);
  font-weight: 600;
  height: 48px;
  margin-bottom: 13px;
}

.adv-card-text{
  font-size: var(--text-s);
  line-height: 110%;
}
</style>