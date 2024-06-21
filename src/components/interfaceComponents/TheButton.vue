<!-- import theButton from '@/components/interfaceComponents/TheButton.vue' -->
<script setup lang="ts">
const props = defineProps<{
    icon: string
    text: string
}>()
</script>

<template>
    <div class="btn">
        <span class="btn-text">{{ props.text }}</span>
        <span class="btn-icon"><i class='bx' :class="props.icon"></i></span>
    </div>
</template>

<style scoped lang="scss">
.btn{
  display: flex;
  justify-content: center;
  align-items: center;

  
  height: 50px;
  border: none;
  border-radius: 10px;

  cursor: pointer;
  user-select: none;
  text-decoration: none;

  background-color: var(--lime);
  color: var(--dark);
  .btn-text{
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--white);

    font-size: 20px;
    padding: 0px 30px;
  }
  .btn-icon{
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--lime);
    background-color: var(--white);

    font-size: 30px;
    width: 50px;
    height: 50px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  
  &:hover{
      background-color: var(--white);
      .btn-icon{
        background-color: var(--lime);
        color: var(--white);
        transition: .3s ease;
      }
      .btn-text{
        color: var(--lime);
        transform: scale(1.1);
        padding-right: 60px;
        transition: .3s ease;
      }
      transition: .3s ease;
  }
}
</style>
