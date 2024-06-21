<script setup>
import theButton from '@/components/interfaceComponents/TheButton.vue'
import pageTitle from '@/components/interfaceComponents/pageTitle.vue'
import coachItem from '@/components/coaches-apps/coach-item.vue'

import { ref, computed } from 'vue'
import { productStore } from '@/stores/products';
const store = productStore()

const genderCheckbox = ref('')

const filterCoaches = computed(() => {
    return store.coaches.filter(c => c.gender.includes(genderCheckbox.value))
})


</script>

<template>
    <div class="coaches-feed-main dfCol jcs ais">
        <pageTitle :icon="'bx-medal'" :text="'Coaches'" />
        <div class="category-btns df jcs aic">
            <theButton :icon="'bx-male-female'" :text="'ALL'" @click="genderCheckbox = ''"/>
            <theButton :icon="'bx-male'" :text="'MALE'" @click="genderCheckbox = 'male'"/>
            <theButton :icon="'bx-female'" :text="'FEMALE'" @click="genderCheckbox = 'girl'"/>
        </div>
        

        <div class="coaches-list df jcs aic">
            <coachItem v-for="(item, index) in filterCoaches" :key="index" :coach="item" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.coaches-feed-main {
    width: 100%;
    height: 100%;
    gap: 20px;
    overflow-y: auto;

    .category-btns{
        gap: 20px;
    }

    .coaches-list {
        width: 100%;
        height: 750px;
        gap: 20px;
        flex-wrap: wrap;
        scrollbar-color: var(--lime);

    }
}
</style>