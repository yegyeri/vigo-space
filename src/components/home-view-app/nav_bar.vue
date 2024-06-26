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

const menuBurgerActive = ref(true)
const userButtonActive = ref(true)

</script>

<template>
    <div class="nav-bar-area dfCol jcsb ais">
        <div class="logo df jcs aic">
            <img src="../home-view-app/png/logo-trans.png" alt="logo" class="logo-png">
            <span class="logo_text">V<span class="white">I</span>G<span class="white">O</span></span>
        </div>
        <div class="menu-burger jcc aic" @click="menuBurgerActive = !menuBurgerActive"><i class='bx bx-menu'></i></div>
        <div class="nav_bar_menu dfCol jcc ais" v-show="menuBurgerActive">
            <router-link :to="item.to" class="bar_item df jcs aic tdn" v-for="item in items" :key="item.id"
                :class="{ 'active': act === item.id }" @click="act = item.id">
                <div class="bar-icon df jcc aic">
                    <i class='bx' :class="item.icon"></i>
                </div>
                <span class="bar-name df jcs aic"> {{ item.name }} </span>
            </router-link>
        </div>
        <div class="user-btn df jcc aic" @click="userButtonActive = !userButtonActive"><i
                class='bx bxs-user-rectangle'></i></div>
        <nav_bar_profile v-show="userButtonActive" />
    </div>

</template>

<style scoped lang="scss">
.nav-bar-area {
    position: fixed;
    left: 0;
    z-index: 49;

    width: var(--navBar-closed);
    height: 100%;
    transition: .3s ease;

    background-color: var(--dark);
    box-shadow: 9px 0px 14px 0px rgba(0, 0, 0, 0.4);

    overflow: hidden;

    .logo {
        width: 100%;
        height: 140px;
        gap: 10px;
        padding: 10px;
        cursor: pointer;
        user-select: none;

        .logo-png {
            object-fit: cover;
            width: 100px;
            height: 100px;
        }

        .logo_text {
            font-size: 85px;
            font-weight: 700;
            color: var(--lime);

        }

    }

    .menu-burger {
        display: none;
    }

    .nav_bar_menu {
        width: 100%;
        height: 450px;
        gap: 10px;

        .bar_item {
            width: 350px;
            height: 60px;
            color: var(--white);
            gap: 20px;
            user-select: none;

            .bar-icon {
                width: 120px;
                height: 60px;
                border-radius: 10px;


                .bx {
                    font-size: 40px;
                    color: var(--lime);
                }
            }


            .bar-name {
                width: 230px;
                height: 100%;
                font-size: 25px;
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

            .bar-name {
                padding: 0px 0px 0px 30px;
            }

            .bar-icon {
                .bx {
                    color: var(--white);
                }
            }

        }
    }

    .user-btn {
        display: none;
    }

    &:hover {
        width: var(--navBarOpen);
        transition: .5s ease;
    }

    @include forTablets() {
        width: 100%;
        height: var(--navBar-closed);
        top: 0;
        flex-direction: row;
        overflow: visible;
        justify-content: start;

        .logo {
            height: 100%;
            width: 120px;

            .logo_text {
                display: none;
            }
        }

        .menu-burger {
            display: flex;
            width: 90px;
            height: 100%;
            font-size: 70px;
            color: var(--white);
        }

        .nav_bar_menu {
            position: absolute;
            z-index: 51;
            top: 120px;
            width: 320px;
            background-color: var(--dark);

            .bar_item {
                width: 320px;
            }
        }

        .user-btn {
            display: flex;
            width: 90px;
            height: 100%;
            font-size: 50px;
            color: var(--white);
        }

        &:hover {
            width: 100%;
        }
    }

    @include forMobile() {
        .logo {
            width: 80px;
            .logo-png {
                height: 60px;
                width: 60px;
            }
        }
        .nav_bar_menu {
            top: 80px;
        }

        .menu-burger {
            width: 60px;
            font-size: 40px;
        }
        .user-btn {
            width: 60px;
            font-size: 35px;
        }
    }
}
</style>
