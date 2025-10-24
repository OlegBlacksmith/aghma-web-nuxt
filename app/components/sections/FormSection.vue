<script setup lang="ts">
import { inject, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type Email from '~/../../shared/models/Email.model';

const { locale } = useI18n();

const name = ref<string | null>(null);
const email = ref<string | null>(null);
const selectedService = ref('');

const isNameEmpty = ref(false);
const isEmailEmpty = ref(false);
const isServiceEmpty = ref(false);

const openSuccessDialog = inject<() => void>('openSuccessDialog');
const openErrorDialog = inject<() => void>('openErrorDialog');

function checkString(value: string | null, field: string): boolean {
  if (!value || value.trim() === '') {
    if (field === 'name') isNameEmpty.value = true;
    if (field === 'email') isEmailEmpty.value = true;
    if (field === 'service') isServiceEmpty.value = true;
    return false;
  }
  return true;
}

function isValidEmail(email: string | null): boolean {
  if (!email || email.trim() === '') {
    isEmailEmpty.value = true;
    return false;
  }

  if (!email.includes('@')) {
    isEmailEmpty.value = true;
    console.warn('Email должен содержать символ "@"');
    return false;
  }

  return true;
}

async function send() {
  isNameEmpty.value = false;
  isEmailEmpty.value = false;
  isServiceEmpty.value = false;

  if (!checkString(name.value, 'name')) return;
  if (!isValidEmail(email.value)) return;
  if (!checkString(selectedService.value, 'service')) return;

  const emailDto: Email = {
    name: name.value!,
    email: email.value!,
    serviceType: selectedService.value!,
    locale: locale.value!
  };

  try {
    const data = await $fetch('/api/sendEmail', {
      method: 'POST',
      body: emailDto
    });
    openSuccessDialog?.();
    name.value = null;
    email.value = null;
    selectedService.value = '';
  } catch (e) {
    openErrorDialog?.();
    console.error(e);
  }
}
</script>

<template>
  <section class="form-section" id="form-section">
    <img class="background" src="../../assets/backgrounds/form-bg.png" alt="bg">
    <div class="wrapper container">
      <h2 class="section-title">{{ $t('title.title6') }}</h2>
      <form class="form-container">
        <div class="warn-container">
          <input v-model="name" autocomplete="name" :placeholder="$t('placeholder.plc1')" type="text" name="name"
            id="name">
          <p v-if="isNameEmpty" class="warn">{{ $t('warn.name') }}</p>
        </div>
        <div class="warn-container">
          <input v-model="email" autocomplete="email" placeholder="E-mail" type="email" name="email" id="email">
          <p v-if="isEmailEmpty" class="warn">{{ $t('warn.email') }}</p>
        </div>
        <div class="warn-container">
          <select name="service" id="service" v-model="selectedService">
            <option value="" disabled selected hidden>{{ $t('opt.opt1') }}</option>
            <option value="visitka">{{ $t('opt.opt2') }}</option>
            <option value="eshop">{{ $t('opt.opt3') }}</option>
            <option value="corp">{{ $t('opt.opt4') }}</option>
            <option value="edit">{{ $t('opt.opt5') }}</option>
            <option value="consultation">{{ $t('opt.opt6') }}</option>
          </select>
          <p v-if="isServiceEmpty" class="warn">{{ $t('warn.option') }}</p>
        </div>
      </form>
      <button @click="send" class="submit-btn">{{ $t('button.send') }}</button>
    </div>

  </section>
</template>

<style scoped>
.form-section {
  position: relative;
  display: flex;
  justify-content: center;
  height: 460px;
}

.warn-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.warn {
  font-size: 14px;
  color: rgb(225, 146, 0);
  font-weight: 500;
  margin-left: 15px;
  animation-name: fadeEffect;
  animation-duration: 0.8s;
  animation-iteration-count: unset;
  animation-direction: alternate;
}

@keyframes fadeEffect {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

.background {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 18px;
}

input {
  height: 20px;
  font-size: 20px;
  padding: 15px;
  border: none;
  border-radius: var(--r-min);
  background-color: var(--p-dark-color);
  color: var(--p-white-color);
  width: -webkit-fill-available;
}

input::placeholder {
  color: var(--p-white-color);
}

select {
  height: 55px;
  font-size: 20px;
  padding: 12px;
  border: none;
  border-radius: var(--r-min);
  background-color: var(--p-dark-color);
  color: var(--p-white-color) !important;
  width: 100%;
}

option {
  color: var(--p-white-color);
}

option::selection {
  background-color: var(--p-dark-text-h);
}

.submit-btn {
  background-color: var(--p-button);
  border: none;
  border-radius: var(--r-mid);
  color: #3D454C;
  font-size: 28px;
  font-weight: 600;
  padding: 16px 46px;
  align-self: center;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: var(--p-button-hover);
  color: #2e3439;
}
</style>