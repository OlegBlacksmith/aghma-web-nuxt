<script setup lang="ts">
import LineCardComponent from '../../components/LineCardComponent.vue';
import { productCardContent } from '../../../data/product-card-content';

productCardContent
</script>

<template>
  <section class="product-section">
    <div class="title-container">
      <div class="section-title wrapper">{{ $t('title.title3') }}</div>
    </div>
    <div class="product-cards-container">
      <LineCardComponent 
        v-for="item in productCardContent"
        :isDark="item.isDark"
        :picPath="item.picPath" 
        :title="$t(item.title!)" 
        :text="$t(item.text!)"
      />
    </div>
    <div class="outer-cnt">
      <a class="cart-button" href="#form-section">
        <img class="cart" src="/icons/cart-arrow.svg" alt="cart">
        {{ $t('button.order') }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.product-section{
margin: 90px 0 90px 0;
}

.product-cards-container{
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.title-container{
  display: flex;
  justify-content: center;
  margin-bottom: 42px;
}

.outer-cnt{
  display: flex;
  justify-content: center;
  height: 106px;
  background-color: var(--p-dark-color);
  align-items: center;
}

.cart-button{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: var(--p-white-color);
  padding: 16px 46px;
  border-radius: var(--r-mid);
  font-size: var(--text-xl);
  font-weight: bold;
  color: #3D454C;
  transition: background-color 0.3s;
  cursor: pointer;
  height: fit-content;
}

.cart-button:hover{
  background-color: var(--p-button-hover);
}

.cart{
  width: 30px;
  height: 30px;
}
</style>