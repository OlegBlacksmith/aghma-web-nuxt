<script setup lang="ts">
import { inject, type Ref } from 'vue';

const isErrorVisible = inject('isErrorDialogVisible') as Ref<boolean>;
const close = inject('closeErrorDialog') as () => void;

if (!isErrorVisible || !close) {
    throw new Error('Dialog requires provide for isErrorDialogVisible and closeDialog');
}
</script>

<template>
    <transition name="fade">
        <div v-if="isErrorVisible" class="overlay" @click.self="close">
            <div class="dialog-body">
                <h3 class="d-title">{{ $t('dialogError.title') }}</h3>
                <h5 class="d-sub-title">{{ $t('dialogError.subTitle') }}</h5>
                <p class="d-text">
                    {{ $t('dialogError.text') }}
                </p>
                <button class="close-btn" @click="close">{{ $t('button.close') }}</button>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.dialog-body {
    background: white;
    border-radius: 8px;
    padding: 25px 50px;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.d-title {
    margin: 10px 0 6px 0;
    color: rgb(175, 52, 46);
    font-size: var(--h3);
    font-weight: bold;
}

.d-sub-title {
    font-size: var(--text-sm);
    margin-bottom: 15px;
    font-weight: 500s;
}

.d-text {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
}

.close-btn {
    cursor: pointer;
    background-color: var(--p-dark-color);
    color: white;
    font-weight: 600;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 14px;
    transition: background-color 0.3s;
}

.close-btn:hover {
    background-color: var(--p-dark-color-h);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>