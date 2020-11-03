export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Palagan Design System',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" },
            { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.css' }
        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
            { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
            { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        { src: '~/assets/scss/main.scss', lang: 'scss' }
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: '~plugins/swiper.js', ssr: false }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxtjs/fontawesome',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extend (config, ctx) {
        if (ctx.isDev && ctx.client) {
            config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
            })

            const vueLoader = config.module.rules.find(
            ({loader}) => loader === 'vue-loader')
            const { options: {loaders} } = vueLoader || { options: {} }
            if (loaders) {
            for (const loader of Object.values(loaders)) {
                changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
            }
            }
            config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
            // console.log(util.inspect(config.module.rules, { depth: 6 }))
            }
        }
    }
}

function changeLoaderOptions (loaders) {
    if (loaders) {
        for (const loader of loaders) {
        if (loader.loader === 'sass-loader') {
            Object.assign(loader.options, {
            includePaths: ['./assets'],
            // data: '@import "_imports";'
            })
        }
        }
    }
}
