import{_ as ve}from"./index.vue_vue_type_script_setup_true_lang-yOcCdEi3.js";import{aP as ke,d as j,aQ as xe,K as ye,N as he,aa as Ce,av as be,aJ as we,aK as Ie,ab as $e,aL as De,S as Le,m as ze,F as Ee,a9 as Ne,Q as Ae,aR as Ye,D as Re,ag as Se,a0 as Ue,aw as Be,an as Me,s as Oe}from"./antd-BeZGkD-C.js";import{u as Te,_ as Ve,d as Fe}from"./edit.vue_vue_type_script_setup_true_lang-CJjS5CBC.js";import{_ as Qe}from"./charge.vue_vue_type_script_setup_true_lang-CaYtRv32.js";import{_ as je}from"./bought.vue_vue_type_script_setup_true_lang-Cu4v2lRG.js";import{u as He}from"./index-BJHbT1uw.js";import{d as Je,f as p,s as H,c as T,r as J,w as Ke,o as Pe,a5 as i,ac as _,ad as e,k as t,u as a,a3 as N,F as A,al as Ge,G as u,af as f,H as qe,ag as d,ak as K,a8 as We}from"./vue-CP9fVXMC.js";import"./context-D1aFuiR2.js";import"./code-BWPRPLiL.js";import"./refund.vue_vue_type_script_setup_true_lang-DHjeiYsr.js";import"./auto_renew.vue_vue_type_script_setup_true_lang-twVQmpsG.js";var m=(g=>(g.normal="正常",g.expire="到期",g.excess="超额",g.paid="付费",g.forbidden="禁用",g.delete="注销",g))(m||{});const Xe=We("span",{"text-20px":"","line-height-32px":"","mr-12px":"","mb-0":"",truncate:"","font-600":""},"用户管理",-1),dt=Je({__name:"index",setup(g){const $=p(!1),Y=p(!1),R=H([{title:"邮箱",dataIndex:"email",width:120,ellipsis:!0},{title:"用户名",dataIndex:"userName"},{title:"余额",dataIndex:"money"},{title:"剩余流量",dataIndex:"leftTraffic"},{title:"等级",dataIndex:"grade"},{title:"等级到期",dataIndex:"classExpire"},{title:"注册时间",dataIndex:"regDate"},{title:"状态",dataIndex:"status"},{title:"操作",dataIndex:"action",fixed:"right",width:350}]),v=T(()=>R.value.map(n=>n.dataIndex)),S=p(),c=J({indeterminate:!1,checkAll:!0,checkList:v.value}),P=T(()=>R.value.map(n=>n.dataIndex==="action"?{label:n.title,value:n.dataIndex,disabled:!0}:{label:n.title,value:n.dataIndex})),G=T(()=>{const n={};for(const l in m)n[l]=m[l];return n}),V=p(),k=J({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40"],showSizeChanger:!0,showQuickJumper:!0,showTotal:n=>`${n}条记录`,onChange(n,l){k.pageSize=l,k.current=n,w()}}),r=p({}),h=p(!1);async function w(){if(!$.value){$.value=!0;try{const{data:n}=await Te({size:k.pageSize,current:k.current,param:r.value});V.value=n.records,k.total=n.total,k.pageSize=n.size,k.current=n.current}finally{$.value=!1}}}function D(n){return R.value.filter(l=>n.includes(l.dataIndex))}const I=p(D(v.value));function q(n){Object.assign(c,{checkList:n.target.checked?v.value:[],indeterminate:!0}),I.value=n.target.checked?D(v.value):I.value.filter(l=>l.dataIndex==="action")}Ke(()=>c.checkList,n=>{c.indeterminate=!!n.length&&n.length<v.value.length,c.checkAll=n.length===v.value.length});function W(){c.checkList=v.value,I.value=D(v.value)}const X=p();function Z(){w()}function ee(n){I.value=D(n)}function te(n){S.value=n.id,h.value=!0}async function ae(n){await Fe(n),He().success("用户删除成功"),await w()}function ne(){S.value=void 0,h.value=!0}function le(n){h.value=!1,n&&w()}const L=p(!1),z=H(),U=p();return Pe(()=>{w()}),(n,l)=>{const F=ye,C=he,x=Ce,oe=be,se=we,ue=Ie,E=$e,Q=De,y=Le,B=ze,ie=Ee,M=Ne,re=Ae,de=Ye,_e=Re,ce=Se,b=Ue,pe=Be,fe=Me,me=Oe,ge=ve;return i(),_(ge,null,{title:e(()=>[Xe]),default:e(()=>[t(M,{"mb-4":""},{default:e(()=>[t(ie,{modal:a(r)},{default:e(()=>[t(E,{gutter:16},{default:e(()=>[t(x,{span:6},{default:e(()=>[t(C,{label:"用户名",name:"userName"},{default:e(()=>[t(F,{value:a(r).userName,"onUpdate:value":l[0]||(l[0]=o=>a(r).userName=o)},null,8,["value"])]),_:1})]),_:1}),t(x,{span:6},{default:e(()=>[t(C,{label:"邮箱",name:"email"},{default:e(()=>[t(F,{value:a(r).email,"onUpdate:value":l[1]||(l[1]=o=>a(r).email=o)},null,8,["value"])]),_:1})]),_:1}),t(x,{span:4},{default:e(()=>[t(C,{label:"用户等级",name:"grade"},{default:e(()=>[t(oe,{value:a(r).grade,"onUpdate:value":l[2]||(l[2]=o=>a(r).grade=o),min:0},null,8,["value"])]),_:1})]),_:1}),t(x,{span:4},{default:e(()=>[t(C,{label:"状态",name:"status"},{default:e(()=>[t(ue,{value:a(r).status,"onUpdate:value":l[3]||(l[3]=o=>a(r).status=o),"allow-clear":!0},{default:e(()=>[(i(!0),N(A,null,Ge(a(G),(o,s)=>(i(),_(se,{key:s,value:s},{default:e(()=>[u(f(o),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),t(E,{gutter:16},{default:e(()=>[t(x,{span:6},{default:e(()=>[t(C,{label:"等级到期"},{default:e(()=>[t(Q,{allowEmpty:[!0,!0],placeholder:["开始日期","结束日期"],onChange:l[4]||(l[4]=(o,s)=>{a(r).startClassExpire=s[0],a(r).endClassExpire=s[1]})})]),_:1})]),_:1}),t(x,{span:6},{default:e(()=>[t(C,{label:"注册时间"},{default:e(()=>[t(Q,{allowEmpty:[!0,!0],placeholder:["开始日期","结束日期"],onChange:l[5]||(l[5]=(o,s)=>{a(r).startRegTime=s[0],a(r).endRegTime=s[1]})})]),_:1})]),_:1})]),_:1}),t(E,{span:24,style:{"text-align":"right"}},{default:e(()=>[t(x,{span:24},{default:e(()=>[t(B,{flex:"","justify-end":"","w-full":""},{default:e(()=>[t(y,{loading:a(X),type:"primary",onClick:Z},{default:e(()=>[u(" 查询 ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modal"])]),_:1}),t(E,{gutter:24},{default:e(()=>[t(x,{span:24},{default:e(()=>[t(M,{title:"用户列表"},{extra:e(()=>[t(B,{size:24},{default:e(()=>[t(y,{type:"default",onClick:ne},{default:e(()=>[u(" 添加用户 ")]),_:1}),t(ce,{title:"列设置"},{default:e(()=>[t(_e,{open:a(Y),"onUpdate:open":l[8]||(l[8]=o=>qe(Y)?Y.value=o:null),trigger:"click"},{overlay:e(()=>[t(M,null,{title:e(()=>[t(re,{checked:a(c).checkAll,"onUpdate:checked":l[6]||(l[6]=o=>a(c).checkAll=o),indeterminate:a(c).indeterminate,onChange:q},{default:e(()=>[u(" 列选择 ")]),_:1},8,["checked","indeterminate"])]),extra:e(()=>[t(y,{type:"link",onClick:W},{default:e(()=>[u(" 重置 ")]),_:1})]),default:e(()=>[t(de,{value:a(c).checkList,"onUpdate:value":l[7]||(l[7]=o=>a(c).checkList=o),options:a(P),style:{display:"flex","flex-direction":"column"},onChange:ee},null,8,["value","options"])]),_:1})]),default:e(()=>[t(a(ke))]),_:1},8,["open"])]),_:1})]),_:1})]),default:e(()=>[t(fe,{loading:a($),columns:a(I),"data-source":a(V),pagination:a(k),scroll:{x:1500}},{bodyCell:e(({column:o,record:s})=>[o.dataIndex==="status"?(i(),N(A,{key:0},[s.status==="forbidden"?(i(),_(b,{key:0,color:"purple"},{default:e(()=>[u(f(a(m).forbidden),1)]),_:1})):d("",!0),s.status==="excess"?(i(),_(b,{key:1,color:"orange"},{default:e(()=>[u(f(a(m).excess),1)]),_:1})):d("",!0),s.status==="normal"?(i(),_(b,{key:2,color:"cyan"},{default:e(()=>[u(f(a(m).normal),1)]),_:1})):d("",!0),s.status==="paid"?(i(),_(b,{key:3,color:"green"},{default:e(()=>[u(f(a(m).paid),1)]),_:1})):d("",!0),s.status==="expire"?(i(),_(b,{key:4,color:"blue"},{default:e(()=>[u(f(a(m).expire),1)]),_:1})):d("",!0),s.status==="delete"?(i(),_(b,{key:5,color:"red"},{default:e(()=>[u(f(a(m).delete),1)]),_:1})):d("",!0)],64)):d("",!0),o.dataIndex==="classExpire"?(i(),N(A,{key:1},[u(f(a(j)(s.classExpire).format("YYYY-MM-DD")),1)],64)):d("",!0),o.dataIndex==="regDate"?(i(),N(A,{key:2},[u(f(a(j)(s.regDate).format("YYYY-MM-DD")),1)],64)):d("",!0),o.dataIndex==="action"?(i(),_(B,{key:3},{default:e(()=>[t(y,{type:"default",onClick:O=>te(s)},{default:e(()=>[u(" 修改 ")]),_:2},1032,["onClick"]),t(y,{type:"default",onClick:O=>{U.value=s,L.value=!0,z.value=je}},{default:e(()=>[u(" 购买记录 ")]),_:2},1032,["onClick"]),t(y,{type:"default",onClick:O=>{U.value=s,L.value=!0,z.value=Qe}},{default:e(()=>[u(" 充值记录 ")]),_:2},1032,["onClick"]),t(pe,{title:"确定要删除用户吗？",onConfirm:O=>ae(s.id)},{icon:e(()=>[t(a(xe))]),default:e(()=>[t(y,{danger:"",type:"primary"},{default:e(()=>[u(" 删除 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:2},1024)):d("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1})]),_:1})]),_:1}),t(me,{title:"编辑用户",width:720,visible:a(h),"body-style":{paddingBottom:"80px"},onClose:l[9]||(l[9]=o=>h.value=!1)},{default:e(()=>[a(h)?(i(),_(K(Ve),{key:0,"user-id":a(S),onHandleClose:le},null,40,["user-id"])):d("",!0)]),_:1},8,["visible"]),a(L)?(i(),_(K(a(z)),{key:0,user:a(U),onClose:l[10]||(l[10]=o=>{L.value=!1,z.value=void 0})},null,40,["user"])):d("",!0)]),_:1})}}});export{dt as default};
