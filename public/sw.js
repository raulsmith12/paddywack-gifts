if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SGHaggbFpF3lY1jqWlog1/_buildManifest.js",revision:"2a1bb059fd20aa5231c4dc18029de7d8"},{url:"/_next/static/SGHaggbFpF3lY1jqWlog1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/238-c5329b2529b8d314.js",revision:"c5329b2529b8d314"},{url:"/_next/static/chunks/622-8e0ea06593dd7707.js",revision:"8e0ea06593dd7707"},{url:"/_next/static/chunks/737-2e07a570a98529ff.js",revision:"2e07a570a98529ff"},{url:"/_next/static/chunks/907-8c13c079591a9a09.js",revision:"8c13c079591a9a09"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-91afa22bd20b5845.js",revision:"91afa22bd20b5845"},{url:"/_next/static/chunks/pages/404-6979059574f9628f.js",revision:"6979059574f9628f"},{url:"/_next/static/chunks/pages/_app-bdd289228fe73dff.js",revision:"bdd289228fe73dff"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/about-d23f9b8fd18a63ba.js",revision:"d23f9b8fd18a63ba"},{url:"/_next/static/chunks/pages/contact-2c425ab09351b5b2.js",revision:"2c425ab09351b5b2"},{url:"/_next/static/chunks/pages/creator-748977cfc4a4e595.js",revision:"748977cfc4a4e595"},{url:"/_next/static/chunks/pages/gallery-e23d80f4428ecb44.js",revision:"e23d80f4428ecb44"},{url:"/_next/static/chunks/pages/gallery/%5Bid%5D-860740fd03cbb92a.js",revision:"860740fd03cbb92a"},{url:"/_next/static/chunks/pages/index-ced97a0d91c72514.js",revision:"ced97a0d91c72514"},{url:"/_next/static/chunks/pages/join-e82ddba11892c859.js",revision:"e82ddba11892c859"},{url:"/_next/static/chunks/pages/privacy-d5afba49c1c80b31.js",revision:"d5afba49c1c80b31"},{url:"/_next/static/chunks/pages/shop-70d989e1ea96f890.js",revision:"70d989e1ea96f890"},{url:"/_next/static/chunks/pages/shop/%5Bid%5D-cf2cbada80698092.js",revision:"cf2cbada80698092"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f164db4954bac6ec.js",revision:"f164db4954bac6ec"},{url:"/_next/static/css/3ae7efd924c0aafc.css",revision:"3ae7efd924c0aafc"},{url:"/favicon.ico",revision:"1841fe39955cf7c8b1a0fd51eb0eed9e"},{url:"/icons-128.png",revision:"70dde46ecfcb1c67a64a64745d147b80"},{url:"/icons-144.png",revision:"240bea561c149cb991123f01e30eccee"},{url:"/icons-152.png",revision:"6acf440dc72aab3baf312c3ff6d2fa75"},{url:"/icons-16.png",revision:"bc84d3ca1ab8ff9a343103ce38ee4459"},{url:"/icons-180.png",revision:"0d3dbacb870b2734c96ac4ada2654e4f"},{url:"/icons-192.png",revision:"8048331ba9f1cf84d65ab32acf6eb8fa"},{url:"/icons-256.png",revision:"884bfedd864a8f933cbcd0a7668fbf9c"},{url:"/icons-48.png",revision:"2bb9bb7a4d4f0311fabb58c91bebf4c0"},{url:"/icons-512.png",revision:"6cbb14b2b5bb24c1e7808f46abf5bf6c"},{url:"/icons-64.png",revision:"23f1d9bd39ac2d0ec69b1e7638cd2384"},{url:"/icons-72.png",revision:"1d2624b97b0db7e40fd382b2679e3ecd"},{url:"/icons-96.png",revision:"88432d3d25655c7bf4645deb6e5c6281"},{url:"/robots.txt",revision:"732ac00ecc2b9adb6f0fa6d0bb71d8e3"},{url:"/sitemap-0.xml",revision:"d0011daacb3c9b2c901f0996a0b81a03"},{url:"/sitemap.xml",revision:"d73d8bf1e43b8e5df75cf778e74d4a83"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));