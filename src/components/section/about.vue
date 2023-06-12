<script setup>
import MyImage from '~components/loader/image.vue';
import SectionSubtitle from '~components/ui/section-subtitle.vue';
import ImageFrame from '~assets/svg/about-frame.svg?component';
</script>

<template>
    <div class="mb-28 mt-14 md:my-[120px]">
        <div class="container">
            <div class="flex">
                <!-- 左方圖片 -->
                <div
                    v-motion-slide-visible-once-bottom
                    class="mr-14 hidden w-[36%] max-w-[360px] shrink-0 md:block lg:mr-[98px]"
                >
                    <div class="aspect-h-7 aspect-w-6">
                        <div class="-left-[12.5%] mt-2 w-[108.3%]">
                            <ImageFrame />
                        </div>
                        <MyImage
                            src="images/about.jpg"
                            src-webp="images/about.webp"
                            alt="長照2.0，讓照顧的路上有專業相挺"
                            class="object-cover"
                            loading="lazy"
                            width="540"
                            height="630"
                        />
                    </div>
                </div>
                <!-- 右方內容 -->
                <div class="relative grow md:mt-10 md:pl-8 md:pr-20">
                    <div class="md:pt-2">
                        <h1
                            v-motion-slide-visible-once-bottom
                            class="mb-4 text-h2 text-brand-01"
                        >
                            長照2.0，<br />讓照顧的路上有專業相挺
                        </h1>
                        <SectionSubtitle
                            class="left-0 top-0 my-4 origin-top-left md:absolute md:my-0 md:rotate-90"
                            text="LONG TERM CARE SERVICES"
                        />
                        <div v-motion-slide-visible-once-bottom class="text-p">
                            台灣走向超高齡社會，速度比想像中還要快又急，隨著人口老化加速，未來需要照顧年長父母的青壯人口，只會增加，不會減少。<br />
                            老年人壽命的延長，也表示照顧的時間會愈來愈長；甚至是在自己退休之後，仍須持續照顧長輩。
                            「上有高堂，下有嗷嗷待哺」，三明治世代所面臨的困境，才是最需要協助的一群人。<br /><br />
                            面對長照，經濟協助外，對「照顧者」提供專業協助更是關鍵！
                        </div>
                    </div>
                    <div class="mt-[38px] flex justify-end md:mt-[78px]">
                        <svg
                            width="215"
                            height="2"
                            viewBox="0 0 215 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="215"
                                height="2"
                                rx="1"
                                fill="#CADEDF"
                            />
                            <rect
                                x="195"
                                width="20"
                                height="2"
                                rx="1"
                                fill="#EC6C00"
                            />
                            <rect
                                x="182"
                                width="7"
                                height="2"
                                rx="1"
                                fill="#EC6C00"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss"></style>
