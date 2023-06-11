<script setup>
import { useElementSize } from '@vueuse/core';

const contentEl = ref(null);
const { width } = useElementSize(contentEl);

const contentWiderEl = ref(null);
const { width: widthWider } = useElementSize(contentWiderEl);
</script>

<template>
    <div>
        <div class="container grid grid-cols-3 gap-4 py-10">
            <div class="col-span-1 text-end text-h1">h1</div>
            <h1 class="col-span-2 text-h1">
                照顧現場<br /><strong>預見安心變老</strong>
            </h1>
            <div class="col-span-1 text-end text-h2">h2</div>
            <h2 class="col-span-2 text-h2">
                <strong>長照2.0，<br />讓照顧的路上有專業相挺</strong>
            </h2>
            <div class="col-span-1 text-end text-h3">h3</div>
            <h3 class="col-span-2 text-h3">
                面對照顧壓力大？張曼娟：<br />記得提醒自己，這一切都會過去的
            </h3>
            <div class="col-span-1 text-end text-h4">h4</div>
            <h3 class="col-span-2 text-h4">服務對象</h3>
            <div class="col-span-1 text-end text-p">p</div>
            <div class="col-span-2 text-p">
                台灣走向超高齡社會，速度比想像中還要快又急，隨著人口老化加速，未來需要照顧年長父母的青壯人口，只會增加，不會減少。
                老年人壽命的延長，也表示照顧的時間會愈來愈長；甚至是在自己退休之後，仍須持續照顧長輩。
                「上有高堂，下有嗷嗷待哺」，三明治世代所面臨的困境，才是最需要協助的一群人。
                面對長照，經濟協助外，對「照顧者」提供專業協助更是關鍵！
            </div>
            <div class="text-p2 col-span-1 text-end">p2</div>
            <div class="text-p2 col-span-2">
                經各縣市長期照顧管理中心評估，符合長照需要等級2級以上者，並符合下列之一，65歲以上老人、55歲以上原住民、50歲以上失智症者、失能身心障礙者。
            </div>
            <div class="text-p3 col-span-1 text-end">p3</div>
            <div class="text-p3 col-span-2">直接撥打長照專線1966</div>
            <div class="text-p4 col-span-1 text-end">p4</div>
            <div class="text-p4 col-span-2">
                各位照顧者又要展開新的一年，每天闖關又常感到孤單的日子。
            </div>
            <div class="text-sup col-span-1 text-end">sup</div>
            <div class="text-sup col-span-2 text-brand-01">LTCS Knowledge</div>
            <div class="text-sup2 col-span-1 text-end">sup2</div>
            <div class="text-sup2 col-span-2 text-brand-03">TIPS 1</div>
            <div class="text-btn col-span-1 text-end">btn</div>
            <div class="text-btn col-span-2">尋找附近的長照服務</div>
        </div>
        <div class="py-10">
            <div class="container">
                <div
                    ref="contentEl"
                    class="grid h-20 place-content-center bg-brand-01 text-h2 text-white"
                >
                    container: {{ width }}px
                </div>
            </div>
            <div class="container-wider pt-6">
                <div
                    ref="contentWiderEl"
                    class="grid h-20 place-content-center bg-brand-01 text-h2 text-white"
                >
                    container-wider: {{ widthWider }}px
                </div>
            </div>

            <div class="container">
                <div class="mt-6 grid grid-cols-12 gap-2 lg:gap-5">
                    <div
                        class="aspect-h-1 aspect-w-1 flex-grow bg-brand-01"
                    ></div>
                    <div
                        class="aspect-h-1 aspect-w-1 flex-grow bg-brand-02"
                    ></div>
                    <div
                        class="aspect-h-1 aspect-w-1 flex-grow bg-brand-03"
                    ></div>
                    <div
                        class="aspect-h-1 aspect-w-1 flex-grow border border-brand-01 bg-white"
                    ></div>
                    <div
                        class="bg-neutral-60 aspect-h-1 aspect-w-1 flex-grow"
                    ></div>
                    <div
                        class="aspect-h-1 aspect-w-1 flex-grow bg-neutral-40"
                    ></div>
                    <div
                        class="aspect-h-1 aspect-w-1 flex-grow bg-neutral-20"
                    ></div>
                    <div
                        class="bg-neutral-10 aspect-h-1 aspect-w-1 flex-grow"
                    ></div>
                </div>
                <div class="mt-6 grid grid-cols-6 gap-2 lg:gap-5">
                    <div>
                        rounded-sm
                        <div
                            class="aspect-h-1 aspect-w-1 mt-2 flex-grow rounded bg-brand-01"
                        ></div>
                    </div>
                    <div>
                        rounded-md
                        <div
                            class="aspect-h-1 aspect-w-1 mt-2 flex-grow rounded-md bg-brand-01"
                        ></div>
                    </div>
                    <div>
                        rounded-lg
                        <div
                            class="aspect-h-1 aspect-w-1 mt-2 flex-grow rounded-lg bg-brand-01"
                        ></div>
                    </div>
                    <div>
                        rounded-full
                        <div
                            class="aspect-h-1 aspect-w-1 mt-2 flex-grow rounded-full bg-brand-01"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss"></style>
