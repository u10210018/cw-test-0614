<script setup>
const { list } = useMedia();

const props = defineProps({
    src: {
        type: String,
        default: () => '',
        required: true
    },
    srcWebp: {
        type: String,
        default: () => ''
    },
    srcMobile: {
        type: String,
        default: () => ''
    },
    srcMobileWebp: {
        type: String,
        default: () => ''
    },
    alt: {
        type: String,
        default: () => ''
    }
});

defineOptions({
    inheritAttrs: false
});
</script>

<template>
    <picture>
        <source
            v-if="srcMobileWebp"
            :srcset="srcMobileWebp"
            :media="`(max-width: ${list.md}px)`"
            type="image/webp"
        />
        <source
            v-if="srcMobile"
            :srcset="srcMobile"
            :media="`(max-width: ${list.md}px)`"
        />
        <source v-if="srcWebp" :srcset="srcWebp" type="image/webp" />
        <img :src="src" :alt="alt" v-bind="$attrs" />
    </picture>
</template>

<style scoped lang="postcss"></style>
