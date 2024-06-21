<script setup lang="ts">
const props = defineProps<{
    post: Object
}>()
</script>

<template>
    <div class="post-item dfCol jcc aic">
        <img :src="props.post.img" alt="postPic" class="post-item-img">
        <div class="post-info dfCol jcc ais">
            <span class="post-title">{{ props.post.title }}</span>
            <span class="author-date df jcs aic">
                <span class="post-author">{{ props.post.author }}</span>
                <span class="post-date">{{ props.post.date }}</span>
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.post-item {
    height: 250px;
    width: 450px;
    position: relative;
    border-radius: 20px;
    box-shadow: 0px 0px 35px -15px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    .post-item-img {
        width: 450px;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }

    .post-info {
        width: 100%;
        height: 50px;
        position: absolute;
        color: var(--white);
        background-color: rgba(219, 51, 96, 0.7);
        padding: 10px 20px;
        top: 30px;
        gap: 10px;
        transition: .2s ease;
        .post-title{
            text-transform: uppercase;
            font-size: 20px;
        }

        .author-date {
            display: none;
            gap: 20px;

            span{
                font-size: 15px;
                background-color: var(--white);
                padding: 0px 10px;
                color: var(--lime);
                font-weight: 500;
                border-radius: 5px;
            }
        }
        

    }

    &:hover {
        box-shadow: 0px 0px 8px 7px rgba(219, 51, 96, 0.1);
        .post-info{
            height: 80px;
            .author-date{
                display: flex;
            }
        
        }
    }
}
</style>