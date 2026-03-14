var Ja=Object.defineProperty;var Dr=r=>{throw TypeError(r)};var _a=(r,a,t)=>a in r?Ja(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t;var m=(r,a,t)=>_a(r,typeof a!="symbol"?a+"":a,t),ur=(r,a,t)=>a.has(r)||Dr("Cannot "+t);var h=(r,a,t)=>(ur(r,a,"read from private field"),t?t.call(r):a.get(r)),w=(r,a,t)=>a.has(r)?Dr("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(r):a.set(r,t),y=(r,a,t,i)=>(ur(r,a,"write to private field"),i?i.call(r,t):a.set(r,t),t),A=(r,a,t)=>(ur(r,a,"access private method"),t);var Hr=(r,a,t,i)=>({set _(n){y(r,a,n,t)},get _(){return h(r,a,i)}});var we={Stringify:1,BeforeStream:2,Stream:3},P=(r,a)=>{const t=new String(r);return t.isEscaped=!0,t.callbacks=a,t},Ya=/[&<>'"]/,ca=async(r,a)=>{let t="";a||(a=[]);const i=await Promise.all(r);for(let n=i.length-1;t+=i[n],n--,!(n<0);n--){let o=i[n];typeof o=="object"&&a.push(...o.callbacks||[]);const l=o.isEscaped;if(o=await(typeof o=="object"?o.toString():o),typeof o=="object"&&a.push(...o.callbacks||[]),o.isEscaped??l)t+=o;else{const s=[t];ae(o,s),t=s[0]}}return P(t,a)},ae=(r,a)=>{const t=r.search(Ya);if(t===-1){a[0]+=r;return}let i,n,o=0;for(n=t;n<r.length;n++){switch(r.charCodeAt(n)){case 34:i="&quot;";break;case 39:i="&#39;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}a[0]+=r.substring(o,n)+i,o=n+1}a[0]+=r.substring(o,n)},da=r=>{const a=r.callbacks;if(!(a!=null&&a.length))return r;const t=[r],i={};return a.forEach(n=>n({phase:we.Stringify,buffer:t,context:i})),t[0]},lr=async(r,a,t,i,n)=>{typeof r=="object"&&!(r instanceof String)&&(r instanceof Promise||(r=r.toString()),r instanceof Promise&&(r=await r));const o=r.callbacks;if(!(o!=null&&o.length))return Promise.resolve(r);n?n[0]+=r:n=[r];const l=Promise.all(o.map(s=>s({phase:a,buffer:n,context:i}))).then(s=>Promise.all(s.filter(Boolean).map(c=>lr(c,a,!1,i,n))).then(()=>n[0]));return t?P(await l,o):l},$a=(r,...a)=>{const t=[""];for(let i=0,n=r.length-1;i<n;i++){t[0]+=r[i];const o=Array.isArray(a[i])?a[i].flat(1/0):[a[i]];for(let l=0,s=o.length;l<s;l++){const c=o[l];if(typeof c=="string")ae(c,t);else if(typeof c=="number")t[0]+=c;else{if(typeof c=="boolean"||c===null||c===void 0)continue;if(typeof c=="object"&&c.isEscaped)if(c.callbacks)t.unshift("",c);else{const d=c.toString();d instanceof Promise?t.unshift("",d):t[0]+=d}else c instanceof Promise?t.unshift("",c):ae(c.toString(),t)}}}return t[0]+=r.at(-1),t.length===1?"callbacks"in t?P(da(P(t[0],t.callbacks))):P(t[0]):ca(t,t.callbacks)},Rr=Symbol("RENDERER"),Ar=Symbol("ERROR_HANDLER"),I=Symbol("STASH"),ha=Symbol("INTERNAL"),Va=Symbol("MEMO"),sr=Symbol("PERMALINK"),Nr=r=>(r[ha]=!0,r),pa=r=>({value:a,children:t})=>{if(!t)return;const i={children:[{tag:Nr(()=>{r.push(a)}),props:{}}]};Array.isArray(t)?i.children.push(...t.flat()):i.children.push(t),i.children.push({tag:Nr(()=>{r.pop()}),props:{}});const n={tag:"",props:i,type:""};return n[Ar]=o=>{throw r.pop(),o},n},ga=r=>{const a=[r],t=pa(a);return t.values=a,t.Provider=t,Ie.push(t),t},Ie=[],Lr=r=>{const a=[r],t=(i=>{a.push(i.value);let n;try{n=i.children?(Array.isArray(i.children)?new xa("",{},i.children):i.children).toString():""}catch(o){throw a.pop(),o}return n instanceof Promise?n.finally(()=>a.pop()).then(o=>P(o,o.callbacks)):(a.pop(),P(n))});return t.values=a,t.Provider=t,t[Rr]=pa(a),Ie.push(t),t},Le=r=>r.values.at(-1),cr={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},Sr={},oe="data-precedence",fa=r=>r.rel==="stylesheet"&&"precedence"in r,ua=(r,a)=>r==="link"?a:cr[r].length>0,Ve=r=>Array.isArray(r)?r:[r],Ur=new WeakMap,Gr=(r,a,t,i)=>({buffer:n,context:o})=>{if(!n)return;const l=Ur.get(o)||{};Ur.set(o,l);const s=l[r]||(l[r]=[]);let c=!1;const d=cr[r],p=ua(r,i!==void 0);if(p){e:for(const[,g]of s)if(!(r==="link"&&!(g.rel==="stylesheet"&&g[oe]!==void 0))){for(const f of d)if(((g==null?void 0:g[f])??null)===(t==null?void 0:t[f])){c=!0;break e}}}if(c?n[0]=n[0].replaceAll(a,""):p||r==="link"?s.push([a,t,i]):s.unshift([a,t,i]),n[0].indexOf("</head>")!==-1){let g;if(r==="link"||i!==void 0){const f=[];g=s.map(([u,,v],b)=>{if(v===void 0)return[u,Number.MAX_SAFE_INTEGER,b];let x=f.indexOf(v);return x===-1&&(f.push(v),x=f.length-1),[u,x,b]}).sort((u,v)=>u[1]-v[1]||u[2]-v[2]).map(([u])=>u)}else g=s.map(([f])=>f);g.forEach(f=>{n[0]=n[0].replaceAll(f,"")}),n[0]=n[0].replace(/(?=<\/head>)/,g.join(""))}},Ke=(r,a,t)=>P(new H(r,t,Ve(a??[])).toString()),Xe=(r,a,t,i)=>{if("itemProp"in t)return Ke(r,a,t);let{precedence:n,blocking:o,...l}=t;n=i?n??"":void 0,i&&(l[oe]=n);const s=new H(r,l,Ve(a||[])).toString();return s instanceof Promise?s.then(c=>P(s,[...c.callbacks||[],Gr(r,c,l,n)])):P(s,[Gr(r,s,l,n)])},Ka=({children:r,...a})=>{const t=jr();if(t){const i=Le(t);if(i==="svg"||i==="head")return new H("title",a,Ve(r??[]))}return Xe("title",r,a,!1)},Xa=({children:r,...a})=>{const t=jr();return["src","async"].some(i=>!a[i])||t&&Le(t)==="head"?Ke("script",r,a):Xe("script",r,a,!1)},Wa=({children:r,...a})=>["href","precedence"].every(t=>t in a)?(a["data-href"]=a.href,delete a.href,Xe("style",r,a,!0)):Ke("style",r,a),Qa=({children:r,...a})=>["onLoad","onError"].some(t=>t in a)||a.rel==="stylesheet"&&(!("precedence"in a)||"disabled"in a)?Ke("link",r,a):Xe("link",r,a,fa(a)),Za=({children:r,...a})=>{const t=jr();return t&&Le(t)==="head"?Ke("meta",r,a):Xe("meta",r,a,!1)},va=(r,{children:a,...t})=>new H(r,t,Ve(a??[])),et=r=>(typeof r.action=="function"&&(r.action=sr in r.action?r.action[sr]:void 0),va("form",r)),ma=(r,a)=>(typeof a.formAction=="function"&&(a.formAction=sr in a.formAction?a.formAction[sr]:void 0),va(r,a)),rt=r=>ma("input",r),at=r=>ma("button",r);const vr=Object.freeze(Object.defineProperty({__proto__:null,button:at,form:et,input:rt,link:Qa,meta:Za,script:Xa,style:Wa,title:Ka},Symbol.toStringTag,{value:"Module"}));var tt=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),dr=r=>tt.get(r)||r,ba=(r,a)=>{for(const[t,i]of Object.entries(r)){const n=t[0]==="-"||!/[A-Z]/.test(t)?t:t.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`);a(n,i==null?null:typeof i=="number"?n.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${i}`:`${i}px`:i)}},Ne=void 0,jr=()=>Ne,it=r=>/[A-Z]/.test(r)&&r.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?r.replace(/([A-Z])/g,"-$1").toLowerCase():r,nt=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],ot=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Mr=(r,a)=>{for(let t=0,i=r.length;t<i;t++){const n=r[t];if(typeof n=="string")ae(n,a);else{if(typeof n=="boolean"||n===null||n===void 0)continue;n instanceof H?n.toStringToBuffer(a):typeof n=="number"||n.isEscaped?a[0]+=n:n instanceof Promise?a.unshift("",n):Mr(n,a)}}},H=class{constructor(r,a,t){m(this,"tag");m(this,"props");m(this,"key");m(this,"children");m(this,"isEscaped",!0);m(this,"localContexts");this.tag=r,this.props=a,this.children=t}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var a,t;const r=[""];(a=this.localContexts)==null||a.forEach(([i,n])=>{i.values.push(n)});try{this.toStringToBuffer(r)}finally{(t=this.localContexts)==null||t.forEach(([i])=>{i.values.pop()})}return r.length===1?"callbacks"in r?da(P(r[0],r.callbacks)).toString():r[0]:ca(r,r.callbacks)}toStringToBuffer(r){const a=this.tag,t=this.props;let{children:i}=this;r[0]+=`<${a}`;const n=Ne&&Le(Ne)==="svg"?o=>it(dr(o)):o=>dr(o);for(let[o,l]of Object.entries(t))if(o=n(o),o!=="children"){if(o==="style"&&typeof l=="object"){let s="";ba(l,(c,d)=>{d!=null&&(s+=`${s?";":""}${c}:${d}`)}),r[0]+=' style="',ae(s,r),r[0]+='"'}else if(typeof l=="string")r[0]+=` ${o}="`,ae(l,r),r[0]+='"';else if(l!=null)if(typeof l=="number"||l.isEscaped)r[0]+=` ${o}="${l}"`;else if(typeof l=="boolean"&&ot.includes(o))l&&(r[0]+=` ${o}=""`);else if(o==="dangerouslySetInnerHTML"){if(i.length>0)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");i=[P(l.__html)]}else if(l instanceof Promise)r[0]+=` ${o}="`,r.unshift('"',l);else if(typeof l=="function"){if(!o.startsWith("on")&&o!=="ref")throw new Error(`Invalid prop '${o}' of type 'function' supplied to '${a}'.`)}else r[0]+=` ${o}="`,ae(l.toString(),r),r[0]+='"'}if(nt.includes(a)&&i.length===0){r[0]+="/>";return}r[0]+=">",Mr(i,r),r[0]+=`</${a}>`}},mr=class extends H{toStringToBuffer(r){const{children:a}=this,t={...this.props};a.length&&(t.children=a.length===1?a[0]:a);const i=this.tag.call(null,t);if(!(typeof i=="boolean"||i==null))if(i instanceof Promise)if(Ie.length===0)r.unshift("",i);else{const n=Ie.map(o=>[o,o.values.at(-1)]);r.unshift("",i.then(o=>(o instanceof H&&(o.localContexts=n),o)))}else i instanceof H?i.toStringToBuffer(r):typeof i=="number"||i.isEscaped?(r[0]+=i,i.callbacks&&(r.callbacks||(r.callbacks=[]),r.callbacks.push(...i.callbacks))):ae(i,r)}},xa=class extends H{toStringToBuffer(r){Mr(this.children,r)}},Fr=(r,a,...t)=>{a??(a={}),t.length&&(a.children=t.length===1?t[0]:t);const i=a.key;delete a.key;const n=rr(r,a,t);return n.key=i,n},Br=!1,rr=(r,a,t)=>{if(!Br){for(const i in Sr)vr[i][Rr]=Sr[i];Br=!0}return typeof r=="function"?new mr(r,a,t):vr[r]?new mr(vr[r],a,t):r==="svg"||r==="head"?(Ne||(Ne=Lr("")),new H(r,a,[new mr(Ne,{value:r},t)])):new H(r,a,t)},ge=({children:r})=>new xa("",{children:r},Array.isArray(r)?r:r?[r]:[]);function e(r,a,t){let i;if(!a||!("children"in a))i=rr(r,a,[]);else{const n=a.children;i=Array.isArray(n)?rr(r,a,n):rr(r,a,[n])}return i.key=t,i}var Jr=(r,a,t)=>(i,n)=>{let o=-1;return l(0);async function l(s){if(s<=o)throw new Error("next() called multiple times");o=s;let c,d=!1,p;if(r[s]?(p=r[s][0][0],i.req.routeIndex=s):p=s===r.length&&n||void 0,p)try{c=await p(i,()=>l(s+1))}catch(g){if(g instanceof Error&&a)i.error=g,c=await a(g,i),d=!0;else throw g}else i.finalized===!1&&t&&(c=await t(i));return c&&(i.finalized===!1||d)&&(i.res=c),i}},lt=Symbol(),st=async(r,a=Object.create(null))=>{const{all:t=!1,dot:i=!1}=a,o=(r instanceof Aa?r.raw.headers:r.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?ct(r,{all:t,dot:i}):{}};async function ct(r,a){const t=await r.formData();return t?dt(t,a):{}}function dt(r,a){const t=Object.create(null);return r.forEach((i,n)=>{a.all||n.endsWith("[]")?ht(t,n,i):t[n]=i}),a.dot&&Object.entries(t).forEach(([i,n])=>{i.includes(".")&&(pt(t,i,n),delete t[i])}),t}var ht=(r,a,t)=>{r[a]!==void 0?Array.isArray(r[a])?r[a].push(t):r[a]=[r[a],t]:a.endsWith("[]")?r[a]=[t]:r[a]=t},pt=(r,a,t)=>{if(/(?:^|\.)__proto__\./.test(a))return;let i=r;const n=a.split(".");n.forEach((o,l)=>{l===n.length-1?i[o]=t:((!i[o]||typeof i[o]!="object"||Array.isArray(i[o])||i[o]instanceof File)&&(i[o]=Object.create(null)),i=i[o])})},ya=r=>{const a=r.split("/");return a[0]===""&&a.shift(),a},gt=r=>{const{groups:a,path:t}=ft(r),i=ya(t);return ut(i,a)},ft=r=>{const a=[];return r=r.replace(/\{[^}]+\}/g,(t,i)=>{const n=`@${i}`;return a.push([n,t]),n}),{groups:a,path:r}},ut=(r,a)=>{for(let t=a.length-1;t>=0;t--){const[i]=a[t];for(let n=r.length-1;n>=0;n--)if(r[n].includes(i)){r[n]=r[n].replace(i,a[t][1]);break}}return r},Ze={},vt=(r,a)=>{if(r==="*")return"*";const t=r.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(t){const i=`${r}#${a}`;return Ze[i]||(t[2]?Ze[i]=a&&a[0]!==":"&&a[0]!=="*"?[i,t[1],new RegExp(`^${t[2]}(?=/${a})`)]:[r,t[1],new RegExp(`^${t[2]}$`)]:Ze[i]=[r,t[1],!0]),Ze[i]}return null},Or=(r,a)=>{try{return a(r)}catch{return r.replace(/(?:%[0-9A-Fa-f]{2})+/g,t=>{try{return a(t)}catch{return t}})}},mt=r=>Or(r,decodeURI),wa=r=>{const a=r.url,t=a.indexOf("/",a.indexOf(":")+4);let i=t;for(;i<a.length;i++){const n=a.charCodeAt(i);if(n===37){const o=a.indexOf("?",i),l=a.indexOf("#",i),s=o===-1?l===-1?void 0:l:l===-1?o:Math.min(o,l),c=a.slice(t,s);return mt(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(n===63||n===35)break}return a.slice(t,i)},bt=r=>{const a=wa(r);return a.length>1&&a.at(-1)==="/"?a.slice(0,-1):a},be=(r,a,...t)=>(t.length&&(a=be(a,...t)),`${(r==null?void 0:r[0])==="/"?"":"/"}${r}${a==="/"?"":`${(r==null?void 0:r.at(-1))==="/"?"":"/"}${(a==null?void 0:a[0])==="/"?a.slice(1):a}`}`),ka=r=>{if(r.charCodeAt(r.length-1)!==63||!r.includes(":"))return null;const a=r.split("/"),t=[];let i="";return a.forEach(n=>{if(n!==""&&!/\:/.test(n))i+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){t.length===0&&i===""?t.push("/"):t.push(i);const o=n.replace("?","");i+="/"+o,t.push(i)}else i+="/"+n}),t.filter((n,o,l)=>l.indexOf(n)===o)},br=r=>/[%+]/.test(r)?(r.indexOf("+")!==-1&&(r=r.replace(/\+/g," ")),r.indexOf("%")!==-1?Or(r,qa):r):r,Ea=(r,a,t)=>{let i;if(!t&&a&&!/[%+]/.test(a)){let l=r.indexOf("?",8);if(l===-1)return;for(r.startsWith(a,l+1)||(l=r.indexOf(`&${a}`,l+1));l!==-1;){const s=r.charCodeAt(l+a.length+1);if(s===61){const c=l+a.length+2,d=r.indexOf("&",c);return br(r.slice(c,d===-1?void 0:d))}else if(s==38||isNaN(s))return"";l=r.indexOf(`&${a}`,l+1)}if(i=/[%+]/.test(r),!i)return}const n={};i??(i=/[%+]/.test(r));let o=r.indexOf("?",8);for(;o!==-1;){const l=r.indexOf("&",o+1);let s=r.indexOf("=",o);s>l&&l!==-1&&(s=-1);let c=r.slice(o+1,s===-1?l===-1?void 0:l:s);if(i&&(c=br(c)),o=l,c==="")continue;let d;s===-1?d="":(d=r.slice(s+1,l===-1?void 0:l),i&&(d=br(d))),t?(n[c]&&Array.isArray(n[c])||(n[c]=[]),n[c].push(d)):n[c]??(n[c]=d)}return a?n[a]:n},xt=Ea,yt=(r,a)=>Ea(r,a,!0),qa=decodeURIComponent,_r=r=>Or(r,qa),ke,D,K,Sa,Ca,Cr,X,ta,Aa=(ta=class{constructor(r,a="/",t=[[]]){w(this,K);m(this,"raw");w(this,ke);w(this,D);m(this,"routeIndex",0);m(this,"path");m(this,"bodyCache",{});w(this,X,r=>{const{bodyCache:a,raw:t}=this,i=a[r];if(i)return i;const n=Object.keys(a)[0];return n?a[n].then(o=>(n==="json"&&(o=JSON.stringify(o)),new Response(o)[r]())):a[r]=t[r]()});this.raw=r,this.path=a,y(this,D,t),y(this,ke,{})}param(r){return r?A(this,K,Sa).call(this,r):A(this,K,Ca).call(this)}query(r){return xt(this.url,r)}queries(r){return yt(this.url,r)}header(r){if(r)return this.raw.headers.get(r)??void 0;const a={};return this.raw.headers.forEach((t,i)=>{a[i]=t}),a}async parseBody(r){var a;return(a=this.bodyCache).parsedBody??(a.parsedBody=await st(this,r))}json(){return h(this,X).call(this,"text").then(r=>JSON.parse(r))}text(){return h(this,X).call(this,"text")}arrayBuffer(){return h(this,X).call(this,"arrayBuffer")}blob(){return h(this,X).call(this,"blob")}formData(){return h(this,X).call(this,"formData")}addValidatedData(r,a){h(this,ke)[r]=a}valid(r){return h(this,ke)[r]}get url(){return this.raw.url}get method(){return this.raw.method}get[lt](){return h(this,D)}get matchedRoutes(){return h(this,D)[0].map(([[,r]])=>r)}get routePath(){return h(this,D)[0].map(([[,r]])=>r)[this.routeIndex].path}},ke=new WeakMap,D=new WeakMap,K=new WeakSet,Sa=function(r){const a=h(this,D)[0][this.routeIndex][1][r],t=A(this,K,Cr).call(this,a);return t&&/\%/.test(t)?_r(t):t},Ca=function(){const r={},a=Object.keys(h(this,D)[0][this.routeIndex][1]);for(const t of a){const i=A(this,K,Cr).call(this,h(this,D)[0][this.routeIndex][1][t]);i!==void 0&&(r[t]=/\%/.test(i)?_r(i):i)}return r},Cr=function(r){return h(this,D)[1]?h(this,D)[1][r]:r},X=new WeakMap,ta),wt="text/plain; charset=UTF-8",xr=(r,a)=>({"Content-Type":r,...a}),Oe=(r,a)=>new Response(r,a),Fe,Be,_,Ee,Y,T,Je,qe,Ae,le,_e,Ye,W,xe,ia,kt=(ia=class{constructor(r,a){w(this,W);w(this,Fe);w(this,Be);m(this,"env",{});w(this,_);m(this,"finalized",!1);m(this,"error");w(this,Ee);w(this,Y);w(this,T);w(this,Je);w(this,qe);w(this,Ae);w(this,le);w(this,_e);w(this,Ye);m(this,"render",(...r)=>(h(this,qe)??y(this,qe,a=>this.html(a)),h(this,qe).call(this,...r)));m(this,"setLayout",r=>y(this,Je,r));m(this,"getLayout",()=>h(this,Je));m(this,"setRenderer",r=>{y(this,qe,r)});m(this,"header",(r,a,t)=>{this.finalized&&y(this,T,Oe(h(this,T).body,h(this,T)));const i=h(this,T)?h(this,T).headers:h(this,le)??y(this,le,new Headers);a===void 0?i.delete(r):t!=null&&t.append?i.append(r,a):i.set(r,a)});m(this,"status",r=>{y(this,Ee,r)});m(this,"set",(r,a)=>{h(this,_)??y(this,_,new Map),h(this,_).set(r,a)});m(this,"get",r=>h(this,_)?h(this,_).get(r):void 0);m(this,"newResponse",(...r)=>A(this,W,xe).call(this,...r));m(this,"body",(r,a,t)=>A(this,W,xe).call(this,r,a,t));m(this,"text",(r,a,t)=>!h(this,le)&&!h(this,Ee)&&!a&&!t&&!this.finalized?new Response(r):A(this,W,xe).call(this,r,a,xr(wt,t)));m(this,"json",(r,a,t)=>A(this,W,xe).call(this,JSON.stringify(r),a,xr("application/json",t)));m(this,"html",(r,a,t)=>{const i=n=>A(this,W,xe).call(this,n,a,xr("text/html; charset=UTF-8",t));return typeof r=="object"?lr(r,we.Stringify,!1,{}).then(i):i(r)});m(this,"redirect",(r,a)=>{const t=String(r);return this.header("Location",/[^\x00-\xFF]/.test(t)?encodeURI(t):t),this.newResponse(null,a??302)});m(this,"notFound",()=>(h(this,Ae)??y(this,Ae,()=>Oe()),h(this,Ae).call(this,this)));y(this,Fe,r),a&&(y(this,Y,a.executionCtx),this.env=a.env,y(this,Ae,a.notFoundHandler),y(this,Ye,a.path),y(this,_e,a.matchResult))}get req(){return h(this,Be)??y(this,Be,new Aa(h(this,Fe),h(this,Ye),h(this,_e))),h(this,Be)}get event(){if(h(this,Y)&&"respondWith"in h(this,Y))return h(this,Y);throw Error("This context has no FetchEvent")}get executionCtx(){if(h(this,Y))return h(this,Y);throw Error("This context has no ExecutionContext")}get res(){return h(this,T)||y(this,T,Oe(null,{headers:h(this,le)??y(this,le,new Headers)}))}set res(r){if(h(this,T)&&r){r=Oe(r.body,r);for(const[a,t]of h(this,T).headers.entries())if(a!=="content-type")if(a==="set-cookie"){const i=h(this,T).headers.getSetCookie();r.headers.delete("set-cookie");for(const n of i)r.headers.append("set-cookie",n)}else r.headers.set(a,t)}y(this,T,r),this.finalized=!0}get var(){return h(this,_)?Object.fromEntries(h(this,_)):{}}},Fe=new WeakMap,Be=new WeakMap,_=new WeakMap,Ee=new WeakMap,Y=new WeakMap,T=new WeakMap,Je=new WeakMap,qe=new WeakMap,Ae=new WeakMap,le=new WeakMap,_e=new WeakMap,Ye=new WeakMap,W=new WeakSet,xe=function(r,a,t){const i=h(this,T)?new Headers(h(this,T).headers):h(this,le)??new Headers;if(typeof a=="object"&&"headers"in a){const o=a.headers instanceof Headers?a.headers:new Headers(a.headers);for(const[l,s]of o)l.toLowerCase()==="set-cookie"?i.append(l,s):i.set(l,s)}if(t)for(const[o,l]of Object.entries(t))if(typeof l=="string")i.set(o,l);else{i.delete(o);for(const s of l)i.append(o,s)}const n=typeof a=="number"?a:(a==null?void 0:a.status)??h(this,Ee);return Oe(r,{status:n,headers:i})},ia),R="ALL",Et="all",qt=["get","post","put","delete","options","patch"],za="Can not add a route since the matcher is already built.",Ia=class extends Error{},At="__COMPOSED_HANDLER",St=r=>r.text("404 Not Found",404),Yr=(r,a)=>{if("getResponse"in r){const t=r.getResponse();return a.newResponse(t.body,t)}return console.error(r),a.text("Internal Server Error",500)},N,L,Ra,U,ie,ar,tr,Se,Ct=(Se=class{constructor(a={}){w(this,L);m(this,"get");m(this,"post");m(this,"put");m(this,"delete");m(this,"options");m(this,"patch");m(this,"all");m(this,"on");m(this,"use");m(this,"router");m(this,"getPath");m(this,"_basePath","/");w(this,N,"/");m(this,"routes",[]);w(this,U,St);m(this,"errorHandler",Yr);m(this,"onError",a=>(this.errorHandler=a,this));m(this,"notFound",a=>(y(this,U,a),this));m(this,"fetch",(a,...t)=>A(this,L,tr).call(this,a,t[1],t[0],a.method));m(this,"request",(a,t,i,n)=>a instanceof Request?this.fetch(t?new Request(a,t):a,i,n):(a=a.toString(),this.fetch(new Request(/^https?:\/\//.test(a)?a:`http://localhost${be("/",a)}`,t),i,n)));m(this,"fire",()=>{addEventListener("fetch",a=>{a.respondWith(A(this,L,tr).call(this,a.request,a,void 0,a.request.method))})});[...qt,Et].forEach(o=>{this[o]=(l,...s)=>(typeof l=="string"?y(this,N,l):A(this,L,ie).call(this,o,h(this,N),l),s.forEach(c=>{A(this,L,ie).call(this,o,h(this,N),c)}),this)}),this.on=(o,l,...s)=>{for(const c of[l].flat()){y(this,N,c);for(const d of[o].flat())s.map(p=>{A(this,L,ie).call(this,d.toUpperCase(),h(this,N),p)})}return this},this.use=(o,...l)=>(typeof o=="string"?y(this,N,o):(y(this,N,"*"),l.unshift(o)),l.forEach(s=>{A(this,L,ie).call(this,R,h(this,N),s)}),this);const{strict:i,...n}=a;Object.assign(this,n),this.getPath=i??!0?a.getPath??wa:bt}route(a,t){const i=this.basePath(a);return t.routes.map(n=>{var l;let o;t.errorHandler===Yr?o=n.handler:(o=async(s,c)=>(await Jr([],t.errorHandler)(s,()=>n.handler(s,c))).res,o[At]=n.handler),A(l=i,L,ie).call(l,n.method,n.path,o)}),this}basePath(a){const t=A(this,L,Ra).call(this);return t._basePath=be(this._basePath,a),t}mount(a,t,i){let n,o;i&&(typeof i=="function"?o=i:(o=i.optionHandler,i.replaceRequest===!1?n=c=>c:n=i.replaceRequest));const l=o?c=>{const d=o(c);return Array.isArray(d)?d:[d]}:c=>{let d;try{d=c.executionCtx}catch{}return[c.env,d]};n||(n=(()=>{const c=be(this._basePath,a),d=c==="/"?0:c.length;return p=>{const g=new URL(p.url);return g.pathname=g.pathname.slice(d)||"/",new Request(g,p)}})());const s=async(c,d)=>{const p=await t(n(c.req.raw),...l(c));if(p)return p;await d()};return A(this,L,ie).call(this,R,be(a,"*"),s),this}},N=new WeakMap,L=new WeakSet,Ra=function(){const a=new Se({router:this.router,getPath:this.getPath});return a.errorHandler=this.errorHandler,y(a,U,h(this,U)),a.routes=this.routes,a},U=new WeakMap,ie=function(a,t,i){a=a.toUpperCase(),t=be(this._basePath,t);const n={basePath:this._basePath,path:t,method:a,handler:i};this.router.add(a,t,[i,n]),this.routes.push(n)},ar=function(a,t){if(a instanceof Error)return this.errorHandler(a,t);throw a},tr=function(a,t,i,n){if(n==="HEAD")return(async()=>new Response(null,await A(this,L,tr).call(this,a,t,i,"GET")))();const o=this.getPath(a,{env:i}),l=this.router.match(n,o),s=new kt(a,{path:o,matchResult:l,env:i,executionCtx:t,notFoundHandler:h(this,U)});if(l[0].length===1){let d;try{d=l[0][0][0][0](s,async()=>{s.res=await h(this,U).call(this,s)})}catch(p){return A(this,L,ar).call(this,p,s)}return d instanceof Promise?d.then(p=>p||(s.finalized?s.res:h(this,U).call(this,s))).catch(p=>A(this,L,ar).call(this,p,s)):d??h(this,U).call(this,s)}const c=Jr(l[0],this.errorHandler,h(this,U));return(async()=>{try{const d=await c(s);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return A(this,L,ar).call(this,d,s)}})()},Se),La=[];function zt(r,a){const t=this.buildAllMatchers(),i=((n,o)=>{const l=t[n]||t[R],s=l[2][o];if(s)return s;const c=o.match(l[0]);if(!c)return[[],La];const d=c.indexOf("",1);return[l[1][d],c]});return this.match=i,i(r,a)}var hr="[^/]+",De=".*",He="(?:|/.*)",ye=Symbol(),It=new Set(".\\+*[^]$()");function Rt(r,a){return r.length===1?a.length===1?r<a?-1:1:-1:a.length===1||r===De||r===He?1:a===De||a===He?-1:r===hr?1:a===hr?-1:r.length===a.length?r<a?-1:1:a.length-r.length}var se,ce,G,pe,Lt=(pe=class{constructor(){w(this,se);w(this,ce);w(this,G,Object.create(null))}insert(a,t,i,n,o){if(a.length===0){if(h(this,se)!==void 0)throw ye;if(o)return;y(this,se,t);return}const[l,...s]=a,c=l==="*"?s.length===0?["","",De]:["","",hr]:l==="/*"?["","",He]:l.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(c){const p=c[1];let g=c[2]||hr;if(p&&c[2]&&(g===".*"||(g=g.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(g))))throw ye;if(d=h(this,G)[g],!d){if(Object.keys(h(this,G)).some(f=>f!==De&&f!==He))throw ye;if(o)return;d=h(this,G)[g]=new pe,p!==""&&y(d,ce,n.varIndex++)}!o&&p!==""&&i.push([p,h(d,ce)])}else if(d=h(this,G)[l],!d){if(Object.keys(h(this,G)).some(p=>p.length>1&&p!==De&&p!==He))throw ye;if(o)return;d=h(this,G)[l]=new pe}d.insert(s,t,i,n,o)}buildRegExpStr(){const t=Object.keys(h(this,G)).sort(Rt).map(i=>{const n=h(this,G)[i];return(typeof h(n,ce)=="number"?`(${i})@${h(n,ce)}`:It.has(i)?`\\${i}`:i)+n.buildRegExpStr()});return typeof h(this,se)=="number"&&t.unshift(`#${h(this,se)}`),t.length===0?"":t.length===1?t[0]:"(?:"+t.join("|")+")"}},se=new WeakMap,ce=new WeakMap,G=new WeakMap,pe),pr,$e,na,jt=(na=class{constructor(){w(this,pr,{varIndex:0});w(this,$e,new Lt)}insert(r,a,t){const i=[],n=[];for(let l=0;;){let s=!1;if(r=r.replace(/\{[^}]+\}/g,c=>{const d=`@\\${l}`;return n[l]=[d,c],l++,s=!0,d}),!s)break}const o=r.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let l=n.length-1;l>=0;l--){const[s]=n[l];for(let c=o.length-1;c>=0;c--)if(o[c].indexOf(s)!==-1){o[c]=o[c].replace(s,n[l][1]);break}}return h(this,$e).insert(o,a,i,h(this,pr),t),i}buildRegExp(){let r=h(this,$e).buildRegExpStr();if(r==="")return[/^$/,[],[]];let a=0;const t=[],i=[];return r=r.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,o,l)=>o!==void 0?(t[++a]=Number(o),"$()"):(l!==void 0&&(i[Number(l)]=++a),"")),[new RegExp(`^${r}`),t,i]}},pr=new WeakMap,$e=new WeakMap,na),Mt=[/^$/,[],Object.create(null)],ir=Object.create(null);function ja(r){return ir[r]??(ir[r]=new RegExp(r==="*"?"":`^${r.replace(/\/\*$|([.\\+*[^\]$()])/g,(a,t)=>t?`\\${t}`:"(?:|/.*)")}$`))}function Ot(){ir=Object.create(null)}function Tt(r){var d;const a=new jt,t=[];if(r.length===0)return Mt;const i=r.map(p=>[!/\*|\/:/.test(p[0]),...p]).sort(([p,g],[f,u])=>p?1:f?-1:g.length-u.length),n=Object.create(null);for(let p=0,g=-1,f=i.length;p<f;p++){const[u,v,b]=i[p];u?n[v]=[b.map(([E])=>[E,Object.create(null)]),La]:g++;let x;try{x=a.insert(v,g,u)}catch(E){throw E===ye?new Ia(v):E}u||(t[g]=b.map(([E,k])=>{const M=Object.create(null);for(k-=1;k>=0;k--){const[q,C]=x[k];M[q]=C}return[E,M]}))}const[o,l,s]=a.buildRegExp();for(let p=0,g=t.length;p<g;p++)for(let f=0,u=t[p].length;f<u;f++){const v=(d=t[p][f])==null?void 0:d[1];if(!v)continue;const b=Object.keys(v);for(let x=0,E=b.length;x<E;x++)v[b[x]]=s[v[b[x]]]}const c=[];for(const p in l)c[p]=t[l[p]];return[o,c,n]}function ve(r,a){if(r){for(const t of Object.keys(r).sort((i,n)=>n.length-i.length))if(ja(t).test(a))return[...r[t]]}}var Q,Z,gr,Ma,oa,Pt=(oa=class{constructor(){w(this,gr);m(this,"name","RegExpRouter");w(this,Q);w(this,Z);m(this,"match",zt);y(this,Q,{[R]:Object.create(null)}),y(this,Z,{[R]:Object.create(null)})}add(r,a,t){var s;const i=h(this,Q),n=h(this,Z);if(!i||!n)throw new Error(za);i[r]||[i,n].forEach(c=>{c[r]=Object.create(null),Object.keys(c[R]).forEach(d=>{c[r][d]=[...c[R][d]]})}),a==="/*"&&(a="*");const o=(a.match(/\/:/g)||[]).length;if(/\*$/.test(a)){const c=ja(a);r===R?Object.keys(i).forEach(d=>{var p;(p=i[d])[a]||(p[a]=ve(i[d],a)||ve(i[R],a)||[])}):(s=i[r])[a]||(s[a]=ve(i[r],a)||ve(i[R],a)||[]),Object.keys(i).forEach(d=>{(r===R||r===d)&&Object.keys(i[d]).forEach(p=>{c.test(p)&&i[d][p].push([t,o])})}),Object.keys(n).forEach(d=>{(r===R||r===d)&&Object.keys(n[d]).forEach(p=>c.test(p)&&n[d][p].push([t,o]))});return}const l=ka(a)||[a];for(let c=0,d=l.length;c<d;c++){const p=l[c];Object.keys(n).forEach(g=>{var f;(r===R||r===g)&&((f=n[g])[p]||(f[p]=[...ve(i[g],p)||ve(i[R],p)||[]]),n[g][p].push([t,o-d+c+1]))})}}buildAllMatchers(){const r=Object.create(null);return Object.keys(h(this,Z)).concat(Object.keys(h(this,Q))).forEach(a=>{r[a]||(r[a]=A(this,gr,Ma).call(this,a))}),y(this,Q,y(this,Z,void 0)),Ot(),r}},Q=new WeakMap,Z=new WeakMap,gr=new WeakSet,Ma=function(r){const a=[];let t=r===R;return[h(this,Q),h(this,Z)].forEach(i=>{const n=i[r]?Object.keys(i[r]).map(o=>[o,i[r][o]]):[];n.length!==0?(t||(t=!0),a.push(...n)):r!==R&&a.push(...Object.keys(i[R]).map(o=>[o,i[R][o]]))}),t?Tt(a):null},oa),ee,$,la,Dt=(la=class{constructor(r){m(this,"name","SmartRouter");w(this,ee,[]);w(this,$,[]);y(this,ee,r.routers)}add(r,a,t){if(!h(this,$))throw new Error(za);h(this,$).push([r,a,t])}match(r,a){if(!h(this,$))throw new Error("Fatal error");const t=h(this,ee),i=h(this,$),n=t.length;let o=0,l;for(;o<n;o++){const s=t[o];try{for(let c=0,d=i.length;c<d;c++)s.add(...i[c]);l=s.match(r,a)}catch(c){if(c instanceof Ia)continue;throw c}this.match=s.match.bind(s),y(this,ee,[s]),y(this,$,void 0);break}if(o===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,l}get activeRouter(){if(h(this,$)||h(this,ee).length!==1)throw new Error("No active router has been determined yet.");return h(this,ee)[0]}},ee=new WeakMap,$=new WeakMap,la),Te=Object.create(null),Ht=r=>{for(const a in r)return!0;return!1},re,O,de,Ce,j,V,ne,ze,Nt=(ze=class{constructor(a,t,i){w(this,V);w(this,re);w(this,O);w(this,de);w(this,Ce,0);w(this,j,Te);if(y(this,O,i||Object.create(null)),y(this,re,[]),a&&t){const n=Object.create(null);n[a]={handler:t,possibleKeys:[],score:0},y(this,re,[n])}y(this,de,[])}insert(a,t,i){y(this,Ce,++Hr(this,Ce)._);let n=this;const o=gt(t),l=[];for(let s=0,c=o.length;s<c;s++){const d=o[s],p=o[s+1],g=vt(d,p),f=Array.isArray(g)?g[0]:d;if(f in h(n,O)){n=h(n,O)[f],g&&l.push(g[1]);continue}h(n,O)[f]=new ze,g&&(h(n,de).push(g),l.push(g[1])),n=h(n,O)[f]}return h(n,re).push({[a]:{handler:i,possibleKeys:l.filter((s,c,d)=>d.indexOf(s)===c),score:h(this,Ce)}}),n}search(a,t){var p;const i=[];y(this,j,Te);let o=[this];const l=ya(t),s=[],c=l.length;let d=null;for(let g=0;g<c;g++){const f=l[g],u=g===c-1,v=[];for(let x=0,E=o.length;x<E;x++){const k=o[x],M=h(k,O)[f];M&&(y(M,j,h(k,j)),u?(h(M,O)["*"]&&A(this,V,ne).call(this,i,h(M,O)["*"],a,h(k,j)),A(this,V,ne).call(this,i,M,a,h(k,j))):v.push(M));for(let q=0,C=h(k,de).length;q<C;q++){const S=h(k,de)[q],z=h(k,j)===Te?{}:{...h(k,j)};if(S==="*"){const fe=h(k,O)["*"];fe&&(A(this,V,ne).call(this,i,fe,a,h(k,j)),y(fe,j,z),v.push(fe));continue}const[F,Qe,je]=S;if(!f&&!(je instanceof RegExp))continue;const B=h(k,O)[F];if(je instanceof RegExp){if(d===null){d=new Array(c);let ue=t[0]==="/"?1:0;for(let Me=0;Me<c;Me++)d[Me]=ue,ue+=l[Me].length+1}const fe=t.substring(d[g]),fr=je.exec(fe);if(fr){if(z[Qe]=fr[0],A(this,V,ne).call(this,i,B,a,h(k,j),z),Ht(h(B,O))){y(B,j,z);const ue=((p=fr[0].match(/\//))==null?void 0:p.length)??0;(s[ue]||(s[ue]=[])).push(B)}continue}}(je===!0||je.test(f))&&(z[Qe]=f,u?(A(this,V,ne).call(this,i,B,a,z,h(k,j)),h(B,O)["*"]&&A(this,V,ne).call(this,i,h(B,O)["*"],a,z,h(k,j))):(y(B,j,z),v.push(B)))}}const b=s.shift();o=b?v.concat(b):v}return i.length>1&&i.sort((g,f)=>g.score-f.score),[i.map(({handler:g,params:f})=>[g,f])]}},re=new WeakMap,O=new WeakMap,de=new WeakMap,Ce=new WeakMap,j=new WeakMap,V=new WeakSet,ne=function(a,t,i,n,o){for(let l=0,s=h(t,re).length;l<s;l++){const c=h(t,re)[l],d=c[i]||c[R],p={};if(d!==void 0&&(d.params=Object.create(null),a.push(d),n!==Te||o&&o!==Te))for(let g=0,f=d.possibleKeys.length;g<f;g++){const u=d.possibleKeys[g],v=p[d.score];d.params[u]=o!=null&&o[u]&&!v?o[u]:n[u]??(o==null?void 0:o[u]),p[d.score]=!0}}},ze),he,sa,Ut=(sa=class{constructor(){m(this,"name","TrieRouter");w(this,he);y(this,he,new Nt)}add(r,a,t){const i=ka(a);if(i){for(let n=0,o=i.length;n<o;n++)h(this,he).insert(r,i[n],t);return}h(this,he).insert(r,a,t)}match(r,a){return h(this,he).search(r,a)}},he=new WeakMap,sa),Oa=class extends Ct{constructor(r={}){super(r),this.router=r.router??new Dt({routers:[new Pt,new Ut]})}},Ue="_hp",Gt={Change:"Input",DoubleClick:"DblClick"},Ft={svg:"2000/svg",math:"1998/Math/MathML"},Ge=[],zr=new WeakMap,Re=void 0,Bt=()=>Re,J=r=>"t"in r,yr={onClick:["click",!1]},$r=r=>{if(!r.startsWith("on"))return;if(yr[r])return yr[r];const a=r.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(a){const[,t,i]=a;return yr[r]=[(Gt[t]||t).toLowerCase(),!!i]}},Vr=(r,a)=>Re&&r instanceof SVGElement&&/[A-Z]/.test(a)&&(a in r.style||a.match(/^(?:o|pai|str|u|ve)/))?a.replace(/([A-Z])/g,"-$1").toLowerCase():a,Jt=(r,a,t)=>{var i;a||(a={});for(let n in a){const o=a[n];if(n!=="children"&&(!t||t[n]!==o)){n=dr(n);const l=$r(n);if(l){if((t==null?void 0:t[n])!==o&&(t&&r.removeEventListener(l[0],t[n],l[1]),o!=null)){if(typeof o!="function")throw new Error(`Event handler for "${n}" is not a function`);r.addEventListener(l[0],o,l[1])}}else if(n==="dangerouslySetInnerHTML"&&o)r.innerHTML=o.__html;else if(n==="ref"){let s;typeof o=="function"?s=o(r)||(()=>o(null)):o&&"current"in o&&(o.current=r,s=()=>o.current=null),zr.set(r,s)}else if(n==="style"){const s=r.style;typeof o=="string"?s.cssText=o:(s.cssText="",o!=null&&ba(o,s.setProperty.bind(s)))}else{if(n==="value"){const c=r.nodeName;if(c==="INPUT"||c==="TEXTAREA"||c==="SELECT"){if(r.value=o==null||o===!1?null:o,c==="TEXTAREA"){r.textContent=o;continue}else if(c==="SELECT"){r.selectedIndex===-1&&(r.selectedIndex=0);continue}}}else(n==="checked"&&r.nodeName==="INPUT"||n==="selected"&&r.nodeName==="OPTION")&&(r[n]=o);const s=Vr(r,n);o==null||o===!1?r.removeAttribute(s):o===!0?r.setAttribute(s,""):typeof o=="string"||typeof o=="number"?r.setAttribute(s,o):r.setAttribute(s,o.toString())}}}if(t)for(let n in t){const o=t[n];if(n!=="children"&&!(n in a)){n=dr(n);const l=$r(n);l?r.removeEventListener(l[0],o,l[1]):n==="ref"?(i=zr.get(r))==null||i():r.removeAttribute(Vr(r,n))}}},_t=(r,a)=>{a[I][0]=0,Ge.push([r,a]);const t=a.tag[Rr]||a.tag,i=t.defaultProps?{...t.defaultProps,...a.props}:a.props;try{return[t.call(null,i)]}finally{Ge.pop()}},Ta=(r,a,t,i,n)=>{var o,l;(o=r.vR)!=null&&o.length&&(i.push(...r.vR),delete r.vR),typeof r.tag=="function"&&((l=r[I][1][Na])==null||l.forEach(s=>n.push(s))),r.vC.forEach(s=>{var c;if(J(s))t.push(s);else if(typeof s.tag=="function"||s.tag===""){s.c=a;const d=t.length;if(Ta(s,a,t,i,n),s.s){for(let p=d;p<t.length;p++)t[p].s=!0;s.s=!1}}else t.push(s),(c=s.vR)!=null&&c.length&&(i.push(...s.vR),delete s.vR)})},Yt=r=>{var a;for(;r&&(r.tag===Ue||!r.e);)r=r.tag===Ue||!((a=r.vC)!=null&&a[0])?r.nN:r.vC[0];return r==null?void 0:r.e},Pa=r=>{var a,t,i,n,o,l;J(r)||((t=(a=r[I])==null?void 0:a[1][Na])==null||t.forEach(s=>{var c;return(c=s[2])==null?void 0:c.call(s)}),(i=zr.get(r.e))==null||i(),r.p===2&&((n=r.vC)==null||n.forEach(s=>s.p=2)),(o=r.vC)==null||o.forEach(Pa)),r.p||((l=r.e)==null||l.remove(),delete r.e),typeof r.tag=="function"&&(Pe.delete(r),nr.delete(r),delete r[I][3],r.a=!0)},Da=(r,a,t)=>{r.c=a,Ha(r,a,t)},Kr=(r,a)=>{if(a){for(let t=0,i=r.length;t<i;t++)if(r[t]===a)return t}},Xr=Symbol(),Ha=(r,a,t)=>{var d;const i=[],n=[],o=[];Ta(r,a,i,n,o),n.forEach(Pa);const l=t?void 0:a.childNodes;let s,c=null;if(t)s=-1;else if(!l.length)s=0;else{const p=Kr(l,Yt(r.nN));p!==void 0?(c=l[p],s=p):s=Kr(l,(d=i.find(g=>g.tag!==Ue&&g.e))==null?void 0:d.e)??-1,s===-1&&(t=!0)}for(let p=0,g=i.length;p<g;p++,s++){const f=i[p];let u;if(f.s&&f.e)u=f.e,f.s=!1;else{const v=t||!f.e;J(f)?(f.e&&f.d&&(f.e.textContent=f.t),f.d=!1,u=f.e||(f.e=document.createTextNode(f.t))):(u=f.e||(f.e=f.n?document.createElementNS(f.n,f.tag):document.createElement(f.tag)),Jt(u,f.props,f.pP),Ha(f,u,v))}f.tag===Ue?s--:t?u.parentNode||a.appendChild(u):l[s]!==u&&l[s-1]!==u&&(l[s+1]===u?a.appendChild(l[s]):a.insertBefore(u,c||l[s]||null))}if(r.pP&&(r.pP=void 0),o.length){const p=[],g=[];o.forEach(([,f,,u,v])=>{f&&p.push(f),u&&g.push(u),v==null||v()}),p.forEach(f=>f()),g.length&&requestAnimationFrame(()=>{g.forEach(f=>f())})}},$t=(r,a)=>!!(r&&r.length===a.length&&r.every((t,i)=>t[1]===a[i][1])),nr=new WeakMap,Ir=(r,a,t)=>{var o,l,s,c,d,p;const i=!t&&a.pC;t&&(a.pC||(a.pC=a.vC));let n;try{t||(t=typeof a.tag=="function"?_t(r,a):Ve(a.props.children)),((o=t[0])==null?void 0:o.tag)===""&&t[0][Ar]&&(n=t[0][Ar],r[5].push([r,n,a]));const g=i?[...a.pC]:a.vC?[...a.vC]:void 0,f=[];let u;for(let v=0;v<t.length;v++){if(Array.isArray(t[v])){t.splice(v,1,...t[v].flat(1/0)),v--;continue}let b=Vt(t[v]);if(b){typeof b.tag=="function"&&!b.tag[ha]&&(Ie.length>0&&(b[I][2]=Ie.map(E=>[E,E.values.at(-1)])),(l=r[5])!=null&&l.length&&(b[I][3]=r[5].at(-1)));let x;if(g&&g.length){const E=g.findIndex(J(b)?k=>J(k):b.key!==void 0?k=>k.key===b.key&&k.tag===b.tag:k=>k.tag===b.tag);E!==-1&&(x=g[E],g.splice(E,1))}if(x)if(J(b))x.t!==b.t&&(x.t=b.t,x.d=!0),b=x;else{const E=x.pP=x.props;if(x.props=b.props,x.f||(x.f=b.f||a.f),typeof b.tag=="function"){const k=x[I][2];x[I][2]=b[I][2]||[],x[I][3]=b[I][3],!x.f&&((x.o||x)===b.o||(c=(s=x.tag)[Va])!=null&&c.call(s,E,x.props))&&$t(k,x[I][2])&&(x.s=!0)}b=x}else if(!J(b)&&Re){const E=Le(Re);E&&(b.n=E)}if(!J(b)&&!b.s&&(Ir(r,b),delete b.f),f.push(b),u&&!u.s&&!b.s)for(let E=u;E&&!J(E);E=(d=E.vC)==null?void 0:d.at(-1))E.nN=b;u=b}}a.vR=i?[...a.vC,...g||[]]:g||[],a.vC=f,i&&delete a.pC}catch(g){if(a.f=!0,g===Xr){if(n)return;throw g}const[f,u,v]=((p=a[I])==null?void 0:p[3])||[];if(u){const b=()=>or([0,!1,r[2]],v),x=nr.get(v)||[];x.push(b),nr.set(v,x);const E=u(g,()=>{const k=nr.get(v);if(k){const M=k.indexOf(b);if(M!==-1)return k.splice(M,1),b()}});if(E){if(r[0]===1)r[1]=!0;else if(Ir(r,v,[E]),(u.length===1||r!==f)&&v.c){Da(v,v.c,!1);return}throw Xr}}throw g}finally{n&&r[5].pop()}},Vt=r=>{if(!(r==null||typeof r=="boolean")){if(typeof r=="string"||typeof r=="number")return{t:r.toString(),d:!0};if("vR"in r&&(r={tag:r.tag,props:r.props,key:r.key,f:r.f,type:r.tag,ref:r.props.ref,o:r.o||r}),typeof r.tag=="function")r[I]=[0,[]];else{const a=Ft[r.tag];a&&(Re||(Re=ga("")),r.props.children=[{tag:Re,props:{value:r.n=`http://www.w3.org/${a}`,children:r.props.children}}])}return r}},Wr=(r,a)=>{var t,i;(t=a[I][2])==null||t.forEach(([n,o])=>{n.values.push(o)});try{Ir(r,a,void 0)}catch{return}if(a.a){delete a.a;return}(i=a[I][2])==null||i.forEach(([n])=>{n.values.pop()}),(r[0]!==1||!r[1])&&Da(a,a.c,!1)},Pe=new WeakMap,Qr=[],or=async(r,a)=>{r[5]||(r[5]=[]);const t=Pe.get(a);t&&t[0](void 0);let i;const n=new Promise(o=>i=o);if(Pe.set(a,[i,()=>{r[2]?r[2](r,a,o=>{Wr(o,a)}).then(()=>i(a)):(Wr(r,a),i(a))}]),Qr.length)Qr.at(-1).add(a);else{await Promise.resolve();const o=Pe.get(a);o&&(Pe.delete(a),o[1]())}return n},Kt=(r,a,t)=>({tag:Ue,props:{children:r},key:t,e:a,p:1}),wr=0,Na=1,kr=2,Er=3,qr=new WeakMap,Ua=(r,a)=>!r||!a||r.length!==a.length||a.some((t,i)=>t!==r[i]),Xt=void 0,Zr=[],Wt=r=>{var l;const a=()=>typeof r=="function"?r():r,t=Ge.at(-1);if(!t)return[a(),()=>{}];const[,i]=t,n=(l=i[I][1])[wr]||(l[wr]=[]),o=i[I][0]++;return n[o]||(n[o]=[a(),s=>{const c=Xt,d=n[o];if(typeof s=="function"&&(s=s(d[0])),!Object.is(s,d[0]))if(d[0]=s,Zr.length){const[p,g]=Zr.at(-1);Promise.all([p===3?i:or([p,!1,c],i),g]).then(([f])=>{if(!f||!(p===2||p===3))return;const u=f.vC;requestAnimationFrame(()=>{setTimeout(()=>{u===f.vC&&or([p===3?1:0,!1,c],f)})})})}else or([0,!1,c],i)}])},Tr=(r,a)=>{var s;const t=Ge.at(-1);if(!t)return r;const[,i]=t,n=(s=i[I][1])[kr]||(s[kr]=[]),o=i[I][0]++,l=n[o];return Ua(l==null?void 0:l[1],a)?n[o]=[r,a]:r=n[o][0],r},Qt=r=>{const a=qr.get(r);if(a){if(a.length===2)throw a[1];return a[0]}throw r.then(t=>qr.set(r,[t]),t=>qr.set(r,[void 0,t])),r},Zt=(r,a)=>{var s;const t=Ge.at(-1);if(!t)return r();const[,i]=t,n=(s=i[I][1])[Er]||(s[Er]=[]),o=i[I][0]++,l=n[o];return Ua(l==null?void 0:l[1],a)&&(n[o]=[r(),a]),n[o][0]},ei=ga({pending:!1,data:null,method:null,action:null}),ea=new Set,ri=r=>{ea.add(r),r.finally(()=>ea.delete(r))},Pr=(r,a)=>Zt(()=>t=>{let i;r&&(typeof r=="function"?i=r(t)||(()=>{r(null)}):r&&"current"in r&&(r.current=t,i=()=>{r.current=null}));const n=a(t);return()=>{n==null||n(),i==null||i()}},[r]),me=Object.create(null),er=Object.create(null),We=(r,a,t,i,n)=>{if(a!=null&&a.itemProp)return{tag:r,props:a,type:r,ref:a.ref};const o=document.head;let{onLoad:l,onError:s,precedence:c,blocking:d,...p}=a,g=null,f=!1;const u=cr[r],v=ua(r,i),b=q=>q.getAttribute("rel")==="stylesheet"&&q.getAttribute(oe)!==null;let x;if(v){const q=o.querySelectorAll(r);e:for(const C of q)if(!(r==="link"&&!b(C))){for(const S of u)if(C.getAttribute(S)===a[S]){g=C;break e}}if(!g){const C=u.reduce((S,z)=>a[z]===void 0?S:`${S}-${z}-${a[z]}`,r);f=!er[C],g=er[C]||(er[C]=(()=>{const S=document.createElement(r);for(const z of u)a[z]!==void 0&&S.setAttribute(z,a[z]);return a.rel&&S.setAttribute("rel",a.rel),S})())}}else x=o.querySelectorAll(r);c=i?c??"":void 0,i&&(p[oe]=c);const E=Tr(q=>{if(v){if(r==="link"&&c!==void 0){let S=!1;for(const z of o.querySelectorAll(r)){const F=z.getAttribute(oe);if(F===null){o.insertBefore(q,z);return}if(S&&F!==c){o.insertBefore(q,z);return}F===c&&(S=!0)}o.appendChild(q);return}let C=!1;for(const S of o.querySelectorAll(r)){if(C&&S.getAttribute(oe)!==c){o.insertBefore(q,S);return}S.getAttribute(oe)===c&&(C=!0)}o.appendChild(q)}else if(r==="link")o.contains(q)||o.appendChild(q);else if(x){let C=!1;for(const S of x)if(S===q){C=!0;break}C||o.insertBefore(q,o.contains(x[0])?x[0]:o.querySelector(r)),x=void 0}},[v,c,r]),k=Pr(a.ref,q=>{var z;const C=u[0];if(t===2&&(q.innerHTML=""),(f||x)&&E(q),!s&&!l||!C)return;let S=me[z=q.getAttribute(C)]||(me[z]=new Promise((F,Qe)=>{q.addEventListener("load",F),q.addEventListener("error",Qe)}));l&&(S=S.then(l)),s&&(S=S.catch(s)),S.catch(()=>{})});if(n&&d==="render"){const q=cr[r][0];if(q&&a[q]){const C=a[q],S=me[C]||(me[C]=new Promise((z,F)=>{E(g),g.addEventListener("load",z),g.addEventListener("error",F)}));Qt(S)}}const M={tag:r,type:r,props:{...p,ref:k},ref:k};return M.p=t,g&&(M.e=g),Kt(M,o)},ai=r=>{const a=Bt(),t=a&&Le(a);return t!=null&&t.endsWith("svg")?{tag:"title",props:r,type:"title",ref:r.ref}:We("title",r,void 0,!1,!1)},ti=r=>!r||["src","async"].some(a=>!r[a])?{tag:"script",props:r,type:"script",ref:r.ref}:We("script",r,1,!1,!0),ii=r=>!r||!["href","precedence"].every(a=>a in r)?{tag:"style",props:r,type:"style",ref:r.ref}:(r["data-href"]=r.href,delete r.href,We("style",r,2,!0,!0)),ni=r=>!r||["onLoad","onError"].some(a=>a in r)||r.rel==="stylesheet"&&(!("precedence"in r)||"disabled"in r)?{tag:"link",props:r,type:"link",ref:r.ref}:We("link",r,1,fa(r),!0),oi=r=>We("meta",r,void 0,!1,!1),Ga=Symbol(),li=r=>{const{action:a,...t}=r;typeof a!="function"&&(t.action=a);const[i,n]=Wt([null,!1]),o=Tr(async d=>{const p=d.isTrusted?a:d.detail[Ga];if(typeof p!="function")return;d.preventDefault();const g=new FormData(d.target);n([g,!0]);const f=p(g);f instanceof Promise&&(ri(f),await f),n([null,!0])},[]),l=Pr(r.ref,d=>(d.addEventListener("submit",o),()=>{d.removeEventListener("submit",o)})),[s,c]=i;return i[1]=!1,{tag:ei,props:{value:{pending:s!==null,data:s,method:s?"post":null,action:s?a:null},children:{tag:"form",props:{...t,ref:l},type:"form",ref:l}},f:c}},Fa=(r,{formAction:a,...t})=>{if(typeof a=="function"){const i=Tr(n=>{n.preventDefault(),n.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[Ga]:a}}))},[]);t.ref=Pr(t.ref,n=>(n.addEventListener("click",i),()=>{n.removeEventListener("click",i)}))}return{tag:r,props:t,type:r,ref:t.ref}},si=r=>Fa("input",r),ci=r=>Fa("button",r);Object.assign(Sr,{title:ai,script:ti,style:ii,link:ni,meta:oi,form:li,input:si,button:ci});Lr(null);var ra=new TextEncoder,di=(r,a=console.trace)=>{let t=!1;return new ReadableStream({async start(n){var o;try{r instanceof H&&(r=r.toString());const l=typeof r=="object"?r:{},s=await lr(r,we.BeforeStream,!0,l);t||n.enqueue(ra.encode(s));let c=0;const d=[],p=g=>{d.push(g.catch(f=>(console.log(f),a(f),"")).then(async f=>{var u;f=await lr(f,we.BeforeStream,!0,l),(u=f.callbacks)==null||u.map(v=>v({phase:we.Stream,context:l})).filter(Boolean).forEach(p),c++,t||n.enqueue(ra.encode(f))}))};for((o=s.callbacks)==null||o.map(g=>g({phase:we.Stream,context:l})).filter(Boolean).forEach(p);c!==d.length;)await Promise.all(d)}catch(l){a(l)}t||n.close()},cancel(){t=!0}})},hi=Lr(null),pi=(r,a,t,i)=>(n,o)=>{i=typeof i=="function"?i(r):i;const l=typeof(i==null?void 0:i.docType)=="string"?i.docType:(i==null?void 0:i.docType)===!1?"":"<!DOCTYPE html>",s=t?Fr(d=>t(d,r),{Layout:a,...o},n):n,c=$a`${P(l)}${Fr(hi.Provider,{value:r},s)}`;if(i!=null&&i.stream){if(i.stream===!0)r.header("Transfer-Encoding","chunked"),r.header("Content-Type","text/html; charset=UTF-8"),r.header("Content-Encoding","Identity");else for(const[d,p]of Object.entries(i.stream))r.header(d,p);return r.body(di(c))}else return r.html(c)},gi=(r,a)=>function(i,n){const o=i.getLayout()??ge;return r&&i.setLayout(l=>r({...l,Layout:o},i)),i.setRenderer(pi(i,o,r,a)),n()};const fi=gi(({children:r})=>e("html",{lang:"en",dir:"ltr",children:[e("head",{children:[e("meta",{charset:"UTF-8"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("title",{children:"HARLEM GROUP — Quality You Deserve!"}),e("meta",{name:"description",content:"Harlem Group — Beacon of excellence since 1995. Automotive, Real Estate, Luxury Watches & Jewellery, Management Consultation."}),e("link",{rel:"icon",type:"image/png",href:"/static/logo-black.png"}),e("link",{rel:"shortcut icon",href:"/static/logo-black.png"}),e("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),e("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""}),e("link",{href:"https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap",rel:"stylesheet"}),e("style",{dangerouslySetInnerHTML:{__html:`
/* ═══════════════════════════════════════════════
   ROOT VARIABLES — LIGHT & REFINED PALETTE
═══════════════════════════════════════════════ */
:root {
  --font:   'DM Sans', 'Helvetica Neue', Arial, sans-serif;
  --serif:  'Playfair Display', Georgia, serif;

  /* Light monochromatic palette */
  --white:      #ffffff;
  --snow:       #fafaf9;
  --pearl:      #f4f3f1;
  --silver:     #e8e7e4;
  --ash:        #d0cec9;
  --slate:      #9a9690;
  --charcoal:   #4a4844;
  --ink:        #2a2826;
  --black:      #141210;

  /* Silver accent */
  --gold:       #bebfc3;
  --gold-lt:    #d4d5d8;
  --gold-dk:    #8e8f93;
  --gold-bg:    #f2f2f3;

  /* Accent dark panels */
  --panel:      #1c1a18;
  --panel2:     #242220;

  /* Functional */
  --nav-h:  88px;
  --radius: 2px;
  --pad:    100px;
  --ease:   cubic-bezier(0.4, 0, 0.2, 1);
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ═══════════════════════════════════════════════
   RESET
═══════════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; overflow-x: hidden; }
body {
  font-family: var(--font);
  background: var(--white);
  color: var(--ink);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: none;
}
a { text-decoration: none; color: inherit; }
img { max-width: 100%; display: block; }
ul { list-style: none; }
button { cursor: none; font-family: var(--font); border: none; background: none; }

/* ═══════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════ */
#cur-ring {
  position: fixed; top: 0; left: 0; z-index: 99999;
  width: 40px; height: 40px; border-radius: 50%;
  border: 1.5px solid rgba(184,146,74,0.6);
  transform: translate(-50%,-50%);
  pointer-events: none;
  transition: width .35s var(--ease), height .35s var(--ease), border-color .35s, opacity .3s, background .3s;
  mix-blend-mode: multiply;
}
#cur-dot {
  position: fixed; top: 0; left: 0; z-index: 99999;
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--gold);
  transform: translate(-50%,-50%);
  pointer-events: none;
  transition: width .15s, height .15s, opacity .15s;
}
body.c-hover #cur-ring {
  width: 64px; height: 64px;
  border-color: var(--gold);
  background: rgba(184,146,74,0.07);
}
body.c-hover #cur-dot  { opacity: 0; }
body.c-click #cur-ring { width: 24px; height: 24px; }
@media (max-width:768px){
  #cur-ring,#cur-dot { display:none; }
  body { cursor: auto; }
  button, a { cursor: pointer; }
}

