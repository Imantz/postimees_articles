<script setup lang="ts">
    import { Article } from 'composables/articles';

    defineProps<{
        index: number
        item: Article
    }>()
    
</script>

<template>
    <div class="article">
        <div style="display: flex;">
            <picture class="right-image" v-if="index % 2 !== 0">
                <img :src="item.thumbnail.sources.portrait.small" :alt="item.thumbnail.title.et">
            </picture>
            <div class="title-container">
                <picture>
                    <source media="(max-width:480px)" :srcset="item.thumbnail.sources.landscape.small">
                    <source media="(max-width:960px)" :srcset="item.thumbnail.sources.landscape.medium">
                    <img :src="item.thumbnail.sources.landscape.large" :alt="item.thumbnail.title.et" loading="lazy">
                </picture>
                <NuxtLink class="title tabac-sans-bold" to="https://www.postimees.ee" :alt="item.headline">
                    {{  item.headline }}
                </NuxtLink>
            </div>
        </div>

        <div class="content-container" v-bind:class="index % 2 === 0 ? '' : 'reverse' ">
            <div class="content" v-html="item.articleLead[0].html"></div>
            <div class="counter">
                <span class="tabac-sans-semi-bold">{{ index + 1 }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .article {
        .title-container {
            flex: 1;
            position: relative;

            .title {
                line-height: 60px;
                font-size: 50px;
                color: inherit;
                text-decoration: unset;
                position: absolute;
                bottom: 140px;
                color: #fff;
                padding-left: 130px;
                padding-right: 225px;
            }

            picture {
                img {
                    width: 100%; 
                    height: 100%;
                }
            }
        }

        .right-image {
            background-color: #1ba6e2;
            width: 25%;

            img {
                width: 100%; 
                height: 100%; 
                opacity: 0.5;
            }
        }

        .content {
            background-color: #181818;
            color: #fff;
            padding: 65px 225px 65px 130px;
            flex: 1;
        }
        .content-container {
            display: flex;

            .counter {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100%;
                width: 25%;
                background-color: #1ba6e2;
                color: #fff;
                span {
                    font-size: 48px;
                    border: 4px solid #ffffff50;
                    border-radius: 100%;
                    padding: 20px;
                    width: 77px;
                    height: 77px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
        .content-container.reverse {
            display: flex;
                flex-direction: row-reverse;
        }
    }

    @media (max-width: 1200px) {
        .article {
            .title-container {
                .title {
                    padding-left: 70px;
                    padding-right: 125px;
                    bottom: 80px;
                }
            }

            .content {
                padding: 65px 125px 65px 70px;
            }
        }
    }

    @media (max-width: 960px) {
        .article {
            .title-container {
                .title {
                    padding-left: 70px;
                    padding-right: 125px;
                    bottom: 80px;
                }
            }

            .content {
                padding: 65px 125px 65px 70px;
            }
        }
    }

    @media (max-width: 768px) {
        .article {
            position: relative;

            .title-container {
                .title {
                    font-size: 20px;
                    bottom: 20px;
                    line-height: 1.4;
                    padding-left: 20px;
                    padding-right: 20px;
                }
            }

            .right-image {
                display: none;
            }
            
            .content-container {
                .content {
                    padding: 40px 20px;
                }
                .counter {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    height: 82px;
                    width: 82px;
                    min-height: unset;

                    span {
                        font-size: 25px;
                        width: 40px;
                        height: 40px;
                        padding: 5px;
                        font-family: 'Tabac Sans Light', sans-serif;
                        font-weight: bold;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        .article {
            .title-container {
                .title {
                    font-size: 18px;
                    bottom: 10px;
                }
            }

            .content {
                font-size: 14px;
            }
        }
    }
</style>