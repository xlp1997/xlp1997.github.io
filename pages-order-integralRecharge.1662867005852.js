(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-integralRecharge"],{"002a":function(e,t,a){"use strict";a.r(t);var i=a("deb2"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},"50ae":function(e,t,a){"use strict";a.r(t);var i=a("87fc"),n=a("002a");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("cb76");var o,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"0b39ad08",null,!1,i["a"],o);t["default"]=c.exports},"87fc":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var i={uGrid:a("1242").default,uGridItem:a("429e").default,loading:a("54a1").default,uPopup:a("3626").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"integralRecharge"},[i("topNav",{attrs:{isShow:!0,pageName:"积分充值"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goback()}}}),i("v-uni-view",{staticClass:"intR_head flex-b"},[i("v-uni-view",{staticClass:"head_t1"},[e._v("剩余积分")]),i("v-uni-view",{staticClass:"head_t2"},[e._v(e._s(e.myIntegral))])],1),i("v-uni-view",{staticClass:"R_item"},[i("u-grid",{attrs:{border:!1,col:3}},e._l(e.cardList,(function(t,a){return i("u-grid-item",{key:a,on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.itemClick(t,a)}}},[i("v-uni-view",{staticClass:"item_card",class:e.activeNum==a?"activeCard":""},[i("v-uni-view",{staticClass:"t1",style:0==t.giftScore?"line-height:120rpx":""},[e._v(e._s(t.rechargeScore)+"积分")]),0!=t.giftScore?i("v-uni-view",{staticClass:"t2"},[e._v("赠送"+e._s(t.giftScore)+"积分")]):e._e()],1)],1)})),1),i("v-uni-view",{staticClass:"flex",staticStyle:{"margin-bottom":"32rpx"}},[i("v-uni-view",{staticClass:"tips_icon"},[i("v-uni-image",{staticStyle:{width:"24rpx",height:"24rpx"},attrs:{src:a("7edf")}})],1),i("v-uni-view",{staticClass:"tips_text"},[e._v("积分比例：100积分抵"+e._s(100*e.czratio)+"元")])],1)],1),i("v-uni-view",{staticClass:"pay_list",class:null==e.activeNum||9==e.activeNum&&""!=e.freeNum?"pay_zzc":""},[i("v-uni-view",{staticClass:"pay_title"},[i("v-uni-view",{staticClass:"pay_left"},[e._v("选择支付方式")])],1),e._l(e.payList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"pay_item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.selectPay(t)}}},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",[i("v-uni-image",{staticStyle:{width:"48rpx",height:"48rpx"},attrs:{src:a("b6f5")("./"+t.pay+".png")}})],1),i("v-uni-view",{staticClass:"pay_name"},[e._v(e._s(t.name))])],1),i("v-uni-view",[i("v-uni-view",{class:t.status?"sel_true":"sel_false"})],1)],1)}))],2),i("v-uni-view",{staticClass:"footer_s"},[i("v-uni-view",{staticClass:"payBtn",style:e.payMod?"":"opacity: 0.5;pointer-events: none",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.OrderOk.apply(void 0,arguments)}}},[e._v("确认支付")])],1),i("loading",{ref:"loading"}),i("u-popup",{attrs:{customStyle:e.cunStyle,show:e.xyShow,mode:"center",closeable:!0},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.xyClose.apply(void 0,arguments)},open:function(t){arguments[0]=t=e.$handleEvent(t),e.xyOpen.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"popup_style"},e._l(e.xyData,(function(t,a){return i("v-uni-view",{key:a},[i("v-uni-view",{class:t.class},[e._v(e._s(t.content))])],1)})),1)],1)],1)},r=[]},cb76:function(e,t,a){"use strict";var i=a("e149"),n=a.n(i);n.a},d80c:function(e,t,a){var i=a("4bad");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */[data-v-0b39ad08]:export{uni_bg_color:#1f1f21;uni_fbg_color:#222224;uni_minebg_color:#1f2020;item_theme_color:#fae3b2;item_six_color:#666;uni_unbg_color:#fff;Inactive_color:#d1d1d1;order_error_color:#999;order_success_color:#1890ff;order_warning_color:#e1e1e1;item_boder_color:#666;uni_card_color:#191919}.integralRecharge[data-v-0b39ad08]{height:100vh;overflow-y:auto}.integralRecharge .title[data-v-0b39ad08]{background-color:#1f2020;padding:%?40?% %?32?%;display:flex;height:%?60?%;font-size:%?36?%;font-weight:700;color:#d1d1d1;line-height:%?60?%}.integralRecharge .tips_icon[data-v-0b39ad08]{margin-top:%?-2?%;width:%?24?%;height:%?24?%;margin-right:%?16?%}.integralRecharge .tips_text[data-v-0b39ad08]{font-size:%?24?%;font-weight:400;color:#999}.integralRecharge .popup_style[data-v-0b39ad08]{width:calc(100vw - %?128?%);color:#222224;margin-top:%?64?%;height:calc(100vh - %?256?%);overflow-y:auto;padding:0 %?32?%}.integralRecharge .popup_style .title1[data-v-0b39ad08]{text-indent:%?40?%;line-height:%?40?%;text-align:justify;color:#d1d1d1}.integralRecharge .popup_style .t1[data-v-0b39ad08]{font-size:%?36?%;font-weight:700;line-height:%?60?%;margin-top:%?20?%;color:#fae3b2}.integralRecharge .popup_style .t2[data-v-0b39ad08]{font-size:%?32?%;font-weight:700;color:#999}.integralRecharge .intR_head[data-v-0b39ad08]{padding:0 %?32?% %?32?% 0;margin-left:%?32?%;border-bottom:%?1?% solid rgba(60,60,60,.5);background-color:#1f2020}.integralRecharge .intR_head .head_t1[data-v-0b39ad08]{font-size:%?32?%;font-weight:700;color:#999}.integralRecharge .intR_head .head_t2[data-v-0b39ad08]{font-size:%?32?%;font-weight:700;color:#fff}.integralRecharge .R_item[data-v-0b39ad08]{padding:%?32?% %?32?% 0;border-bottom:%?1?% solid rgba(60,60,60,.5);background-color:#1f2020}.integralRecharge .R_item .activeCard[data-v-0b39ad08]{border:%?2?% solid #fae3b2;background-color:rgba(250,227,178,.2)!important;color:#fae3b2!important}.integralRecharge .R_item .item_card[data-v-0b39ad08]{width:calc(100% - %?32?%);margin-bottom:%?32?%;height:%?120?%;background:#222224;border-radius:%?8?%}.integralRecharge .R_item .item_card .t1[data-v-0b39ad08]{font-size:%?32?%;font-weight:700;text-align:center;line-height:%?74?%}.integralRecharge .R_item .item_card .t2[data-v-0b39ad08]{font-size:%?24?%;font-weight:400;color:#999;text-align:center;line-height:%?32?%}.integralRecharge .R_item .item_card .input_class[data-v-0b39ad08]{height:%?96?%;font-size:%?28?%;padding:0 %?12?%;text-align:center}.integralRecharge .pay_zzc[data-v-0b39ad08]{opacity:.5;cursor:not-allowed;pointer-events:none}.integralRecharge .pay_list[data-v-0b39ad08]{margin-top:%?16?%;background-color:#1f2020;margin-bottom:%?140?%}.integralRecharge .pay_list .pay_title[data-v-0b39ad08]{display:flex;justify-content:space-between;padding:%?32?%;border-bottom:%?1?% solid rgba(60,60,60,.5)}.integralRecharge .pay_list .pay_title .pay_left[data-v-0b39ad08]{font-size:%?32?%;font-weight:700;color:#fff}.integralRecharge .pay_list .pay_title .pay_right[data-v-0b39ad08]{font-size:%?28?%;color:#999}.integralRecharge .pay_list .pay_item[data-v-0b39ad08]{height:%?112?%;border-bottom:%?1?% solid rgba(60,60,60,.5);padding:0 %?32?%;display:flex;justify-content:space-between;align-items:center}.integralRecharge .pay_list .pay_name[data-v-0b39ad08]{font-size:%?32?%;font-weight:700;color:#fff;margin-left:%?16?%}.integralRecharge .pay_list .sel_true[data-v-0b39ad08]{width:%?28?%;height:%?28?%;border-radius:50%;border:%?1?% solid #fae3b2;position:relative}.integralRecharge .pay_list .sel_true[data-v-0b39ad08]::after{content:"";position:absolute;width:%?16?%;height:%?16?%;border-radius:50%;background:#fae3b2;top:%?6?%;left:%?6?%}.integralRecharge .pay_list .sel_false[data-v-0b39ad08]{width:%?28?%;height:%?28?%;border-radius:50%;border:%?1?% solid #666}.integralRecharge .footer_s[data-v-0b39ad08]{position:fixed;bottom:0;width:100%;height:%?138?%;background:rgba(25,25,25,.8);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border-top:%?1?% solid #3c3c3c;display:flex;justify-content:space-between;align-items:center}.integralRecharge .footer_s .sel_yuan[data-v-0b39ad08]{width:%?30?%;height:%?30?%;border-radius:50%;border:%?2?% solid #999;margin:%?4?% %?16?% 0 %?48?%}.integralRecharge .footer_s .sel_yuan_1[data-v-0b39ad08]{width:%?30?%;height:%?30?%;border-radius:50%;border:%?2?% solid #fae3b2;margin:%?4?% %?16?% 0 %?48?%;position:relative}.integralRecharge .footer_s .sel_yuan_1[data-v-0b39ad08]::after{content:"";position:absolute;width:%?18?%;height:%?18?%;border-radius:50%;background:#fae3b2;top:%?6?%;left:%?6?%}.integralRecharge .footer_s .footer_t[data-v-0b39ad08]{font-size:%?28?%;color:#999}.integralRecharge .footer_s .payBtn[data-v-0b39ad08]{margin:%?24?% auto %?24?%;background:#fae3b2;height:%?90?%;line-height:%?90?%;color:#222224;text-align:center;font-size:%?32?%;font-weight:700;border-radius:%?8?%;width:%?673?%}',""]),e.exports=t},deb2:function(e,t,a){"use strict";a("7a82");var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("b85c"));a("ac1f"),a("466d");var r=i(a("d8ef")),o=i(a("365c")),s=i(a("7d61")),c=a("89f3"),d={data:function(){return{czratio:null,cunStyle:{"border-radius":"16rpx",background:c.uni_fbg_color},xyData:r.default.data,xyShow:!1,score:null,myIntegral:0,selXy:!1,themeColor:c.item_theme_color,payData:[{pay:"WXPAY",name:"微信支付",status:!1},{pay:"ALIPAY",name:"支付宝",status:!1},{pay:"FUIOUPAY",name:"富友支付",status:!1},{pay:"YEEPAY",name:"易宝支付",status:!1},{pay:"yunshanfu",name:"云闪付",status:!1},{pay:"SANDPAY_QUICKPAY",name:"银联支付",status:!1},{pay:"SANDPAY_H5QUICK",name:"H5快捷支付",status:!1}],payList:[],inputColor:c.uni_unbg_color,freeNum:"",activeNum:null,cardList:[],payMod:null}},onShow:function(){var e=this;setTimeout((function(){e.getMyScore(),e.getczList(),e.getPayTypeList(),e.myIntegral>0&&(e.selXy=!0)}))},methods:{xyOpen:function(){},xyClose:function(){this.xyShow=!1},getczList:function(){var e=this;o.default.config().then((function(t){e.cardList=t.data.data.scoreRechargeDetailList,e.czratio=t.data.data.scoreRechargeRatio}))},getMyScore:function(){var e=this;o.default.myScore().then((function(t){0==t.data.code&&(e.myIntegral=t.data.data,t.data.data>0&&(e.selXy=!0))}))},goback:function(){uni.redirectTo({url:"./myIntegral"})},OrderOk:function(){var e=this;""!=this.freeNum&&(this.score=this.freeNum),this.$refs.loading.show(),console.log(this.score),o.default.scoreRecharge({score:this.score}).then((function(t){if(0==t.data.code){var a=t.data.data.orderNo,i=e,n=uni.getStorageSync("userId"),r=uni.getStorageSync("token");switch(console.log(i.payMod),i.payMod){case"WXPAY":o.default.wxpaySign({orderNo:a}).then((function(e){var t=e.data.data.payData;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.appId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:"prepay_id="+t.prepayId,signType:t.signType,paySign:t.paySign},(function(e){"get_brand_wcpay_request:ok"===e.err_msg?(setTimeout((function(){uni.redirectTo({url:"./myIntegral"})}),500),i.orderDetail(i.oDetail.id)):"get_brand_wcpay_request:cancel"===e.err_msg?console.log("取消"):"get_brand_wcpay_request:fail"===e.err_msg?console.log("失败"):console.log("失败1")}))}));break;case"ALIPAY":window.location.href="https://fysc.hytch.com/api/alipay/mobilePayCreateOrder?userId="+n+"&orderNo="+a+"&Authorization="+r;break;case"FUIOUPAY":s.default.FYh5PayCreateOrder(n,a,"积分充值",r).then((function(e){if(0===e.data.code){var t=document.createElement("form");document.body.appendChild(t),t.style.display="none",t.action="https://aggpc.fuioupay.com/aggpayGate.fuiou",t.id="form",t.method="post";var a=document.createElement("input");a.setAttribute("type","hidden"),a.name="message",a.value=e.data.data.message,t.appendChild(a);var i=document.createElement("input");i.setAttribute("type","hidden"),i.name="mchnt_cd",i.value=e.data.data.mchnt_cd,t.appendChild(i),t.submit(),document.body.removeChild(t)}}));break;case"YEEPAY":s.default.YeeH5PayCreateOrder(n,a,"积分充值",r).then((function(e){0===e.data.code&&(window.location.href=e.data.data)}));break;case"SANDPAY_QUICKPAY":window.location.href="https://fysc.hytch.com/api/sandpay/quickPayCreateOrder?userId="+n+"&orderNo="+a+"&Authorization="+r;break;case"SANDPAY_H5QUICK":window.location.href="https://fysc.hytch.com/api/sandpay/h5QuickCreateOrder?userId="+n+"&orderNo="+a+"&Authorization="+r;break;case"yunshanfu":i.showtoast("暂未开放");break;default:i.showtoast("请选择您的支付方式");break}}e.$refs.loading.hide()}))},getPayTypeList:function(){var e=this;this.$refs.loading.show();var t="",a=window.navigator.userAgent.toLowerCase();t="micromessenger"==a.match(/MicroMessenger/i)?"WX":"H5",console.log(t),o.default.getPayTypeList({uaType:t}).then((function(t){console.log(t.data);for(var a=[],i=0,n=0;n<e.payData.length;n++)for(var r=0;r<t.data.data.length;r++)e.payData[n].pay==t.data.data[r]&&(a[i]=e.payData[n],++i);e.payList=a,1==e.payList.length?(e.payMod=e.payList[0].pay,e.OrderOk()):0==e.payList.length?e.showtoast("暂无支付方式，请联系客服"):console.log("多种方式"),e.$refs.loading.hide()}))},agreest:function(){this.selXy?this.selXy=!1:this.selXy=!0},selectPay:function(e){this.payMod=e.pay;var t,a=(0,n.default)(this.payList);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.status=!1,e.name==i.name&&(i.status=!0)}}catch(r){a.e(r)}finally{a.f()}},itemClick:function(e,t){console.log(t),this.activeNum=t,this.score=e.rechargeScore,console.log(this.score)}}};t.default=d},e149:function(e,t,a){var i=a("d80c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("07b45748",i,!0,{sourceMap:!1,shadowMode:!1})}}]);