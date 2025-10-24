<script setup lang="ts">

</script>

<template>
  <div class="outer">
    <img class="background" src="../../assets/backgrounds/hero.png" alt="background">
    <section class="wrapper content">
      <div class="text-w-btn">
        <h1>
          {{ $t('title.title1_p1') }} <br>
          {{ $t('title.title1_p2') }}
        </h1>
        <h3>{{ $t('title.title2') }}</h3>
        <a class="ref-button" href="#form-section">
          {{ $t('button.start') }}
          <img class="arrow" src="../../assets/icons/arrow-down.svg" alt="arrow">
        </a>
        <!-- <p>Current locale: {{ $i18n.locale }}</p> -->
      </div>
    </section>
  </div>
</template>

<style scoped>
.outer{
  position: relative;
  height: 920px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  margin-bottom: 2rem;
}

.background{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}

.content{
  position: relative;
  display: flex;
  z-index: 1;
  justify-content: flex-end;
  align-items: center;
}

.text-w-btn{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 533px;
  height: 445px;
  text-align: right;
}

.text-w-btn h1{
  font-size: var(--h1);
  font-weight: bold;
}

.text-w-btn h3{
  font-size: var(--h3);
  font-weight: 400;
}

.ref-button{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: var(--p-button);
  padding: 16px 46px;
  border-radius: var(--r-mid);
  font-size: var(--text-xl);
  font-weight: bold;
  color: #3D454C;
  transition: background-color 0.3s;
  align-self: end;
  cursor: pointer;
}

.ref-button:hover{
  background-color: var(--p-button-hover);
}

.arrow{
  width: 30px;
  height: 30px;
}
</style>