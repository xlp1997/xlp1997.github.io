(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-Transfer"],{"271c":function(e,t,n){var i=n("4bad");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */[data-v-bdda21a2]:export{uni_bg_color:#1f1f21;uni_fbg_color:#222224;uni_minebg_color:#1f2020;item_theme_color:#fae3b2;item_six_color:#666;uni_unbg_color:#fff;Inactive_color:#d1d1d1;order_error_color:#999;order_success_color:#1890ff;order_warning_color:#e1e1e1;item_boder_color:#666;uni_card_color:#191919}.loading[data-v-bdda21a2]{position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.1)}.loading uni-image[data-v-bdda21a2]{width:%?110?%;height:%?110?%;-webkit-transform:translateY(-100%);transform:translateY(-100%)}',""]),e.exports=t},4259:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isShow?i("v-uni-view",{staticClass:"loading"},[i("v-uni-image",{attrs:{src:n("7735")}})],1):e._e()},o=[]},"54a1":function(e,t,n){"use strict";n.r(t);var i=n("4259"),a=n("96f7");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("d07f");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"bdda21a2",null,!1,i["a"],r);t["default"]=u.exports},5675:function(e,t,n){"use strict";var i=n("e479"),a=n.n(i);a.a},7735:function(e,t,n){e.exports=n.p+"static/img/puff.4884f92d.svg"},"82c0":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={loading:n("54a1").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"Transferbg"},[i("topNav",{attrs:{isShow:!0,pageName:"转赠"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goback()}}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-image",{staticClass:"img2",attrs:{src:e.OSSimgUrl+e.goods.showImageFilePath,mode:"scaleToFill"}}),i("v-uni-view",{staticClass:"word"},[i("v-uni-view",{staticClass:"fontsize32 u-line-2"},[e._v(e._s(e.goods.name))]),i("v-uni-view",{staticClass:"marT20 colorYellow u-line-1"},[e._v("#"+e._s(e.rs.sn)),i("v-uni-text",{staticClass:"tokenId"},[e._v("/"+e._s(e.goods.saleNumber))])],1),i("v-uni-view",{staticClass:"marT20 u-line-1 tokenId"},[e._v(e._s(e.rs.tokenId))])],1)],1),i("v-uni-view",{staticClass:"Receiver"},[i("v-uni-view",{staticClass:"flex1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.go("/pages/setting/selFriend?id="+e.rs.id)}}},[i("v-uni-view",{staticClass:"fontsize32 colorD1"},[e._v("接收人")]),i("v-uni-image",{staticClass:"img3",attrs:{src:n("d6dd"),mode:""}})],1),e.userinfo?i("v-uni-view",[e.userinfo.mobile?i("v-uni-view",{staticClass:"flex1"},[i("v-uni-view",{staticClass:"colorD1"},[e._v("手机号")]),i("v-uni-view",{staticClass:"colorMaintext"},[e._v(e._s(e.userinfo.mobile))])],1):e._e(),e.userinfo.nickname?i("v-uni-view",{staticClass:"flex1"},[i("v-uni-view",{staticClass:"colorD1"},[e._v("昵称")]),i("v-uni-view",{staticClass:"colorMaintext"},[e._v(e._s(e.userinfo.nickname))])],1):e._e(),e.userinfo.ethAccount?i("v-uni-view",{staticClass:"colorD1"},[e._v("用户地址")]):e._e(),i("v-uni-view",{staticClass:"address"},[e._v(e._s(e.userinfo.ethAccount))])],1):e._e()],1),e.userinfo.id?i("v-uni-view",{staticClass:"commonbts color111 bgYellow",staticStyle:{"margin-top":"64rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$u.throttle(e.Transfer,500)}}},[e._v("确定转赠")]):e._e(),i("loading",{ref:"loading"})],1)},o=[]},"923c":function(e,t,n){"use strict";n("7a82");var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("ee01")),o={data:function(){return{id:"",rs:"",goods:"",userinfo:"",OSSimgUrl:""}},onLoad:function(e){this.OSSimgUrl=this.$request.OSSimgUrl,this.id=e.id,this.collectDetails(),e.userinfo&&(this.userinfo=JSON.parse(e.userinfo))},methods:{collectDetails:function(){var e=this;this.$nextTick((function(){e.$refs.loading.show()})),a.default.collectDetails(this.id).then((function(t){e.$refs.loading.hide(),0==t.data.code&&(e.rs=t.data.data,e.goods=e.rs.goods)}))},goback:function(){this.go("/pages/setting/CollectionDetail?id="+this.id)},Transfer:function(){var e=this;this.$refs.loading.show();var t=this.id+"/donate/"+this.userinfo.id;a.default.Transfer(t).then((function(t){e.$refs.loading.hide(),0==t.data.code&&(e.open("/pages/tabBar/mine"),setTimeout((function(){e.showtoast("转赠成功","success")}),500))}))}}};t.default=o},"96f7":function(e,t,n){"use strict";n.r(t);var i=n("a343"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},a266:function(e,t,n){var i=n("4bad");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */[data-v-4f094f78]:export{uni_bg_color:#1f1f21;uni_fbg_color:#222224;uni_minebg_color:#1f2020;item_theme_color:#fae3b2;item_six_color:#666;uni_unbg_color:#fff;Inactive_color:#d1d1d1;order_error_color:#999;order_success_color:#1890ff;order_warning_color:#e1e1e1;item_boder_color:#666;uni_card_color:#191919}.Transferbg[data-v-4f094f78]{height:100vh;background:#161818}.Transferbg .top[data-v-4f094f78]{display:inline-block}.Transferbg .top .titleview[data-v-4f094f78]{padding:%?32?%;display:flex}.Transferbg .top .titleview .img1[data-v-4f094f78]{width:%?28?%;height:%?56?%}.Transferbg .top .titleview .v1[data-v-4f094f78]{font-size:%?32?%;margin:%?6?% 0 0 %?16?%}.Transferbg .info[data-v-4f094f78]{display:flex;justify-content:space-between;padding:%?48?% %?32?%;background-color:#222224}.Transferbg .info .img2[data-v-4f094f78]{border-radius:%?8?%;width:%?200?%;height:%?200?%}.Transferbg .info .word[data-v-4f094f78]{display:flex;flex-direction:column;width:%?438?%;color:#fff}.Transferbg .info .word .tokenId[data-v-4f094f78]{color:#666}.Transferbg .Receiver[data-v-4f094f78]{margin-top:%?32?%;padding:%?48?% %?32?%;background-color:#161818}.Transferbg .Receiver .flex1[data-v-4f094f78]{display:flex;justify-content:space-between;padding:%?20?% 0;border-bottom:%?5?% #1f2020 solid}.Transferbg .Receiver .flex1 .img3[data-v-4f094f78]{width:%?18?%;height:%?36?%}.Transferbg .Receiver .Underline[data-v-4f094f78]{border-radius:%?50?%;width:%?32?%;height:%?6?%;margin-bottom:%?12?%}.Transferbg .Receiver .address[data-v-4f094f78]{background-color:#2d2f2f;padding:%?32?%;border-radius:%?16?%;margin-top:%?32?%;color:#666}',""]),e.exports=t},a343:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{isShow:!1}},methods:{show:function(){this.isShow=!0},hide:function(){this.isShow=!1}}};t.default=i},aedd:function(e,t,n){"use strict";n.r(t);var i=n("923c"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},af31:function(e,t,n){var i=n("271c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("31406ab4",i,!0,{sourceMap:!1,shadowMode:!1})},b840:function(e,t,n){"use strict";n.r(t);var i=n("82c0"),a=n("aedd");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("5675");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"4f094f78",null,!1,i["a"],r);t["default"]=u.exports},d07f:function(e,t,n){"use strict";var i=n("af31"),a=n.n(i);a.a},d6dd:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwBAMAAAD0uNfXAAAAJ1BMVEUAAADZ2dnS0tLT09PR0dHV1dXR0dHS0tLT09PR0dHT09PT09PR0dEQZ3I/AAAADHRSTlMAFtWEexLOp21kS0bZbQFKAAAASklEQVQoz2PABIwNqHyhw6jSOmcMUKTPnDmMxgcrQKgfVQBTcApNwXF0Ppr602jmOaBKHxmB0gxhqNIMrDkQaYQCiDRCwQQG3AAAruNtkJyhGY0AAAAASUVORK5CYII="},e479:function(e,t,n){var i=n("a266");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("1fba5e4b",i,!0,{sourceMap:!1,shadowMode:!1})},ee01:function(e,t,n){"use strict";n("7a82");var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("cb4b")),o={currentUserInfo:function(e){return a.default.post("/api/auth/currentUserInfo",e)},realPass:function(e){return a.default.post("/api/auth/realPass",e)},register:function(e){return a.default.post("/api/auth/register",e)},updateInfo:function(e){return a.default.post("/api/auth/updateInfo",e)},updatePassword:function(e){return a.default.post("/api/auth/updatePassword",e)},collect:function(e){return a.default.get("/api/mine/collect",e)},collectDetails:function(e,t){return a.default.get("/api/mine/collect/"+e,t)},userlist:function(e){return a.default.get("/api/user/page",e)},Transfer:function(e,t){return a.default.post("/api/mine/collect/"+e,t)},order:function(e){return a.default.get("/api/mine/order",e)},orderDetail:function(e){return a.default.get("/api/mine/order/"+e)},cancelOrder:function(e){return a.default.post("/api/mine/order/"+e+"/cancel")},getWaitPayNumber:function(e){return a.default.get("/api/mine/getWaitPayNumber")},exchangeGoods:function(e){return a.default.post("/api/mine/exchangeGoods/"+e)},blindboxList:function(e){return a.default.get("/api/mine/blindbox",e)},openBox:function(e){return a.default.post("/api/mine/openBlindbox/"+e)},getBinlindBoxNumber:function(){return a.default.get("/api/mine/getBinlindBoxNumber")},getCompositeList:function(e){return a.default.get("/api/ipGoods/getCompositeList",e)},compositeDetail:function(e){return a.default.get("/api/ipGoods/"+e)},getCompositeList1:function(e){return a.default.getlist("/api/ipGoods/getCompositeList",e)},composite:function(e){return a.default.post("/api/mine/composite",e)},ipGoodsDetails:function(e){return a.default.get("/api/ipGoods/"+e)},checkChannelUser:function(){return a.default.get("/api/auth/checkChannelUser")},channelPromote:function(e){return a.default.get("/api/mine/channel/promote",e)},channelTop:function(e){return a.default.get("/api/mine/channel/top",e)},channelSum:function(){return a.default.get("/api/mine/channelSum")},addressList:function(e){return a.default.get("/api/mine/shippingAddress/list",e)},shippingAddress:function(e){return a.default.post("/api/mine/shippingAddress",e)},addressDetail:function(e){return a.default.get("/api/mine/shippingAddress/"+e)},delAddress:function(e){return a.default.delete("/api/mine/shippingAddress/"+e)},exitaddress:function(e,t){return a.default.put("/api/mine/shippingAddress/"+e,t)},updateShippingInfo:function(e,t){return a.default.get("/api/mine/collect/"+e+"/updateShippingInfo/"+t)},likeList:function(e){return a.default.get("/api/mine/goodsLike/list",e)},goodsLike:function(e){return a.default.post("/api/mine/goodsLike?goodsId="+e)},delLike:function(e){return null==e?a.default.delete("/api/mine/goodsLike"):a.default.delete("/api/mine/goodsLike?goodsId="+e)},compositeGs:function(e){return a.default.get("/api/composite/"+e)},getPrivateKey:function(e){return a.default.get("/api/user/account",e)},myBenefit:function(e){return a.default.get("/api/mine/myBenefit",e)},getExchangeDetail:function(e){return a.default.get("/api/benefit/ftYearCard/".concat(e))},submitExchangeData:function(e){return a.default.post("/api/benefit/ftYearCard/create",e)},modifyExchangeData:function(e){return a.default.put("/api/benefit/ftYearCard/modify",e)}};t.default=o}}]);