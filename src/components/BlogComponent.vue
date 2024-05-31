<template>
    <section class="blog center">
        <h2 class="blog__header">Explore more posts</h2>
        <div class="blog__items" id="blog-container">
            <div class="blog__item" v-for="article in blogPostData" :key="article.id">
                <img :src="getImageUrl(article.src)" class="blog__item_img">
                <h3 class="blog__item_text">{{ article.title }} </h3>
                <div class="blog__item_content">
                    <p class="blog__item_content-date">{{ article.date }}</p>
                    <a href="#" class="blog__item_content-elem">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import blogData from '../JSON/blogdata.json'

export default {
    name: 'BlogComponent',
    data() {
        return {
            blogPostData: blogData
        }
    },
    mounted() {
    },
    methods: {
        getImageUrl(src) {
            return require(`@/assets/${src}`);
        }
    }
}
</script>
<style lang="scss" scoped>

.blog {
    margin-top: 22px;
    margin-bottom: 48px;

    &__header {
        margin-bottom: 30px;
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &__items {
        display: flex;
        flex-direction: row;
        gap: 25px;
        flex-wrap: wrap;
    }

    &__item {
        position: relative;
        padding: 20px;
        border-radius: 62px;
        border: 1px solid #e7e7e7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        transition: 0.3s;
        width: 480px;

        &_img {
            margin-bottom: 21px;
            border-top-right-radius: 62px;
            border-top-left-radius: 62px;
            height: 240px;
            width: 480px;
        }

        &_text {
            display: flex;
            width: 305px;
            height: 70px;
            flex-direction: column;
            justify-content: center;

            color: #292F36;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
            margin-bottom: 30px;
        }

        &_content {
            display: flex;
            width: 340px;
            align-items: center;
            gap: 65px;

            &-date {
                display: flex;
                width: 223px;
                height: 33px;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;

                color: #4D5053;
                font-family: Jost;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.16px;
                text-transform: capitalize;
            }

            &-elem {
                width: 52px;
                height: 52px;
                flex-shrink: 0;
            }
        }

        &:hover {
            background: #f4f0ec;
        }

        &:hover circle {
            fill: #fff;
        }
    }
}
</style>
