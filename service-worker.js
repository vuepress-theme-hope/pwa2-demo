if(!self.define){let e,s={};const f=(f,i)=>(f=new URL(f+".js",i).href,s[f]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=s,document.head.appendChild(e)}else e=f,importScripts(f),s()})).then((()=>{let e=s[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const c=e=>f(e,r),a={module:{uri:r},exports:t,require:c};s[r]=Promise.all(i.map((e=>a[e]||c(e)))).then((e=>(d(...e),t)))}}define(["./workbox-34e8bd20"],(function(e){"use strict";e.setCacheNameDetails({prefix:"PWA Plugin"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.3d7e9e99.js",revision:"51e000624f6f0b7370af60e978bec3cb"},{url:"assets/404.html.4f3af397.js",revision:"085d4cb61251dd217dce269ca83f94a5"},{url:"assets/404.html.b4c6daf6.js",revision:"d8b91b6f740148fc3bc5d4b76392fa6a"},{url:"assets/app.094680af.js",revision:"4a944f65b3568d80d8ebf5dfdc93af75"},{url:"assets/back-to-top.8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/index.html.14d5f354.js",revision:"022816f57d614c11f6ef7d1acf9dffa3"},{url:"assets/index.html.95a99f83.js",revision:"9a23a0061b6c2c77bc41084d6e4ae88a"},{url:"assets/Layout.026b9cf6.js",revision:"de8db1b8ebca4bb0107a0c660936f9f4"},{url:"assets/style.5a29d332.css",revision:"7d9bde78fcf357a88cdf1f20e2365647"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"index.html",revision:"3314a9a909002eed71011675b97408cd"},{url:"404.html",revision:"8b8c4cd5030ac9d2bee4b6b8df77ed92"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map