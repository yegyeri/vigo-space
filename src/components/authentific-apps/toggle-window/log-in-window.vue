<script setup lang="ts">
import theButton from '@/components/interfaceComponents/TheButton.vue'
import theCheckbox from '@/components/interfaceComponents/checkboxBlock.vue'
import { productStore } from '@/stores/products';
const store = productStore()

</script>

<template>
    <div class="form-container">
        <label for="username">Username or e-mail</label>
        <input type="text" name="username">
    </div>
    <div class="form-container">
        <label for="password">Password</label>
        <input type="password" name="password">
    </div>
    <theCheckbox :text="'Remember Me'"/>
    <span class="forgot-password df jcs iac">Forgot Password?</span>
    <router-link to="/about" class="log-btn tdn df jcc aic">
        <theButton :icon="'bx-log-in'" :text="'LOG IN'"/>
    </router-link>
    <div class="signWithSocial dfCol jcc aic">
        <span>Or Sign in with:</span>
        <span class="social-links-line df jcc aic">
            <div class="social-item" v-for="link in store.socialLinks.signUp" :key="link.id">
                <i class='bx' :class="link.icon"></i>
            </div>
        </span>
    </div>
</template>

<style scoped lang="scss">

.forgot-password{
    width: 100%;
    color: white;
    font-weight: 300;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
}
.log-btn{
    margin-top: 30px;
}
.signWithSocial{
    width: 100%;
    height: 200px;
    font-size: 30px;
    font-weight: 300;
    color: var(--lime);
    span{
        .bx{
            padding: 0px 5px;
            color: var(--white);
            cursor: pointer;
            &:hover{
                color: var(--lime);
                transition: .5s ease;
            }
        }
    }
}

</style>
