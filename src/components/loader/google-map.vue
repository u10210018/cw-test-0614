<script setup lang="ts">
const props = defineProps({
    query: {
        type: String,
        default: () => ''
    }
});
const srcString = computed(
    () =>
        `https://maps.google.com/maps?q=${props.query}&t=&z=16&ie=UTF8&iwloc=&hl=zh-TW&output=embed`
);
</script>

<template>
    <iframe
        title="google map"
        :src="srcString"
        width="1280"
        height="540"
        style="border: 0"
        allowfullscreen
        loading="lazy"
    ></iframe>
</template>

<style scoped lang="postcss"></style>
