<script setup lang="ts">
import { provide, ref } from 'vue';
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import SuccessfulDialogue from '../components/SuccessfulDialog.vue';
import ErrorDialog from '../components/ErrorDialog.vue';
import { navAnchors } from '../../data/nav-anchors'
import { navPages } from '../../data/nav-pages'

const firstNavPage = navPages[0] ? [navPages[0]] : [];
 
const isSuccessDialogVisible = ref(false);
const isErrorDialogVisible = ref(false);

function openSuccessDialog() {
  isSuccessDialogVisible.value = true;
  document.body.style.overflow = 'hidden';
}

function openErrorDialog() {
  isErrorDialogVisible.value = true;
  document.body.style.overflow = 'hidden';
}

function closeSuccessDialog() {
  isSuccessDialogVisible.value = false;
  document.body.style.overflow = '';
}

function closeErrorDialog() {
  isErrorDialogVisible.value = false;
  document.body.style.overflow = '';
}

provide('isSuccessDialogVisible', isSuccessDialogVisible);
provide('isErrorDialogVisible', isErrorDialogVisible);

provide('openSuccessDialog', openSuccessDialog);
provide('openErrorDialog', openErrorDialog);

provide('closeSuccessDialog', closeSuccessDialog);
provide('closeErrorDialog', closeErrorDialog);

</script>

<template>

  <HeaderComponent 
    :nav-anchor="navAnchors"
    :nav-pages="firstNavPage"
  />
  <main>
      <NuxtPage />
  </main>
  <SuccessfulDialogue />
  <ErrorDialog />
  <FooterComponent />

</template>

<style scoped>

</style>