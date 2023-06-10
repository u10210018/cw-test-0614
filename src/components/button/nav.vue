<script setup>
import MyLink from '~components/loader/link.vue';

const props = defineProps({
    url: {
        type: String,
        default: () => '/'
    },
    name: {
        type: String,
        default: () => ''
    }
});
</script>

<template>
    <div class="relative">
        <MyLink :to="url" active-class="link-exact-active">{{ name }}</MyLink>
        <div
            class="hint-display absolute -bottom-1.5 left-1/2 hidden w-full -translate-x-1/2 md:block"
        >
            <div class="h-0.5 w-full rounded-[1px] bg-brand-02"></div>
            <div
                class="absolute right-0 top-0 h-full w-2 rounded-[1px] bg-brand-03"
            ></div>
            <div
                class="absolute right-2.5 top-0 h-full w-[3px] rounded-[1px] bg-brand-03"
            ></div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.hint-display {
    @apply scale-x-0 transition-[transform];
}
:deep(a) {
    @apply transition;
    @media (hover: hover) {
        &:not(.link-exact-active) {
            @apply hover:opacity-50;
        }
    }
}
:deep(.link-exact-active) {
    @apply text-brand-03;
    & ~ .hint-display {
        @apply scale-x-100;
    }
}
</style>
