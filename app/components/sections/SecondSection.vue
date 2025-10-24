<script setup lang="ts">
import LineCardComponent from '../../components/LineCardComponent.vue';
import { lCardContent } from '../../../data/l-card-content';

lCardContent
</script>

<template>
  <section>
    <div class="title-container">
      <div class="section-title wrapper">
        {{ $t('title.title5_p1') }} <br>
        {{ $t('title.title5_p2') }}
      </div>
    </div>
    <div class="line-cards-content">
      <LineCardComponent 
        v-for="item in lCardContent"
        :isDark="item.isDark"
        :picPath="item.picPath" 
        :title="$t(item.title!)" 
        :text="$t(item.text!)"
      />
    </div>
  </section>
</template>

<style scoped>
.line-cards-content{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title-container{
  display: flex;
  justify-content: center;
  margin-bottom: 42px;
}
</style>