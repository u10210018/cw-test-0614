<script setup>
import MyImage from '~components/loader/image.vue';
import KVTitle from '~assets/svg/kv.svg?component';
import KVTitleMobile from '~assets/svg/kv--mobile.svg?component';
import ScrollIndicator from '~assets/svg/scroll.svg?component';
</script>

<template>
    <div>
        <div
            class="aspect-h-[667] aspect-w-[375] md:aspect-h-10 md:aspect-w-16"
        >
            <MyImage
                v-motion-fade
                src="images/banner.jpg"
                src-webp="images/banner.webp"
                src-mobile="images/banner-mobile.jpg"
                src-mobile-webp="images/banner-mobile.webp"
                alt="logo"
                class="h-full w-full object-cover"
                width="1440"
                height="900"
            />
            <div>
                <div
                    class="absolute right-[88px] top-[224px] hidden w-[41.25vw] md:block"
                >
                    <div class="aspect-h-[222] aspect-w-[594]">
                        <KVTitle />
                    </div>
                </div>
                <div
                    class="absolute bottom-20 left-0 z-10 hidden w-full md:block"
                >
                    <div class="container">
                        <div class="w-[42px]">
                            <div class="aspect-h-[85] aspect-w-[42]">
                                <ScrollIndicator />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="container absolute bottom-16 left-1/2 w-full -translate-x-1/2 md:hidden"
                >
                    <div class="aspect-h-[168] aspect-w-[327]">
                        <KVTitleMobile />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
@keyframes kv--fade-up {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes kv--fade-up--desktop {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
:deep(.kv--fade-up) {
    opacity: 0;
    animation: kv--fade-up 0.3s ease-in-out var(--delay, 0s) 1 forwards;
    @screen md {
        animation-duration: 0.4s;
        animation-name: kv--fade-up--desktop;
    }
}
</style>
