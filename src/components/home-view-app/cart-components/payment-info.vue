<script setup lang="ts">
import { ref } from 'vue'
import { productStore } from '@/stores/products';
import pageTitle from '@/components/interfaceComponents/pageTitle.vue'
import theButton from '@/components/interfaceComponents/TheButton.vue'
const store = productStore()
const cardNumber = ref('')
const fullName = ref('')
const MMYY = ref('')
const cvv = ref('')

</script>

<template>
    <div class="payment-page dfCol jcs ais">
        <pageTitle :icon="'bxs-credit-card-alt'" :text="'Payment Page'" />
        <div class="card-info df jcc aic">
            <div class="card-info-front df jcs aie">
                <i class='bx bxl-visa'></i>
                <div class="card-data df jcs aic">
                    <span class="card-number">{{ cardNumber }}</span>
                    <span class="full-name">{{ fullName }}</span>
                    <span class="mm-yy">{{ MMYY }}</span>
                    <span class="cvv">{{ cvv }}</span>
                </div>
            </div>
            <div class="card-info-inputs df jcs aic">

                <input type="text" name="card-number" placeholder="CARD NUMBER" v-mask="'#### #### #### ####'"
                    v-model="cardNumber">

                <input type="text" name="full-name" placeholder="FULL NAME" class="fullName" v-model="fullName"
                    maxlength="25">

                <input type="text" name="MM-YY" placeholder="MM/YY" v-mask="'##/##'" v-model="MMYY">

                <input type="text" name="CVV" class="cvv" placeholder="CVV" v-mask="'###'" v-model="cvv">
                <theButton :icon="'bx-wallet'" :text="'PAY'"/>
            </div>
        </div>
        <div class="cart-list dfCol jcs aic">
            <div class="cart-item df jcs aic" v-for="item in store.cart" :key="item.id">
                <img :src="item.img" alt="img" class="cart-item-img">
                <div class="cart-item-info dfCol jcc ais">
                    <span>{{ item.name }}</span>
                    <span>{{ item.about }}</span>
                </div>
                <div class="totalCost">{{ item.totalCost() }} $</div>
                <div class="qty df jcc aic">{{ item.qty }}</div>
            </div>
        </div>
        
    </div>

</template>

<style scoped lang="scss">
::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.payment-page {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    gap: 30px;

    .cart-list {
        margin-top: 30px;
        width: 100%;
        height: 100%;
        gap: 30px;

        .cart-item {
            width: 100%;
            height: 150px;
            background-color: var(--dark);
            border-radius: 20px;

            .cart-item-img {
                width: 150px;
                height: 150px;
                object-fit: cover;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                border-right: 1px solid var(--lime);
            }

            .cart-item-info {
                width: calc(100% - 450px);
                padding: 10px 30px;
                font-size: 30px;
                color: var(--white);
                text-transform: uppercase;
            }

            .totalCost {
                width: 100px;
                color: var(--white);
                font-size: 40px;
            }

            .qty {
                width: 200px;
                height: 100%;
                background-color: var(--lime);
                color: var(--white);
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
                font-size: 50px;
            }
        }
    }

    .card-info {
        width: 100%;
        height: 800px;

        .card-info-front {
            position: relative;
            width: 600px;
            height: 320px;
            padding: 30px;
            background-color: var(--lime);
            border-radius: 20px;
            flex-wrap: wrap;

            .bxl-visa {
                position: absolute;
                color: var(--white);
                font-size: 100px;
                top: 10px;
                left: 30px;
            }

            .card-data {
                width: 100%;
                height: 120px;
                flex-wrap: wrap;
                padding: 0px 30px;
                color: var(--white);

                .card-number {
                    font-size: 35px;
                    width: 100%;
                    height: 50px;
                }

                .full-name {
                    font-size: 20px;
                    width: 300px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    text-transform: uppercase;
                }

                .mm-yy {
                    padding: 0px 10px;
                    font-size: 30px;
                }

                .cvv {
                    padding: 0px 5px;
                    font-size: 30px;
                }
            }

        }

        .card-info-inputs {
            padding: 0px 50px;
            width: calc(100% - 970px);
            height: 80%;
            gap: 10px;
            flex-wrap: wrap;

            input {
                width: 90%;
                height: 50px;
                border-radius: 15px;
                border: 1px solid var(--lime);
                background-color: var(--dark2);
                padding: 0px 25px;
                color: var(--white);
                font-size: 20px;

                &:focus {
                    outline: none;
                }
            }

            .fullName {
                text-transform: uppercase;
            }

            .cvv {
                width: 200px;
            }

            .buy-btn {
                width: 200px;
                height: 50px;
                border-radius: 15px;
                border: none;
                margin-left: 20px;
                background-color: var(--lime);
                font-size: 25px;

                &:hover {
                    background-color: white;
                    transition: .3s ease;
                    cursor: pointer;
                }
            }
        }

    }
}
</style>
