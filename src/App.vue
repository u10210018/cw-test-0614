<script setup>
import TheHeader from '~/components/the-header.vue';
import TheCopyright from '~/components/the-copyright.vue';
</script>

<template>
    <div>
        <TheHeader />
        <main>
            <router-view />
        </main>
        <TheCopyright />
    </div>
</template>

<style scoped lang="postcss"></style>
