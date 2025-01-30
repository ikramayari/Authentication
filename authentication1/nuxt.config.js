export default {
  // Modules to include
  modules: [
    '@nuxt/http', // Nuxt HTTP module for API calls
    'bootstrap-vue/nuxt' // For Bootstrap styling
  ],

  // HTTP module configuration
  http: {
    baseURL: 'http://127.0.0.1:8000/api', // Laravel API URL for both server and client
    browserBaseURL: 'http://127.0.0.1:8000/api', // URL to use in the browser
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  // Disable server-side rendering: ensures SPA mode
  ssr: false,

  // Global page headers
  head: {
    title: 'authentication1',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS
  css: [],

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Build modules
  buildModules: [],

  // Build Configuration
  build: {},

  // CORS setup for development mode (optional, if needed for API testing)
  server: {
    host: '0.0.0.0', // Allow external access to the Nuxt dev server
    port: 3000, // Default port
  },
};