/* ═══════════════════════════════════════════════
   NOISE OVERLAY
═══════════════════════════════════════════════ */
.noise {
  position: fixed; inset: 0; z-index: 9998; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: .12;
}

/* ═══════════════════════════════════════════════
   PRELOADER
═══════════════════════════════════════════════ */
#loader {
  position: fixed; inset: 0; z-index: 99990;
  background: var(--black);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  transition: opacity .9s var(--ease), visibility .9s;
}
#loader.out { opacity: 0; visibility: hidden; }
.loader-logo {
  width: 260px; margin-bottom: 48px;
  opacity: 0; transform: translateY(24px);
  animation: loaderUp .8s .2s var(--ease) forwards;
}
.loader-slogan {
  font-family: var(--serif); font-style: italic;
  font-size: 15px; color: var(--gold); letter-spacing: 3px;
  margin-bottom: 40px; opacity: 0;
  animation: loaderUp .8s .5s var(--ease) forwards;
}
.loader-track {
  width: 200px; height: 1px; background: rgba(255,255,255,.08); overflow: hidden;
}
.loader-fill {
  height: 100%; width: 0;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  animation: loaderFill 2.4s .6s var(--ease) forwards;
}
.loader-count {
  font-size: 10px; letter-spacing: 5px; color: rgba(255,255,255,.25);
  margin-top: 18px; font-weight: 300; text-transform: uppercase;
}
@keyframes loaderUp  { to { opacity:1; transform:none; } }
@keyframes loaderFill{ to { width:100%; } }

/* ═══════════════════════════════════════════════
   FULLSCREEN MENU
═══════════════════════════════════════════════ */
#fs-menu {
  position: fixed; inset: 0; z-index: 5000;
  background: var(--black);
  clip-path: circle(0% at calc(100% - 64px) 44px);
  transition: clip-path .9s cubic-bezier(.76,0,.24,1);
  display: flex; align-items: center; justify-content: center;
  pointer-events: none; overflow: hidden;
}
#fs-menu::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 60% at 80% 20%, rgba(184,146,74,.08) 0%, transparent 60%);
  pointer-events: none;
}
#fs-menu.open {
  clip-path: circle(160% at calc(100% - 64px) 44px);
  pointer-events: all;
}
.fs-close {
  position: absolute; top: 28px; right: 52px;
  color: rgba(255,255,255,.4); font-size: 11px; letter-spacing: 4px;
  text-transform: uppercase; display: flex; align-items: center; gap: 12px;
  transition: color .3s;
}
.fs-close:hover { color: rgba(255,255,255,.9); }
.fs-close-x { font-size: 28px; font-weight: 100; line-height: 1; }
.fs-body {
  display: flex; gap: 120px; align-items: center;
}
.fs-nav { }
.fs-link {
  display: block; font-family: var(--serif);
  font-size: clamp(42px, 6.5vw, 88px); font-weight: 400; line-height: 1.15;
  color: rgba(255,255,255,.12); letter-spacing: -1px;
  opacity: 0; transform: translateY(36px);
  transition: opacity .5s, transform .5s, color .4s;
  position: relative; overflow: hidden;
}
.fs-link::after {
  content: attr(data-text);
  position: absolute; left: 0; top: 0;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  clip-path: inset(0 100% 0 0);
  transition: clip-path .5s var(--ease);
}
.fs-link:hover::after { clip-path: inset(0 0% 0 0); }
#fs-menu.open .fs-link { opacity: 1; transform: none; }
#fs-menu.open .fs-link:nth-child(1){ transition-delay:.1s; }
#fs-menu.open .fs-link:nth-child(2){ transition-delay:.16s; }
#fs-menu.open .fs-link:nth-child(3){ transition-delay:.22s; }
#fs-menu.open .fs-link:nth-child(4){ transition-delay:.28s; }
#fs-menu.open .fs-link:nth-child(5){ transition-delay:.34s; }
#fs-menu.open .fs-link:nth-child(6){ transition-delay:.40s; }
#fs-menu.open .fs-link:nth-child(7){ transition-delay:.46s; }
.fs-link:hover { color: rgba(255,255,255,.85); }
/* fs sub-links under About */
.fs-sub-group { margin-left: 4px; }
.fs-sub-link {
  display: block;
  font-size: 13px; letter-spacing: 3px; text-transform: uppercase; font-weight: 400;
  color: rgba(255,255,255,.28);
  padding: 3px 0 3px 20px;
  border-left: 1px solid rgba(184,146,74,.3);
  margin: 5px 0;
  transition: color .3s, border-color .3s, padding-left .3s;
  opacity: 0; transform: translateX(-12px);
  transition: opacity .4s, transform .4s, color .3s, border-color .3s;
}
#fs-menu.open .fs-sub-link { opacity: 1; transform: none; }
#fs-menu.open .fs-sub-link:nth-child(1){ transition-delay:.22s; }
#fs-menu.open .fs-sub-link:nth-child(2){ transition-delay:.28s; }
#fs-menu.open .fs-sub-link:nth-child(3){ transition-delay:.34s; }
.fs-sub-link:hover { color: var(--gold-lt); border-color: var(--gold); padding-left: 26px; }

.fs-sidebar {
  width: 280px; opacity: 0; transform: translateX(24px);
  transition: opacity .5s .5s, transform .5s .5s;
  border-left: 1px solid rgba(255,255,255,.08);
  padding-left: 48px;
}
#fs-menu.open .fs-sidebar { opacity: 1; transform: none; }
.fs-sidebar-lbl {
  font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
  color: var(--gold); margin-bottom: 20px;
}
.fs-sidebar-contact {
  font-size: 13.5px; line-height: 2;
  color: rgba(255,255,255,.38); font-weight: 300;
}
.fs-sidebar-contact strong { color: rgba(255,255,255,.7); font-weight: 400; }

.fs-footer {
  position: absolute; bottom: 44px; left: 52px;
  display: flex; gap: 40px; opacity: 0; transition: opacity .5s .7s;
}
#fs-menu.open .fs-footer { opacity: 1; }
.fs-footer a {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  color: rgba(255,255,255,.22); transition: color .3s;
}
.fs-footer a:hover { color: rgba(255,255,255,.7); }

/* ═══════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════ */
#nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  height: var(--nav-h); padding: 0 60px;
  display: flex; align-items: center; justify-content: space-between;
  transition: background .5s var(--ease), border-bottom-color .5s, height .4s;
  border-bottom: 1px solid transparent;
}
#nav.scrolled {
  background: rgba(255,255,255,.94);
  backdrop-filter: blur(24px) saturate(180%);
  border-bottom-color: rgba(0,0,0,.07);
  height: 72px;
  box-shadow: 0 2px 32px rgba(0,0,0,.06);
}
/* Sub-pages: dark nav always */
#nav.scrolled.nav-dark {
  background: rgba(14,12,10,.92);
  border-bottom-color: rgba(255,255,255,.06);
  box-shadow: 0 2px 32px rgba(0,0,0,.3);
}
#nav.scrolled.nav-dark .nav-logo img { filter: none; } /* white logo stays white */
#nav.scrolled.nav-dark .nav-a { color: rgba(255,255,255,.75); }
#nav.scrolled.nav-dark .nav-a:hover { color: var(--white); }
#nav.scrolled.nav-dark .nav-drop-arrow { color: rgba(255,255,255,.5); }
#nav.scrolled.nav-dark .nav-cta {
  border-color: rgba(255,255,255,.3); color: rgba(255,255,255,.85);
}
#nav.scrolled.nav-dark .nav-cta:hover { background: var(--gold); border-color: var(--gold); color: var(--white); }
#nav.scrolled.nav-dark .hamburger span { background: rgba(255,255,255,.8); }
#nav.scrolled.nav-dark .nav-dropdown {
  background: rgba(14,12,10,.96); border-color: rgba(255,255,255,.08);
}
#nav.scrolled.nav-dark .nav-drop-link { color: rgba(255,255,255,.7); }
#nav.scrolled.nav-dark .nav-drop-link:hover { color: var(--gold); }
.nav-logo {
  display: flex; align-items: center;
  flex-shrink: 0;
}
.nav-logo img {
  height: 64px;
  width: auto;
  object-fit: contain;
  transition: height .4s, filter .3s, opacity .3s;
  filter: brightness(0) invert(1);
}
#nav.scrolled .nav-logo img {
  height: 52px;
  filter: none;
}
.nav-logo img:hover { opacity: .85; }

.nav-links {
  display: flex; align-items: center; gap: 40px;
  position: absolute; left: 50%; transform: translateX(-50%);
}
.nav-a {
  font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 500;
  color: rgba(255,255,255,.65); position: relative; padding: 4px 0;
  transition: color .3s;
}
#nav.scrolled .nav-a { color: var(--charcoal); }
.nav-a::after {
  content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 1px;
  background: var(--gold); transform: scaleX(0); transform-origin: left;
  transition: transform .4s var(--ease);
}
.nav-a:hover { color: var(--ink); }
.nav-a:hover::after, .nav-a.active::after { transform: scaleX(1); }
#nav:not(.scrolled) .nav-a:hover { color: rgba(255,255,255,1); }

/* ── Nav dropdown ── */
.nav-item {
  position: relative; display: flex; align-items: center; gap: 5px;
}
.nav-item > .nav-a::before {
  content: ''; position: absolute; bottom: -28px; left: 0; right: 0; height: 28px;
  /* invisible bridge keeps dropdown open on hover gap */
}
.nav-drop-arrow {
  font-size: 8px; color: rgba(255,255,255,.4);
  transition: color .3s, transform .3s;
  pointer-events: none; line-height: 1; margin-top: 1px;
}
#nav.scrolled .nav-drop-arrow { color: var(--charcoal); }
.nav-item:hover .nav-drop-arrow { transform: rotate(180deg); color: var(--gold); }
.nav-dropdown {
  position: absolute; top: calc(100% + 20px); left: 50%; transform: translateX(-50%);
  background: var(--white);
  border: 1px solid var(--silver);
  border-top: 2px solid var(--gold);
  min-width: 180px;
  box-shadow: 0 16px 48px rgba(0,0,0,.12);
  opacity: 0; visibility: hidden; pointer-events: none;
  transform: translateX(-50%) translateY(-8px);
  transition: opacity .25s var(--ease), transform .25s var(--ease), visibility .25s;
  z-index: 200;
}
.nav-item:hover .nav-dropdown {
  opacity: 1; visibility: visible; pointer-events: all;
  transform: translateX(-50%) translateY(0);
}
.nav-drop-link {
  display: block;
  padding: 12px 20px;
  font-size: 10px; letter-spacing: 2px; text-transform: uppercase; font-weight: 500;
  color: var(--charcoal);
  transition: background .2s, color .2s, padding-left .2s;
  border-bottom: 1px solid var(--pearl);
  white-space: nowrap;
}
.nav-drop-link:last-child { border-bottom: none; }
.nav-drop-link:hover {
  background: var(--pearl); color: var(--gold-dk); padding-left: 26px;
}

.nav-right { display: flex; align-items: center; gap: 20px; }
.nav-cta {
  font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 600;
  padding: 10px 24px; border: 1px solid rgba(255,255,255,.3);
  color: rgba(255,255,255,.85); border-radius: var(--radius);
  transition: all .3s; white-space: nowrap;
}
#nav.scrolled .nav-cta {
  border-color: var(--gold);
  color: var(--gold);
}
.nav-cta:hover {
  background: var(--gold); color: var(--white) !important;
  border-color: var(--gold) !important;
}
.hamburger {
  display: flex; flex-direction: column; gap: 5.5px;
  padding: 8px; position: relative; z-index: 1;
}
.hamburger span {
  display: block; width: 24px; height: 1.5px;
  background: rgba(255,255,255,.8);
  transition: all .35s var(--ease);
}
#nav.scrolled .hamburger span { background: var(--ink); }
.hamburger:hover span { background: var(--gold) !important; }
.hamburger span:last-child { width: 16px; }
.hamburger:hover span:last-child { width: 24px; }

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
#hero {
  position: relative;
  height: 70vh; min-height: 520px;
  display: flex; align-items: flex-start;
  overflow: hidden;
  background: var(--black);
}
.hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 90% 70% at 15% 50%, rgba(184,146,74,.1) 0%, transparent 55%),
    radial-gradient(ellipse 50% 50% at 85% 30%, rgba(255,255,255,.04) 0%, transparent 50%);
}
.hero-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px);
  background-size: 80px 80px;
  animation: gridDrift 30s linear infinite;
  mask-image: radial-gradient(ellipse 95% 90% at 50% 40%, black 20%, transparent 100%);
}
@keyframes gridDrift { from{transform:translateY(0)} to{transform:translateY(80px)} }
#p-canvas { position: absolute; inset: 0; pointer-events: none; }

