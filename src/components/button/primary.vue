<script setup></script>

<template>
    <div
        class="group relative min-w-[269px] overflow-hidden rounded-lg bg-brand-01 md:min-w-[330px]"
    >
        <div
            class="text-btn relative z-10 py-4 pl-8 pr-[70px] text-white md:py-[22px] md:pl-10 md:pr-[94px]"
        >
            <slot></slot>
        </div>
        <div
            class="absolute right-0 top-1/2 h-full -translate-y-1/2 rounded-full bg-brand-02"
        >
            <div class="h-12 w-12 md:h-16 md:w-16"></div>
        </div>
        <div class="absolute right-0 top-1/2 z-10 h-full -translate-y-1/2">
            <div class="grid h-12 w-12 place-items-center md:h-16 md:w-16">
                <svg
                    class="h-6 w-6 md:h-8 md:w-8"
                    viewBox="0 0 34 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        class="text-brand-01 transition-[color] duration-75 group-hover:text-white group-hover:delay-300 group-hover:duration-0"
                        d="M1.75 20.25L30.75 20.25L19.3979 11.25"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                    />
                    <path
                        class="text-brand-03 transition-[color] duration-75 group-hover:text-brand-02 group-hover:delay-300 group-hover:duration-0"
                        d="M1.75 20.25L5.75 20.25"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                    />
                </svg>
            </div>
        </div>
        <div
            class="absolute left-0 top-0 h-12 w-12 -translate-x-full rounded-full bg-brand-03 transition-[transform,left] duration-300 group-hover:left-full md:h-16 md:w-16"
        ></div>
    </div>
</template>

<style scoped lang="postcss"></style>
