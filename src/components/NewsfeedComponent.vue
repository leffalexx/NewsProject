<template>
  <section class="news center">
    <p class="news__title">News feed</p>
    <p class="news__text">
      You can click to the source website or read the article right here
    </p>
    <div class="news__items">
      <div class="news__item" v-for="item in displayedNewsItems" :key="item.url">
        <div class="news__item-content">
          <a :href="item.url" class="news__item-source">{{ item.source }}</a>
          <p class="news__heading-text">{{ item.heading }}</p>
          <div class="news__item_content">
            <div class="news__item_content-date">{{ item.date }}</div>
            <router-link :to="{ name: 'Article', params: { id: item.id } }" class="news__item_content-elem">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </router-link>
          </div>
        </div>
        <div class="news__item-scale">
          <ScaleComponent :value="item.bias" />
        </div>
      </div>
    </div>
    <div v-if="isLoading" class="loading-indicator">Loading...</div>
  </section>
</template>

<script>
import ScaleComponent from './ScaleComponent.vue';
import newsData from '../JSON/data_with_bias.json';

export default {
  name: 'VueProjectHomepagenews',
  components: {
    ScaleComponent,
  },
  data() {
    return {
      newsItems: [],
      displayedNewsItems: [],
      isLoading: false,
      itemsToLoad: 20,
      loadingThreshold: 100,
    };
  },
  mounted() {
    this.newsItems = newsData;
    this.loadInitialNews();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    loadInitialNews() {
      this.displayedNewsItems = this.newsItems.slice(0, this.itemsToLoad);
    },
    loadMoreNews() {
      const startIndex = this.displayedNewsItems.length;
      const endIndex = startIndex + this.itemsToLoad;
      const newItems = this.newsItems.slice(startIndex, endIndex);
      this.displayedNewsItems = [...this.displayedNewsItems, ...newItems];
      this.isLoading = false;
    },
    handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (
        scrollTop + clientHeight >= scrollHeight - this.loadingThreshold &&
        !this.isLoading &&
        this.displayedNewsItems.length < this.newsItems.length
      ) {
        this.isLoading = true;
        this.loadMoreNews();
      }
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

  &__title {
    margin-bottom: 10px;
    color: #292f36;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
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
    position: relative;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    transition: 0.3s;
    text-decoration: none;
    font-size: 22px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &-scale {
      width: 240px;
      padding-left: 30px;
      border-radius: 8px 8px 8px 0px;

    }

    &_content {
      display: flex;
      justify-content: space-between;
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
