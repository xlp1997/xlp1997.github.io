(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-setsys"],{"07e5":function(e,t,i){var n=i("5627");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("426dc76d",n,!0,{sourceMap:!1,shadowMode:!1})},1754:function(e,t,i){"use strict";i("7a82");var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("99af");var a=n(i("365c")),s=(n(i("2934")),n(i("ee01")),n(i("cc37")),{data:function(){return{curPage:1,limit:6,isLoading:!1,status:"loading",dataList:[],OSSimgUrl:""}},onPullDownRefresh:function(){var e=this;setTimeout((function(){e.curPage=1,e.status="loading",e.dataList=[],e.ipPage(),uni.stopPullDownRefresh()}),1e3)},onShow:function(e){this.OSSimgUrl=this.$request.OSSimgUrl,this.curPage=1,this.status="loading",this.dataList=[],this.ipPage()},methods:{ipPage:function(){var e=this;"nomore"!=this.status&&(this.isLoading||(this.isLoading=!0,a.default.ipPage({curPage:this.curPage,limit:this.limit,hideIndex:!1}).then((function(t){if(0==t.data.code){var i=t.data.data.list;e.dataList=e.dataList.concat(i),e.totalCount=t.data.data.totalCount,e.isLoading=!1,i.length<e.limit&&(e.status="nomore")}}))))},gosetsysDetails:function(e){"COMMON"==e.type?this.go("/pages/home/setsysDetails?id="+e.id):this.go("/pages/home/setsysDetails1?id="+e.id)}},onReachBottom:function(){"nomore"!=this.status&&(this.isLoading||(this.curPage++,this.ipPage()))}});t.default=s},2553:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAAeBAMAAABNrilOAAAAKlBMVEX///////////8AAAD////////////////////////////////////////aWmG7AAAADnRSTlNNg2sAPw9ILDYLgCd3QbjiWT4AAAE9SURBVGje7de9SsNgFMbxR2nfFHFIVqci3kF8aYtLsC5uwgt1cMlSxE0IOhfEURAK4iLU3VVw9DIEb6b5Km3TJBdwzvO7hT+Hcw7CqpuXGCSH+fsOK6rR7SNImlvXGt3OQPL0XFv0e5BEXkv0D5BMl43RLU84qYxrij4BSTVtiD7ioMtl5vXRT0FyjTei83RXwquNbkGSubroQ5BkT3XRr0CSddfRudK18Oqi82GTzexEtz/RZ0CCHX39u+3o1zH2A5Ktbx42o78DOAxItj7wvI5+BkZX4BdAsoo+ipA6CEi2BYDOvIw+QWYvINkWSE2L6DZmdBV8pIzLo7+B0VXwkbnLo0eMrkMRvZNFH4DRdfCRS9Lor4yuRBm9m0afMboSZfReCAtGV8JHwWHA6FqsoicYXpTOj0m2k7L0eAnn5XTedMpAiwAAAABJRU5ErkJggg=="},"271c":function(e,t,i){var n=i("4bad");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */[data-v-bdda21a2]:export{uni_bg_color:#1f1f21;uni_fbg_color:#222224;uni_minebg_color:#1f2020;item_theme_color:#fae3b2;item_six_color:#666;uni_unbg_color:#fff;Inactive_color:#d1d1d1;order_error_color:#999;order_success_color:#1890ff;order_warning_color:#e1e1e1;item_boder_color:#666;uni_card_color:#191919}.loading[data-v-bdda21a2]{position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.1)}.loading uni-image[data-v-bdda21a2]{width:%?110?%;height:%?110?%;-webkit-transform:translateY(-100%);transform:translateY(-100%)}',""]),e.exports=t},2934:function(e,t,i){"use strict";i("7a82");var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("cb4b")),s={all:function(e){return a.default.get("/sys/dict/all",e)},getJsapiTicket:function(e){return a.default.get("/wx/jsapi/"+e+"/getJsapiTicket")}};t.default=s},"365c":function(e,t,i){"use strict";i("7a82");var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("cb4b")),s={bannerList:function(e){return a.default.get("/api/banner/list",e)},config:function(e){return a.default.get("/api/ui",e)},ipGoodsList:function(e){return a.default.get("/api/ipGoods",e)},checkAirdrop:function(e){return a.default.get("/api/mine/checkAirdrop",e)},ipGoodsDetails:function(e){return a.default.get("/api/ipGoods/"+e)},loadUserInfo:function(e){return a.default.get("/api/ipGoods/loadUserInfo/"+e)},createOrder:function(e){return a.default.post("/api/seckill/createOrder",e)},CheckOrder2:function(e){return a.default.get("/api/seckill/check?sid="+e)},CheckOrder3:function(e){return a.default.get("/api/seckill/checkCollect?orderNo="+e)},paySuccess:function(e){return a.default.get("/api/seckill/paySuccess?orderNo="+e)},setsysDetails:function(e){return a.default.get("/api/ip/"+e)},pageLimitedGoods:function(e,t){return a.default.get("/api/ip/"+e+"/pageLimitedGoods",t)},ipPage:function(e){return a.default.get("/api/ip/page",e)},multiCreateOrder:function(e){return a.default.post("/api/seckill/multiCreateOrder",e)},iploadUserInfo:function(e){return a.default.get("/api/ip/loadUserInfo/"+e)},getPayTypeList:function(e){return a.default.get("/api/seckill/getPayTypeList",e)},getPaymentList:function(e){return a.default.get("/api/seckill/getPlatformSupportsChannels",e)},wxpaySign:function(e){return a.default.get("/api/wx/pay/paySign",e)},scoreRecharge:function(e){return a.default.get("/api/seckill/api/score/recharge",e)},myScore:function(){return a.default.get("/api/mine/myScore")},scoreList:function(e){return a.default.get("/api/mine/score/list",e)},scorePay:function(e){return a.default.get("/api/score/pay",e)}};t.default=s},4259:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShow?n("v-uni-view",{staticClass:"loading"},[n("v-uni-image",{attrs:{src:i("7735")}})],1):e._e()},s=[]},"54a1":function(e,t,i){"use strict";i.r(t);var n=i("4259"),a=i("96f7");for(var s in a)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(s);i("d07f");var o,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"bdda21a2",null,!1,n["a"],o);t["default"]=u.exports},5627:function(e,t,i){var n=i("4bad");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 主题基础颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导出 */[data-v-2bae4ef1]:export{uni_bg_color:#1f1f21;uni_fbg_color:#222224;uni_minebg_color:#1f2020;item_theme_color:#fae3b2;item_six_color:#666;uni_unbg_color:#fff;Inactive_color:#d1d1d1;order_error_color:#999;order_success_color:#1890ff;order_warning_color:#e1e1e1;item_boder_color:#666;uni_card_color:#191919}.setsys .set_ul[data-v-2bae4ef1]{margin:%?48?%}.setsys .set_ul .set_li[data-v-2bae4ef1]{margin-top:%?48?%}.setsys .set_ul .set_li .setimgview[data-v-2bae4ef1]{position:relative;height:%?708?%;width:100%}.setsys .set_ul .set_li .setimgview .setbg[data-v-2bae4ef1]{width:%?606?%;height:%?30?%;position:absolute;top:%?24?%;left:%?24?%}.setsys .set_ul .set_li .setimgview .setimg1[data-v-2bae4ef1]{width:%?654?%;height:%?654?%;border-radius:%?16?% %?16?% 0 0;position:absolute;bottom:0;left:0}.setsys .set_ul .set_li .setinfo[data-v-2bae4ef1]{position:relative;width:100%;background:#2d2f2f;border-radius:0 0 %?16?% %?16?%}.setsys .set_ul .set_li .setinfo .padding32_z[data-v-2bae4ef1]{padding:%?32?%}.setsys .set_ul .set_li .setinfo .padding32_z .title[data-v-2bae4ef1]{display:flex;justify-content:space-between}.setsys .set_ul .set_li .setinfo .padding32_z .title .name1[data-v-2bae4ef1]{width:100%;font-size:%?32?%;color:#fff}.setsys .set_ul .set_li .setinfo .padding32_z .title .label[data-v-2bae4ef1]{color:#2c2312;background:linear-gradient(90deg,#fae2ae,#fbeac6);line-height:%?40?%;height:%?40?%;text-align:center;width:%?100?%;font-size:%?24?%;border-radius:%?6?%}.setsys .set_ul .set_li .setinfo .padding32_z .faxing[data-v-2bae4ef1]{color:#666}.setsys .set_ul .set_li .setinfo .padding32_z .faxing .fangicon[data-v-2bae4ef1]{width:%?45?%;height:%?45?%}.setsys .set_ul .set_li .setinfo .padding32_z .faxing .zi[data-v-2bae4ef1]{color:#fff}',""]),e.exports=t},7735:function(e,t,i){e.exports=i.p+"static/img/puff.4884f92d.svg"},"7a21":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}));var n={uLoadmore:i("d77d").default,loading:i("54a1").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"setsys"},[n("v-uni-view",{staticClass:"set_ul"},e._l(e.dataList,(function(t,a){return n("v-uni-view",{key:a,staticClass:"set_li",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.gosetsysDetails(t)}}},[n("v-uni-view",{staticClass:"setimgview"},[n("v-uni-image",{staticClass:"setbg",attrs:{src:i("2553"),mode:""}}),n("v-uni-image",{staticClass:"setimg1",attrs:{src:e.getDownloadUrl(t.coverImageFilePath),mode:""}})],1),n("v-uni-view",{staticClass:"setinfo"},[n("v-uni-view",{staticClass:"padding32_z"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"name1 u-line-2",style:t.hasNew?"width: 80%":""},[e._v(e._s(t.name))]),t.hasNew?n("v-uni-view",{staticClass:"label"},[e._v("在售中")]):e._e()],1),n("v-uni-view",{staticClass:"marT30 faxing flex-col-content"},[n("v-uni-image",{staticClass:"fangicon mr10",attrs:{src:i("97a3"),mode:""}}),e._v("发行方："),n("v-uni-text",{staticClass:"zi"},[e._v(e._s(t.publisherName))])],1)],1)],1)],1)})),1),n("v-uni-view",{staticStyle:{"margin-bottom":"48rpx"}},[n("u-loadmore",{attrs:{status:e.status,nomoreText:"没有更多套系啦"}})],1),n("loading",{ref:"loading"})],1)},s=[]},"7e62":function(e,t,i){"use strict";var n=i("07e5"),a=i.n(n);a.a},"96f7":function(e,t,i){"use strict";i.r(t);var n=i("a343"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=a.a},"97a3":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAC+lBMVEUAAAD///////////////////////////////////////////////////7///////////////////////////////////////3//////////////P3+/f3//////////v7////////+/v/////////9/v7+///+//39/vv//f/8///4wAH7//3lIin///opr+j0mQ///v0rr+b7xBIlreQpr+T6vgD6////++1xuzbnICr/+/5OvenoHybzkwP5uAAuruLwfoP///whrOXQ6bzymBLwmg+35PaM0/P98PEtrugosuYsruXkFx7ymg7/lAP5//4fsPJJvO8rruz9+usqseCy2ZH61WF1ujz0qjj4mA/2mAwUsvgXq+UpseMcq+IUqOD1rERsuC9jtSP5lgf8//drx+wwrOCJyF/mEy/nEx3zlQz1vwD+vQD4/P8ervz3/vsprfWHz+4Zq+ssseX62d0xr9z4xHX3tl7oMDl3uzbjJyehsCNxviH1mBXjDBP9lA/1mwz6vAP2kALD6Pix4Pb9/fWEz/GB0PBHvugSp+dev+Ecp998poj5x3vuZ3PwbXD602T6017crU37pz3nLjaBuDThIjNuuDFlti/WlynpGSf8xyHFpRneBxhdtRbuZhP1mxLsnQ7zpw33iQj3oQf4wwT7zwL7xwH5wQH+wADz9/sEpvT69fNzzfD7/O+k1+7r/e0xteojsOj64d+Q1t8Aot/43tnk8tj549A2ss07rMs4s8VNssP2wL8vtr5QrLwvq7vI57H1qa9Gtp5up5vvdYm03Ijgx4Zys4b43YBNuX/wlXxct3b623P1x3LBx3LxgW/6xG3wXWj622PyvWNXvmDxuFnWyFapoFaUx1Tus1PBvU7qQk29oEFbw0BqvD9fwz1kwD3OnTnoMTfFojVhvDPrJDOXsjL7qTFgsy7jFyz4yyt4vSrucirUvCn2yijjDyPoGyLkGiLvXyHqTiDimR/ycBznwBj80hPkORLelgz6tAf6kQAK8rxCAAAAJHRSTlMA+aAjgiXx5WzPKwj8+/Dex8aIVUhCIPnhpvLwz4EqCOCngmsJNkPaAAAEX0lEQVRIx6WVZXATQRiGQwiluLvD7hnHGQmhpA0h0ABJiBIgSYsWb3F3d3d3d3d3d3d3d51h73INoVAY4JnJr3vyznt7u/spklIwXJk5dUaQMXVmZXhBxW/JqcoEQsmkypmsm1KZASQlgzLlL910BVKAX5FCle5nOVUakBxpUiWVs4eB5AnL/qOcLdji122yhco5kPx7PUdI54wAp8DyqqW/UxVROcBSCupgvmD3dGkAT1Q9NqXkD3x8Nv5Ox44dx469upuA9WH+QrJdACAOxSeUCiF+wZfOj6MkqtzfRhEQKyp/FFQag08S4nstLJ7IwuLz5zQuU6aESJkm5ShIwlyBz5QHJZPMi1Lz4ouHMP9NYyQiRBvDeZzII0WnB2L2lIRFCb16lQ2y4NO07t27N4lC4VVEm3ekF8OzAsm+8PzDvEUlR42sPrK6yKgzJ4cPHzHiNIpHNsBI3gGyIrswEGnhat1u68ET/YAWBP6tJTGtFqwZPzlKsgkdDXIrFGmBBONSr3YucTUz0hBDoKeQxnFsfYnXJWRbB0BaRTFJJvFINSvUimzB6whShCC0kNBRbaNedZZsI0RWuEIZsPmBarM1NrKZ0YEBjKIgpAleC6m2JaICvXmGAECpyAICRKoFlN2MYYy4g6ahjq4PKUbbtvHLxpPRetNQdLIoUgdtVqNe1QAxuC9DQLzfsA4dOpy9/H7G287T9lE0LjqpFWEhtkEzJDY2dt0ABuooYswcvb63fu7s2TNnHMFIUtrnChBiCx5LG6s5thIDCdpRpzdnMvk4jus5d5icDX7IdnvMBmub2pWMJGpeR8/5es7ibNHR+vYQSk7exN5kpNpgbViTbcNaBlUCPHRo6+iRGN3N5Of0x7Vy78Q1wVwaA8taGrrZmrUrAfSaGMrmZnaL5mxc0/YYJklZ5PWmCFeM0+PRaNwNA7aWrKPvZuK4aM6EmmAEL1pKRTiQMI4e6olhDVaNxRLIpsf09vttNpvJF2c/Jb9luLxPMOqhfdLeGGdDTTsW9cYJCEd/nuXvEWe3x72bdABIMtonitwAgePepnH2ixan4G45ZK1oaxtNrDGuy9RrQ3e0qzUAQFHPnbi/Scrb1Oaz397cfNPRR/uBjsHxRhMjup7bHhPjdLbuj5qSFMgaPDuU18+Z/Pa7hzt1nV4NMDTDNOraaU/LlqzBLJRvBVAVOn1K+Vwi3WvievaYOu5ppxr1qgFIk+Sleluas0JNjUGy0SYsEjzzOPQ29fXocutGjYiIemI2Vb/RzuZuoaZVzsaYXPL9owKAp7xxvgc3I5AsZvOQqD+4tccgaDSCVaiFeuO46vtdRVLnv3a5HoGQbAJi0FVLYM1mgbWo1SuMEEd3VfAexPCNV+7VnVAXMWE6sjGcHFi7vLp8efRzL1tM4PlShd6xOFhZQWbXBoCqkX36VgzQpwXAcuX4t/v7z7Mhb/b/mTuIdKpkZ9pfzcv/n8UyacU5HwbCxDmfNunDb/CvkgbKTxpxAAAAAElFTkSuQmCC"},a343:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{isShow:!1}},methods:{show:function(){this.isShow=!0},hide:function(){this.isShow=!1}}};t.default=n},af31:function(e,t,i){var n=i("271c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("31406ab4",n,!0,{sourceMap:!1,shadowMode:!1})},cc37:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={mineSalogn:"方元数藏不只是虚拟权益",realStatus:!0,userAge:18,bgStatus:!0,homeCompose:!1,channelStatus:!0,menuList:[{name:"我的订单",key:1,status:!1},{name:"我的盲盒",key:2,status:!1},{name:"我喜欢的",key:3,status:!1},{name:"藏品合成",key:4,status:!1}],itemList:[{name:"兑换码",key:3}]};t.default=n},d07f:function(e,t,i){"use strict";var n=i("af31"),a=i.n(n);a.a},e7e2:function(e,t,i){"use strict";i.r(t);var n=i("7a21"),a=i("ea1e");for(var s in a)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(s);i("7e62");var o,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"2bae4ef1",null,!1,n["a"],o);t["default"]=u.exports},ea1e:function(e,t,i){"use strict";i.r(t);var n=i("1754"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=a.a},ee01:function(e,t,i){"use strict";i("7a82");var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("cb4b")),s={currentUserInfo:function(e){return a.default.post("/api/auth/currentUserInfo",e)},realPass:function(e){return a.default.post("/api/auth/realPass",e)},register:function(e){return a.default.post("/api/auth/register",e)},updateInfo:function(e){return a.default.post("/api/auth/updateInfo",e)},updatePassword:function(e){return a.default.post("/api/auth/updatePassword",e)},collect:function(e){return a.default.get("/api/mine/collect",e)},collectDetails:function(e,t){return a.default.get("/api/mine/collect/"+e,t)},userlist:function(e){return a.default.get("/api/user/page",e)},Transfer:function(e,t){return a.default.post("/api/mine/collect/"+e,t)},order:function(e){return a.default.get("/api/mine/order",e)},orderDetail:function(e){return a.default.get("/api/mine/order/"+e)},cancelOrder:function(e){return a.default.post("/api/mine/order/"+e+"/cancel")},getWaitPayNumber:function(e){return a.default.get("/api/mine/getWaitPayNumber")},exchangeGoods:function(e){return a.default.post("/api/mine/exchangeGoods/"+e)},blindboxList:function(e){return a.default.get("/api/mine/blindbox",e)},openBox:function(e){return a.default.post("/api/mine/openBlindbox/"+e)},getBinlindBoxNumber:function(){return a.default.get("/api/mine/getBinlindBoxNumber")},getCompositeList:function(e){return a.default.get("/api/ipGoods/getCompositeList",e)},compositeDetail:function(e){return a.default.get("/api/ipGoods/"+e)},getCompositeList1:function(e){return a.default.getlist("/api/ipGoods/getCompositeList",e)},composite:function(e){return a.default.post("/api/mine/composite",e)},ipGoodsDetails:function(e){return a.default.get("/api/ipGoods/"+e)},checkChannelUser:function(){return a.default.get("/api/auth/checkChannelUser")},channelPromote:function(e){return a.default.get("/api/mine/channel/promote",e)},channelTop:function(e){return a.default.get("/api/mine/channel/top",e)},channelSum:function(){return a.default.get("/api/mine/channelSum")},addressList:function(e){return a.default.get("/api/mine/shippingAddress/list",e)},shippingAddress:function(e){return a.default.post("/api/mine/shippingAddress",e)},addressDetail:function(e){return a.default.get("/api/mine/shippingAddress/"+e)},delAddress:function(e){return a.default.delete("/api/mine/shippingAddress/"+e)},exitaddress:function(e,t){return a.default.put("/api/mine/shippingAddress/"+e,t)},updateShippingInfo:function(e,t){return a.default.get("/api/mine/collect/"+e+"/updateShippingInfo/"+t)},likeList:function(e){return a.default.get("/api/mine/goodsLike/list",e)},goodsLike:function(e){return a.default.post("/api/mine/goodsLike?goodsId="+e)},delLike:function(e){return null==e?a.default.delete("/api/mine/goodsLike"):a.default.delete("/api/mine/goodsLike?goodsId="+e)},compositeGs:function(e){return a.default.get("/api/composite/"+e)},getPrivateKey:function(e){return a.default.get("/api/user/account",e)},myBenefit:function(e){return a.default.get("/api/mine/myBenefit",e)},getExchangeDetail:function(e){return a.default.get("/api/benefit/ftYearCard/".concat(e))},submitExchangeData:function(e){return a.default.post("/api/benefit/ftYearCard/create",e)},modifyExchangeData:function(e){return a.default.put("/api/benefit/ftYearCard/modify",e)}};t.default=s}}]);