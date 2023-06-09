<script setup>
import { ref } from 'vue';
import { useElementSize } from '@vueuse/core';
import { Swiper, SwiperSlide } from 'swiper/vue';

const el = ref(null);
const { width, height } = useElementSize(el);
</script>

<template>
    <div ref="el" class="py-20" v-motion-slide-bottom>
        <swiper class="my-swiper w-[20vw] mx-auto border border-b-red-600">
            <swiper-slide>Slide 1</swiper-slide
            ><swiper-slide>Slide 2</swiper-slide
            ><swiper-slide>Slide 3</swiper-slide
            ><swiper-slide>Slide 4</swiper-slide
            ><swiper-slide>Slide 5</swiper-slide
            ><swiper-slide>Slide 6</swiper-slide
            ><swiper-slide>Slide 7</swiper-slide
            ><swiper-slide>Slide 8</swiper-slide
            ><swiper-slide>Slide 9</swiper-slide>
        </swiper>
    </div>
</template>

<style scoped lang="postcss"></style>
