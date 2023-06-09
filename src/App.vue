<script setup>
import TheStyleDemo from './components/the-style-demo.vue';
import TheHeader from './components/the-header.vue';
import SectionBanner from './components/section/banner.vue';
import SectionAbout from './components/section/about.vue';
import SectionLive from './components/section/live.vue';
import SectionKnowledge from './components/section/knowledge.vue';
import SectionMap from './components/section/map.vue';
import TheCopyright from './components/the-copyright.vue';
</script>

<template>
    <div>
        <TheHeader />
        <div>
            <TheStyleDemo />
            <SectionBanner />
            <SectionAbout v-motion-slide-bottom />
            <SectionLive />
            <SectionKnowledge />
            <SectionMap />
        </div>
        <TheCopyright />
    </div>
</template>

<style scoped lang="postcss"></style>
