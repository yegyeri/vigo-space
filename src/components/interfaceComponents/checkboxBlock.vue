<!-- import theCheckbox from '@/components/interfaceComponents/checkboxBlock.vue' -->
<script setup lang="ts">
import { ref } from 'vue'
const rememberToggle = ref(false)

const props = defineProps<{
    text: string
}>()
</script>

<template>
    <div class="checkbox-agree df jcc aic" @click="rememberToggle = !rememberToggle">
        <div class="checkbox df jcc aic" >
            <i class='bx bx-checkbox' v-if="!rememberToggle"></i>
            <i class='bx bx-checkbox-checked' v-if="rememberToggle"></i>
        </div>
        <span>{{props.text}}</span>
    </div>
</template>

<style scoped lang="scss">
.checkbox-agree{
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  color: var(--white);
  font-size: 20px;
  cursor: pointer;
  &:hover{
      color: var(--lime);
      transition: .3s ease;
  }
  .checkbox{
      font-size: 30px;
      
  }
}
</style>