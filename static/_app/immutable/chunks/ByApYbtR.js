import{h as g,D as $,ab as E,ao as M,ap as z,aq as G,v as K,ar as P,o as w,as as L,u as R,at as S,g as j,au as Y,ae as F}from"./sE7uwzF8.js";import{b as H,c as J,d as Q,f as U,n as W,g as X,j as Z}from"./Dmd9XcG5.js";function C(s){var r,t,e="";if(typeof s=="string"||typeof s=="number")e+=s;else if(typeof s=="object")if(Array.isArray(s)){var f=s.length;for(r=0;r<f;r++)s[r]&&(t=C(s[r]))&&(e&&(e+=" "),e+=t)}else for(t in s)s[t]&&(e&&(e+=" "),e+=t);return e}function x(){for(var s,r,t=0,e="",f=arguments.length;t<f;t++)(s=arguments[t])&&(r=C(s))&&(e&&(e+=" "),e+=r);return e}function m(s){return typeof s=="object"?x(s):s??""}function es(s){if(g){var r=!1,t=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var e=s.value;h(s,"value",null),s.value=e}if(s.hasAttribute("checked")){var f=s.checked;h(s,"checked",null),s.checked=f}}};s.__on_r=t,M(t),X()}}function ss(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function h(s,r,t,e){var f=s.__attributes??(s.__attributes={});g&&(f[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||f[r]!==(f[r]=t)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[z]=t),t==null?s.removeAttribute(r):typeof t!="string"&&I(s).includes(r)?s[r]=t:s.setAttribute(r,t))}function as(s,r,t,e,f=!1,o=!1,y=!1){let d=g&&o;d&&$(!1);var u=r||{},_=s.tagName==="OPTION";for(var b in r)b in t||(t[b]=null);t.class&&(t.class=m(t.class));var V=I(s),q=s.__attributes??(s.__attributes={});for(const a in t){let i=t[a];if(_&&a==="value"&&i==null){s.value=s.__value="",u[a]=i;continue}var A=u[a];if(i!==A){u[a]=i;var k=a[0]+a[1];if(k!=="$$"){if(k==="on"){const c={},v="$$"+a;let n=a.slice(2);var p=Z(n);if(H(n)&&(n=n.slice(0,-7),c.capture=!0),!p&&A){if(i!=null)continue;s.removeEventListener(n,u[v],c),u[v]=null}if(i!=null)if(p)s[`__${n}`]=i,Q([n]);else{let B=function(D){u[a].call(this,D)};u[v]=J(n,s,B,c)}else p&&(s[`__${n}`]=void 0)}else if(a==="style"&&i!=null)s.style.cssText=i+"";else if(a==="autofocus")U(s,!!i);else if(!o&&(a==="__value"||a==="value"&&i!=null))s.value=s.__value=i;else if(a==="selected"&&_)ss(s,i);else{var l=a;f||(l=W(l));var N=l==="defaultValue"||l==="defaultChecked";if(i==null&&!o&&!N)if(q[a]=null,l==="value"||l==="checked"){let c=s;if(l==="value"){let v=c.defaultValue;c.removeAttribute(l),c.defaultValue=v}else{let v=c.defaultChecked;c.removeAttribute(l),c.defaultChecked=v}}else s.removeAttribute(a);else N||V.includes(l)&&(o||typeof i!="string")?s[l]=i:typeof i!="function"&&h(s,l,i)}a==="style"&&"__styles"in s&&(s.__styles={})}}}return d&&$(!0),u}var O=new Map;function I(s){var r=O.get(s.nodeName);if(r)return r;O.set(s.nodeName,r=[]);for(var t,e=s,f=Element.prototype;f!==e;){t=G(e);for(var o in t)t[o].set&&r.push(o);e=E(e)}return r}function fs(s=!1){const r=K,t=r.l.u;if(!t)return;let e=()=>Y(r.s);if(s){let f=0,o={};const y=F(()=>{let d=!1;const u=r.s;for(const _ in u)u[_]!==o[_]&&(o[_]=u[_],d=!0);return d&&f++,f});e=()=>j(y)}t.b.length&&P(()=>{T(r,e),L(t.b)}),w(()=>{const f=R(()=>t.m.map(S));return()=>{for(const o of f)typeof o=="function"&&o()}}),t.a.length&&w(()=>{T(r,e),L(t.a)})}function T(s,r){if(s.l.s)for(const t of s.l.s)j(t);r()}export{as as a,m as c,fs as i,es as r,h as s};
