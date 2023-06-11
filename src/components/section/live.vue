<script setup>
import SectionSubtitle from '~components/ui/section-subtitle.vue';
import MyImage from '~components/loader/image.vue';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

const list = ref([
    {
        id: 1,
        title: '面對照顧壓力大？張曼娟：\r\n記得提醒自己，這一切都會過去的',
        desc: '各位照顧者又要展開新的一年，每天闖關又常感到孤單的日子。',
        image: {
            src: 'images/live-01.jpg',
            srcWebp: 'images/live-01.webp',
            srcMobile: 'images/live-01.jpg',
            srcMobileWebp: 'images/live-01--mobile.webp',
            alt: '面對照顧壓力大？張曼娟：記得提醒自己，這一切都會過去的'
        }
    },
    {
        id: 2,
        title: '小六生可能已是照顧者\r\n日本小學生與失智者共開店',
        desc: '當我們擔心學童與失智者接觸的安危，日本小學已納入課程...',
        image: {
            src: 'images/live-02.jpg',
            srcWebp: 'images/live-02.webp',
            srcMobile: 'images/live-02.jpg',
            srcMobileWebp: 'images/live-02--mobile.webp',
            alt: '小六生可能已是照顧者日本小學生與失智者共開店'
        }
    },
    {
        id: 3,
        title: '不想活得又老又窮\r\n避開50歲最後悔的5個財務決定',
        desc: '「早知道會活那麼久，當初就……」',
        image: {
            src: 'images/live-03.jpg',
            srcWebp: 'images/live-03.webp',
            srcMobile: 'images/live-03.jpg',
            srcMobileWebp: 'images/live-03--mobile.webp',
            alt: '不想活得又老又窮避開50歲最後悔的5個財務決定'
        }
    }
]);

const listForDuplicate = computed(() => {
    return [...list.value, ...list.value];
});

const mySwiper = ref(null);
const { list: breakpointList } = useMedia();
const breakpoints = computed(() => ({
    0: {
        slidesPerView: 1.073
    },
    [breakpointList.md]: {
        slidesPerView: 1.476
    }
}));
const activeIdx = ref(0);
const activeItem = computed(() => listForDuplicate.value[activeIdx.value]);
const onSwiper = (swiper) => {
    mySwiper.value = swiper;
};

const onSlideChange = (swiper) => {
    const realIndex =
        swiper.realIndex <= 0
            ? listForDuplicate.value.length - 1
            : swiper.realIndex - 1;
    activeIdx.value = (realIndex + 1) % list.value.length;
};

const slideNext = () => {
    mySwiper.value.slideNext();
};

const slideToLoop = (index, speed, runCallbacks) => {
    mySwiper.value.slideToLoop(index, speed, runCallbacks);
};
</script>

<template>
    <div class="my-28 md:my-[120px]">
        <div class="container mb-6 md:mb-[34px]">
            <div class="relative">
                <h1 class="mb-4 text-h1 md:mb-0 md:ml-6">
                    照顧現場<br /><strong>預見安心變老</strong>
                </h1>
                <SectionSubtitle
                    class="left-0 top-[9px] origin-top-left md:absolute md:rotate-90"
                    text="LTCS LIVE"
                />
            </div>
        </div>
        <div class="relative">
            <div class="container-wider-left">
                <swiper
                    class="rounded-tl-sm md:rounded-tl-md"
                    effect="slide"
                    :modules="[Autoplay]"
                    :loop="true"
                    :autoplay="{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        stopOnLastSlide: false,
                        waitForTransition: true
                    }"
                    :breakpoints="breakpoints"
                    @swiper="onSwiper"
                    @slide-change="onSlideChange"
                >
                    <swiper-slide
                        v-for="item in listForDuplicate"
                        :key="item.id"
                    >
                        <div
                            class="aspect-h-[220] aspect-w-[327] md:aspect-h-[640] md:aspect-w-[955]"
                        >
                            <MyImage
                                :src="item.image.src"
                                :src-webp="item.image.srcWebp"
                                :src-mobile="item.image.srcMobile"
                                :src-mobile-webp="item.image.srcMobileWebp"
                                :alt="item.image.alt"
                                class="h-full w-full object-cover"
                            />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div
                class="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-full md:block"
            >
                <div
                    class="container flex h-full w-full flex-col justify-end pb-[59px] text-white"
                >
                    <div>
                        <div
                            class="pointer-events-auto mb-2 whitespace-pre-wrap text-h3"
                        >
                            {{ activeItem.title }}
                        </div>
                        <div
                            class="text-p4 pointer-events-auto whitespace-pre-wrap"
                        >
                            {{ activeItem.desc }}
                        </div>
                        <div class="mb-10 mt-[15px] md:mt-[23px]">
                            <svg
                                width="215"
                                height="21"
                                viewBox="0 0 215 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M215 1L143.202 1L71.4036 1L83 18L40.8638 1.7202L0 1.7202"
                                    stroke="#CADEDF"
                                    stroke-width="2"
                                />
                            </svg>
                        </div>
                        <div
                            class="pointer-events-auto -mx-[7.5px] flex items-center"
                        >
                            <div
                                v-for="idx in list.length"
                                :key="idx"
                                class="flex px-[7.5px]"
                            >
                                <button
                                    type="button"
                                    class="ib h-2 w-2 rounded-full border transition"
                                    :class="
                                        activeIdx === idx - 1
                                            ? 'border-brand-03 bg-brand-03'
                                            : 'border-brand-02 bg-transparent'
                                    "
                                    @click="slideToLoop(idx - 1)"
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="pointer-events-none absolute left-0 top-1/2 z-10 w-full -translate-y-1/2"
            >
                <div class="container flex">
                    <div class="ml-auto pr-4 md:pr-20">
                        <button
                            type="button"
                            class="pointer-events-auto"
                            @click="slideNext"
                        >
                            <svg
                                class="h-8 w-8 md:h-16 md:w-16"
                                viewBox="0 0 67 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.5 40.5L60.5 40.5L37.7958 22.5"
                                    stroke="white"
                                    stroke-width="4"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M2.5 40.5L10.5 40.5"
                                    stroke="#EC6C00"
                                    stroke-width="4"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container text-neutral-10 mt-[15px] md:hidden">
            <div>
                <div
                    class="pointer-events-auto mb-2 whitespace-pre-wrap text-h3"
                >
                    {{ activeItem.title }}
                </div>
                <div class="text-p4 pointer-events-auto whitespace-pre-wrap">
                    {{ activeItem.desc }}
                </div>
                <div class="mb-4 mt-[15px]">
                    <svg
                        width="210"
                        height="21"
                        viewBox="0 0 210 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M210 1L69.743 1L81.0698 18L39.9134 1.7202L0 1.7202"
                            stroke="#CADEDF"
                            stroke-width="2"
                        />
                    </svg>
                </div>
                <div class="pointer-events-auto -mx-1.5 flex items-center">
                    <div
                        v-for="idx in list.length"
                        :key="idx"
                        class="flex px-1.5"
                    >
                        <button
                            type="button"
                            class="ib h-2 w-2 rounded-full border transition"
                            :class="
                                activeIdx === idx - 1
                                    ? 'border-brand-03 bg-brand-03'
                                    : 'border-brand-02 bg-transparent'
                            "
                            @click="slideToLoop(idx - 1)"
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss"></style>
