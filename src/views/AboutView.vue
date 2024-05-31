<template>
    <div>
        <AboutComponent />
    </div>
</template>

<script>
import AboutComponent from '@/components/AboutComponent.vue'
export default {
    name: 'NewsProjectAboutPage',
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    },
    components: {
        AboutComponent
    }
}
</script>

<style lang="scss" scoped> 
  .center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>