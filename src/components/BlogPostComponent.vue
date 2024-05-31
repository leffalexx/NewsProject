<template>
    <section class="blog-post center">
        <h2 class="blog-post__title">Latest Post</h2>
        <div class="blog-post__latest-post" v-if="latestPost">
            <div class="blog-post__latest-post-subbox">
                <img class="blog-post__latest-post-image" :src="getImageUrl(latestPost.src)" alt="picture">
                <article class="blog-post__latest-post-text">
                    <h3 class="blog-post__latest-post-head">{{ latestPost.title }}</h3>
                    <p class="blog-post__latest-post-content">{{ latestPost.content }}</p>
                    <div class="blog__data-arrow-box blog-post__data-arrow-box">
                        <p class="blog__date">{{ latestPost.date }}</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
import blogData from '../JSON/blogdata.json';

export default {
    name: 'BlogPostComponent',
    data() {
        return {
            blogPostData: blogData,
            latestPost: null
        };
    },
    mounted() {
        this.latestPost = this.getLatestPost();
    },
    methods: {
        getLatestPost() {
            return this.blogPostData.sort((a, b) => b.id.localeCompare(a.id))[0];
        },
        getImageUrl(src) {
            return require(`@/assets/${src}`);
        }
    }
}
</script>

<style lang="scss" scoped>
.blog-post {

    display: flex;
    flex-direction: column;
    gap: 27px;

    &__title {
        color: #292f36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &__latest-post {
        padding: 22px;
        border-radius: 62px;
        border: 1px solid #e7e7e7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        transition: 0.3s;
        margin-bottom: 64px;

        &:hover {
            background: #f4f0ec;
        }

        &:hover circle {
            fill: white;
        }

        &-subbox {
            display: flex;
            flex-direction: row;
            gap: 64px;
        }

        &-image {
            border-radius: 48px;
            max-height: 240px;
            max-width: 240px;
        }

        &-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-top: 16px;
        }

        &-head {
            max-width: 463px;
            margin-bottom: 22px;
            color: #292f36;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
        }

        &-content {

            color: #4d5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;

            &_1 {
                margin-bottom: 34px;
            }

            &_2 {
                margin-bottom: 42px;
            }
        }
    }
}

.blog__date {
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
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}
</style>
