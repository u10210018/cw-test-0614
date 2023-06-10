<script setup>
import ButtonNav from '~components/button/nav.vue';
import MyImage from '~components/loader/image.vue';
import MyLink from '~components/loader/link.vue';
import { useWindowSize } from '@vueuse/core';

const headerList = ref([
    {
        id: 1,
        name: '首頁',
        url: '/'
    },
    {
        id: 2,
        name: '照顧現場',
        url: '/#live'
    },
    {
        id: 3,
        name: '一看就懂長照2.0',
        url: '/#knowledge'
    },
    {
        id: 4,
        name: '長照地圖',
        url: '/#map'
    }
]);

// for mobile menu
const { width } = useWindowSize();
const route = useRoute();
const isMenuOpen = ref(false);
const openMenu = () => {
    isMenuOpen.value = true;
};
const closeMenu = () => {
    isMenuOpen.value = false;
};
watch([width, route], () => {
    closeMenu();
});
const isBodyLock = useBodyLock();
watch(isMenuOpen, (nVal) => {
    isBodyLock.value = nVal;
});
</script>

<template>
    <header class="fixed left-0 top-0 w-full bg-white/80 backdrop-blur-sm">
        <div class="container-wider flex items-center">
            <div class="py-3 md:py-4">
                <MyLink to="/" class="block h-[30px] md:h-10">
                    <MyImage
                        src="images/logo.svg"
                        alt="logo"
                        class="h-full w-auto object-contain"
                    />
                </MyLink>
            </div>
            <div class="ml-auto py-[15px] md:py-7">
                <nav class="hidden items-center md:flex">
                    <template v-for="item in headerList" :key="item.id">
                        <ButtonNav
                            :url="item.url"
                            :name="item.name"
                            class="mx-6"
                        />
                        <div class="bg-neutral-60 h-3 w-px last:hidden"></div>
                    </template>
                </nav>
                <button
                    type="button"
                    class="flex h-6 w-6 md:hidden"
                    @click="openMenu"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="17"
                            width="24"
                            height="2"
                            rx="1"
                            fill="#008088"
                        />
                        <rect
                            y="11"
                            width="24"
                            height="2"
                            rx="1"
                            fill="#008088"
                        />
                        <rect
                            y="5"
                            width="24"
                            height="2"
                            rx="1"
                            fill="#008088"
                        />
                        <rect
                            x="19"
                            y="5"
                            width="5"
                            height="2"
                            rx="1"
                            fill="#EC6C00"
                        />
                        <rect
                            x="16"
                            y="5"
                            width="2"
                            height="2"
                            rx="1"
                            fill="#EC6C00"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </header>
    <teleport to="body">
        <div
            class="fixed left-0 top-0 z-10 h-screen w-full bg-white transition duration-300 md:hidden"
            :class="isMenuOpen ? 'translate-x-0' : 'translate-x-[calc(101%)]'"
        >
            <div class="container-wider">
                <div class="sticky top-0 py-[15px]">
                    <button
                        type="button"
                        class="ml-auto flex h-6 w-6"
                        @click="closeMenu"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="2.80762"
                                y="20"
                                width="24"
                                height="2"
                                rx="1"
                                transform="rotate(-45 2.80762 20)"
                                fill="#008088"
                            />
                            <rect
                                x="4.2218"
                                y="2.80762"
                                width="24"
                                height="2"
                                rx="1"
                                transform="rotate(45 4.2218 2.80762)"
                                fill="#008088"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    class="max-h-[calc(100vh-54px)] overflow-auto scrollbar-hide"
                >
                    <div class="mx-auto flex justify-center pb-20 pt-[14.5vh]">
                        <nav class="flex flex-col items-center">
                            <template v-for="item in headerList" :key="item.id">
                                <ButtonNav
                                    :url="item.url"
                                    :name="item.name"
                                    class="my-6"
                                />
                                <div
                                    class="bg-neutral-60 h-px w-full last:hidden"
                                ></div>
                            </template>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<style scoped lang="postcss"></style>
