<template>
    <div>
        <NewsitemComponent />
    </div>
</template>

<script>
import NewsitemComponent from '@/components/NewsitemComponent.vue'
export default {
    name: 'ArticlePage',
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    },
    components: {
        NewsitemComponent
    }
}
</script>

<style lang="scss" scoped> 
  .center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>