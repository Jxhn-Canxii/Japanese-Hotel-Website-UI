import{B as p,f as v,K as b,L as g,o as k,y as _,b as o,w as m,k as r,M as d,a as e,N as n,u as c,O as u,T as f,t as B,n as C,P as E,Q as M,i as S,R as T,m as L}from"./kLS1Tq6J.js";const N={class:"fixed inset-0 overflow-auto px-4 py-6 sm:px-0 z-50 min-h-full","scroll-region":""},D={class:"text-lg font-semibold text-white"},z={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},title:{type:String,default:"Modal"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(s,{emit:w}){const t=s,x=w;p(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const a=()=>{t.closeable&&x("close")},i=l=>{l.key==="Escape"&&t.show&&a()};v(()=>document.addEventListener("keydown",i)),b(()=>{document.removeEventListener("keydown",i),document.body.style.overflow=null});const y=g(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","4xl":"sm:max-w-4xl","6xl":"sm:max-w-6xl","8xl":"sm:max-w-8xl",fullscreen:"absolute top-0 mt-0 pt-0 h-screen w-screen"})[t.maxWidth]);return(l,V)=>{const h=L;return k(),_(T,{to:"body"},[o(f,{"leave-active-class":"duration-200"},{default:m(()=>[r(e("div",N,[e("div",{class:n(["fixed inset-0 opacity-80",c(u)]),onClick:a},null,2),o(f,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:m(()=>[r(e("div",{class:n(["mb-6 bg-white rounded-lg overflow-auto shadow-xl transform transition-all sm:w-full sm:mx-auto",y.value])},[e("div",{class:n(["flex justify-between p-3",c(u)])},[e("h2",D,B(s.title),1),e("button",{class:"flex float-end p-3 bg-transparent mr-4 md:mr-1",onClick:C(a,["prevent"])},[o(h,{icon:c(E),class:"dark:text-red-500"},null,8,["icon"])])],2),s.show?M(l.$slots,"default",{key:0}):S("",!0)],2),[[d,s.show]])]),_:3})],512),[[d,s.show]])]),_:3})])}}};export{z as _};
