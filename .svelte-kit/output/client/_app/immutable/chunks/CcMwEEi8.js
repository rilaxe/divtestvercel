import{_ as H,a0 as R,a1 as O,a2 as M,a3 as P,a4 as k,a5 as T,p as Y,k as j,l as B,a6 as b,s as g,m as A,a7 as C,o as v,a8 as $,a9 as q,aa as F,ab as W,ac as z,ad as G,h as J,t as K,B as Q,c as U,j as E,F as X}from"./CiVLqiPS.js";import{r as Z}from"./UE7T29sj.js";import{b as x}from"./yldFejyI.js";const rr=["touchstart","touchmove"];function ar(r){return rr.includes(r)}const er=new Set,D=new Set;function m(r){var N;var a=this,s=a.ownerDocument,c=r.type,i=((N=r.composedPath)==null?void 0:N.call(r))||[],e=i[0]||r.target,d=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(a===document||a===window)){r.__root=a;return}var h=i.indexOf(a);if(h===-1)return;u<=h&&(d=u)}if(e=i[d]||r.target,e!==a){H(r,"currentTarget",{configurable:!0,get(){return e||s}});var w=P,o=k;R(null),O(null);try{for(var t,n=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!=null&&(!e.disabled||r.target===e))if(M(l)){var[L,...V]=l;L.apply(e,[r,...V])}else l.call(e,r)}catch(y){t?n.push(y):t=y}if(r.cancelBubble||f===a||f===null)break;e=f}if(t){for(let y of n)queueMicrotask(()=>{throw y});throw t}}finally{r.__root=a,delete r.currentTarget,R(w),O(o)}}}function ir(r,a){var s=a==null?"":typeof a=="object"?a+"":a;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s+"")}function tr(r,a){return I(r,a)}function fr(r,a){T(),a.intro=a.intro??!1;const s=a.target,c=E,i=v;try{for(var e=Y(s);e&&(e.nodeType!==8||e.data!==j);)e=B(e);if(!e)throw b;g(!0),A(e),C();const d=I(r,{...a,anchor:e});if(v===null||v.nodeType!==8||v.data!==$)throw q(),b;return g(!1),d}catch(d){if(d===b)return a.recover===!1&&F(),T(),W(s),g(!1),tr(r,a);throw d}finally{g(c),A(i),Z()}}const p=new Map;function I(r,{target:a,anchor:s,props:c={},events:i,context:e,intro:d=!0}){T();var _=new Set,u=o=>{for(var t=0;t<o.length;t++){var n=o[t];if(!_.has(n)){_.add(n);var f=ar(n);a.addEventListener(n,m,{passive:f});var l=p.get(n);l===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,l+1)}}};u(z(er)),D.add(u);var h=void 0,w=G(()=>{var o=s??a.appendChild(J());return K(()=>{if(e){Q({});var t=U;t.c=e}i&&(c.$$events=i),E&&x(o,null),h=r(o,c)||{},E&&(k.nodes_end=v),e&&X()}),()=>{var f;for(var t of _){a.removeEventListener(t,m);var n=p.get(t);--n===0?(document.removeEventListener(t,m),p.delete(t)):p.set(t,n)}D.delete(u),o!==s&&((f=o.parentNode)==null||f.removeChild(o))}});return S.set(h,w),h}let S=new WeakMap;function dr(r,a){const s=S.get(r);return s?(S.delete(r),s(a)):Promise.resolve()}export{fr as h,tr as m,ir as s,dr as u};
