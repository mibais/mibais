import{v as t,w as u}from"./index-BTljWS7e.js";function n(e){return t("/shop/snapshotDetail",{snapshotId:e},{customDev:!0})}function r(){return t("/shopCover/list",null,{customDev:!0})}function i(e,o){return t("/coupon/use",{coupon:e,shopId:o},{customDev:!0})}function p(e){return t("/shopCover/view",{coverId:e},{customDev:!0})}function a(){return t("/admin/shop/allList",null,{customDev:!0})}function c(e){return t("/admin/shop/list",{current:e.current,size:e.size,...e.param},{customDev:!0})}function v(e){return t("/admin/shop/coverList",e,{customDev:!0})}function h(e){return t("/admin/shop/delete",{shopId:e},{customDev:!0})}function m(e){return t("/admin/shop/deleteCover",{coverId:e},{customDev:!0})}function d(e){return u("/admin/shop/update",e,{customDev:!0})}function f(e){return u("/admin/shop/updateCover",e,{customDev:!0})}function l(e){return t("/admin/shop/view",{shopId:e},{customDev:!0})}function D(e){return t("/bought/buy",e,{customDev:!0})}export{c as a,v as b,m as c,h as d,a as e,d as f,l as g,D as h,i,r as j,n as s,f as u,p as v};
