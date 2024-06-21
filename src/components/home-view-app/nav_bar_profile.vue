<script setup>
import { ref } from 'vue'
import { productStore } from '@/stores/products';
import theButton from '@/components/interfaceComponents/TheButton.vue'
import notifyBtn from '@/components/home-view-app/notificationButton.vue'
const store = productStore()
const infoBlock = ref(false)
</script>

<template>
    <div class="mini_profile dfCol jcc aic">
        <div class="avatar-btns df jcc aic">
            <img :src="store.user.profilePic" alt="pic" class="avatar">
        </div>
        <div class="profile-name dfCol jcc aic">
            <span class="name">{{ store.user.name }}</span>
            <theButton :icon="'bxs-dollar-circle'" :text="'7.33'" />
            <div class="addBtns df jcc aic">
                <div class="btn-pack" @click="infoBlock = !infoBlock">
                    <notifyBtn :btnIcon="'bxs-info-circle'" :btnText="'INFO'"
                        :notificate="store.notifications.info" :text="'INFORMATION IS SHOWING'" />
                </div>
                <router-link to="/profile" class="tdn">
                    <notifyBtn :btnIcon="'bxs-cog'" :btnText="'EDIT'"
                        :notificate="store.notifications.alert" :text="'Changes may affect the appearance of the page'" />
                </router-link>
            </div>
        </div>
        <div class="profile_info dfCol jcc ais" v-if="infoBlock">
            <span class="df jcs aic"><i class='bx bx-female-sign'></i>{{ store.user.gender }}</span>
            <span class="df jcs aic"><i class='bx bx-envelope'></i>{{ store.user.mail }}</span>
            <span class="df jcs aic"><i class='bx bx-cake'></i>{{ store.user.date }}</span>
            <span class="df jcs aic"><i class='bx bx-map'></i>{{ store.user.location }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mini_profile {
    width: 100%;
    height: 350px;
    padding: 20px;

    .avatar-btns {
        width: 100%;
        gap: 20px;

        .avatar {
            width: 130px;
            height: 130px;
            object-fit: cover;
            border-radius: 50%;
        }


    }

    .profile-name {
        color: var(--white);
        font-size: 20px;
        width: 100%;
        gap: 15px;

        .name {
            font-size: 30px;
        }

        .addBtns {
            gap: 10px;

        }
    }


    .profile_info {
        position: absolute;
        background-color: rgba(219, 51, 96, 0.8);
        color: var(--white);
        padding: 10px 20px;
        z-index: 2;
        left: 370px;
        bottom: 40px;
        font-size: 20px;

        span {
            i {
                padding: 0px 10px 0px 0px;
                color: var(--white);
            }
        }
    }



}
</style>