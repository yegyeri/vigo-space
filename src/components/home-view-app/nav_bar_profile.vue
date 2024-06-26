<script setup>
import { ref } from 'vue'
import { productStore } from '@/stores/products';
import theButton from '@/components/interfaceComponents/TheButton.vue'
import notifyBtn from '@/components/home-view-app/notificationButton.vue'
const store = productStore()
</script>

<template>
    <div class="mini_profile df jcs aie">
        <img :src="store.user.profilePic" alt="pic" class="mini-profile-avatar">
        <div class="profile-name dfCol jcc ais">
            <span class="name">{{ store.user.name }}</span>
            <theButton :icon="'bxs-dollar-circle'" :text="'7.33'" />
            <router-link to="/profile" class="tdn">
                <notifyBtn :btnIcon="'bxs-cog'" :btnText="'EDIT'" :notificate="store.notifications.alert"
                    :text="'Changes may affect the appearance of the page'" />
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mini_profile {
    width: 350px;
    height: 350px;
    padding: 10px;
    gap: 20px;

    .mini-profile-avatar {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid var(--lime);
    }

    .profile-name {
        color: var(--white);
        font-size: 20px;
        width: 210px;
        gap: 15px;

        .name {
            font-size: 20px;
        }
    }

    @include forTablets() {
        flex-direction: column;
        align-items: start;
        width: 200px;
        height: 300px;
        position: absolute;
        top: 120px;
        background-color: var(--dark);
        padding: 20px;
    }
    @include forMobile(){
        top: 80px;
    }
}
</style>