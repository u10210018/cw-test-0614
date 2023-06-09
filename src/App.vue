<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import './assets/style.css';
</script>

<template>
    <div>
        <swiper class="my-swiper">
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

<style scoped lang="postcss">
.my-swiper {
    width: 300px;
}
</style>
