import{_ as h,r as w,L as P,B as c,f as N,o as i,c as d,a as r,n,b,u as s,a3 as C,N as x,a4 as L,F as $,g as j,O as A,t as v,a5 as B,a6 as F,i as D,m as V}from"./kLS1Tq6J.js";import{pageInfo as T,generate_page_number as E,page_number as I}from"./WDemypGc.js";const M={class:"flex flex-col items-center w-full"},R={"aria-label":"Page navigation example",class:"flex flex-wrap justify-center mt-5"},z={class:"flex items-center space-x-1 text-base"},G=["disabled"],O=["disabled","onClick","aria-label"],S=["disabled"],U={key:0,class:"text-bold text-center mt-5"},q={__name:"Pagination",props:{page_number:{type:Number,default:1},total_rows:{type:Number,default:0},itemsperpage:{type:Number,default:10}},emits:["page_num"],setup(f,{emit:_}){const y=_,t=f,l=w(0),u=()=>{l.value=E(t.total_rows,t.itemsperpage)},m=o=>{let e=o?t.page_number+1:t.page_number-1;y("page_num",e)},p=o=>{y("page_num",o)},k=P(()=>{const o=t.page_number;return I(l.value,o)});return c(()=>t.total_rows,o=>{u()}),c(()=>t.itemsperpage,()=>{u()},{immediate:!0}),N(()=>{u()}),(o,e)=>{const g=V;return i(),d("div",M,[r("nav",R,[r("ul",z,[r("li",null,[r("button",{title:"First page",onClick:e[0]||(e[0]=n(a=>p(1),["prevent"])),class:"flex items-center justify-center px-2 h-10 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},[e[4]||(e[4]=r("span",{class:"sr-only"},"First",-1)),b(g,{icon:s(C)},null,8,["icon"])])]),r("li",null,[r("button",{title:"Previous page",disabled:t.page_number<=1,class:x([{"opacity-25":t.page_number<=1},"flex items-center justify-center px-2 h-10 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"]),onClick:e[1]||(e[1]=n(a=>m(!1),["prevent"]))},[e[5]||(e[5]=r("span",{class:"sr-only"},"Previous",-1)),b(g,{icon:s(L)},null,8,["icon"])],10,G)]),(i(!0),d($,null,j(k.value,a=>(i(),d("li",{key:a,disabled:t.page_number===a,onClick:n(H=>p(a),["prevent"]),"aria-label":`Page ${a}`},[r("button",{class:x([t.page_number===a?"text-white hover:bg-yellow-300 "+s(A):"","flex items-center justify-center px-3 h-10 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"])},v(a),3)],8,O))),128)),r("li",null,[r("button",{title:"Next page",disabled:t.page_number>=l.value,onClick:e[2]||(e[2]=n(a=>m(!0),["prevent"])),"aria-label":"Next Page",class:"flex items-center justify-center px-2 h-10 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},[e[6]||(e[6]=r("span",{class:"sr-only"},"Next",-1)),b(g,{icon:s(B)},null,8,["icon"])],8,S)]),r("li",null,[r("button",{title:"Last page",onClick:e[3]||(e[3]=n(a=>p(l.value),["prevent"])),"aria-label":"Page {{ totalPages }}",class:"flex items-center justify-center px-2 h-10 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},[e[7]||(e[7]=r("span",{class:"sr-only"},"Last",-1)),b(g,{icon:s(F)},null,8,["icon"])])])])]),t.total_rows>0?(i(),d("p",U,v(s(T)(t.page_number,t.total_rows,t.itemsperpage)),1)):D("",!0)])}}},Q=h(q,[["__scopeId","data-v-adbdd8b5"]]);export{Q as P};
