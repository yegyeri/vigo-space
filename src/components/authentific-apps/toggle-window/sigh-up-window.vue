<script setup lang="ts">
import theButton from '@/components/interfaceComponents/TheButton.vue'
import theCheckbox from '@/components/interfaceComponents/checkboxBlock.vue'
</script>

<template>
    <div class="form-container df jcc aic firstName">
        <label for="firstName">First Name</label>
        <input type="text" name="firstName">
    </div>
    <div class="form-container df jcc aic lastName" >
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName">
    </div>
    <div class="form-container df jcc aic">
        <label for="e-mail">E-mail</label>
        <input type="email" name="e-mail">
    </div>
    <div class="form-container df jcc aic">
        <label for="password">Password</label>
        <input type="text" name="password">
    </div>
    <div class="form-container df jcc aic">
        <label for="confirmPassword">Confirm Password</label>
        <input type="text" name="confirmPassword">
    </div>
    <theCheckbox :text="'I Agree with privacy and policy'"/>
    <router-link to="/about" class="log-btn tdn df jcc aic">
        <theButton :icon="'bx-log-in'" :text="'SIGN UP'"/>
        </router-link>
</template>

<style scoped lang="scss">
.log-btn{
    margin-top: 15px;
}
</style>
