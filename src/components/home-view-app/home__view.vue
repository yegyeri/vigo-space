<script setup>
import { ref } from 'vue';
import cartBtn from '@/components/home-view-app/cart-components/cart-button.vue';
import cartMain from '@/components/home-view-app/cart-components/home-cart.vue';
import nav_bar from './nav_bar.vue';

const cartActive = ref(false)

</script>

<template>
    <div class="home_main df jce ais">
        <cartBtn @click="cartActive = !cartActive" />     
            <nav_bar/>
        <div class="home_feed dfCol jcs ais">
            <router-view></router-view>
        </div>
        <cartMain v-if="cartActive" />
    </div>
</template>

<style scoped lang="scss">
.home_main {
    overflow: hidden;
    height: 100%;
    width: 100%;

    .home_feed {
        height: 100%;
        width: calc(100% - var(--navBar-closed));
        padding: 30px 50px 0px 50px;
    }

    @include forLaptop() {
        .home_feed {
            padding: 20px 30px;
        }

    }

    @include forTablets() {
        flex-direction: column;

        .home_feed {
            width: 100%;
            margin-top: var(--navBar-closed);
            padding: 0px 20px;
        }
    }
}
</style>
