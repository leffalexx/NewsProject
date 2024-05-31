<template>
    <section class="news center">
        <p class="news__title">
            About this project
        </p>
        <div class="news__items">
            <div class="news__item">
                <p>This website is developed to detect political bias of the news. Aside every newspiece you can find an
                    image that represent political agenda that author of given text is associating with.</p>
                <p>You have a choice to either stay inside your ecochamber by clicking only to the news that are marked
                    according to your political views or you can explore outside.</p>
                <p>Our project scraping news from most major sources of news and analyzes it using AI. This is how our
                    scale works:</p>

                <div class="news__item-scale">
                    <ScaleComponent :value="'Left'" />
                </div>
                <p class="news__item_paragraph">Each heading demonstrated in the newsfeed has a sign next to it. If it's
                    pointing left - our AI model
                    predict left political bias, if it's pointing right - we assume that it has a right bias. If you see
                    a leveled level - then we can hope that author is moderately neutral.</p>

            </div>
        </div>
    </section>
</template>

<script>
import ScaleComponent from './ScaleComponent.vue'

export default {
    name: 'VueProjectAboutItem',
    components: {
        ScaleComponent,
    },
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

    &__body {
        margin-bottom: 10px;
        font-family: Jost;
        font-size: 20px;

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

        &-scale {
            width: 240px;
            padding-left: 30px;
            border-radius: 8px 8px 8px 0px;

        }

        &_paragraph {
            padding-top: 40px;
        }


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

        &_text {
            display: flex;
            width: 305px;
            height: 70px;
            flex-direction: column;
            justify-content: center;

            color: #292F36;
            font-family: DM Serif Display;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 31.25px */
            letter-spacing: 0.5px;
            margin-bottom: 30px;
        }

        &_content {
            display: flex;
            justify-content: center;
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

            // &-elem {
            //     width: 52px;
            //     height: 52px;
            //     flex-shrink: 0;
            // }
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