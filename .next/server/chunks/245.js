!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7225a4c7-8f0a-41a9-b47d-704cc43b00ae",e._sentryDebugIdIdentifier="sentry-dbid-7225a4c7-8f0a-41a9-b47d-704cc43b00ae")}catch(e){}}(),function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7225a4c7-8f0a-41a9-b47d-704cc43b00ae",e._sentryDebugIdIdentifier="sentry-dbid-7225a4c7-8f0a-41a9-b47d-704cc43b00ae")}catch(e){}}(),exports.id=245,exports.ids=[245],exports.modules={14464:e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=14464,e.exports=t},18710:(e,t,n)=>{"use strict";let r;n.r(t),n.d(t,{default:()=>x,dynamic:()=>u,generateImageMetadata:()=>h,generateMetadata:()=>m,generateViewport:()=>y,metadata:()=>g});var a=n(53935),s=n(53873),i=n(99993),o=n(54580),c=n(70396),d=n(45056),l=n.n(d),b=n(65161),f=n.n(b);n(67272);let u="force-dynamic",g={title:"Horizon",description:"Horizon is a modern banking platform for everyone.",icons:{icon:"/icons/logo.svg"}},p=new Proxy(function({children:e}){return(0,c.jsx)("html",{lang:"en",children:(0,c.jsx)("body",{className:`${l().variable} ${f().variable}`,children:e})})},{apply:(e,t,n)=>{let r,c,d;try{let e=o.requestAsyncStorage.getStore();r=(0,a.h)((0,s.x)([e,"optionalAccess",e=>e.headers,"access",e=>e.get,"call",e=>e("sentry-trace")]),()=>void 0),c=(0,a.h)((0,s.x)([e,"optionalAccess",e=>e.headers,"access",e=>e.get,"call",e=>e("baggage")]),()=>void 0),d=(0,s.x)([e,"optionalAccess",e=>e.headers])}catch(e){}return i.wrapServerComponentWithSentry(e,{componentRoute:"/",componentType:"Layout",sentryTraceHeader:r,baggageHeader:c,headers:d}).apply(t,n)}});r="function"==typeof p?new Proxy(p,{apply:(e,t,n)=>{let r,c,d;try{let e=o.requestAsyncStorage.getStore();r=(0,a.h)((0,s.x)([e,"optionalAccess",e=>e.headers,"access",e=>e.get,"call",e=>e("sentry-trace")]),()=>void 0),c=(0,a.h)((0,s.x)([e,"optionalAccess",e=>e.headers,"access",e=>e.get,"call",e=>e("baggage")]),()=>void 0),d=(0,s.x)([e,"optionalAccess",e=>e.headers])}catch(e){}return i.wrapServerComponentWithSentry(e,{componentRoute:"/",componentType:"Layout",sentryTraceHeader:r,baggageHeader:c,headers:d}).apply(t,n)}}):p;let m=void 0,h=void 0,y=void 0,x=r},51250:(e,t,n)=>{Promise.resolve().then(n.bind(n,33369))},46837:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,79208,23)),Promise.resolve().then(n.t.bind(n,39072,23)),Promise.resolve().then(n.t.bind(n,21657,23)),Promise.resolve().then(n.t.bind(n,18778,23)),Promise.resolve().then(n.t.bind(n,37603,23)),Promise.resolve().then(n.t.bind(n,53256,23))},27198:()=>{},33369:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(32556),a=n(85514),s=n.n(a);function i({error:e}){return r.jsx("html",{children:r.jsx("body",{children:r.jsx(s(),{})})})}n(32228)},65051:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(32556),a=n(32228),s=n(25609),i=n(16662),o=n(37513),c=n(58145),d=n(13035);let l=({user:e,variant:t})=>{let n=(0,o.useRouter)(),[l,b]=(0,a.useState)("");(0,a.useEffect)(()=>{(async()=>{let t=await (0,c.Sn)(e);b(t?.linkToken)})()},[e]);let f=(0,a.useCallback)(async t=>{await (0,c.XP)({publicToken:t,user:e}),n.push("/")},[e]),{open:u,ready:g}=(0,i.Iw)({token:l,onSuccess:f});return r.jsx(r.Fragment,{children:"primary"===t?r.jsx(s.z,{onClick:()=>u(),disabled:!g,className:"plaidlink-primary",children:"Connect bank"}):"ghost"===t?(0,r.jsxs)(s.z,{onClick:()=>u(),variant:"ghost",className:"plaidlink-ghost",children:[r.jsx(d.default,{src:"/icons/connect-bank.svg",alt:"connect bank",width:24,height:24}),r.jsx("p",{className:"hiddenl text-[16px] font-semibold text-black-2 xl:block",children:"Connect bank"})]}):(0,r.jsxs)(s.z,{onClick:()=>u(),className:"plaidlink-default",children:[r.jsx(d.default,{src:"/icons/connect-bank.svg",alt:"connect bank",width:24,height:24}),r.jsx("p",{className:"text-[16px] font-semibold text-black-2",children:"Connect bank"})]})})}},25609:(e,t,n)=>{"use strict";n.d(t,{z:()=>d});var r=n(32556),a=n(32228),s=n(96610),i=n(41521),o=n(57094);let c=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:t,size:n,asChild:a=!1,...i},d)=>{let l=a?s.g7:"button";return r.jsx(l,{className:(0,o.cn)(c({variant:t,size:n,className:e})),ref:d,...i})});d.displayName="Button"},58145:(e,t,n)=>{"use strict";n.d(t,{Sn:()=>c,XD:()=>a,XP:()=>d,cM:()=>l,ok:()=>o,y1:()=>i,zB:()=>s}),n(36681);var r=n(25215),a=(0,r.$)("b461f71c8b09816409fe99c5b1181e7f53a0c0c3");(0,r.$)("481de2e958a1f0989fb9a82942f3922dcbad956f");var s=(0,r.$)("8568a67795cefec8dcbfbf376c0ccba5263386d4"),i=(0,r.$)("0308aa41fc4e5d2a58369d21142f3b63ff993d17");(0,r.$)("98985eb42435b1e5c06bf49c590eeeae05205eb4");var o=(0,r.$)("13c00a0b1477620cd0b600fb678f92c79e38df72"),c=(0,r.$)("1133cc6f7634c12d927f0cea48eaffb138702c8f");(0,r.$)("306716ad50dd0118becbceab3218a05e2af24f14");var d=(0,r.$)("6fb863147636cb4841113352dfcd6fa784497070");(0,r.$)("82deb28abdff72f88801084f9a392ccdffc8cd69");var l=(0,r.$)("d26287b35055b111e84fe0f7485a71fbaf215d83")},57094:(e,t,n)=>{"use strict";n.d(t,{Jk:()=>l,RL:()=>f,T$:()=>b,Yz:()=>d,cn:()=>o,dN:()=>c});var r=n(26746),a=n(98668),s=n(83111),i=n(5063);function o(...e){return(0,s.m6)((0,r.W)(e))}function c(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(e)}function d({params:e,key:t,value:n}){let r=a.Z.parse(e);return r[t]=n,a.Z.stringifyUrl({url:window.location.pathname,query:r},{skipNull:!0})}function l(e){switch(e){case"depository":return{bg:"bg-blue-25",lightBg:"bg-blue-100",title:"text-blue-900",subText:"text-blue-700"};case"credit":return{bg:"bg-success-25",lightBg:"bg-success-100",title:"text-success-900",subText:"text-success-700"};default:return{bg:"bg-green-25",lightBg:"bg-green-100",title:"text-green-900",subText:"text-green-700"}}}function b(e){return atob(e)}let f=e=>i.z.object({firstName:"sign-in"===e?i.z.string().optional():i.z.string().min(3),lastName:"sign-in"===e?i.z.string().optional():i.z.string().min(3),address1:"sign-in"===e?i.z.string().optional():i.z.string().max(50),city:"sign-in"===e?i.z.string().optional():i.z.string().max(50),state:"sign-in"===e?i.z.string().optional():i.z.string().min(2).max(2),postalCode:"sign-in"===e?i.z.string().optional():i.z.string().min(3).max(6),dateOfBirth:"sign-in"===e?i.z.string().optional():i.z.string().min(3),ssn:"sign-in"===e?i.z.string().optional():i.z.string().min(3),email:i.z.string().email(),password:i.z.string().min(8)})},33550:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>o});var r=n(41716);let a=(0,r.createProxy)(String.raw`/Users/prathambarvalta/Desktop/horizon/app/global-error.jsx`),{__esModule:s,$$typeof:i}=a;a.default;let o=(0,r.createProxy)(String.raw`/Users/prathambarvalta/Desktop/horizon/app/global-error.jsx#default`)},67272:()=>{}};
//# sourceMappingURL=245.js.map