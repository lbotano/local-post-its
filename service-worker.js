if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,o)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=o(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-3b5792f5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"16.bundle.js",revision:"e00a0d95509cb8af5eaef71812d1d685"},{url:"405.bundle.js",revision:"eb1857f087748d377e8bc719600557f7"},{url:"670.bundle.js",revision:"28fc314e303d1b484bf1afb727eec262"},{url:"assets/logo-128p.png",revision:"d3b7615534d428aa7c2ba262c605df0a"},{url:"assets/logo-192p.png",revision:"26aaba01b095c31dfaafedc731394fef"},{url:"assets/logo-32p.png",revision:"5ef32781a173dfd7c6c700c1753b48d8"},{url:"assets/logo-48p.png",revision:"4dd506cca855583a2ae38765b6f4fbfa"},{url:"assets/logo-512p.png",revision:"b39769a7a31022ac60a1751606e056b0"},{url:"assets/logo-72p.png",revision:"739dd7aae5d12a667fa2cde0044cd7b8"},{url:"assets/logo-96p.png",revision:"c48cb95ce3c48d69cc2b01e8bcbcd77a"},{url:"assets/logo.png",revision:"b639c0eae3427d16cc0506cab9c0b7bb"},{url:"index.html",revision:"fdca1823198e2c08b10997d954cefaa5"},{url:"logo-32p.png",revision:"5ef32781a173dfd7c6c700c1753b48d8"},{url:"main.bundle.js",revision:"d632df202f1a937ec2b0f102b46f7691"},{url:"main.bundle.js.LICENSE.txt",revision:"ca5629479d30e94d153e9da215a60899"},{url:"manifest.json",revision:"5de84f04cacdcaa1b5c5cd9ed9a807f8"}],{})}));
//# sourceMappingURL=service-worker.js.map