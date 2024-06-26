<script setup lang="ts">
const props = defineProps<{
    post: Object
}>()
</script>

<template>
    <div class="post-item dfCol jcc aic">
        <img :src="props.post.img" alt="postPic" class="post-item-img">
        <div class="post-info dfCol jcs ais">
            <span class="post-title">{{ props.post.title }}</span>
            <span class="thumb-text">{{ props.post.text }}</span>
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
    width: 380px;
    position: relative;
    border-radius: 20px;
    box-shadow: 0px 0px 35px -15px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    .post-item-img {
        width: 380px;
        height: 250px;
        object-fit: cover;
        border-radius: 15px;
    }

    .post-info {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        position: absolute;
        color: var(--white);
        background-color: rgba(0, 0, 0, 0.6);
        padding: 30px 20px;
        gap: 10px;
        transition: .2s ease;

        .post-title {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            text-transform: uppercase;
            font-size: 22px;
        }

        .thumb-text {
            width: 90%;
            height: 55px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            color: rgba(255, 255, 255, 0.9);
        }

        .author-date {
            gap: 20px;

            span {
                font-size: 15px;
                background-color: var(--lime);
                padding: 5px 15px;
                color: var(--white);
                font-weight: 500;
                border-radius: 5px;
            }
        }


    }

    &:hover {
        box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.4);
        .post-info{
            background-color: rgba(219, 51, 96,0.4);
        }
    }

    @include forTablets() {
        width: 400px;
        height: 250px;

        .post-item-img {
            width: 400px;
            height: 250px;
        }

    }
    @include forMobile(){
        width: 250px;
        height: 300px;
        .post-item-img{
            width: 250px;
            height: 300px;
        }
    }
}
</style>