import{a0 as c,a1 as h}from"./runtime.BEGJMphK.js";const e=[];function g(n,l=c){let i=null;const o=new Set;function r(t){if(h(n,t)&&(n=t,i)){const b=!e.length;for(const s of o)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(n))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(i=l(r,u)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:_}}var a;const p=((a=globalThis.__sveltekit_d5pbhx)==null?void 0:a.base)??"";var f;const q=((f=globalThis.__sveltekit_d5pbhx)==null?void 0:f.assets)??p;export{q as a,p as b,g as w};
