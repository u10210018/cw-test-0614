<script setup>
import SectionSubtitle from '~components/ui/section-subtitle.vue';
import MyImage from '~components/loader/image.vue';
import BtnPrimary from '~components/button/primary.vue';

const list = ref([
    {
        id: 1,
        title: '服務對象',
        desc: '經各縣市長期照顧管理中心評估，符合長照需要等級2級以上者，並符合下列之一，65歲以上老人、55歲以上原住民、50歲以上失智症者、失能身心障礙者。',
        image: {
            src: 'images/knowledge-01.jpg',
            srcWebp: 'images/knowledge-01.webp',
            alt: '服務對象'
        }
    },
    {
        id: 2,
        title: '申請流程',
        desc: '<ol><li>直接撥打<a href="tel:1996" target="_blank">長照專線1966</a></li><li>聯絡當地長期照顧管理中心</li><li>住院期間聯絡出院準備銜接長照服務小組或是線上申請</li></ol>',
        image: {
            src: 'images/knowledge-02.jpg',
            srcWebp: 'images/knowledge-02.webp',
            alt: '申請流程'
        }
    },
    {
        id: 3,
        title: '服務內容',
        desc: '依據個案管理員擬訂照顧計畫，提供照顧及專業服務、交通接送、輔具及居家無障礙環境改善與喘息服務，四大類給付。',
        image: {
            src: 'images/knowledge-03.jpg',
            srcWebp: 'images/knowledge-03.webp',
            alt: '服務內容'
        }
    }
]);
</script>

<template>
    <div
        class="relative -mb-[298px] mt-28 pb-[298px] md:-mb-[792px] md:mt-[120px] md:pb-[792px]"
    >
        <div>
            <!-- 背後的圓圈 -->
            <div
                class="bg-for-circle absolute left-1/2 top-[206px] -z-10 h-full w-full -translate-x-1/2 md:top-[201px]"
            ></div>
            <!-- 標題 -->
            <a id="knowledge"></a>
            <div class="container mb-[15px] md:mb-6">
                <div class="relative">
                    <h1
                        class="mb-4 text-h1 text-brand-01 first-line:text-neutral-20 md:mb-0 md:ml-6"
                    >
                        5分鐘一看就懂<br />長照2.0
                    </h1>
                    <SectionSubtitle
                        class="left-0 top-[9px] origin-top-left md:absolute md:rotate-90"
                        text="LTCS Knowledge"
                    />
                </div>
            </div>
            <div class="container">
                <div class="px-4 md:px-20">
                    <!-- 三個案例 -->
                    <div
                        class="mb-[50px] grid gap-6 md:mb-6 md:grid-cols-3 md:gap-[75px]"
                    >
                        <div
                            v-for="(item, idx) in list"
                            :key="item.id"
                            :class="{ 'md:mt-10': !(idx % 2) }"
                        >
                            <div>
                                <div class="mb-1.5">
                                    <div
                                        class="mx-auto max-w-[180px] p-2.5 md:mx-0 md:max-w-none"
                                    >
                                        <div class="aspect-h-1 aspect-w-1">
                                            <svg
                                                v-if="idx === 0"
                                                width="212"
                                                height="212"
                                                viewBox="0 0 212 212"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="106"
                                                    cy="106"
                                                    r="105"
                                                    stroke="#008088"
                                                    stroke-width="2"
                                                />
                                                <path
                                                    d="M4.24394 80C6.83606 69.8246 10.9143 60.2431 16.2338 51.5"
                                                    stroke="#EC6C00"
                                                    stroke-width="3"
                                                />
                                            </svg>
                                            <svg
                                                v-else-if="idx === 1"
                                                width="212"
                                                height="212"
                                                viewBox="0 0 212 212"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="106"
                                                    cy="106"
                                                    r="105"
                                                    stroke="#008088"
                                                    stroke-width="2"
                                                />
                                                <path
                                                    d="M163.966 18.5155C172.778 24.2247 180.553 31.1522 187.137 38.9878"
                                                    stroke="#EC6C00"
                                                    stroke-width="3"
                                                />
                                            </svg>
                                            <svg
                                                v-else
                                                width="212"
                                                height="213"
                                                viewBox="0 0 212 213"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="106"
                                                    cy="107"
                                                    r="105"
                                                    stroke="#008088"
                                                    stroke-width="2"
                                                />
                                                <path
                                                    d="M72 7.49257C81.9497 4.13693 92.2089 2.35142 102.439 2.06366"
                                                    stroke="#EC6C00"
                                                    stroke-width="3"
                                                />
                                            </svg>
                                            <div class="p-[7px] md:p-1.5">
                                                <MyImage
                                                    :src="item.image.src"
                                                    :src-webp="
                                                        item.image.srcWebp
                                                    "
                                                    :alt="item.image.alt"
                                                    class="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mb-1 text-h4 text-brand-01">
                                    {{ item.title }}
                                </h4>
                                <div
                                    class="text-p2 desc-custom-html"
                                    v-html="item.desc"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <!-- 底部的線條和連結按鍵 -->
                    <div class="flex justify-center md:justify-start">
                        <div class="mt-16 hidden w-[51.19%] md:block">
                            <div class="aspect-h-[38] aspect-w-[434]">
                                <svg
                                    viewBox="0 0 434 38"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M432 2H151L173 30L104 2H2"
                                        stroke="#CADEDF"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M416 2H432"
                                        stroke="#EC6C00"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M398 2H405"
                                        stroke="#EC6C00"
                                        stroke-width="4"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <a
                            href="https://event.cw.com.tw/2023mohw/Infographic.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="md:ml-auto"
                        >
                            <BtnPrimary>了解更多長照2.0</BtnPrimary>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.bg-for-circle {
    background-image: url('data:image/svg+xml,<svg width="1271" height="1271" viewBox="0 0 1271 1271" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.2" cx="635.5" cy="635.5" r="635.5" fill="%23CADEDF"/></svg>');
    background-size: 1271px;
    @apply bg-top bg-no-repeat;
}

.desc-custom-html {
    :deep(a) {
        @apply font-bold text-brand-01 transition hover:opacity-70;
    }
    :deep(ol) {
        @apply list-none pl-6;
        counter-reset: my-counter;
        li {
            @apply relative mx-0 mb-2.5 mt-0;
            counter-increment: my-counter;
            &::before {
                @apply absolute top-[3px] h-[var(--size)] w-[var(--size)] rounded-full bg-brand-01 text-center font-[10px] leading-[var(--size)] text-white;
                content: counter(my-counter);
                --size: 16px;
                left: calc(-1 * var(--size) - 5px);
            }
        }
    }
}
</style>
