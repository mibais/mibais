var ie=Object.defineProperty;var ce=(n,o,a)=>o in n?ie(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a;var f=(n,o,a)=>(ce(n,typeof o!="symbol"?o+"":o,a),a);import{_ as re,b as le,a as pe}from"./index.vue_vue_type_style_index_0_lang-BlCX3b-j.js";import{_ as ue,a as de,b as _e}from"./login-left-BxwqjBh_.js";import{_ as me}from"./logo-BiyglBXb.js";import{j as I,f as he,k as M,g as ge,m as q,A as fe,_ as ve,n as we}from"./index-BTljWS7e.js";import{g as w}from"./tools-CeKlJYtr.js";import{d as k,W as be,r as ye,s as $,f as j,ap as xe,o as A,u as e,j as ke,a3 as P,a8 as c,af as v,ac as z,k as i,ad as _,aq as E,a5 as h,ag as Ce,G as B,a6 as Le,a7 as $e,ak as ze}from"./vue-f4UZefmh.js";import{H as Ie,V as Me,U as qe,W as Ae,X as Pe,Y as Ee,Z as Se,O as Te,T as We,I as Be,$ as Oe,a0 as Re,a1 as Ue,a2 as Ge,J as Ne}from"./antd-_WrWzocG.js";var Ve=async(n=0)=>new Promise(o=>{const a=setTimeout(()=>{o(!0),clearTimeout(a)},n)});const t={width:0,height:0,canvas:null,ctx:null,circles:[],animate:!0,requestId:null},je=function(n){if(!t||!n)throw new Error("no canvasInstance");t.width=window.innerWidth,t.height=window.innerHeight,t.canvas=n,t.canvas.width=t.width,t.canvas.height=t.height,t.ctx=t.canvas.getContext("2d"),t.circles=[];for(let o=0;o<t.width*.5;o++){const a=new Fe;t.circles.push(a)}K(),He()};function F(){t.animate=!(document.body.scrollTop>t.height)}function H(){t.width=window.innerWidth,t.height=window.innerHeight,t.canvas.width=t.width,t.canvas.height=t.height}function K(){if(t.animate){t.ctx.clearRect(0,0,t.width,t.height);for(const n in t.circles)t.circles[n].draw()}t.requestId=requestAnimationFrame(K)}class Fe{constructor(){f(this,"pos");f(this,"alpha");f(this,"scale");f(this,"velocity");f(this,"draw");this.pos={x:Math.random()*t.width,y:t.height+Math.random()*100},this.alpha=.1+Math.random()*.3,this.scale=.1+Math.random()*.3,this.velocity=Math.random();const o=Math.random()*255,a=Math.random()*255,l=Math.random()*255;this.draw=function(){this.pos.y-=this.velocity,this.alpha-=5e-4,t.ctx.beginPath(),t.ctx.arc(this.pos.x,this.pos.y,this.scale*10,0,2*Math.PI,!1),t.ctx.fillStyle=`rgba(${o},${a},${l},${this.alpha})`,t.ctx.fill()}}}function He(){window.addEventListener("scroll",F),window.addEventListener("resize",H)}function Ke(){window.removeEventListener("scroll",F),window.removeEventListener("resize",H),cancelAnimationFrame(t.requestId)}const N={init:je,removeListeners:Ke},O=n=>(Le("data-v-84293cf4"),n=n(),$e(),n),De={class:"login-container"},Je={"h-screen":"","w-screen":"",absolute:"","z-10":""},Qe={class:"login-content flex-center"},Xe={class:"ant-pro-form-login-main rounded"},Ye={class:"flex-between h-15 px-4 mb-[2px]"},Ze={class:"flex-end"},et=O(()=>c("span",{class:"ant-pro-form-login-logo"},[c("img",{"w-full":"","h-full":"","object-cover":"",src:me})],-1)),tt=O(()=>c("span",{class:"ant-pro-form-login-title"}," 米白云 ",-1)),ot={class:"ant-pro-form-login-desc"},st={class:"login-lang flex-center relative z-11"},nt={class:"box-border flex min-h-[520px]"},at=O(()=>c("div",{class:"ant-pro-form-login-main-left min-h-[520px] flex-center bg-[var(--bg-color-container)]"},[c("img",{src:ue,class:"h-5/6 w-5/6"})],-1)),it={class:"ant-pro-form-login-main-right px-5 w-[335px] flex-center flex-col relative z-11"},ct={class:"text-center py-6 text-2xl"},rt={class:"mb-24px flex-between"},lt={href:"/forget"},pt={class:"text-slate-500"},ut={class:"ant-pro-form-login-other"},dt=["data-theme"],_t=60,mt=k({__name:"login-sys",setup(n){const o=I(),a=he(),{layoutSetting:l}=be(a),d=E(),p=M(),s=ye({email:void 0,password:void 0,mobile:void 0,code:void 0,type:"account",remember:!0}),{t:r}=ge(),b=$(),y=$(!1),C=$(!1),L=j(),{pause:D}=xe(1e3,{controls:!0,immediate:!1,callback(g){g&&g===_t&&D()}});function J(){window.location.href="https://github.com/login/oauth/authorize?client_id=de35e0cc0e281d788019"}function Q(){window.location.href="https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2019111369130198&scope=auth_user&redirect_uri=https://6678.mibai.live/login?type=alipay"}function X(){window.location.href="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&include_granted_scopes=true&response_type=token&redirect_uri=https://alipay.mibai.live/login&state=google&client_id=1085614457190-vd0bt5slhitqelu6qhpb6444luc3rmi4.apps.googleusercontent.com"}async function S(){var g;y.value=!0;try{await((g=b.value)==null?void 0:g.validate());const u={email:s.email,password:s.password,type:"sys"},{data:x}=await q(u);p.value=x==null?void 0:x.token,o.success({message:"登录成功",description:"欢迎回来！",duration:3});const T=w("redirect","/");await d.push({path:T,replace:!0})}catch(u){u instanceof fe&&(C.value=!0),y.value=!1}}return A(async()=>{await Ve(300),N.init(e(L))}),ke(()=>{N.removeListeners()}),(g,u)=>{const x=de,T=_e,Y=le,W=Ie,R=Te,Z=We,ee=Be,te=Oe,U=Re,oe=Ue,se=Ge,G=Ne,ne=Me,ae=pe;return h(),P("div",De,[c("div",Je,[c("canvas",{ref_key:"bubbleCanvas",ref:L},null,512)]),c("div",Qe,[c("div",Xe,[c("div",Ye,[c("div",Ze,[et,tt,c("span",ot,v(e(r)("pages.layouts.userLayout.title")),1)]),c("div",st,[c("span",{class:"flex-center cursor-pointer text-16px",onClick:u[0]||(u[0]=m=>e(a).toggleTheme(e(l).theme==="dark"?"light":"dark"))},[e(l).theme==="light"?(h(),z(x,{key:0})):(h(),z(T,{key:1}))]),i(Y)])]),i(W,{"m-0":""}),c("div",nt,[at,i(W,{"m-0":"",type:"vertical",class:"ant-pro-login-divider min-h-[520px]"}),c("div",it,[c("div",ct,v(e(r)("pages.login.tips")),1),i(ne,{ref_key:"formRef",ref:b,model:e(s)},{default:_(()=>[i(Z,{activeKey:e(s).type,"onUpdate:activeKey":u[1]||(u[1]=m=>e(s).type=m),centered:""},{default:_(()=>[i(R,{key:"account",tab:e(r)("pages.login.accountLogin.tab")},null,8,["tab"]),i(R,{key:"mobile",disabled:"",tab:e(r)("pages.login.phoneLogin.tab")},null,8,["tab"])]),_:1},8,["activeKey"]),e(C)?(h(),z(ee,{key:0,"mb-24px":"",message:e(r)("pages.login.accountLogin.errorMessage"),type:"error","show-icon":""},null,8,["message"])):Ce("",!0),i(U,{name:"email",rules:[{required:!0,message:e(r)("pages.login.email.required")}]},{default:_(()=>[i(te,{value:e(s).email,"onUpdate:value":u[2]||(u[2]=m=>e(s).email=m),"allow-clear":"",autocomplete:"off",placeholder:e(r)("pages.login.email.placeholder"),size:"large",onPressEnter:S},{prefix:_(()=>[i(e(qe))]),_:1},8,["value","placeholder"])]),_:1},8,["rules"]),i(U,{name:"password",rules:[{required:!0,message:e(r)("pages.login.password.required")}]},{default:_(()=>[i(oe,{value:e(s).password,"onUpdate:value":u[3]||(u[3]=m=>e(s).password=m),"allow-clear":"",placeholder:e(r)("pages.login.password.placeholder"),size:"large",onPressEnter:S},{prefix:_(()=>[i(e(Ae))]),_:1},8,["value","placeholder"])]),_:1},8,["rules"]),c("div",rt,[i(se,{checked:e(s).remember,"onUpdate:checked":u[4]||(u[4]=m=>e(s).remember=m)},{default:_(()=>[B(v(e(r)("pages.login.rememberMe")),1)]),_:1},8,["checked"]),c("a",lt,v(e(r)("pages.login.forgotPassword")),1)]),i(G,{type:"primary",block:"",loading:e(y),size:"large",onClick:S},{default:_(()=>[B(v(e(r)("pages.login.submit")),1)]),_:1},8,["loading"]),i(G,{"mt-5":"",block:"",href:"/register"},{default:_(()=>[B(" 没有账号？去注册 ")]),_:1})]),_:1},8,["model"]),i(W,null,{default:_(()=>[c("span",pt,v(e(r)("pages.login.loginWith")),1)]),_:1}),c("div",ut,[i(e(Pe),{class:"icon",onClick:J}),i(e(Ee),{disabled:"",class:"icon",onClick:Q}),i(e(Se),{disabled:"",class:"icon",onClick:X})])])])])]),c("div",{"py-24px":"","px-50px":"",fixed:"","bottom-0":"","z-11":"","w-screen":"","data-theme":e(l).theme,"text-14px":""},[i(re,{copyright:e(l).copyright,icp:"鲁ICP备2023021414号-2"},{renderFooterLinks:_(()=>[i(ae)]),_:1},8,["copyright"])],8,dt)])}}}),V=ve(mt,[["__scopeId","data-v-84293cf4"]]),ht=k({__name:"login-github",setup(n){const o=M(),a=E(),l=I();async function d(){const{data:p}=await q({type:"github",code:w("code")});o.value=p==null?void 0:p.token,l.success({message:"登录成功",description:"欢迎回来！",duration:3});const s=w("redirect","/");a.push({path:s,replace:!0})}return A(()=>{d()}),(p,s)=>(h(),P("div"))}}),gt=k({__name:"login-alipay",setup(n){const o=M(),a=E(),l=I();async function d(){const{data:p}=await q({type:"alipay",code:w("auth_code")});o.value=p==null?void 0:p.token,l.success({message:"登录成功",description:"欢迎回来！",duration:3});const s=w("redirect","/");a.push({path:s,replace:!0})}return A(()=>{d()}),(p,s)=>(h(),P("div"))}}),ft=k({__name:"login-google",props:{hashParams:{type:Object,required:!0}},setup(n){const o=n,a=M(),l=E(),d=I();async function p(){const{data:s}=await q({type:"google",code:o.hashParams.access_token});a.value=s==null?void 0:s.token,d.success({message:"登录成功",description:"欢迎回来！",duration:3}),l.push({path:"/",replace:!0})}return A(()=>{p()}),(s,r)=>(h(),P("div"))}}),$t=k({__name:"login",setup(n){const o=$(),a={sys:V,github:ht,alipay:gt,google:ft},l=j(p());let d=w("code");d||(d=l.value.state??""),o.value=a[d]??V;function p(){const r=we.currentRoute.value.hash.substring(1).split("&"),b={};return r.forEach(y=>{const[C,L]=y.split("=");b[C]=L}),b}return(s,r)=>(h(),z(ze(e(o)),{"hash-params":e(l)},null,8,["hash-params"]))}});export{$t as default};
