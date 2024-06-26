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
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    
    

    color: var(--white);
    font-size: 40px;
    font-weight: 400;
  }
  
  @include forLaptop(){
    padding: 30px 0px;
    .title-icon{
      font-size: 45px;
    }
    .title-text{
      font-size: 35px;
    }
  }
  @include forTablets(){
    width: 70%;
    .title-icon{
      font-size: 40px;
    }
    .title-text{
      font-size: 26px;
    }
  }
  @include forMobile(){
    width: 90%;
    padding: 30px 0px 20px 0px;
    .title-icon{
      font-size: 30px;
    }
    .title-text{
      font-size: 20px;
    }
  }
  
}
</style>