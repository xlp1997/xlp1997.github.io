(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-password"],{"271c":function(t,n,e){var a=e("4bad");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */[data-v-bdda21a2]:export{uni_bg_color:#1f1f21;uni_fbg_color:#222224;uni_minebg_color:#1f2020;item_theme_color:#fae3b2;item_six_color:#666;uni_unbg_color:#fff;Inactive_color:#d1d1d1;order_error_color:#999;order_success_color:#1890ff;order_warning_color:#e1e1e1;item_boder_color:#666;uni_card_color:#191919}.loading[data-v-bdda21a2]{position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.1)}.loading uni-image[data-v-bdda21a2]{width:%?110?%;height:%?110?%;-webkit-transform:translateY(-100%);transform:translateY(-100%)}',""]),t.exports=n},"28e1":function(t,n,e){var a=e("4bad");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */[data-v-24cc772a]:export{uni_bg_color:#1f1f21;uni_fbg_color:#222224;uni_minebg_color:#1f2020;item_theme_color:#fae3b2;item_six_color:#666;uni_unbg_color:#fff;Inactive_color:#d1d1d1;order_error_color:#999;order_success_color:#1890ff;order_warning_color:#e1e1e1;item_boder_color:#666;uni_card_color:#191919}.nickname[data-v-24cc772a]{overflow:hidden;height:100vh;background:#1f1f21}.nickname .title[data-v-24cc772a]{margin:%?40?% %?32?%;display:flex;height:%?60?%;font-size:%?36?%;font-weight:700;color:#d1d1d1;line-height:%?60?%}.nickname .input_s[data-v-24cc772a]{height:%?112?%;background:#222224;color:#1f1f21;padding:0 %?32?%!important;border-radius:0;border-bottom:1px solid rgba(60,60,60,.5)}.nickname .changpassword[data-v-24cc772a]{width:%?520?%;height:%?84?%;padding-left:%?50?%!important;padding-right:%?50?%!important}.nickname .okBtn[data-v-24cc772a]{height:%?90?%;background:#fae3b2;border-radius:%?8?%;margin:0 %?60?%;font-size:%?32?%;font-weight:700;color:#1f1f21;text-align:center;line-height:%?90?%;width:%?620?%;border-radius:%?45?%}',""]),t.exports=n},"416a":function(t,n,e){"use strict";e("7a82");var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("ac1f"),e("00b4");var o=a(e("ee01")),i=e("89f3"),r={data:function(){return{inputColor:i.uni_unbg_color,oldPassword:"",newPassword:"",againPassword:"",userId:null,pwdStatus:!0,againpwdStatus:!0,oldStatus:!0,btnStatus:!1}},onLoad:function(){this.userId=uni.getStorageSync("userId")},watch:{oldPassword:function(t){""!=t&&this.newPassword&&this.againPassword?this.btnStatus=!0:this.btnStatus=!1},newPassword:function(t){""!=t&&this.oldPassword&&this.againPassword?this.btnStatus=!0:this.btnStatus=!1},againPassword:function(t){""!=t&&this.oldPassword&&this.newPassword?this.btnStatus=!0:this.btnStatus=!1}},methods:{oldPwd:function(){1==this.oldStatus?this.oldStatus=!1:this.oldStatus=!0},lookPwd:function(){1==this.pwdStatus?this.pwdStatus=!1:this.pwdStatus=!0},againlookPwd:function(){1==this.againpwdStatus?this.againpwdStatus=!1:this.againpwdStatus=!0},changePassword:function(){var t=this;if(!this.oldPassword)return this.showtoast("请输入旧密码");if(!this.newPassword)return this.showtoast("请输入新密码");var n=/^[a-zA-Z]\w{5,17}$/;return n.test(this.newPassword)?this.newPassword!=this.againPassword?(uni.showToast({title:"输入的两次密码不一致",icon:"error"}),!1):(this.$refs.loading.show(),void o.default.updatePassword({id:this.userId,newPassword:this.$w_md5.hex_md5_32(this.$request.md5Key+this.newPassword),oldPassword:this.$w_md5.hex_md5_32(this.$request.md5Key+this.oldPassword)}).then((function(n){t.$refs.loading.hide(),0==n.data.code&&(setTimeout((function(){uni.showToast({icon:"success",title:"修改成功"})})),t.goback())}))):uni.showToast({icon:"none",duration:3e3,title:"以字母开头，长度在6~18之间，只能包含字母、数字和下划线"})},goback:function(){uni.redirectTo({url:"./index"})}}};n.default=r},4259:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.isShow?a("v-uni-view",{staticClass:"loading"},[a("v-uni-image",{attrs:{src:e("7735")}})],1):t._e()},i=[]},"54a1":function(t,n,e){"use strict";e.r(n);var a=e("4259"),o=e("96f7");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("d07f");var r,s=e("f0c5"),u=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"bdda21a2",null,!1,a["a"],r);n["default"]=u.exports},"6f61":function(t,n,e){"use strict";var a=e("eb0a"),o=e.n(a);o.a},7735:function(t,n,e){t.exports=e.p+"static/img/puff.4884f92d.svg"},"7b87":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={uInput:e("3922").default,uIcon:e("ece6").default,loading:e("54a1").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"nickname"},[e("topNav",{attrs:{isShow:!0,pageName:"修改密码"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goback()}}}),e("v-uni-view",[e("u-input",{staticClass:"input_classYuan changpassword",staticStyle:{"margin-bottom":"16rpx"},attrs:{border:"none",password:t.oldStatus,color:t.inputColor,placeholder:"请输入您的旧密码",placeholderClass:"placeholderclass",clearable:!0},model:{value:t.oldPassword,callback:function(n){t.oldPassword=n},expression:"oldPassword"}},[e("template",{slot:"suffix"},[e("u-icon",{attrs:{name:t.oldStatus?"eye":"eye-fill"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.oldPwd.apply(void 0,arguments)}}})],1)],2)],1),e("v-uni-view",[e("u-input",{staticClass:"input_classYuan changpassword",staticStyle:{"margin-bottom":"16rpx"},attrs:{border:"none",password:t.pwdStatus,color:t.inputColor,placeholder:"请输入您的新密码",placeholderClass:"placeholderclass",clearable:!0},model:{value:t.newPassword,callback:function(n){t.newPassword=n},expression:"newPassword"}},[e("template",{slot:"suffix"},[e("u-icon",{attrs:{name:t.pwdStatus?"eye":"eye-fill"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.lookPwd.apply(void 0,arguments)}}})],1)],2)],1),e("v-uni-view",[e("u-input",{staticClass:"input_classYuan changpassword",staticStyle:{"margin-bottom":"16rpx"},attrs:{border:"none",password:t.againpwdStatus,color:t.inputColor,placeholder:"请再次输入您的新密码",placeholderClass:"placeholderclass",clearable:!0},model:{value:t.againPassword,callback:function(n){t.againPassword=n},expression:"againPassword"}},[e("template",{slot:"suffix"},[e("u-icon",{attrs:{name:t.againpwdStatus?"eye":"eye-fill"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.againlookPwd.apply(void 0,arguments)}}})],1)],2)],1),e("v-uni-view",{staticStyle:{"margin-top":"64rpx"}},[t.btnStatus?e("v-uni-view",{staticClass:"okBtn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changePassword.apply(void 0,arguments)}}},[t._v("确认")]):e("v-uni-view",{staticClass:"okBtn op6"},[t._v("确认")])],1),e("loading",{ref:"loading"})],1)},i=[]},"7fe2":function(t,n,e){"use strict";e.r(n);var a=e("416a"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},"89f3":function(t,n,e){var a=e("fc68");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("74b80efa",a,!0,{sourceMap:!1,shadowMode:!1})},"96f7":function(t,n,e){"use strict";e.r(n);var a=e("a343"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},a343:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{isShow:!1}},methods:{show:function(){this.isShow=!0},hide:function(){this.isShow=!1}}};n.default=a},abb9:function(t,n,e){"use strict";e.r(n);var a=e("7b87"),o=e("7fe2");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("6f61");var r,s=e("f0c5"),u=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"24cc772a",null,!1,a["a"],r);n["default"]=u.exports},af31:function(t,n,e){var a=e("271c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("31406ab4",a,!0,{sourceMap:!1,shadowMode:!1})},d07f:function(t,n,e){"use strict";var a=e("af31"),o=e.n(a);o.a},eb0a:function(t,n,e){var a=e("28e1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("476abea8",a,!0,{sourceMap:!1,shadowMode:!1})},ee01:function(t,n,e){"use strict";e("7a82");var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("cb4b")),i={currentUserInfo:function(t){return o.default.post("/api/auth/currentUserInfo",t)},realPass:function(t){return o.default.post("/api/auth/realPass",t)},register:function(t){return o.default.post("/api/auth/register",t)},updateInfo:function(t){return o.default.post("/api/auth/updateInfo",t)},updatePassword:function(t){return o.default.post("/api/auth/updatePassword",t)},collect:function(t){return o.default.get("/api/mine/collect",t)},collectDetails:function(t,n){return o.default.get("/api/mine/collect/"+t,n)},userlist:function(t){return o.default.get("/api/user/page",t)},Transfer:function(t,n){return o.default.post("/api/mine/collect/"+t,n)},order:function(t){return o.default.get("/api/mine/order",t)},orderDetail:function(t){return o.default.get("/api/mine/order/"+t)},cancelOrder:function(t){return o.default.post("/api/mine/order/"+t+"/cancel")},getWaitPayNumber:function(t){return o.default.get("/api/mine/getWaitPayNumber")},exchangeGoods:function(t){return o.default.post("/api/mine/exchangeGoods/"+t)},blindboxList:function(t){return o.default.get("/api/mine/blindbox",t)},openBox:function(t){return o.default.post("/api/mine/openBlindbox/"+t)},getBinlindBoxNumber:function(){return o.default.get("/api/mine/getBinlindBoxNumber")},getCompositeList:function(t){return o.default.get("/api/ipGoods/getCompositeList",t)},compositeDetail:function(t){return o.default.get("/api/ipGoods/"+t)},getCompositeList1:function(t){return o.default.getlist("/api/ipGoods/getCompositeList",t)},composite:function(t){return o.default.post("/api/mine/composite",t)},ipGoodsDetails:function(t){return o.default.get("/api/ipGoods/"+t)},checkChannelUser:function(){return o.default.get("/api/auth/checkChannelUser")},channelPromote:function(t){return o.default.get("/api/mine/channel/promote",t)},channelTop:function(t){return o.default.get("/api/mine/channel/top",t)},channelSum:function(){return o.default.get("/api/mine/channelSum")},addressList:function(t){return o.default.get("/api/mine/shippingAddress/list",t)},shippingAddress:function(t){return o.default.post("/api/mine/shippingAddress",t)},addressDetail:function(t){return o.default.get("/api/mine/shippingAddress/"+t)},delAddress:function(t){return o.default.delete("/api/mine/shippingAddress/"+t)},exitaddress:function(t,n){return o.default.put("/api/mine/shippingAddress/"+t,n)},updateShippingInfo:function(t,n){return o.default.get("/api/mine/collect/"+t+"/updateShippingInfo/"+n)},likeList:function(t){return o.default.get("/api/mine/goodsLike/list",t)},goodsLike:function(t){return o.default.post("/api/mine/goodsLike?goodsId="+t)},delLike:function(t){return null==t?o.default.delete("/api/mine/goodsLike"):o.default.delete("/api/mine/goodsLike?goodsId="+t)},compositeGs:function(t){return o.default.get("/api/composite/"+t)},getPrivateKey:function(t){return o.default.get("/api/user/account",t)},myBenefit:function(t){return o.default.get("/api/mine/myBenefit",t)},getExchangeDetail:function(t){return o.default.get("/api/benefit/ftYearCard/".concat(t))},submitExchangeData:function(t){return o.default.post("/api/benefit/ftYearCard/create",t)},modifyExchangeData:function(t){return o.default.put("/api/benefit/ftYearCard/modify",t)}};n.default=i},fc68:function(t,n,e){var a=e("4bad");n=a(!1),n.push([t.i,'@charset "UTF-8"\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */',""]),n.locals={uni_bg_color:"#1f1f21",uni_fbg_color:"#222224",uni_minebg_color:"#1f2020",item_theme_color:"#fae3b2",item_six_color:"#666",uni_unbg_color:"#fff",Inactive_color:"#d1d1d1",order_error_color:"#999",order_success_color:"#1890ff",order_warning_color:"#e1e1e1",item_boder_color:"#666",uni_card_color:"#191919"},t.exports=n}}]);