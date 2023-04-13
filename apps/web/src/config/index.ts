const APP = {
  FIREBASE_CONFIG: Object.freeze({
    apiKey: process.env.VUE_APP_API_KEY,
    appId: process.env.VUE_APP_APP_ID,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET
  }),
  INTERCOM_APP_ID: process.env.VUE_APP_INTERCOM_ID,
  LOGTAIL_TOKEN: process.env.VUE_APP_LOGTAIL_TOKEN || ''
}

const APP_DEV = {
  FIREBASE_CONFIG: Object.freeze({
    apiKey: process.env.VUE_APP_DEV_API_KEY,
    appId: process.env.VUE_APP_DEV_APP_ID,
    authDomain: process.env.VUE_APP_DEV_AUTH_DOMAIN,
    messagingSenderId: process.env.VUE_APP_DEV_MESSAGING_SENDER_ID,
    projectId: process.env.VUE_APP_DEV_PROJECT_ID,
    storageBucket: process.env.VUE_APP_DEV_STORAGE_BUCKET
  }),
  INTERCOM_APP_ID: process.env.VUE_APP_INTERCOM_ID,
  LOGTAIL_TOKEN: process.env.VUE_APP_LOGTAIL_TOKEN || ''
}

export const CONSTANTS = Object.freeze({
  APP: process.env.DEV ? APP_DEV : APP
})