.hero-imgs {
  position: absolute; inset: 0;
  pointer-events: none;
  background-image: url('/static/hero-bg.png');
  background-size: 100% auto;
  background-position: center top;
  background-repeat: repeat-y;
  opacity: 1;
}
.hero-img-panel {
  display: none;
}
.hero-img-panel.show { opacity: 1; }
.hero-seam { display: none; }

.hero-inner {
  position: relative; z-index: 10;
  width: 100%; padding: 0 80px; padding-top: calc(var(--nav-h) + 32px);
}
.hero-tag {
  display: inline-flex; align-items: center; gap: 16px; margin-bottom: 32px;
  font-size: 10px; letter-spacing: 5px; text-transform: uppercase; font-weight: 600;
  color: var(--gold-lt);
  opacity: 0; animation: fadeSlideUp .9s 2.8s var(--ease) forwards;
}
.hero-tag-bar { width: 40px; height: 1px; background: var(--gold-lt); }

.hero-h1 {
  font-family: var(--serif);
  font-size: clamp(56px, 8vw, 120px);
  font-weight: 400; letter-spacing: -2px; line-height: .95;
  color: var(--white);
}
.hero-line { display: block; overflow: hidden; }
.hero-word {
  display: inline-block;
  opacity: 0; transform: translateY(110%);
  animation: wordUp 1.1s var(--ease) forwards;
}
.hero-word.w1 { animation-delay: 2.85s; }
.hero-word.w2 { animation-delay: 3.0s; }
.hero-word.w3 { animation-delay: 3.15s; font-style: italic; color: var(--gold-lt); }

.hero-row2 {
  display: flex; align-items: flex-end; justify-content: space-between;
  margin-top: 36px;
  opacity: 0; animation: fadeSlideUp 1s 3.3s var(--ease) forwards;
}
.hero-sub {
  font-family: var(--serif); font-style: italic;
  font-size: clamp(26px, 3.8vw, 52px); font-weight: 400;
  color: rgba(255,255,255,.42); letter-spacing: -1px;
}
.hero-right { max-width: 360px; text-align: right; }
.hero-desc {
  font-size: 13.5px; line-height: 1.9;
  color: rgba(255,255,255,.4); font-weight: 300;
  margin-bottom: 28px;
}
.hero-btn {
  display: inline-flex; align-items: center; gap: 14px;
  font-size: 10px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 600;
  color: var(--white); padding: 15px 34px;
  border: 1px solid rgba(255,255,255,.22); border-radius: var(--radius);
  position: relative; overflow: hidden; transition: color .4s, border-color .4s;
  margin-top: 40px;
}
.hero-btn::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  transform: translateX(-110%); transition: transform .45s var(--ease);
}
.hero-btn:hover { color: var(--black); border-color: var(--gold-lt); }
.hero-btn:hover::before { transform: none; }
.hero-btn span, .hero-btn-arr { position: relative; z-index: 1; }
.hero-btn-arr { transition: transform .3s; }
.hero-btn:hover .hero-btn-arr { transform: translateX(5px); }

.hero-scroll {
  position: absolute; bottom: 48px; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  opacity: 0; animation: fadeSlideUp 1s 3.6s forwards;
}
.hero-scroll-txt {
  font-size: 8px; letter-spacing: 5px; text-transform: uppercase;
  color: rgba(255,255,255,.28);
}
.hero-scroll-line {
  width: 1px; height: 56px;
  background: linear-gradient(to bottom, rgba(184,146,74,.5), transparent);
  animation: lineAnim 2s ease-in-out infinite;
}
@keyframes lineAnim {
  0%  { transform:scaleY(0); transform-origin:top; }
  50% { transform:scaleY(1); transform-origin:top; }
  51% { transform:scaleY(1); transform-origin:bottom; }
  100%{ transform:scaleY(0); transform-origin:bottom; }
}

/* Marquee */
.mq-wrap {
  position: absolute; bottom: 0; left: 0; right: 0;
  border-top: 1px solid rgba(255,255,255,.05); overflow: hidden;
}
.mq-track {
  display: flex; white-space: nowrap;
  animation: mqRun 36s linear infinite;
}
.mq-item {
  display: inline-flex; align-items: center; gap: 22px; padding: 16px 30px;
  font-size: 9.5px; letter-spacing: 4px; text-transform: uppercase; font-weight: 500;
  color: rgba(255,255,255,.2);
}
.mq-diamond { width: 5px; height: 5px; background: var(--gold); transform: rotate(45deg); flex-shrink: 0; opacity: .5; }
@keyframes mqRun { from{transform:translateX(0)} to{transform:translateX(-50%)} }
@keyframes fadeSlideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
@keyframes wordUp { from{opacity:0;transform:translateY(110%)} to{opacity:1;transform:none} }

/* ═══════════════════════════════════════════════
   SHARED SECTION HELPERS
═══════════════════════════════════════════════ */
.container { max-width: 1320px; margin: 0 auto; padding: 0 60px; }
.tag {
  display: inline-flex; align-items: center; gap: 14px; margin-bottom: 20px;
  font-size: 9.5px; letter-spacing: 5px; text-transform: uppercase; font-weight: 700;
  color: var(--gold);
}
.tag::before { content: ''; width: 30px; height: 1px; background: var(--gold); flex-shrink: 0; }
.tag.on-dark { color: var(--gold-lt); }
.tag.on-dark::before { background: var(--gold-lt); }

.h2 {
  font-family: var(--serif);
  font-size: clamp(36px, 4.8vw, 68px); font-weight: 400;
  letter-spacing: -1.5px; line-height: 1.05; color: var(--ink);
}
.h2 em { font-style: italic; color: var(--ash); }
.h2.light { color: var(--white); }
.h2.light em { color: rgba(255,255,255,.35); }

/* Scroll reveal */
.r  { opacity: 0; transform: translateY(38px); transition: opacity .85s var(--ease), transform .85s var(--ease); }
.r.v { opacity: 1; transform: none; }
.rl { opacity: 0; transform: translateX(-38px); transition: opacity .85s var(--ease), transform .85s var(--ease); }
.rl.v { opacity: 1; transform: none; }
.rr { opacity: 0; transform: translateX(38px); transition: opacity .85s var(--ease), transform .85s var(--ease); }
.rr.v { opacity: 1; transform: none; }
.d1{transition-delay:.08s} .d2{transition-delay:.16s} .d3{transition-delay:.24s}
.d4{transition-delay:.32s} .d5{transition-delay:.40s} .d6{transition-delay:.48s}

/* ═══════════════════════════════════════════════
   INTRO / FOUNDER — FULL-BLEED EDITORIAL LAYOUT
═══════════════════════════════════════════════ */
#founder {
  background: var(--panel);
  padding: var(--pad) 0;
  overflow: hidden;
}
.founder-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* ══ LEFT: quote panel ══ */
.founder-left {
  display: flex; flex-direction: column; justify-content: center;
  position: relative;
}
/* giant decorative opening quote */
.founder-deco-quote {
  font-family: var(--serif); font-size: 180px; line-height: .7;
  color: var(--gold); opacity: .18;
  pointer-events: none; user-select: none;
  margin-bottom: -28px;
  display: block;
}
/* section label */
.founder-tag-row {
  display: flex; align-items: center; gap: 14px; margin-bottom: 32px;
}
.founder-tag-line {
  width: 36px; height: 1px;
  background: linear-gradient(to right, var(--gold), transparent);
  flex-shrink: 0;
}
.founder-tag-label {
  font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
  font-weight: 600; color: var(--gold);
}
/* quote with gold left border */
.founder-quote {
  font-family: var(--serif);
  font-size: clamp(20px, 1.9vw, 28px); font-weight: 400; font-style: italic;
  line-height: 1.7; color: rgba(255,255,255,.88);
  border-left: 3px solid var(--gold); padding-left: 28px;
  margin-bottom: 40px;
}
/* name & title */
.founder-sig-wrap {
  display: flex; align-items: center; gap: 16px;
  padding-left: 31px;
}
/* body paragraphs */
.founder-body {
  display: flex; flex-direction: column; gap: 18px;
  padding-left: 31px;
  margin-bottom: 36px;
}
.founder-body p {
  font-size: 14.5px; line-height: 1.88; color: rgba(255,255,255,.55); font-weight: 300;
}
.founder-body p strong { color: rgba(255,255,255,.82); font-weight: 500; }
.founder-sig-line {
  width: 28px; height: 1px; background: var(--gold); flex-shrink: 0;
}
.founder-sig {
  font-family: var(--serif); font-size: 20px; font-style: italic;
  color: var(--white); line-height: 1.2;
}
.founder-sig-title {
  font-size: 9.5px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--gold-lt); margin-top: 5px; font-weight: 400;
}

/* ══ RIGHT: photo with gold inset frame ══ */
.founder-right {
  position: relative;
}
/* outer decorative frame — offset gold border */
.founder-img-frame {
  position: absolute;
  top: 20px; right: -20px; bottom: -20px; left: 20px;
  border: 1.5px solid var(--ash);
  opacity: .6;
  pointer-events: none; z-index: 0;
}
/* photo container */
.founder-img-wrap {
  position: relative; z-index: 1;
  overflow: hidden;
  aspect-ratio: 3/4;
  background: var(--silver);
}
.founder-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center top;
  transition: transform 1.2s var(--ease);
  display: block;
}
.founder-right:hover .founder-img-wrap img { transform: scale(1.04); }
/* silver inset frame border inside the photo */
.founder-img-inset {
  position: absolute; inset: 14px; z-index: 2;
  border: 1.5px solid rgba(208,206,201,.45);
  pointer-events: none;
}
/* badge */
.founder-badge {
  position: absolute; bottom: -12px; left: 8px; z-index: 3;
  width: 100px; height: 100px; border-radius: 50%;
  background: var(--ink); color: var(--white);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  box-shadow: 0 12px 40px rgba(0,0,0,.22);
  border: 2px solid var(--gold);
}
.founder-badge-n {
  font-family: var(--serif); font-size: 26px; font-weight: 400; line-height: 1;
}
.founder-badge-l {
  font-size: 7px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--gold-lt); margin-top: 4px;
}

/* ═══════════════════════════════════════════════
   TICKER
═══════════════════════════════════════════════ */
.ticker {
  padding: 20px 0; background: var(--ink);
  overflow: hidden;
}
.ticker-t {
  display: flex; white-space: nowrap;
  animation: tRun 32s linear infinite;
}
.ticker-t:hover { animation-play-state: paused; }
.t-item {
  display: inline-flex; align-items: center; gap: 22px; padding: 0 30px;
  font-size: 10.5px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 500;
  color: rgba(255,255,255,.3); transition: color .3s;
}
.t-item:hover { color: rgba(255,255,255,.75); }
.t-sep { color: var(--gold-lt); font-size: 12px; opacity: .6; }
@keyframes tRun { from{transform:translateX(0)} to{transform:translateX(-50%)} }

/* ═══════════════════════════════════════════════
   VISION / MISSION / VALUES
═══════════════════════════════════════════════ */
#vmv {
  background: var(--white);
  padding: var(--pad) 0;
}
.vmv-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 2px;
  margin-top: 72px;
}
.vmv-card {
  padding: 56px 52px;
  background: var(--pearl); border: 1px solid var(--silver);
  position: relative; overflow: hidden;
  transition: background .4s, border-color .4s, transform .4s;
}
.vmv-card:hover { background: var(--snow); border-color: var(--gold); transform: translateY(-4px); }
.vmv-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold), var(--gold-lt), transparent);
  opacity: 0; transition: opacity .4s;
}
.vmv-card:hover::before { opacity: 1; }
.vmv-card-icon {
  font-family: var(--serif); font-size: 72px; font-weight: 400; line-height: 1;
  color: rgba(184,146,74,.1); position: absolute; top: 24px; right: 32px;
  pointer-events: none;
}
.vmv-card-label {
  font-size: 9.5px; letter-spacing: 4.5px; text-transform: uppercase; font-weight: 700;
  color: var(--gold); margin-bottom: 18px;
}
.vmv-card-title {
  font-family: var(--serif); font-size: 30px; font-weight: 400;
  color: var(--ink); line-height: 1.25; margin-bottom: 20px; letter-spacing: -.4px;
}
.vmv-card-body {
  font-size: 15px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
}

.vals-grid {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 2px;
  margin-top: 2px;
}
.val-card {
  padding: 44px 36px;
  background: var(--pearl); border: 1px solid var(--silver);
  position: relative; overflow: hidden;
  transition: all .4s var(--ease);
}
.val-card:hover {
  background: var(--white); transform: translateY(-6px);
  border-color: var(--gold);
  box-shadow: 0 20px 60px rgba(0,0,0,.07);
}
.val-num {
  font-family: var(--serif); font-size: 52px; font-weight: 400;
  color: rgba(184,146,74,.12); line-height: 1; margin-bottom: 14px;
}
.val-title {
  font-size: 11.5px; letter-spacing: 3px; text-transform: uppercase; font-weight: 700;
  color: var(--gold-dk); margin-bottom: 14px;
}
.val-body { font-size: 13.5px; line-height: 1.82; color: var(--charcoal); font-weight: 300; }

/* ═══════════════════════════════════════════════
   DIVISIONS ACCORDION
═══════════════════════════════════════════════ */
#divisions { background: var(--ink); padding: var(--pad) 0; overflow: hidden; }
.div-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 72px;
}
.div-header-right { max-width: 400px; }
.div-header-desc { font-size: 15px; line-height: 1.88; color: rgba(255,255,255,.44); font-weight: 300; }

.accordion { display: flex; gap: 2px; height: 620px; overflow: hidden; }
.acc-card {
  position: relative; overflow: hidden; flex: 1; min-width: 72px;
  transition: flex .75s cubic-bezier(.76,0,.24,1); cursor: none;
  border: 1px solid rgba(255,255,255,.04);
}
.acc-card.open { flex: 5.5; }
.acc-bg {
  position: absolute; inset: 0; background-size: cover; background-position: center;
  filter: grayscale(30%) brightness(.35);
  transition: filter .65s var(--ease), transform .85s var(--ease);
}
.acc-card.open .acc-bg { filter: grayscale(0%) brightness(.50); }
.acc-card:hover .acc-bg { filter: grayscale(0%) brightness(.45); transform: scale(1.05); }
.acc-shade {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(10,10,8,.80) 0%, rgba(10,10,8,.30) 50%, transparent 100%);
}
.acc-vert {
  position: absolute; left: 0; top: 0; bottom: 0;
  display: flex; align-items: center; justify-content: center;
  writing-mode: vertical-rl; padding: 28px 26px;
  font-size: 9.5px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 600;
  color: rgba(255,255,255,.4); white-space: nowrap;
  transition: opacity .35s;
}
.acc-card.open .acc-vert { opacity: 0; }
.acc-ghost {
  position: absolute; top: 24px; right: 28px;
  font-family: var(--serif); font-size: 100px; font-weight: 400; line-height: 1;
  color: rgba(255,255,255,.04); pointer-events: none;
  opacity: 0; transition: opacity .4s .3s;
}
.acc-card.open .acc-ghost { opacity: 1; }
.acc-content {
  position: absolute; bottom: 0; left: 0; right: 0; padding: 44px 48px;
  opacity: 0; transform: translateY(20px);
  transition: opacity .5s .28s var(--ease), transform .5s .28s var(--ease);
}
.acc-card.open .acc-content { opacity: 1; transform: none; }
.acc-num { font-size: 9.5px; letter-spacing: 4px; color: var(--gold-lt); margin-bottom: 12px; }
.acc-title {
  font-family: var(--serif); font-size: 38px; font-weight: 400;
  color: var(--white); margin-bottom: 14px; letter-spacing: -.5px;
}
.acc-desc {
  font-size: 13.5px; line-height: 1.78; color: rgba(255,255,255,.55);
  max-width: 380px; margin-bottom: 28px; font-weight: 300;
}
.acc-link {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 9.5px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 600;
  color: var(--gold-lt); transition: gap .3s;
}
.acc-link:hover { gap: 16px; }

/* ═══════════════════════════════════════════════
   AUTO SERVICES
═══════════════════════════════════════════════ */
#auto-services { background: var(--snow); padding: var(--pad) 0; }
.services-grid {
  display: grid;
  /* 6-col base: row 1 → 3 cards × 2col each; row 2 → 2 cards × 3col each */
  grid-template-columns: repeat(6, 1fr);
  gap: 1px;
  background: var(--silver); border: 1px solid var(--silver);
  margin-top: 72px;
}
/* row 1: cards 1-3 each take 2 of 6 columns */
.svc-card:nth-child(-n+3) { grid-column: span 2; }
/* row 2: cards 4-5 each take 3 of 6 columns — fills the full row */
.svc-card:nth-child(n+4)  { grid-column: span 3; }
.svc-card {
  background: var(--snow); padding: 52px 44px;
  position: relative; overflow: hidden;
  transition: background .35s, transform .35s;
  display: flex; flex-direction: column;
}
.svc-card:hover {
  background: var(--white); transform: translateY(-5px); z-index: 1;
  box-shadow: 0 20px 60px rgba(0,0,0,.08);
}
.svc-card::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  transform: scaleX(0); transform-origin: left; transition: transform .4s var(--ease);
}
.svc-card:hover::after { transform: scaleX(1); }
.svc-num {
  font-family: var(--serif); font-size: 56px; font-weight: 400; line-height: 1;
  color: rgba(0,0,0,.055); margin-bottom: 16px;
}
.svc-title {
  font-size: 13px; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 700;
  color: var(--charcoal); margin-bottom: 14px;
}
.svc-body { font-size: 14px; line-height: 1.82; color: var(--slate); font-weight: 300; }

/* ═══════════════════════════════════════════════
   FACTS & FIGURES
═══════════════════════════════════════════════ */
#facts { background: var(--panel); padding: var(--pad) 0; }
.facts-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 80px;
}
.facts-intro { max-width: 480px; font-size: 15px; line-height: 1.88; color: rgba(255,255,255,.44); font-weight: 300; }
.facts-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: rgba(255,255,255,.05); }
.fact-card {
  padding: 56px 40px; background: var(--panel2);
  text-align: center; position: relative; overflow: hidden;
  transition: background .4s;
}
.fact-card:hover { background: rgba(255,255,255,.04); }
.fact-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-lt), transparent);
  opacity: 0; transition: opacity .4s;
}
.fact-card:hover::before { opacity: 1; }
.fact-val {
  font-family: var(--serif); font-size: clamp(48px,5vw,72px); font-weight: 400;
  color: var(--white); line-height: 1; margin-bottom: 16px;
  display: flex; align-items: flex-start; justify-content: center;
}
.fact-val .p { font-size: .55em; margin-top: 6px; color: var(--gold-lt); font-weight: 300; }
.fact-label { font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: rgba(255,255,255,.4); font-weight: 500; }

/* Achievements */
.achievements { margin-top: 72px; }
.ach-title {
  font-size: 10px; letter-spacing: 4px; text-transform: uppercase; font-weight: 700;
  color: var(--gold-lt); margin-bottom: 28px;
}
.ach-list { display: flex; flex-wrap: wrap; gap: 10px; }
.ach-pill {
  padding: 10px 20px;
  background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
  font-size: 13px; line-height: 1.6; color: rgba(255,255,255,.58); font-weight: 300;
  border-radius: var(--radius); transition: background .3s, border-color .3s;
}
.ach-pill:hover { background: rgba(255,255,255,.07); border-color: rgba(184,146,74,.3); }
.ach-pill strong { color: rgba(255,255,255,.88); font-weight: 600; }

/* ═══════════════════════════════════════════════
   IMAGE STRIP
═══════════════════════════════════════════════ */
.img-strip { overflow: hidden; height: 200px; position: relative; }
.img-strip-t {
  display: flex; height: 100%; white-space: nowrap;
  animation: stripRun 30s linear infinite;
}
.strip-item {
  min-width: 300px; height: 100%;
  background-size: cover; background-position: center;
  filter: grayscale(20%);
  transition: filter .4s; flex-shrink: 0;
}
.strip-item:hover { filter: none; }
@keyframes stripRun { from{transform:translateX(0)} to{transform:translateX(-50%)} }

/* ═══════════════════════════════════════════════
   BRANDS / PARTNERS
═══════════════════════════════════════════════ */
#brands { background: var(--white); padding: var(--pad) 0; }
.brands-intro { text-align: center; max-width: 680px; margin: 0 auto 72px; }
.brands-desc {
  font-size: 15.5px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
  margin-top: 20px;
}
/* ═══════════════════════════════════════════════
   BRANDS / PARTNERS
═══════════════════════════════════════════════ */
#brands { background: var(--white); padding: var(--pad) 0; }
.brands-intro { text-align: center; max-width: 680px; margin: 0 auto 72px; }
.brands-desc {
  font-size: 15.5px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
  margin-top: 20px;
}
.brands-grid {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
  background: var(--silver); border: 1px solid var(--silver);
}
.brand-cell {
  background: var(--white); padding: 32px 24px;
  display: flex; align-items: center; justify-content: center;
  height: 120px;
  transition: background .35s, transform .35s, box-shadow .35s;
  position: relative; overflow: hidden;
}
.brand-cell:hover {
  background: var(--pearl); transform: translateY(-4px); z-index: 1;
  box-shadow: 0 16px 48px rgba(0,0,0,.08);
}
.brand-cell::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  transform: scaleX(0); transform-origin: center; transition: transform .4s;
}
.brand-cell:hover::after { transform: scaleX(1); }

/* Single unified logo rule — every image gets the SAME box */
.brand-logo-wrap {
  width: 160px; height: 60px;
  display: flex; align-items: center; justify-content: center;
}
.brand-logo-img {
  width: 160px; height: 60px;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.7);
  transition: filter .4s var(--ease), transform .35s var(--ease);
}
.brand-cell:hover .brand-logo-img {
  filter: grayscale(0%) brightness(1);
  transform: scale(1.05);
}

/* Text fallback for brands without a logo */
.brand-logo-text {
  font-size: 12px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 700;
  color: var(--ink); text-align: center;
}

/* ═══════════════════════════════════════════════
   REAL ESTATE
═══════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════
   DIVISION 02 — REAL ESTATE
═══════════════════════════════════════════════ */
#realestate { background: var(--pearl); }

/* ── Hero band (light) ── */
.re-hero {
  background: var(--pearl);
  padding: var(--pad) 0 calc(var(--pad) + 40px);
  position: relative; overflow: hidden;
}
.re-hero::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 70% at 75% 50%, rgba(184,146,74,.06) 0%, transparent 65%);
  pointer-events: none;
}
.re-hero-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.re-hero-sub {
  font-size: 15.5px; line-height: 1.85; font-weight: 300;
  color: var(--charcoal); margin-top: 20px; margin-bottom: 40px;
  max-width: 480px;
}

/* Stats row */
.re-stats {
  display: flex; align-items: center; gap: 28px;
}
.re-stat { display: flex; flex-direction: column; gap: 4px; }
.re-stat-n {
  font-family: var(--serif); font-size: 28px; font-weight: 500;
  color: var(--gold-dk); line-height: 1;
}
.re-stat-l {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  font-weight: 600; color: var(--slate);
}
.re-stat-div {
  width: 1px; height: 44px; background: var(--ash);
}

/* Image frame (right side of hero) */
.re-img-frame { position: relative; }
.re-img-inner {
  overflow: hidden;
  aspect-ratio: 4/3;
  border: 1px solid var(--silver);
}
.re-img-inner img {
  width: 100%; height: 100%; object-fit: cover;
  object-position: center;
  transition: transform 1s var(--ease);
  display: block;
}
.re-img-frame:hover .re-img-inner img { transform: scale(1.04); }
/* Gold corner accents */
.re-img-frame::before {
  content: '';
  position: absolute; top: -10px; right: -10px;
  width: 60px; height: 60px;
  border-top: 2px solid var(--gold);
  border-right: 2px solid var(--gold);
  pointer-events: none; z-index: 2;
}
.re-img-frame::after {
  content: '';
  position: absolute; bottom: -10px; left: -10px;
  width: 60px; height: 60px;
  border-bottom: 2px solid var(--gold);
  border-left: 2px solid var(--gold);
  pointer-events: none; z-index: 2;
}
/* Badge below image */
.re-img-badge {
  padding: 18px 24px;
  background: var(--white);
  border-left: 3px solid var(--gold);
  border: 1px solid var(--silver);
  border-left: 3px solid var(--gold);
}
.re-img-badge-name {
  font-size: 13px; font-weight: 600; color: var(--ink);
  margin-bottom: 5px; letter-spacing: .3px;
}
.re-img-badge-loc {
  font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--gold-dk); font-weight: 500;
}

/* ── Cards wrap (white) ── */
.re-cards-wrap {
  background: var(--white);
  padding: 72px 0 var(--pad);
}
.re-cards {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 2px; background: var(--silver);
  border: 1px solid var(--silver);
}
.re-card {
  background: var(--white); padding: 52px 44px 56px;
  position: relative; overflow: hidden;
  transition: background .3s;
}
.re-card::after {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt), transparent);
  transform: scaleX(0); transform-origin: left;
  transition: transform .4s var(--ease);
}
.re-card:hover { background: var(--snow); }
.re-card:hover::after { transform: scaleX(1); }
.re-card-num {
  font-family: var(--serif); font-size: 48px; font-weight: 400;
  color: var(--silver); line-height: 1; margin-bottom: 24px;
  transition: color .3s;
}
.re-card:hover .re-card-num { color: var(--gold-lt); }
.re-card-title {
  font-family: var(--serif); font-size: clamp(20px, 1.8vw, 26px);
  font-weight: 400; color: var(--ink);
  margin-bottom: 16px; letter-spacing: -.2px;
}
.re-card-body {
  font-size: 14.5px; line-height: 1.85; color: var(--charcoal);
  font-weight: 300; margin-bottom: 28px;
}
.re-card-tag {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  font-weight: 700; color: var(--gold-dk);
  padding-top: 20px; border-top: 1px solid var(--silver);
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .re-hero-inner { gap: 48px; }
}
@media (max-width: 880px) {
  .re-hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .re-cards { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .re-stats { gap: 20px; }
  .re-card { padding: 40px 28px 44px; }
}

/* ═══════════════════════════════════════════════
   MANAGEMENT CONSULTATION
═══════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════
   DIVISION 03 — MANAGEMENT CONSULTATION
═══════════════════════════════════════════════ */
#consulting { background: var(--snow); }

/* ── Hero band (dark) ── */
.consult-hero {
  background: var(--ink);
  padding: var(--pad) 0 calc(var(--pad) + 40px);
  position: relative; overflow: hidden;
}
.consult-hero::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 80% at 80% 50%, rgba(184,146,74,.10) 0%, transparent 65%);
  pointer-events: none;
}
.consult-hero-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.consult-hero-sub {
  font-size: 15.5px; line-height: 1.85; font-weight: 300;
  color: rgba(255,255,255,.55); margin-top: 20px; margin-bottom: 40px;
  max-width: 480px;
}

/* Stats row */
.consult-stats {
  display: flex; align-items: center; gap: 28px;
  margin-top: 4px;
}
.consult-stat { display: flex; flex-direction: column; gap: 4px; }
.consult-stat-n {
  font-family: var(--serif); font-size: 28px; font-weight: 500;
  color: var(--gold); line-height: 1;
}
.consult-stat-l {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  font-weight: 600; color: rgba(255,255,255,.35);
}
.consult-stat-div {
  width: 1px; height: 44px; background: rgba(255,255,255,.12);
}

/* Image frame (right side of hero) */
.consult-img-frame {
  position: relative;
}
.consult-img-inner {
  overflow: hidden;
  aspect-ratio: 4/3;
  border: 1px solid rgba(255,255,255,.08);
}
.consult-img-inner img {
  width: 100%; height: 100%; object-fit: cover;
  object-position: center top;
  transition: transform 1s var(--ease);
  display: block;
}
.consult-img-frame:hover .consult-img-inner img { transform: scale(1.04); }
/* Gold corner accent */
.consult-img-frame::before {
  content: '';
  position: absolute; top: -10px; right: -10px;
  width: 60px; height: 60px;
  border-top: 2px solid var(--gold);
  border-right: 2px solid var(--gold);
  pointer-events: none; z-index: 2;
}
.consult-img-frame::after {
  content: '';
  position: absolute; bottom: -10px; left: -10px;
  width: 60px; height: 60px;
  border-bottom: 2px solid var(--gold);
  border-left: 2px solid var(--gold);
  pointer-events: none; z-index: 2;
}
/* Badge below image */
.consult-img-badge {
  margin-top: 0;
  padding: 18px 24px;
  background: var(--panel);
  border-left: 3px solid var(--gold);
}
.consult-img-badge-name {
  font-size: 13px; font-weight: 600; color: var(--white);
  margin-bottom: 5px; letter-spacing: .3px;
}
.consult-img-badge-loc {
  font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--gold); font-weight: 500;
}

/* ── Body wrap (light) ── */
.consult-body-wrap {
  background: var(--snow);
  padding: 72px 0 var(--pad);
}
.consult-intro {
  font-size: 15.5px; line-height: 1.9; color: var(--charcoal); font-weight: 300;
  max-width: 780px; margin-bottom: 56px;
}
.consult-intro strong { color: var(--ink); font-weight: 600; }

/* Service pillars grid */
.consult-pillars {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 2px; background: var(--silver);
  border: 1px solid var(--silver);
}
.consult-pillar {
  background: var(--white);
  padding: 40px 32px 44px;
  position: relative; overflow: hidden;
  transition: background .3s;
}
.consult-pillar::after {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold), var(--gold-lt), transparent);
  transform: scaleX(0); transform-origin: left;
  transition: transform .4s var(--ease);
}
.consult-pillar:hover { background: var(--pearl); }
.consult-pillar:hover::after { transform: scaleX(1); }
.consult-pillar-icon {
  font-size: 20px; color: var(--gold);
  margin-bottom: 20px; display: block;
  transition: transform .3s;
}
.consult-pillar:hover .consult-pillar-icon { transform: scale(1.2); }
.consult-pillar-title {
  font-size: 13px; letter-spacing: 1px; font-weight: 700;
  color: var(--ink); margin-bottom: 14px; text-transform: uppercase;
}
.consult-pillar-body {
  font-size: 13.5px; line-height: 1.8; color: var(--charcoal); font-weight: 300;
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .consult-hero-inner { gap: 48px; }
}
@media (max-width: 880px) {
  .consult-hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .consult-pillars { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .consult-pillars { grid-template-columns: 1fr; }
  .consult-stats { gap: 20px; }
}

/* ═══════════════════════════════════════════════
   LOCATIONS
═══════════════════════════════════════════════ */
#locations { background: var(--white); padding: var(--pad) 0; }

/* ── Global Operations: Expandable Hierarchy ── */
.glo-wrap {
  margin-top: 72px;
  display: flex; flex-direction: column; gap: 0;
  border: 1px solid var(--silver);
}

/* Country row */
.glo-country { border-bottom: 1px solid var(--silver); }
.glo-country:last-child { border-bottom: none; }

.glo-country-btn {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  padding: 28px 36px; background: none; border: none; cursor: pointer;
  text-align: left; font-family: inherit;
  transition: background .25s;
  position: relative;
}
.glo-country-btn::before {
  content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
  background: linear-gradient(180deg, var(--gold), var(--gold-lt));
  opacity:0; transition: opacity .3s;
}
.glo-country-btn:hover,
.glo-country.open .glo-country-btn { background: var(--pearl); }
.glo-country.open .glo-country-btn::before { opacity: 1; }

.glo-country-left { display: flex; align-items: center; gap: 20px; }
.glo-flag { width: 52px; height: 34px; object-fit: cover; border-radius: 3px; box-shadow: 0 2px 8px rgba(0,0,0,.12); flex-shrink:0; }
.glo-country-name {
  font-family: var(--serif); font-size: clamp(26px,3vw,36px); font-weight: 400;
  color: var(--ink); line-height:1;
}
.glo-country-num {
  font-size: 10px; letter-spacing: 3px; color: var(--ash); font-weight: 500;
  margin-top: 4px; align-self: flex-end;
}
.glo-chevron {
  font-size: 20px; color: var(--gold); line-height:1;
  transition: transform .35s cubic-bezier(.76,0,.24,1);
  display: inline-block;
}
.glo-country.open .glo-chevron,
.glo-cat.open .glo-chevron { transform: rotate(90deg); }

/* Country body */
.glo-country-body {
  max-height: 0; overflow: hidden;
  transition: max-height .45s cubic-bezier(.76,0,.24,1);
}
.glo-country.open .glo-country-body { max-height: 2000px; }

/* Category row */
.glo-cat { border-top: 1px solid var(--silver); }
.glo-cat:first-child { border-top: none; }

.glo-cat-btn {
  width: 100%; display: flex; align-items: center; gap: 14px;
  padding: 18px 36px 18px 60px; background: none; border: none; cursor: pointer;
  text-align: left; font-family: inherit;
  transition: background .2s;
}
.glo-cat-btn:hover,
.glo-cat.open .glo-cat-btn { background: rgba(193,155,90,.06); }

.glo-cat-icon { font-size: 10px; color: var(--gold); flex-shrink: 0; }
.glo-cat-name {
  font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
  font-weight: 600; color: var(--ink); flex: 1;
}
.glo-cat-count {
  font-size: 10px; letter-spacing: 1px; color: var(--ash);
  background: var(--pearl); padding: 3px 10px;
  border: 1px solid var(--silver); margin-right: 12px;
}

/* Category body */
.glo-cat-body {
  max-height: 0; overflow: hidden;
  transition: max-height .35s cubic-bezier(.76,0,.24,1);
}
.glo-cat.open .glo-cat-body { max-height: 800px; }

/* Flat categories (no dropdown toggle) */
.glo-cat--flat .glo-cat-flat-row {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 20px 14px 20px;
  border-top: 1px solid rgba(0,0,0,.06);
  font-size: 13px; font-weight: 600; color: var(--charcoal);
  letter-spacing: .3px;
}
.glo-cat--flat .glo-cat-flat-row .glo-cat-icon { color: var(--gold); font-size: 12px; }
.glo-cat--flat .glo-cat-body--open { max-height: 800px; }

/* Entity items */
.glo-entity {
  padding: 11px 36px 11px 80px;
  font-size: 13.5px; color: var(--charcoal); line-height: 1.5;
  border-top: 1px solid rgba(0,0,0,.04);
  position: relative;
  transition: background .2s, color .2s;
}
.glo-entity::before {
  content:''; position:absolute; left: 64px; top: 50%;
  width: 8px; height: 1px; background: var(--gold);
}
.glo-entity:hover { background: var(--pearl); color: var(--ink); }

/* ═══════════════════════════════════════════════
   NEWS & STORIES — SLIDER
═══════════════════════════════════════════════ */
#news { background: var(--pearl); padding: var(--pad) 0; overflow: hidden; }

/* ── Outer article slider ── */
.news-slider-wrap {
  position: relative; margin-top: 72px;
  overflow: hidden;
}
.news-slider-track {
  display: flex;
  transition: transform .72s cubic-bezier(.76,0,.24,1);
  will-change: transform;
}
.news-slide {
  flex: 0 0 100%; width: 100%;
  display: grid; grid-template-columns: 1fr 1fr;
  border: 1px solid var(--silver);
  overflow: hidden;
  background: var(--white);
}

/* ── Photo slider (left panel) ── */
.news-photo-slider {
  position: relative; overflow: hidden;
  background: var(--ink);
  height: 520px;
  min-height: 0;
}
.news-photo-track {
  display: flex; height: 100%;
  transition: transform .65s cubic-bezier(.76,0,.24,1);
  will-change: transform;
}
.news-photo-slide {
  flex: 0 0 100%; width: 100%; height: 100%;
  overflow: hidden; position: relative;
}
.news-photo-slide img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: center center;
  transition: transform 1.2s var(--ease);
  display: block;
}
.news-photo-slide:hover img { transform: scale(1.04); }

/* Photo nav arrows */
.news-photo-prev,
.news-photo-next {
  position: absolute; top: 50%; transform: translateY(-50%);
  z-index: 10; width: 40px; height: 40px;
  background: rgba(0,0,0,.45); backdrop-filter: blur(4px);
  border: 1px solid rgba(255,255,255,.15);
  color: rgba(255,255,255,.8); font-size: 16px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: background .3s, color .3s, border-color .3s;
}
.news-photo-prev:hover,
.news-photo-next:hover {
  background: var(--gold); border-color: var(--gold); color: var(--white);
}
.news-photo-prev { left: 14px; }
.news-photo-next { right: 14px; }

/* Photo dot indicators */
.news-photo-dots {
  position: absolute; bottom: 16px; left: 0; right: 0;
  display: flex; align-items: center; justify-content: center; gap: 6px;
  z-index: 10;
}
.news-photo-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: rgba(255,255,255,.3);
  transition: background .3s, transform .3s;
  cursor: pointer;
}
.news-photo-dot.active {
  background: var(--gold); transform: scale(1.4);
}

/* Photo counter badge */
.news-photo-counter {
  position: absolute; top: 16px; left: 16px; z-index: 10;
  padding: 5px 12px;
  background: rgba(0,0,0,.5); backdrop-filter: blur(4px);
  border: 1px solid rgba(255,255,255,.1);
  font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
  color: rgba(255,255,255,.7); font-weight: 500;
}

