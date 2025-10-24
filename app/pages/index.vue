<script setup lang="ts">
import HeroSection from '../components/sections/HeroSection.vue';
import FirstSection from '../components/sections/FirstSection.vue';
import SecondSection from '../components/sections/SecondSection.vue';
import ThirdSection from '../components/sections/ThirdSection.vue';
import FormSection from '../components/sections/FormSection.vue';
import ProductSection from '../components/sections/ProductSection.vue';
</script>

<template>
    <div>
        <HeroSection />
        <ProductSection />
        <div class="white-space"></div>
        <FirstSection />
        <div class="white-space"></div>
        <SecondSection />
        <div class="white-space"></div>
        <FormSection />
        <div class="white-space"></div>
        <ThirdSection />
    </div>
</template>

<style scoped>
.white-space{
    height: 200px;
}
</style>