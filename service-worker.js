if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,o)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=o(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-3b5792f5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/logo-150p.png",revision:"ae29d089920a3d8ccbcd2a5eb52922ef"},{url:"assets/logo-32p.png",revision:"5ef32781a173dfd7c6c700c1753b48d8"},{url:"assets/logo-512p.png",revision:"5db405d40e18a62b82ce637c7ea09727"},{url:"assets/logo-75p.png",revision:"5b530de5e2234d646b964258e92f607a"},{url:"assets/logo.inkscape.svg",revision:"e3da554fdac093b45fced37bd0db7f4a"},{url:"assets/logo.png",revision:"b639c0eae3427d16cc0506cab9c0b7bb"},{url:"index.html",revision:"8315a5afb1587767ad538ad4b1269765"},{url:"logo-75p.png",revision:"5b530de5e2234d646b964258e92f607a"},{url:"main.js",revision:"b54a946ee67f25b191d03bf47ea536bf"},{url:"main.js.LICENSE.txt",revision:"ca5629479d30e94d153e9da215a60899"},{url:"manifest.json",revision:"810bd8bea3dfe559a1758a382e7bd0c0"}],{})}));
//# sourceMappingURL=service-worker.js.map
