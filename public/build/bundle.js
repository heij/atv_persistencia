var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function a(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function g(t,n){t.value=null==n?"":n}let b;function $(t){b=t}function v(){if(!b)throw new Error("Function called outside component initialization");return b}const y=[],k=[],x=[],_=[],C=Promise.resolve();let S=!1;function N(t){x.push(t)}let O=!1;const w=new Set;function E(){if(!O){O=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];$(n),j(n.$$)}for($(null),y.length=0;k.length;)k.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];w.has(n)||(w.add(n),n())}x.length=0}while(y.length);for(;_.length;)_.pop()();S=!1,O=!1,w.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const A=new Set;let J;function T(t,n){t&&t.i&&(A.delete(t),t.i(n))}function P(t,n){const e=n.token={};function c(t,c,r,l){if(n.token!==e)return;n.resolved=l;let i=n.ctx;void 0!==r&&(i=i.slice(),i[r]=l);const u=t&&(n.current=t)(i);let a=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==c&&t&&(J={r:0,c:[],p:J},function(t,n,e,o){if(t&&t.o){if(A.has(t))return;A.add(t),J.c.push((()=>{A.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),J.r||o(J.c),J=J.p)})):n.block.d(1),u.c(),T(u,1),u.m(n.mount(),n.anchor),a=!0),n.block=u,n.blocks&&(n.blocks[c]=u),a&&E()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=v();if(t.then((t=>{$(e),c(n.then,1,n.value,t),$(null)}),(t=>{if($(e),c(n.catch,2,n.error,t),$(null),!n.hasCatch)throw t})),n.current!==n.pending)return c(n.pending,0),!0}else{if(n.current!==n.then)return c(n.then,1,n.value,t),!0;n.resolved=t}var r}function I(t,n){-1===t.$$.dirty[0]&&(y.push(t),S||(S=!0,C.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(r,l,i,a,s,f,d=[-1]){const h=b;$(r);const p=r.$$={fragment:null,ctx:null,props:f,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:l.context||[]),callbacks:e(),dirty:d,skip_bound:!1};let m=!1;if(p.ctx=i?i(r,l.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),m&&I(r,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();l.intro&&T(r.$$.fragment),function(t,e,r,l){const{fragment:i,on_mount:u,on_destroy:a,after_update:s}=t.$$;i&&i.m(e,r),l||N((()=>{const e=u.map(n).filter(c);a?a.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(N)}(r,l.target,l.anchor,l.customElement),E()}$(h)}function R(t,n,e){const o=t.slice();return o[14]=n[e],o}function q(t){t[17]=t[18].items}function z(t,n,e){const o=t.slice();return o[14]=n[e],o}function B(n){return{c:t,m:t,p:t,d:t}}function F(t){let n,e,o,c,r;q(t);let l=t[17].length>0&&M(t);return{c(){n=s("div"),l&&l.c(),e=d(),o=s("button"),o.textContent="Verificar Compra",p(n,"class","item-wrapper")},m(u,a){i(u,n,a),l&&l.m(n,null),i(u,e,a),i(u,o,a),c||(r=h(o,"click",t[7]),c=!0)},p(t,e){q(t),t[17].length>0?l?l.p(t,e):(l=M(t),l.c(),l.m(n,null)):l&&(l.d(1),l=null)},d(t){t&&u(n),l&&l.d(),t&&u(e),t&&u(o),c=!1,r()}}}function M(t){let n,e=t[17],o=[];for(let n=0;n<e.length;n+=1)o[n]=V(z(t,e,n));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=f("")},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);i(t,n,e)},p(t,c){if(65&c){let r;for(e=t[17],r=0;r<e.length;r+=1){const l=z(t,e,r);o[r]?o[r].p(l,c):(o[r]=V(l),o[r].c(),o[r].m(n.parentNode,n))}for(;r<o.length;r+=1)o[r].d(1);o.length=e.length}},d(t){a(o,t),t&&u(n)}}}function V(t){let n,e,o,r,a,g,b,$,v,y,k,x,_=t[14].name+"",C=t[14].value+"";return{c(){n=s("div"),e=s("h2"),o=f(_),r=d(),a=s("div"),g=f("R$ "),b=f(C),$=d(),v=s("button"),v.textContent="Adicionar ao Carrinho",y=d(),p(n,"class","item svelte-1x8nvfd")},m(u,s){i(u,n,s),l(n,e),l(e,o),l(n,r),l(n,a),l(a,g),l(a,b),l(n,$),l(n,v),l(n,y),k||(x=h(v,"click",(function(){c(t[6](t[14]))&&t[6](t[14]).apply(this,arguments)})),k=!0)},p(n,e){t=n,1&e&&_!==(_=t[14].name+"")&&m(o,_),1&e&&C!==(C=t[14].value+"")&&m(b,C)},d(t){t&&u(n),k=!1,x()}}}function D(n){return{c:t,m:t,p:t,d:t}}function G(t){let n,e,c,r,f,m,g,b=t[2],$=[];for(let n=0;n<b.length;n+=1)$[n]=H(R(t,b,n));return{c(){n=s("div");for(let t=0;t<$.length;t+=1)$[t].c();e=d(),c=s("button"),c.textContent="Confirmar",r=d(),f=s("button"),f.textContent="Cancelar",p(n,"class","cart-check svelte-1x8nvfd")},m(o,u){i(o,n,u);for(let t=0;t<$.length;t+=1)$[t].m(n,null);l(n,e),l(n,c),l(n,r),l(n,f),m||(g=[h(c,"click",t[8]),h(f,"click",t[9])],m=!0)},p(t,o){if(4&o){let c;for(b=t[2],c=0;c<b.length;c+=1){const r=R(t,b,c);$[c]?$[c].p(r,o):($[c]=H(r),$[c].c(),$[c].m(n,e))}for(;c<$.length;c+=1)$[c].d(1);$.length=b.length}},d(t){t&&u(n),a($,t),m=!1,o(g)}}}function H(t){let n,e,o,c,r,a,h,g=t[14].name+"",b=t[14].value+"";return{c(){n=s("div"),e=s("h2"),o=f(g),c=d(),r=s("span"),a=f("R$ "),h=f(b),p(n,"class","item svelte-1x8nvfd")},m(t,u){i(t,n,u),l(n,e),l(e,o),l(n,c),l(n,r),l(r,a),l(r,h)},p(t,n){4&n&&g!==(g=t[14].name+"")&&m(o,g),4&n&&b!==(b=t[14].value+"")&&m(h,b)},d(t){t&&u(n)}}}function K(n){let e,c,r,a,f,m,b,$,v,y,k,x,_,C,S,N={ctx:n,current:null,token:null,hasCatch:!1,pending:D,then:F,catch:B,value:18};P(x=n[0],N);let O=n[1]&&G(n);return{c(){e=s("main"),c=s("h1"),c.textContent="LOJA",r=d(),a=s("h2"),a.textContent="Adicionar Item",f=d(),m=s("input"),b=d(),$=s("input"),v=d(),y=s("button"),y.textContent="Adicionar",k=d(),N.block.c(),_=d(),O&&O.c(),p(m,"type","text"),p(m,"placeholder","Nome"),p($,"type","text"),p($,"placeholder","Preço"),p(e,"class","svelte-1x8nvfd")},m(t,o){i(t,e,o),l(e,c),l(e,r),l(e,a),l(e,f),l(e,m),g(m,n[3]),l(e,b),l(e,$),g($,n[4]),l(e,v),l(e,y),l(e,k),N.block.m(e,N.anchor=null),N.mount=()=>e,N.anchor=_,l(e,_),O&&O.m(e,null),C||(S=[h(m,"input",n[10]),h($,"input",n[11]),h(y,"click",n[5])],C=!0)},p(t,[o]){if(n=t,8&o&&m.value!==n[3]&&g(m,n[3]),16&o&&$.value!==n[4]&&g($,n[4]),N.ctx=n,1&o&&x!==(x=n[0])&&P(x,N));else{const t=n.slice();t[18]=N.resolved,N.block.p(t,o)}n[1]?O?O.p(n,o):(O=G(n),O.c(),O.m(e,null)):O&&(O.d(1),O=null)},i:t,o:t,d(t){t&&u(e),N.block.d(),N.token=null,N=null,O&&O.d(),C=!1,o(S)}}}function Q(t,n={}){return new Promise(((e,o)=>{fetch(t,n).then((t=>t.json())).then((t=>{e(t)}))}))}function U(){return Q("http://localhost:3000/items")}function W(t,n,e){let o=JSON.parse(localStorage.getItem("cart")||"[]"),c=U(),r=!1,l=[{name:"a",value:"b"}],i="",u="";return t.$$.update=()=>{t.$$.dirty},[c,r,l,i,u,function(){return Q("http://localhost:3000/items",{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify({name:i,value:u})}).then((()=>e(0,c=U())))},function(t){o.push(t.name),localStorage.setItem("cart",JSON.stringify(o))},function(){return Q("http://localhost:3000/review",{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify({itemNames:JSON.stringify(o)})}).then((t=>{e(1,r=!0),e(2,l=t.items)}))},async function(){await Q("http://localhost:3000/checkout",{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify({itemNames:JSON.stringify(o)})}),o=[],e(2,l=[]),localStorage.setItem("cart","[]"),e(1,r=!1),e(0,c=U())},function(){o=[],e(2,l=[]),localStorage.setItem("cart","[]"),e(1,r=!1)},function(){i=this.value,e(3,i)},function(){u=this.value,e(4,u)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),L(this,t,W,K,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
