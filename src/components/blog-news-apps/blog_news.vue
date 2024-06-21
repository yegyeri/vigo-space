<script setup>
import { shallowRef, ref, computed } from 'vue'
import { BlogPost } from '@/components/ts/blog-news.ts'
import blogPopup from '@/components/blog-news-apps/blog-popup-news.vue'
import postItem from '@/components/blog-news-apps/blog-item.vue'
import pageTitle from '@/components/interfaceComponents/pageTitle.vue'
import { productStore } from '@/stores/products';
const store = productStore()
const filterPosts = computed(() => {
    return store.posts.filter(c => c.popular.includes('popular'))
})
const authors = [
    {
        id: 1,
        name: 'Hazel Kennedy',
        img: 'https://i.pinimg.com/736x/79/a6/b4/79a6b43c2d270026e99b9e21c6b54698.jpg'
    },
    {
        id: 2,
        name: 'Donna Jacobs',
        img: 'https://i.pinimg.com/564x/c5/83/ee/c583ee48516fc918b7cc26dec40f5025.jpg'
    },
    {
        id: 3,
        name: 'Brenda Burns',
        img: 'https://i.pinimg.com/564x/11/db/d6/11dbd6bb1ac47c64faca1ae0b6f8fb84.jpg'
    },
    {
        id: 4,
        name: 'Juanita Stevens',
        img: 'https://i.pinimg.com/736x/61/3a/8e/613a8eaa1b8ad1ebc6306d649b43310f.jpg'
    },
    {
        id: 5,
        name: 'Denzel Washington',
        img: 'https://i.pinimg.com/564x/a9/88/0c/a9880ca6d146644a87136bb4c9ab7af6.jpg'
    },

]
const aboutPost = ref(false)
const selectedPost = shallowRef(store.posts[0])
function togglePost() {
    aboutPost.value = !aboutPost.value
}
function selectPost(id) {
    const newPost = new BlogPost(store.posts[id])
    selectedPost.value = newPost
    togglePost()
    return selectedPost
}

</script>

<template>
    <div class="blog-news-main">
        <blogPopup v-show="aboutPost" v-model:selectedPost="selectedPost" @close="togglePost()" />
        <pageTitle :icon="'bxs-hot'" :text="'Top News of the Week'" />
        <div class="blog-popular df jcs aic">
            <postItem :post="blogPost" v-for="blogPost in filterPosts" :key="blogPost.id"
                @click="selectPost(blogPost.id - 1)" />
        </div>
        <pageTitle :icon="'bxs-edit-alt'" :text="'Authors'" />
        <div class="blog-authors df jcs aic">
            <div class="author-item dfCol jcc aic" v-for="a in authors" :key="a.id">
                <img :src="a.img" alt="author" class="author-img">
                <span>{{ a.name }}</span>
            </div>
        </div>
        <pageTitle :icon="'bxs-news'" :text="'Blog & News'" />
        <div class="blog-news df jcs aic">
            <postItem :post="blogPost" v-for="blogPost in store.posts" :key="blogPost.id" @click="selectPost(blogPost.id - 1)"/>
        </div>
    </div>

</template>

<style scoped>
.blog-news-main {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    .blog-popular {
        padding: 0px 20px;
        width: 100%;
        height: 300px;
        gap: 30px;

    }

    .blog-authors {
        width: 100%;
        height: 300px;
        overflow-x: auto;
        gap: 20px;

        .author-item {
            width: 200px;
            height: 250px;

            .author-img {
                width: 200px;
                height: 200px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                object-fit: cover;
            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 200px;
                height: 50px;
                color: var(--white);
                font-size: 18px;
                background-color: var(--lime);
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }

        }
    }

    .blog-news {
        padding: 30px 20px;
        width: 100%;
        flex-wrap: wrap;
        gap: 30px;
    }
}
</style>