/* ── Article text panel (right) ── */
.news-article-body {
  padding: 60px 56px;
  display: flex; flex-direction: column; justify-content: center;
  position: relative; background: var(--white);
}
.news-article-body::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--gold), var(--gold-lt), transparent);
}
.news-date-row {
  display: flex; align-items: center; gap: 16px;
  margin-bottom: 28px;
}
.news-date {
  font-size: 9.5px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600;
  color: var(--gold);
}
.news-date-sep { width: 24px; height: 1px; background: var(--ash); flex-shrink: 0; }
.news-category {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase; font-weight: 500;
  color: var(--slate);
}
.news-article-h2 {
  font-family: var(--serif);
  font-size: clamp(22px, 2.2vw, 34px); font-weight: 400; line-height: 1.3;
  color: var(--ink); letter-spacing: -.4px; margin-bottom: 24px;
}
.news-article-text {
  font-size: 14.5px; line-height: 1.9; color: var(--charcoal); font-weight: 300;
  margin-bottom: 40px;
}
.news-article-text p + p { margin-top: 14px; }
.news-read-more {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 9.5px; letter-spacing: 3px; text-transform: uppercase; font-weight: 700;
  color: var(--gold-dk); transition: gap .3s;
  align-self: flex-start;
}
.news-read-more:hover { gap: 16px; color: var(--gold); }
.news-read-more-arr {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; border-radius: 50%;
  border: 1px solid var(--gold); color: var(--gold);
  font-size: 14px; transition: background .3s, color .3s;
}
.news-read-more:hover .news-read-more-arr { background: var(--gold); color: var(--white); }

/* ── Article slider nav (bottom bar) ── */
.news-slider-nav {
  display: flex; align-items: center; justify-content: space-between;
  margin-top: 28px; padding: 0 2px;
}
.news-article-dots {
  display: flex; align-items: center; gap: 10px;
}
.news-article-dot {
  width: 28px; height: 2px; background: var(--ash);
  cursor: pointer; transition: background .3s, width .3s;
}
.news-article-dot.active { background: var(--gold); width: 48px; }
.news-slider-btns {
  display: flex; gap: 10px;
}
.news-prev-btn,
.news-next-btn {
  width: 48px; height: 48px;
  border: 1px solid var(--silver);
  background: var(--white);
  color: var(--charcoal); font-size: 18px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: background .3s, border-color .3s, color .3s, transform .2s;
}
.news-prev-btn:hover,
.news-next-btn:hover {
  background: var(--gold); border-color: var(--gold);
  color: var(--white); transform: scale(1.05);
}
.news-article-counter {
  font-size: 10px; letter-spacing: 3px; color: var(--slate);
  font-weight: 500; text-transform: uppercase;
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .news-slide { grid-template-columns: 1fr; }
  .news-photo-slider { min-height: 360px; }
  .news-article-body { padding: 44px 40px; }
}
@media (max-width: 560px) {
  .news-article-body { padding: 32px 24px; }
  .news-photo-slider { min-height: 260px; }
  .news-prev-btn, .news-next-btn { width: 40px; height: 40px; font-size: 15px; }
}

/* ═══════════════════════════════════════════════
   CONTACT CTA
═══════════════════════════════════════════════ */
#contact {
  background: var(--black);
  padding: var(--pad) 0 80px;
  text-align: center; position: relative; overflow: hidden;
}
#contact::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 50%,
    rgba(184,146,74,.1) 0%, transparent 60%);
  pointer-events: none;
}
.contact-rings-wrap { position: absolute; inset: 0; pointer-events: none; display: flex; align-items: center; justify-content: center; }
.contact-ring {
  position: absolute; border-radius: 50%;
  border: 1px solid rgba(184,146,74,.12);
  animation: ringPulse 4s ease-in-out infinite;
}
.contact-ring:nth-child(1) { width: 300px; height: 300px; }
.contact-ring:nth-child(2) { width: 500px; height: 500px; animation-delay: .8s; }
.contact-ring:nth-child(3) { width: 720px; height: 720px; animation-delay: 1.6s; }
@keyframes ringPulse { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:.15;transform:scale(1.04)} }
.contact-inner { position: relative; z-index: 2; }
.contact-tag { justify-content: center; }
.contact-h {
  font-family: var(--serif);
  font-size: clamp(52px,7vw,100px); font-weight: 400; line-height: 1.05;
  color: var(--white); letter-spacing: -2px; margin-bottom: 24px;
}
.contact-h em { font-style: italic; color: var(--gold-lt); }
.contact-slogan {
  font-family: var(--serif); font-style: italic;
  font-size: 18px; color: rgba(255,255,255,.35); margin-bottom: 24px;
}
.contact-sub { font-size: 15.5px; line-height: 1.85; color: rgba(255,255,255,.42); max-width: 560px; margin: 0 auto 48px; font-weight: 300; }
.contact-btns { display: flex; align-items: center; justify-content: center; gap: 20px; }
.btn-gold {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 16px 40px; background: var(--gold);
  color: var(--white); font-size: 10.5px; letter-spacing: 2.5px; text-transform: uppercase;
  font-weight: 600; border-radius: var(--radius);
  transition: background .3s, transform .3s;
}
.btn-gold:hover { background: var(--gold-lt); transform: translateY(-2px); }
.btn-outline-w {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 15px 38px; border: 1px solid rgba(255,255,255,.22);
  color: rgba(255,255,255,.75); font-size: 10.5px; letter-spacing: 2.5px; text-transform: uppercase;
  font-weight: 600; border-radius: var(--radius);
  transition: border-color .3s, color .3s, transform .3s;
}
.btn-outline-w:hover { border-color: var(--white); color: var(--white); transform: translateY(-2px); }

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
footer {
  background: var(--black); color: rgba(255,255,255,.55);
  padding: 80px 0 40px;
  border-top: 1px solid rgba(255,255,255,.05);
}
.ft-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1.2fr; gap: 60px; }
.ft-logo { height: 60px; width: auto; margin-bottom: 20px; }
.ft-slogan {
  font-family: var(--serif); font-style: italic;
  font-size: 15px; color: var(--gold-lt); margin-bottom: 18px;
}
.ft-about { font-size: 13.5px; line-height: 1.82; color: rgba(255,255,255,.3); font-weight: 300; max-width: 320px; margin-bottom: 28px; }
.ft-socials { display: flex; gap: 14px; }
.ft-soc {
  width: 36px; height: 36px; border: 1px solid rgba(255,255,255,.12); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; color: rgba(255,255,255,.4);
  transition: border-color .3s, color .3s, background .3s;
}
.ft-soc:hover { border-color: var(--gold); color: var(--gold); background: rgba(184,146,74,.08); }
.ft-col-h { font-size: 9.5px; letter-spacing: 4px; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,.4); margin-bottom: 22px; }
.ft-links { display: flex; flex-direction: column; gap: 11px; }
.ft-links a { font-size: 13px; color: rgba(255,255,255,.35); transition: color .3s; font-weight: 300; }
.ft-links a:hover { color: var(--gold-lt); }
.ft-contact-row { display: flex; flex-direction: column; gap: 16px; }
.ft-contact-lbl { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: var(--gold-dk); margin-bottom: 2px; }
.ft-contact-val { font-size: 13px; color: rgba(255,255,255,.4); font-weight: 300; line-height: 1.7; }
.ft-bottom {
  margin-top: 56px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.05);
  display: flex; align-items: center; justify-content: space-between;
  font-size: 11px; color: rgba(255,255,255,.2);
}
.ft-bottom a { color: rgba(255,255,255,.25); transition: color .3s; }
.ft-bottom a:hover { color: var(--gold-lt); }

/* ═══════════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════════ */
@media (max-width: 1100px) {
  :root { --pad: 72px; }
  .container { padding: 0 40px; }
  .facts-grid { grid-template-columns: repeat(2,1fr); }
  .brands-grid { grid-template-columns: repeat(3,1fr); }
  .ft-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
  .founder-grid { gap: 56px; }
  .founder-deco-quote { font-size: 140px; }
}
@media (max-width: 880px) {
  :root { --pad: 56px; }
  .container { padding: 0 28px; }
  #nav { padding: 0 28px; }
  .nav-links { display: none; }
  .nav-cta { display: none; }
  .founder-grid { grid-template-columns: 1fr; gap: 48px; min-height: auto; }
  .founder-right { margin-top: 0; }
  .founder-left { padding: 0; }
  .founder-badge { bottom: -12px; left: 8px; }
  .founder-img-frame { top: 14px; right: -14px; bottom: -14px; left: 14px; }
  .vmv-grid, .vals-grid { grid-template-columns: 1fr; }
  .accordion { flex-direction: column; height: auto; gap: 4px; }
  .acc-card { min-height: 80px; }
  .acc-card.open { flex: 1; min-height: 440px; }
  .acc-vert { writing-mode: horizontal-tb; padding: 24px; }
  .services-grid { grid-template-columns: repeat(4, 1fr); }
  .svc-card:nth-child(-n+3) { grid-column: span 2; }
  .svc-card:nth-child(n+4)  { grid-column: span 2; }
  .brands-grid { grid-template-columns: repeat(3,1fr); }
  .glo-country-btn { padding: 22px 24px; }
  .glo-cat-btn { padding: 16px 24px 16px 44px; }
  .glo-entity { padding: 10px 24px 10px 60px; }
  .glo-entity::before { left: 44px; }
  .ft-grid { grid-template-columns: 1fr; gap: 40px; }
  .div-header { flex-direction: column; align-items: flex-start; gap: 20px; }
  .facts-header { flex-direction: column; align-items: flex-start; gap: 20px; }
  .hero-row2 { flex-direction: column; align-items: flex-start; gap: 20px; }
  .hero-inner { padding: 0 28px; padding-top: var(--nav-h); }
}
@media (max-width: 560px) {
  .services-grid { grid-template-columns: 1fr; }
  .svc-card:nth-child(-n+3) { grid-column: span 1; }
  .svc-card:nth-child(n+4)  { grid-column: span 1; }
  .brands-grid { grid-template-columns: repeat(2,1fr); }
  .glo-country-btn { padding: 18px 16px; }
  .glo-cat-btn { padding: 14px 16px 14px 32px; }
  .glo-entity { padding: 9px 16px 9px 46px; }
  .glo-entity::before { left: 32px; }
  .vals-grid { grid-template-columns: 1fr 1fr; }
  .contact-h { font-size: 48px; }
  .fs-body { flex-direction: column; gap: 32px; }
  .fs-sidebar { display: none; }
}

/* ═══════════════════════════════════════════════
   OUR PURPOSE PAGE
═══════════════════════════════════════════════ */

/* Hero */
.pur-hero {
  position: relative;
  background: var(--black);
  padding: 180px 0 110px;
  overflow: hidden;
}
.pur-hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 80% at 20% 50%, rgba(184,146,74,.1) 0%, transparent 55%),
    radial-gradient(ellipse 50% 50% at 80% 20%, rgba(255,255,255,.03) 0%, transparent 50%);
}
.pur-hero-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
  background-size: 80px 80px;
  animation: gridDrift 30s linear infinite;
  mask-image: radial-gradient(ellipse 90% 85% at 50% 50%, black 20%, transparent 100%);
}
.pur-hero-inner { position: relative; z-index: 2; max-width: 760px; }
.pur-hero-h1 {
  font-family: var(--serif);
  font-size: clamp(44px, 6vw, 88px);
  font-weight: 400; letter-spacing: -2px; line-height: 1.05;
  color: var(--white); margin-bottom: 28px;
}
.pur-hero-h1 em { font-style: italic; color: var(--gold-lt); }
.pur-hero-sub {
  font-size: 16px; line-height: 1.88;
  color: rgba(255,255,255,.42); font-weight: 300; max-width: 560px;
}
.pur-hero-scroll {
  position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center;
}
.pur-scroll-line {
  width: 1px; height: 56px;
  background: linear-gradient(to bottom, rgba(184,146,74,.5), transparent);
  animation: lineAnim 2s ease-in-out infinite;
}

/* Vision / Mission cards */
.pur-vm { background: var(--white); padding: var(--pad) 0; }
.pur-vm-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 2px;
}
.pur-vm-card {
  position: relative; overflow: hidden;
  padding: 72px 64px;
  background: var(--pearl); border: 1px solid var(--silver);
  transition: transform .4s var(--ease), box-shadow .4s;
}
.pur-vm-card:hover { transform: translateY(-6px); box-shadow: 0 24px 64px rgba(0,0,0,.07); }
.pur-vm-card--dark {
  background: var(--ink); border-color: transparent;
}
.pur-vm-card--dark .pur-vm-label { color: var(--gold-lt); }
.pur-vm-card--dark .pur-vm-title { color: var(--white); }
.pur-vm-card--dark .pur-vm-body { color: rgba(255,255,255,.5); }
.pur-vm-card--dark .pur-vm-rule { background: rgba(255,255,255,.1); }
.pur-vm-card--dark .pur-vm-pillar { color: rgba(255,255,255,.6); }
.pur-vm-card--dark .pur-vm-dot { background: var(--gold-lt); }

.pur-vm-bg-label {
  position: absolute; bottom: -10px; right: -10px;
  font-family: var(--serif); font-size: 120px; font-weight: 400; line-height: 1;
  color: rgba(0,0,0,.03); pointer-events: none; user-select: none; white-space: nowrap;
}
.pur-vm-card--dark .pur-vm-bg-label { color: rgba(255,255,255,.03); }

.pur-vm-icon {
  font-family: var(--serif); font-size: 40px;
  color: var(--gold); line-height: 1; margin-bottom: 24px;
}
.pur-vm-card--dark .pur-vm-icon { color: var(--gold-lt); }
.pur-vm-label {
  font-size: 9.5px; letter-spacing: 5px; text-transform: uppercase; font-weight: 700;
  color: var(--gold-dk); margin-bottom: 20px;
}
.pur-vm-title {
  font-family: var(--serif); font-size: clamp(28px, 3vw, 44px); font-weight: 400;
  color: var(--ink); line-height: 1.2; letter-spacing: -.5px; margin-bottom: 24px;
}
.pur-vm-body {
  font-size: 15px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
  margin-bottom: 32px;
}
.pur-vm-rule { height: 1px; background: var(--silver); margin-bottom: 28px; }
.pur-vm-pillars { display: flex; flex-direction: column; gap: 10px; list-style: none; }
.pur-vm-pillar {
  display: flex; align-items: center; gap: 12px;
  font-size: 13px; color: var(--charcoal); font-weight: 400;
}
.pur-vm-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--gold); flex-shrink: 0;
}

/* Slogan strip */
.pur-slogan-strip {
  background: var(--gold); padding: 18px 0; overflow: hidden;
}
.pur-slogan-track {
  display: flex; white-space: nowrap;
  animation: mqRun 28s linear infinite;
}
.pur-slogan-item {
  display: inline-flex; align-items: center;
  padding: 0 28px;
  font-family: var(--serif); font-style: italic;
  font-size: 18px; color: rgba(255,255,255,.85); letter-spacing: .5px;
}

/* Core Values */
.pur-values { background: var(--pearl); padding: var(--pad) 0; }
.pur-values-sub {
  font-size: 15.5px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
  max-width: 560px; margin: 16px auto 0;
}
.pur-vals-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px;
}
.pur-val-card {
  background: var(--white); padding: 52px 40px;
  border: 1px solid var(--silver); position: relative; overflow: hidden;
  transition: transform .4s var(--ease), box-shadow .4s, border-color .4s;
}
.pur-val-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 64px rgba(0,0,0,.08);
  border-color: var(--gold);
}
.pur-val-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  opacity: 0; transition: opacity .4s;
}
.pur-val-card:hover::before { opacity: 1; }
.pur-val-top {
  display: flex; align-items: flex-start; justify-content: space-between;
  margin-bottom: 24px;
}
.pur-val-icon {
  font-family: var(--serif); font-size: 32px; color: var(--gold); line-height: 1;
}
.pur-val-num {
  font-family: var(--serif); font-size: 48px; font-weight: 400; line-height: 1;
  color: rgba(184,146,74,.12);
}
.pur-val-title {
  font-size: 11px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 700;
  color: var(--gold-dk); margin-bottom: 16px;
}
.pur-val-body {
  font-size: 13.5px; line-height: 1.82; color: var(--charcoal); font-weight: 300;
  margin-bottom: 28px;
}
.pur-val-points { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.pur-val-point {
  display: flex; align-items: center; gap: 10px;
  font-size: 12.5px; color: var(--slate); font-weight: 400;
}
.pur-val-pt-dot {
  width: 5px; height: 5px; border-radius: 50%; background: var(--gold-lt); flex-shrink: 0;
}

/* Founder quote */
.pur-fq { background: var(--ink); padding: var(--pad) 0; }
.pur-fq-inner {
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
  align-items: center; max-width: 1100px; margin: 0 auto;
}
.pur-fq-photo {
  position: relative; border-radius: 4px; overflow: hidden;
  aspect-ratio: 4/3;
  box-shadow: 0 32px 80px rgba(0,0,0,.5);
}
.pur-fq-photo img {
  width: 100%; height: 100%; object-fit: cover; object-position: center top;
  filter: grayscale(10%);
  transition: transform .9s var(--ease);
}
.pur-fq-photo:hover img { transform: scale(1.04); }
.pur-fq-photo-frame {
  position: absolute; inset: 16px; border: 1px solid rgba(184,146,74,.3);
  border-radius: 2px; pointer-events: none; z-index: 1;
}
.pur-fq-content { display: flex; flex-direction: column; gap: 28px; }
.pur-fq-mark {
  font-family: var(--serif); font-size: 120px; line-height: .6;
  color: rgba(184,146,74,.18);
  pointer-events: none; margin-bottom: -16px;
}
.pur-fq-quote {
  font-family: var(--serif); font-style: italic;
  font-size: clamp(20px, 2.2vw, 30px); font-weight: 400; line-height: 1.65;
  color: rgba(255,255,255,.85); letter-spacing: -.2px;
  border-left: 2px solid var(--gold); padding-left: 24px;
  border-top: none; padding-top: 0;
}
.pur-fq-sig { }
.pur-fq-name {
  font-family: var(--serif); font-size: 20px; font-style: italic;
  color: var(--gold-lt); margin-bottom: 6px;
}
.pur-fq-title {
  font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
  color: rgba(255,255,255,.3); font-weight: 400;
}

/* Responsive — purpose page */
@media (max-width: 1100px) {
  .pur-vals-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 880px) {
  .pur-vm-grid { grid-template-columns: 1fr; }
  .pur-vm-card { padding: 52px 40px; }
  .pur-vals-grid { grid-template-columns: repeat(2, 1fr); }
  .pur-fq-inner { grid-template-columns: 1fr; gap: 48px; }
  .pur-fq-photo { max-width: 480px; }
}
@media (max-width: 560px) {
  .pur-vals-grid { grid-template-columns: 1fr; }
  .pur-vm-card { padding: 40px 28px; }
  .pur-fq-mark { font-size: 80px; }
  .pur-fq-photo { max-width: 100%; }
}

/* Hero */
.hl-hero {
  position: relative;
  background: var(--black);
  padding: 180px 0 100px;
  overflow: hidden;
}
.hl-hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 70% at 15% 50%, rgba(184,146,74,.09) 0%, transparent 55%),
    radial-gradient(ellipse 40% 50% at 85% 30%, rgba(255,255,255,.03) 0%, transparent 50%);
}
.hl-hero-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
  background-size: 80px 80px;
  animation: gridDrift 30s linear infinite;
  mask-image: radial-gradient(ellipse 90% 85% at 50% 50%, black 20%, transparent 100%);
}
.hl-hero-inner { position: relative; z-index: 2; }
.hl-hero-h1 {
  font-family: var(--serif);
  font-size: clamp(44px, 6vw, 88px);
  font-weight: 400; letter-spacing: -2px; line-height: 1.05;
  color: var(--white); margin-bottom: 28px;
}
.hl-hero-h1 em { font-style: italic; color: var(--gold-lt); }
.hl-hero-sub {
  font-size: 16px; line-height: 1.85;
  color: rgba(255,255,255,.42); font-weight: 300;
  max-width: 560px;
}

/* Stats band */
.hl-stats { background: var(--pearl); padding: 80px 0; }
.hl-stats-grid {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
  background: var(--silver); border: 1px solid var(--silver);
}
.hl-stat-card {
  background: var(--white); padding: 52px 32px;
  text-align: center; position: relative; overflow: hidden;
  transition: background .4s;
}
.hl-stat-card:hover { background: var(--snow); }
.hl-stat-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  opacity: 0; transition: opacity .4s;
}
.hl-stat-card:hover::before { opacity: 1; }
.hl-stat-val {
  font-family: var(--serif); font-size: clamp(44px, 5vw, 68px); font-weight: 400;
  color: var(--ink); line-height: 1; margin-bottom: 14px;
  display: flex; align-items: flex-start; justify-content: center;
}
.hl-stat-p { font-size: .55em; margin-top: 6px; color: var(--gold); font-weight: 300; }
.hl-stat-label {
  font-size: 10px; letter-spacing: 3.5px; text-transform: uppercase;
  color: var(--slate); font-weight: 600;
}

/* Brand section */
.hl-brands { background: var(--white); padding: var(--pad) 0; }
.hl-brands-sub {
  font-size: 15.5px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
  max-width: 600px; margin-top: 20px;
}

/* FAQ List */
.faq-list { display: flex; flex-direction: column; gap: 2px; }

.faq-item {
  border: 1px solid var(--silver);
  background: var(--white);
  overflow: hidden;
  transition: border-color .35s, box-shadow .35s;
}
.faq-item.open {
  border-color: var(--gold);
  box-shadow: 0 8px 40px rgba(184,146,74,.1);
}
.faq-item:hover { border-color: var(--ash); }
.faq-item.open:hover { border-color: var(--gold); }

/* FAQ question row */
.faq-q {
  width: 100%; padding: 32px 40px;
  display: flex; align-items: center; justify-content: space-between;
  background: none; cursor: pointer;
  transition: background .3s;
  text-align: left;
}
.faq-q:hover { background: var(--pearl); }
.faq-item.open .faq-q { background: var(--gold-bg); }

.faq-q-left {
  display: flex; align-items: center; gap: 32px;
}
.faq-brand-logo-wrap {
  width: 120px; height: 44px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.faq-brand-logo {
  width: 120px; height: 44px; object-fit: contain;
  filter: none;
  transition: transform .35s;
}
.faq-item.open .faq-brand-logo,
.faq-q:hover .faq-brand-logo { filter: none; }

.faq-q-text {
  display: flex; flex-direction: column; gap: 4px;
}
.faq-brand-name {
  font-family: var(--serif); font-size: 22px; font-weight: 400;
  color: var(--ink); letter-spacing: -.3px;
}
.faq-brand-cat {
  font-size: 10.5px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--slate); font-weight: 500;
}

/* Plus / Minus icon */
.faq-icon {
  width: 28px; height: 28px; flex-shrink: 0;
  position: relative;
  border: 1px solid var(--ash); border-radius: 50%;
  transition: background .3s, border-color .3s;
}
.faq-item.open .faq-icon { background: var(--gold); border-color: var(--gold); }
.faq-icon-bar {
  position: absolute; background: var(--charcoal);
  left: 50%; top: 50%; border-radius: 1px;
  transform: translate(-50%,-50%);
  transition: transform .35s, opacity .35s, background .3s;
}
.faq-item.open .faq-icon-bar { background: var(--white); }
.faq-icon-h { width: 12px; height: 1.5px; }
.faq-icon-v { width: 1.5px; height: 12px; }
.faq-item.open .faq-icon-v {
  transform: translate(-50%,-50%) rotate(90deg);
  opacity: 0;
}

/* FAQ answer panel */
.faq-a {
  max-height: 0; overflow: hidden;
  transition: max-height .55s cubic-bezier(.76,0,.24,1);
}
.faq-a-inner { padding: 0 40px 44px; }

.faq-intro {
  font-size: 15px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
  margin-bottom: 36px; padding-top: 4px;
  border-left: 2px solid var(--gold-lt); padding-left: 20px;
}
.faq-intro strong { color: var(--ink); font-weight: 600; }

/* Achievement rows */
.faq-achievements { display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px; }
.faq-ach-row {
  display: flex; align-items: flex-start; gap: 20px;
  padding: 18px 24px;
  background: var(--pearl); border: 1px solid var(--silver);
  border-radius: var(--radius);
  transition: border-color .3s, transform .3s;
}
.faq-ach-row:hover { border-color: var(--gold-lt); transform: translateX(4px); }
.faq-ach-badge {
  padding: 5px 12px;
  background: var(--gold); color: var(--white);
  font-size: 9px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700;
  border-radius: var(--radius); white-space: nowrap; flex-shrink: 0;
  margin-top: 2px;
}
.faq-ach-info { flex: 1; }
.faq-ach-text {
  font-size: 14px; line-height: 1.65; color: var(--ink); font-weight: 400;
  margin-bottom: 4px;
}
.faq-ach-years {
  font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--gold-dk); font-weight: 600;
}

/* Model tags */
.faq-models-lbl {
  font-size: 9.5px; letter-spacing: 4px; text-transform: uppercase;
  color: var(--slate); font-weight: 700; margin-bottom: 14px;
}
.faq-models-grid { display: flex; flex-wrap: wrap; gap: 8px; }
.faq-model-tag {
  padding: 7px 16px;
  border: 1px solid var(--silver);
  font-size: 12px; letter-spacing: 1px; color: var(--charcoal);
  border-radius: var(--radius);
  transition: border-color .3s, color .3s, background .3s;
}
.faq-model-tag:hover { border-color: var(--gold); color: var(--ink); background: var(--gold-bg); }

/* Stellantis overall band */
.hl-stellantis {
  background: var(--panel);
  padding: var(--pad) 0;
}
.hl-stl-inner {
  display: flex; align-items: center; gap: 80px;
}
.hl-stl-badge {
  flex-shrink: 0;
  width: 160px; height: 160px; border-radius: 50%;
  background: var(--gold);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  box-shadow: 0 0 0 20px rgba(184,146,74,.1);
}
.hl-stl-n {
  font-family: var(--serif); font-size: 64px; font-weight: 400;
  color: var(--white); line-height: 1;
}
.hl-stl-l {
  font-size: 8px; letter-spacing: 2.5px; text-transform: uppercase;
  color: rgba(255,255,255,.75); margin-top: 4px; text-align: center; line-height: 1.6;
}
.hl-stl-body {
  font-size: 15.5px; line-height: 1.88; color: rgba(255,255,255,.48); font-weight: 300;
  margin-top: 24px;
}
.hl-stl-body strong { color: rgba(255,255,255,.85); font-weight: 600; }

/* CTA strip */
.hl-cta { background: var(--pearl); padding: 64px 0; }
.hl-cta-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 24px; }
.hl-cta-text { font-family: var(--serif); font-size: 28px; font-weight: 400; color: var(--ink); }

/* Company profile download */
.hl-profile {
  background: var(--black);
  padding: 80px 0;
  border-top: 1px solid rgba(208,206,201,.15);
}
.hl-profile-inner {
  display: flex; align-items: center;
  justify-content: space-between; gap: 64px;
  flex-wrap: wrap;
}
.hl-profile-left {
  display: flex; align-items: flex-start; gap: 32px; flex: 1; min-width: 280px;
}
.hl-profile-icon {
  flex-shrink: 0; margin-top: 6px;
}
.hl-profile-meta { flex: 1; }
.hl-profile-h2 {
  font-family: var(--serif);
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 400; line-height: 1.15;
  color: var(--white); margin-bottom: 18px;
}
.hl-profile-h2 em { font-style: italic; color: var(--ash); }
.hl-profile-body {
  font-size: 14px; line-height: 1.8;
  color: rgba(255,255,255,.5); max-width: 520px;
  margin-bottom: 20px;
}
.hl-profile-info { display: flex; gap: 10px; flex-wrap: wrap; }
.hl-profile-tag {
  font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
  padding: 4px 12px;
  border: 1px solid rgba(208,206,201,.3);
  color: rgba(208,206,201,.7);
}
/* Download button */
.hl-profile-btn {
  display: flex; align-items: center; gap: 20px;
  padding: 24px 36px;
  background: linear-gradient(135deg, var(--ash) 0%, var(--slate) 100%);
  color: var(--white); text-decoration: none;
  flex-shrink: 0;
  transition: transform .25s, box-shadow .25s;
  box-shadow: 0 8px 32px rgba(208,206,201,.2);
}
.hl-profile-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 40px rgba(208,206,201,.3);
}
.hl-profile-btn-icon {
  font-size: 28px; line-height: 1;
  width: 48px; height: 48px; border-radius: 50%;
  background: rgba(255,255,255,.15);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.hl-profile-btn-text { display: flex; flex-direction: column; gap: 4px; }
.hl-profile-btn-label {
  font-size: 13px; letter-spacing: 2.5px; text-transform: uppercase;
  font-weight: 700;
}
.hl-profile-btn-sub {
  font-size: 10px; letter-spacing: 1.5px; opacity: .75;
}
@media (max-width: 880px) {
  .hl-profile-inner { flex-direction: column; align-items: flex-start; gap: 40px; }
  .hl-profile-btn { width: 100%; justify-content: center; }
}
@media (max-width: 560px) {
  .hl-profile-left { flex-direction: column; gap: 20px; }
}

/* Responsive — highlights */
@media (max-width: 1100px) {
  .hl-stats-grid { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 880px) {
  .hl-stl-inner { flex-direction: column; align-items: flex-start; gap: 40px; }
  .faq-q { padding: 24px 28px; }
  .faq-q-left { gap: 20px; }
  .faq-a-inner { padding: 0 28px 36px; }
  .hl-cta-inner { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 560px) {
  .hl-stats-grid { grid-template-columns: 1fr 1fr; }
  .faq-brand-logo-wrap { width: 80px; height: 36px; }
  .faq-brand-logo { width: 80px; height: 36px; }
  .faq-brand-name { font-size: 18px; }
  .hl-stl-badge { width: 120px; height: 120px; }
  .hl-stl-n { font-size: 48px; }
}

/* ═══════════════════════════════════════════════
   CAREERS PAGE
═══════════════════════════════════════════════ */
.car-hero {
  position: relative; min-height: 640px;
  display: flex; align-items: center;
  background: var(--black); overflow: hidden;
}
.car-hero-bg {
  position: absolute; inset: 0;
  background:
    linear-gradient(135deg, rgba(20,18,16,.98) 0%, rgba(30,26,22,.92) 60%, rgba(14,12,10,.95) 100%);
}
.car-hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(193,155,90,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(193,155,90,.04) 1px, transparent 1px);
  background-size: 80px 80px;
}
.car-hero-inner {
  position: relative; z-index: 2;
  padding-top: 160px; padding-bottom: 100px;
  max-width: 820px;
}
.car-hero-h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 600; line-height: 1.12; letter-spacing: -1px;
  color: var(--white); margin: 20px 0 28px;
}
.car-hero-h1 em { font-style: italic; color: var(--ash); }
.car-hero-sub {
  font-size: 16px; line-height: 1.75; color: rgba(255,255,255,.65);
  max-width: 600px; margin-bottom: 40px;
}
.car-hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }

/* Why section */
.car-why { background: var(--snow); padding: var(--pad) 0; }
.car-why-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 32px; margin-top: 64px;
}
.car-why-card {
  background: var(--white); padding: 40px 36px;
  border: 1px solid var(--silver);
  transition: transform .4s var(--ease), box-shadow .4s;
}
.car-why-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgba(0,0,0,.08);
}
.car-why-icon {
  font-size: 22px; color: var(--gold); margin-bottom: 20px;
}
.car-why-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px; font-weight: 600; color: var(--ink);
  margin-bottom: 14px;
}
.car-why-body { font-size: 14px; line-height: 1.75; color: var(--slate); }

/* Openings */
.car-openings { background: var(--white); padding: var(--pad) 0; }
.car-jobs-grid { margin-top: 56px; }
.car-division-label {
  font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
  font-weight: 600; color: var(--gold);
  padding: 40px 0 20px;
  border-top: 1px solid var(--silver);
  margin-top: 16px;
}
.car-division-label:first-child { border-top: none; margin-top: 0; padding-top: 0; }
.car-job-card {
  display: flex; align-items: center; justify-content: space-between;
  padding: 28px 32px;
  border: 1px solid var(--silver);
  margin-bottom: 12px;
  transition: border-color .3s, background .3s, transform .3s;
}
.car-job-card:hover {
  border-color: var(--gold); background: var(--snow);
  transform: translateX(6px);
}
.car-job-dept {
  font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--gold); font-weight: 600; margin-bottom: 8px;
}
.car-job-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px; font-weight: 500; color: var(--ink);
  margin-bottom: 10px;
}
.car-job-meta { display: flex; gap: 20px; align-items: center; }
.car-job-loc { font-size: 12.5px; color: var(--slate); }
.car-job-type {
  font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
  background: var(--pearl); color: var(--charcoal);
  padding: 4px 10px;
}
.car-job-apply {
  font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
  font-weight: 600; color: var(--ash);
  border: 1px solid var(--ash); padding: 10px 24px;
  white-space: nowrap;
  transition: background .3s, color .3s;
}
.car-job-apply:hover { background: var(--ash); color: var(--black); }

/* Apply / CTA */
.car-apply { background: var(--black); padding: var(--pad) 0; }
.car-apply-inner {
  display: grid; grid-template-columns: 1fr 1.4fr;
  gap: 80px; align-items: start;
}
.car-apply-h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 3.5vw, 44px); font-weight: 600;
  color: var(--white); line-height: 1.2; margin: 20px 0 24px;
}
.car-apply-h2 em { font-style: italic; color: var(--ash); }
.car-apply-body { font-size: 14.5px; line-height: 1.8; color: rgba(255,255,255,.6); }
.car-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.car-input {
  width: 100%; padding: 14px 18px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.12);
  color: rgba(255,255,255,.9); font-size: 13.5px;
  outline: none; font-family: inherit;
  transition: border-color .3s, background .3s;
  box-sizing: border-box;
}
.car-input::placeholder { color: rgba(255,255,255,.3); }
.car-input:focus { border-color: var(--ash); background: rgba(255,255,255,.08); }
.car-select { cursor: pointer; }
.car-select option { background: #1c1a18; color: #e8e0d4; }
.car-textarea { min-height: 120px; resize: vertical; margin-bottom: 16px; display: block; }
/* CV upload */
.car-upload-wrap { margin-bottom: 24px; }
.car-upload-input { display: none; }
.car-upload-label {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 18px; cursor: pointer;
  border: 1px dashed rgba(208,206,201,.45);
  background: rgba(208,206,201,.04);
  transition: border-color .3s, background .3s;
}
.car-upload-label:hover { border-color: var(--ash); background: rgba(208,206,201,.09); }
.car-upload-icon {
  width: 36px; height: 36px; flex-shrink: 0;
  background: rgba(208,206,201,.12); border: 1px solid rgba(208,206,201,.3);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; color: var(--ash);
}
.car-upload-text { font-size: 13px; color: rgba(255,255,255,.85); font-weight: 500; }
.car-upload-hint { font-size: 11px; color: rgba(255,255,255,.35); letter-spacing: .5px; margin-left: auto; }
.car-upload-name {
  margin-top: 8px; font-size: 11px; letter-spacing: .5px;
  color: var(--ash); padding-left: 4px;
}
.car-submit {
  width: 100%; padding: 16px;
  background: var(--ash); color: var(--black);
  border: none; font-size: 11px; letter-spacing: 2.5px;
  text-transform: uppercase; font-weight: 600; cursor: pointer;
  font-family: inherit;
  transition: background .3s, transform .2s;
}
.car-submit:hover { background: var(--slate); color: var(--white); transform: translateY(-2px); }

/* Responsive */
@media (max-width: 1024px) {
  .car-why-grid { grid-template-columns: repeat(2, 1fr); }
  .car-apply-inner { grid-template-columns: 1fr; gap: 56px; }
}
@media (max-width: 680px) {
  .car-why-grid { grid-template-columns: 1fr; }
  .car-form-row { grid-template-columns: 1fr; }
  .car-job-card { flex-direction: column; align-items: flex-start; gap: 16px; }
}

/* ═══════════════════════════════════════════════
   LOCATIONS PAGE — ENHANCED
═══════════════════════════════════════════════ */

/* ── Hero ── */
.loc-hero {
  position: relative; height: 100vh; min-height: 640px;
  display: flex; align-items: center;
  background: var(--black); overflow: hidden;
}
.loc-hero-bg {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 70% at 20% 50%, rgba(184,146,74,.12) 0%, transparent 60%);
}
.loc-hero-imgs {
  position: absolute; inset: 0;
}
.loc-hero-img {
  position: absolute; inset: 0;
  background-size: cover; background-position: center;
  opacity: 0; transition: opacity 1.2s ease;
  filter: grayscale(20%) brightness(.38);
}
.loc-hero-img.active {
  opacity: 1;
}
.loc-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.3) 100%);
}
.loc-hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 95% 90% at 50% 40%, black 20%, transparent 100%);
}
.loc-hero-inner {
  position: relative; z-index: 10;
  padding-top: var(--nav-h);
  padding-bottom: 60px;
}
.loc-hero-tag {
  font-size: 9.5px; letter-spacing: 5px; text-transform: uppercase;
  color: var(--gold); font-weight: 600;
  display: flex; align-items: center; gap: 14px; margin-bottom: 24px;
}
.loc-hero-tag::before { content:''; width:30px; height:1px; background:var(--gold); }
.loc-hero-h1 {
  font-family: var(--serif); font-size: clamp(52px,7vw,96px);
  font-weight: 400; line-height: .95; letter-spacing: -2px;
  color: var(--white); margin-bottom: 24px;
}
.loc-hero-h1 em { font-style: italic; color: var(--gold-lt); }
.loc-hero-sub {
  font-size: 15px; line-height: 1.8; color: rgba(255,255,255,.5);
  max-width: 480px; font-weight: 300; margin-bottom: 48px;
}
.loc-hero-countries {
  display: flex; gap: 8px; flex-wrap: wrap;
}
.loc-hero-ctry {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 10px 22px; border: 1px solid rgba(255,255,255,.18);
  color: rgba(255,255,255,.55); font-size: 11px; letter-spacing: 2px;
  text-transform: uppercase; font-weight: 500;
  transition: all .35s; border-radius: 2px; cursor: pointer;
  background: rgba(0,0,0,.2);
  backdrop-filter: blur(6px);
}
.loc-hero-ctry img { width: 22px; height: 15px; object-fit:cover; border-radius:2px; }
.loc-hero-ctry:hover,
.loc-hero-ctry.active {
  border-color: var(--ash);
  color: var(--white);
  background: rgba(255,255,255,.08);
}
.loc-hero-ctry.active {
  border-color: var(--ash);
  color: var(--white);
  background: rgba(255,255,255,.12);
}
/* active country label below hero */
.loc-hero-active-label {
  position: absolute; bottom: 100px; left: 0; right: 0;
  text-align: center; z-index: 11;
  pointer-events: none;
}
.loc-hero-active-label span {
  font-family: var(--serif);
  font-size: clamp(42px,6vw,80px);
  font-weight: 400; letter-spacing: -1px;
  color: rgba(255,255,255,.06);
  text-transform: uppercase;
  transition: opacity .5s ease;
  user-select: none;
}
.loc-hero-scroll {
  position: absolute; bottom: 44px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 10px;
}
.loc-hero-scroll span {
  font-size: 8px; letter-spacing: 5px; text-transform: uppercase;
  color: rgba(255,255,255,.25);
}
.loc-hero-scroll-line {
  width: 1px; height: 52px;
  background: linear-gradient(to bottom, rgba(184,146,74,.5), transparent);
  animation: lineAnim 2s ease-in-out infinite;
}

