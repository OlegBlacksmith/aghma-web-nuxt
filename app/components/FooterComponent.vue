<script setup lang="ts">
import ChangeLangSelect from './ChangeLangSelect.vue';


</script>

<template>
    <footer class="footer" id="footer">
        <div class="wrapper content">
            <div class="links-container">
                <a href="">{{ $t('link.privacy') }}</a>
                <a href="">{{ $t('link.personalData') }}</a>
            </div>
            <div class="social-hubs">
                <a href="">
                    <img class="icon" src="/icons/telegram.svg" alt="telegram"></img>
                </a>
                <a href="">
                    <img class="icon" src="/icons/whatsapp.svg" alt="whatsapp">
                </a>
                <a href="">
                    <img class="icon" src="/icons/viber.svg" alt="viber">
                </a>
                <a href="">
                    <img class="icon" src="/icons/facebook.svg" alt="facebook"></img>
                </a>
                <a href="mailto:rabochaia@gmail.com">
                    <img class="icon" src="/icons/at.svg" alt="@"></img>
                </a>
            </div>
            <div class="email">
                <a href="mailto:rabochaia@gmail.com">rabochaia@gmail.com</a>
            </div>
            <div class="change-lang-container">
                <ChangeLangSelect />
                <img src="/icons/lang.svg" :alt="$t('placeholder.plc3')">
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    position: relative;
    background-color: var(--p-dark-color);
    display: flex;
    justify-content: center;
    height: 250px;
    align-items: center;
}

.footer-bg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
}

.content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 20px;
}

.social-hubs {
    display: flex;
    justify-content: end;
    gap: 8px;
}

.links-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: end;
    align-items: flex-end;
}

.links-container a,
.email a {
    position: relative;
    color: var(--p-light-text);
    font-size: var(--text-sm);
}

.email a {
    transition: color 0.3s;
}

.links-container a::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background-color: #ffffff;
    transition: width 0.3s ease;
}

.links-container a:hover::after {
    width: 100%;
}

.email a:hover {
    color: var(--p-light-text-h);
}

.email {
    display: flex;
    justify-content: end;
    gap: 6px;
}

.email p {
    font-weight: 600;
}

.icon {
    width: 35px;
    height: 35px;
}

.lang-selector {
    display: flex;
    justify-content: end;
}

.change-lang-container{
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 5px;
}
</style>