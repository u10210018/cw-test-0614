<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    ...RouterLink.props,
    activeClass: {
        type: String,
        default: () => ''
    },
    inactiveClass: {
        type: String,
        default: () => ''
    }
});

const attrs = useAttrs();
</script>

<template>
    <a v-if="isExternalLink" v-bind="attrs" :href="to" target="_blank">
        <slot />
    </a>
    <router-link
        v-else
        v-slot="{ isActive, route, href, navigate }"
        v-bind="props"
        custom
        ><a
            v-bind="attrs"
            :href="href"
            @click="navigate"
            :class="
                isActive && $route.hash === route.hash
                    ? activeClass
                    : inactiveClass
            "
        >
            <slot></slot></a
    ></router-link>
</template>

<style scoped lang="postcss"></style>
