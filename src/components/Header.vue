<template>
    <header class="header center">
        <nav class="logo">
            <img src="../assets/soylogo.png" alt="logo" class="logo__img">
            <router-link to="/" class="logo__text">Soy agenda</router-link>
        </nav>
        <nav class="menu">
            <router-link to="/" class="menu__home">Newsfeed</router-link>
            <router-link to="/blog" class="menu__project">Blog</router-link>
            <router-link to="/about" class="menu__blog">About</router-link>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'VueProjectHeader',
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 53px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    &__text {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &__img {
        width: 120px;
        border-radius: 12px;
    }
}

.menu {
    display: flex;
    justify-content: space-between;
    width: 243px;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;

    &__link {
        color: #292F36;
    }
}
</style>