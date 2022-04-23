export default {
  generate: {
    fallback: true
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CV - Developed by Dani Dean',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/css/styles.css', async: true, defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap'
  ],

  robots: {
    Sitemap: 'https://www.yourdomain.com/sitemap.xml',
    UserAgent: '*',
    Disallow: '/admin',
  },
  markdownit: {
    injected: true,
    html: true
  },
  sitemap: {
    hostname: 'https://www.yourdomain.com',
    gzip: true,
    exclude: [
      '/admin/**'
    ],
    trailingSlash: true,
  },
  webfontloader: {
    google: {
      families: [
        'Poppins:400,700&display=swap'
      ]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
