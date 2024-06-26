<!-- <notifyBtn :btnIcon="'bx-credit-card-front'" :btnText="'SUCCESS'" :notificate="store.notifications.success"
    :text="'Товар добавлен'" />
<notifyBtn :btnIcon="'bx-credit-card-front'" :btnText="'INFO'" :notificate="store.notifications.info"
    :text="'Информация'" />
<notifyBtn :btnIcon="'bx-credit-card-front'" :btnText="'ALERT'" :notificate="store.notifications.alert"
    :text="'Предупреждение'" />
<notifyBtn :btnIcon="'bx-credit-card-front'" :btnText="'DANGER'" :notificate="store.notifications.danger"
    :text="'Опасно'" /> -->

<script setup>
import { productStore } from '@/stores/products';
const store = productStore()
import notifyBtn from '@/components/home-view-app/notificationButton.vue'
import pageTitle from '@/components/interfaceComponents/pageTitle.vue'
const socialLinks = [
    {
        id: 1,
        contact: 'vigo_gyms@gmail.com',
        icon: 'bx-mail-send'
    },
    {
        id: 2,
        contact: '+7-962-765-89-76',
        icon: 'bx-phone'
    },
    {
        id: 3,
        contact: 'Vk Group',
        icon: 'bxl-vk'
    },
    {
        id: 4,
        contact: '@vigogyms',
        icon: 'bxl-telegram'
    },
    {
        id: 5,
        contact: 'Youtube Channel',
        icon: 'bxl-youtube'
    },


]
</script>

<template>
    <div class="contacts-main dfCol jcs ais">
        <pageTitle :icon="'bxs-phone-call'" :text="'Our Contacts'" />
        <div class="gym-contacts df jcs aic">
            <div class="visit-card df jcc aic">
                <div class="contacts-logo dfCol jcc aic">
                    <img src="../home-view-app/png/logo-trans.png" alt="logo" class="visit-logo">
                    <span class="visit-logo-text">VIGO</span>
                </div>
                <div class="contacts-list df jcs aic">
                    <div class="visit-item dfCol jcc aic" v-for="item in socialLinks" :key="item.id">
                        <span class="visit-item-icon df jcc aic"><i class='bx' :class="item.icon"></i></span>
                        <span class="visit-item-text df jcc aic">{{ item.contact }}</span>
                    </div>
                </div>
            </div>
            <div class="map-location">
                <img src="../contacts-apps/png/map.jpg" alt="">
            </div>
        </div>
        <pageTitle :icon="'bx-question-mark'" :text="'Do you have any questions...'" />
        <div class="feedback-area dfCol jcc ais">
            <div class="email-btn df jcs aic">
                <div class="form-container">
                    <label for="email">E-mail</label>
                    <input type="e-mail" name="email">
                </div>
                <notifyBtn :btnIcon="'bx-message-alt-edit'" :btnText="'SEND'" :notificate="store.notifications.success"
                    :text="'Your message has been sent'" />
            </div>
            <textarea name="feedback" cols="30" rows="10" placeholder="Your Question..."
                class="feedback-textarea"></textarea>
        </div>
    </div>

</template>

<style scoped>
.contacts-main {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    gap: 30px;
    padding: 10px;

    .gym-contacts {
        width: 100%;
        height: 600px;
        gap: 30px;

        .visit-card {
            width: 1030px;
            height: 600px;
            background-color: var(--dark);
            border-radius: 15px;
            box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.2);
            gap: 40px;

            .contacts-logo {
                width: 250px;

                .visit-logo {
                    width: 250px;
                    height: 250px;
                    object-fit: cover;
                }

                .visit-logo-text {
                    color: var(--white);
                    font-weight: 800;
                    font-size: 80px;
                }
            }


            .contacts-list {
                width: 630px;
                height: 90%;
                flex-wrap: wrap;
                gap: 10px;

                .visit-item {
                    width: 300px;
                    height: 170px;
                    font-size: 30px;
                    gap: 10px;
                    background-color: rgba(219, 51, 96, 0.6);
                    color: var(--white);
                    cursor: pointer;
                    border-radius: 10px;

                    .visit-item-icon {
                        color: var(--white);
                        font-size: 80px;
                    }
                    .visit-item-text{
                        font-size: 20px;
                        display: none;
                    }
                    &:nth-child(5){
                        width: 610px;
                    }

                    &:hover {
                        background-color: var(--lime);
                        transition: .3s ease;
                        .visit-item-icon {
                            transform: rotate(360deg);
                            transition: .3s ease;
                        }

                        .visit-item-text {
                            display: flex;
                        }



                    }
                }
            }

        }

        .map-location {
            width: 550px;
            height: 500px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 20px;
            }
        }


    }

    .feedback-area {
        width: 930px;
        height: 400px;
        border-radius: 20px;
        background-color: var(--dark);
        gap: 10px;
        padding: 30px;
        .email-btn{
            gap: 30px;
        }
        .feedback-textarea {
            resize: none;
            width: 100%;
            height: 200px;
            background-color: var(--dark);
            border: 2px solid var(--lime);
            padding: 20px;
            border-radius: 20px;
            font-size: 25px;
            color: var(--white);

            &:hover {
                outline: none;
            }
        }
    }
}
</style>