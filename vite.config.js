import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'
import IconsResolve from 'unplugin-icons/resolver'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/scss/theme.scss',
                'resources/scss/app.scss',
                'resources/js/app.js'
            ],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        Components({
            resolvers: [BootstrapVueNextResolver(), IconsResolve()],
        }),
        Icons({
            compiler: 'vue3',
            autoInstall: true,
        }),
    ],
});
