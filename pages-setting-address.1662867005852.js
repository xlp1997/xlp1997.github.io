(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-address"],{"0d8a":function(e,t,n){"use strict";n.r(t);var i=n("a6b3"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"2f7a":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uInput:n("3922").default,uIcon:n("ece6").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"nickname"},[i("topNav",{attrs:{isShow:!0,pageName:"用户地址"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goback()}}}),i("v-uni-view",{staticClass:"ads_card"},[i("v-uni-view",{staticClass:"item_1"},[i("v-uni-view",{staticClass:"name"},[e._v("公钥地址")]),i("v-uni-view",{staticClass:"content_1"},[i("v-uni-view",{staticClass:"address"},[e._v(e._s(e.address))]),i("v-uni-view",{staticClass:"copy",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clipboardToast(e.address)}}},[i("v-uni-image",{staticStyle:{width:"24rpx",height:"24rpx"},attrs:{src:n("c58a")}})],1)],1)],1),i("v-uni-view",{staticClass:"item_1"},[i("v-uni-view",{staticClass:"name"},[e._v("私钥地址")]),e.Plaintext?e._e():i("v-uni-view",{staticClass:"content_1"},[i("v-uni-view",{staticClass:"address2"},[i("v-uni-view",{staticClass:"flex",staticStyle:{"align-items":"center"}},[i("v-uni-image",{staticStyle:{width:"24rpx",height:"24rpx"},attrs:{src:n("b195")}}),i("u-input",{staticClass:"input_class",attrs:{fontSize:e.fontSize,password:!e.pwdStatus,height:"100",color:e.inputColor,border:"false",placeholderClass:"placeholderclass",clearable:!0,placeholder:"查看私钥需输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}},[i("template",{slot:"suffix"},[i("u-icon",{attrs:{color:e.pwdStatus?e.themeColor:"",name:e.pwdStatus?"eye-fill":"eye"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.lookPwd.apply(void 0,arguments)}}})],1)],2)],1)],1),i("v-uni-view",{staticClass:"copy",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getKey.apply(void 0,arguments)}}},[i("v-uni-view",[e._v("确 定")])],1)],1),e.Plaintext?i("v-uni-view",{staticClass:"content_1"},[i("v-uni-view",{staticClass:"address"},[e._v(e._s(e.privateKey))]),i("v-uni-view",{staticClass:"copy",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clipboardToast(e.privateKey)}}},[i("v-uni-image",{staticStyle:{width:"24rpx",height:"24rpx"},attrs:{src:n("c58a")}})],1)],1):e._e()],1)],1)],1)},o=[]},"89f3":function(e,t,n){var i=n("fc68");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("74b80efa",i,!0,{sourceMap:!1,shadowMode:!1})},"9ad5":function(e,t,n){"use strict";var i=n("e7a4"),a=n.n(i);a.a},a6b3:function(e,t,n){"use strict";n("7a82");var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("89f3"),o=i(n("ee01")),r={data:function(){return{address:"",inputColor:a.uni_unbg_color,pwdStatus:!1,password:"",privateKey:"",themeColor:a.item_theme_color,fontSize:uni.upx2px(24),Plaintext:!1}},onLoad:function(e){this.address=e.ethAccount},methods:{goback:function(){uni.redirectTo({url:"./index"})},getKey:function(){var e=this;o.default.getPrivateKey({password:this.$w_md5.hex_md5_32(this.$request.md5Key+this.password)}).then((function(t){0==t.data.code&&(e.privateKey=t.data.data.privateKey,e.Plaintext=!0)}))},lookPwd:function(){1==this.pwdStatus?this.pwdStatus=!1:this.pwdStatus=!0}}};t.default=r},b195:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAUVBMVEUAAACZmZmampqZmZmZmZmZmZmYmJiZmZmZmZmZmZmZmZmUlJSampqampqZmZmZmZmZmZmZmZmZmZmampqZmZmampqdnZ2WlpaampqZmZmZmZnW455pAAAAGnRSTlMA8MBzbR1H9tTMtw55Zl5LFt/eq4d+OTgwBbcQiYYAAABuSURBVCjP5ZDLEkRAEAT1eMzMYtn1zv//UAzCIByd5KUrKi8dFWyUtdGi8iE4UQgOGx/7TkMVZhZMehAWaeebQeP3PeRL+vDzxRdSL+1EsKYE4gdE8hcN4liSKtcPL0ROKC6E7xC3kxTCCTMNPAJg1x4T2kJonQAAAABJRU5ErkJggg=="},bbe9:function(e,t,n){var i=n("4bad");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */[data-v-2e3f65bc]:export{uni_bg_color:#1f1f21;uni_fbg_color:#222224;uni_minebg_color:#1f2020;item_theme_color:#fae3b2;item_six_color:#666;uni_unbg_color:#fff;Inactive_color:#d1d1d1;order_error_color:#999;order_success_color:#1890ff;order_warning_color:#e1e1e1;item_boder_color:#666;uni_card_color:#191919}.nickname[data-v-2e3f65bc]{overflow:hidden;height:100vh;background:#1f1f21}.nickname .title[data-v-2e3f65bc]{margin:%?40?% %?32?%;display:flex;height:%?60?%;font-size:%?36?%;font-weight:700;color:#d1d1d1;line-height:%?60?%}.nickname .ads_card[data-v-2e3f65bc]{padding:0 %?48?%;background:#222224}.nickname .ads_card .item_1[data-v-2e3f65bc]{padding:%?48?% 0}.nickname .ads_card .item_1 .name[data-v-2e3f65bc]{font-size:%?28?%;font-weight:700;margin-bottom:%?32?%;color:#999}.nickname .ads_card .item_1 .content_1[data-v-2e3f65bc]{display:flex;justify-content:space-between;flex-flow:wrap;background:#2f2f2f;border-radius:%?32?%}.nickname .ads_card .item_1 .content_1 .address[data-v-2e3f65bc]{font-size:%?24?%;line-height:%?32?%;padding-right:%?38?%;position:relative;width:%?542?%;align-items:center;padding:%?30?%}.nickname .ads_card .item_1 .content_1 .address .openKey[data-v-2e3f65bc]{color:#fae3b2}.nickname .ads_card .item_1 .content_1 .address2[data-v-2e3f65bc]{font-size:%?24?%;line-height:%?32?%;position:relative;width:%?542?%;align-items:center;padding:%?11?% %?30?%}.nickname .ads_card .item_1 .content_1 .address2 .openKey[data-v-2e3f65bc]{color:#fae3b2}.nickname .ads_card .item_1 .content_1 .copy[data-v-2e3f65bc]{font-size:%?24?%;color:#fae3b2;margin-top:%?30?%;position:absolute;right:%?80?%}.nickname .content[data-v-2e3f65bc]{padding:0 %?48?%}.nickname .address_text[data-v-2e3f65bc]{min-height:%?82?%;background:#222224;border-radius:%?16?%;padding:%?32?%}.nickname .address_text .text[data-v-2e3f65bc]{width:100%;word-wrap:break-word;font-size:%?28?%;font-weight:400;color:#999}.nickname .text1[data-v-2e3f65bc]{padding:%?54?% %?48?%;font-size:%?28?%;font-weight:400;color:#d1d1d1;line-height:%?36?%}.nickname .okBtn[data-v-2e3f65bc]{height:%?90?%;background:#fae3b2;border-radius:%?8?%;margin:0 %?60?%;font-size:%?32?%;font-weight:700;color:#1f1f21;text-align:center;line-height:%?90?%}',""]),e.exports=t},c432:function(e,t,n){"use strict";n.r(t);var i=n("2f7a"),a=n("0d8a");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("9ad5");var r,s=n("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2e3f65bc",null,!1,i["a"],r);t["default"]=d.exports},c58a:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAOVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZku8lwOAAAAEnRSTlMAQFDxMI8QHxmj4PTklnzpcAn7T5nqAAAAtUlEQVRIx+XSyw6DIBCFYS4FZxBQef+HrXZhyHEcu2iamv4LVt9icoKBiH2TG3k44NTOm5CXpsWgs6pH0NvR1UrNGxe0M1L2b7VbI11jn9NUspdLIYLWf12KoLlpBdBe1Qn09lQnFdqaoK2RcrfQceiLFzrAzl/R0b2q72nb9vyu6dFHomZtQdSJdr3EvuWocyFzeXffL2pYUNfYLfRspaqgx6aVQbOqC+hhUnAig5zPjvGM+AlAZzjfmu7xHgAAAABJRU5ErkJggg=="},e7a4:function(e,t,n){var i=n("bbe9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("14146b75",i,!0,{sourceMap:!1,shadowMode:!1})},ee01:function(e,t,n){"use strict";n("7a82");var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("cb4b")),o={currentUserInfo:function(e){return a.default.post("/api/auth/currentUserInfo",e)},realPass:function(e){return a.default.post("/api/auth/realPass",e)},register:function(e){return a.default.post("/api/auth/register",e)},updateInfo:function(e){return a.default.post("/api/auth/updateInfo",e)},updatePassword:function(e){return a.default.post("/api/auth/updatePassword",e)},collect:function(e){return a.default.get("/api/mine/collect",e)},collectDetails:function(e,t){return a.default.get("/api/mine/collect/"+e,t)},userlist:function(e){return a.default.get("/api/user/page",e)},Transfer:function(e,t){return a.default.post("/api/mine/collect/"+e,t)},order:function(e){return a.default.get("/api/mine/order",e)},orderDetail:function(e){return a.default.get("/api/mine/order/"+e)},cancelOrder:function(e){return a.default.post("/api/mine/order/"+e+"/cancel")},getWaitPayNumber:function(e){return a.default.get("/api/mine/getWaitPayNumber")},exchangeGoods:function(e){return a.default.post("/api/mine/exchangeGoods/"+e)},blindboxList:function(e){return a.default.get("/api/mine/blindbox",e)},openBox:function(e){return a.default.post("/api/mine/openBlindbox/"+e)},getBinlindBoxNumber:function(){return a.default.get("/api/mine/getBinlindBoxNumber")},getCompositeList:function(e){return a.default.get("/api/ipGoods/getCompositeList",e)},compositeDetail:function(e){return a.default.get("/api/ipGoods/"+e)},getCompositeList1:function(e){return a.default.getlist("/api/ipGoods/getCompositeList",e)},composite:function(e){return a.default.post("/api/mine/composite",e)},ipGoodsDetails:function(e){return a.default.get("/api/ipGoods/"+e)},checkChannelUser:function(){return a.default.get("/api/auth/checkChannelUser")},channelPromote:function(e){return a.default.get("/api/mine/channel/promote",e)},channelTop:function(e){return a.default.get("/api/mine/channel/top",e)},channelSum:function(){return a.default.get("/api/mine/channelSum")},addressList:function(e){return a.default.get("/api/mine/shippingAddress/list",e)},shippingAddress:function(e){return a.default.post("/api/mine/shippingAddress",e)},addressDetail:function(e){return a.default.get("/api/mine/shippingAddress/"+e)},delAddress:function(e){return a.default.delete("/api/mine/shippingAddress/"+e)},exitaddress:function(e,t){return a.default.put("/api/mine/shippingAddress/"+e,t)},updateShippingInfo:function(e,t){return a.default.get("/api/mine/collect/"+e+"/updateShippingInfo/"+t)},likeList:function(e){return a.default.get("/api/mine/goodsLike/list",e)},goodsLike:function(e){return a.default.post("/api/mine/goodsLike?goodsId="+e)},delLike:function(e){return null==e?a.default.delete("/api/mine/goodsLike"):a.default.delete("/api/mine/goodsLike?goodsId="+e)},compositeGs:function(e){return a.default.get("/api/composite/"+e)},getPrivateKey:function(e){return a.default.get("/api/user/account",e)},myBenefit:function(e){return a.default.get("/api/mine/myBenefit",e)},getExchangeDetail:function(e){return a.default.get("/api/benefit/ftYearCard/".concat(e))},submitExchangeData:function(e){return a.default.post("/api/benefit/ftYearCard/create",e)},modifyExchangeData:function(e){return a.default.put("/api/benefit/ftYearCard/modify",e)}};t.default=o},fc68:function(e,t,n){var i=n("4bad");t=i(!1),t.push([e.i,'@charset "UTF-8"\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */',""]),t.locals={uni_bg_color:"#1f1f21",uni_fbg_color:"#222224",uni_minebg_color:"#1f2020",item_theme_color:"#fae3b2",item_six_color:"#666",uni_unbg_color:"#fff",Inactive_color:"#d1d1d1",order_error_color:"#999",order_success_color:"#1890ff",order_warning_color:"#e1e1e1",item_boder_color:"#666",uni_card_color:"#191919"},e.exports=t}}]);