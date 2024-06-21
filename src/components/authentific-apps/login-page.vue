<script setup lang="ts">
import { productStore } from '@/stores/products';
const store = productStore()
import { ref } from 'vue'

import logInWindow from '@/components/authentific-apps/toggle-window/log-in-window.vue'
import signUpWindow from '@/components/authentific-apps/toggle-window/sigh-up-window.vue'

const logInPageToggle = ref('login')
</script>

<template>
    <div class="login-page df jcc aic">
        <div class="window-auth df jcc aic">
            <div class="logo dfCol jcc aic">
                <img src="../home-view-app/png/logo-trans.png" alt="" class="logo-pic">
                <span class="title">VIGO</span>
                <span class="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                <div class="social-links df jcc aic">
                    <div class="social-link" v-for="link in store.socialLinks.social" :key="link.id">
                        <i class='bx' :class="link.icon"></i>
                    </div>
                </div>
            </div>
            <div class="login-inputs dfCol jcc aic">
                <div class="toggle-button df jcc aic">
                    <span @click="logInPageToggle = 'login'" class="toggle-left df jcc aic" :class="{'toggle-active': logInPageToggle === 'login'}">LOG IN</span>
                    <span @click="logInPageToggle = 'signup'" class="toggle-right df jcc aic" :class="{'toggle-active': logInPageToggle === 'signup'}">SIGN UP</span>
                </div>
                <div class="toggle-window dfCol jcc aic">
                    <logInWindow v-if="logInPageToggle === 'login'"/>
                    <signUpWindow v-else/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.login-page {
    width: 100%;
    height: 100vh;
    background-color: var(--dark2);

    .window-auth {
        width: 800px;
        height: 800px;
        box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.2);
        border-top-left-radius: 150px;
        border-bottom-left-radius: 150px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;

        .logo {
            width: 300px;
            height: 100%;
            background-color: var(--dark);
            border-top-left-radius: 150px;
            border-bottom-left-radius: 150px;
            padding: 30px 30px;
            border-right: 1px solid var(--lime);
            color: var(--lime);

            .logo-pic {
                width: 200px;

            }

            .title {
                font-size: 80px;
                font-weight: 600;
            }

            .subtitle {
                font-size: 13px;
                text-align: center;
                padding: 0px 20px;
                color: white;
                font-weight: 300;
            }

            .social-links {
                font-size: 30px;
                padding: 10px;

                .bx:hover {
                    color: white;
                    cursor: pointer;
                    transition: .3s ease;
                }
            }
        }

        .login-inputs {
            background-color: var(--dark);
            width: 500px;
            height: 800px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            .toggle-button{
                width: 100%;
                height: 100px;
                width: 200px;
                height: 50px;
                border-radius: 30px;
                background-color: rgba(255,255,255,0.9);
                color: var(--lime);
                cursor: pointer;
                user-select: none;
                .toggle-left{
                    
                    border-right: 1px solid var(--lime);
                    height: 100%;
                    width: 50%;
                    border-top-left-radius: 22px;
                    border-bottom-left-radius: 22px;
                }
                .toggle-right{
                    height: 100%;
                    width: 50%;
                    border-top-right-radius: 22px;
                    border-bottom-right-radius: 22px;
                }
                .toggle-active{
                    background-color: var(--lime);
                    color: var(--white);
                }
            }
            .toggle-window{
                width: 100%;
                height: calc(100% - 100px);
                padding: 60px 40px 20px 40px;
            }
        }
    }
}
</style>
