<script setup lang="ts">
import { ref } from 'vue'
import logInWindow from '@/components/authentific-apps/toggle-window/log-in-window.vue'
import signUpWindow from '@/components/authentific-apps/toggle-window/sigh-up-window.vue'
import { productStore } from '@/stores/products';

const store = productStore()
const logInPageToggle = ref('login')
</script>

<template>
    <div class="login-page df jcc aic">
        <div class="login-window df jcc aic">
            <div class="logo dfCol jcc aic">
                <img src="../home-view-app/png/logo-trans.png" alt="vigo-logo" class="logo-pic">
                <span class="logo-title">VIGO</span>
                <span class="logo-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
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
    height: 1000px;
    background-color: var(--dark2);
    

    .login-window {
        width: 60%;
        height: 80%;
        box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.2);
        border-top-left-radius: 190px;
        border-bottom-left-radius: 190px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        overflow: hidden;
        transition: all .5s ease;

        .logo {
            width: 35%;
            height: 100%;
            background-color: var(--dark);
            padding: 30px 30px;
            border-right: 1px solid var(--lime);
            color: var(--lime);

            .logo-pic {
                width: 200px;

            }

            .logo-title {
                font-size: 80px;
                font-weight: 600;
            }

            .logo-subtitle {
                font-size: 13px;
                text-align: center;
                padding: 0px 40px;
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
            width: 65%;
            height: 100%;
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
        @include forLaptop(){
            width: 80%;
        }
        @include forTablets(){
            width: 100%;
            height: 100%;
            border-radius: 0;
            flex-direction: column;
            justify-content: start;
            .logo{
                width: 100%;
                height: 200px;
                border-radius: 0;
                justify-content: space-around;
                .logo-pic{
                    display: none;
                }
                .subtitle{
                    display: none;
                }
            }
            .login-inputs{
                width: 100%;
                height: calc(100% - 200px);
                border-radius: 0;
                .toggle-window{
                    padding: 10px;
                }
            }
        }
    }
}
</style>
