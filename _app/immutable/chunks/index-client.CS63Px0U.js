import{a4 as N,a5 as G,a6 as Z,a7 as y,a8 as $,A as o,a9 as v,aa as D,B as b,u as B,ab as z,v as H,q as J,ac as V,ad as Q,ae as W,af as X,o as F,ag as K,ah as k,ai as p,aj as ee,K as q,P as U,ak as ae,al as re,am as ne,an as te,ao as ie,a3 as fe,J as L,y as ue}from"./runtime.BayDF49V.js";import{c as se}from"./store.DXDaU_V1.js";function E(r,f=null,g){if(typeof r!="object"||r===null||N in r)return r;const m=H(r);if(m!==G&&m!==Z)return r;var u=new Map,c=J(r),P=y(0);c&&u.set("length",y(r.length));var w;return new Proxy(r,{defineProperty(i,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&$();var t=u.get(e);return t===void 0?(t=y(a.value),u.set(e,t)):o(t,E(a.value,w)),!0},deleteProperty(i,e){var a=u.get(e);if(a===void 0)e in i&&u.set(e,y(v));else{if(c&&typeof e=="string"){var t=u.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&o(t,n)}o(a,v),Y(P)}return!0},get(i,e,a){var _;if(e===N)return r;var t=u.get(e),n=e in i;if(t===void 0&&(!n||(_=D(i,e))!=null&&_.writable)&&(t=y(E(n?i[e]:v,w)),u.set(e,t)),t!==void 0){var s=b(t);return s===v?void 0:s}return Reflect.get(i,e,a)},getOwnPropertyDescriptor(i,e){var a=Reflect.getOwnPropertyDescriptor(i,e);if(a&&"value"in a){var t=u.get(e);t&&(a.value=b(t))}else if(a===void 0){var n=u.get(e),s=n==null?void 0:n.v;if(n!==void 0&&s!==v)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return a},has(i,e){var s;if(e===N)return!0;var a=u.get(e),t=a!==void 0&&a.v!==v||Reflect.has(i,e);if(a!==void 0||B!==null&&(!t||(s=D(i,e))!=null&&s.writable)){a===void 0&&(a=y(t?E(i[e],w):v),u.set(e,a));var n=b(a);if(n===v)return!1}return t},set(i,e,a,t){var I;var n=u.get(e),s=e in i;if(c&&e==="length")for(var _=a;_<n.v;_+=1){var h=u.get(_+"");h!==void 0?o(h,v):_ in i&&(h=y(v),u.set(_+"",h))}n===void 0?(!s||(I=D(i,e))!=null&&I.writable)&&(n=y(void 0),o(n,E(a,w)),u.set(e,n)):(s=n.v!==v,o(n,E(a,w)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(t,a),!s){if(c&&typeof e=="string"){var O=u.get("length"),S=Number(e);Number.isInteger(S)&&S>=O.v&&o(O,S+1)}Y(P)}return!0},ownKeys(i){b(P);var e=Reflect.ownKeys(i).filter(n=>{var s=u.get(n);return s===void 0||s.v!==v});for(var[a,t]of u)t.v!==v&&!(a in i)&&e.push(a);return e},setPrototypeOf(){z()}})}function Y(r,f=1){o(r,r.v+f)}function le(r){throw new Error("lifecycle_outside_component")}function j(r){for(var f=B,g=B;f!==null&&!(f.f&(W|X));)f=f.parent;try{return F(f),r()}finally{F(g)}}function ce(r,f,g,m){var M;var u=(g&te)!==0,c=!K||(g&k)!==0,P=(g&p)!==0,w=(g&ie)!==0,i=!1,e;P?[e,i]=se(()=>r[f]):e=r[f];var a=N in r||ee in r,t=((M=D(r,f))==null?void 0:M.set)??(a&&P&&f in r?l=>r[f]=l:void 0),n=m,s=!0,_=!1,h=()=>(_=!0,s&&(s=!1,w?n=q(m):n=m),n);e===void 0&&m!==void 0&&(t&&c&&V(),e=h(),t&&t(e));var d;if(c)d=()=>{var l=r[f];return l===void 0?h():(s=!0,_=!1,l)};else{var O=j(()=>(u?U:ae)(()=>r[f]));O.f|=Q,d=()=>{var l=b(O);return l!==void 0&&(n=void 0),l===void 0?n:l}}if(!(g&re))return d;if(t){var S=r.$$legacy;return function(l,R){return arguments.length>0?((!c||!R||S||i)&&t(R?d():l),l):d()}}var I=!1,C=!1,T=fe(e),A=j(()=>U(()=>{var l=d(),R=b(T);return I?(I=!1,C=!0,R):(C=!1,T.v=l)}));return u||(A.equals=ne),function(l,R){if(arguments.length>0){const x=R?b(A):c&&P?E(l):l;return A.equals(x)||(I=!0,o(T,x),_&&n!==void 0&&(n=x),q(()=>b(A))),l}return b(A)}}function oe(r){L===null&&le(),K&&L.l!==null?ve(L).m.push(r):ue(()=>{const f=q(r);if(typeof f=="function")return f})}function ve(r){var f=r.l;return f.u??(f.u={a:[],b:[],m:[]})}export{E as a,oe as o,ce as p};
