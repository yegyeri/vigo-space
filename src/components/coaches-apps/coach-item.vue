<script setup lang="ts">
const props = defineProps<{
    coach: Object
}>()
</script>

<template>
    <div class="coach-item dfCol jcc aic">
        <div class="coach-card-front dfCol jcc aic">
            <img :src="props.coach.img" alt="coach" class="coach-item-img">
            <div class="coach-info dfCol jcc ais">
                <span>{{ props.coach.name }}</span>
                <span>{{ props.coach.kind }}</span>
                <span>Age: {{ props.coach.age }}</span>
            </div>
            <div class="coach-card-back dfCol jcc aic">
                <span>{{ props.coach.name }}</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, a</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio magni eum quaerat
                    atque.</span>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.coach-item {
    position: relative;

    .coach-card-front {
        width: 300px;
        height: 450px;

        .coach-item-img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 20px;
        }

        .coach-info {
            position: absolute;
            background-color: rgba(219, 51, 96, 0.9);
            color: var(--white);
            padding: 10px 20px;
            border-radius: 10px;
            bottom: 20px;
            left: 20px;
            font-size: 20px;
        }

        .coach-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 19px;

            cursor: pointer;
            display: none;

            background-color: rgba(0, 0, 0, 0.8);
            padding: 30px;
            gap: 10px;

            span {
                color: white;

                &:nth-child(1) {
                    font-size: 30px;
                    color: var(--lime);
                }

                &:nth-child(2) {
                    font-size: 20px;
                }
                &:nth-child(3) {
                    font-size: 20px;
                }
            }
        }
    }

    &:hover {
        .coach-card-front {
            .coach-info{
                display: none;
            }
            .coach-card-back {
            display: flex;
        }
        }

        
    }
    @include forLaptop(){
        .coach-card-front{
            width: 250px;
            height: 350px;
            .coach-info{
                font-size: 15px;
            }
            .coach-card-back{
                width: 250px;
                height: 350px;
                span{
                    &:nth-child(1){
                        font-size: 20px;
                    }
                    &:nth-child(2){
                        font-size: 15px;
                    }
                    &:nth-child(3){
                        font-size: 15px;
                    }
                    
                }
            }
        }
    }
    @include forTablets(){
        .coach-card-front{
            width: 200px;
            height: 300px;
            .coach-info{
                font-size: 12px;
            }
            .coach-card-back{
                width: 200px;
                height: 300px;
                span{
                    &:nth-child(1){
                        font-size: 15px;
                    }
                    &:nth-child(2){
                        font-size: 12px;
                    }
                    &:nth-child(3){
                        font-size: 12px;
                    }
                    
                }
            }
        }
    }
    @include forMobile(){
        .coach-card-front{
            width: 250px;
            height: 350px;
            .coach-info{
                font-size: 12px;
            }
            .coach-card-back{
                width: 250px;
                height: 350px;
                span{
                    &:nth-child(1){
                        font-size: 15px;
                    }
                    &:nth-child(2){
                        font-size: 12px;
                    }
                    &:nth-child(3){
                        font-size: 12px;
                    }
                    
                }
            }
        }
    }

}
</style>