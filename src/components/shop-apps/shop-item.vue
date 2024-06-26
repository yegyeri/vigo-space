<script setup lang="ts">
import notifyBtn from '@/components/home-view-app/notificationButton.vue'
import { productStore } from '@/stores/products';
const store = productStore()
const addToCart = (product: Object) => {
    store.addToCart(product)
}
const props = defineProps<{
    product: Object
}>()
</script>

<template>
    <div class="shop-item dfCol jcc aic">
        <img :src="props.product.img" alt="shop-item-img" class="shop-item-img">
        <span class="shop-item-info dfCol jcc ais">
            <span class="shop-item-name">{{ props.product.name }}</span>
            <span class="item-info dfCol jcc ais">
                <span class="shop-item-about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum fuga
                    alias non laborum
                    deleniti minus odio velit ducimus consequatur exercitationem?</span>
                <span class="about-cost df jcc aic">
                    <span>{{ props.product.about }}</span>
                    <span>{{ props.product.cost }}$</span>
                </span>
            </span>
        </span>
        <button class="btn-pack" @click="addToCart(props.product)">
            <notifyBtn :btnIcon="'bx-credit-card-front'" :btnText="'ADD TO CART'"
                :notificate="store.notifications.success" :text="'Product added to cart'" />
        </button>
    </div>
</template>

<style scoped lang="scss">
.shop-item {
    position: relative;
    width: 400px;
    height: 400px;
    background-color: var(--dark);
    border-radius: 20px;
    box-shadow: 0px 0px 24px 2px rgba(34, 60, 80, 0.2);

    .shop-item-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }

    .shop-item-info {
        position: absolute;
        cursor: pointer;
        padding: 5px 30px;
        color: var(--white);
        width: 100%;
        height: 100px;
        overflow: hidden;
        top: 40px;
        background-color: rgba(219, 51, 96, 0.8);
        transition: .3s ease;

        .shop-item-name {
            font-size: 35px;
            text-transform: uppercase;
        }

        .item-info {
            display: none;
            gap: 10px;

            .shop-item-about {
                font-size: 18px;
                font-weight: 300;
            }

            .about-cost {
                gap: 20px;

                span {
                    font-size: 20px;
                    background-color: var(--white);
                    color: var(--lime);
                    padding: 0px 10px;
                    border-radius: 3px;
                }
            }
        }

        &:hover {
            height: 250px;

            .item-info {
                font-size: 25px;
                display: flex;
            }
        }
    }
    .btn-pack {
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
    @include forLaptop(){
        width: 280px;
        height: 400px;
        .shop-item-info{
            .shop-item-name{
                font-size: 20px;
            }
            .item-info{
                .shop-item-about{
                    font-size: 15px;
                }
            }
        }
    }
}
</style>