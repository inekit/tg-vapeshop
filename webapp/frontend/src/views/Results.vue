<template>
    <searchBlock hidden />
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 250"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <InstagramLoader class="preloader" ref="preloader" viewBox="0 0 300 200"></InstagramLoader>
    <button @click="routeToBasket" hidden>Корзина</button>
    <MasonryWall class="results-block" :items="$store.state.results ?? []" :ssr-columns="3" :column-width="bodyWidth / 9"
        :gap="12">
        <template #default="{ item, index }">
            <div class="result-item">
                <router-link :to="`/items/${item.id}`">
                    <div class="img-container">
                        <img :src="`/colorsserver/public/pics/${getPreviewLink(item.preview)}`"
                            :onerror="`javascript:this.onerror=null;this.src='/pics/${item.preview}';`" />
                    </div>
                    <div class="text-container">
                        <h2>{{ item.title }}</h2>
                        <h3> · {{ item.price }}₽</h3>
                    </div>
                </router-link>
                <div class="favorite-toggle" :class="item.count_favourites > 0 ? 'favorite-item' : ''">
                    <span>{{ item.count_favourites }}</span>
                    <img :src="require('@/assets/img/fav.svg')" hidden />
                </div>
            </div>
        </template>
    </MasonryWall>
</template>

<script>
import searchBlock from '@/components/Search.vue';
import eventBus from '../eventBus'
import { ListLoader, InstagramLoader } from 'vue-content-loader'


export default {
    components: { searchBlock, InstagramLoader },
    data() {
        return {
            page: 1,
            perPage: 10,
            backFilters: {}
        }

    },
    watch: {
        "$store.state.searchQuery": async function () {
            await this.updatePage(300)
        },
        "$store.state.filters": async function () {
            await this.updatePage(300)
        },
        async $route(to, from) {
            //await this.toggleButtons()
        }
    },
    async beforeMount() {
        this.bodyWidth = document.body.clientHeight
        this.scroll()
        window.Telegram?.WebApp.BackButton.onClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.show();

        let uri = window.location.search.substring(1);
        this.params = new URLSearchParams(uri)
        this.backFilters = { size: this.params.get('size'), material: this.params.get('material') }
        this.mainside_id = this.params.get('mainside_id') === "null" ? null : this.params.get('mainside_id')

        this.$store.state.userId = this.$store.state.userId ?? this.$route.params?.userId;


        if (await this.haveBasketItems()) {
            window.Telegram?.WebApp.MainButton.onClick(this.routeToBasket);
            window.Telegram?.WebApp.MainButton.show();
            window.Telegram?.WebApp.MainButton.setText("Корзина");
        } else {
            window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket);
            window.Telegram?.WebApp.MainButton.hide();
        }
    },
    async mounted() {

    },
    async beforeUnmount() {
        window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket);
        window.Telegram?.WebApp.MainButton.hide();
        window.Telegram?.WebApp.BackButton.offClick(this.routeBack);
        window.Telegram?.WebApp.BackButton.hide();
    },
    methods: {
        routeToBasket() {
            this.$router.push("/basket")
        },
        routeBack() {
            this.$router.go(-1)
        },
        getPreviewLink(link) {
            const parts = link?.match(/\.([^.]+)$|$/)
            if (!parts?.[1]) return;
            return link?.split('.').slice(0, -1).join('.') + '_preview.' + parts[1]

        },
        async haveBasketItems() {
            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + '/basket_data', {
                params: {
                    user_id: this.$store.state.userId,
                }
            })
                .then(response => {
                    return response.data.favorites.length
                })
                .catch(e => { eventBus.$emit('noresponse', e) })

            return results

        },
        async updatePage(delay) {
            this.$store.state.results = await this.sendSearchRequest(true);

            this.$refs['results-block']?.classList.add("hidden")
            document.body.classList.add('stop-scrolling')


            setTimeout(() => {
                const elements = document.getElementsByClassName('preloader')

                console.log(elements)

                for (let el of elements) {
                    el.classList.add("hidden")
                }
                this.$refs['results-block']?.classList.remove("hidden")
                document.body.classList.remove('stop-scrolling')

            }, delay)
        },
        scroll() {
            window.onscroll = async () => {
                let bottomwindow = window.scrollY + window.innerHeight + 1000 > document.documentElement.scrollHeight;

                if (bottomwindow && !this.loadingUpdate && !this.isEnded) {
                    this.loadingUpdate = true;
                    const update = await this.sendSearchRequest();
                    this.$store.state.results = [...this.$store.state.results, ...update];
                }
            };
        },
        async sendSearchRequest(isReload) {
            if (isReload) {
                this.isEnded = false
                this.page = 1
            }
            const subPath = '/items'

            const results = await this.$store.state.myApi.get(this.$store.state.restAddr + subPath, {
                params: {
                    searchQuery: this.$store.state.searchQuery,
                    take: 10,
                    page: this.page ?? 1,
                    sort: this.$store.state.filters.sort_type,
                    category: this.$store.state.filters.category_name,
                    user_id: this.$store.state.userId,
                    size: this.backFilters?.size,
                    is_backside: this.backFilters?.size ? true : false,
                    material: this.backFilters?.material
                }
            })
                .then(response => {
                    const newsUpd = response.data;

                    if (newsUpd.length < (this.perPage)) this.isEnded = true;
                    else this.page++;

                    this.loadingUpdate = false;


                    return newsUpd;
                })
                .catch(e => { eventBus.$emit('noresponse', e) })

            console.log(results)

            return results

        },
    }
}
</script>
  

