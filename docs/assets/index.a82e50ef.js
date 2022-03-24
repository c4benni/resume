var G=Object.defineProperty,Q=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var L=(e,t,n)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t)=>{for(var n in t||(t={}))J.call(t,n)&&L(e,n,t[n]);if(P)for(var n of P(t))Y.call(t,n)&&L(e,n,t[n]);return e},E=(e,t)=>Q(e,X(t));var j=(e,t,n)=>(L(e,typeof t!="symbol"?t+"":t,n),n);import{d as _,c as d,o as i,a as c,b as B,r as w,m as K,e as p,w as f,f as h,g as C,n as U,h as Z,i as ee,j as te,k as N,l as M,T as ne,F as v,p as re,q as I,s as oe,t as g,u as W,v as y,x as ae,y as se,z as ie}from"./vendor.25528513.js";const ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};ce();var m=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n};const de=_({name:"DownloadIcon"}),le={width:"1em",height:"1em",viewBox:"0 0 24 24"},pe=c("path",{fill:"currentColor",d:"M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"},null,-1),ue=[pe];function fe(e,t,n,o,r,a){return i(),d("svg",le,ue)}var he=m(de,[["render",fe]]);const me=_({name:"PrintIcon"}),_e={width:"1em",height:"1em",viewBox:"0 0 24 24"},ge=c("path",{fill:"currentColor",d:"M18 7V4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3h12zm1 1H5c-1.66 0-3 1.34-3 3v5c0 .55.45 1 1 1h3v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h3c.55 0 1-.45 1-1v-5c0-1.66-1.34-3-3-3zm-3 11H8v-4h8v4zm2-6.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"},null,-1),be=[ge];function ke(e,t,n,o,r,a){return i(),d("svg",_e,be)}var $e=m(me,[["render",ke]]);const ve=_({name:"Switch",emits:["update:modelValue"],props:{modelValue:{type:Boolean,default:void 0},id:{type:String,default:void 0},inputAttrs:{type:Object,default:()=>({})}},setup(e,{emit:t}){const n=B(()=>e),o=w(!1),r=w(null),a=B(()=>typeof n.value.modelValue=="boolean"?n.value.modelValue:o.value),s=l=>{var x;const b=typeof l=="boolean"?l:!a.value;if(typeof n.value.modelValue!="undefined"&&t("update:modelValue",b),o.value=b,r.value){const $=r.value;(x=$.focus)==null||x.call($)}};return{toggle:s,onInput:l=>{const b=l.target;s(b.checked)},isChecked:a,input:r}}}),ye=["aria-checked"],we=["id","checked"],xe={key:0,class:"bg-primary dark:bg-primary-dark absolute rounded-[inherit] w-full h-full"};function Se(e,t,n,o,r,a){const s=h("UiTransition");return i(),d("div",{role:"checkbox","aria-checked":e.isChecked?"true":"false",class:"w-[40px] h-[24px] cursor-pointer rounded-full relative fill-before before:bg-current before:opacity-20 isolate before:-z-1 flex items-center can-hover:focus-within:ring-2 bg-primary/20 dark:bg-primary-dark/20",onClick:t[1]||(t[1]=u=>e.toggle(!e.isChecked))},[c("input",K({ref:"input"},e.inputAttrs,{type:"checkbox",class:"sr-only left-[50%] top-[50%]",id:e.id,checked:e.isChecked,onInput:t[0]||(t[0]=(...u)=>e.onInput&&e.onInput(...u))}),null,16,we),p(s,null,{default:f(()=>[e.isChecked?(i(),d("div",xe)):C("",!0)]),_:1}),p(s,{config:{leave:!1,enter:e.isChecked?"slideX(0, 16, `px`)":"slideX(15, 0, `px`)"},spring:e.isChecked?"wobbly":"default","retain-final-style":""},{default:f(()=>[(i(),d("div",{key:`${e.isChecked}`,class:U(["w-[21px] h-[21px] rounded-full bg-white dark:bg-gray-100 z-1 mx-[1.5px] shadow-md",{"translate-x-[16px]":e.isChecked}])},null,2))]),_:1},8,["config","spring"])],8,ye)}var Be=m(ve,[["render",Se]]);const R=({media:e,callback:t})=>{var n;try{e.addEventListener("change",t)}catch(o){/undefined is not a function/i.test(o.message)&&((n=e==null?void 0:e.addListener)==null||n.call(e,t))}},Ce=(e,t)=>{const n=Object.entries(e).sort((r,a)=>{const s=parseInt(r[1]),u=parseInt(a[1]);return s>u?1:-1}),o=[];return t&&o.push("<orientation>(orientation: landscape)"),n.forEach((r,a)=>{const s=r[0],u=parseInt(r[1]),l=parseInt((n[a+1]||[])[1]||"");o.push(`<${s}>(min-width:${u}px)${l?` and (max-width:${l-1}px)`:""}`)}),o};let D=!1,F;function Me(e){var n,o,r,a;const t=/^<.+>/g;return((a=(r=(o=(n=e.match)==null?void 0:n.call(e,t))==null?void 0:o[0])==null?void 0:r.replace)==null?void 0:a.call(r,/<|>/g,""))||""}function H(e){const t=e.name,n=/orientation/.test(t),o=e.matches,r=n?o?"landscape":"portrait":t,a=()=>{var s;n?this.output.orientation=r:this.output.is=r,(s=e.onChange)==null||s.call(e,this.output)};(n||e.matches)&&a()}function Ie(e){D||F.forEach((t,n)=>{const o=/^<.+>/g,r=window.matchMedia(t.replace(o,"")),a=r.matches,s=Me(t);H.call(this,{matches:a,name:s,index:n,onChange:e}),R({media:r,callback:async u=>{await Z(),H.call(this,{matches:u.matches,index:n,name:s,onChange:e})}})})}class Le{constructor(t){j(this,"output",{is:"",orientation:""});const{config:n,useOrientation:o,onChange:r}=t;if(n){if(Object.keys(n).length<2)throw new SyntaxError("Config object must have at least 2 breakpoints");D||(F=Ce(n,o||!1),Ie.call(this,r),Object.freeze(this),D=!0)}else throw new Error("A config object of breakpoints must be defined. Eg {sm: 0, md: 960}")}get is(){return this.output.is}get orientation(){return this.output.orientation}}class Ee{constructor(t){const n=new Le(t);Object.defineProperty(this,"is",{get(){return n.is}}),n.orientation&&Object.defineProperty(this,"orientation",{get(){return n.orientation}})}}const z=w({});let A=!1;const ze={xxs:"0",xs:"349px",sm:"599px",md:"959px",lg:"1279px",xl:"1919px"};function Ve(){if(!A){const e=n=>z.value=E(S(S({},z.value),n),{isMobile:/xxs|xs|sm/.test(n.is||"")}),t=new Ee({config:ze,useOrientation:!0,onChange:n=>{e(n)}});e({is:t.is,orientation:t.orientation}),A=!0}return z}const V=(e,t)=>{const n=document.documentElement;n.classList.add(t),n.classList.replace(t,e)},T=w({current:"dark",get is(){return this.current},set is(e){/^light$|^dark$/.test(e)&&(this.current=e,V(e,e==="dark"?"light":"dark"))},get dark(){return this.is==="dark"},set dark(e){typeof e=="boolean"&&(this.current=e?"dark":"light",V(this.current,e?"light":"dark"))},get light(){return this.is==="light"},set light(e){typeof e=="boolean"&&(this.current=e?"light":"dark",V(this.current,e?"dark":"light"))}});function We(){const e=window.matchMedia("(prefers-color-scheme: dark)"),t=n=>{n?T.value.is="dark":T.value.is="light"};t(e.matches),R({media:e,callback:n=>{t(n.matches)}})}const De=_({name:"MenuIcon"}),Te={width:"1em",height:"1em",viewBox:"0 0 24 24"},Oe=c("g",{fill:"none"},[c("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 8a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 8a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2z",fill:"currentColor"})],-1),Pe=[Oe];function je(e,t,n,o,r,a){return i(),d("svg",Te,Pe)}var Ne=m(De,[["render",je]]);const He=_({name:"IconWrapper",props:{tag:{type:String,default:"span"}},setup(e,{slots:t,attrs:n}){const o=B(()=>e);return()=>{var r;return ee(o.value.tag,E(S({},n),{class:"IconWrapper"}),[((r=t.default)==null?void 0:r.call(t))||null])}}});var q=m(He,[["__scopeId","data-v-90677dac"]]);const Ae=_({name:"CloseIcon"}),Ue={width:"1em",height:"1em",viewBox:"0 0 24 24"},Re=c("path",{fill:"currentColor",d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"},null,-1),Fe=[Re];function qe(e,t,n,o,r,a){return i(),d("svg",Ue,Fe)}var Ge=m(Ae,[["render",qe]]);const Qe=_({name:"Drawer",components:{Download:he,Print:$e,Switch:Be,Menu:Ne,IconWrapper:q,Close:Ge},setup(){const e=B(()=>Ve().value),t=w(!1);return te(()=>e.value.isMobile,()=>{t.value=!1}),{theme:T,breakpoint:e,drawerState:t,drawerEntered:o=>{var r;(r=o.el)==null||r.focus()}}}}),Xe={key:0,class:"bg-primary/[0.04] dark:bg-primary-dark/[0.04] border-r border-black/5 dark:border-white/5 p-6 content-between lg:grid hidden"},Je={class:"grid gap-y-6 my-6"},Ye=c("p",{class:"cursive-font text-[1.25rem] font-semibold dark:font-medium text-black/80 dark:text-white/90"}," C4Benn ",-1),Ke=I(" Download "),Ze=I(" Print "),et=c("label",{for:"check",class:"mr-[8px] cursor-pointer text-paragraph dark:text-paragraph-dark text-base"}," Dark theme ",-1),tt={class:"fixed inset-0"},nt={class:"grid gap-y-6 my-6"},rt=c("p",{class:"cursive-font text-[1.25rem] font-semibold dark:font-medium text-black/80 dark:text-white/90"}," C4Benn ",-1),ot=I(" Download "),at=I(" Print "),st=c("label",{for:"check",class:"mr-[8px] cursor-pointer text-paragraph dark:text-paragraph-dark text-base"}," Dark theme ",-1);function it(e,t,n,o,r,a){const s=h("Download"),u=h("Button"),l=h("Print"),b=h("Switch"),x=h("IconWrapper"),$=h("UiTransition");return e.breakpoint.isMobile?(i(),d(v,{key:1},[p(u,{class:"fixed top-3 left-3 z-20 rounded-full w-[44px] h-[44px]",title:"Menu",onClick:t[2]||(t[2]=k=>e.drawerState=!e.drawerState)},{default:f(()=>[p(x,{class:"text-xl"},{default:f(()=>[(i(),M(re(e.drawerState?"Close":"Menu")))]),_:1})]),_:1}),(i(),M(ne,{to:"body"},[c("div",tt,[p($,{spring:"stiff"},{default:f(()=>[e.drawerState?(i(),d("div",{key:0,class:"bg-black/70 fixed z-10 w-full h-full inset-0",onClick:t[3]||(t[3]=k=>e.drawerState=!1)})):C("",!0)]),_:1}),p($,{config:"slideY",spring:"stiff"},{default:f(()=>[e.drawerState?(i(),d("div",{key:0,class:"w-full bg-card dark:bg-card-dark fixed z-10 left-0 bottom-0 px-6 py-8 dark:border-r border-r-white/10 shadow-md dark:shadow-none outline-none",tabindex:"0",onVnodeMounted:t[6]||(t[6]=(...k)=>e.drawerEntered&&e.drawerEntered(...k))},[c("div",nt,[rt,p(u,{block:""},{icon:f(()=>[p(s)]),default:f(()=>[ot]),_:1}),p(u,{block:""},{icon:f(()=>[p(l)]),default:f(()=>[at]),_:1}),c("form",{action:".",class:"flex items-center h-full pb-6 mt-6",onSubmit:t[5]||(t[5]=N(()=>{},["prevent"]))},[st,p(b,{id:"check",modelValue:e.theme.dark,"onUpdate:modelValue":t[4]||(t[4]=k=>e.theme.dark=k)},null,8,["modelValue"])],32)])],512)):C("",!0)]),_:1})])]))],64)):(i(),d("aside",Xe,[c("div",Je,[Ye,p(u,{block:""},{icon:f(()=>[p(s)]),default:f(()=>[Ke]),_:1}),p(u,{block:""},{icon:f(()=>[p(l)]),default:f(()=>[Ze]),_:1})]),c("form",{action:".",class:"flex items-center h-full pb-6",onSubmit:t[1]||(t[1]=N(()=>{},["prevent"]))},[et,p(b,{id:"check",modelValue:e.theme.dark,"onUpdate:modelValue":t[0]||(t[0]=k=>e.theme.dark=k)},null,8,["modelValue"])],32)]))}var ct=m(Qe,[["render",it]]);const dt={},lt={class:"bg-primary dark:bg-primary-dark text-white dark:text-black/70 before:border-t before:border-dashed before:w-[162px] before:border-[#e3d7da80] dark:before:border-black/20 before:block before:mx-auto before:mt-[25px] before:mb-[11px] grid px-[51px]"},pt=oe('<h1 class="font-bold mx-auto pb-3" data-v-a2f5bc34><span class="text-[58px] leading-[79px]" data-v-a2f5bc34> Chidi Benedict </span></h1><div class="pt-6 pb-[29px] text-center text-[11px] dark:text-black" data-v-a2f5bc34><span data-v-a2f5bc34> Lagos, 100001 Nigeria | </span><a href="tel:+2348144177223" data-v-a2f5bc34> 2348144177223 | </a><a href="mailto:ihejirikabenchidi@gmail.com" data-v-a2f5bc34>ihejirikabenchidi@gmail.com </a></div>',2),ut=[pt];function ft(e,t){return i(),d("header",lt,ut)}var ht=m(dt,[["render",ft],["__scopeId","data-v-a2f5bc34"]]);const mt=_({name:"Section",props:{title:{type:String,required:!0}}}),_t={class:"before:block before:w-[80px] before:border-t before:border-dashed before:border-black/20 dark:before:border-white/25 mt-[25px] mb-[56px]"},gt={class:"text-[18px] leading-[1.5] text-primary dark:text-primary-dark font-bold pb-[6px] mt-[10px]"},bt={class:"text-black/90 dark:text-white/80"};function kt(e,t,n,o,r,a){return i(),d("section",_t,[c("h2",gt,g(e.title),1),c("div",bt,[W(e.$slots,"default")])])}var $t=m(mt,[["render",kt]]);const vt={summary:"Tech savvy Frontend Engineer professionally skilled in building Websites, and Web apps using latest, stable technologies and frameworks like VueJS, React, Svelte, Typescript, GraphQL, NodeJs, etc. With over 4 years of professional experience, I've helped companies and individuals solve technical problems by providing highly optimized websites and web apps that meets the required specications, at the appropriate time interval. Seeking to leverage proven experience, to work with an amazing team, and build more amazing projects.",skills:["VueJS","React","Svelte","GraphQL","Node.js","PostgreSQL","React Native","Angular","CSS","JavaScript","TypeScript","SQLite","Go","Docker","Git","MongoDB","Vuetify","MUI","Nuxt","Tailwind","Bootstrap","Unit testing"],experience:[{title:"Senior Front End Developer",from:"01/2020",company:"Bex Multi Services",state:"Owerri",description:["Optimize web apps for maximum performance, and accessibility following the WAI-ARIA standards.","Test and debug existing web apps.","Build reusable code and libraries for future use.","Collaborate with other team members and stakeholders.","Lead the junior frontend team in building elegant and sophisticated user interfaces.","Built Admin dashboard using Nuxt, and Vuetify."]},{title:"Front End Engineer",from:"04/2019",to:"10/2020",company:"Parkway Projects Limited",state:"Lagos",description:["Developed new user-facing features.","Worked with the UI/UX designers to bridge the gap between graphical design and technical implementation.","Ensured the technical feasibility of UI/UX designs.","Worked closely with the back-end and full-stack developers to deliver consistent and reliable web experience.","Built the front end of <a href='https://payzone.ng' target='_blank' rel='noopener' class='anchor'>Payzone</a>"]},{title:"Front End Developer",from:"09/2018",to:"09/2019",company:"Ministry of Works",state:"Enugu",description:["Designed engaging, responsive landing pages.","Built the staff check in portal using React.","Optimized web apps and web pages for speed, performance, and accessibility.","Optimized web design for mobile and other platforms for maximum speed."]},{title:"Front End Developer Intern",from:"04/2017",to:"09/2017",company:"Exolve Technologies Limited",state:"Lagos",description:["Assisted in developing and maintaining user-friendly websites.","Maintaining an understanding of the latest Web applications and programming practices through education, study, and participation in conferences, workshops, and groups.","Identifying problems uncovered by customer feedback and testing, and correcting or referring problems to appropriate personnel for correction","Maintained website analysis spreadsheet by monitoring activity."]}],education:[{title:"The Bells University of Technology - Ogun State | Bachelor of Science",content:"Project Management, 09/2018"}],links:[{title:"Github",href:"https://github.com/c4benni"},{title:"Payzone",href:"https://payzone.ng"}]},yt=_({name:"Experience",props:{content:{type:Object,required:!0}}}),wt={class:"bold uppercase"},xt={class:"bold"},St={class:"lists"},Bt=["innerHTML"];function Ct(e,t,n,o,r,a){var s,u;return i(),d("div",null,[c("h3",null,[c("span",wt,g(e.content.title),1),c("span",null," | "+g(e.content.from)+" - "+g(((s=e.content)==null?void 0:s.to)||"Current"),1)]),c("h4",xt,g(e.content.company)+" - "+g(e.content.state)+", "+g(((u=e.content)==null?void 0:u.country)||"Nigeria"),1),c("ul",St,[(i(!0),d(v,null,y(e.content.description,l=>(i(),d("li",{key:l,innerHTML:l},null,8,Bt))),128))])])}var Mt=m(yt,[["render",Ct]]);const It=_({name:"Body",components:{Section:$t,Experience:Mt},setup(){return{data:vt}}}),Lt={class:"w-full pt-6 px-[51px] dark:border-x dark:border-b rounded-[inherit] rounded-t-none dark:border-white/10 dark:border-dashed"},Et={class:"grid grid-cols-2"},zt={class:"grid gap-y-[44px]"},Vt={class:"grid gap-y-[44px]"},Wt={class:"bold"},Dt={class:"lists"},Tt=["href"];function Ot(e,t,n,o,r,a){const s=h("Section"),u=h("Experience");return i(),d("div",Lt,[p(s,{title:"Summary"},{default:f(()=>[c("p",null,g(e.data.summary),1)]),_:1}),p(s,{title:"Skills"},{default:f(()=>[c("ul",Et,[(i(!0),d(v,null,y(e.data.skills,l=>(i(),d("li",{key:l},g(l),1))),128))])]),_:1}),p(s,{title:"Experience"},{default:f(()=>[c("div",zt,[(i(!0),d(v,null,y(e.data.experience,l=>(i(),M(u,{content:l},null,8,["content"]))),256))])]),_:1}),p(s,{title:"Education and Training"},{default:f(()=>[c("div",Vt,[(i(!0),d(v,null,y(e.data.education,l=>(i(),d("div",{key:l.title},[c("h2",Wt,g(l.title),1),c("p",null,g(l.content),1)]))),128))])]),_:1}),p(s,{title:"Websites, Portfolios, Profiles"},{default:f(()=>[c("ul",Dt,[(i(!0),d(v,null,y(e.data.links,l=>(i(),d("li",{key:l.title},[c("a",{href:l.href,target:"_blank",rel:"noopener",class:"anchor"},g(l.title),9,Tt)]))),128))])]),_:1})])}var Pt=m(It,[["render",Ot]]);const jt=_({name:"Resume",components:{Header:ht,Body:Pt}}),Nt={id:"resume",role:"document",class:"lg:max-w-[748px] min-w-[644px] lg:rounded-md overflow-hidden mx-auto w-full bg-card dark:bg-card-dark text-black/90 dark:text-white/90"};function Ht(e,t,n,o,r,a){const s=h("Header"),u=h("Body");return i(),d("div",Nt,[p(s),p(u)])}var At=m(jt,[["render",Ht]]);const Ut=_({name:"Main",components:{Resume:At}}),Rt={class:"lg:h-screen lg:max-h-screen lg:w-full lg:overflow-y-auto lg:py-8"};function Ft(e,t,n,o,r,a){const s=h("Resume");return i(),d("main",Rt,[p(s)])}var qt=m(Ut,[["render",Ft]]);const Gt=_({name:"App",components:{Drawer:ct,Main:qt},setup(){ae(()=>{We()})}}),Qt={class:"grid grid-cols-1 lg:grid-cols-[256px,1fr] bg-surface dark:bg-surface-dark lg:w-screen lg:h-screen lg:max-w-[100vw] lg:max-h-[100vh] lg:overflow-hidden overscroll-contain"};function Xt(e,t,n,o,r,a){const s=h("Drawer"),u=h("Main");return i(),d("div",Qt,[p(s),p(u)])}var Jt=m(Gt,[["render",Xt]]);const Yt=_({name:"Button",props:{block:Boolean},components:{IconWrapper:q}});function Kt(e,t,n,o,r,a){const s=h("IconWrapper");return i(),d("button",{class:U(["button",{"w-full":e.block}])},[W(e.$slots,"default",{},void 0,!0),e.$slots.icon?(i(),M(s,{key:0},{default:f(()=>[W(e.$slots,"icon",{},void 0,!0)]),_:3})):C("",!0)],2)}var Zt=m(Yt,[["render",Kt],["__scopeId","data-v-3bc74c39"]]);const O=se(Jt);O.component("Button",Zt);O.use(ie,{transitions:{slideX:(e=100,t=0,n="%")=>({frame:(o,r)=>({enter:{transform:`translate3d(${o(e,t)}${n}, 0, 0)`},leave:{transform:`translate3d(${o(t,e)}${n}, 0, 0)`}})[r]}),slideY:(e=100,t=0,n="%")=>({frame:(o,r)=>({enter:{transform:`translate3d(0, ${o(e,t)}${n}, 0)`},leave:{transform:`translate3d(0, ${o(t,e)}${n}, 0)`}})[r]})}});O.mount("#app");
