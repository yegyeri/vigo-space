<script setup>
import pageTitle from '@/components/interfaceComponents/pageTitle.vue'
import notifyBtn from '@/components/home-view-app/notificationButton.vue'
import bmiCalculator from '@/components/tickets-prices-apps/prices-bmi-calc.vue'
import { productStore } from '@/stores/products';
const store = productStore()
const addToCart = (product) => {
    store.addToCart(product)
    console.log(product);
}
</script>

<template>
    <div class="price-view dfCol jcs ais">
        <bmiCalculator />
        <pageTitle :icon="'bx-money-withdraw'" :text="'Our Tickets'" />
        <div class="tickets-list df jcs aic">
            <div class="price-item dfCol jcs aic" v-for="ticket in store.tickets" :key="ticket.id">
                <img :src="ticket.img" alt="img" class="price-item-img">
                <div class="price-item-info dfCol jcc ais">
                    <span class="ticket-name">{{ ticket.name }}</span>
                    <span class="ticket-info dfCol jcs ais">
                        <span class="ticket-about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum fuga
                            alias non laborum
                            deleniti minus odio velit ducimus consequatur exercitationem?</span>
                        <span class="clas-cost df jcc aic">
                            <span>{{ ticket.about }}</span>
                            <span>{{ ticket.cost }}$</span>
                        </span>
                    </span>
                </div>
                <button class="btn-pack" @click="addToCart(ticket)">
                    <notifyBtn :btnIcon="'bx-credit-card-front'" :btnText="'ADD TO CART'"
                        :notificate="store.notifications.success" :text="'Product added to cart'" />
                </button>

            </div>
        </div>

    </div>
</template>

<style scoped>
.price-view {
    width: 100%;
    height: 100%;
    gap: 30px;
    overflow-y: auto;

    .tickets-list {
        width: 100%;
        height: 100%;
        gap: 30px;
        flex-wrap: wrap;
        padding: 10px 0px;

        .price-item {
            position: relative;
            width: 700px;
            height: 400px;
            border-radius: 20px;
            background-color: var(--dark);
            box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);

            .price-item-img {
                width: 700px;
                height: 400px;
                object-fit: cover;
                border-radius: 15px;

            }

            .price-item-info {
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

                .ticket-name {
                    font-size: 45px;
                    text-transform: uppercase;
                }

                .ticket-info {
                    display: none;
                    gap: 10px;

                    .ticket-about {
                        font-size: 18px;
                        font-weight: 300;
                    }

                    .clas-cost {
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

                    .ticket-info {
                        font-size: 25px;
                        display: flex;
                    }
                }
            }

            .btn-pack {
                position: absolute;
                bottom: 30px;
                left: 30px;
            }
        }
    }

}
</style>