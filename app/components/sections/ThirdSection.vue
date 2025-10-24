<script setup lang="ts">
import AdvCardComponent from '../../components/AdvCardComponent.vue';
import { advCardContent } from '../../../data/adv-card-content';

advCardContent
</script>

<template>
  <section class="third-section">
    <img class="third-bg" src="../../assets/backgrounds/third-bg.png" alt="bg">
    <div class="wrapper content">
      <h2 class="section-title">
        {{ $t('title.title7_p1') }} <br>
        {{ $t('title.title7_p2') }}
      </h2>
      <div class="adv-cards-container">
        <AdvCardComponent
          v-for="(item, idx) in advCardContent"
          :cardIndex="idx + 1"
          :key="item.title"
          :title="$t(item.title!)" 
          :text="$t(item.text!)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.third-section{
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 1200px;
}

.third-bg{
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}

.content{
  position: relative;
  z-index: 1;
}

.adv-cards-container{
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  justify-content: center;
  margin-top: 70px;
}
</style>