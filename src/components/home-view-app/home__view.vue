<script setup>
import { ref } from 'vue';
import cartBtn from '@/components/home-view-app/cart-components/cart-button.vue';
import cartMain from '@/components/home-view-app/cart-components/home-cart.vue';
import nav_bar from './nav_bar.vue';

const cartActive = ref(false)
</script>

<template>
    <div class="home_main df jcc aic">
        <cartBtn @click="cartActive = !cartActive" />
        <div class="home_navbar dfCol jcs aic">
            <nav_bar />
        </div>
        <div class="home_feed dfCol jcs ais">
            <router-view></router-view>
        </div>
        <cartMain v-if="cartActive" />
    </div>
</template>

<style scoped lang="scss">
.home_main {
    position: relative;
    overflow: hidden;
    height: 100%;

    .home_navbar {
        width: var(--navBarWidth);
        height: 100%;
        background-color: var(--dark);
        box-shadow: 9px 0px 14px 0px rgba(0, 0, 0, 0.2);
    }

    .home_feed {
        height: 100%;
        width: calc(100% - var(--navBarWidth));
        padding: 30px 50px 0px 50px;
    }

}
</style>
