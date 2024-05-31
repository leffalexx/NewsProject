<template>
  <div>
    <NewsfeedComponent />
  </div>
</template>

<script>
import NewsfeedComponent from '@/components/NewsfeedComponent.vue'
export default {
  name: 'NewsProjectMainPage',
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  },
  components: {
    NewsfeedComponent
  }
}
</script>

<style lang="scss" scoped>
  
  .center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
a {
  text-decoration: none;
  color: black;
}

</style>
