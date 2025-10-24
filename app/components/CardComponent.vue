<script setup lang="ts">

defineProps<{
    picPath?: string
    title?: string
    text?: string
    isReversed?: boolean
}>()

</script>

<template>
    <div class="card-body" :class="{ 'card-body--reverse': isReversed }">
        <div class="card-picture">
            <img :src="picPath" alt="pic">
        </div>
        <div class="card-content">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ text }}</p>
        </div>
    </div>
</template>

<style scoped>
.card-body {
    display: flex;
    flex-direction: column;
    width: 380px;
    background-color: white;
}

.card-body--reverse {
    flex-direction: column-reverse;
}

.card-content {
    padding: 53px 20px;
}

.card-title {
    font-size: var(--text-sm);
    font-weight: 500;
    margin-bottom: 13px;
}

.card-text{
    font-size: var(--text-xs);
    font-weight: 300;
}
</style>