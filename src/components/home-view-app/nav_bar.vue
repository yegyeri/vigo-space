<script setup>
import { ref } from 'vue';
import nav_bar_profile from './nav_bar_profile.vue';
const act = ref(0)
const items = [
    {
        id: "1",
        name: "ABOUT",
        icon: "bxs-info-circle",
        to: '/about'
    },
    {
        id: "2",
        name: "COACHES",
        icon: "bx-male-female",
        to: '/coaches'
    },
    {
        id: "3",
        name: "PRICE",
        icon: "bx-money-withdraw",
        to: '/price'
    },
    {
        id: "4",
        name: "SHOP",
        icon: "bxs-shopping-bag-alt",
        to: '/shop_fit'
    },
    {
        id: "5",
        name: "BLOG & NEWS",
        icon: "bx-news",
        to: '/blog'
    },
    {
        id: "6",
        name: "CONTACTS",
        icon: "bx-phone-call",
        to: '/contacts'
    },

]
</script>

<template>
    <div class="logo df jcc aic">
        <div class="logo_png"></div>
        <span class="logo_text">V<span class="white">I</span>G<span class="white">O</span></span>
    </div>
    <div class="nav_bar_menu dfCol jcc aic">
        <router-link :to="item.to" class="bar_item df jcs aic" v-for="item in items" :key="item.id"
            :class="{ 'active': act === item.id }" @click="act = item.id">
            <span class="bar-icon df jcc iac">
                <i class='bx' :class="item.icon"></i>
            </span>
            <span class="bar-name df jcs aic"> {{ item.name }} </span>
        </router-link>
    </div>
    <nav_bar_profile />
</template>

<style scoped lang="scss">
.logo {
    width: 100%;
    height: 140px;
    gap: 10px;
    padding: 20px;
    cursor: pointer;
    user-select: none;

    .logo_png {
        background-image: url('/src/components/home-view-app/png/logo-trans.png');
        background-position: center;
        background-size: cover;
        width: 90px;
        height: 90px;
    }

    .logo_text {
        font-size: 70px;
        font-weight: 700;
        color: var(--lime);
    }
}

.nav_bar_menu {
    width: 100%;
    height: calc(100% - 500px);
    padding: 30px 30px;
    gap: 10px;

    .bar_item {
        width: 100%;
        height: 60px;
        text-decoration: none;
        color: var(--white);
        border-radius: 10px;
        gap: 20px;
        user-select: none;
        padding: 0px 0px 0px 20px;

        .bar-icon {
            width: 60px;

            .bx {
                font-size: 40px;
                color: var(--lime);
            }
        }


        .bar-name {
            width: 230px;
            height: 100%;
            font-size: 25px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            transition: .5s ease;
        }

        &:hover {
            background-color: var(--lime);
            transition: .3s ease;

            .bar-icon {
                .bx {
                    color: var(--white);
                    transition: .3s;
                }
            }

        }
    }

    .active {
        background-color: var(--lime);
        color: var(--white);
        .bar-name{
            background-color: var(--white);
            color: var(--lime);
            padding: 0px 0px 0px 30px;
        }
        .bar-icon {
            .bx {
                color: var(--white);
            }
        }

    }
}
</style>
