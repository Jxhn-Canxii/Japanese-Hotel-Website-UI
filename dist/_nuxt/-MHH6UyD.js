import{_ as K,r as h,c as g,a as o,b as B,u as D,k as N,v as T,i as U,m as V,o as x,X as A}from"./kLS1Tq6J.js";var E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L={exports:{}};(function(f){(function(l){var a=function(e,t,r){if(!w(t)||z(t)||C(t)||F(t)||m(t))return t;var s,i=0,y=0;if(k(t))for(s=[],y=t.length;i<y;i++)s.push(a(e,t[i],r));else{s={};for(var b in t)Object.prototype.hasOwnProperty.call(t,b)&&(s[e(b,r)]=a(e,t[b],r))}return s},d=function(e,t){t=t||{};var r=t.separator||"_",s=t.split||/(?=[A-Z])/;return e.split(s).join(r)},u=function(e){return O(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))},p=function(e){var t=u(e);return t.substr(0,1).toUpperCase()+t.substr(1)},n=function(e,t){return d(e,t).toLowerCase()},c=Object.prototype.toString,m=function(e){return typeof e=="function"},w=function(e){return e===Object(e)},k=function(e){return c.call(e)=="[object Array]"},z=function(e){return c.call(e)=="[object Date]"},C=function(e){return c.call(e)=="[object RegExp]"},F=function(e){return c.call(e)=="[object Boolean]"},O=function(e){return e=e-0,e===e},v=function(e,t){var r=t&&"process"in t?t.process:t;return typeof r!="function"?e:function(s,i){return r(s,e,i)}},_={camelize:u,decamelize:n,pascalize:p,depascalize:n,camelizeKeys:function(e,t){return a(v(u,t),e)},decamelizeKeys:function(e,t){return a(v(n,t),e,t)},pascalizeKeys:function(e,t){return a(v(p,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};f.exports?f.exports=_:l.humps=_})(E)})(L);var P=!1;try{P=!0}catch{}const R={class:"z-4000"},S={key:0,class:"feedback-modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-1000"},I={class:"bg-white p-6 rounded-lg shadow-lg w-full sm:w-96"},W={__name:"feedbacks",setup(f){const l=h(!1),a=h(""),d=()=>{l.value=!l.value},u=()=>{a.value?(console.log("Feedback submitted:",a.value),l.value=!1,a.value=""):alert("Please provide your feedback before submitting.")};return(p,n)=>{const c=V;return x(),g("div",R,[o("button",{onClick:d,class:"feedback-button fixed bottom-10 left-10 p-4 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-transform transform hover:scale-110"},[B(c,{icon:D(A)},null,8,["icon"])]),l.value?(x(),g("div",S,[o("div",I,[n[1]||(n[1]=o("h2",{class:"text-xl font-bold text-emerald-900"},"We'd Love Your Feedback!",-1)),N(o("textarea",{"onUpdate:modelValue":n[0]||(n[0]=m=>a.value=m),class:"w-full mt-4 p-2 border border-gray-300 rounded-md",placeholder:"Your feedback...",rows:"4"},null,512),[[T,a.value]]),o("div",{class:"mt-4 text-right"},[o("button",{onClick:u,class:"bg-emerald-900 text-white px-4 py-2 rounded hover:bg-emerald-700"}," Submit "),o("button",{onClick:d,class:"ml-2 text-gray-500 hover:text-gray-700"}," Close ")])])])):U("",!0)])}}},$=K(W,[["__scopeId","data-v-c89fa2ee"]]);export{$ as default};
