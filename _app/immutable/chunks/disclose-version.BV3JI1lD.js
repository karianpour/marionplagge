import{a1 as u,b as y,ap as E,h as d,T as g,U as c,e as h,s as _,f as r,S as l,aq as w,ar as b,u as m,c as A}from"./runtime.BayDF49V.js";let a;function M(){a=void 0}function R(t){let e=null,n=d;var f;if(d){for(e=r,a===void 0&&(a=l(document.head));a!==null&&(a.nodeType!==8||a.data!==g);)a=c(a);a===null?h(!1):a=_(c(a))}d||(f=document.head.appendChild(u()));try{y(()=>t(f),E)}finally{n&&(h(!0),a=r,_(e))}}function N(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function i(t,e){var n=m;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function S(t,e){var n=(e&w)!==0,f=(e&b)!==0,o,v=!t.startsWith("<!>");return()=>{if(d)return i(r,null),r;o===void 0&&(o=N(v?t:"<!>"+t),n||(o=l(o)));var s=f?document.importNode(o,!0):o.cloneNode(!0);if(n){var p=l(s),T=s.lastChild;i(p,T)}else i(s,s);return s}}function D(t=""){if(!d){var e=u(t+"");return i(e,e),e}var n=r;return n.nodeType!==3&&(n.before(n=u()),_(n)),i(n,n),n}function F(){if(d)return i(r,null),r;var t=document.createDocumentFragment(),e=document.createComment(""),n=u();return t.append(e,n),i(e,n),t}function I(t,e){if(d){m.nodes_end=r,A();return}t!==null&&t.before(e)}const x="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(x);export{I as a,i as b,F as c,D as d,R as h,M as r,S as t};
