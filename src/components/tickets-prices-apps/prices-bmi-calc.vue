<script setup lang="ts">
import theButton from '@/components/interfaceComponents/TheButton.vue'
import pageTitle from '@/components/interfaceComponents/pageTitle.vue'
import { ref } from 'vue'
const weightValue = ref()
const heightValue = ref()
const bmiResult = ref()
const bmiInfo = ref('')
function BmiCalulate(weight:number, height:number){
    bmiResult.value = weight / ((height/100)**2)
    if(bmiResult.value <= 17){
        bmiInfo.value = 'Underweight!'
    } else if(bmiResult.value >17 && bmiResult.value <= 25){
        bmiInfo.value = 'Normal body weight!'
    }else if(bmiResult.value > 25){
        bmiInfo.value = 'Overweight!'
    }
    return bmiResult
}
</script>

<template>
    <pageTitle :icon="'bxs-calculator'" :text="'BMI Calculator'"/>
    <div class="bmi-calc df jcc ais">
        <div class="bmi-calc-inputs df jcc aic">
            <div class="form-container">
                <label for="weight">Your weight (kg)</label>
                <input type="text" name="weight" v-mask="'####'" v-model="weightValue">
            </div>
            <div class="form-container">
                <label for="height">Your height (cm)</label>
                <input type="text" name="height" v-mask="'####'" v-model="heightValue">
            </div>

        </div>
        <div class="bmi-calc-result df jcc aic">
            <theButton :icon="'bx-math'" :text="'RESULT'" @click="BmiCalulate(weightValue, heightValue)"/>
            <div class="result df jcs aic" v-if="bmiResult">
                <span>{{ Math.floor(bmiResult) }}</span>
                <span>{{ bmiInfo }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.bmi-calc {
    height: 100px;
    gap: 20px;
    .bmi-calc-inputs {
        gap: 20px;
        height: 100px;
        .form-container {
            width: 200px;
            height: 55px;
            label {
                background-color: var(--dark2);
            }

            input {
                width: 150px;
                background-color: var(--dark2);
                color: var(--white);
            }
        }
    }

    .bmi-calc-result {
        height: 100px;
        font-size: 20px;
        color: var(--white);
        gap: 20px;

        .result {
            width: 400px;
            gap: 20px;
            span{
                &:nth-child(1){
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100px;
                    height: 50px;
                    font-size: 30px;
                    color: var(--lime);
                    background-color: var(--white);
                    border-radius: 10px;
                }
                &:nth-child(2){
                    font-weight: 300;
                    font-size: 25px;
                }
            }
        }
    }
    @include forLaptop(){
        flex-direction: column;
        height: 200px;

    }
    @include forMobile(){
        height: 300px;
        .bmi-calc-inputs{
            flex-direction: column;
            height: 200px;
            gap: 0;
        }
        .bmi-calc-result{
            align-items: start;
            justify-content: start;
            flex-direction: column;
        }
    }

}
</style>