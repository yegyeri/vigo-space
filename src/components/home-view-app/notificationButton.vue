<!-- import notifyBtn from '@/components/home-view-app/notificationButton.vue' -->
<script setup lang="ts">
import { ref } from 'vue'
import {notifyClass} from "@/components/ts/notifications.ts"
import theButton from '@/components/interfaceComponents/TheButton.vue'
const notifyShow = ref(false)
const props = defineProps<{
    btnIcon: string
    btnText: string
    notificate: notifyClass
    text: string
}>()

function showMessage(){
    notifyShow.value = !notifyShow.value
    setTimeout(() => {
        notifyShow.value = !notifyShow.value
    }, 3600);
}
</script>

<template>
    <theButton :icon="props.btnIcon" :text="props.btnText" @click="showMessage()"/>
    <teleport to='body'>
        <transition name="slide-fade">
            <div class="notify-body df jcc aic" :class="props.notificate.styleClass" v-if="notifyShow">
                <span class="notify-icon df jcc aic"><i class='bx' :class="props.notificate.icon" ></i></span>
                <span class="notify-text df jcc aic">{{ props.text }}</span>
            </div>
        </transition>
    </teleport>
</template>

<style scoped lang="scss">
.notify-body{
    position: fixed;
    top: 30px;
    right: 150px;
    z-index: 500;

    height: 70px;

    border-radius: 10px;
    padding: 10px 20px;
    .notify-icon{
        width: 50px;
        height: 50px;
        font-size: 30px;
        color: var(--white);
    }
    .notify-text{
        padding: 0px 15px;
        text-transform: uppercase;
        font-size: 20px;
        color: var(--white);
    }
}
.notify-success{
    background-color: rgba(111, 168, 151, 0.7);
}
.notify-info{
    background-color: rgba(111, 141, 168, 0.7);
}
.notify-alert{
    background-color: rgb(168, 120, 0);
}
.notify-danger{
    background-color: rgba(168, 111, 111, 0.7);
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>