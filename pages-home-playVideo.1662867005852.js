(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-playVideo"],{"037e":function(e,t,n){"use strict";var i=n("f766"),a=n.n(i);a.a},"1cc9":function(e,t,n){"use strict";n("7a82");var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("ee01")),o={data:function(){return{videoUrl:"",id:null,beseUrl:null}},onLoad:function(e){this.id=e.id,this.beseUrl=this.$request.OSSimgUrl,this.getDetail()},methods:{getDetail:function(){var e=this;a.default.ipGoodsDetails(this.id).then((function(t){0==t.data.code&&(e.videoUrl=t.data.data.videoLink,console.log(e.Detail))}))},goback:function(){uni.navigateBack({delta:1})}}};t.default=o},"1fd6":function(e,t,n){"use strict";n.r(t);var i=n("edee"),a=n("ed30");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("037e");var r,u=n("f0c5"),d=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"52cda17c",null,!1,i["a"],r);t["default"]=d.exports},"9e97":function(e,t,n){var i=n("4bad");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */[data-v-52cda17c]:export{uni_bg_color:#1f1f21;uni_fbg_color:#222224;uni_minebg_color:#1f2020;item_theme_color:#fae3b2;item_six_color:#666;uni_unbg_color:#fff;Inactive_color:#d1d1d1;order_error_color:#999;order_success_color:#1890ff;order_warning_color:#e1e1e1;item_boder_color:#666;uni_card_color:#191919}.paly_video[data-v-52cda17c]{width:100%;height:90vh;display:flex;align-items:center}.paly_video .back[data-v-52cda17c]{position:absolute;top:%?16?%;left:%?16?%}.paly_video .video_item[data-v-52cda17c]{width:100%}',""]),e.exports=t},ed30:function(e,t,n){"use strict";n.r(t);var i=n("1cc9"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},edee:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"paly_video"},[i("v-uni-view",{staticClass:"back"},[i("v-uni-image",{staticStyle:{width:"60rpx",height:"60rpx"},attrs:{src:n("1002")},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goback.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"video_item"},[i("v-uni-video",{staticStyle:{width:"100%"},attrs:{src:e.videoUrl}})],1)],1)},o=[]},ee01:function(e,t,n){"use strict";n("7a82");var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("cb4b")),o={currentUserInfo:function(e){return a.default.post("/api/auth/currentUserInfo",e)},realPass:function(e){return a.default.post("/api/auth/realPass",e)},register:function(e){return a.default.post("/api/auth/register",e)},updateInfo:function(e){return a.default.post("/api/auth/updateInfo",e)},updatePassword:function(e){return a.default.post("/api/auth/updatePassword",e)},collect:function(e){return a.default.get("/api/mine/collect",e)},collectDetails:function(e,t){return a.default.get("/api/mine/collect/"+e,t)},userlist:function(e){return a.default.get("/api/user/page",e)},Transfer:function(e,t){return a.default.post("/api/mine/collect/"+e,t)},order:function(e){return a.default.get("/api/mine/order",e)},orderDetail:function(e){return a.default.get("/api/mine/order/"+e)},cancelOrder:function(e){return a.default.post("/api/mine/order/"+e+"/cancel")},getWaitPayNumber:function(e){return a.default.get("/api/mine/getWaitPayNumber")},exchangeGoods:function(e){return a.default.post("/api/mine/exchangeGoods/"+e)},blindboxList:function(e){return a.default.get("/api/mine/blindbox",e)},openBox:function(e){return a.default.post("/api/mine/openBlindbox/"+e)},getBinlindBoxNumber:function(){return a.default.get("/api/mine/getBinlindBoxNumber")},getCompositeList:function(e){return a.default.get("/api/ipGoods/getCompositeList",e)},compositeDetail:function(e){return a.default.get("/api/ipGoods/"+e)},getCompositeList1:function(e){return a.default.getlist("/api/ipGoods/getCompositeList",e)},composite:function(e){return a.default.post("/api/mine/composite",e)},ipGoodsDetails:function(e){return a.default.get("/api/ipGoods/"+e)},checkChannelUser:function(){return a.default.get("/api/auth/checkChannelUser")},channelPromote:function(e){return a.default.get("/api/mine/channel/promote",e)},channelTop:function(e){return a.default.get("/api/mine/channel/top",e)},channelSum:function(){return a.default.get("/api/mine/channelSum")},addressList:function(e){return a.default.get("/api/mine/shippingAddress/list",e)},shippingAddress:function(e){return a.default.post("/api/mine/shippingAddress",e)},addressDetail:function(e){return a.default.get("/api/mine/shippingAddress/"+e)},delAddress:function(e){return a.default.delete("/api/mine/shippingAddress/"+e)},exitaddress:function(e,t){return a.default.put("/api/mine/shippingAddress/"+e,t)},updateShippingInfo:function(e,t){return a.default.get("/api/mine/collect/"+e+"/updateShippingInfo/"+t)},likeList:function(e){return a.default.get("/api/mine/goodsLike/list",e)},goodsLike:function(e){return a.default.post("/api/mine/goodsLike?goodsId="+e)},delLike:function(e){return null==e?a.default.delete("/api/mine/goodsLike"):a.default.delete("/api/mine/goodsLike?goodsId="+e)},compositeGs:function(e){return a.default.get("/api/composite/"+e)},getPrivateKey:function(e){return a.default.get("/api/user/account",e)},myBenefit:function(e){return a.default.get("/api/mine/myBenefit",e)},getExchangeDetail:function(e){return a.default.get("/api/benefit/ftYearCard/".concat(e))},submitExchangeData:function(e){return a.default.post("/api/benefit/ftYearCard/create",e)},modifyExchangeData:function(e){return a.default.put("/api/benefit/ftYearCard/modify",e)}};t.default=o},f766:function(e,t,n){var i=n("9e97");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("037f5ce6",i,!0,{sourceMap:!1,shadowMode:!1})}}]);