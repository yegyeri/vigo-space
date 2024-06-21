<script setup>
import { productStore } from '@/stores/products';
const store = productStore()
</script>

<template>
    <div class="cart-btn btn df jcc aic">
        <span class="product-counter df jcc aic" v-if="store.cart.length">{{ store.cart.length }}</span>
        <i class='bx bxs-shopping-bag'></i>
    </div>
</template>

<style scoped lang="scss">
.cart-btn {
    position: fixed;
    z-index: 51;
    top: 30px;
    right: 50px;
    width: 60px;
    height: 60px;
    font-size: 35px;
    background-color: var(--lime);
    border-radius: 10px;
    color: var(--white);

    .product-counter {
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: var(--lime);
        font-size: 20px;
        border-radius: 50%;
        top: -10px;
        right: -10px;
    }

    &:hover {
        background-color: var(--white);
        color: var(--lime);
        transition: .3s ease;
        cursor: pointer;
        .product-counter {
            color: var(--white);
            transition: .5s ease;
        }
    }
}
</style>