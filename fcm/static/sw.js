importScripts('/_nuxt/workbox.dev.4c4f5ca6.js', 'firebase-messaging-sw.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/542e537a9fc7a1ebaec4.js",
    "revision": "9cff14cd4aae589ddc491a37bac65a65"
  },
  {
    "url": "/_nuxt/c8d673bdcb0a139f16ba.js",
    "revision": "d7ffc2f570842b6ab3720e18bb72ea3e"
  },
  {
    "url": "/_nuxt/c98391aaadf9c593f577.js",
    "revision": "7e5ff80ca3e0ce41480dd512353dd7f0"
  },
  {
    "url": "/_nuxt/dbc6f929d0b63cb75e95.js",
    "revision": "36589200252cbee04350bc58fa43c197"
  },
  {
    "url": "/_nuxt/f5a1644418eb8a24b7de.js",
    "revision": "fd916263290ffc54435ae39777f1281f"
  }
], {
  "cacheId": "advent_calendar_2018_12_09",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





