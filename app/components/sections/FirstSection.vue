<script setup lang="ts">
import CardComponent from '../../components/CardComponent.vue';
import { cardContent } from '../../../data/card-content';

cardContent;

</script>

<template>
  <section class="fist-section">
    <div class="outer add-margin">
      <div class="wrapper">
        <h2 class="section-title">
          {{ $t('title.title4_p1') }} <br>
          {{ $t('title.title4_p2') }}
        </h2>
      </div>
    </div>


    <div class="outer bg-color">
      <div class="cards-container wrapper">
        <CardComponent v-for="(item, idx) in cardContent" :key="item.title" :picPath="item.picPath"
          :title="$t(item.title!)" :text="$t(item.text!)" :isReversed="idx === 1" />
      </div>
    </div>


    <div class="bottom-text">
      {{ $t('take.take1') }}<br>
      {{ $t('take.take2') }}
    </div>
  </section>
</template>

<style scoped>
.fist-section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.background-shape {
  left: 0;
  top: 15.3%;
  position: absolute;
  background-color: #AEC1CF;
  width: 100%;
  height: 562px;
  z-index: 0;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 1;
}

.add-margin{
  margin-bottom: 27px;
}

.outer {
  display: flex;
  justify-content: center;
}

.bg-color {
  background-color: #AEC1CF;
}

.cards-container {
  display: flex;
  justify-content: space-between;
}

.bottom-text {
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  margin-top: 40px;
  line-height: 140%;
}
</style>