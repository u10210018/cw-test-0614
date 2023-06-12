<script setup>
const props = defineProps({
    text: {
        type: String,
        default: () => ''
    }
});
</script>

<template>
    <div>
        <div v-motion-fade-visible class="text-sup underline-sm text-brand-01">{{ text }}</div>
        <div class="mt-2 flex items-center">
            <span class="h-px w-[11px] bg-brand-03"></span>
            <span class="ml-1 h-px w-1 bg-brand-03"></span>
        </div>
    </div>
</template>

<style scoped lang="postcss"></style>
