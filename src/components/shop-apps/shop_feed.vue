<script setup>
import shopItem from '@/components/shop-apps/shop-item.vue'
import theButton from '@/components/interfaceComponents/TheButton.vue'
import pageTitle from '@/components/interfaceComponents/pageTitle.vue'
import { ref, computed } from 'vue'

import { productStore } from '@/stores/products';
const store = productStore()
const searchValue = ref('')
const categoryCheck = ref('')
const filterProducts = computed(() => {
    return store.shopProducts.filter(c => c.category.includes(categoryCheck.value) && c.name.includes(searchValue.value))
})
</script>

<template>
    <div class="shop-page dfCol jcs aic">
        <div class="shop-page-menu dfCol jcc ais">
            <pageTitle :icon="'bxs-shopping-bags'" :text="'Vigo Shop'"/>
            <div class="search-box df jcs aic">
                <i class='bx bx-search-alt' ></i>
                <input type="text" v-model="searchValue" placeholder="Search from Vigo...">
            </div>
            <div class="category-btns df jcs aic">
                <theButton :icon="'bxs-flag-checkered'" :text="'ALL'" @click="categoryCheck = ''"/>
                <theButton :icon="'bxs-award'" :text="'INVENTORY'" @click="categoryCheck = 'inventory'"/>
                <theButton :icon="'bxs-capsule'" :text="'PHARMACY'" @click="categoryCheck = 'pharmacy'"/>
                <theButton :icon="'bxs-t-shirt'" :text="'CLOTHES'" @click="categoryCheck = 'clothes'"/>
                <theButton :icon="'bxs-watch-alt'" :text="'WATCHES'" @click="categoryCheck = 'clocks'"/>

            </div>
        </div>
        <div class="shop-main df jcs ais">
            <shopItem v-for="productItem in filterProducts" :product="productItem" />
        </div>
    </div>

</template>

<style scoped>
.shop-page{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    gap: 30px;
    .shop-page-menu{
        width: 100%;
        gap: 30px;
        .search-box{
            width: 100%;
            height: 70px;
            padding: 0px 20px;
            border-radius: 15px;
            gap: 30px;
            border: 2px solid var(--lime);
            .bx{
                font-size: 40px;
                color: var(--white);
            }
            input{
                width: 90%;
                height: 50px;
                background-color: var(--dark2);
                border: none;
                font-size: 28px;
                color: var(--white);
                font-weight: 300;
                &:focus{
                    outline: none;
                }
            }
        }
        .category-btns{
            gap: 20px;
        }
    }
    .shop-main{
        flex-wrap: wrap;
        gap: 20px;
    }
}
</style>