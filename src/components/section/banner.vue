<script setup>
import MyImage from '~components/loader/image.vue';
</script>

<template>
    <div>
        <div>
            <MyImage
                src="/images/banner.jpg"
                src-webp="/images/banner.webp"
                src-mobile="/images/banner-mobile.jpg"
                src-mobile-webp="/images/banner-mobile.webp"
                alt="logo"
                class="h-auto w-full object-cover"
            />
        </div>
    </div>
</template>

<style scoped lang="postcss"></style>
