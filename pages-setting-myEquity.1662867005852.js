(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-myEquity"],{"0a13":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uGrid:n("1242").default,uGridItem:n("429e").default,loading:n("54a1").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"bg"},[n("topNav",{attrs:{isShow:!0,pageName:"我的权益"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gohome()}}}),n("v-uni-view",{staticClass:"equity"}),t.equityList.length>0?n("v-uni-view",{staticClass:"content"},[n("u-grid",{attrs:{border:!1,col:2}},t._l(t.equityList,(function(e,i){return n("u-grid-item",{key:i,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClickItem(e)}}},[n("v-uni-view",{staticClass:"card"},[n("v-uni-view",{staticClass:"equityName"},[t._v(t._s(e.benefitName))]),n("v-uni-view",{staticClass:"t1"},[t._v(t._s(e.benefitDescription))]),n("img",{staticClass:"benefitImage",attrs:{src:t.$request.OSSimgUrl+e.benefitImagePath}})],1)],1)})),1)],1):n("v-uni-view",[n("v-uni-view",{staticClass:"noEquity"},[n("v-uni-text",[t._v("暂无任何权益")])],1)],1),n("loading",{ref:"loading"})],1)},o=[]},"128f":function(t,e,n){"use strict";n.r(e);var i=n("9147"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"15e4":function(t,e,n){"use strict";n.r(e);var i=n("0a13"),a=n("128f");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("75e6");var r,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"02c53f69",null,!1,i["a"],r);e["default"]=c.exports},4649:function(t,e,n){t.exports=n.p+"static/img/noEquity.210f3a31.png"},"75e6":function(t,e,n){"use strict";var i=n("9590"),a=n.n(i);a.a},"84c6":function(t,e,n){var i=n("4bad"),a=n("ffbf"),o=n("eac2"),r=n("4649"),u=n("c4f6");e=i(!1);var c=a(o),s=a(r),d=a(u);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */[data-v-02c53f69]:export{uni_bg_color:#1f1f21;uni_fbg_color:#222224;uni_minebg_color:#1f2020;item_theme_color:#fae3b2;item_six_color:#666;uni_unbg_color:#fff;Inactive_color:#d1d1d1;order_error_color:#999;order_success_color:#1890ff;order_warning_color:#e1e1e1;item_boder_color:#666;uni_card_color:#191919}.bg .equity[data-v-02c53f69]{background:url('+c+") no-repeat 50%;background-size:100% 100%;width:100%;height:100vh}.bg .noEquity[data-v-02c53f69]{width:%?444?%;height:%?404?%;position:absolute;top:%?600?%;background:url("+s+") no-repeat 50%;background-size:100% 100%;margin-left:%?150?%;text-align:center;color:#999;line-height:%?900?%}.bg .content[data-v-02c53f69]{position:absolute;top:%?530?%;width:100%}.bg .content .card[data-v-02c53f69]{background:url("+d+") no-repeat 50%;background-size:125% 125%;width:calc(100% - %?25?%);height:%?200?%;border-radius:%?8?%;margin-top:%?35?%;overflow:hidden;position:relative}.bg .content .card .benefitImage[data-v-02c53f69]{width:%?110?%;height:%?110?%;border-radius:50%;position:absolute;bottom:0;right:0;object-fit:cover;object-position:right}.bg .content .card .equityName[data-v-02c53f69]{font-size:%?30?%;font-family:Source Han Sans CN;font-weight:700;color:#382410;line-height:%?72?%;margin-left:%?20?%}.bg .content .card .t1[data-v-02c53f69]{font-size:%?20?%;font-family:Source Han Sans CN;font-weight:100;color:#c4a971;margin:0 %?111?% 0 %?12?%}.bg .content .card .equityNumber[data-v-02c53f69]{width:%?80?%;background:#2c2312;color:#fff;border-radius:%?30?%;margin-left:%?20?%;padding-left:%?10?%;padding-right:%?10?%;opacity:.8;text-align:center;position:absolute;top:%?36?%;right:%?12?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""]),t.exports=e},9147:function(t,e,n){"use strict";n("7a82");var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("ee01")),o={data:function(){return{action:"",imgurl:"",equityList:[]}},onLoad:function(){this.getmyBenefit()},methods:{handleClickItem:function(t){"FT_TRAVEL_YEAR_CARD"===t.benefitType&&uni.navigateTo({url:"/pages/setting/exchange/exchange?id="+t.collectId})},getmyBenefit:function(){var t=this;a.default.myBenefit().then((function(e){t.equityList=e.data.data,console.log("this.equityList",t.equityList)}))},gohome:function(){uni.switchTab({url:"../tabBar/mine"})}}};e.default=o},9590:function(t,e,n){var i=n("84c6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2608965b",i,!0,{sourceMap:!1,shadowMode:!1})},c4f6:function(t,e,n){t.exports=n.p+"static/img/equityCardBg.9fc799f8.png"},eac2:function(t,e,n){t.exports=n.p+"static/img/equityBG.667e540c.png"},ee01:function(t,e,n){"use strict";n("7a82");var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("cb4b")),o={currentUserInfo:function(t){return a.default.post("/api/auth/currentUserInfo",t)},realPass:function(t){return a.default.post("/api/auth/realPass",t)},register:function(t){return a.default.post("/api/auth/register",t)},updateInfo:function(t){return a.default.post("/api/auth/updateInfo",t)},updatePassword:function(t){return a.default.post("/api/auth/updatePassword",t)},collect:function(t){return a.default.get("/api/mine/collect",t)},collectDetails:function(t,e){return a.default.get("/api/mine/collect/"+t,e)},userlist:function(t){return a.default.get("/api/user/page",t)},Transfer:function(t,e){return a.default.post("/api/mine/collect/"+t,e)},order:function(t){return a.default.get("/api/mine/order",t)},orderDetail:function(t){return a.default.get("/api/mine/order/"+t)},cancelOrder:function(t){return a.default.post("/api/mine/order/"+t+"/cancel")},getWaitPayNumber:function(t){return a.default.get("/api/mine/getWaitPayNumber")},exchangeGoods:function(t){return a.default.post("/api/mine/exchangeGoods/"+t)},blindboxList:function(t){return a.default.get("/api/mine/blindbox",t)},openBox:function(t){return a.default.post("/api/mine/openBlindbox/"+t)},getBinlindBoxNumber:function(){return a.default.get("/api/mine/getBinlindBoxNumber")},getCompositeList:function(t){return a.default.get("/api/ipGoods/getCompositeList",t)},compositeDetail:function(t){return a.default.get("/api/ipGoods/"+t)},getCompositeList1:function(t){return a.default.getlist("/api/ipGoods/getCompositeList",t)},composite:function(t){return a.default.post("/api/mine/composite",t)},ipGoodsDetails:function(t){return a.default.get("/api/ipGoods/"+t)},checkChannelUser:function(){return a.default.get("/api/auth/checkChannelUser")},channelPromote:function(t){return a.default.get("/api/mine/channel/promote",t)},channelTop:function(t){return a.default.get("/api/mine/channel/top",t)},channelSum:function(){return a.default.get("/api/mine/channelSum")},addressList:function(t){return a.default.get("/api/mine/shippingAddress/list",t)},shippingAddress:function(t){return a.default.post("/api/mine/shippingAddress",t)},addressDetail:function(t){return a.default.get("/api/mine/shippingAddress/"+t)},delAddress:function(t){return a.default.delete("/api/mine/shippingAddress/"+t)},exitaddress:function(t,e){return a.default.put("/api/mine/shippingAddress/"+t,e)},updateShippingInfo:function(t,e){return a.default.get("/api/mine/collect/"+t+"/updateShippingInfo/"+e)},likeList:function(t){return a.default.get("/api/mine/goodsLike/list",t)},goodsLike:function(t){return a.default.post("/api/mine/goodsLike?goodsId="+t)},delLike:function(t){return null==t?a.default.delete("/api/mine/goodsLike"):a.default.delete("/api/mine/goodsLike?goodsId="+t)},compositeGs:function(t){return a.default.get("/api/composite/"+t)},getPrivateKey:function(t){return a.default.get("/api/user/account",t)},myBenefit:function(t){return a.default.get("/api/mine/myBenefit",t)},getExchangeDetail:function(t){return a.default.get("/api/benefit/ftYearCard/".concat(t))},submitExchangeData:function(t){return a.default.post("/api/benefit/ftYearCard/create",t)},modifyExchangeData:function(t){return a.default.put("/api/benefit/ftYearCard/modify",t)}};e.default=o}}]);