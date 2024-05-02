import{f as G,g as D}from"./shop-BAvoTD83.js";import{u as q}from"./index-BTljWS7e.js";import{$ as L,a0 as N,ai as V,S as A,x as M,aB as $,aj as z,V as T,aU as j,J as E,m as F}from"./antd-_WrWzocG.js";import{d as J,f as b,o as O,a5 as R,a3 as H,k as e,ad as t,u as o,G as r,a8 as K,af as P}from"./vue-f4UZefmh.js";const Q={style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},h=J({__name:"edit",props:{shopId:{type:Number,default:0}},emits:["handleClose"],setup(f,{emit:x}){const _=f,y=x,m=b(!0),n=b({id:void 0,name:"",price:0,nodeGroup:0,autoResetBandwidth:0,status:1,content:{grade:0,resetDay:30,speedLimit:0,connector:0}});function c(d){y("handleClose",d)}async function w(){await G(n.value);const d=q();_.shopId&&d.success("修改成功"),d.success("添加成功"),c(1)}async function U(){const{data:d}=await D(_.shopId);n.value=d,m.value=!1}return O(()=>{_.shopId&&U(),m.value=!1}),(d,a)=>{const S=L,u=N,s=V,v=A,B=M,p=$,i=z,C=T,I=j,g=E,k=F;return R(),H("div",null,[e(I,{spinning:o(m)},{default:t(()=>[e(C,{model:o(n),layout:"vertical"},{default:t(()=>[e(i,{gutter:16},{default:t(()=>[e(s,{span:8},{default:t(()=>[e(u,{label:"商品名",name:"name",rules:[{required:!0,message:"商品名不能为空"}]},{default:t(()=>[e(S,{value:o(n).name,"onUpdate:value":a[0]||(a[0]=l=>o(n).name=l)},null,8,["value"])]),_:1})]),_:1}),e(s,{span:8},{default:t(()=>[e(u,{label:"状态",name:"status",rules:[{required:!0,message:"请选择"}]},{default:t(()=>[e(B,{value:o(n).status,"onUpdate:value":a[1]||(a[1]=l=>o(n).status=l)},{default:t(()=>[e(v,{value:1},{default:t(()=>[r(" 上架 ")]),_:1}),e(v,{value:0},{default:t(()=>[r(" 下架 ")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),e(s,{span:8},{default:t(()=>[e(u,{label:"价格",name:"price",rule:[{require:!0,message:"价格不能为空"}]},{default:t(()=>[e(p,{value:o(n).price,"onUpdate:value":a[2]||(a[2]=l=>o(n).price=l),min:0},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{gutter:16},{default:t(()=>[e(s,{span:8},{default:t(()=>[e(u,{label:"节点分组",name:"nodeGroup",rule:[{require:!0,message:"节点分组不能为空"}]},{default:t(()=>[e(p,{value:o(n).nodeGroup,"onUpdate:value":a[3]||(a[3]=l=>o(n).nodeGroup=l),"default-value":0},null,8,["value"])]),_:1})]),_:1}),e(s,{span:8},{default:t(()=>[e(u,{label:"等级",name:"grade"},{default:t(()=>[e(p,{value:o(n).content.grade,"onUpdate:value":a[4]||(a[4]=l=>o(n).content.grade=l)},null,8,["value"])]),_:1})]),_:1}),e(s,{span:8},{default:t(()=>[e(u,{label:"流量(GB)",name:"bandwidth"},{default:t(()=>[e(p,{value:o(n).content.bandwidth,"onUpdate:value":a[5]||(a[5]=l=>o(n).content.bandwidth=l),min:0},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{gutter:16},{default:t(()=>[e(s,{span:8},{default:t(()=>[e(u,{label:"限速(Mb)",name:"speedLimit"},{default:t(()=>[e(p,{value:o(n).content.speedLimit,"onUpdate:value":a[6]||(a[6]=l=>o(n).content.speedLimit=l)},null,8,["value"])]),_:1})]),_:1}),e(s,{span:8},{default:t(()=>[e(u,{label:"设备数",name:"connector"},{default:t(()=>[e(p,{value:o(n).content.connector,"onUpdate:value":a[7]||(a[7]=l=>o(n).content.connector=l)},null,8,["value"])]),_:1})]),_:1}),e(s,{span:8},{default:t(()=>[e(u,{label:"有效天数",name:"expire"},{default:t(()=>[e(p,{value:o(n).content.expire,"onUpdate:value":a[8]||(a[8]=l=>o(n).content.expire=l)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{gutter:16},{default:t(()=>[e(s,{span:8},{default:t(()=>[e(u,{label:"几天重置一次流量",name:"resetDay"},{default:t(()=>[e(p,{value:o(n).content.resetDay,"onUpdate:value":a[9]||(a[9]=l=>o(n).content.resetDay=l)},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["spinning"]),K("div",Q,[e(k,{size:"middle"},{default:t(()=>[e(g,{onClick:a[10]||(a[10]=l=>c(0))},{default:t(()=>[r(" 取消 ")]),_:1}),e(g,{type:"primary",onClick:w},{default:t(()=>[r(P(f.shopId?"保存":"添加"),1)]),_:1})]),_:1})])])}}});export{h as _};