/* ── Stats strip ── */
.loc-stats {
  background: var(--panel); border-bottom: 1px solid rgba(255,255,255,.06);
}
.loc-stats-inner {
  display: flex; align-items: center; justify-content: center;
  gap: 0; padding: 0;
}
.loc-stat {
  flex: 1; text-align: center; padding: 36px 24px;
  border-right: 1px solid rgba(255,255,255,.06);
}
.loc-stat:last-child { border-right: none; }
.loc-stat-n {
  font-family: var(--serif); font-size: 44px; color: var(--gold);
  line-height: 1; display: block; margin-bottom: 6px;
}
.loc-stat-l {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  color: rgba(255,255,255,.35); font-weight: 400;
}
.loc-stat-div { display: none; }

/* ── Filter bar ── */
.loc-filters {
  background: var(--white); border-bottom: 1px solid var(--silver);
  position: sticky; top: 72px; z-index: 90;
  box-shadow: 0 2px 20px rgba(0,0,0,.06);
}
.loc-filters-inner {
  display: flex; gap: 0; overflow-x: auto; scrollbar-width: none;
}
.loc-filters-inner::-webkit-scrollbar { display: none; }
.loc-flt {
  flex-shrink: 0; display: inline-flex; align-items: center; gap: 8px;
  padding: 18px 28px;
  font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--ash); background: none; border: none;
  border-bottom: 2px solid transparent;
  transition: color .2s, border-color .2s; cursor: pointer;
}
.loc-flt-flag { width: 20px; height: 14px; object-fit: cover; border-radius: 2px; }
.loc-flt:hover { color: var(--charcoal); }
.loc-flt.active { color: var(--gold-dk); border-bottom-color: var(--gold); }

/* ── Country sections ── */
.loc-country { background: var(--white); }
.loc-country--alt { background: var(--snow); }

/* Country banner */
.loc-country-banner {
  position: relative; height: 360px;
  background-size: cover; background-position: center 20%;
  display: flex; align-items: flex-end; overflow: hidden;
}
/* Video variant */
.loc-country-banner--video { background: var(--black); }
.loc-country-banner-video {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  pointer-events: none;
  border: none;
  transform: scale(1.05);
}
.loc-country-banner-shade {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.92) 0%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.25) 100%);
}
.loc-country-banner-inner {
  position: relative; z-index: 2;
  padding-bottom: 56px;
}
.loc-country-tag {
  font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
  color: var(--gold); font-weight: 600; margin-bottom: 16px;
  display: flex; align-items: center; gap: 12px;
}
.loc-country-tag::before { content:''; width:24px; height:1px; background:var(--gold); }
.loc-country-banner-row {
  display: flex; align-items: center; gap: 20px; margin-bottom: 16px;
}
.loc-country-flag {
  width: 52px; height: 35px; object-fit: cover;
  border-radius: 3px; box-shadow: 0 3px 16px rgba(0,0,0,.4);
}
.loc-country-title {
  font-family: var(--serif); font-size: clamp(36px,5vw,68px);
  font-weight: 400; color: #fff; line-height: 1; letter-spacing: -1px;
}
.loc-country-desc {
  font-size: 14.5px; color: rgba(255,255,255,.6); max-width: 600px;
  line-height: 1.7; font-weight: 300; margin-bottom: 24px;
}
.loc-country-pills { display: flex; gap: 8px; flex-wrap: wrap; }
.loc-pill {
  padding: 6px 14px; border: 1px solid rgba(184,146,74,.4);
  color: rgba(255,255,255,.7); font-size: 10px; letter-spacing: 1.5px;
  text-transform: uppercase; font-weight: 500; border-radius: 2px;
  background: rgba(184,146,74,.08);
}

/* ── Category row ── */
.loc-cat-row {
  display: flex; align-items: center; gap: 14px;
  margin-top: 56px; margin-bottom: 28px; padding-bottom: 16px;
  border-bottom: 1px solid var(--silver);
}
.loc-cat-row:first-of-type { margin-top: 56px; }
.loc-cat-icon { color: var(--gold); font-size: 13px; flex-shrink: 0; }
.loc-cat-name {
  font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
  font-weight: 700; color: var(--charcoal);
}
.loc-cat-count { display: none; }

/* ── Location cards grid ── */
.loc-location-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 24px; padding-bottom: 12px;
}

/* ── Individual location card ── */
.lloc-card {
  border-radius: 4px; overflow: hidden;
  background: var(--white); border: 1px solid var(--silver);
  transition: transform .3s, box-shadow .3s;
  display: flex; flex-direction: column;
}
.lloc-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0,0,0,.12);
}
.lloc-card--dark { background: var(--panel); border-color: rgba(184,146,74,.2); }
.lloc-card--featured { }

/* card photo */
/* ── Location card slider ── */
.lloc-slider {
  position: relative; height: 280px;
  overflow: hidden; flex-shrink: 0;
  background: #111;
}
.lloc-slides {
  position: absolute; inset: 0;
  pointer-events: none;
}
.lloc-slide {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity .6s ease;
}
.lloc-slide.active { opacity: 1; }
/* Featured card same height as regular cards */
.lloc-card--featured .lloc-slider { }

/* arrows */
.lloc-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  z-index: 6;
  background: rgba(0,0,0,.55); backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,.18);
  color: #fff; font-size: 26px; line-height: 1;
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%; cursor: pointer;
  opacity: 0;
  transition: opacity .25s, background .25s;
}
.lloc-slider:hover .lloc-arrow { opacity: 1; }
.lloc-arrow:hover { background: var(--gold); color: var(--black); border-color: var(--gold); }
.lloc-arrow--prev { left: 10px; }
.lloc-arrow--next { right: 10px; }

/* dots */
.lloc-dots {
  position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);
  display: flex; gap: 6px; z-index: 6;
}
.lloc-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: rgba(255,255,255,.4); border: none; cursor: pointer;
  padding: 0; transition: background .25s, transform .25s;
}
.lloc-dot.active { background: var(--gold); transform: scale(1.3); }

/* shade & badges (same as before, now inside .lloc-slider) */
.lloc-photo-shade {
  position: absolute; inset: 0; z-index: 2;
  background: linear-gradient(to top, rgba(0,0,0,.72) 0%, rgba(0,0,0,.1) 60%);
  pointer-events: none;
}
.lloc-brand-badge {
  position: absolute; bottom: 14px; left: 16px;
  z-index: 4;
  font-family: var(--serif); font-size: 18px; font-style: italic;
  color: #fff; font-weight: 400;
  text-shadow: 0 2px 8px rgba(0,0,0,.5);
}
.lloc-brand-badge--gold { color: var(--gold-lt); }
.lloc-country-chip {
  position: absolute; top: 12px; right: 12px;
  z-index: 4;
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(0,0,0,.6); backdrop-filter: blur(8px);
  padding: 5px 10px; border-radius: 20px;
  font-size: 10px; letter-spacing: 1px; text-transform: uppercase;
  color: rgba(255,255,255,.85); font-weight: 500;
}
.lloc-country-chip img { width: 16px; height: 11px; object-fit:cover; border-radius:1px; }
.lloc-featured-ribbon { display: none; }

/* card body */
.lloc-body {
  padding: 24px 24px 28px;
  display: flex; flex-direction: column; flex: 1;
}
.lloc-type {
  font-size: 9.5px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--gold); font-weight: 600; margin-bottom: 10px;
}
.lloc-card--dark .lloc-type { color: var(--gold-lt); }
.lloc-name {
  font-family: var(--serif); font-size: 20px; font-weight: 600;
  color: var(--charcoal); line-height: 1.25; margin-bottom: 12px;
}
.lloc-card--dark .lloc-name { color: #fff; }
.lloc-cities {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: var(--slate); margin-bottom: 14px;
}
.lloc-city-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--gold); flex-shrink: 0;
}
.lloc-card--dark .lloc-cities { color: rgba(255,255,255,.4); }
.lloc-desc {
  font-size: 13px; line-height: 1.75; color: var(--charcoal);
  font-weight: 300; flex: 1; margin-bottom: 18px;
}
.lloc-card--dark .lloc-desc { color: rgba(255,255,255,.55); }
.lloc-desc strong { color: var(--charcoal); font-weight: 600; }
.lloc-card--dark .lloc-desc strong { color: #fff; }

/* achievement tags */
.lloc-tags {
  display: flex; gap: 6px; flex-wrap: wrap; margin-top: auto;
}
.lloc-tag {
  font-size: 9px; letter-spacing: 1.2px; text-transform: uppercase;
  font-weight: 600; padding: 4px 9px; border-radius: 2px;
  background: var(--pearl); color: var(--charcoal); border: 1px solid var(--silver);
}
.lloc-tag--gold {
  background: rgba(184,146,74,.1);
  color: var(--gold-dk); border-color: rgba(184,146,74,.35);
}
.lloc-card--dark .lloc-tag {
  background: rgba(255,255,255,.06);
  color: rgba(255,255,255,.5); border-color: rgba(255,255,255,.1);
}
.lloc-card--dark .lloc-tag--gold {
  background: rgba(184,146,74,.15);
  color: var(--gold-lt); border-color: rgba(184,146,74,.4);
}

/* container padding inside country sections */
.loc-country > .container { padding-top: 16px; padding-bottom: 80px; }

/* ── CTA strip ── */
.loc-cta-strip {
  background: var(--panel);
  border-top: 1px solid rgba(255,255,255,.06);
}
.loc-cta-inner {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 64px; padding-bottom: 64px; gap: 40px; flex-wrap: wrap;
}
.loc-cta-label {
  font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
  color: var(--gold); font-weight: 600; margin-bottom: 10px;
  display: flex; align-items: center; gap: 12px;
}
.loc-cta-label::before { content:''; width:24px; height:1px; background:var(--gold); }
.loc-cta-h3 {
  font-family: var(--serif); font-size: clamp(26px,3vw,44px);
  color: #fff; font-weight: 400; letter-spacing: -1px;
}
.loc-cta-btn {
  display: inline-flex; align-items: center; gap: 14px;
  padding: 16px 40px; background: var(--gold);
  color: var(--black); font-size: 10px; letter-spacing: 3px;
  text-transform: uppercase; font-weight: 700; border-radius: 2px;
  transition: background .3s, transform .3s; white-space: nowrap;
}
.loc-cta-btn:hover { background: var(--gold-lt); transform: translateY(-2px); }

/* ── Responsive ── */
@media (max-width: 1100px) {
  .loc-location-grid { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 768px) {
  .loc-stats-inner { flex-wrap: wrap; }
  .loc-stat { flex: 1 1 40%; border-right: none; border-bottom: 1px solid rgba(255,255,255,.06); }
  .loc-country-banner { height: 320px; }
  .loc-hero-h1 { font-size: clamp(44px,12vw,72px); }
  .loc-hero-imgs { display: block; } /* keep full-bleed on mobile */
}
@media (max-width: 600px) {
  .loc-location-grid { grid-template-columns: 1fr; }
  .loc-flt { padding: 14px 16px; font-size: 10px; }
  .loc-cta-inner { flex-direction: column; align-items: flex-start; }
}

/* ═══════════════════════════════════════════════
   NEWS PAGE
═══════════════════════════════════════════════ */
.np-hero {
  position: relative; min-height: 380px;
  display: flex; align-items: flex-end;
  background: var(--black); overflow: hidden;
  padding-bottom: 80px;
}
.np-hero-bg {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(20,18,16,.98) 0%, rgba(30,26,22,.90) 100%);
}
.np-hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(193,155,90,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(193,155,90,.04) 1px, transparent 1px);
  background-size: 80px 80px;
}
.np-hero-inner {
  position: relative; z-index: 2;
  padding-top: 160px;
}
.np-hero-h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 600; line-height: 1.1; letter-spacing: -1px;
  color: var(--white); margin: 16px 0 20px;
}
.np-hero-h1 em { font-style: italic; color: var(--gold-lt); }
.np-hero-sub {
  font-size: 15px; color: rgba(255,255,255,.55);
  line-height: 1.7; max-width: 560px;
}

/* Articles list */
.np-articles {
  background: var(--white);
  padding: 80px 0 100px;
}
.np-article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
  padding: 72px 0;
}
/* Alternate image side every other article */
.np-article:nth-child(odd)  .np-article-photos { order: 1; }
.np-article:nth-child(odd)  .np-article-body   { order: 2; }
.np-article:nth-child(even) .np-article-photos { order: 2; }
.np-article:nth-child(even) .np-article-body   { order: 1; }

.np-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--silver), transparent);
}

/* Photo slider */
.np-photo-slider {
  position: relative;
  overflow: hidden;
  height: 460px;
  background: var(--ink);
}
.np-photo-track {
  display: flex; height: 100%;
  transition: transform .65s cubic-bezier(.76,0,.24,1);
}
.np-photo-slide {
  flex: 0 0 100%; width: 100%; height: 100%;
  position: relative; overflow: hidden;
}
.np-photo-slide img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: center;
  display: block;
  transition: transform 1.2s cubic-bezier(0.4,0,0.2,1);
}
.np-photo-slide:hover img { transform: scale(1.04); }

/* Nav arrows */
.np-prev, .np-next {
  position: absolute; top: 50%; transform: translateY(-50%);
  z-index: 10; width: 42px; height: 42px;
  background: rgba(0,0,0,.45); backdrop-filter: blur(4px);
  border: 1px solid rgba(255,255,255,.15);
  color: rgba(255,255,255,.8); font-size: 16px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: background .3s, border-color .3s;
}
.np-prev:hover, .np-next:hover {
  background: var(--gold); border-color: var(--gold); color: var(--white);
}
.np-prev { left: 14px; }
.np-next { right: 14px; }

/* Dots */
.np-dots {
  position: absolute; bottom: 14px; left: 0; right: 0;
  display: flex; justify-content: center; gap: 6px; z-index: 10;
}
.np-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: rgba(255,255,255,.3); cursor: pointer;
  transition: background .3s, transform .3s;
}
.np-dot.active { background: var(--gold); transform: scale(1.5); }

/* Counter */
.np-counter {
  position: absolute; top: 14px; left: 14px; z-index: 10;
  padding: 4px 12px;
  background: rgba(0,0,0,.5); backdrop-filter: blur(4px);
  border: 1px solid rgba(255,255,255,.1);
  font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
  color: rgba(255,255,255,.7);
}

/* Article text */
.np-article-body { padding: 8px 0; }
.np-meta {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 20px;
}
.np-date {
  font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--slate); font-weight: 500;
}
.np-sep {
  width: 24px; height: 1px; background: var(--ash); flex-shrink: 0;
}
.np-cat {
  font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--gold); font-weight: 600;
}
.np-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(24px, 2.4vw, 34px); font-weight: 500;
  color: var(--ink); line-height: 1.3; letter-spacing: -.5px;
  margin-bottom: 28px;
}
.np-text p {
  font-size: 14.5px; line-height: 1.88; color: var(--slate);
  margin-bottom: 16px;
}
.np-text p:last-child { margin-bottom: 0; }

/* Responsive */
@media (max-width: 900px) {
  .np-article {
    grid-template-columns: 1fr;
    gap: 40px; padding: 56px 0;
  }
  .np-article:nth-child(odd)  .np-article-photos,
  .np-article:nth-child(even) .np-article-photos { order: 1; }
  .np-article:nth-child(odd)  .np-article-body,
  .np-article:nth-child(even) .np-article-body   { order: 2; }
  .np-photo-slider { height: 320px; }
}
@media (max-width: 560px) {
  .np-photo-slider { height: 240px; }
  .np-hero-inner { padding-top: 120px; }
}
        `}})]}),e("body",{children:[e("div",{class:"noise","aria-hidden":"true"}),e("div",{id:"cur-ring","aria-hidden":"true"}),e("div",{id:"cur-dot","aria-hidden":"true"}),e("div",{id:"loader",children:[e("img",{src:"/static/logo-white.png",alt:"Harlem Group",class:"loader-logo"}),e("div",{class:"loader-slogan",children:"Quality You Deserve!"}),e("div",{class:"loader-track",children:e("div",{class:"loader-fill"})}),e("div",{class:"loader-count",id:"lCount",children:"Loading..."})]}),e("div",{id:"fs-menu","aria-hidden":"true",role:"dialog",children:[e("button",{class:"fs-close",id:"fsClose","aria-label":"Close menu",children:[e("span",{class:"fs-close-x",children:"×"}),e("span",{children:"Close"})]}),e("div",{class:"fs-body",children:[e("nav",{class:"fs-nav","aria-label":"Fullscreen navigation",children:[e("a",{href:"/#founder",class:"fs-link","data-text":"About",onclick:"closeFsMenu()",children:"About"}),e("div",{class:"fs-sub-group",children:[e("a",{href:"/purpose",class:"fs-sub-link",onclick:"closeFsMenu()",children:"Our Purpose"}),e("a",{href:"/highlights",class:"fs-sub-link",onclick:"closeFsMenu()",children:"Highlights"}),e("a",{href:"/#divisions",class:"fs-sub-link",onclick:"closeFsMenu()",children:"Divisions"})]}),e("a",{href:"/#brands",class:"fs-link","data-text":"Partners",onclick:"closeFsMenu()",children:"Partners"}),e("a",{href:"/locations",class:"fs-link","data-text":"Locations",onclick:"closeFsMenu()",children:"Locations"}),e("a",{href:"/news",class:"fs-link","data-text":"News",onclick:"closeFsMenu()",children:"News"}),e("a",{href:"/careers",class:"fs-link","data-text":"Careers",onclick:"closeFsMenu()",children:"Careers"}),e("a",{href:"/#contact",class:"fs-link","data-text":"Contact",onclick:"closeFsMenu()",children:"Contact"})]}),e("div",{class:"fs-sidebar",children:[e("div",{class:"fs-sidebar-lbl",children:"Get in Touch"}),e("div",{class:"fs-sidebar-contact",children:[e("strong",{children:"Iraq (HQ)"}),e("br",{}),"Erbil, Iraq",e("br",{}),e("br",{}),e("strong",{children:"Email"}),e("br",{}),"info@harlemgroup.com",e("br",{}),e("br",{}),e("strong",{children:"Operating in"}),e("br",{}),"Iraq · UAE · USA · Jordan"]})]})]}),e("div",{class:"fs-footer",children:[e("a",{href:"/#founder",children:"About HG"}),e("a",{href:"/#divisions",children:"Divisions"}),e("a",{href:"/locations",children:"Locations"}),e("a",{href:"/#contact",children:"Contact"})]})]}),r,e("script",{dangerouslySetInnerHTML:{__html:`
/* ── CURSOR ── */
(function(){
  var ring=document.getElementById('cur-ring'),
      dot =document.getElementById('cur-dot');
  var rx=0,ry=0,mx=0,my=0;
  document.addEventListener('mousemove',function(e){
    mx=e.clientX; my=e.clientY;
    dot.style.left=mx+'px'; dot.style.top=my+'px';
  });
  function animCursor(){
    rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();
  document.querySelectorAll('a,button,[class*="acc-card"],[class*="brand-cell"],[class*="svc-card"],[class*="val-card"],[class*="vmv-card"]').forEach(function(el){
    el.addEventListener('mouseenter',function(){ document.body.classList.add('c-hover'); });
    el.addEventListener('mouseleave',function(){ document.body.classList.remove('c-hover'); });
  });
  document.addEventListener('mousedown',function(){ document.body.classList.add('c-click'); });
  document.addEventListener('mouseup',function(){ document.body.classList.remove('c-click'); });
})();

/* ── PRELOADER ── */
(function(){
  var loader=document.getElementById('loader');
  var count=document.getElementById('lCount');
  var n=0;
  var iv=setInterval(function(){
    n+=Math.floor(Math.random()*8+4);
    if(n>=100){n=100;clearInterval(iv);}
    count.textContent=n+'%';
  },80);
  window.addEventListener('load',function(){
    setTimeout(function(){
      loader.classList.add('out');
      setTimeout(function(){ loader.style.display='none'; },900);
    },400);
  });
  setTimeout(function(){
    loader.classList.add('out');
    setTimeout(function(){ loader.style.display='none'; },900);
  },3200);
})();

/* ── NAVBAR ── */
(function(){
  var nav=document.getElementById('nav');
  function onScroll(){
    if(window.scrollY>60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();
})();

/* ── FULLSCREEN MENU ── */
var fsMenu=document.getElementById('fs-menu');
document.getElementById('fsBtn').addEventListener('click',function(){
  fsMenu.classList.add('open');
  fsMenu.removeAttribute('aria-hidden');
});
document.getElementById('fsClose').addEventListener('click',function(){
  fsMenu.classList.remove('open');
  fsMenu.setAttribute('aria-hidden','true');
});
function closeFsMenu(){
  fsMenu.classList.remove('open');
  fsMenu.setAttribute('aria-hidden','true');
}
document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeFsMenu(); });

/* ── ACCORDION ── */
document.querySelectorAll('.acc-card').forEach(function(card){
  card.addEventListener('click',function(){
    document.querySelectorAll('.acc-card').forEach(function(c){ c.classList.remove('open'); });
    card.classList.add('open');
  });
});

/* ── PARTICLES CANVAS ── */
(function(){
  var canvas=document.getElementById('p-canvas');
  if(!canvas)return;
  var ctx=canvas.getContext('2d');
  var pts=[];
  function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  resize();
  window.addEventListener('resize',resize);
  for(var i=0;i<55;i++){
    pts.push({
      x:Math.random()*window.innerWidth,
      y:Math.random()*window.innerHeight,
      vx:(Math.random()-.5)*.25,
      vy:(Math.random()-.5)*.25,
      r:Math.random()*1.5+.4,
      a:Math.random()*.4+.06
    });
  }
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pts.forEach(function(p){
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>canvas.width)p.vx*=-1;
      if(p.y<0||p.y>canvas.height)p.vy*=-1;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(184,146,74,'+p.a+')';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── HERO IMAGE PANELS ── */
setTimeout(function(){
  document.querySelectorAll('.hero-img-panel').forEach(function(p){
    p.classList.add('show');
  });
},500);

/* ── SCROLL REVEAL ── */
(function(){
  var els=document.querySelectorAll('.r,.rl,.rr');
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); }
    });
  },{threshold:.1,rootMargin:'0px 0px -48px 0px'});
  els.forEach(function(el){ io.observe(el); });
})();

/* ── COUNTER ANIMATION ── */
(function(){
  var counters=document.querySelectorAll('[data-count]');
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        var el=e.target, target=parseInt(el.getAttribute('data-count'));
        var start=0, duration=2000, step=target/duration*16;
        function tick(){
          start+=step;
          if(start>=target){ el.textContent=target.toLocaleString(); return; }
          el.textContent=Math.floor(start).toLocaleString();
          requestAnimationFrame(tick);
        }
        tick();
        io.unobserve(el);
      }
    });
  },{threshold:.5});
  counters.forEach(function(c){ io.observe(c); });
})();

/* ── ACTIVE NAV LINK ── */
(function(){
  var secs=document.querySelectorAll('section[id],div[id]');
  var links=document.querySelectorAll('.nav-a');
  window.addEventListener('scroll',function(){
    var scrollY=window.scrollY+200;
    secs.forEach(function(sec){
      if(scrollY>=sec.offsetTop && scrollY<sec.offsetTop+sec.offsetHeight){
        links.forEach(function(l){ l.classList.remove('active'); });
        var active=document.querySelector('.nav-a[href="#'+sec.id+'"]');
        if(active) active.classList.add('active');
      }
    });
  },{passive:true});
})();

/* ── NEWS ARTICLE SLIDER ── */
(function(){
  var track = document.getElementById('newsTrack');
  if(!track) return;
  var dots = document.querySelectorAll('.news-article-dot');
  var counter = document.getElementById('newsCounter');
  var total = track.querySelectorAll('.news-slide').length;
  var cur = 0;
  function articleGo(n){
    cur = ((n % total) + total) % total;
    track.style.transform = 'translateX(-' + (cur * 100) + '%)';
    dots.forEach(function(d,i){ d.classList.toggle('active', i===cur); });
    if(counter) counter.textContent = String(cur+1).padStart(2,'0') + ' / ' + String(total).padStart(2,'0');
  }
  window.articleGo = articleGo;
  window.articleNav = function(dir){ articleGo(cur + dir); };
  /* Auto-advance articles every 7 seconds */
  setInterval(function(){ articleGo(cur + 1); }, 7000);
})();

