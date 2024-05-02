import{_ as te}from"./index.vue_vue_type_script_setup_true_lang-b1YtuUjq.js";import{b8 as ae,d as K,aS as ne,b9 as oe,ba as se,ah as ie,ai as le,aj as ue,J as ce,aC as de,m as _e,au as pe,at as re,aR as fe}from"./antd-_WrWzocG.js";import{c as me,B as r,d as ge,e as ye,m as he,r as ve}from"./bought-vrt9wdjI.js";import{_ as ke}from"./detail.vue_vue_type_script_setup_true_lang-CeKEXNog.js";import{u as U,_ as we}from"./index-BTljWS7e.js";import{d as xe,f as l,r as Ce,o as Ie,a5 as u,ac as f,ad as e,k as o,u as t,H as $,G as _,af as m,ag as d,a3 as b,F as M,ak as Se,a8 as g,a6 as Be,a7 as $e}from"./vue-f4UZefmh.js";import"./context-SfEkZ2BR.js";import"./shop-BAvoTD83.js";const w=h=>(Be("data-v-3e7ac5dc"),h=h(),$e(),h),be=w(()=>g("span",{"text-20px":"","line-height-32px":"","mr-12px":"","mb-0":"",truncate:"","font-600":""},"购买记录",-1)),Me=w(()=>g("p",null,"购买记录自失效后保留7天。失效指退款、过期等无效状态。",-1)),Te=w(()=>g("p",null,"多次购买套餐不会覆盖，套餐处于未使用状态。未使用的套餐将在前一个套餐到期后自动使用。",-1)),ze=w(()=>g("p",null,[_("退款的款项只回到账户"),g("a",{href:"code"},"钱包"),_("中，无法原路退款到付款方")],-1)),De=xe({__name:"index",setup(h){const p=l(!1),T=l(0),v=l(!1),j=[{title:"商品名",dataIndex:"shopName",width:120},{title:"价格",dataIndex:"price",width:40},{title:"购买时间",dataIndex:"datetime",width:40},{title:"状态",dataIndex:"status",width:40},{title:"续费时间",dataIndex:"renewTime",width:80},{title:"操作",dataIndex:"action",width:120}],z=l([]),D=l(),R=l(-1),y=l(!1),Y=l(0),x=l(!0),c=Ce({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40"],showSizeChanger:!0,showQuickJumper:!0,showTotal:a=>`${a}条记录`,onChange(a,s){c.pageSize=s,c.current=a,k()}});async function F(a){await ge(a),U().success(a.isClose?"关闭成功 👋":"开启成功 🎉"),await k()}async function k(){if(!v.value){v.value=!0;try{const{data:a}=await me({size:c.pageSize,current:c.current});z.value=a.records,c.total=a.total,c.pageSize=a.size,c.current=a.current}finally{v.value=!1}}}async function J(a){y.value=!0;const{data:s}=await ye(a.id);Y.value=s,R.value=a.id,x.value=!1}async function Q(){await he(R.value),U().success("退款成功 🍾"),y.value=!1,await k()}async function E(a){p.value=!0,T.value=a.snapshotId}const C=l(["1"]);function G(){x.value=!0}async function H(){const{data:a}=await ve();D.value=a}return Ie(()=>{k(),H()}),(a,s)=>{const I=oe,L=se,A=ie,N=le,O=ue,S=ce,P=de,q=_e,W=pe,V=re,X=fe,Z=te;return u(),f(Z,null,{title:e(()=>[be]),content:e(()=>[o(O,{gutter:24},{default:e(()=>[o(N,{span:24},{default:e(()=>[o(A,{title:"提示"},{default:e(()=>[o(L,{activeKey:t(C),"onUpdate:activeKey":s[0]||(s[0]=n=>$(C)?C.value=n:null),bordered:!1,ghost:""},{expandIcon:e(n=>[o(t(ae),{rotate:n!=null&&n.isActive?90:0},null,8,["rotate"])]),default:e(()=>[o(I,{key:"1",header:"购买记录保留几天",class:"triangle"},{default:e(()=>[Me]),_:1}),o(I,{key:"2",header:"关于多次购买",class:"triangle"},{default:e(()=>[Te]),_:1}),o(I,{key:"3",header:"关于退款",class:"triangle"},{default:e(()=>[ze]),_:1})]),_:1},8,["activeKey"])]),_:1})]),_:1})]),_:1}),o(O,{gutter:24,"mt-5":""},{default:e(()=>[o(N,{span:24},{default:e(()=>[o(A,{title:"购买明细"},{default:e(()=>[o(W,{loading:t(v),columns:j,"data-source":t(z),pagination:t(c)},{bodyCell:e(({column:n,record:i})=>[n.dataIndex==="shopName"?(u(),f(S,{key:0,type:"link",onClick:B=>E(i)},{default:e(()=>[_(m(i.shopName),1)]),_:2},1032,["onClick"])):d("",!0),n.dataIndex==="status"?(u(),b(M,{key:1},[_(m(t(r)[i.status]),1)],64)):d("",!0),n.dataIndex==="datetime"?(u(),b(M,{key:2},[_(m(t(K)(i.datetime).format("YYYY-MM-DD")),1)],64)):d("",!0),n.dataIndex==="renewTime"?(u(),b(M,{key:3},[_(m(i.renewTime?t(K)(i.renewTime).format("YYYY-MM-DD"):"不自动续费"),1)],64)):d("",!0),n.dataIndex==="action"?(u(),f(q,{key:4},{default:e(()=>{var B;return[o(P,{title:`确定要${i.renewTime?"关闭":"开启"}？`,onConfirm:ee=>F({isClose:!!i.renewTime,boughtId:i.id})},{icon:e(()=>[o(t(ne))]),default:e(()=>[[t(r).using,t(r).no_use].includes(t(r)[i.status])?(u(),f(S,{key:0,type:"default"},{default:e(()=>[_(m(`${i.renewTime?"关闭":"开启"}自动续费`),1)]),_:2},1024)):d("",!0)]),_:2},1032,["title","onConfirm"]),(B=t(D))!=null&&B.allowRefund&&[t(r).using,t(r).no_use].includes(t(r)[i.status])?(u(),f(S,{key:0,danger:"",type:"primary",onClick:ee=>J(i)},{default:e(()=>[_(" 退款 ")]),_:2},1032,["onClick"])):d("",!0)]}),_:2},1024)):d("",!0)]),_:1},8,["loading","data-source","pagination"])]),_:1})]),_:1})]),_:1})]),default:e(()=>[o(V,{open:t(p),"onUpdate:open":s[1]||(s[1]=n=>$(p)?p.value=n:null),width:"800px",title:"详情",onCancel:s[2]||(s[2]=n=>p.value=!1),onOk:s[3]||(s[3]=n=>p.value=!1)},{default:e(()=>[t(p)?(u(),f(Se(ke),{key:0,"snapshot-id":t(T)},null,8,["snapshot-id"])):d("",!0)]),_:1},8,["open"]),o(V,{open:t(y),"onUpdate:open":s[4]||(s[4]=n=>$(y)?y.value=n:null),title:"确定要退款吗？","after-close":G,onOk:Q},{default:e(()=>[o(X,{loading:t(x),active:""},{default:e(()=>[g("p",null,m(`本次一共可退款 ${t(Y)}元，退款只到本站账户钱包，无法原路返回到支付方，请确认是否退款。`),1)]),_:1},8,["loading"])]),_:1},8,["open"])]),_:1})}}}),je=we(De,[["__scopeId","data-v-3e7ac5dc"]]);export{je as default};
