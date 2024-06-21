<script setup lang="ts">
import theButton from '@/components/interfaceComponents/TheButton.vue'
import { ref } from 'vue'
import { productStore } from '@/stores/products';
const store = productStore()
const editActive = ref(false)
const profileName = ref('')

function savingProfileInfo(){
    store.user.name = profileName.value
    editActive.value = !editActive.value
}
</script>

<template>
    <div class="profile-page df jcs ais">
        <img :src="store.user.profilePic" alt="profilePic" class="profile-pic">
        <div class="profile-info dfCol jcc ais" v-if="!editActive">
            <span class="profile-item name">{{ store.user.name }}</span>
            <span class="profile-item"><i class='bx bx-map'></i>{{ store.user.location }}</span>
            <span class="profile-item"><i class='bx bx-female-sign'></i>{{ store.user.gender }}</span>
            <span class="profile-item"><i class='bx bx-cake'></i>{{ store.user.date }}</span>
            <span class="profile-item"><i class='bx bx-envelope'></i>{{ store.user.mail }}</span>
            <theButton :icon="'bx-edit'" :text="'EDIT'" @click="editActive = !editActive"/>
        </div>
        <div class="profile-edit dfCol jcs ais" v-if="editActive">
            <div class="form-container">
                <label for="name" class="label">Your name</label>
                <input type="text" name="name" v-model="profileName">
            </div>
            <div class="form-container">
                <label for="location" class="label">Location</label>
                <input type="text" name="location">
            </div>
            <div class="form-container">
                <label for="gender" class="label">Gender</label>
                <input type="text" name="gender">
            </div>
            <div class="form-container">
                <label for="birthday" class="label">Birthday</label>
                <input type="text" name="birthday" >
            </div>
            <div class="form-container">
                <label for="email" class="label">E-mail</label>
                <input type="text" name="email">
            </div>
                <theButton :icon="'bx-check-double'" :text="'DONE'" @click="savingProfileInfo()"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.profile-page {
    width: 100%;
    height: 100%;
    padding: 50px;
    gap: 40px;

    .profile-pic {
        width: 300px;
        height: 500px;
        object-fit: cover;
        border-radius: 30px;
    }

    .profile-info {
        color: var(--lime);
        font-size: 30px;

        .profile-item {
            display: flex;
            justify-content: center;
            align-items: center;

            i {
                padding: 0px 20px 0px 0px;
            }
        }

        .name {
            font-size: 45px;
            padding: 15px 10px;
        }

        
    }

    .profile-edit{
        .form-container{
            label{
                background-color: var(--dark2);
            }
            input{
                background-color: var(--dark2);
            }
        }
        
    }
}
</style>