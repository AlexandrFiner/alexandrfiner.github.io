(this["webpackJsonpvk-coin-faucet"]=this["webpackJsonpvk-coin-faucet"]||[]).push([[0],{1420:function(e,t,a){"use strict";a.r(t);a(251),a(277),a(279),a(280),a(282),a(283),a(284),a(285),a(286),a(287),a(288),a(289),a(291),a(292),a(293),a(294),a(295),a(296),a(297),a(298),a(299),a(300),a(302),a(303),a(304),a(305),a(306),a(307),a(308),a(309),a(310),a(311),a(312),a(313),a(314),a(315),a(316),a(317),a(318),a(319);var n=a(0),r=a.n(n),c=a(104),o=a.n(c),l=a(27),i=a.n(l),u=a(45),s=a(29),d=a.n(s),p=a(37),m=a(30),f=a(43),b=a.n(f),h=a(14),w=(a(432),a(433),a(44)),E=a(170),v=a(171),y=a.n(v),g=a(172),j=a.n(g),O=a(63),k=function(e){var t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!1),s=Object(m.a)(l,2),f=(s[0],s[1],Object(n.useState)(!0)),v=Object(m.a)(f,2),g=v[0],O=v[1],k=Object(n.useState)(Math.floor(Math.random()*Math.floor(15)+990)),x=Object(m.a)(k,2),A=x[0],_=x[1];function S(){return(S=Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i.a.supports("VKWebAppShowNativeAds")){t.next=2;break}return t.abrupt("return");case 2:return t.abrupt("return",i.a.send("VKWebAppShowNativeAds",{ad_format:"preloader"}).then(function(){var t=Object(p.a)(d.a.mark((function t(a){var n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.result){t.next=3;break}return alert("\u041c\u044b \u043d\u0435 \u0441\u043c\u043e\u0433\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u043e\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u043e\u0434\u0430\u0442\u0435\u043b\u044f!"),t.abrupt("return",window.location.reload());case 3:return t.next=5,Object(E.load)("6Lc0BEEaAAAAAL5Sy4IZxAzYPI2kIbgtWRzchuWE",{autoHideBadge:!0});case 5:return n=t.sent,t.next=8,n.execute("viewAd");case 8:return r=t.sent,c=y()("".concat(Math.floor(Math.random()*Math.floor(200)),"-").concat(Date.now(),"-null")),t.next=12,b.a.post("".concat(e.server,"/viewAd"),{token:r,sign:window.location.search,key:"".concat(c,"-").concat(Math.random(),"-").concat(Date.now())});case 12:if(!t.sent.data.error){t.next=16;break}return alert("\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043f\u043e\u0437\u0436\u0435!"),t.abrupt("return",window.location.reload());case 16:return O(!0),setTimeout((function(){return O(!1)}),5e3),t.abrupt("return",e.setData(Object(u.a)(Object(u.a)({},e.fetchedData),{},{earned:e.fetchedData.earned+2})));case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){return window.location.reload()})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e.fetchedData){t.next=2;break}return t.abrupt("return",o(!1));case 2:return t.next=4,b.a.post("".concat(e.server,"/getUser"),{sign:window.location.search});case 4:if(!(a=t.sent).data.error){t.next=7;break}return t.abrupt("return",window.location.reload());case 7:e.setData(a.data.response),o(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),setTimeout((function(){return O(!1)}),5e3),setInterval((function(){return _(Math.floor(Math.random()*Math.floor(15)+990))}),1e4)}),[e]),r.a.createElement(h.Panel,{id:e.id},r.a.createElement(h.PanelHeader,null,"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c"),r.a.createElement("center",{style:{margin:"12px 0"}},r.a.createElement(h.Button,{mode:"secondary",disabled:"true"},A," \u043e\u043d\u043b\u0430\u0439\u043d")),c&&r.a.createElement(h.PanelSpinner,null),!c&&r.a.createElement("div",null,r.a.createElement(h.Placeholder,{stretched:!0,icon:r.a.createElement("img",{src:j.a,height:128,width:128}),action:i.a.supports("VKWebAppShowNativeAds")?r.a.createElement(h.Button,{before:r.a.createElement(w.Icon28ViewOutline,null),mode:"outline",size:"l",onClick:function(){return function(){return S.apply(this,arguments)}()},disabled:g},"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443"):r.a.createElement(h.Button,{mode:"outline",size:"l",disabled:!0},"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u043a\u043b\u0438\u0435\u043d\u0442 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435."),header:"AdsMoney - \u0434\u0435\u043d\u044c\u0433\u0438 \u0437\u0430 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0440\u0435\u043a\u043b\u0430\u043c\u044b!"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u0443",r.a.createElement("br",null),"\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 2\ud83d\udcb0 \u0437\u0430 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440."),r.a.createElement(h.FixedLayout,{vertical:"bottom"},r.a.createElement("center",null,r.a.createElement(h.Title,{level:"1",weight:"semibold",style:{marginTop:16,marginBottom:4,color:"var(--text_primary)"}},e.fetchedData.earned.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ").replace(".",",")),r.a.createElement(h.Title,{level:"2",weight:"regular",style:{marginBottom:16,color:"var(--dynamic_gray)"}},"\u0411\u0430\u043b\u0430\u043d\u0441")))))},x=function(e){var t=Object(n.useState)(null),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!0),u=Object(m.a)(l,2),s=u[0],f=u[1];Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(d.a.mark((function t(){var a,n,r,c,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post("".concat(e.server,"/getScoreboard"),{sign:window.location.search});case 2:if("object"===typeof(a=t.sent).data){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,i.a.send("VKWebAppGetAuthToken",{app_id:e.app_id,scope:""});case 7:if(n=t.sent){t.next=10;break}return t.abrupt("return");case 10:return r=[],t.next=13,a.data.response.forEach((function(e){r.push(e.user_id.toString())}));case 13:return c=r.join(","),t.next=16,i.a.send("VKWebAppCallAPIMethod",{method:"users.get",request_id:"fetchUsers",params:{user_ids:c,fields:"photo_200",v:"5.124",access_token:n.access_token}});case 16:return l=t.sent,t.next=19,a.data.response.map((function(e,t){return e.vk=l.response[t],e}));case 19:o(a.data.response),f(!1);case 21:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.server,e.app_id]);var w={display:"flex",flexDirection:"row",paddingRight:10},E={display:"flex",alignItems:"center",justifyContent:"center",marginRight:20,fontSize:20};return r.a.createElement(h.Panel,{id:e.id},r.a.createElement(h.PanelHeader,null,"\u0422\u043e\u043f"),s&&r.a.createElement(h.PanelSpinner,null),!s&&r.a.createElement("div",null,r.a.createElement(h.Div,null,c&&c.map((function(e,t){return e.vk&&r.a.createElement(h.Link,{key:t},r.a.createElement(h.Cell,{size:48,description:"".concat((a=e.earned,a.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ").replace(".",","))," \ud83d\udcb0"),before:r.a.createElement("div",{style:w},r.a.createElement("div",{style:E},r.a.createElement("b",null,t+1)),r.a.createElement(h.Avatar,{src:e.vk.photo_200}))},e.vk.first_name," ",e.vk.last_name));var a})))))},A=function(e){var t=Object(n.useState)(null),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!0),u=Object(m.a)(l,2),s=u[0],f=u[1],E=Object(n.useState)(null),v=Object(m.a)(E,2),y=v[0];v[1];function g(){return(g=Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setModalData(null),t.next=3,i.a.send("VKWebAppAllowMessagesFromGroup",{group_id:e.group_id,key:Date.now().toString()}).catch((function(e){e.error_data.error_reason}));case 3:if(t.sent){t.next=6;break}return t.abrupt("return");case 6:e.setActiveModal("new withdraw");case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post("".concat(e.server,"/getWithdraws"),{sign:window.location.search});case 2:if(!(a=t.sent).data.error){t.next=5;break}return t.abrupt("return",window.location.reload());case 5:o(a.data.response),f(!1);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r.a.createElement(h.Panel,{id:e.id},r.a.createElement(h.PanelHeader,{left:r.a.createElement(O.a,null,r.a.createElement(w.Icon24Add,null)),onClick:function(){return function(){return g.apply(this,arguments)}()}},"\u0412\u044b\u0432\u043e\u0434"),s&&r.a.createElement(h.PanelSpinner,null),!s&&r.a.createElement("div",null,c&&c.length<1&&r.a.createElement(h.Footer,null,"\u0423 \u0412\u0430\u0441 \u0435\u0449\u0451 \u043d\u0435\u0442 \u0432\u044b\u043f\u043b\u0430\u0442."),c&&c.length>0&&r.a.createElement(h.Group,{separator:"hide"},r.a.createElement(h.CardGrid,null,c.map((function(e,t){return r.a.createElement(h.Card,{key:t,size:"l",mode:"shadow"},r.a.createElement("div",{style:{height:68}},r.a.createElement(h.Cell,{style:{marginTop:8},before:r.a.createElement(h.Avatar,null,r.a.createElement(w.Icon28ArrowUpOutline,null)),description:e.toWallet,indicator:e.is_deleted?"\u041e\u0442\u043c\u0435\u043d\u0435\u043d\u043e":e.is_success?r.a.createElement("span",{style:{color:"var(--dynamic_green)"}},"\u0423\u0441\u043f\u0435\u0448\u043d\u043e"):"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435"},"\u0412\u044b\u0432\u043e\u0434 \u043d\u0430 ","qiwi"===(a=e.toType)?"Qiwi":"webmoney"===a?"WebMoney":"yoomoney"===a?"YooMoney (\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0435\u043d\u044c\u0433\u0438)":"card"===a?"\u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0443\u044e \u043a\u0430\u0440\u0442\u0443":"null"," ",e.amount," \u0440\u0443\u0431.")));var a}))))),y)},_=a(162),S=function(e){var t=Object(n.useState)(null),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!0),u=Object(m.a)(l,2),s=u[0],f=u[1],E=Object(n.useState)(!0),v=Object(m.a)(E,2),y=v[0],g=v[1];return Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(d.a.mark((function t(){var a,n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post("".concat(e.server,"/getAffilateData"),{sign:window.location.search});case 2:if("object"===typeof(a=t.sent).data){t.next=5;break}return t.abrupt("return");case 5:if(!(a.data.response.length<1)){t.next=8;break}return o([]),t.abrupt("return",f(!1));case 8:return t.next=10,i.a.send("VKWebAppGetAuthToken",{app_id:e.app_id,scope:""});case 10:if(n=t.sent){t.next=13;break}return t.abrupt("return");case 13:return r=a.data.response.join(","),t.next=16,i.a.send("VKWebAppCallAPIMethod",{method:"users.get",request_id:"fetchUsers",params:{user_ids:r,fields:"photo_200",v:"5.124",access_token:n.access_token}});case 16:c=t.sent,o(c.response),f(!1);case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.server,e.app_id]),r.a.createElement(h.Panel,{id:e.id},r.a.createElement(h.PanelHeader,null,"\u0420\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430"),s&&r.a.createElement(h.PanelSpinner,null),!s&&r.a.createElement("div",null,r.a.createElement(h.Group,null,r.a.createElement(h.Footer,null,"\u0421 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u043e\u043c",r.a.createElement("br",null),"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 2\ud83d\udcb0"),r.a.createElement(h.CellButton,{before:r.a.createElement(w.Icon28ChainOutline,{width:24,height:24}),onClick:function(){i.a.send("VKWebAppCopyText",{text:"https://vk.com/app".concat(e.app_id,"#join").concat(e.fetchedUser.id)}),g(r.a.createElement(O.b,{layout:"vertical",onClose:function(){return g(null)},before:r.a.createElement(h.Avatar,{size:24,style:{background:"var(--dynamic_green)"}},r.a.createElement(_.a,{fill:"#fff",width:14,height:14}))},"\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430"))}},"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443")),y,c.length<1&&r.a.createElement(h.Footer,null,"\u0423 \u0412\u0430\u0441 \u043d\u0435\u0442 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u043e\u0432."),r.a.createElement(h.List,null,c.length>0&&c.map((function(e,t){return r.a.createElement(h.Link,{key:t,href:"https://vk.com/id"+e.id,target:"_blank"},r.a.createElement(h.Cell,{before:r.a.createElement(h.Avatar,{src:e.photo_200})},e.first_name," ",e.last_name))})))))},C="https://cs-hell.ru:443",M=function(){var e=Object(n.useState)("empty"),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("main"),l=Object(m.a)(o,2),s=l[0],f=l[1],E=Object(n.useState)(null),v=Object(m.a)(E,2),y=v[0],g=v[1],j=Object(n.useState)({}),O=Object(m.a)(j,2),_=O[0],M=O[1],P=Object(n.useState)(null),W=Object(m.a)(P,2),I=W[0],V=W[1],D=Object(n.useState)(null),K=Object(m.a)(D,2),T=K[0],U=K[1],B=Object(n.useState)(r.a.createElement(h.ScreenSpinner,null)),z=Object(m.a)(B,2),G=z[0],N=z[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:if(t=e.sent,V(t),N(null),c("home"),!window.location.hash.startsWith("#join")){e.next=9;break}return e.next=9,b.a.post("".concat(C,"/setAffilateUser"),{sign:window.location.search,user_id:Number(window.location.hash.replace("#join",""))});case 9:i.a.send("VKWebAppJoinGroup",{group_id:202160320});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var q=function(e){c("home"),f(e)};function L(){return(L=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(_.amount<1e4)){e.next=2;break}return e.abrupt("return",N(r.a.createElement(h.Alert,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"}],onClose:function(){return N(null)}},r.a.createElement("h2",null,"\u041e\u0448\u0438\u0431\u043a\u0430"),r.a.createElement("p",null,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0431\u043e\u043b\u0435\u0435, \u0447\u0435\u043c 10000",r.a.createElement("span",{"aria-label":"",role:"img"},"\ud83d\udcb0")))));case 2:if(!(_.amount>T.earned)){e.next=4;break}return e.abrupt("return",N(r.a.createElement(h.Alert,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"}],onClose:function(){return N(null)}},r.a.createElement("h2",null,"\u041e\u0448\u0438\u0431\u043a\u0430"),r.a.createElement("p",null,"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \ud83d\udcb0."))));case 4:return e.next=6,b.a.post("".concat(C,"/newWithdraw"),{sign:window.location.search,amount:_.amount,type:_.type,wallet:_.wallet});case 6:if(!e.sent.data.error){e.next=9;break}return e.abrupt("return",window.location.reload());case 9:i.a.send("VKWebAppSendPayload",{group_id:202160320,payload:{amount:_.amount,toType:_.type,toWallet:_.wallet}}),U(Object(u.a)(Object(u.a)({},T),{},{earned:T.earned-_.amount})),g(null),f("main"),f("withdraw");case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F,H=r.a.createElement(h.ModalRoot,{activeModal:y,onClose:function(){return g(null)}},r.a.createElement(h.ModalCard,{id:"new withdraw",onClose:function(){return g(null)},header:"\u041f\u043b\u0430\u0442\u0451\u0436\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430",actions:[{title:"\u0414\u0430\u043b\u0435\u0435",mode:"primary",action:function(){_&&_.type&&g("new withdraw wallet")}}]},r.a.createElement(h.Select,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043b\u0430\u0442\u0451\u0436\u043d\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443",onChange:function(e){return M(Object(u.a)(Object(u.a)({},_),{},{type:e.target.value}))}},r.a.createElement("option",{value:"qiwi"},"Qiwi"),r.a.createElement("option",{value:"webmoney",disabled:!0},"WebMoney"),r.a.createElement("option",{value:"yoomoney",disabled:!0},"YooMoney (\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0435\u043d\u044c\u0433\u0438)"),r.a.createElement("option",{value:"card",disabled:!0},"\u041d\u0430 \u043a\u0430\u0440\u0442\u0443"))),r.a.createElement(h.ModalCard,{id:"new withdraw wallet",onClose:function(){return g(null)},header:"\u0420\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b",actions:[{title:"\u0414\u0430\u043b\u0435\u0435",mode:"primary",action:function(){_&&_.wallet&&g("new withdraw amount")}}]},r.a.createElement(h.Input,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 ".concat(_&&(F=_.type,"qiwi"===F?"\u043f\u0440\u0438\u043c\u0435\u0440: 79969942334":"webmoney"===F?"WMR \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430":"yoomoney"===F?"\u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 YooMoney":"card"===F?"\u043d\u043e\u043c\u0435\u0440 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u044b":"null")),onChange:function(e){return M(Object(u.a)(Object(u.a)({},_),{},{wallet:e.target.value}))}})),r.a.createElement(h.ModalCard,{id:"new withdraw amount",onClose:function(){return g(null)},header:"\u0421\u0443\u043c\u043c\u0430",caption:"1000 \ud83d\udcb0 = 1 \u0440\u0443\u0431.",actions:[{title:"\u0414\u0430\u043b\u0435\u0435",mode:"primary",action:function(){_&&Number(_.amount)>0&&function(){L.apply(this,arguments)}()}}]},r.a.createElement(h.Input,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0432 \ud83d\udcb0",type:"number",onChange:function(e){return M(Object(u.a)(Object(u.a)({},_),{},{amount:Number(e.target.value)}))}})));return r.a.createElement(h.Epic,{activeStory:s,tabbar:"empty"!==a&&r.a.createElement(h.Tabbar,null,r.a.createElement(h.TabbarItem,{onClick:function(){return q("scoreboard")},selected:"scoreboard"===s,text:"\u0422\u043e\u043f"},r.a.createElement(w.Icon28PollSquareOutline,null)),r.a.createElement(h.TabbarItem,{onClick:function(){return q("withdraw")},selected:"withdraw"===s,text:"\u0412\u044b\u0432\u043e\u0434"},r.a.createElement(w.Icon28ArrowUpOutline,null)),r.a.createElement(h.TabbarItem,{onClick:function(){return q("main")},selected:"main"===s,text:"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c"},r.a.createElement(w.Icon28WalletOutline,null)),r.a.createElement(h.TabbarItem,{onClick:function(){return q("affilate")},selected:"affilate"===s,text:"\u0420\u0435\u0444\u043a\u0430"},r.a.createElement(w.Icon28Users3Outline,null)))},r.a.createElement(h.View,{id:"main",activePanel:a,popout:G,header:"empty"!==a},r.a.createElement(h.Panel,{id:"empty",separator:!1}),r.a.createElement(k,{id:"home",fetchedUser:I,fetchedData:T,setData:U,setActivePanel:c,server:C})),r.a.createElement(h.View,{id:"scoreboard",activePanel:a,popout:G,header:"empty"!==a},r.a.createElement(x,{id:"home",fetchedUser:I,setActivePanel:c,server:C,app_id:7739119})),r.a.createElement(h.View,{id:"withdraw",activePanel:a,popout:G,modal:H,header:"empty"!==a},r.a.createElement(A,{id:"home",fetchedUser:I,fetchedData:T,setData:U,setActivePanel:c,setActiveModal:g,setModalData:M,setPopout:N,server:C,group_id:202160320})),r.a.createElement(h.View,{id:"affilate",activePanel:a,popout:G,header:"empty"!==a},r.a.createElement(S,{id:"home",fetchedUser:I,setActivePanel:c,server:C,app_id:7739119})))};i.a.send("VKWebAppInit"),i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");if(r.value=n.scheme?n.scheme:"space_gray",document.body.attributes.setNamedItem(r),i.a.supports("VKWebAppSetViewSettings")){var c="space_gray"===n.scheme;i.a.send("VKWebAppSetViewSettings",{status_bar_style:c?"light":"dark",action_bar_color:c?"#ffffff":"#000000",navigation_bar_color:c?"#fff":"#000"})}}})),o.a.render(r.a.createElement(M,null),document.getElementById("root"))},172:function(e,t,a){e.exports=a.p+"static/media/watermark.ab62a621.png"},250:function(e,t,a){e.exports=a(1420)},433:function(e,t,a){}},[[250,1,2]]]);