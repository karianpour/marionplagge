import{_ as l,b as T,ap as E,h as i,R as w,S as h,e as m,s as _,f as u,Q as b,aq as A,ar as N,u as p,c as R,a0 as v,I as x,as as C,an as I,B as M,A as S}from"./runtime.BEGJMphK.js";let a;function P(){a=void 0}function H(e){let n=null,t=i;var r;if(i){for(n=u,a===void 0&&(a=b(document.head));a!==null&&(a.nodeType!==8||a.data!==w);)a=h(a);a===null?m(!1):a=_(h(a))}i||(r=document.head.appendChild(l()));try{T(()=>e(r),E)}finally{t&&(m(!0),a=u,_(n))}}function D(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function o(e,n){var t=p;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function B(e,n){var t=(n&A)!==0,r=(n&N)!==0,s,f=!e.startsWith("<!>");return()=>{if(i)return o(u,null),u;s===void 0&&(s=D(f?e:"<!>"+e),t||(s=b(s)));var d=r?document.importNode(s,!0):s.cloneNode(!0);if(t){var g=b(d),y=d.lastChild;o(g,y)}else o(d,d);return d}}function U(e=""){if(!i){var n=l(e+"");return o(n,n),n}var t=u;return t.nodeType!==3&&(t.before(t=l()),_(t)),o(t,t),t}function k(){if(i)return o(u,null),u;var e=document.createDocumentFragment(),n=document.createComment(""),t=l();return e.append(n,t),o(n,t),e}function q(e,n){if(i){p.nodes_end=u,R();return}e!==null&&e.before(n)}function F(e,n,t){if(e==null)return n(void 0),v;const r=x(()=>e.subscribe(n,t));return r.unsubscribe?()=>r.unsubscribe():r}let c=!1;function G(e,n,t){const r=t[n]??(t[n]={store:null,source:I(void 0),unsubscribe:v});if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=v;else{var s=!0;r.unsubscribe=F(e,f=>{s?r.source.v=f:S(r.source,f)}),s=!1}return M(r.source)}function Q(){const e={};return C(()=>{for(var n in e)e[n].unsubscribe()}),e}function V(e){var n=c;try{return c=!1,[e(),c]}finally{c=n}}const L="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(L);export{q as a,G as b,o as c,V as d,k as e,U as f,H as h,P as r,Q as s,B as t};