/* ── NEWS PHOTO SLIDERS ── */
(function(){
  var photoSliders = document.querySelectorAll('.news-photo-slider');
  photoSliders.forEach(function(slider, si){
    var pt = slider.querySelector('.news-photo-track');
    var dots = slider.querySelectorAll('.news-photo-dot');
    var counter = slider.querySelector('.news-photo-counter');
    var total = pt ? pt.querySelectorAll('.news-photo-slide').length : 0;
    var cur = 0;
    if(!pt || total === 0) return;
    function go(n){
      cur = ((n % total) + total) % total;
      pt.style.transform = 'translateX(-' + (cur * 100) + '%)';
      dots.forEach(function(d,i){ d.classList.toggle('active', i===cur); });
      if(counter) counter.textContent = (cur+1) + ' / ' + total;
    }
    /* Attach prev/next buttons */
    var prev = slider.querySelector('.news-photo-prev');
    var next = slider.querySelector('.news-photo-next');
    if(prev) prev.onclick = function(){ go(cur - 1); };
    if(next) next.onclick = function(){ go(cur + 1); };
    /* Attach dots */
    dots.forEach(function(d, i){ d.onclick = function(){ go(i); }; });
    /* Auto-advance */
    setInterval(function(){ go(cur + 1); }, 4000 + si * 600);
    /* Store go on element for external access */
    slider._go = go;
    slider._getCur = function(){ return cur; };
  });

  /* Override global photoNav/photoGo to use the per-slider go function */
  window.photoNav = function(si, dir){
    var s = photoSliders[si];
    if(s && s._go) s._go(s._getCur() + dir);
  };
  window.photoGo = function(si, n){
    var s = photoSliders[si];
    if(s && s._go) s._go(n);
  };
})();
        `}})]})]})),te=new Oa;te.use(fi);te.get("/",r=>r.render(e(ge,{children:[e("nav",{id:"nav",children:[e("a",{href:"/",class:"nav-logo",children:e("img",{src:"/static/logo-black.png",alt:"Harlem Group",id:"navLogo"})}),e("div",{class:"nav-links",children:[e("div",{class:"nav-item",children:[e("a",{href:"#founder",class:"nav-a",children:"About"}),e("span",{class:"nav-drop-arrow",children:"▾"}),e("div",{class:"nav-dropdown",children:[e("a",{href:"/purpose",class:"nav-drop-link",children:"Our Purpose"}),e("a",{href:"/highlights",class:"nav-drop-link",children:"Highlights"}),e("a",{href:"#divisions",class:"nav-drop-link",children:"Divisions"})]})]}),e("a",{href:"#brands",class:"nav-a",children:"Partners"}),e("a",{href:"/locations",class:"nav-a",children:"Locations"}),e("a",{href:"/news",class:"nav-a",children:"News"}),e("a",{href:"/careers",class:"nav-a",children:"Careers"})]}),e("div",{class:"nav-right",children:[e("a",{href:"#contact",class:"nav-cta",children:"Get in Touch"}),e("button",{class:"hamburger",id:"fsBtn","aria-label":"Open menu",children:[e("span",{}),e("span",{}),e("span",{})]})]})]}),e("section",{id:"hero",children:[e("canvas",{id:"p-canvas"}),e("div",{class:"hero-bg","aria-hidden":"true"}),e("div",{class:"hero-grid","aria-hidden":"true"}),e("div",{class:"hero-imgs","aria-hidden":"true",children:[e("div",{class:"hero-img-panel",style:"background-image:url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80')"}),e("div",{class:"hero-img-panel",style:"background-image:url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80')"})]}),e("div",{class:"hero-seam","aria-hidden":"true"}),e("div",{class:"hero-inner",children:[e("div",{class:"hero-tag",children:[e("span",{class:"hero-tag-bar"}),"Established 1995 —"]}),e("h1",{class:"hero-h1",children:[e("span",{class:"hero-line",children:e("span",{class:"hero-word w1",children:"HARLEM"})}),e("span",{class:"hero-line",children:e("span",{class:"hero-word w3",children:"Excellence."})})]}),e("a",{href:"#founder",class:"hero-btn",children:[e("span",{children:"Discover Our Story"}),e("span",{class:"hero-btn-arr",children:"→"})]})]}),e("div",{class:"hero-scroll","aria-hidden":"true",children:[e("span",{class:"hero-scroll-txt",children:"Scroll"}),e("div",{class:"hero-scroll-line"})]}),e("div",{class:"mq-wrap",children:e("div",{class:"mq-track",children:["Jeep","Dodge","Chrysler","Ram","JETOUR","SOUEAST","Karry","MOPAR","Mitsubishi","Alfa Romeo","Fiat","Maserati","Jeep","Dodge","Chrysler","Ram","JETOUR","SOUEAST","Karry","MOPAR","Mitsubishi","Alfa Romeo","Fiat","Maserati"].map(a=>e("span",{class:"mq-item",children:[e("span",{class:"mq-diamond"}),a]}))})})]}),e("section",{id:"founder",children:e("div",{class:"container",children:e("div",{class:"founder-grid",children:[e("div",{class:"founder-left",children:[e("div",{class:"founder-tag-row r",children:[e("span",{class:"founder-tag-line"}),e("span",{class:"founder-tag-label",children:"Introduction from our Founder"})]}),e("span",{class:"founder-deco-quote r d1","aria-hidden":"true",children:'"'}),e("blockquote",{class:"founder-quote r d2",children:"Harlem Group stands as a beacon of excellence since its inception in 1995 — our commitment is to elevate each industry we engage with, delivering quality that is truly deserved."}),e("div",{class:"founder-body r d3",children:[e("p",{children:["Founded in 1995, Harlem Group has grown from a single automotive agency in Iraq into a diversified multinational group spanning ",e("strong",{children:"four countries"})," — Iraq, Jordan, the UAE, and the USA. With over ",e("strong",{children:"45 global facilities"})," and partnerships with ",e("strong",{children:"12 world-class automotive brands"}),", we have redefined what excellence means in every market we enter."]}),e("p",{children:"Our philosophy is simple: quality is not a standard we meet — it is the promise we make to every customer, every partner, and every community we serve. Across Automotive, Real Estate, and Management Consultation, this promise remains the heart of everything Harlem Group does."})]}),e("div",{class:"founder-sig-wrap r d4",children:[e("span",{class:"founder-sig-line"}),e("div",{children:[e("div",{class:"founder-sig",children:"Salah Noor"}),e("div",{class:"founder-sig-title",children:"Founder & Chairman — Harlem Group"})]})]})]}),e("div",{class:"founder-right rr",children:[e("div",{class:"founder-img-frame"}),e("div",{class:"founder-img-wrap",children:[e("img",{src:"/static/founder.jpg",alt:"Salah Noor — Founder & Chairman, Harlem Group",loading:"lazy"}),e("div",{class:"founder-img-inset"})]}),e("div",{class:"founder-badge",children:[e("span",{class:"founder-badge-n",children:"30+"}),e("span",{class:"founder-badge-l",children:"Years"})]})]})]})})}),e("div",{class:"ticker","aria-hidden":"true",children:e("div",{class:"ticker-t",children:["Automotive","Real Estate","Management Consultation","Iraq","Jordan","UAE","USA","45+ Facilities","12 Automotive Partners","30+ Years of Excellence","Quality You Deserve!","Automotive","Real Estate","Management Consultation","Iraq","Jordan","UAE","USA","45+ Facilities","12 Automotive Partners","30+ Years of Excellence","Quality You Deserve!"].map(a=>e("span",{class:"t-item",children:[a,e("span",{class:"t-sep",children:"✦"})]}))})}),e("section",{id:"divisions",children:[e("div",{class:"container",children:e("div",{class:"div-header",children:[e("div",{class:"r",children:[e("div",{class:"tag on-dark",children:"Our Portfolio"}),e("h2",{class:"h2 light",children:["Three Key ",e("em",{children:"Divisions"})]})]}),e("div",{class:"div-header-right r d2",children:e("p",{class:"div-header-desc",children:"Since 1995, Harlem Group has built a diversified portfolio spanning three core industries across four countries, with over 45 facilities and 12 automotive partners worldwide."})})]})}),e("div",{class:"accordion",children:[e("div",{class:"acc-card open",children:[e("div",{class:"acc-bg",style:"background-image:url('/static/automotive-div.jpg')"}),e("div",{class:"acc-shade"}),e("div",{class:"acc-vert",children:"Automotive"}),e("div",{class:"acc-ghost",children:"01"}),e("div",{class:"acc-content",children:[e("div",{class:"acc-num",children:"01 / 03"}),e("h3",{class:"acc-title",children:"Automotive Division"}),e("p",{class:"acc-desc",children:"As exclusive distributors of premier automotive brands, we have redefined the automotive ownership experience since 1995. commercial agencies, multi-brand showrooms, car rental, certified independent multi-brand service centers, and more across Iraq, Jordan, UAE & USA."}),e("a",{href:"#auto-services",class:"acc-link",children:"Explore Division →"})]})]}),e("div",{class:"acc-card",children:[e("div",{class:"acc-bg",style:"background-image:url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80')"}),e("div",{class:"acc-shade"}),e("div",{class:"acc-vert",children:"Real Estate"}),e("div",{class:"acc-ghost",children:"02"}),e("div",{class:"acc-content",children:[e("div",{class:"acc-num",children:"02 / 03"}),e("h3",{class:"acc-title",children:"Real Estate Division"}),e("p",{class:"acc-desc",children:"From development to trading, our real estate division is committed to shaping vibrant communities. Jidd Holdings LLC specializes in property holdings and A&F Holdings LLC leads real estate development and trading within the USA."}),e("a",{href:"#realestate",class:"acc-link",children:"Explore Division →"})]})]}),e("div",{class:"acc-card",children:[e("div",{class:"acc-bg",style:"background-image:url('/static/management-div.jpg')"}),e("div",{class:"acc-shade"}),e("div",{class:"acc-vert",children:"Consulting"}),e("div",{class:"acc-ghost",children:"03"}),e("div",{class:"acc-content",children:[e("div",{class:"acc-num",children:"03 / 03"}),e("h3",{class:"acc-title",children:"Management Consultation"}),e("p",{class:"acc-desc",children:"Guiding businesses towards success through strategic insights and tailored solutions. Al-Sayer for Management Consultation in Amman, Jordan, leverages extensive experience and industry insights to deliver innovative strategies."}),e("a",{href:"#consulting",class:"acc-link",children:"Explore Division →"})]})]})]})]}),e("section",{id:"auto-services",children:e("div",{class:"container",children:[e("div",{class:"r",children:[e("div",{class:"tag",children:"Automotive Division"}),e("h2",{class:"h2",children:["Five Lines ",e("em",{children:"of Service"})]})]}),e("div",{class:"services-grid",children:[{n:"1.1",t:"Commercial Agencies",b:"Exclusive distributor for Dodge, Jeep, Chrysler, Ram, JETOUR, SOUEAST, Karry, and MOPAR in Iraq. Sole distributor for JETOUR, SOUEAST, and Karry in Jordan. Volume Cars distributes Maserati, Alfa Romeo, Fiat, and Mitsubishi in the USA."},{n:"1.2",t:"Multi-Brand Showrooms",b:"Harlem Group operates a network of multi-brand automotive showrooms across key international markets, including the United Arab Emirates, Iraq, and the United States. These showrooms support both retail sales and wholesale export activities."},{n:"1.3",t:"Car Rental & Leasing",b:"Vehicle rental and leasing services are offered in the United Arab Emirates and the United States, providing a wide range of vehicles from affordable daily transport to luxury options, with both short-term and long-term solutions available."},{n:"1.4",t:"Certified Independent Multi-Brand Service Center",b:"Certified independent multi-brand service centers in the United States provide professional vehicle repair and maintenance services, committed to restoring vehicles to their optimal condition with high levels of precision, expertise, and quality standards."},{n:"1.5",t:"Leather and Upholstery",b:"Iraq's only provider of high-quality leather interior upholstery. State-of-the-art factory in Erbil with OEM-level quality, CNC pattern stitching, and rigorous lab-tested materials sourced from world-leading tanneries."}].map((a,t)=>e("div",{class:`svc-card r d${t%3+1}`,children:[e("div",{class:"svc-num",children:a.n}),e("div",{class:"svc-title",children:a.t}),e("p",{class:"svc-body",children:a.b})]}))})]})}),e("section",{id:"brands",children:e("div",{class:"container",children:[e("div",{class:"brands-intro",children:[e("div",{class:"tag r",style:"justify-content:center",children:"Automotive Partners"}),e("h2",{class:"h2 r d1",children:["12 World-Class ",e("em",{children:"Partners"})]}),e("p",{class:"brands-desc r d2",children:"Harlem Group is the exclusive distributor for 12 globally leading automotive brands across Iraq, Jordan, the UAE, and the USA — from premium American muscle to innovative Chinese SUVs and Italian luxury."})]}),e("div",{class:"brands-grid",children:[{name:"JEEP",logo:"/static/brands/jeep.png"},{name:"DODGE",logo:"/static/brands/dodge.png"},{name:"CHRYSLER",logo:"/static/brands/chrysler.png"},{name:"RAM",logo:"/static/brands/ram.png"},{name:"JETOUR",logo:"/static/brands/jetour.png"},{name:"SOUEAST",logo:"/static/brands/soueast.png"},{name:"KARRY",logo:"/static/brands/karry.png"},{name:"MOPAR",logo:"/static/brands/mopar.png"},{name:"MITSUBISHI",logo:"/static/brands/mitsubishi.png"},{name:"ALFA ROMEO",logo:"/static/brands/alfaromeo.png"},{name:"FIAT",logo:"/static/brands/fiat.png"},{name:"MASERATI",logo:"/static/brands/maserati.png"}].map((a,t)=>e("div",{class:`brand-cell r d${t%4+1}`,children:e("div",{class:"brand-logo-wrap",children:a.logo?e("img",{src:a.logo,alt:a.name,class:"brand-logo-img",loading:"lazy"}):e("span",{class:"brand-logo-text",children:a.name})})}))})]})}),e("section",{id:"realestate",children:e("div",{class:"re-hero",children:e("div",{class:"container",children:e("div",{class:"re-hero-inner",children:[e("div",{class:"re-hero-left r",children:[e("div",{class:"tag",children:"Division 02"}),e("h2",{class:"h2 r d1",children:["Real Estate ",e("em",{children:"Division"})]}),e("p",{class:"re-hero-sub r d2",children:"Two dynamic entities across the USA, each bringing unique expertise in property acquisition, development, and long-term value creation — built on Harlem Group's commitment to excellence."}),e("div",{class:"re-stats r d3",children:[e("div",{class:"re-stat",children:[e("span",{class:"re-stat-n",children:"USA"}),e("span",{class:"re-stat-l",children:"Market"})]}),e("div",{class:"re-stat-div"}),e("div",{class:"re-stat",children:[e("span",{class:"re-stat-n",children:"2"}),e("span",{class:"re-stat-l",children:"Entities"})]}),e("div",{class:"re-stat-div"}),e("div",{class:"re-stat",children:[e("span",{class:"re-stat-n",children:"30+"}),e("span",{class:"re-stat-l",children:"Years"})]})]})]}),e("div",{class:"re-hero-right rr d2",children:e("div",{class:"re-img-frame",children:[e("div",{class:"re-img-inner",children:e("img",{src:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85",alt:"Real Estate Division",loading:"lazy"})}),e("div",{class:"re-img-badge",children:[e("div",{class:"re-img-badge-name",children:"Jidd Holdings & A&F Holdings"}),e("div",{class:"re-img-badge-loc",children:"◆ United States of America"})]})]})})]})})})}),e("section",{id:"consulting",children:e("div",{class:"consult-hero",children:e("div",{class:"container",children:e("div",{class:"consult-hero-inner",children:[e("div",{class:"consult-hero-left r",children:[e("div",{class:"tag on-dark",children:"Division 03"}),e("h2",{class:"h2 light r d1",children:["Management ",e("em",{children:"Consultation"})]}),e("p",{class:"consult-hero-sub r d2",children:"Strategic advisory rooted in regional intelligence and global best practices — guiding businesses through complexity toward sustainable growth."}),e("div",{class:"consult-stats r d3",children:[e("div",{class:"consult-stat",children:[e("span",{class:"consult-stat-n",children:"1995"}),e("span",{class:"consult-stat-l",children:"Est."})]}),e("div",{class:"consult-stat-div"}),e("div",{class:"consult-stat",children:[e("span",{class:"consult-stat-n",children:"MENA"}),e("span",{class:"consult-stat-l",children:"Region Focus"})]})]})]}),e("div",{class:"consult-hero-right rr d2",children:e("div",{class:"consult-img-frame",children:[e("div",{class:"consult-img-inner",children:e("img",{src:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85",alt:"Management Consultation",loading:"lazy"})}),e("div",{class:"consult-img-badge",children:[e("div",{class:"consult-img-badge-name",children:"Al-Sayer for Management Consultation"}),e("div",{class:"consult-img-badge-loc",children:"◆ Amman, Jordan"})]})]})})]})})})}),e("section",{id:"locations",children:e("div",{class:"container",children:[e("div",{class:"r",style:"margin-bottom:8px",children:[e("div",{class:"tag",children:"Global Presence"}),e("h2",{class:"h2",children:["Four Countries, ",e("em",{children:"One Vision"})]})]}),e("div",{class:"glo-wrap r d1",children:[e("div",{class:"glo-country",id:"glo-iraq",children:[e("button",{class:"glo-country-btn",onclick:"gloToggle('iraq')","aria-expanded":"false",children:[e("div",{class:"glo-country-left",children:[e("img",{src:"/static/flags/iraq.png",class:"glo-flag",alt:"Iraq"}),e("span",{class:"glo-country-name",children:"Iraq"}),e("span",{class:"glo-country-num",children:"01"})]}),e("span",{class:"glo-chevron",children:"›"})]}),e("div",{class:"glo-country-body",id:"glo-iraq-body",children:[e("div",{class:"glo-cat",id:"glo-iraq-cat0",children:[e("button",{class:"glo-cat-btn",onclick:"gloCatToggle('iraq',0)","aria-expanded":"false",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Commercial Agencies"}),e("span",{class:"glo-cat-count",children:"8 entities"}),e("span",{class:"glo-chevron",children:"›"})]}),e("div",{class:"glo-cat-body",id:"glo-iraq-cat0-body",children:[e("div",{class:"glo-entity",children:"Jeep"}),e("div",{class:"glo-entity",children:"Dodge"}),e("div",{class:"glo-entity",children:"Chrysler"}),e("div",{class:"glo-entity",children:"Ram"}),e("div",{class:"glo-entity",children:"Jetour"}),e("div",{class:"glo-entity",children:"Soueast"}),e("div",{class:"glo-entity",children:"Karry"}),e("div",{class:"glo-entity",children:"Mopar"})]})]}),e("div",{class:"glo-cat glo-cat--flat",id:"glo-iraq-cat1",children:e("div",{class:"glo-cat-flat-row",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Multi-brand Showrooms"})]})}),e("div",{class:"glo-cat glo-cat--flat",id:"glo-iraq-cat2",children:e("div",{class:"glo-cat-flat-row",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Leather and Upholstery"})]})})]})]}),e("div",{class:"glo-country",id:"glo-uae",children:[e("button",{class:"glo-country-btn",onclick:"gloToggle('uae')","aria-expanded":"false",children:[e("div",{class:"glo-country-left",children:[e("img",{src:"/static/flags/uae.png",class:"glo-flag",alt:"UAE"}),e("span",{class:"glo-country-name",children:"UAE"}),e("span",{class:"glo-country-num",children:"02"})]}),e("span",{class:"glo-chevron",children:"›"})]}),e("div",{class:"glo-country-body",id:"glo-uae-body",children:[e("div",{class:"glo-cat",id:"glo-uae-cat0",children:[e("button",{class:"glo-cat-btn",onclick:"gloCatToggle('uae',0)","aria-expanded":"false",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Multi-Brand Showrooms"}),e("span",{class:"glo-cat-count",children:"2 entities"}),e("span",{class:"glo-chevron",children:"›"})]}),e("div",{class:"glo-cat-body",id:"glo-uae-cat0-body",children:[e("div",{class:"glo-entity",children:"Harlem Cars LLC — Dubai (DUCAMZ)"}),e("div",{class:"glo-entity",children:"Atlantic Motors LLC — Dubai (DUCAMZ)"})]})]}),e("div",{class:"glo-cat",id:"glo-uae-cat1",children:[e("button",{class:"glo-cat-btn",onclick:"gloCatToggle('uae',1)","aria-expanded":"false",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Central Regional Stockyard"}),e("span",{class:"glo-cat-count",children:"1 entity"}),e("span",{class:"glo-chevron",children:"›"})]}),e("div",{class:"glo-cat-body",id:"glo-uae-cat1-body",children:e("div",{class:"glo-entity",children:"6-Storey Central Regional Stockyard — Jebel Ali Free Zone"})})]}),e("div",{class:"glo-cat",id:"glo-uae-cat2",children:[e("button",{class:"glo-cat-btn",onclick:"gloCatToggle('uae',2)","aria-expanded":"false",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Car Rental"}),e("span",{class:"glo-cat-count",children:"1 entity"}),e("span",{class:"glo-chevron",children:"›"})]}),e("div",{class:"glo-cat-body",id:"glo-uae-cat2-body",children:e("div",{class:"glo-entity",children:"Atlantic Rentals LLC — Dubai"})})]})]})]}),e("div",{class:"glo-country",id:"glo-usa",children:[e("button",{class:"glo-country-btn",onclick:"gloToggle('usa')","aria-expanded":"false",children:[e("div",{class:"glo-country-left",children:[e("img",{src:"/static/flags/usa.png",class:"glo-flag",alt:"USA"}),e("span",{class:"glo-country-name",children:"USA"}),e("span",{class:"glo-country-num",children:"03"})]}),e("span",{class:"glo-chevron",children:"›"})]}),e("div",{class:"glo-country-body",id:"glo-usa-body",children:[e("div",{class:"glo-cat",id:"glo-usa-cat0",children:[e("button",{class:"glo-cat-btn",onclick:"gloCatToggle('usa',0)","aria-expanded":"false",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Commercial Agencies"}),e("span",{class:"glo-cat-count",children:"4 entities"}),e("span",{class:"glo-chevron",children:"›"})]}),e("div",{class:"glo-cat-body",id:"glo-usa-cat0-body",children:[e("div",{class:"glo-entity",children:"Maserati"}),e("div",{class:"glo-entity",children:"Alfa Romeo"}),e("div",{class:"glo-entity",children:"Fiat"}),e("div",{class:"glo-entity",children:"Mitsubishi — Naperville & Illinois"})]})]}),e("div",{class:"glo-cat glo-cat--flat",id:"glo-usa-cat1",children:e("div",{class:"glo-cat-flat-row",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Certified Independent Multi-Brand Service Center"})]})}),e("div",{class:"glo-cat glo-cat--flat",id:"glo-usa-cat2",children:e("div",{class:"glo-cat-flat-row",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Multi-brand Showrooms"})]})}),e("div",{class:"glo-cat glo-cat--flat",id:"glo-usa-cat3",children:e("div",{class:"glo-cat-flat-row",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Towing Services"})]})}),e("div",{class:"glo-cat glo-cat--flat",id:"glo-usa-cat4",children:e("div",{class:"glo-cat-flat-row",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Car Rental & Leasing"})]})}),e("div",{class:"glo-cat",id:"glo-usa-cat5",children:[e("button",{class:"glo-cat-btn",onclick:"gloCatToggle('usa',5)","aria-expanded":"false",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Real Estate Development & Holding"}),e("span",{class:"glo-cat-count",children:"2 entities"}),e("span",{class:"glo-chevron",children:"›"})]}),e("div",{class:"glo-cat-body",id:"glo-usa-cat5-body",children:[e("div",{class:"glo-entity",children:"A&F Holdings LLC"}),e("div",{class:"glo-entity",children:"Jidd Holdings LLC"})]})]})]})]}),e("div",{class:"glo-country",id:"glo-jordan",children:[e("button",{class:"glo-country-btn",onclick:"gloToggle('jordan')","aria-expanded":"false",children:[e("div",{class:"glo-country-left",children:[e("img",{src:"/static/flags/jordan.png",class:"glo-flag",alt:"Jordan"}),e("span",{class:"glo-country-name",children:"Jordan"}),e("span",{class:"glo-country-num",children:"04"})]}),e("span",{class:"glo-chevron",children:"›"})]}),e("div",{class:"glo-country-body",id:"glo-jordan-body",children:[e("div",{class:"glo-cat",id:"glo-jordan-cat0",children:[e("button",{class:"glo-cat-btn",onclick:"gloCatToggle('jordan',0)","aria-expanded":"false",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Commercial Agencies"}),e("span",{class:"glo-cat-count",children:"3 entities"}),e("span",{class:"glo-chevron",children:"›"})]}),e("div",{class:"glo-cat-body",id:"glo-jordan-cat0-body",children:[e("div",{class:"glo-entity",children:"Jetour"}),e("div",{class:"glo-entity",children:"Soueast"}),e("div",{class:"glo-entity",children:"Karry"})]})]}),e("div",{class:"glo-cat glo-cat--flat",id:"glo-jordan-cat1",children:e("div",{class:"glo-cat-flat-row",children:[e("span",{class:"glo-cat-icon",children:"◈"}),e("span",{class:"glo-cat-name",children:"Management Consultation"})]})})]})]})]})]})}),e("section",{id:"news",children:e("div",{class:"container",children:[e("div",{class:"r",children:[e("div",{class:"tag",children:"Latest News"}),e("h2",{class:"h2",children:["Stories & ",e("em",{children:"Moments"})]})]}),e("div",{class:"news-slider-wrap r d1",children:e("div",{class:"news-slider-track",id:"newsTrack",children:[e("div",{class:"news-slide",children:[e("div",{class:"news-photo-slider",id:"photoSlider0",children:[e("div",{class:"news-photo-track",id:"photoTrack0",children:[e("div",{class:"news-photo-slide",children:e("img",{src:"/static/news/kurdish-day-1.jpg",alt:"Kurdish National Dress Day",loading:"lazy"})}),e("div",{class:"news-photo-slide",children:e("img",{src:"/static/news/kurdish-day-2.jpg",alt:"Kurdish National Dress Day — Service Team",loading:"lazy"})}),e("div",{class:"news-photo-slide",children:e("img",{src:"/static/news/kurdish-day-3.jpg",alt:"Kurdish National Dress Day — Showroom Team",loading:"lazy"})}),e("div",{class:"news-photo-slide",children:e("img",{src:"/static/news/kurdish-day-4.jpg",alt:"Kurdish National Dress Day — Sales Team",loading:"lazy"})})]}),e("button",{class:"news-photo-prev",onclick:"photoNav(0,-1)","aria-label":"Previous photo",children:"←"}),e("button",{class:"news-photo-next",onclick:"photoNav(0,1)","aria-label":"Next photo",children:"→"}),e("div",{class:"news-photo-dots",id:"photoDots0",children:[e("div",{class:"news-photo-dot active",onclick:"photoGo(0,0)"}),e("div",{class:"news-photo-dot",onclick:"photoGo(0,1)"}),e("div",{class:"news-photo-dot",onclick:"photoGo(0,2)"}),e("div",{class:"news-photo-dot",onclick:"photoGo(0,3)"})]}),e("div",{class:"news-photo-counter",id:"photoCounter0",children:"1 / 4"})]}),e("div",{class:"news-article-body",children:[e("div",{class:"news-date-row",children:[e("span",{class:"news-date",children:"March 2025"}),e("span",{class:"news-date-sep"}),e("span",{class:"news-category",children:"Community & Culture"})]}),e("h2",{class:"news-article-h2",children:"Harlem Group Celebrates Kurdish National Dress Day"}),e("div",{class:"news-article-text",children:[e("p",{children:"Harlem Group proudly celebrated Kurdish National Dress Day, with employees across the company wearing traditional Kurdish attire to honour the rich culture and heritage of the Kurdistan Region."}),e("p",{children:"The office was filled with vibrant colours and traditional designs as team members came together to celebrate the occasion, reflecting the company's deep appreciation for local traditions and cultural diversity."}),e("p",{children:"Harlem Group remains committed to supporting cultural initiatives and celebrating the communities it serves — because our people are at the heart of everything we do."})]})]})]}),e("div",{class:"news-slide",children:[e("div",{class:"news-photo-slider",id:"photoSlider1",children:[e("div",{class:"news-photo-track",id:"photoTrack1",children:[e("div",{class:"news-photo-slide",children:e("img",{src:"/static/news/ramadan-iftar-1.jpg",alt:"Ramadan Iftar Erbil",loading:"lazy"})}),e("div",{class:"news-photo-slide",children:e("img",{src:"/static/news/ramadan-iftar-2.jpg",alt:"Ramadan Iftar team",loading:"lazy"})}),e("div",{class:"news-photo-slide",children:e("img",{src:"/static/news/ramadan-iftar-3.jpg",alt:"Ramadan Iftar gathering",loading:"lazy"})}),e("div",{class:"news-photo-slide",children:e("img",{src:"/static/news/ramadan-iftar-4.jpg",alt:"Ramadan Iftar Baghdad",loading:"lazy"})})]}),e("button",{class:"news-photo-prev",onclick:"photoNav(1,-1)","aria-label":"Previous photo",children:"←"}),e("button",{class:"news-photo-next",onclick:"photoNav(1,1)","aria-label":"Next photo",children:"→"}),e("div",{class:"news-photo-dots",id:"photoDots1",children:[e("div",{class:"news-photo-dot active",onclick:"photoGo(1,0)"}),e("div",{class:"news-photo-dot",onclick:"photoGo(1,1)"}),e("div",{class:"news-photo-dot",onclick:"photoGo(1,2)"}),e("div",{class:"news-photo-dot",onclick:"photoGo(1,3)"})]}),e("div",{class:"news-photo-counter",id:"photoCounter1",children:"1 / 4"})]}),e("div",{class:"news-article-body",children:[e("div",{class:"news-date-row",children:[e("span",{class:"news-date",children:"Ramadan 2025"}),e("span",{class:"news-date-sep"}),e("span",{class:"news-category",children:"Team & Culture"})]}),e("h2",{class:"news-article-h2",children:"Harlem Group Hosts Annual Ramadan Iftar Gatherings in Erbil and Baghdad"}),e("div",{class:"news-article-text",children:[e("p",{children:"Harlem Group organised its annual Ramadan Iftar gatherings in both Erbil and Baghdad, bringing together employees and management to celebrate the spirit of the holy month."}),e("p",{children:"The events created a warm and welcoming atmosphere where team members shared the Iftar meal, strengthening connections and reflecting the values of unity, appreciation, and togetherness that Ramadan represents."}),e("p",{children:"Harlem Group continues to value these moments that bring its teams closer, reinforcing a strong sense of community across all its locations."})]})]})]})]})}),e("div",{class:"news-slider-nav r d2",children:[e("div",{class:"news-article-dots",children:[e("div",{class:"news-article-dot active",onclick:"articleGo(0)"}),e("div",{class:"news-article-dot",onclick:"articleGo(1)"})]}),e("div",{class:"news-article-counter",id:"newsCounter",children:"01 / 02"}),e("div",{class:"news-slider-btns",children:[e("button",{class:"news-prev-btn",onclick:"articleNav(-1)","aria-label":"Previous article",children:"←"}),e("button",{class:"news-next-btn",onclick:"articleNav(1)","aria-label":"Next article",children:"→"})]})]})]})}),e("section",{id:"contact",children:[e("div",{class:"contact-rings-wrap","aria-hidden":"true",children:[e("div",{class:"contact-ring"}),e("div",{class:"contact-ring"}),e("div",{class:"contact-ring"})]}),e("div",{class:"contact-inner container",children:[e("div",{class:"tag contact-tag r",children:"Let's Connect"}),e("h2",{class:"contact-h r d1",children:["Quality ",e("em",{children:"You"}),e("br",{}),"Deserve!"]}),e("div",{class:"contact-btns r d4",children:e("a",{href:"mailto:info@harlem.group",class:"btn-gold",children:[e("span",{children:"Contact Us"}),e("span",{children:"→"})]})})]})]}),e("footer",{children:e("div",{class:"container",children:[e("div",{class:"ft-grid",children:[e("div",{children:[e("img",{src:"/static/logo-white.png",alt:"Harlem Group",class:"ft-logo"}),e("div",{class:"ft-slogan",children:"Quality You Deserve!"}),e("p",{class:"ft-about",children:"Harlem Group — a beacon of excellence since 1995. Operating across Automotive, Real Estate, and Management Consultation across Iraq, Jordan, UAE, and USA."}),e("div",{class:"ft-socials",children:[e("a",{href:"#",class:"ft-soc","aria-label":"LinkedIn",children:"in"}),e("a",{href:"#",class:"ft-soc","aria-label":"Instagram",children:"◈"}),e("a",{href:"#",class:"ft-soc","aria-label":"Facebook",children:"f"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Divisions"}),e("div",{class:"ft-links",children:[e("a",{href:"#auto-services",children:"Automotive Division"}),e("a",{href:"#realestate",children:"Real Estate"}),e("a",{href:"#consulting",children:"Management Consultation"}),e("a",{href:"#news",children:"News & Stories"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Company"}),e("div",{class:"ft-links",children:[e("a",{href:"#founder",children:"About Harlem Group"}),e("a",{href:"/purpose",children:"Vision & Mission"}),e("a",{href:"/highlights",children:"Achievements"}),e("a",{href:"#brands",children:"Our Partners"}),e("a",{href:"/locations",children:"Locations"}),e("a",{href:"#news",children:"News & Stories"}),e("a",{href:"#contact",children:"Contact"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Contact"}),e("div",{class:"ft-contact-row",children:[e("div",{children:[e("div",{class:"ft-contact-lbl",children:"Email"}),e("div",{class:"ft-contact-val",children:"info@harlem.group"})]}),e("div",{children:[e("div",{class:"ft-contact-lbl",children:"Operations"}),e("div",{class:"ft-contact-val",children:"Iraq · Jordan · UAE · USA"})]})]})]})]}),e("div",{class:"ft-bottom",children:[e("span",{children:"© 2025 Harlem Group. All rights reserved."}),e("div",{style:"display:flex;gap:28px",children:[e("a",{href:"#",children:"Privacy Policy"}),e("a",{href:"#",children:"Terms of Use"})]})]})]})}),e("script",{dangerouslySetInnerHTML:{__html:`
        /* ── Global Operations accordion ── */
        window.gloToggle = function(id){
          var el = document.getElementById('glo-' + id);
          if(!el) return;
          var isOpen = el.classList.contains('open');
          /* close all countries */
          document.querySelectorAll('.glo-country').forEach(function(c){ c.classList.remove('open'); c.querySelector('.glo-country-btn').setAttribute('aria-expanded','false'); });
          /* close all cats */
          document.querySelectorAll('.glo-cat').forEach(function(c){ c.classList.remove('open'); });
          if(!isOpen){ el.classList.add('open'); el.querySelector('.glo-country-btn').setAttribute('aria-expanded','true'); }
        };
        window.gloCatToggle = function(country, idx){
          var el = document.getElementById('glo-' + country + '-cat' + idx);
          if(!el) return;
          var isOpen = el.classList.contains('open');
          /* close sibling cats */
          var parent = document.getElementById('glo-' + country + '-body');
          if(parent) parent.querySelectorAll('.glo-cat').forEach(function(c){ c.classList.remove('open'); var btn=c.querySelector('.glo-cat-btn'); if(btn) btn.setAttribute('aria-expanded','false'); });
          if(!isOpen){ el.classList.add('open'); var btn=el.querySelector('.glo-cat-btn'); if(btn) btn.setAttribute('aria-expanded','true'); }
        };

        /* Swap logo to white on dark (non-scrolled) state */
        (function(){
          var nav = document.getElementById('nav');
          var logo = document.getElementById('navLogo');
          function updateLogo(){
            if(nav.classList.contains('scrolled')){
              logo.src = '/static/logo-black.png';
              logo.style.filter = 'none';
            } else {
              logo.src = '/static/logo-white.png';
              logo.style.filter = 'none';
            }
          }
          var origScroll = window.onscroll;
          window.addEventListener('scroll', updateLogo, {passive:true});
          // Initial state — hero is dark so use white logo
          logo.src = '/static/logo-white.png';
          logo.style.filter = 'none';
          // Watch for nav class change
          var obs = new MutationObserver(updateLogo);
          obs.observe(nav, {attributes:true, attributeFilter:['class']});
        })();
      `}})]})));te.get("/highlights",r=>r.render(e(ge,{children:[e("nav",{id:"nav",class:"scrolled nav-dark",children:[e("a",{href:"/",class:"nav-logo",children:e("img",{src:"/static/logo-white.png",alt:"Harlem Group",id:"navLogo"})}),e("div",{class:"nav-links",children:[e("div",{class:"nav-item",children:[e("a",{href:"/#founder",class:"nav-a",children:"About"}),e("span",{class:"nav-drop-arrow",children:"▾"}),e("div",{class:"nav-dropdown",children:[e("a",{href:"/purpose",class:"nav-drop-link",children:"Our Purpose"}),e("a",{href:"/highlights",class:"nav-drop-link active",children:"Highlights"}),e("a",{href:"/#divisions",class:"nav-drop-link",children:"Divisions"})]})]}),e("a",{href:"/#brands",class:"nav-a",children:"Partners"}),e("a",{href:"/locations",class:"nav-a",children:"Locations"}),e("a",{href:"/news",class:"nav-a",children:"News"}),e("a",{href:"/careers",class:"nav-a",children:"Careers"})]}),e("div",{class:"nav-right",children:[e("a",{href:"/#contact",class:"nav-cta",children:"Get in Touch"}),e("button",{class:"hamburger",id:"fsBtn","aria-label":"Open menu",children:[e("span",{}),e("span",{}),e("span",{})]})]})]}),e("section",{class:"hl-hero",children:[e("div",{class:"hl-hero-bg","aria-hidden":"true"}),e("div",{class:"hl-hero-grid","aria-hidden":"true"}),e("div",{class:"container hl-hero-inner",children:[e("div",{class:"tag on-dark r",children:"Facts & Figures"}),e("h1",{class:"hl-hero-h1 r d1",children:["Numbers That",e("br",{}),e("em",{children:"Define Us"})]}),e("p",{class:"hl-hero-sub r d2",children:"Record-breaking market positions, globally recognized achievements, and a continuously growing footprint across four countries — since 1995."})]})]}),e("section",{class:"hl-stats",children:e("div",{class:"container",children:e("div",{class:"hl-stats-grid",children:[{v:1995,l:"Year Founded",p:"",raw:!0},{v:45,l:"Global Facilities",p:"+",raw:!1},{v:12,l:"Automotive Partners",p:"",raw:!1},{v:4,l:"Countries of Operation",p:"",raw:!1}].map((a,t)=>e("div",{class:`hl-stat-card r d${t+1}`,children:[e("div",{class:"hl-stat-val",children:[e("span",{"data-count":a.v,"data-raw":a.raw?"true":"false",children:"0"}),a.p&&e("span",{class:"hl-stat-p",children:a.p})]}),e("div",{class:"hl-stat-label",children:a.l})]}))})})}),e("section",{class:"hl-brands",children:e("div",{class:"container",children:[e("div",{class:"r",style:"margin-bottom:72px",children:[e("div",{class:"tag",children:"Brand Achievements"}),e("h2",{class:"h2",children:["Market Leadership",e("br",{}),e("em",{children:"by Brand"})]}),e("p",{class:"hl-brands-sub r d2",children:"Explore Harlem Group's record-breaking market share milestones, ranked by brand — each a testament to our commitment to quality and partnership excellence."})]}),e("div",{class:"faq-list",children:[e("div",{class:"faq-item","data-brand":"jetour",children:[e("button",{class:"faq-q","aria-expanded":"false",children:[e("div",{class:"faq-q-left",children:[e("div",{class:"faq-brand-logo-wrap",children:e("img",{src:"/static/brands/jetour.png",alt:"JETOUR",class:"faq-brand-logo"})}),e("div",{class:"faq-q-text",children:[e("span",{class:"faq-brand-name",children:"JETOUR"}),e("span",{class:"faq-brand-cat",children:"Iraq & Jordan"})]})]}),e("div",{class:"faq-icon",children:[e("span",{class:"faq-icon-bar faq-icon-h"}),e("span",{class:"faq-icon-bar faq-icon-v"})]})]}),e("div",{class:"faq-a",children:e("div",{class:"faq-a-inner",children:[e("p",{class:"faq-intro",children:["The ",e("strong",{children:"#1 Chinese brand across every segment of presence in Iraq and Jordan"}),". Since becoming the exclusive distributor, Harlem Group has driven JETOUR to unprecedented market dominance in the Iraqi and Jordanian markets."]}),e("div",{class:"faq-achievements",children:[{badge:"#1",text:"Highest Chinese brand market share in every single segment of presence in Iraq",years:""},{badge:"#1 JO",text:"Highest selling SUV brand in Jordan",years:""},{badge:"#1 JO",text:"Overall highest selling ICE brand in Jordan",years:""},{badge:"SUV-B IQ",text:"Dashing: Highest market share SUV-B in Iraq",years:"2024 · 2025 · 2026 YTD"},{badge:"SUV-B JO",text:"Dashing: Highest market share SUV-B in Jordan",years:"2025 · 2026 YTD"},{badge:"SUV-C IQ",text:"T2 & X70 Plus: The two highest market share Chinese SUV-C in Iraq",years:"2023 · 2024 · 2025 · 2026 YTD"},{badge:"SUV-C JO",text:"T2: The highest market share Chinese SUV-C in Jordan",years:"2025 · 2026 YTD"},{badge:"SUV-D IQ",text:"X90 Plus: Highest market share Chinese SUV-D in Iraq",years:"2023 · 2024 · 2025 · 2026 YTD"},{badge:"↑62%",text:"Fastest growing brand in Iraq",years:"2025"},{badge:"↑725%",text:"Fastest growing brand in Jordan",years:"2025"},{badge:"ME #1",text:"Largest network of showrooms and service centers for Jetour in the Middle East",years:""},{badge:"ME #1",text:"Largest showroom for Jetour in the Middle East — Erbil, Iraq",years:""},{badge:"ME #1",text:"Largest service center for Jetour in the Middle East — Erbil, Iraq",years:""}].map(a=>e("div",{class:"faq-ach-row",children:[e("div",{class:"faq-ach-badge",children:a.badge}),e("div",{class:"faq-ach-info",children:[e("div",{class:"faq-ach-text",children:a.text}),a.years&&e("div",{class:"faq-ach-years",children:a.years})]})]}))})]})})]}),e("div",{class:"faq-item","data-brand":"soueast",children:[e("button",{class:"faq-q","aria-expanded":"false",children:[e("div",{class:"faq-q-left",children:[e("div",{class:"faq-brand-logo-wrap",children:e("img",{src:"/static/brands/soueast.png",alt:"SOUEAST",class:"faq-brand-logo"})}),e("div",{class:"faq-q-text",children:[e("span",{class:"faq-brand-name",children:"SOUEAST"}),e("span",{class:"faq-brand-cat",children:"Iraq & Jordan"})]})]}),e("div",{class:"faq-icon",children:[e("span",{class:"faq-icon-bar faq-icon-h"}),e("span",{class:"faq-icon-bar faq-icon-v"})]})]}),e("div",{class:"faq-a",children:e("div",{class:"faq-a-inner",children:[e("p",{class:"faq-intro",children:"SOUEAST leads the E-Sedan and sedan category under Harlem Group's exclusive distribution in Iraq and Jordan."}),e("div",{class:"faq-achievements",children:[{badge:"ME #1",text:"Largest network of showrooms and service centers for Soueast in the Middle East",years:""},{badge:"ME #1",text:"First and largest showroom for Soueast in the Middle East — Erbil, Iraq",years:""},{badge:"ME #1",text:"Largest service center for Soueast in the Middle East — Erbil, Iraq",years:""},{badge:"Award",text:"Winner of 'SOUEAST Star 2025' Award",years:"2025"}].map(a=>e("div",{class:"faq-ach-row",children:[e("div",{class:"faq-ach-badge",children:a.badge}),e("div",{class:"faq-ach-info",children:[e("div",{class:"faq-ach-text",children:a.text}),a.years&&e("div",{class:"faq-ach-years",children:a.years})]})]}))})]})})]}),e("div",{class:"faq-item","data-brand":"jeep",children:[e("button",{class:"faq-q","aria-expanded":"false",children:[e("div",{class:"faq-q-left",children:[e("div",{class:"faq-brand-logo-wrap",children:e("img",{src:"/static/brands/jeep.png",alt:"JEEP",class:"faq-brand-logo"})}),e("div",{class:"faq-q-text",children:[e("span",{class:"faq-brand-name",children:"JEEP"}),e("span",{class:"faq-brand-cat",children:"Iraq"})]})]}),e("div",{class:"faq-icon",children:[e("span",{class:"faq-icon-bar faq-icon-h"}),e("span",{class:"faq-icon-bar faq-icon-v"})]})]}),e("div",{class:"faq-a",children:e("div",{class:"faq-a-inner",children:[e("p",{class:"faq-intro",children:["Jeep is the cornerstone of Harlem Group's Stellantis portfolio in Iraq. The Grand Cherokee, in particular, has cemented an extraordinary global record under Harlem Group's stewardship — the highest market share globally for ",e("strong",{children:"6 consecutive years"}),"."]}),e("div",{class:"faq-achievements",children:[{badge:"Global #1",text:"Highest Jeep Grand Cherokee market share worldwide",years:"6 Consecutive Years"},{badge:"ME #1",text:"Highest overall Stellantis market share across the Middle East",years:"5 Consecutive Years"}].map(a=>e("div",{class:"faq-ach-row",children:[e("div",{class:"faq-ach-badge",children:a.badge}),e("div",{class:"faq-ach-info",children:[e("div",{class:"faq-ach-text",children:a.text}),e("div",{class:"faq-ach-years",children:a.years})]})]}))})]})})]}),e("div",{class:"faq-item","data-brand":"dodge",children:[e("button",{class:"faq-q","aria-expanded":"false",children:[e("div",{class:"faq-q-left",children:[e("div",{class:"faq-brand-logo-wrap",children:e("img",{src:"/static/brands/dodge.png",alt:"DODGE",class:"faq-brand-logo"})}),e("div",{class:"faq-q-text",children:[e("span",{class:"faq-brand-name",children:"DODGE"}),e("span",{class:"faq-brand-cat",children:"Iraq"})]})]}),e("div",{class:"faq-icon",children:[e("span",{class:"faq-icon-bar faq-icon-h"}),e("span",{class:"faq-icon-bar faq-icon-v"})]})]}),e("div",{class:"faq-a",children:e("div",{class:"faq-a-inner",children:[e("p",{class:"faq-intro",children:"Dodge — the iconic American muscle brand — is a key pillar of Harlem Group's Stellantis distribution in Iraq. The Dodge Charger has led the E-Sedan category to record-breaking performance."}),e("div",{class:"faq-achievements",children:[{badge:"E-Sedan #1",text:"Highest E-Sedan share: Dodge Charger (alongside Chrysler 300C)",years:"5 Consecutive Years"},{badge:"ME #1",text:"Contributing to the highest overall Stellantis market share in the Middle East",years:"5 Consecutive Years"}].map(a=>e("div",{class:"faq-ach-row",children:[e("div",{class:"faq-ach-badge",children:a.badge}),e("div",{class:"faq-ach-info",children:[e("div",{class:"faq-ach-text",children:a.text}),e("div",{class:"faq-ach-years",children:a.years})]})]}))})]})})]}),e("div",{class:"faq-item","data-brand":"chrysler",children:[e("button",{class:"faq-q","aria-expanded":"false",children:[e("div",{class:"faq-q-left",children:[e("div",{class:"faq-brand-logo-wrap",children:e("img",{src:"/static/brands/chrysler.png",alt:"CHRYSLER",class:"faq-brand-logo"})}),e("div",{class:"faq-q-text",children:[e("span",{class:"faq-brand-name",children:"CHRYSLER"}),e("span",{class:"faq-brand-cat",children:"Iraq"})]})]}),e("div",{class:"faq-icon",children:[e("span",{class:"faq-icon-bar faq-icon-h"}),e("span",{class:"faq-icon-bar faq-icon-v"})]})]}),e("div",{class:"faq-a",children:e("div",{class:"faq-a-inner",children:[e("p",{class:"faq-intro",children:"Chrysler brings American luxury to Iraq through Harlem Group's exclusive distribution. The Chrysler 300C has dominated the E-Sedan category alongside the Dodge Charger, a record held for five consecutive years."}),e("div",{class:"faq-achievements",children:[{badge:"E-Sedan #1",text:"Highest E-Sedan share: Chrysler 300C (alongside Dodge Charger)",years:"5 Consecutive Years"},{badge:"ME #1",text:"Part of the highest overall Stellantis market share in the Middle East",years:"5 Consecutive Years"}].map(a=>e("div",{class:"faq-ach-row",children:[e("div",{class:"faq-ach-badge",children:a.badge}),e("div",{class:"faq-ach-info",children:[e("div",{class:"faq-ach-text",children:a.text}),e("div",{class:"faq-ach-years",children:a.years})]})]}))})]})})]}),e("div",{class:"faq-item","data-brand":"ram",children:[e("button",{class:"faq-q","aria-expanded":"false",children:[e("div",{class:"faq-q-left",children:[e("div",{class:"faq-brand-logo-wrap",children:e("img",{src:"/static/brands/ram.png",alt:"RAM",class:"faq-brand-logo"})}),e("div",{class:"faq-q-text",children:[e("span",{class:"faq-brand-name",children:"RAM"}),e("span",{class:"faq-brand-cat",children:"Iraq"})]})]}),e("div",{class:"faq-icon",children:[e("span",{class:"faq-icon-bar faq-icon-h"}),e("span",{class:"faq-icon-bar faq-icon-v"})]})]}),e("div",{class:"faq-a",children:e("div",{class:"faq-a-inner",children:[e("p",{class:"faq-intro",children:["RAM Trucks is a standout performer in Harlem Group's portfolio — achieving the ",e("strong",{children:"highest RAM 1500 market share globally"})," in both 2023 and 2026 YTD, a remarkable feat that highlights Harlem Group's mastery of the Iraqi premium truck market."]}),e("div",{class:"faq-achievements",children:[{badge:"Global #1",text:"Highest RAM 1500 market share worldwide — 2026",years:"2026 YTD"},{badge:"ME #1",text:"Part of the highest overall Stellantis market share in the Middle East",years:"5 Consecutive Years"}].map(a=>e("div",{class:"faq-ach-row",children:[e("div",{class:"faq-ach-badge",children:a.badge}),e("div",{class:"faq-ach-info",children:[e("div",{class:"faq-ach-text",children:a.text}),e("div",{class:"faq-ach-years",children:a.years})]})]}))})]})})]})]})]})}),e("section",{class:"hl-profile",children:e("div",{class:"container",children:e("div",{class:"hl-profile-inner r",children:[e("div",{class:"hl-profile-left",children:[e("div",{class:"hl-profile-icon","aria-hidden":"true",children:e("svg",{width:"36",height:"44",viewBox:"0 0 36 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M4 0H22L36 14V40C36 42.2 34.2 44 32 44H4C1.8 44 0 42.2 0 40V4C0 1.8 1.8 0 4 0Z",fill:"rgba(208,206,201,0.12)",stroke:"rgba(208,206,201,0.5)","stroke-width":"1"}),e("path",{d:"M22 0V14H36",stroke:"rgba(208,206,201,0.5)","stroke-width":"1",fill:"none"}),e("line",{x1:"8",y1:"22",x2:"28",y2:"22",stroke:"rgba(208,206,201,0.45)","stroke-width":"1.5"}),e("line",{x1:"8",y1:"28",x2:"24",y2:"28",stroke:"rgba(208,206,201,0.45)","stroke-width":"1.5"}),e("line",{x1:"8",y1:"34",x2:"20",y2:"34",stroke:"rgba(208,206,201,0.45)","stroke-width":"1.5"})]})}),e("div",{class:"hl-profile-meta",children:[e("div",{class:"tag on-dark",style:"margin-bottom:14px",children:"Company Profile"}),e("h2",{class:"hl-profile-h2",children:["Download Our",e("br",{}),e("em",{children:"Corporate Profile"})]}),e("p",{class:"hl-profile-body",children:"Get the full picture — our history, divisions, achievements, global footprint, and vision all in one document. The Harlem Group Corporate Profile is your comprehensive guide to who we are and what we do."}),e("div",{class:"hl-profile-info",children:[e("span",{class:"hl-profile-tag",children:"PDF"}),e("span",{class:"hl-profile-tag",children:"5.3 MB"}),e("span",{class:"hl-profile-tag",children:"Updated 2025"})]})]})]}),e("a",{href:"/static/HG-Corp-Profile.pdf",download:"HG-Corp-Profile.pdf",class:"hl-profile-btn",children:[e("span",{class:"hl-profile-btn-icon",children:"↓"}),e("span",{class:"hl-profile-btn-text",children:[e("span",{class:"hl-profile-btn-label",children:"Download"}),e("span",{class:"hl-profile-btn-sub",children:"Corporate Profile · PDF"})]})]})]})})}),e("footer",{children:e("div",{class:"container",children:[e("div",{class:"ft-grid",children:[e("div",{children:[e("img",{src:"/static/logo-white.png",alt:"Harlem Group",class:"ft-logo"}),e("div",{class:"ft-slogan",children:"Quality You Deserve!"}),e("p",{class:"ft-about",children:"Harlem Group — a beacon of excellence since 1995. Operating across Automotive, Real Estate, and Management Consultation across Iraq, Jordan, UAE, and USA."}),e("div",{class:"ft-socials",children:[e("a",{href:"#",class:"ft-soc","aria-label":"LinkedIn",children:"in"}),e("a",{href:"#",class:"ft-soc","aria-label":"Instagram",children:"◈"}),e("a",{href:"#",class:"ft-soc","aria-label":"Facebook",children:"f"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Divisions"}),e("div",{class:"ft-links",children:[e("a",{href:"/#auto-services",children:"Automotive Division"}),e("a",{href:"/#realestate",children:"Real Estate"}),e("a",{href:"/#consulting",children:"Management Consultation"}),e("a",{href:"/news",children:"News & Stories"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Company"}),e("div",{class:"ft-links",children:[e("a",{href:"/#founder",children:"About Harlem Group"}),e("a",{href:"/purpose",children:"Vision & Mission"}),e("a",{href:"/highlights",children:"Achievements"}),e("a",{href:"/#brands",children:"Our Partners"}),e("a",{href:"/locations",children:"Locations"}),e("a",{href:"/news",children:"News & Stories"}),e("a",{href:"/#contact",children:"Contact"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Contact"}),e("div",{class:"ft-contact-row",children:[e("div",{children:[e("div",{class:"ft-contact-lbl",children:"Email"}),e("div",{class:"ft-contact-val",children:"info@harlem.group"})]}),e("div",{children:[e("div",{class:"ft-contact-lbl",children:"Operations"}),e("div",{class:"ft-contact-val",children:"Iraq · Jordan · UAE · USA"})]})]})]})]}),e("div",{class:"ft-bottom",children:[e("span",{children:"© 2025 Harlem Group. All rights reserved."}),e("div",{style:"display:flex;gap:28px",children:[e("a",{href:"#",children:"Privacy Policy"}),e("a",{href:"#",children:"Terms of Use"})]})]})]})}),e("script",{dangerouslySetInnerHTML:{__html:`
        /* Counter animation */
        (function(){
          var counters=document.querySelectorAll('[data-count]');
          var io=new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){
                var el=e.target, target=parseInt(el.getAttribute('data-count'));
                var raw=el.getAttribute('data-raw')==='true';
                function fmt(n){ return raw ? String(n) : n.toString().replace(/B(?=(d{3})+(?!d))/g, ','); }
                var start=0, duration=2000, step=target/duration*16;
                function tick(){
                  start+=step;
                  if(start>=target){ el.textContent=fmt(target); return; }
                  el.textContent=fmt(Math.floor(start));
                  requestAnimationFrame(tick);
                }
                tick();
                io.unobserve(el);
              }
            });
          },{threshold:.5});
          counters.forEach(function(c){ io.observe(c); });
        })();

        /* FAQ Accordion */
        document.querySelectorAll('.faq-item').forEach(function(item){
          var btn = item.querySelector('.faq-q');
          var ans = item.querySelector('.faq-a');
          var inner = item.querySelector('.faq-a-inner');
          btn.addEventListener('click', function(){
            var isOpen = item.classList.contains('open');
            /* Close all */
            document.querySelectorAll('.faq-item').forEach(function(it){
              it.classList.remove('open');
              it.querySelector('.faq-q').setAttribute('aria-expanded','false');
              it.querySelector('.faq-a').style.maxHeight = '0';
            });
            /* Open clicked if it was closed */
            if(!isOpen){
              item.classList.add('open');
              btn.setAttribute('aria-expanded','true');
              ans.style.maxHeight = inner.scrollHeight + 'px';
            }
          });
        });


        /* ── News: Article Slider ── */
        (function(){
          var track = document.getElementById('newsTrack');
          var dots  = document.querySelectorAll('.news-article-dot');
          var counter = document.getElementById('newsCounter');
          var total = 2;
          var cur = 0;
          function articleGo(n){
            cur = ((n % total) + total) % total;
            if(track) track.style.transform = 'translateX(-' + (cur * 100) + '%)';
            dots.forEach(function(d,i){ d.classList.toggle('active', i===cur); });
            if(counter) counter.textContent = String(cur+1).padStart(2,'0') + ' / ' + String(total).padStart(2,'0');
          }
          window.articleGo = articleGo;
          window.articleNav = function(dir){ articleGo(cur + dir); };
        })();

        /* ── News: Per-slide photo sliders ── */
        (function(){
          var sliders = [
            { track: document.getElementById('photoTrack0'), dots: document.querySelectorAll('#photoDots0 .news-photo-dot'), counter: document.getElementById('photoCounter0'), cur: 0, total: 4 },
            { track: document.getElementById('photoTrack1'), dots: document.querySelectorAll('#photoDots1 .news-photo-dot'), counter: document.getElementById('photoCounter1'), cur: 0, total: 4 }
          ];
          function photoGo(sliderIdx, n){
            var s = sliders[sliderIdx];
            if(!s || !s.track) return;
            s.cur = ((n % s.total) + s.total) % s.total;
            s.track.style.transform = 'translateX(-' + (s.cur * 100) + '%)';
            s.dots.forEach(function(d,i){ d.classList.toggle('active', i===s.cur); });
            if(s.counter) s.counter.textContent = (s.cur+1) + ' / ' + s.total;
          }
          window.photoGo = photoGo;
          window.photoNav = function(sliderIdx, dir){ photoGo(sliderIdx, sliders[sliderIdx].cur + dir); };
          /* Auto-advance photo sliders every 4s */
          setInterval(function(){ photoGo(0, sliders[0].cur + 1); }, 4000);
          setInterval(function(){ photoGo(1, sliders[1].cur + 1); }, 4600);
        })();

        /* Scroll reveal */
        (function(){
          var els=document.querySelectorAll('.r,.rl,.rr');
          var io=new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); }
            });
          },{threshold:.1,rootMargin:'0px 0px -48px 0px'});
          els.forEach(function(el){ io.observe(el); });
        })();
      `}})]})));te.get("/purpose",r=>r.render(e(ge,{children:[e("nav",{id:"nav",class:"scrolled nav-dark",children:[e("a",{href:"/",class:"nav-logo",children:e("img",{src:"/static/logo-white.png",alt:"Harlem Group",id:"navLogo"})}),e("div",{class:"nav-links",children:[e("div",{class:"nav-item",children:[e("a",{href:"/#founder",class:"nav-a",children:"About"}),e("span",{class:"nav-drop-arrow",children:"▾"}),e("div",{class:"nav-dropdown",children:[e("a",{href:"/purpose",class:"nav-drop-link active",children:"Our Purpose"}),e("a",{href:"/highlights",class:"nav-drop-link",children:"Highlights"}),e("a",{href:"/#divisions",class:"nav-drop-link",children:"Divisions"})]})]}),e("a",{href:"/#brands",class:"nav-a",children:"Partners"}),e("a",{href:"/locations",class:"nav-a",children:"Locations"}),e("a",{href:"/news",class:"nav-a",children:"News"}),e("a",{href:"/careers",class:"nav-a",children:"Careers"})]}),e("div",{class:"nav-right",children:[e("a",{href:"/#contact",class:"nav-cta",children:"Get in Touch"}),e("button",{class:"hamburger",id:"fsBtn","aria-label":"Open menu",children:[e("span",{}),e("span",{}),e("span",{})]})]})]}),e("section",{class:"pur-hero",children:[e("div",{class:"pur-hero-bg","aria-hidden":"true"}),e("div",{class:"pur-hero-grid","aria-hidden":"true"}),e("div",{class:"container pur-hero-inner",children:[e("div",{class:"tag on-dark r",children:"Our Purpose"}),e("h1",{class:"pur-hero-h1 r d1",children:["Vision, Mission",e("br",{}),e("em",{children:"& Values"})]}),e("p",{class:"pur-hero-sub r d2",children:"The principles that have guided Harlem Group since 1995 — a commitment to quality, ethical conduct, and excellence across every industry and market we serve."})]}),e("div",{class:"pur-hero-scroll","aria-hidden":"true",children:e("div",{class:"pur-scroll-line"})})]}),e("section",{class:"pur-vm",children:e("div",{class:"container",children:e("div",{class:"pur-vm-grid",children:[e("div",{class:"pur-vm-card r d1",children:[e("div",{class:"pur-vm-bg-label",children:"Vision"}),e("div",{class:"pur-vm-icon",children:"◎"}),e("div",{class:"pur-vm-label",children:"Vision"}),e("h2",{class:"pur-vm-title",children:["The Standard-Bearer",e("br",{}),"for Quality"]}),e("p",{class:"pur-vm-body",children:"At Harlem Group, we strive to be the standard-bearer for quality and value, continuously raising the bar in our industries. We aim to deliver superior experiences and lasting value for our customers, setting new benchmarks of excellence in every market we serve."}),e("div",{class:"pur-vm-rule"}),e("ul",{class:"pur-vm-pillars",children:["Global Excellence","Lasting Value","Benchmark Setting","Industry Leadership"].map(a=>e("li",{class:"pur-vm-pillar",children:[e("span",{class:"pur-vm-dot"}),a]}))})]}),e("div",{class:"pur-vm-card pur-vm-card--dark r d2",children:[e("div",{class:"pur-vm-bg-label",children:"Mission"}),e("div",{class:"pur-vm-icon",children:"◈"}),e("div",{class:"pur-vm-label",children:"Mission"}),e("h2",{class:"pur-vm-title",children:["Delivering Exceptional",e("br",{}),"Quality"]}),e("p",{class:"pur-vm-body",children:"Harlem Group is committed to delivering exceptional quality and meaningful value to our customers. Through a diverse portfolio and global presence, we focus on enhancing customer satisfaction, maintaining the highest standards, and consistently improving the quality of our offerings across all our ventures."}),e("div",{class:"pur-vm-rule"}),e("ul",{class:"pur-vm-pillars",children:["Customer Satisfaction","Highest Standards","Continuous Improvement","Meaningful Value"].map(a=>e("li",{class:"pur-vm-pillar",children:[e("span",{class:"pur-vm-dot"}),a]}))})]})]})})}),e("div",{class:"pur-slogan-strip",children:e("div",{class:"pur-slogan-track",children:["Quality You Deserve!","◆","Since 1995","◆","Quality You Deserve!","◆","Since 1995","◆","Quality You Deserve!","◆","Since 1995","◆","Quality You Deserve!","◆","Since 1995","◆"].map((a,t)=>e("span",{class:"pur-slogan-item",children:a},t))})}),e("section",{class:"pur-values",children:e("div",{class:"container",children:[e("div",{class:"r",style:"text-align:center;margin-bottom:80px",children:[e("div",{class:"tag",style:"justify-content:center",children:"Core Values"}),e("h2",{class:"h2",children:["What We ",e("em",{children:"Stand For"})]}),e("p",{class:"pur-values-sub r d2",children:"Four principles that form the foundation of every decision, relationship, and achievement at Harlem Group."})]}),e("div",{class:"pur-vals-grid",children:[{n:"01",t:"Quality",icon:"◎",b:"We take pride in delivering unparalleled quality across our products, services, and customer interactions, drawing inspiration from the depth of our cultural heritage. Our commitment to excellence serves as our guiding force.",points:["Uncompromising standards","Cultural inspiration","Excellence in every interaction","Continuous quality improvement"]},{n:"02",t:"Employee Focus",icon:"◈",b:"We foster a supportive and empowering environment that enables our employees to thrive and contribute their best. Our commitment includes embracing diversity and fostering unity among our team members.",points:["Empowering environment","Diversity & inclusion","Team unity","Individual growth"]},{n:"03",t:"Collaboration",icon:"◇",b:"We cultivate meaningful partnerships with our network of partners, recognising the collective strength that arises from collaboration. Through communication, engagement, and a shared commitment to success, we foster synergies that drive shared success.",points:["Strategic partnerships","Collective strength","Open communication","Shared success"]},{n:"04",t:"Customer-Centricity",icon:"◉",b:"Placing our customers at the heart of everything we do, our approach is grounded in the principles of respect, hospitality, and personalized care, ensuring an exceptional experience in all our endeavours.",points:["Customer at the core","Respect & hospitality","Personalised care","Exceptional experiences"]}].map((a,t)=>e("div",{class:`pur-val-card r d${t+1}`,children:[e("div",{class:"pur-val-top",children:[e("div",{class:"pur-val-icon",children:a.icon}),e("div",{class:"pur-val-num",children:a.n})]}),e("div",{class:"pur-val-title",children:a.t}),e("p",{class:"pur-val-body",children:a.b}),e("ul",{class:"pur-val-points",children:a.points.map(i=>e("li",{class:"pur-val-point",children:[e("span",{class:"pur-val-pt-dot"}),i]}))})]}))})]})}),e("section",{class:"pur-fq",children:e("div",{class:"container",children:e("div",{class:"pur-fq-inner r",children:[e("div",{class:"pur-fq-photo rr",children:[e("img",{src:"/static/founder.jpg",alt:"Salah Noor — Founder & Chairman, Harlem Group",loading:"lazy"}),e("div",{class:"pur-fq-photo-frame"})]}),e("div",{class:"pur-fq-content",children:[e("div",{class:"pur-fq-mark",children:'"'}),e("blockquote",{class:"pur-fq-quote",children:"Quality is not just a standard we meet — it is the promise we make to every customer, every partner, and every community we serve. Since 1995, this promise has been the heart of everything Harlem Group does."}),e("div",{class:"pur-fq-sig",children:[e("div",{class:"pur-fq-name",children:"Salah Noor"}),e("div",{class:"pur-fq-title",children:"Founder & Chairman — Harlem Group"})]})]})]})})}),e("footer",{children:e("div",{class:"container",children:[e("div",{class:"ft-grid",children:[e("div",{children:[e("img",{src:"/static/logo-white.png",alt:"Harlem Group",class:"ft-logo"}),e("div",{class:"ft-slogan",children:"Quality You Deserve!"}),e("p",{class:"ft-about",children:"Harlem Group — a beacon of excellence since 1995. Operating across Automotive, Real Estate, and Management Consultation across Iraq, Jordan, UAE, and USA."}),e("div",{class:"ft-socials",children:[e("a",{href:"#",class:"ft-soc","aria-label":"LinkedIn",children:"in"}),e("a",{href:"#",class:"ft-soc","aria-label":"Instagram",children:"◈"}),e("a",{href:"#",class:"ft-soc","aria-label":"Facebook",children:"f"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Divisions"}),e("div",{class:"ft-links",children:[e("a",{href:"/#auto-services",children:"Automotive Division"}),e("a",{href:"/#realestate",children:"Real Estate"}),e("a",{href:"/#consulting",children:"Management Consultation"}),e("a",{href:"/news",children:"News & Stories"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Company"}),e("div",{class:"ft-links",children:[e("a",{href:"/#founder",children:"About Harlem Group"}),e("a",{href:"/purpose",children:"Vision & Mission"}),e("a",{href:"/highlights",children:"Achievements"}),e("a",{href:"/#brands",children:"Our Partners"}),e("a",{href:"/locations",children:"Locations"}),e("a",{href:"/news",children:"News & Stories"}),e("a",{href:"/#contact",children:"Contact"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Contact"}),e("div",{class:"ft-contact-row",children:[e("div",{children:[e("div",{class:"ft-contact-lbl",children:"Email"}),e("div",{class:"ft-contact-val",children:"info@harlem.group"})]}),e("div",{children:[e("div",{class:"ft-contact-lbl",children:"Operations"}),e("div",{class:"ft-contact-val",children:"Iraq · Jordan · UAE · USA"})]})]})]})]}),e("div",{class:"ft-bottom",children:[e("span",{children:"© 2025 Harlem Group. All rights reserved."}),e("div",{style:"display:flex;gap:28px",children:[e("a",{href:"#",children:"Privacy Policy"}),e("a",{href:"#",children:"Terms of Use"})]})]})]})}),e("script",{dangerouslySetInnerHTML:{__html:`
        /* Scroll reveal */
        (function(){
          var els=document.querySelectorAll('.r,.rl,.rr');
          var io=new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); }
            });
          },{threshold:.1,rootMargin:'0px 0px -48px 0px'});
          els.forEach(function(el){ io.observe(el); });
        })();
      `}})]})));te.get("/news",r=>r.render(e(ge,{children:[e("nav",{id:"nav",class:"scrolled nav-dark",children:[e("a",{href:"/",class:"nav-logo",children:e("img",{src:"/static/logo-white.png",alt:"Harlem Group",id:"navLogo"})}),e("div",{class:"nav-links",children:[e("div",{class:"nav-item",children:[e("a",{href:"/#founder",class:"nav-a",children:"About"}),e("span",{class:"nav-drop-arrow",children:"▾"}),e("div",{class:"nav-dropdown",children:[e("a",{href:"/purpose",class:"nav-drop-link",children:"Our Purpose"}),e("a",{href:"/highlights",class:"nav-drop-link",children:"Highlights"}),e("a",{href:"/#divisions",class:"nav-drop-link",children:"Divisions"})]})]}),e("a",{href:"/#brands",class:"nav-a",children:"Partners"}),e("a",{href:"/locations",class:"nav-a",children:"Locations"}),e("a",{href:"/news",class:"nav-a active",children:"News"}),e("a",{href:"/careers",class:"nav-a",children:"Careers"})]}),e("div",{class:"nav-right",children:[e("a",{href:"/#contact",class:"nav-cta",children:"Get in Touch"}),e("button",{class:"hamburger",id:"fsBtn","aria-label":"Open menu",children:[e("span",{}),e("span",{}),e("span",{})]})]})]}),e("section",{class:"np-hero",children:[e("div",{class:"np-hero-bg","aria-hidden":"true"}),e("div",{class:"np-hero-grid","aria-hidden":"true"}),e("div",{class:"container np-hero-inner",children:[e("div",{class:"tag on-dark r",children:"Latest News"}),e("h1",{class:"np-hero-h1 r d1",children:["Stories & ",e("em",{children:"Moments"})]}),e("p",{class:"np-hero-sub r d2",children:"Celebrating our people, our culture, and our community — stories from across Harlem Group."})]})]}),e("section",{class:"np-articles",children:e("div",{class:"container",children:[e("article",{class:"np-article r",children:[e("div",{class:"np-article-photos",children:e("div",{class:"np-photo-slider",id:"npSlider0",children:[e("div",{class:"np-photo-track",id:"npTrack0",children:[e("div",{class:"np-photo-slide",children:e("img",{src:"/static/news/kurdish-day-1.jpg",alt:"Kurdish National Dress Day",loading:"lazy"})}),e("div",{class:"np-photo-slide",children:e("img",{src:"/static/news/kurdish-day-2.jpg",alt:"Kurdish National Dress Day — Service Team",loading:"lazy"})}),e("div",{class:"np-photo-slide",children:e("img",{src:"/static/news/kurdish-day-3.jpg",alt:"Kurdish National Dress Day — Showroom Team",loading:"lazy"})}),e("div",{class:"np-photo-slide",children:e("img",{src:"/static/news/kurdish-day-4.jpg",alt:"Kurdish National Dress Day — Sales Team",loading:"lazy"})})]}),e("button",{class:"np-prev",onclick:"npNav(0,-1)","aria-label":"Previous",children:"←"}),e("button",{class:"np-next",onclick:"npNav(0,1)","aria-label":"Next",children:"→"}),e("div",{class:"np-dots",children:[e("span",{class:"np-dot active",onclick:"npGo(0,0)"}),e("span",{class:"np-dot",onclick:"npGo(0,1)"}),e("span",{class:"np-dot",onclick:"npGo(0,2)"}),e("span",{class:"np-dot",onclick:"npGo(0,3)"})]}),e("div",{class:"np-counter",children:"1 / 4"})]})}),e("div",{class:"np-article-body",children:[e("div",{class:"np-meta",children:[e("span",{class:"np-date",children:"March 2025"}),e("span",{class:"np-sep"}),e("span",{class:"np-cat",children:"Community & Culture"})]}),e("h2",{class:"np-title",children:"Harlem Group Celebrates Kurdish National Dress Day"}),e("div",{class:"np-text",children:[e("p",{children:"Harlem Group proudly celebrated Kurdish National Dress Day, with employees across the company wearing traditional Kurdish attire to honour the rich culture and heritage of the Kurdistan Region."}),e("p",{children:"The office was filled with vibrant colours and traditional designs as team members came together to celebrate the occasion, reflecting the company's deep appreciation for local traditions and cultural diversity."}),e("p",{children:"Harlem Group remains committed to supporting cultural initiatives and celebrating the communities it serves — because our people are at the heart of everything we do."})]})]})]}),e("div",{class:"np-divider"}),e("article",{class:"np-article r d1",children:[e("div",{class:"np-article-photos",children:e("div",{class:"np-photo-slider",id:"npSlider1",children:[e("div",{class:"np-photo-track",id:"npTrack1",children:[e("div",{class:"np-photo-slide",children:e("img",{src:"/static/news/ramadan-iftar-1.jpg",alt:"Ramadan Iftar Erbil",loading:"lazy"})}),e("div",{class:"np-photo-slide",children:e("img",{src:"/static/news/ramadan-iftar-2.jpg",alt:"Ramadan Iftar team",loading:"lazy"})}),e("div",{class:"np-photo-slide",children:e("img",{src:"/static/news/ramadan-iftar-3.jpg",alt:"Ramadan Iftar gathering",loading:"lazy"})}),e("div",{class:"np-photo-slide",children:e("img",{src:"/static/news/ramadan-iftar-4.jpg",alt:"Ramadan Iftar Baghdad",loading:"lazy"})})]}),e("button",{class:"np-prev",onclick:"npNav(1,-1)","aria-label":"Previous",children:"←"}),e("button",{class:"np-next",onclick:"npNav(1,1)","aria-label":"Next",children:"→"}),e("div",{class:"np-dots",children:[e("span",{class:"np-dot active",onclick:"npGo(1,0)"}),e("span",{class:"np-dot",onclick:"npGo(1,1)"}),e("span",{class:"np-dot",onclick:"npGo(1,2)"}),e("span",{class:"np-dot",onclick:"npGo(1,3)"})]}),e("div",{class:"np-counter",children:"1 / 4"})]})}),e("div",{class:"np-article-body",children:[e("div",{class:"np-meta",children:[e("span",{class:"np-date",children:"Ramadan 2025"}),e("span",{class:"np-sep"}),e("span",{class:"np-cat",children:"Team & Culture"})]}),e("h2",{class:"np-title",children:"Harlem Group Hosts Annual Ramadan Iftar Gatherings in Erbil and Baghdad"}),e("div",{class:"np-text",children:[e("p",{children:"Harlem Group organised its annual Ramadan Iftar gatherings in both Erbil and Baghdad, bringing together employees and management to celebrate the spirit of the holy month."}),e("p",{children:"The events created a warm and welcoming atmosphere where team members shared the Iftar meal, strengthening connections and reflecting the values of unity, appreciation, and togetherness that Ramadan represents."}),e("p",{children:"Harlem Group continues to value these moments that bring its teams closer, reinforcing a strong sense of community across all its locations."})]})]})]})]})}),e("footer",{children:e("div",{class:"container",children:[e("div",{class:"ft-grid",children:[e("div",{children:[e("img",{src:"/static/logo-white.png",alt:"Harlem Group",class:"ft-logo"}),e("div",{class:"ft-slogan",children:"Quality You Deserve!"}),e("p",{class:"ft-about",children:"Harlem Group — a beacon of excellence since 1995. Operating across Automotive, Real Estate, and Management Consultation across Iraq, Jordan, UAE, and USA."}),e("div",{class:"ft-socials",children:[e("a",{href:"#",class:"ft-soc","aria-label":"LinkedIn",children:"in"}),e("a",{href:"#",class:"ft-soc","aria-label":"Instagram",children:"◈"}),e("a",{href:"#",class:"ft-soc","aria-label":"Facebook",children:"f"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Divisions"}),e("div",{class:"ft-links",children:[e("a",{href:"/#auto-services",children:"Automotive Division"}),e("a",{href:"/#realestate",children:"Real Estate"}),e("a",{href:"/#consulting",children:"Management Consultation"}),e("a",{href:"/news",children:"News & Stories"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Company"}),e("div",{class:"ft-links",children:[e("a",{href:"/#founder",children:"About Harlem Group"}),e("a",{href:"/purpose",children:"Vision & Mission"}),e("a",{href:"/highlights",children:"Achievements"}),e("a",{href:"/#brands",children:"Our Partners"}),e("a",{href:"/locations",children:"Locations"}),e("a",{href:"/news",children:"News & Stories"}),e("a",{href:"/#contact",children:"Contact"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Contact"}),e("div",{class:"ft-contact-row",children:[e("div",{children:[e("div",{class:"ft-contact-lbl",children:"Email"}),e("div",{class:"ft-contact-val",children:"info@harlem.group"})]}),e("div",{children:[e("div",{class:"ft-contact-lbl",children:"Operations"}),e("div",{class:"ft-contact-val",children:"Iraq · Jordan · UAE · USA"})]})]})]})]}),e("div",{class:"ft-bottom",children:[e("span",{children:"© 2025 Harlem Group. All rights reserved."}),e("div",{style:"display:flex;gap:28px",children:[e("a",{href:"#",children:"Privacy Policy"}),e("a",{href:"#",children:"Terms of Use"})]})]})]})}),e("script",{dangerouslySetInnerHTML:{__html:`