<style lang="scss">
.results-block {
    // display: flex;
    width: calc(100% - 2rem);
    margin: 1rem;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;

    .masonry-column {
        flex: 1 1 calc((100% / 3) - 2rem) !important;
    }


    .result-item {
        width: 100%;
        height: fit-content;
        margin: 0;

        display: block;
        position: relative;

        &:nth-child(4n) {
            margin-top: -6vw
        }

        &:nth-child(4n+1),
        &:nth-child(4n) {
            .img-container {
                height: 20vw;
            }
        }

        .img-container {
            background-color: transparent;
            width: 20vw;
            margin: auto;
            height: 30vw;
            position: relative;
            overflow: hidden;
            border-radius: 1rem;
        }

        .goto-button {
            width: 20vw;
            margin: auto;
            background-color: #0071e3;
            color: white;
            border-radius: 0.5rem;
            text-transform: uppercase;
            text-align: center;
            padding: 5px 0;
            font-weight: 500;
            font-size: 0.8rem;
        }



        a {
            display: block;
            text-decoration: none;
            //position: absolute;
            height: calc(100% + 2rem);
            width: calc(100%);

            //margin: 1rem;
            .text-container {
                margin: 0.5rem auto;
                top: 70%;
                width: fit-content;
                text-align: center;

            }

            h2 {
                margin: 0;
                color: #414141;
                color: var(--tg-theme-text-color);
                font-weight: 400;
                font-size: 0.9rem;
                word-wrap: break-word;
                display: inline;
            }

            h3 {
                margin: 5px 0 -5px 0;
                color: #414141;
                color: var(--tg-theme-text-color);
                font-weight: 200;
                font-size: 0.9rem;
                font-weight: 600;
                display: inline;
            }

            img {
                position: absolute;
                margin: auto;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 200%;
                max-height: 130%;
                min-width: 100%;
                min-height: 100%;
                width: auto;
                height: auto;
            }
        }

        &:nth-child(2n-1) {
            margin-right: 0.5rem;
        }

        &:nth-child(2n) {
            margin-left: 0.5rem;
        }

        .favorite-toggle {
            content: '';
            width: 25px;
            height: 25px;
            border-radius: 13px;
            background-color: transparent;
            border: 1px solid;
            background-color: #6e6e6e;
            border-color: #6e6e6e;
            opacity: 0;
            position: absolute;
            top: -12.5px;
            right: calc(1rem - 12.5px);
            transition: all 0.2s;

            span {
                color: white;
                text-align: center;
                font-weight: 500;
                line-height: 23px;
                display: block;
            }

            img {
                height: 50%;
                margin: 25%;
            }

            &.favorite-item {
                opacity: 1;
                z-index: 1;
                border-color: #0071e3;
                background-color: #0071e3;
            }

        }
    }
}
</style>
  