<template>
  <div>
    <BlogPostComponent />
    <BlogComponent />
  </div>
</template>

<script>
import BlogPostComponent from '@/components/BlogPostComponent.vue'
import BlogComponent from '@/components/BlogComponent.vue'
export default {
  name: 'NewsProjectBlogPage',
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  },
  components: {
    BlogPostComponent,
    BlogComponent
  }
}
</script>

<style lang="scss" scoped>
  .center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}</style>