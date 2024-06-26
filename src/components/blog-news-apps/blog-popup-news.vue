<script setup lang="ts">
import { productStore } from '@/stores/products';
import { ref } from 'vue'
const store = productStore()
import { BlogPost } from '@/components/ts/blog-news.ts'

import pageTitle from '@/components/interfaceComponents/pageTitle.vue'
import theButton from '@/components/interfaceComponents/TheButton.vue'

const textComment = ref('')
const props = defineProps<{
    selectedPost: BlogPost
}>()

const emits = defineEmits<{
    (e: 'update:selectedPost', v: BlogPost): void
}>()

function likePost() {
    const newPost = new BlogPost(props.selectedPost)
    newPost.addLike()
    console.log(newPost.likes)
    emits('update:selectedPost', newPost)
}
function updateComment() {
    const newComment = {
        id: 10,
        name: store.user.name,
        text: textComment.value
    }
    const updatePost = new BlogPost(props.selectedPost)
    updatePost.addComment(newComment)
    emits('update:selectedPost', updatePost)
}
</script>

<template>
    <div class="blog-popup df jcc ais">
        <div class="some-post dfCol jcs ais">
            <div class="post-title df jcsb aic">
                <pageTitle :icon="'bxs-news'" :text="$props.selectedPost.title" />
                <theButton :icon="'bx-x-circle'" :text="'CLOSE'" @click="$emit('close')" />
            </div>
            <img :src="props.selectedPost.img" alt="img" class="popup-img">
            <div class="post-popup-text">
                <span>{{ props.selectedPost.text }}</span>
            </div>
            <div class="post-popup-info dfCol jcc ais">
                <div class="post-feedbacks author-date">
                    <div class="feedback">
                        <span class="feed-icon"><i class='bx bxs-user-rectangle'></i></span>
                        <span class="feed-text">{{ props.selectedPost.author }}</span>
                    </div>
                    <div class="feedback">
                        <span class="feed-icon"><i class='bx bx-calendar'></i></span>
                        <span class="feed-text">{{ props.selectedPost.date }}</span>
                    </div>
                    <span></span>
                </div>
                <div class="post-feedbacks">
                    <div class="feedback" @click="likePost()">
                        <span class="feed-icon" v-if="!props.selectedPost.like"><i class='bx bx-like'></i></span>
                        <span class="feed-icon" v-else><i class='bx bxs-like'></i></span>
                        <span class="feed-text">{{ props.selectedPost.likes }}</span>
                    </div>
                    <div class="feedback">
                        <span class="feed-icon"><i class='bx bx-message-detail'></i></span>
                        <span class="feed-text">{{ props.selectedPost.commentList.length }}</span>
                    </div>
                </div>

            </div>
            <div class="post-comments">
                <div class="write-comment dfCol jcs ais">
                    <textarea name="comment" class="comment-input" cols="30" rows="10" maxlength="200"
                        placeholder="Write Your Comment..." v-model="textComment" required></textarea>
                    <theButton :icon="'bx-message-square-add'" :text="'COMMENT'" @click="updateComment()" />
                </div>
                <div class="comment-list dfCol jcs ais">
                    <pageTitle :icon="'bx-message-alt-dots'" :text="'Commentaries'" />
                    <div class="comment-item dfCol jcs ais" v-for="item in props.selectedPost.commentList"
                        :key="item.id">
                        <span>{{ item.name }}</span>
                        <span>{{ item.text }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.blog-popup {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.7);

    .some-post {
        width: 80%;
        height: 800px;
        background-color: var(--dark2);
        border-radius: 15px;
        padding: 15px 30px;
        overflow-y: auto;
        gap: 30px;
        margin-top: 150px;

        .post-title {
            width: 100%;
        }

        .popup-img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 10px;
        }

        .post-popup-text {
            width: 100%;
            padding: 0px 40px;

            span {
                font-size: 22px;
                font-weight: 300;
                color: var(--white);
            }
        }

        .post-popup-info {
            width: 100%;
            height: 250px;
            padding: 0px 50px;

            .author-date {
                .feedback {
                    .feed-text {
                        padding: 0px 10px;
                        font-size: 15px;
                    }
                }
            }

        }

        .post-comments {
            width: 100%;
            gap: 10px;

            .write-comment {
                width: 100%;
                height: 300px;
                gap: 30px;

                .comment-input {
                    resize: none;
                    width: 100%;
                    height: 150px;
                    border: 1px solid var(--lime);
                    border-radius: 10px;
                    background-color: var(--dark2);
                    padding: 15px;
                    font-size: 20px;
                    color: var(--white);

                    &:focus {
                        outline: none;
                    }
                }
            }

            .comment-list {
                width: 100%;
                gap: 25px;

                .comment-item {
                    width: 100%;
                    padding: 10px 20px;
                    border-radius: 10px;
                    background-color: var(--white);

                    span {
                        &:nth-child(1) {
                            font-size: 20px;
                            background-color: var(--lime);
                            color: var(--white);
                            padding: 2px 20px;
                            border-radius: 10px;
                        }

                        &:nth-child(2) {
                            font-size: 20px;
                            background-color: var(--white);
                            color: var(--lime);
                            padding: 2px 20px;
                        }
                    }
                }


            }
        }
    }
    @include forLaptop(){
        .some-post{
            width: 70%;
        }
    }
    @include forTablets(){
        .some-post{
            margin-top: var(--navBar-closed);
            border-radius: 0;
            width: 100%;
            height: 100vh;
            .post-title{
                flex-direction: column-reverse;
            }
            .post-popup-text{
                padding: 0px;
                span{
                    font-size: 18px;
                }
            }
            .post-popup-info{
                padding: 0px;
            }
        }
    }
}
</style>