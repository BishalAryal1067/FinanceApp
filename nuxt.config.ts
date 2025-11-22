// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: ['~/assets/main.css'],

    modules: [
        '@nuxt/eslint',
        '@nuxt/ui',
        '@nuxt/test-utils',
        '@nuxt/image',
        '@nuxt/scripts',
        '@vite-pwa/nuxt',
        '@nuxt/test-utils/module'
    ],

    pwa: {
        devOptions: {
            enabled: true
        },
        manifest: {
            icons: [
                {
                    src: '/icons/icon_512x512.png',
                    type: 'image/png',
                    sizes: '512x512'
                },
                {
                    src: '/icons/icon_192x192.png',
                    type: 'image/png',
                    sizes: '192x192'
                }
            ]
        }
    },

    ui: {
        colorMode: true
    }
})
