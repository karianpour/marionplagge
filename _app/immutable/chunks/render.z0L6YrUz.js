import{R as m,S as V,T as b,U as D,V as p,e as h,s as R,c as I,f as _,W as L,X as O,Y,Z as H,_ as C,a0 as M,a1 as W,a as $,x as j,h as E,u as k,z,J}from"./runtime.BayDF49V.js";import{a as P,r as N,h as v}from"./events.B34i3rzF.js";import{r as U,b as X}from"./disclose-version.BV3JI1lD.js";const Z=["touchstart","touchmove"];function q(t){return Z.includes(t)}function Q(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function B(t,e){return S(t,e)}function x(t,e){m(),e.intro=e.intro??!1;const n=e.target,u=E,l=_;try{for(var r=V(n);r&&(r.nodeType!==8||r.data!==b);)r=D(r);if(!r)throw p;h(!0),R(r),I();const i=S(t,{...e,anchor:r});if(_===null||_.nodeType!==8||_.data!==L)throw O(),p;return h(!1),i}catch(i){if(i===p)return e.recover===!1&&Y(),m(),H(n),h(!1),B(t,e);throw i}finally{h(u),R(l),U()}}const d=new Map;function S(t,{target:e,anchor:n,props:u={},events:l,context:r,intro:i=!0}){m();var y=new Set,g=o=>{for(var a=0;a<o.length;a++){var s=o[a];if(!y.has(s)){y.add(s);var f=q(s);e.addEventListener(s,v,{passive:f});var w=d.get(s);w===void 0?(document.addEventListener(s,v,{passive:f}),d.set(s,1)):d.set(s,w+1)}}};g(C(P)),N.add(g);var c=void 0,A=M(()=>{var o=n??e.appendChild(W());return $(()=>{if(r){j({});var a=J;a.c=r}l&&(u.$$events=l),E&&X(o,null),c=t(o,u)||{},E&&(k.nodes_end=_),r&&z()}),()=>{var f;for(var a of y){e.removeEventListener(a,v);var s=d.get(a);--s===0?(document.removeEventListener(a,v),d.delete(a)):d.set(a,s)}N.delete(g),T.delete(c),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return T.set(c,A),c}let T=new WeakMap;function ee(t){const e=T.get(t);e&&e()}export{x as h,B as m,Q as s,ee as u};