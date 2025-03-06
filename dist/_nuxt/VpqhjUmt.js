import{_ as x,o as v,c as k,k as f,v as g,a as t,r as p,f as w,b as r,n as b,F as h,h as y,V as _}from"./kLS1Tq6J.js";import{f as D}from"./B1XBGyiY.js";import $ from"./Cv7mMPyY.js";import{handleApiError as F}from"./Bk09pi9Z.js";import"./DenuNirR.js";const R={data(){return{dateTimeRange:null}},mounted(){this.initFlatpickr()},methods:{initFlatpickr(){const u=this;D(this.$refs.dateRangeInput,{mode:"single",altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d",defaultDate:Date.now(),onChange(s,a,m){u.$emit("dateSelected",a)}})}}};function C(u,s,a,m,n,c){return v(),k("div",null,[f(t("input",{ref:"dateRangeInput","onUpdate:modelValue":s[0]||(s[0]=i=>n.dateTimeRange=i),class:"mt-1 p-2 border rounded-md w-full flatpickr"},null,512),[[g,n.dateTimeRange]])])}const d=x(R,[["render",C],["__scopeId","data-v-5a63ffd4"]]),I={class:"relative w-full mx-auto h-full flex flex-col justify-end"},S={class:"absolute bottom-0 left-0 right-0 z-1 animate__animated animate__fadeInLeft bg-emerald-900 p-6 w-full max-w-7xl mx-auto shadow-lg rounded-t-lg"},V={class:"grid md:grid-cols-4 grid-cols-1 gap-4"},B={class:"mb-4"},U={class:"mb-4"},N={class:"mb-4"},P={class:"block w-full mx-auto p-2 h-full items-center bg-white md:hidden dark:bg-slate-900"},T={class:"block space-y-3 md:flex pt-4 mb-2 md:justify-center"},j={class:"grid md:grid-cols-3 grid-cols-1 gap-2"},q={class:"mb-4"},A={class:"mb-4"},E={class:"mb-4"},H={__name:"header-index",setup(u){const s=p({name:"",email:"",checkin:"",checkout:"",guests:1,specialRequests:""}),a=p([]),m=async()=>{try{const o=await y.post(`${_}banners-public/get-images`,{lang:"en"});console.log(o.data.images),a.value=o.data.images}catch(o){console.log(o),F(o)}},n=()=>{console.log("Form submitted",s.value)},c=o=>{s.value.checkin=o},i=o=>{s.value.checkout=o};return w(()=>{m()}),(o,e)=>(v(),k(h,null,[t("section",I,[r($,{autoplay:!0,"autoplay-speed":3e3,images:a.value,infinite:!0,dots:!0,class:"w-full h-full"},null,8,["images"]),t("div",S,[t("form",{onSubmit:b(n,["prevent"])},[t("div",V,[t("div",B,[e[6]||(e[6]=t("label",{for:"checkin",class:"block text-white"},"Check-in Date",-1)),r(d,{onDateSelected:e[0]||(e[0]=l=>c())})]),t("div",U,[e[7]||(e[7]=t("label",{for:"checkout",class:"block text-white"},"Check-out Date",-1)),r(d,{onDateSelected:e[1]||(e[1]=l=>i())})]),t("div",N,[e[8]||(e[8]=t("label",{for:"guests",class:"block text-white"},"# of Guests",-1)),f(t("input",{type:"number",id:"guests","onUpdate:modelValue":e[2]||(e[2]=l=>s.value.guests=l),min:"1",required:"",class:"mt-1 block w-full p-2 border border-gray-300 rounded"},null,512),[[g,s.value.guests]])]),e[9]||(e[9]=t("div",{class:"w-full mt-4"},[t("button",{type:"submit",class:"w-full bg-yellow-500 text-white font-bold py-2 mt-3 text-nowrap px-2 rounded-lg hover:bg-green-500 transition duration-300"}," Book Now! ")],-1))])],32)])]),t("section",P,[e[14]||(e[14]=t("div",{class:"block text-center p-6 border-b-2 border-gray-300"},[t("h2",{class:"text-center text-2xl md:text-4xl dark:text-yellow-500 font-extrabold text-indigo-900"}," Reserve Now ")],-1)),t("div",T,[t("form",{onSubmit:b(n,["prevent"])},[t("div",j,[t("div",q,[e[10]||(e[10]=t("label",{for:"checkin",class:"block text-gray-700"},"Check-in Date",-1)),r(d,{onDateSelected:e[3]||(e[3]=l=>c())})]),t("div",A,[e[11]||(e[11]=t("label",{for:"checkout",class:"block text-gray-700"},"Check-out Date",-1)),r(d,{onDateSelected:e[4]||(e[4]=l=>i())})]),t("div",E,[e[12]||(e[12]=t("label",{for:"guests",class:"block text-gray-700"},"# of Guests",-1)),f(t("input",{type:"number",id:"guests","onUpdate:modelValue":e[5]||(e[5]=l=>s.value.guests=l),min:"1",required:"",class:"mt-1 block w-full p-2 border border-gray-300 rounded"},null,512),[[g,s.value.guests]])]),e[13]||(e[13]=t("div",{class:"w-full mt-4"},[t("button",{type:"submit",class:"w-full bg-yellow-600 text-white font-bold py-2 mt-3 text-nowrap px-2 rounded-lg hover:bg-green-500 transition duration-300"}," Reserve ")],-1))])],32)])])],64))}};export{H as default};
