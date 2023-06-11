import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ViteAliases } from 'vite-aliases';
import AutoImport from 'unplugin-auto-import/vite';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ViteAliases(),
        AutoImport({
            include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
            imports: ['vue', 'vue-router'],
            defaultExportByFilename: false,
            dirs: ['./src/composables/**'],
            dts: './auto-imports.d.ts',
            vueTemplate: false,
            injectAtEnd: true
        }),
        svgLoader({
            svgo: false
        })
    ],
    css: {
        devSourcemap: true
    },
    base: '/cw-test-0614/'
});
