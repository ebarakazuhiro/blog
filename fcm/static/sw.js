importScripts('/_nuxt/workbox.dev.4c4f5ca6.js', 'firebase-messaging-sw.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2cf2aa35014f63024489.js",
    "revision": "6de18f336cfc36283c3c7bcc7a3d0ea7"
  },
  {
    "url": "/_nuxt/7ec77e2196e0db83b667.js",
    "revision": "a8942421ca358ce2df42ad27614a2a82"
  },
  {
    "url": "/_nuxt/e81bcb787c1ecc876ea3.js",
    "revision": "4f002a18ee88299b09f7f5d19be1a3a8"
  },
  {
    "url": "/_nuxt/f503f3ddc26d82bc489e.js",
    "revision": "11fa03c354bd9b6ba55a38b5376f087b"
  },
  {
    "url": "/_nuxt/f75b31dcf6efdc7c4b0b.js",
    "revision": "c08328f85e77dd5d41fef8b1ef965714"
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





