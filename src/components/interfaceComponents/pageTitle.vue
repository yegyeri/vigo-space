<!-- import pageTitle from '@/components/interfaceComponents/pageTitle.vue' -->
<script setup lang="ts">
const props = defineProps<{
    icon: string
    text: string
}>()
</script>

<template>
   <div class="page-title">
        <span class="title-icon"><i class='bx' :class="props.icon"></i></span>
        <span class="title-text">{{props.text}}</span>
    </div>
</template>

<style scoped lang="scss">
.page-title{
  display: flex;
  justify-content: start;
  align-items: center;

  width: 70%;
  height: 50px;
  padding: 30px 0px 40px 0px;
  gap: 10px;
  border-bottom: 5px solid var(--lime);
  color: var(--lime);

  .title-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    font-size: 50px;
  }
  .title-text{
    display: flex;
    justify-content: start;
    align-items: center;

    color: var(--white);
    width: calc(100% - 50px);
    font-size: 40px;
    font-weight: 400;
  }
}
</style>