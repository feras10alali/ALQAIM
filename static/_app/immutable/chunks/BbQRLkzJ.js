import{z as E,A as S,H as C,B as Y,C as T,D as c,E as R,i as O,F as h,G as k,I as F,J as M,K as P,L as V,M as U,N as W,O as N,h as v,p as $,v as j,P as q,a as z,Q as B,R as G,T as J,U as K,V as w,W as D,X as Q}from"./sE7uwzF8.js";import{a as X,r as L,h as g,i as Z}from"./Dmd9XcG5.js";import{b as x}from"./Do9z1AOy.js";let b=!0;function re(t){b=t}function ne(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function ee(t,e){return H(t,e)}function ie(t,e){E(),e.intro=e.intro??!1;const r=e.target,o=v,f=h;try{for(var a=S(r);a&&(a.nodeType!==8||a.data!==C);)a=Y(a);if(!a)throw T;c(!0),R(a),O();const l=H(t,{...e,anchor:a});if(h===null||h.nodeType!==8||h.data!==k)throw F(),T;return c(!1),l}catch(l){if(l===T)return e.recover===!1&&M(),E(),P(r),c(!1),ee(t,e);throw l}finally{c(o),R(f)}}const _=new Map;function H(t,{target:e,anchor:r,props:o={},events:f,context:a,intro:l=!0}){E();var m=new Set,d=i=>{for(var s=0;s<i.length;s++){var n=i[s];if(!m.has(n)){m.add(n);var u=Z(n);e.addEventListener(n,g,{passive:u});var I=_.get(n);I===void 0?(document.addEventListener(n,g,{passive:u}),_.set(n,1)):_.set(n,I+1)}}};d(V(X)),L.add(d);var p=void 0,y=U(()=>{var i=r??e.appendChild(W());return N(()=>{if(a){$({});var s=j;s.c=a}f&&(o.$$events=f),v&&x(i,null),b=l,p=t(i,o)||{},b=!0,v&&(q.nodes_end=h),a&&z()}),()=>{var u;for(var s of m){e.removeEventListener(s,g);var n=_.get(s);--n===0?(document.removeEventListener(s,g),_.delete(s)):_.set(s,n)}L.delete(d),i!==r&&((u=i.parentNode)==null||u.removeChild(i))}});return A.set(p,y),p}let A=new WeakMap;function oe(t,e){const r=A.get(t);return r?(A.delete(t),r(e)):Promise.resolve()}function fe(t,e,r=!1){v&&O();var o=t,f=null,a=null,l=Q,m=r?G:0,d=!1;const p=(i,s=!0)=>{d=!0,y(s,i)},y=(i,s)=>{if(l===(l=i))return;let n=!1;if(v){const u=o.data===J;!!l===u&&(o=K(),R(o),c(!1),n=!0)}l?(f?w(f):s&&(f=N(()=>s(o))),a&&D(a,()=>{a=null})):(a?w(a):s&&(a=N(()=>s(o))),f&&D(f,()=>{f=null})),n&&c(!0)};B(()=>{d=!1,e(p),d||y(null,null)},m),v&&(o=h)}export{b as a,re as b,ie as h,fe as i,ee as m,ne as s,oe as u};