/* ── NEWS PAGE PHOTO SLIDERS ── */
(function(){
  var sliders = document.querySelectorAll('.np-photo-slider');
  sliders.forEach(function(slider, si){
    var track = slider.querySelector('.np-photo-track');
    var dots  = slider.querySelectorAll('.np-dot');
    var ctr   = slider.querySelector('.np-counter');
    var total = track ? track.querySelectorAll('.np-photo-slide').length : 0;
    var cur   = 0;
    if(!track || total === 0) return;
    function go(n){
      cur = ((n % total) + total) % total;
      track.style.transform = 'translateX(-' + (cur * 100) + '%)';
      dots.forEach(function(d,i){ d.classList.toggle('active', i===cur); });
      if(ctr) ctr.textContent = (cur+1) + ' / ' + total;
    }
    slider.querySelector('.np-prev').onclick = function(){ go(cur-1); };
    slider.querySelector('.np-next').onclick = function(){ go(cur+1); };
    dots.forEach(function(d,i){ d.onclick = function(){ go(i); }; });
    setInterval(function(){ go(cur+1); }, 4000 + si*700);
    slider._go = go; slider._cur = function(){ return cur; };
  });
  window.npNav = function(si,dir){ var s=sliders[si]; if(s&&s._go) s._go(s._cur()+dir); };
  window.npGo  = function(si,n){  var s=sliders[si]; if(s&&s._go) s._go(n); };
})();
/* scroll-reveal */
(function(){
  var els=document.querySelectorAll('.r');
  if(!els.length) return;
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); } });
  },{threshold:.1,rootMargin:'0px 0px -48px 0px'});
  els.forEach(function(el){ io.observe(el); });
})();
      `}})]})));te.get("/careers",r=>r.render(e(ge,{children:[e("nav",{id:"nav",class:"scrolled nav-dark",children:[e("a",{href:"/",class:"nav-logo",children:e("img",{src:"/static/logo-white.png",alt:"Harlem Group",id:"navLogo"})}),e("div",{class:"nav-links",children:[e("div",{class:"nav-item",children:[e("a",{href:"/#founder",class:"nav-a",children:"About"}),e("span",{class:"nav-drop-arrow",children:"▾"}),e("div",{class:"nav-dropdown",children:[e("a",{href:"/purpose",class:"nav-drop-link",children:"Our Purpose"}),e("a",{href:"/highlights",class:"nav-drop-link",children:"Highlights"}),e("a",{href:"/#divisions",class:"nav-drop-link",children:"Divisions"})]})]}),e("a",{href:"/#brands",class:"nav-a",children:"Partners"}),e("a",{href:"/locations",class:"nav-a",children:"Locations"}),e("a",{href:"/news",class:"nav-a",children:"News"}),e("a",{href:"/careers",class:"nav-a active",children:"Careers"})]}),e("div",{class:"nav-right",children:[e("a",{href:"/#contact",class:"nav-cta",children:"Get in Touch"}),e("button",{class:"hamburger",id:"fsBtn","aria-label":"Open menu",children:[e("span",{}),e("span",{}),e("span",{})]})]})]}),e("section",{class:"car-hero",children:[e("div",{class:"car-hero-bg","aria-hidden":"true"}),e("div",{class:"car-hero-grid","aria-hidden":"true"}),e("div",{class:"container car-hero-inner",children:[e("div",{class:"tag on-dark r",children:"Join Our Team"}),e("h1",{class:"car-hero-h1 r d1",children:["Build Your Career",e("br",{}),e("em",{children:"With Harlem Group"})]}),e("p",{class:"car-hero-sub r d2",children:"Join a team of professionals shaping industries across Iraq, Jordan, UAE and USA. We invest in people who are driven, curious, and committed to excellence."}),e("div",{class:"car-hero-btns r d3",children:e("a",{href:"#openings",class:"hero-btn",children:[e("span",{children:"View Open Positions"}),e("span",{class:"hero-btn-arr",children:"→"})]})})]})]}),e("section",{class:"car-why",children:e("div",{class:"container",children:[e("div",{class:"tag r",style:"justify-content:center",children:"Why Harlem Group"}),e("h2",{class:"h2 r d1",style:"text-align:center",children:["Where Talent ",e("em",{children:"Thrives"})]}),e("div",{class:"car-why-grid",children:[{icon:"◈",title:"Global Exposure",body:"Work across four countries — Iraq, Jordan, UAE, and USA — gaining unmatched regional and international experience."},{icon:"◇",title:"Growth & Learning",body:"Structured career paths, mentorship programmes, and continuous learning opportunities at every level."},{icon:"◉",title:"Diverse Divisions",body:"From automotive showrooms to real estate ventures and management consulting — find your fit across multiple industries."},{icon:"◈",title:"Inclusive Culture",body:"A workplace that celebrates diversity, local heritage, and the collective strength of our multicultural team."},{icon:"◇",title:"Competitive Rewards",body:"Market-leading compensation, performance bonuses, and comprehensive benefits tailored to each region."},{icon:"◉",title:"Impact & Purpose",body:"Be part of a group that has been transforming communities and economies for over 30 years."}].map((a,t)=>e("div",{class:`car-why-card r d${t+1}`,children:[e("div",{class:"car-why-icon",children:a.icon}),e("h3",{class:"car-why-title",children:a.title}),e("p",{class:"car-why-body",children:a.body})]}))})]})}),e("section",{class:"car-openings",id:"openings",children:e("div",{class:"container",children:[e("div",{class:"tag r",style:"justify-content:center",children:"Current Opportunities"}),e("h2",{class:"h2 r d1",style:"text-align:center",children:["Open ",e("em",{children:"Positions"})]}),e("div",{class:"car-jobs-grid",children:[{title:"Receptionist",loc:"Erbil, Iraq",type:"Full-time",dept:"Soueast Erbil",brand:"Soueast"},{title:"Receptionist",loc:"Baghdad, Iraq",type:"Full-time",dept:"Jetour Baghdad",brand:"Jetour"},{title:"HR Business Partner Specialist (HRBP)",loc:"Baghdad, Iraq",type:"Full-time",dept:"Human Resources",brand:"Corporate"}].map((a,t)=>e("div",{class:`car-job-card r d${t+1}`,children:[e("div",{class:"car-job-left",children:[e("div",{class:"car-job-dept",children:a.dept}),e("h3",{class:"car-job-title",children:a.title}),e("div",{class:"car-job-meta",children:[e("span",{class:"car-job-loc",children:["📍 ",a.loc]}),e("span",{class:"car-job-type",children:a.type})]})]}),e("a",{href:"#apply",class:"car-job-apply",children:"Apply →"})]}))})]})}),e("section",{class:"car-apply",id:"apply",children:e("div",{class:"container",children:e("div",{class:"car-apply-inner r",children:[e("div",{class:"car-apply-left",children:[e("div",{class:"tag on-dark",children:"Don't See Your Role?"}),e("h2",{class:"car-apply-h2",children:["Send Us Your ",e("em",{children:"CV Anyway"})]}),e("p",{class:"car-apply-body",children:"We're always looking for exceptional talent. Send us your CV and a brief note about the role you're interested in — we'll be in touch when the right opportunity arises."})]}),e("div",{class:"car-apply-form",children:[e("div",{class:"car-form-row",children:[e("input",{type:"text",class:"car-input",placeholder:"Full Name"}),e("input",{type:"email",class:"car-input",placeholder:"Email Address"})]}),e("div",{class:"car-form-row",children:[e("select",{class:"car-input car-select",children:[e("option",{value:"",children:"Position of Interest"}),e("option",{children:"Receptionist — Soueast Erbil"}),e("option",{children:"Receptionist — Jetour Baghdad"}),e("option",{children:"HR Business Partner Specialist (HRBP) — Baghdad"}),e("option",{children:"Other"})]}),e("select",{class:"car-input car-select",children:[e("option",{value:"",children:"Country"}),e("option",{children:"Iraq"}),e("option",{children:"UAE"}),e("option",{children:"USA"}),e("option",{children:"Jordan"})]})]}),e("textarea",{class:"car-input car-textarea",placeholder:"Brief introduction & motivation (optional)"}),e("div",{class:"car-upload-wrap",children:[e("label",{class:"car-upload-label",for:"cvUpload",children:[e("span",{class:"car-upload-icon",children:"↑"}),e("span",{class:"car-upload-text",children:"Upload CV / Resume"}),e("span",{class:"car-upload-hint",children:"PDF, DOC or DOCX — max 5 MB"})]}),e("input",{type:"file",id:"cvUpload",class:"car-upload-input",accept:".pdf,.doc,.docx",onchange:"carFileChange(this)"}),e("div",{class:"car-upload-name",id:"carFileName",children:"No file chosen"})]}),e("button",{class:"car-submit",children:"Submit Application"})]})]})})}),e("footer",{children:e("div",{class:"container",children:[e("div",{class:"ft-grid",children:[e("div",{children:[e("img",{src:"/static/logo-white.png",alt:"Harlem Group",class:"ft-logo"}),e("div",{class:"ft-slogan",children:"Quality You Deserve!"}),e("p",{class:"ft-about",children:"Harlem Group — a beacon of excellence since 1995. Operating across Automotive, Real Estate, and Management Consultation across Iraq, Jordan, UAE, and USA."}),e("div",{class:"ft-socials",children:[e("a",{href:"#",class:"ft-soc","aria-label":"LinkedIn",children:"in"}),e("a",{href:"#",class:"ft-soc","aria-label":"Instagram",children:"◈"}),e("a",{href:"#",class:"ft-soc","aria-label":"Facebook",children:"f"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Divisions"}),e("div",{class:"ft-links",children:[e("a",{href:"/#auto-services",children:"Automotive Division"}),e("a",{href:"/#realestate",children:"Real Estate"}),e("a",{href:"/#consulting",children:"Management Consultation"}),e("a",{href:"/news",children:"News & Stories"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Company"}),e("div",{class:"ft-links",children:[e("a",{href:"/#founder",children:"About Harlem Group"}),e("a",{href:"/purpose",children:"Vision & Mission"}),e("a",{href:"/highlights",children:"Achievements"}),e("a",{href:"/#brands",children:"Our Partners"}),e("a",{href:"/locations",children:"Locations"}),e("a",{href:"/news",children:"News & Stories"}),e("a",{href:"/#contact",children:"Contact"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Contact"}),e("div",{class:"ft-contact-row",children:[e("div",{children:[e("div",{class:"ft-contact-lbl",children:"Email"}),e("div",{class:"ft-contact-val",children:"info@harlem.group"})]}),e("div",{children:[e("div",{class:"ft-contact-lbl",children:"Operations"}),e("div",{class:"ft-contact-val",children:"Iraq · Jordan · UAE · USA"})]})]})]})]}),e("div",{class:"ft-bottom",children:[e("span",{children:"© 2025 Harlem Group. All rights reserved."}),e("div",{style:"display:flex;gap:28px",children:[e("a",{href:"#",children:"Privacy Policy"}),e("a",{href:"#",children:"Terms of Use"})]})]})]})}),e("script",{dangerouslySetInnerHTML:{__html:`
        /* CV upload filename display */
        window.carFileChange = function(input){
          var label = document.getElementById('carFileName');
          if(!label) return;
          if(input.files && input.files[0]){
            label.textContent = input.files[0].name;
            label.style.color = 'var(--gold)';
          } else {
            label.textContent = 'No file chosen';
          }
        };
        /* scroll-reveal */
        (function(){
          var els = document.querySelectorAll('.r');
          if(!els.length) return;
          var io = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); }
            });
          },{threshold:.1,rootMargin:'0px 0px -48px 0px'});
          els.forEach(function(el){ io.observe(el); });
        })();
      `}})]})));te.get("/locations",r=>r.render(e(ge,{children:[e("nav",{id:"nav",class:"scrolled nav-dark",children:[e("a",{href:"/",class:"nav-logo",children:e("img",{src:"/static/logo-white.png",alt:"Harlem Group",id:"navLogo"})}),e("div",{class:"nav-links",children:[e("div",{class:"nav-item",children:[e("a",{href:"/#founder",class:"nav-a",children:"About"}),e("span",{class:"nav-drop-arrow",children:"▾"}),e("div",{class:"nav-dropdown",children:[e("a",{href:"/purpose",class:"nav-drop-link",children:"Our Purpose"}),e("a",{href:"/highlights",class:"nav-drop-link",children:"Highlights"}),e("a",{href:"/#divisions",class:"nav-drop-link",children:"Divisions"})]})]}),e("a",{href:"/#brands",class:"nav-a",children:"Partners"}),e("a",{href:"/locations",class:"nav-a active",children:"Locations"}),e("a",{href:"/news",class:"nav-a",children:"News"}),e("a",{href:"/careers",class:"nav-a",children:"Careers"})]}),e("div",{class:"nav-right",children:[e("a",{href:"/#contact",class:"nav-cta",children:"Get in Touch"}),e("button",{class:"hamburger",id:"fsBtn","aria-label":"Open menu",children:[e("span",{}),e("span",{}),e("span",{})]})]})]}),e("div",{id:"fs-menu",children:[e("button",{class:"fs-close",id:"fsClose",children:[e("span",{class:"fs-close-x",children:"×"}),"Close"]}),e("div",{class:"fs-body",children:[e("nav",{class:"fs-nav",children:[e("a",{href:"/#founder",class:"fs-link","data-text":"About",children:"About"}),e("div",{class:"fs-sub-group",children:[e("a",{href:"/purpose",class:"fs-sub-link",children:"Our Purpose"}),e("a",{href:"/highlights",class:"fs-sub-link",children:"Highlights"}),e("a",{href:"/#divisions",class:"fs-sub-link",children:"Divisions"})]}),e("a",{href:"/#brands",class:"fs-link","data-text":"Partners",children:"Partners"}),e("a",{href:"/locations",class:"fs-link","data-text":"Locations",children:"Locations"}),e("a",{href:"/news",class:"fs-link","data-text":"News",children:"News"}),e("a",{href:"/careers",class:"fs-link","data-text":"Careers",children:"Careers"}),e("a",{href:"/#contact",class:"fs-link","data-text":"Contact",children:"Contact"})]}),e("div",{class:"fs-sidebar",children:[e("div",{class:"fs-sidebar-lbl",children:"Get In Touch"}),e("div",{class:"fs-sidebar-contact",children:[e("strong",{children:"Email"}),e("br",{}),"info@harlem.group",e("br",{}),e("br",{}),e("strong",{children:"Headquarters"}),e("br",{}),"Erbil, Iraq"]})]})]}),e("div",{class:"fs-footer",children:[e("a",{href:"#",children:"Privacy Policy"}),e("a",{href:"#",children:"Terms of Use"}),e("a",{href:"#",children:"© 2025 Harlem Group"})]})]}),e("section",{class:"loc-hero",children:[e("div",{class:"loc-hero-bg"}),e("div",{class:"loc-hero-imgs",children:[e("div",{class:"loc-hero-img active",id:"lhi-iraq",style:"background-image:url('/static/iraq-hero.jpg')"}),e("div",{class:"loc-hero-img",id:"lhi-jordan",style:"background-image:url('/static/jordan-hero.jpg')"}),e("div",{class:"loc-hero-img",id:"lhi-uae",style:"background-image:url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80')"}),e("div",{class:"loc-hero-img",id:"lhi-usa",style:"background-image:url('/static/usa-hero.jpg')"})]}),e("div",{class:"loc-hero-overlay"}),e("div",{class:"loc-hero-grid"}),e("div",{class:"loc-hero-active-label",children:e("span",{id:"loc-hero-country-name",children:"Iraq"})}),e("div",{class:"container loc-hero-inner",children:[e("div",{class:"loc-hero-tag r",children:"Global Presence"}),e("h1",{class:"loc-hero-h1 r d1",children:["Our ",e("em",{children:"Locations"})]}),e("p",{class:"loc-hero-sub r d2",children:"Four countries. Forty-five facilities. One uncompromising standard of excellence — spanning Iraq, Jordan, UAE, and USA since 1995."}),e("div",{class:"loc-hero-countries r d3",children:[e("a",{href:"#loc-iraq",class:"loc-hero-ctry active","data-img":"lhi-iraq",onclick:"setLocHero('iraq','Iraq',this)",children:[e("img",{src:"/static/flags/iraq.png",alt:"Iraq"}),"   Iraq"]}),e("a",{href:"#loc-jordan",class:"loc-hero-ctry","data-img":"lhi-jordan",onclick:"setLocHero('jordan','Jordan',this)",children:[e("img",{src:"/static/flags/jordan.png",alt:"Jordan"})," Jordan"]}),e("a",{href:"#loc-uae",class:"loc-hero-ctry","data-img":"lhi-uae",onclick:"setLocHero('uae','UAE',this)",children:[e("img",{src:"/static/flags/uae.png",alt:"UAE"}),"    UAE"]}),e("a",{href:"#loc-usa",class:"loc-hero-ctry","data-img":"lhi-usa",onclick:"setLocHero('usa','USA',this)",children:[e("img",{src:"/static/flags/usa.png",alt:"USA"}),"    USA"]})]})]}),e("div",{class:"loc-hero-scroll",children:[e("span",{children:"Scroll"}),e("div",{class:"loc-hero-scroll-line"})]}),e("script",{children:`
          function setLocHero(country, label, el) {
            // switch image
            document.querySelectorAll('.loc-hero-img').forEach(function(img){
              img.classList.remove('active');
              img.style.opacity = '0';
            });
            var target = document.getElementById('lhi-' + country);
            target.classList.add('active');
            target.style.opacity = '1';
            // switch label
            document.getElementById('loc-hero-country-name').textContent = label;
            // switch active pill
            document.querySelectorAll('.loc-hero-ctry').forEach(function(a){ a.classList.remove('active'); });
            el.classList.add('active');
          }
          // init first image
          window.addEventListener('DOMContentLoaded', function(){
            var first = document.getElementById('lhi-iraq');
            if(first) first.style.opacity = '1';
          });
          // auto-rotate
          var _lhc = ['iraq','jordan','uae','usa'];
          var _lhl = ['Iraq','Jordan','UAE','USA'];
          var _lhi = 0;
          setInterval(function(){
            _lhi = (_lhi + 1) % 4;
            var a = document.querySelectorAll('.loc-hero-ctry')[_lhi];
            if(a) setLocHero(_lhc[_lhi], _lhl[_lhi], a);
          }, 4000);
        `})]}),e("div",{class:"loc-stats",children:e("div",{class:"container loc-stats-inner",children:[e("div",{class:"loc-stat r",children:[e("span",{class:"loc-stat-n",children:"4"}),e("span",{class:"loc-stat-l",children:"Countries"})]}),e("div",{class:"loc-stat-div"}),e("div",{class:"loc-stat r d1",children:[e("span",{class:"loc-stat-n",children:"45+"}),e("span",{class:"loc-stat-l",children:"Facilities"})]}),e("div",{class:"loc-stat-div"}),e("div",{class:"loc-stat r d2",children:[e("span",{class:"loc-stat-n",children:"12"}),e("span",{class:"loc-stat-l",children:"Brands"})]}),e("div",{class:"loc-stat-div"}),e("div",{class:"loc-stat r d3",children:[e("span",{class:"loc-stat-n",children:"30+"}),e("span",{class:"loc-stat-l",children:"Years"})]})]})}),e("div",{class:"loc-filters",id:"loc-filters",children:e("div",{class:"container loc-filters-inner",children:[e("button",{class:"loc-flt active",onclick:"locFilter('all',this)",children:"All Countries"}),e("button",{class:"loc-flt",onclick:"locFilter('iraq',this)",children:[e("img",{src:"/static/flags/iraq.png",class:"loc-flt-flag",alt:""}),"Iraq"]}),e("button",{class:"loc-flt",onclick:"locFilter('jordan',this)",children:[e("img",{src:"/static/flags/jordan.png",class:"loc-flt-flag",alt:""}),"Jordan"]}),e("button",{class:"loc-flt",onclick:"locFilter('uae',this)",children:[e("img",{src:"/static/flags/uae.png",class:"loc-flt-flag",alt:""}),"UAE"]}),e("button",{class:"loc-flt",onclick:"locFilter('usa',this)",children:[e("img",{src:"/static/flags/usa.png",class:"loc-flt-flag",alt:""}),"USA"]})]})}),e("section",{class:"loc-country","data-country":"iraq",id:"loc-iraq",children:[e("div",{class:"loc-country-banner",style:"background-image:url('/static/iraq-hero.jpg')",children:[e("div",{class:"loc-country-banner-shade"}),e("div",{class:"container loc-country-banner-inner",children:[e("div",{class:"loc-country-tag",children:"01 / 04"}),e("div",{class:"loc-country-banner-row",children:[e("img",{src:"/static/flags/iraq.png",class:"loc-country-flag",alt:"Iraq"}),e("h2",{class:"loc-country-title",children:"Iraq"})]}),e("p",{class:"loc-country-desc",children:"Harlem Group's founding market — home to its largest automotive network, exclusive brand agencies, multi-brand showrooms, and Iraq's only luxury upholstery factory."}),e("div",{class:"loc-country-pills",children:[e("span",{class:"loc-pill",children:"Commercial Agencies"}),e("span",{class:"loc-pill",children:"Multi-brand Showrooms"}),e("span",{class:"loc-pill",children:"Leather & Upholstery"})]})]})]}),e("div",{class:"container",children:[e("div",{class:"loc-cat-row r",children:[e("span",{class:"loc-cat-icon",children:"◈"}),e("span",{class:"loc-cat-name",children:"Commercial Agencies"}),e("span",{class:"loc-cat-count",children:"5 brands"})]}),e("div",{class:"loc-location-grid",children:[e("div",{class:"lloc-card r",children:[e("div",{class:"lloc-slider",children:[e("div",{class:"lloc-slides",children:[e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-fca/0yEpykaC.png')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-fca/CfrCjCKE.png')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-fca/Tg3M7Sve.png')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-fca/D1X1epnY.png')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-fca/ygmzs7P2.png')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-fca/6YXB1fY7.png')"})]}),e("div",{class:"lloc-photo-shade"}),e("div",{class:"lloc-country-chip",children:[e("img",{src:"/static/flags/iraq.png",alt:""}),"Iraq"]}),e("button",{class:"lloc-arrow lloc-arrow--prev","aria-label":"Previous photo",children:"‹"}),e("button",{class:"lloc-arrow lloc-arrow--next","aria-label":"Next photo",children:"›"}),e("div",{class:"lloc-dots"})]}),e("div",{class:"lloc-body",children:[e("div",{class:"lloc-type",children:"Commercial Agencies · Exclusive Distributor"}),e("h3",{class:"lloc-name",children:"Jeep · Dodge · Chrysler · Ram — Iraq"}),e("div",{class:"lloc-cities",children:[e("span",{class:"lloc-city-dot"}),"Erbil · Baghdad · Kirkuk"]}),e("p",{class:"lloc-desc",children:["Exclusive distributor of four iconic American brands across Iraq. ",e("strong",{children:"Jeep"})," holds the highest Grand Cherokee market share globally for 6 consecutive years. ",e("strong",{children:"Ram"})," ranks #1 globally in RAM 1500 sales. ",e("strong",{children:"Dodge"})," leads the E-Sedan market. ",e("strong",{children:"Chrysler 300C"})," dominates the executive luxury segment."]})]})]}),e("div",{class:"lloc-card lloc-card--featured r d2",children:[e("div",{class:"lloc-slider",children:[e("div",{class:"lloc-slides",children:[e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/jetour-iraq/PWVHefuR.png')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/jetour-iraq/RWRRP63N.png')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/jetour-iraq/wEygs5qg.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/jetour-iraq/uZALHQbq.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/jetour-iraq/wsfr1vnr.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/jetour-iraq/Q56pCdQM.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/jetour-iraq/ZOiAA6mN.png')"})]}),e("div",{class:"lloc-photo-shade"}),e("div",{class:"lloc-country-chip",children:[e("img",{src:"/static/flags/iraq.png",alt:""}),"Iraq"]}),e("div",{class:"lloc-featured-ribbon",children:"Top Performer"}),e("button",{class:"lloc-arrow lloc-arrow--prev","aria-label":"Previous photo",children:"‹"}),e("button",{class:"lloc-arrow lloc-arrow--next","aria-label":"Next photo",children:"›"}),e("div",{class:"lloc-dots"})]}),e("div",{class:"lloc-body",children:[e("div",{class:"lloc-type",children:"Commercial Agency · Exclusive Distributor"}),e("h3",{class:"lloc-name",children:"Jetour Iraq"}),e("div",{class:"lloc-cities",children:[e("span",{class:"lloc-city-dot"}),"Erbil · Baghdad · Kirkuk · Najaf · Sulaymaniyah · Duhok"]}),e("p",{class:"lloc-desc",children:[e("strong",{children:"#1 Chinese brand across every segment in Iraq."})," Home to the largest Jetour showroom & service center in the entire Middle East — located in Erbil, with a nationwide footprint across 6 cities."]})]})]}),e("div",{class:"lloc-card r d1",children:[e("div",{class:"lloc-slider",children:[e("div",{class:"lloc-slides",children:[e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/soueast-iraq/soueast-iraq-1.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/soueast-iraq/soueast-iraq-2.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/soueast-iraq/soueast-iraq-3.jpg')"})]}),e("div",{class:"lloc-photo-shade"}),e("div",{class:"lloc-country-chip",children:[e("img",{src:"/static/flags/iraq.png",alt:""}),"Iraq"]}),e("button",{class:"lloc-arrow lloc-arrow--prev","aria-label":"Previous photo",children:"‹"}),e("button",{class:"lloc-arrow lloc-arrow--next","aria-label":"Next photo",children:"›"}),e("div",{class:"lloc-dots"})]}),e("div",{class:"lloc-body",children:[e("div",{class:"lloc-type",children:"Commercial Agency · Exclusive Distributor"}),e("h3",{class:"lloc-name",children:"Soueast Iraq"}),e("div",{class:"lloc-cities",children:[e("span",{class:"lloc-city-dot"}),"Erbil · Baghdad · Kirkuk"]}),e("p",{class:"lloc-desc",children:["Exclusive Soueast distributor in Iraq. Recipient of the prestigious ",e("strong",{children:"SOUEAST Star 2025 Award"})," — recognizing outstanding sales performance and brand representation across the region."]})]})]}),e("div",{class:"lloc-card r d1",children:[e("div",{class:"lloc-slider",children:[e("div",{class:"lloc-slides",children:[e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-mopar/VZ17axNs.png')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-mopar/BJhYBJZB.png')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-mopar/eiPoKZED.png')"})]}),e("div",{class:"lloc-photo-shade"}),e("div",{class:"lloc-country-chip",children:[e("img",{src:"/static/flags/iraq.png",alt:""}),"Iraq"]}),e("button",{class:"lloc-arrow lloc-arrow--prev","aria-label":"Previous photo",children:"‹"}),e("button",{class:"lloc-arrow lloc-arrow--next","aria-label":"Next photo",children:"›"}),e("div",{class:"lloc-dots"})]}),e("div",{class:"lloc-body",children:[e("div",{class:"lloc-type",children:"Commercial Agency · Official Distributor"}),e("h3",{class:"lloc-name",children:"Mopar Iraq"}),e("div",{class:"lloc-cities",children:[e("span",{class:"lloc-city-dot"}),"Erbil · Baghdad · Kirkuk"]}),e("p",{class:"lloc-desc",children:["Official Mopar ",e("strong",{children:"parts & accessories distributor"})," in Iraq. Ensuring authentic OEM-quality parts are available to all FCA vehicle owners across the country."]})]})]})]}),e("div",{class:"loc-cat-row r",children:[e("span",{class:"loc-cat-icon",children:"◈"}),e("span",{class:"loc-cat-name",children:"Multi-brand Showrooms"})]}),e("div",{class:"loc-location-grid",children:e("div",{class:"lloc-card r",children:[e("div",{class:"lloc-slider",children:[e("div",{class:"lloc-slides",children:[e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-showrooms/7CY0U92U.png')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-showrooms/GZrbmbVR.png')"})]}),e("div",{class:"lloc-photo-shade"}),e("div",{class:"lloc-country-chip",children:[e("img",{src:"/static/flags/iraq.png",alt:""}),"Iraq"]}),e("button",{class:"lloc-arrow lloc-arrow--prev","aria-label":"Previous photo",children:"‹"}),e("button",{class:"lloc-arrow lloc-arrow--next","aria-label":"Next photo",children:"›"}),e("div",{class:"lloc-dots"})]}),e("div",{class:"lloc-body",children:[e("div",{class:"lloc-type",children:"Multi-brand Showroom Network"}),e("h3",{class:"lloc-name",children:"Harlem Group Multi-brand Showrooms"}),e("div",{class:"lloc-cities",children:[e("span",{class:"lloc-city-dot"}),"Erbil · Baghdad · Kirkuk · Sulaymaniyah"]}),e("p",{class:"lloc-desc",children:["A network of ",e("strong",{children:"multi-brand automotive showrooms"})," across Iraq's major cities, offering customers access to Harlem Group's complete brand portfolio under one roof — retail sales and export operations."]})]})]})}),e("div",{class:"loc-cat-row r",children:[e("span",{class:"loc-cat-icon",children:"◈"}),e("span",{class:"loc-cat-name",children:"Leather & Upholstery Factory"}),e("span",{class:"loc-cat-count",children:"Iraq's Only"})]}),e("div",{class:"loc-location-grid",children:e("div",{class:"lloc-card lloc-card--featured r",children:[e("div",{class:"lloc-slider",children:[e("div",{class:"lloc-slides",children:[e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-leather/leather-1.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-leather/leather-2.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-leather/leather-3.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-leather/leather-4.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/iraq-leather/leather-5.jpg')"})]}),e("div",{class:"lloc-photo-shade"}),e("div",{class:"lloc-country-chip",children:[e("img",{src:"/static/flags/iraq.png",alt:""}),"Iraq"]}),e("div",{class:"lloc-featured-ribbon",children:"Iraq Exclusive"}),e("button",{class:"lloc-arrow lloc-arrow--prev","aria-label":"Previous photo",children:"‹"}),e("button",{class:"lloc-arrow lloc-arrow--next","aria-label":"Next photo",children:"›"}),e("div",{class:"lloc-dots"})]}),e("div",{class:"lloc-body",children:[e("div",{class:"lloc-type",children:"Premium Automotive Interior · Specialty Manufacturing"}),e("h3",{class:"lloc-name",children:"Harlem Leather & Upholstery Factory"}),e("div",{class:"lloc-cities",children:[e("span",{class:"lloc-city-dot"}),"Erbil, Iraq"]}),e("p",{class:"lloc-desc",children:[e("strong",{children:"Iraq's only provider of high-quality leather interior upholstery."})," State-of-the-art CNC-equipped factory in Erbil producing OEM-level quality finishes — lab-tested materials sourced from world-leading tanneries, with precision pattern stitching."]})]})]})})]})]}),e("section",{class:"loc-country loc-country--alt","data-country":"jordan",id:"loc-jordan",children:[e("div",{class:"loc-country-banner",style:"background-image:url('/static/jordan-hero.jpg')",children:[e("div",{class:"loc-country-banner-shade"}),e("div",{class:"container loc-country-banner-inner",children:[e("div",{class:"loc-country-tag",children:"02 / 04"}),e("div",{class:"loc-country-banner-row",children:[e("img",{src:"/static/flags/jordan.png",class:"loc-country-flag",alt:"Jordan"}),e("h2",{class:"loc-country-title",children:"Jordan"})]}),e("p",{class:"loc-country-desc",children:"Harlem Group's MENA expansion hub — exclusive Chinese brand agencies and strategic management consultation operations, anchored in Amman."}),e("div",{class:"loc-country-pills",children:e("span",{class:"loc-pill",children:"Commercial Agencies"})})]})]}),e("div",{class:"container",children:[e("div",{class:"loc-cat-row r",children:[e("span",{class:"loc-cat-icon",children:"◈"}),e("span",{class:"loc-cat-name",children:"Commercial Agencies"}),e("span",{class:"loc-cat-count",children:"1 brand"})]}),e("div",{class:"loc-location-grid",children:e("div",{class:"lloc-card lloc-card--featured r",children:[e("div",{class:"lloc-slider",children:[e("div",{class:"lloc-slides",children:[e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/jetour-jordan/jetour-jordan-1.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/jetour-jordan/jetour-jordan-2.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/jetour-jordan/jetour-jordan-3.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/jetour-jordan/jetour-jordan-4.jpg')"})]}),e("div",{class:"lloc-photo-shade"}),e("div",{class:"lloc-country-chip",children:[e("img",{src:"/static/flags/jordan.png",alt:""}),"Jordan"]}),e("div",{class:"lloc-featured-ribbon",children:"Top Performer"}),e("button",{class:"lloc-arrow lloc-arrow--prev","aria-label":"Previous photo",children:"‹"}),e("button",{class:"lloc-arrow lloc-arrow--next","aria-label":"Next photo",children:"›"}),e("div",{class:"lloc-dots"})]}),e("div",{class:"lloc-body",children:[e("div",{class:"lloc-type",children:"Commercial Agency · Exclusive Distributor"}),e("h3",{class:"lloc-name",children:"Jetour Jordan"}),e("div",{class:"lloc-cities",children:[e("span",{class:"lloc-city-dot"}),"Amman, Jordan"]}),e("p",{class:"lloc-desc",children:[e("strong",{children:"#1 SUV brand and highest ICE brand in Jordan"})," — with a staggering ",e("strong",{children:"725% growth in 2025"}),". Exclusive Jetour distributor for Jordan, capturing the market with premium Chinese SUV design and technology."]})]})]})})]})]}),e("section",{class:"loc-country","data-country":"uae",id:"loc-uae",children:[e("div",{class:"loc-country-banner",style:"background-image:url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80')",children:[e("div",{class:"loc-country-banner-shade"}),e("div",{class:"container loc-country-banner-inner",children:[e("div",{class:"loc-country-tag",children:"03 / 04"}),e("div",{class:"loc-country-banner-row",children:[e("img",{src:"/static/flags/uae.png",class:"loc-country-flag",alt:"UAE"}),e("h2",{class:"loc-country-title",children:"United Arab Emirates"})]}),e("p",{class:"loc-country-desc",children:"Harlem Group's regional hub — featuring multi-brand showrooms in DUCAMZ and a 6-storey central stockyard in Jebel Ali Free Zone."}),e("div",{class:"loc-country-pills",children:[e("span",{class:"loc-pill",children:"Multi-brand Showrooms"}),e("span",{class:"loc-pill",children:"Regional Stockyard"})]})]})]}),e("div",{class:"container",children:[e("div",{class:"loc-cat-row r",children:[e("span",{class:"loc-cat-icon",children:"◈"}),e("span",{class:"loc-cat-name",children:"Multi-brand Showrooms"}),e("span",{class:"loc-cat-count",children:"Dubai — DUCAMZ"})]}),e("div",{class:"loc-location-grid",children:[e("div",{class:"lloc-card r",children:[e("div",{class:"lloc-slider",children:[e("div",{class:"lloc-slides",children:e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/uae-showrooms/harlem-cars-uae.jpg')"})}),e("div",{class:"lloc-photo-shade"}),e("div",{class:"lloc-country-chip",children:[e("img",{src:"/static/flags/uae.png",alt:""}),"UAE"]}),e("button",{class:"lloc-arrow lloc-arrow--prev","aria-label":"Previous photo",children:"‹"}),e("button",{class:"lloc-arrow lloc-arrow--next","aria-label":"Next photo",children:"›"}),e("div",{class:"lloc-dots"})]}),e("div",{class:"lloc-body",children:[e("div",{class:"lloc-type",children:"Multi-brand Showroom · Retail & Export"}),e("h3",{class:"lloc-name",children:"Harlem Cars LLC"}),e("div",{class:"lloc-cities",children:[e("span",{class:"lloc-city-dot"}),"Dubai Cars & Automotive Zone (DUCAMZ), Dubai"]}),e("p",{class:"lloc-desc",children:["Multi-brand automotive showroom in ",e("strong",{children:"Dubai's premier automotive hub — DUCAMZ"}),". Serving both local retail customers and international wholesale export clients across Harlem Group's full brand portfolio."]})]})]}),e("div",{class:"lloc-card r d1",children:[e("div",{class:"lloc-slider",children:[e("div",{class:"lloc-slides",children:e("div",{class:"lloc-slide",style:"background-image:url('/static/locations/uae-showrooms/atlantic-motors-uae.jpg')"})}),e("div",{class:"lloc-photo-shade"}),e("div",{class:"lloc-country-chip",children:[e("img",{src:"/static/flags/uae.png",alt:""}),"UAE"]}),e("button",{class:"lloc-arrow lloc-arrow--prev","aria-label":"Previous photo",children:"‹"}),e("button",{class:"lloc-arrow lloc-arrow--next","aria-label":"Next photo",children:"›"}),e("div",{class:"lloc-dots"})]}),e("div",{class:"lloc-body",children:[e("div",{class:"lloc-type",children:"Multi-brand Showroom · Retail & Export"}),e("h3",{class:"lloc-name",children:"Atlantic Motors LLC"}),e("div",{class:"lloc-cities",children:[e("span",{class:"lloc-city-dot"}),"Dubai Cars & Automotive Zone (DUCAMZ), Dubai"]}),e("p",{class:"lloc-desc",children:["A premier multi-brand showroom operating in ",e("strong",{children:"DUCAMZ, Dubai"}),". Atlantic Motors LLC delivers a curated automotive retail experience alongside active export and wholesale operations to regional markets."]})]})]})]}),e("div",{class:"loc-cat-row r",children:[e("span",{class:"loc-cat-icon",children:"◈"}),e("span",{class:"loc-cat-name",children:"Central Regional Stockyard"}),e("span",{class:"loc-cat-count",children:"Jebel Ali Free Zone"})]}),e("div",{class:"loc-location-grid",children:e("div",{class:"lloc-card lloc-card--dark r",children:[e("div",{class:"lloc-slider",children:[e("div",{class:"lloc-slides",children:[e("div",{class:"lloc-slide",style:"background-image:url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80')"}),e("div",{class:"lloc-slide",style:"background-image:url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80')"}),e("div",{class:"lloc-slide",style:"background-image:url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80')"})]}),e("div",{class:"lloc-photo-shade"}),e("div",{class:"lloc-country-chip",children:[e("img",{src:"/static/flags/uae.png",alt:""}),"UAE"]}),e("div",{class:"lloc-featured-ribbon",children:"Regional Hub"}),e("button",{class:"lloc-arrow lloc-arrow--prev","aria-label":"Previous photo",children:"‹"}),e("button",{class:"lloc-arrow lloc-arrow--next","aria-label":"Next photo",children:"›"}),e("div",{class:"lloc-dots"})]}),e("div",{class:"lloc-body",children:[e("div",{class:"lloc-type",children:"Logistics & Distribution · Jebel Ali Free Zone"}),e("h3",{class:"lloc-name",children:"6-Storey Central Regional Stockyard"}),e("div",{class:"lloc-cities",children:[e("span",{class:"lloc-city-dot"}),"Jebel Ali Free Zone (JAFZA), Dubai"]}),e("p",{class:"lloc-desc",children:["Harlem Group's ",e("strong",{children:"6-storey vehicle stockyard in Jebel Ali Free Zone"})," — the central regional hub for vehicle storage, preparation, and distribution across the Middle East and beyond. A strategic logistics asset at the world's leading free zone."]})]})]})})]})]}),e("section",{class:"loc-country loc-country--alt","data-country":"usa",id:"loc-usa",children:[e("div",{class:"loc-country-banner",style:"background-image:url('/static/usa-hero.jpg')",children:[e("div",{class:"loc-country-banner-shade"}),e("div",{class:"container loc-country-banner-inner",children:[e("div",{class:"loc-country-tag",children:"04 / 04"}),e("div",{class:"loc-country-banner-row",children:[e("img",{src:"/static/flags/usa.png",class:"loc-country-flag",alt:"USA"}),e("h2",{class:"loc-country-title",children:"United States"})]}),e("p",{class:"loc-country-desc",children:"Harlem Group's North American division — operating luxury brand agencies, multi-brand showrooms, certified service centers, car rental, and real estate entities across Illinois."}),e("div",{class:"loc-country-pills",children:[e("span",{class:"loc-pill",children:"Commercial Agencies"}),e("span",{class:"loc-pill",children:"Service Centers"}),e("span",{class:"loc-pill",children:"Car Rental"}),e("span",{class:"loc-pill",children:"Real Estate"})]})]})]}),e("div",{class:"container",children:[e("div",{class:"loc-cat-row r",children:[e("span",{class:"loc-cat-icon",children:"◈"}),e("span",{class:"loc-cat-name",children:"Commercial Agencies"}),e("span",{class:"loc-cat-count",children:"Illinois"})]}),e("div",{class:"loc-location-grid",children:[e("div",{class:"lloc-card lloc-card--featured r",style:"grid-column: span 2;",children:[e("div",{class:"lloc-slider",children:[e("div",{class:"lloc-slides",children:[e("div",{class:"lloc-slide",style:"background-image:url('/static/alfaromeo-dealership.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/maserati-showroom.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/alfaromeo-showroom.jpg')"}),e("div",{class:"lloc-slide",style:"background-image:url('/static/fiat-showroom.jpg')"})]}),e("div",{class:"lloc-photo-shade"}),e("div",{class:"lloc-country-chip",children:[e("img",{src:"/static/flags/usa.png",alt:""}),"USA"]}),e("div",{class:"lloc-featured-ribbon",children:"3 Italian Brands"}),e("button",{class:"lloc-arrow lloc-arrow--prev","aria-label":"Previous photo",children:"‹"}),e("button",{class:"lloc-arrow lloc-arrow--next","aria-label":"Next photo",children:"›"}),e("div",{class:"lloc-dots"})]}),e("div",{class:"lloc-body",children:[e("div",{class:"lloc-type",children:"Commercial Agency · Volume Cars · Illinois, USA"}),e("h3",{class:"lloc-name",children:"Maserati · Alfa Romeo · Fiat"}),e("div",{class:"lloc-cities",children:[e("span",{class:"lloc-city-dot"}),"Illinois, USA"]}),e("p",{class:"lloc-desc",children:["Harlem Group's flagship Italian automotive hub in Illinois, housing three world-class brands under one roof.",e("br",{}),e("strong",{children:"Maserati"})," — Italian luxury and performance at its peak. ",e("strong",{children:"Alfa Romeo"})," — bold design and legendary driving dynamics. ",e("strong",{children:"Fiat"})," — iconic Italian compact ingenuity and style."]})]})]}),e("div",{class:"lloc-card r d1",children:[e("div",{class:"lloc-slider",children:[e("div",{class:"lloc-slides",children:[e("div",{class:"lloc-slide",style:"background-image:url('https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80')"}),e("div",{class:"lloc-slide",style:"background-image:url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80')"}),e("div",{class:"lloc-slide",style:"background-image:url('https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80')"})]}),e("div",{class:"lloc-photo-shade"}),e("div",{class:"lloc-country-chip",children:[e("img",{src:"/static/flags/usa.png",alt:""}),"USA"]}),e("button",{class:"lloc-arrow lloc-arrow--prev","aria-label":"Previous photo",children:"‹"}),e("button",{class:"lloc-arrow lloc-arrow--next","aria-label":"Next photo",children:"›"}),e("div",{class:"lloc-dots"})]}),e("div",{class:"lloc-body",children:[e("div",{class:"lloc-type",children:"Commercial Agency · Dual Dealerships"}),e("h3",{class:"lloc-name",children:"Mitsubishi — Jidd Motors & Countryside"}),e("div",{class:"lloc-cities",children:[e("span",{class:"lloc-city-dot"}),"Naperville · Countryside, Illinois"]}),e("p",{class:"lloc-desc",children:["Dual Mitsubishi dealerships in Illinois — ",e("strong",{children:"Jidd Motors Mitsubishi (Naperville)"})," and ",e("strong",{children:"Countryside Mitsubishi (Illinois)"})," — offering the full Mitsubishi lineup with complete sales and aftersales services."]})]})]})]})]})]}),e("div",{class:"loc-cta-strip",children:e("div",{class:"container loc-cta-inner",children:[e("div",{class:"loc-cta-left r",children:[e("div",{class:"loc-cta-label",children:"Connect With Us"}),e("h3",{class:"loc-cta-h3",children:"Find a location near you"})]}),e("a",{href:"/#contact",class:"loc-cta-btn r d2",children:["Get in Touch ",e("span",{children:"→"})]})]})}),e("footer",{children:e("div",{class:"container",children:[e("div",{class:"ft-grid",children:[e("div",{children:[e("img",{src:"/static/logo-white.png",alt:"Harlem Group",class:"ft-logo"}),e("div",{class:"ft-slogan",children:"Quality You Deserve!"}),e("p",{class:"ft-about",children:"Harlem Group — a beacon of excellence since 1995. Operating across Automotive, Real Estate, and Management Consultation across Iraq, Jordan, UAE, and USA."}),e("div",{class:"ft-socials",children:[e("a",{href:"#",class:"ft-soc","aria-label":"LinkedIn",children:"in"}),e("a",{href:"#",class:"ft-soc","aria-label":"Instagram",children:"◈"}),e("a",{href:"#",class:"ft-soc","aria-label":"Facebook",children:"f"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Divisions"}),e("div",{class:"ft-links",children:[e("a",{href:"/#auto-services",children:"Automotive Division"}),e("a",{href:"/#realestate",children:"Real Estate"}),e("a",{href:"/#consulting",children:"Management Consultation"}),e("a",{href:"/news",children:"News & Stories"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Company"}),e("div",{class:"ft-links",children:[e("a",{href:"/#founder",children:"About Harlem Group"}),e("a",{href:"/purpose",children:"Vision & Mission"}),e("a",{href:"/highlights",children:"Achievements"}),e("a",{href:"/#brands",children:"Our Partners"}),e("a",{href:"/locations",children:"Locations"}),e("a",{href:"/news",children:"News & Stories"}),e("a",{href:"/#contact",children:"Contact"})]})]}),e("div",{children:[e("div",{class:"ft-col-h",children:"Contact"}),e("div",{class:"ft-contact-row",children:[e("div",{children:[e("div",{class:"ft-contact-lbl",children:"Email"}),e("div",{class:"ft-contact-val",children:"info@harlem.group"})]}),e("div",{children:[e("div",{class:"ft-contact-lbl",children:"Operations"}),e("div",{class:"ft-contact-val",children:"Iraq · Jordan · UAE · USA"})]})]})]})]}),e("div",{class:"ft-bottom",children:[e("span",{children:"© 2025 Harlem Group. All rights reserved."}),e("div",{style:"display:flex;gap:28px",children:[e("a",{href:"#",children:"Privacy Policy"}),e("a",{href:"#",children:"Terms of Use"})]})]})]})}),e("script",{dangerouslySetInnerHTML:{__html:`
        /* ── country filter ── */
        window.locFilter = function(country, btn){
          document.querySelectorAll('.loc-flt').forEach(function(b){ b.classList.remove('active'); });
          btn.classList.add('active');
          document.querySelectorAll('.loc-country').forEach(function(s){
            s.style.display = (country === 'all' || s.getAttribute('data-country') === country) ? '' : 'none';
          });
        };

        /* ── location card sliders ── */
        (function(){
          document.querySelectorAll('.lloc-slider').forEach(function(slider){
            var slides = slider.querySelectorAll('.lloc-slide');
            var dotsContainer = slider.querySelector('.lloc-dots');
            var prevBtn = slider.querySelector('.lloc-arrow--prev');
            var nextBtn = slider.querySelector('.lloc-arrow--next');
            var total = slides.length;
            var cur = 0;

            /* Build dots */
            for(var i = 0; i < total; i++){
              var dot = document.createElement('button');
              dot.className = 'lloc-dot' + (i === 0 ? ' active' : '');
              dot.setAttribute('aria-label', 'Photo ' + (i+1));
              dot.setAttribute('data-idx', i);
              dotsContainer.appendChild(dot);
            }
            var dots = dotsContainer.querySelectorAll('.lloc-dot');

            function goTo(n){
              slides[cur].classList.remove('active');
              dots[cur].classList.remove('active');
              cur = (n + total) % total;
              slides[cur].classList.add('active');
              dots[cur].classList.add('active');
            }

            /* activate first slide */
            slides[0].classList.add('active');

            prevBtn.addEventListener('click', function(e){
              e.stopPropagation();
              goTo(cur - 1);
            });
            nextBtn.addEventListener('click', function(e){
              e.stopPropagation();
              goTo(cur + 1);
            });
            dots.forEach(function(dot){
              dot.addEventListener('click', function(e){
                e.stopPropagation();
                goTo(parseInt(this.getAttribute('data-idx')));
              });
            });

            /* auto-advance every 4 s — only when no hover */
            var autoTimer;
            function startAuto(){ autoTimer = setInterval(function(){ goTo(cur+1); }, 4000); }
            function stopAuto(){ clearInterval(autoTimer); }
            startAuto();
            slider.addEventListener('mouseenter', stopAuto);
            slider.addEventListener('mouseleave', startAuto);
          });
        })();

        /* ── scroll reveal ── */
        (function(){
          var els = document.querySelectorAll('.r,.rr,.rl');
          if(!els.length) return;
          var io = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); }
            });
          },{threshold:.08,rootMargin:'0px 0px -40px 0px'});
          els.forEach(function(el){ io.observe(el); });
        })();

        /* ── fullscreen menu ── */
        var fsBtn   = document.getElementById('fsBtn');
        var fsClose = document.getElementById('fsClose');
        var fsMenu  = document.getElementById('fs-menu');
        if(fsBtn && fsMenu){
          fsBtn.addEventListener('click', function(){ fsMenu.classList.add('open'); });
          fsClose.addEventListener('click', function(){ fsMenu.classList.remove('open'); });
        }

        /* ── sticky nav scroll ── */
        (function(){
          var nav = document.getElementById('nav');
          window.addEventListener('scroll', function(){
            nav.classList.toggle('scrolled', window.scrollY > 20);
          }, {passive:true});
        })();

        /* ── hero image fade-in (only active image) ── */
        setTimeout(function(){
          var active = document.querySelector('.loc-hero-img.active');
          if(active) active.style.opacity = '1';
        }, 300);
      `}})]})));const aa=new Oa,ui=Object.assign({"/src/index.tsx":te});let Ba=!1;for(const[,r]of Object.entries(ui))r&&(aa.route("/",r),aa.notFound(r.notFoundHandler),Ba=!0);if(!Ba)throw new Error("Can't import modules from ['/src/index.tsx','/app/server.ts']");export{aa as default};
