(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-realName"],{"271c":function(e,t,n){var a=n("4bad");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */[data-v-bdda21a2]:export{uni_bg_color:#1f1f21;uni_fbg_color:#222224;uni_minebg_color:#1f2020;item_theme_color:#fae3b2;item_six_color:#666;uni_unbg_color:#fff;Inactive_color:#d1d1d1;order_error_color:#999;order_success_color:#1890ff;order_warning_color:#e1e1e1;item_boder_color:#666;uni_card_color:#191919}.loading[data-v-bdda21a2]{position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.1)}.loading uni-image[data-v-bdda21a2]{width:%?110?%;height:%?110?%;-webkit-transform:translateY(-100%);transform:translateY(-100%)}',""]),e.exports=t},"365c":function(e,t,n){"use strict";n("7a82");var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("cb4b")),o={bannerList:function(e){return r.default.get("/api/banner/list",e)},config:function(e){return r.default.get("/api/ui",e)},ipGoodsList:function(e){return r.default.get("/api/ipGoods",e)},checkAirdrop:function(e){return r.default.get("/api/mine/checkAirdrop",e)},ipGoodsDetails:function(e){return r.default.get("/api/ipGoods/"+e)},loadUserInfo:function(e){return r.default.get("/api/ipGoods/loadUserInfo/"+e)},createOrder:function(e){return r.default.post("/api/seckill/createOrder",e)},CheckOrder2:function(e){return r.default.get("/api/seckill/check?sid="+e)},CheckOrder3:function(e){return r.default.get("/api/seckill/checkCollect?orderNo="+e)},paySuccess:function(e){return r.default.get("/api/seckill/paySuccess?orderNo="+e)},setsysDetails:function(e){return r.default.get("/api/ip/"+e)},pageLimitedGoods:function(e,t){return r.default.get("/api/ip/"+e+"/pageLimitedGoods",t)},ipPage:function(e){return r.default.get("/api/ip/page",e)},multiCreateOrder:function(e){return r.default.post("/api/seckill/multiCreateOrder",e)},iploadUserInfo:function(e){return r.default.get("/api/ip/loadUserInfo/"+e)},getPayTypeList:function(e){return r.default.get("/api/seckill/getPayTypeList",e)},getPaymentList:function(e){return r.default.get("/api/seckill/getPlatformSupportsChannels",e)},wxpaySign:function(e){return r.default.get("/api/wx/pay/paySign",e)},scoreRecharge:function(e){return r.default.get("/api/seckill/api/score/recharge",e)},myScore:function(){return r.default.get("/api/mine/myScore")},scoreList:function(e){return r.default.get("/api/mine/score/list",e)},scorePay:function(e){return r.default.get("/api/score/pay",e)}};t.default=o},4259:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isShow?a("v-uni-view",{staticClass:"loading"},[a("v-uni-image",{attrs:{src:n("7735")}})],1):e._e()},o=[]},"54a1":function(e,t,n){"use strict";n.r(t);var a=n("4259"),r=n("96f7");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("d07f");var i,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"bdda21a2",null,!1,a["a"],i);t["default"]=c.exports},"5b98":function(e,t,n){var a=n("8c92");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("ab8e78ec",a,!0,{sourceMap:!1,shadowMode:!1})},7643:function(e,t,n){"use strict";n.r(t);var a=n("e6c2"),r=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},7735:function(e,t,n){e.exports=n.p+"static/img/puff.4884f92d.svg"},"7ded":function(e,t,n){"use strict";n("7a82");var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("cb4b")),o={login:function(e){return r.default.post("/api/auth/login",e)},currentUserInfo:function(e){return r.default.post("/api/auth/currentUserInfo",e)},realPass:function(e){return r.default.post("/api/auth/realPass",e)},register:function(e){return r.default.post("/api/auth/register",e)},updateInfo:function(e){return r.default.post("/api/auth/updateInfo",e)},forgotPassword:function(e){return r.default.post("/api/auth/forgotPassword",e)},sendCode:function(e){return r.default.get("/push/verificationCode/send",e)},sendTxCaptchaCode:function(e){return r.default.get("/push/verificationCode/sendSms",e)},checkMobile:function(e){return r.default.get("/api/auth/checkMobile",e)},updateChannelUserId:function(e){return r.default.post("/api/auth/updateChannelUserId?channelUserId="+e)},config:function(e){return r.default.get("/api/ui",e)}};t.default=o},"8c92":function(e,t,n){var a=n("4bad");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */[data-v-5133e9ce]:export{uni_bg_color:#1f1f21;uni_fbg_color:#222224;uni_minebg_color:#1f2020;item_theme_color:#fae3b2;item_six_color:#666;uni_unbg_color:#fff;Inactive_color:#d1d1d1;order_error_color:#999;order_success_color:#1890ff;order_warning_color:#e1e1e1;item_boder_color:#666;uni_card_color:#191919}.realName .title[data-v-5133e9ce]{margin-top:%?38?%;margin-left:%?32?%;display:flex;height:%?60?%;font-size:%?36?%;font-weight:700;color:#d1d1d1;line-height:%?60?%}.realName .text1[data-v-5133e9ce]{margin-top:%?64?%;margin-left:%?40?%;margin-bottom:%?32?%;font-size:%?32?%;font-weight:500}.realName .input_s[data-v-5133e9ce]{height:%?112?%;background:#191919!important;color:#191919;padding:0 %?32?%!important;border-bottom:1px solid #3c3c3c}.realName .okBtn[data-v-5133e9ce]{height:%?90?%;background:#fae3b2;border-radius:%?8?%;margin:0 %?60?%;font-size:%?32?%;font-weight:700;color:#1f1f21;text-align:center;line-height:%?90?%}',""]),e.exports=t},"96f7":function(e,t,n){"use strict";n.r(t);var a=n("a343"),r=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},a343:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{isShow:!1}},methods:{show:function(){this.isShow=!0},hide:function(){this.isShow=!1}}};t.default=a},a4af:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={uInput:n("3922").default,loading:n("54a1").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"realName"},[n("topNav",{attrs:{isShow:!0,pageName:"实名认证"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goback()}}}),n("v-uni-view",{staticClass:"text1"},[e._v("身份信息")]),1==e.phoneStatus?n("u-input",{staticClass:"input_s",staticStyle:{"margin-bottom":"16rpx"},attrs:{border:"none",maxlength:"11",color:"#ffffff",placeholder:"请输入您的认证手机号",disabled:!0},model:{value:e.phones,callback:function(t){e.phones=t},expression:"phones"}}):e._e(),n("u-input",{staticClass:"input_s",staticStyle:{"margin-bottom":"16rpx"},attrs:{border:"none",color:"#ffffff",placeholder:"请输入您的真实姓名",clearable:!0},model:{value:e.realName,callback:function(t){e.realName=t},expression:"realName"}}),n("u-input",{staticClass:"input_s",staticStyle:{"margin-bottom":"64rpx"},attrs:{border:"none",maxlength:"18",color:"#ffffff",placeholder:"请输入您的身份证号码",clearable:!0},model:{value:e.realIdcard,callback:function(t){e.realIdcard=t},expression:"realIdcard"}}),n("loading",{ref:"loading"}),n("v-uni-view",{staticClass:"okBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.realPass.apply(void 0,arguments)}}},[e._v("完成")])],1)},o=[]},af31:function(e,t,n){var a=n("271c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("31406ab4",a,!0,{sourceMap:!1,shadowMode:!1})},b8cb:function(e,t,n){"use strict";var a=n("5b98"),r=n.n(a);r.a},c154:function(e,t,n){"use strict";n.r(t);var a=n("a4af"),r=n("7643");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("b8cb");var i,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"5133e9ce",null,!1,a["a"],i);t["default"]=c.exports},d07f:function(e,t,n){"use strict";var a=n("af31"),r=n.n(a);r.a},e6c2:function(e,t,n){"use strict";n("7a82");var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac1f"),n("5319"),n("00b4");var r=a(n("7ded")),o=a(n("365c")),i={data:function(){return{realIdcard:"",realName:"",phones:"",userId:null,status:!1,phoneStatus:null}},onLoad:function(e){this.config(),this.status=e.status,this.userId=uni.getStorageSync("userId"),console.log(this.userId)},methods:{getUserInfo:function(){var e=this;this.$refs.loading.show(),r.default.currentUserInfo().then((function(t){0==t.data.code&&(e.phones=t.data.data.mobile.replace(/(\d{3})\d*(\d{4})/,"$1****$2")),e.$refs.loading.hide()}))},config:function(){var e=this;o.default.config().then((function(t){0==t.data.code&&(e.phoneStatus=t.data.data.realPassType,1==t.data.data.realPassType&&e.getUserInfo())}))},goback:function(){uni.switchTab({url:"../tabBar/mine"})},realPass:function(){return this.realName?this.realIdcard&&/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(this.realIdcard)?(console.log(111),void r.default.realPass({id:this.userId,realIdcard:this.realIdcard,realName:this.realName}).then((function(e){0==e.data.code?(uni.showToast({icon:"success",title:"认证成功"}),uni.setStorageSync("isRealVerified",!0),uni.switchTab({url:"../tabBar/mine"})):uni.showToast({icon:"error",title:e.data.message})}))):(this.showtoast("请输入正确的身份证号码"),!1):uni.showToast({icon:"error",title:"姓名不能为空"})}}};t.default=i}}]);