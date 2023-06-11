<script setup>
import SectionSubtitle from '~components/ui/section-subtitle.vue';
import MyGoogleMap from '~components/loader/google-map.vue';
import BtnPrimary from '~components/button/primary.vue';
import MapIcon1 from '~assets/svg/map-01.svg?component';
import MapIcon2 from '~assets/svg/map-02.svg?component';
import MapIcon3 from '~assets/svg/map-03.svg?component';

import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

const list = ref([
    {
        id: 1,
        title: 'TIPS 1',
        desc: '透過左上角篩選功能，找到適合的服務機構'
    },
    {
        id: 2,
        title: 'TIPS 2',
        desc: '直接點擊地圖，定位篩選出範圍內的相關服務機構',
        image: {
            src: 'images/map-02.jpg',
            srcWebp: 'images/map-02.webp',
            alt: '申請流程'
        }
    },
    {
        id: 3,
        title: 'TIPS 3',
        desc: '點選下方篩選列表，觀看更詳細的聯絡資訊',
        image: {
            src: 'images/map-03.jpg',
            srcWebp: 'images/map-03.webp',
            alt: '服務內容'
        }
    }
]);

const isMaskOpen = ref(true);
const closeMask = () => (isMaskOpen.value = false);
</script>

<template>
    <div class="relative mb-20 mt-28 md:mb-40 md:mt-[120px]">
        <!-- 標題 -->
        <a id="map"></a>
        <div class="container mb-6 md:mb-8">
            <div class="relative">
                <h1
                    class="mb-4 text-h1 text-brand-01 first-line:text-neutral-20 md:mb-0 md:ml-6"
                >
                    長照地圖<br />厝邊好朋友
                </h1>
                <SectionSubtitle
                    class="left-0 top-[9px] origin-top-left md:absolute md:rotate-90"
                    text="LTCS Map"
                />
            </div>
        </div>
        <!-- 內容 -->
        <div class="md:container-wider">
            <div
                class="aspect-h-[600] aspect-w-[375] overflow-hidden rounded-bl-sm rounded-tr-sm border-4 border-brand-02 md:aspect-h-[80] md:aspect-w-[136] md:rounded-bl-md md:rounded-tr-md"
            >
                <MyGoogleMap
                    query="台北"
                    class="overflow-hidden rounded-bl-sm rounded-tr-sm md:rounded-bl-md md:rounded-tr-md"
                />

                <div
                    class="grid place-items-center transition-all"
                    :class="{
                        'bg-white/90 backdrop-blur-[2px] md:backdrop-blur-sm':
                            isMaskOpen
                    }"
                >
                    <div
                        v-show="isMaskOpen"
                        class="h-[calc(100%-60px)] w-[calc(100%-60px)] rounded-bl-sm rounded-tr-sm bg-white md:rounded-bl-md md:rounded-tr-md"
                    >
                        <div class="grid h-full w-full place-content-center">
                            <div
                                class="hidden max-w-[840px] gap-[75px] md:grid md:grid-cols-3"
                            >
                                <div
                                    v-for="(item, idx) in list"
                                    :key="item.id"
                                    :class="{
                                        'md:mt-10': idx === 1,
                                        'md:mt-[103px]': idx === 2
                                    }"
                                >
                                    <div class="mb-4 flex justify-center">
                                        <MapIcon1
                                            v-if="idx === 0"
                                            class="map-icon-ani"
                                        />
                                        <MapIcon2
                                            v-else-if="idx === 1"
                                            class="map-icon-ani map-icon-ani--delay-01 mb-1"
                                        />
                                        <MapIcon3
                                            v-else
                                            class="map-icon-ani map-icon-ani--delay-02"
                                        />
                                    </div>
                                    <div class="text-sup2 text-brand-03">
                                        {{ item.title }}
                                    </div>
                                    <div>{{ item.desc }}</div>
                                </div>
                            </div>
                            <div
                                class="grid md:hidden"
                            >
                                <swiper
                                    class="w-full max-w-[230px] sm:max-w-[600px]"
                                    :modules="[Autoplay, EffectFade]"
                                    effect="fade"
                                    :fadeEffect="{
                                        crossFade: true
                                    }"
                                    :slides-per-view="1"
                                    :loop="true"
                                    :autoplay="{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: false,
                                        stopOnLastSlide: false,
                                        waitForTransition: true
                                    }"
                                >
                                    <swiper-slide
                                        v-for="(item, idx) in list"
                                        :key="item.id"
                                    >
                                        <div class="mb-4 flex justify-center">
                                            <MapIcon1 v-if="idx === 0" />
                                            <MapIcon2 v-else-if="idx === 1" />
                                            <MapIcon3 v-else />
                                        </div>
                                        <div class="text-sup2 text-brand-03">
                                            {{ item.title }}
                                        </div>
                                        <div>{{ item.desc }}</div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                            <div class="mt-14 flex justify-center md:mt-12">
                                <button type="button" @click="closeMask">
                                    <BtnPrimary>尋找附近的長照服務</BtnPrimary>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
/* for desktop */
@keyframes map-icon-ani {
    0% {
        transform: scale(1);
    }
    10% {
        transform: scale(1.1);
    }
    25% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
    }
}
.map-icon-ani {
    @screen md {
        animation: map-icon-ani 6s ease var(--delay, 0s) infinite both;
    }
    &--delay-01 {
        --delay: 2s;
    }
    &--delay-02 {
        --delay: 4s;
    }
}
</style>
