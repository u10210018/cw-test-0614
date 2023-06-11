<script setup>
import SectionBanner from '~/components/section/banner.vue';
import SectionAbout from '~/components/section/about.vue';
import SectionLive from '~/components/section/live.vue';
import SectionKnowledge from '~/components/section/knowledge.vue';
import SectionMap from '~components/section/mapp.vue';
</script>

<template>
    <div>
        <!-- 照顧壓力別都擔在自己身上，讓專業的來！ 4個照顧現場故事，看見你的問題解方。 -->
        <SectionBanner />

        <!-- LONG TERM CARE SERVICES: 長照2.0 - 讓照顧的路上有專業相挺 -->
        <SectionAbout v-motion-slide-bottom />

        <!-- LTCS LIVE: 照顧現場 - 預見安心變老 -->
        <SectionLive />

        <!-- LTCS Knowledge: 5分鐘一看就懂 - 長照2.0 -->
        <SectionKnowledge />

        <!-- LTCS Map: 長照地圖 - 厝邊好朋友 -->
        <SectionMap />
    </div>
</template>

<style scoped lang="postcss"></style>
