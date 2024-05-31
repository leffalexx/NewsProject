<template>
    <section class="news center">
      <div class="news__items">
        <div class="news__item" v-if="article">
          <a :href="article.url" class="news__item-source">{{ article.source }}</a>
          <h1 class="news__heading-text">{{ article.heading }}</h1>
          <p class="news__body">{{ article.article }}</p>
          <div class="news__item_content">
            <div class="news__item_content-date">{{ article.date }}</div>
          </div>
        </div>
        <div v-else>Loading...</div>
      </div>
    </section>
  </template>
  
  <script>
  import newsData from '../JSON/data_with_bias.json';
  
  export default {
    name: "ArticlePage",
    data() {
      return {
        article: null,
      };
    },
    mounted() {
      this.fetchArticle();
    },
    beforeRouteUpdate(to, from, next) {
      this.fetchArticle();
      next();
    },
    methods: {
      fetchArticle() {
        const articleId = this.$route.params.id;
        this.article = newsData.find((article) => article.id === articleId) || null;
      },
    },
  };
  </script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}
.news {
    margin-bottom: 96px;

    &__body {
        margin-bottom: 10px;
        font-family: Jost;
        font-size: 20px;
        line-height: 40px;

    }

    &__text {
        margin-bottom: 52px;
        width: 811px;
        margin-left: auto;
        margin-right: auto;
        color: #4d5053;
        text-align: center;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }

    &__items {
        display: flex;
        flex-direction: column;
        gap: 25px;
        flex-wrap: wrap;
    }

    &__item {
        margin-top: 96px;
        position: relative;
        padding: 20px;
        border-radius: 20px;
        border: 1px solid #e7e7e7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        transition: 0.3s;
        text-decoration: none;
        font-size: 22px;


        &_tag {
            position: absolute;
            width: 124px;
            top: 247px;
            left: 40px;
            color: #4d5053;
            font-family: Jost;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.16px;
            background-color: #fff;
            border-radius: 8px 8px 8px 0px;
            padding: 7px 9px 10px 11px;
            transition: 0.3s;
        }

        &_content {
            display: flex;
            justify-content: flex-start;
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
                /* 24px */
                letter-spacing: 0.16px;
                text-transform: capitalize;
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