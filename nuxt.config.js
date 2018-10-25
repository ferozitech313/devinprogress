require('dotenv').config()
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cretona',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/fav.png' }
    ]
  } ,

  /*
  ** Customize the progress bar color
  */
    loading: '~/components/loading.vue',

    env:{
        AWS_ACCESS_KEY_ID : process.env.AWS_ACCESS_KEY_ID,
        AWS_ACCESS_SECRET_KEY : process.env.AWS_ACCESS_SECRET_KEY,
        S3_BUCKET_NAME : process.env.S3_BUCKET_NAME,
        AWS_REGION : process.env.AWS_REGION,
        TO_EMAIL : process.env.TO_EMAIL
    },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

