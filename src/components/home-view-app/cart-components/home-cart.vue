<script setup>
import { productStore } from '@/stores/products';
import notifyBtn from '@/components/home-view-app/notificationButton.vue'
const store = productStore()

const removeFromCart = (id) => {
    setTimeout(() => {
        store.removeFromCart(id)
    }, 1000)
    
}

</script>

<template>
    <div class="cart-container dfCol jcc aic">
        <div class="empty-cart dfCol jcc aic" v-if="!store.cart.length">
            <img src="../png/logo-trans.png" alt="logo-pic" class="logo-pic">
            <span>YOUR CART<br>IS EMPTY</span>
        </div>
        <div class="no-empty-cart dfCol jcs aic" v-else>
            <div class="cart-items-list dfCol jcs aic">
                <div class="cart-item df jcs aic" v-for="item in store.cart" :key="item.id">
                    <div class="cart-item-img df jcs aic">
                        <img :src="item.img" alt="cartItemPic">
                    </div>
                    <div class="cart-item-info dfCol jcs ais">
                        <span class="cart-item-name">{{ item.name }}</span>
                        <span class="cart-item-about">{{ item.about }}</span>
                    </div>
                    <div class="cart-item-qty df jcc aic">
                        <i class='bx bx-minus' @click="item.removeQty()"></i>
                        <span class="qty">{{ item.qty }}</span>
                        <i class='bx bx-plus' @click="item.addQty()"></i>
                    </div>
                    <div class="cart-item-cost dfCol jcc ais">
                        <span class="cart-item-price">Cost: {{ item.cost }} $</span>
                        <span class="total-price">Total: {{ item.totalCost() }} $</span>
                    </div>
                    <button class="btn-pack" @click="removeFromCart(item.id)">
                        <notifyBtn :btnIcon="'bxs-x-square'" :btnText="'REMOVE'" :notificate="store.notifications.danger" :text="'Product removed from cart'"/>
                    </button>
                </div>
            </div>
            <div class="payment-info df jcc aic">
                <router-link to="/payment" class="payment-btn df jcc aic">BUY</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cart-container {
    position: absolute;
    right: 20px;
    padding: 30px;


    width: 1200px;
    height: 750px;

    background-color: var(--dark);
    transition: .5s ease;

    border-radius: 20px;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.5);



    .empty-cart {
        width: 100%;
        height: 100px;
        color: var(--lime);
        gap: 20px;
        font-size: 45px;
        font-weight: 600;

        .logo-pic {
            width: 300px;
        }

        span {
            text-align: center;
        }
    }

    .no-empty-cart {
        width: 100%;
        height: 100%;
        gap: 30px;

        .cart-items-list {
            width: 100%;
            height: 600px;
            overflow-y: auto;
            gap: 20px;

            .cart-item {
                width: 100%;
                height: 120px;
                gap: 30px;
                border-radius: 10px;
                background-color: var(--dark2);

                .cart-item-img {
                    width: 120px;
                    height: 120px;

                    img {
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                        border-right: 1px solid var(--lime);
                    }
                }

                .cart-item-info {
                    width: 350px;
                    color: var(--white);
                    gap: 10px;

                    .cart-item-name {
                        width: 100%;
                        font-size: 25px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        text-transform: uppercase;
                    }

                    .cart-item-about {
                        font-size: 15px;
                        font-weight: 400;
                        background-color: var(--white);
                        color: var(--lime);
                        padding: 2px 15px;
                        border-radius: 10px;
                    }
                }

                .cart-item-qty {
                    width: 80px;
                    gap: 10px;
                    font-size: 25px;
                    color: var(--white);

                    .qty {
                        padding: 0px 10px;
                        font-size: 35px;
                    }

                    .bx {
                        background-color: var(--white);
                        color: var(--lime);
                        padding: 8px;
                        border-radius: 5px;

                        &:hover {
                            color: white;
                            background-color: var(--lime);
                            transition: .2s ease;
                            cursor: pointer;
                        }
                    }
                }

                .cart-item-cost {
                    width: 200px;
                    gap: 10px;
                    color: var(--white);
                    padding: 0px 0px 0px 20px;

                    span {
                        font-size: 20px;
                        background-color: var(--white);
                        color: var(--lime);
                        padding: 2px 15px;
                        border-radius: 10px;
                    }
                }
                .remove-block {
                    cursor: pointer;
                    height: 100%;
                    width: 100px;
                    background-color: var(--lime);
                    font-size: 50px;
                    color: var(--white);
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;

                    &:hover {
                        background-color: var(--white);
                        color: var(--lime);
                        transition: .3s ease;
                    }
                }
            }
        }

        .payment-info {
            width: 100%;
            height: calc(100% - 600px);
            background-color: var(--dark2);
            border-radius: 20px;

            .payment-btn {
                cursor: pointer;
                width: 100%;
                height: 100%;
                text-decoration: none;
                padding: 10px 30px;
                color: var(--white);
                background-color: var(--lime);
                border-radius: 10px;
                font-size: 50px;

                &:hover {
                    background-color: var(--white);
                    color: var(--lime);
                    transition: .3s ease;
                }
            }
        }
    }

}
</style>