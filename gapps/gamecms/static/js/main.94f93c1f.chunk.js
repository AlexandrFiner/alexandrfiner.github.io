(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,a){e.exports=a(230)},201:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);a(165),a(190);var n=a(0),r=a.n(n),o=a(49),i=a.n(o),c=a(26),s=a(100),l=a(20),u=a(9),p=a(6),d=a(43),h=a(34),m=a.n(h),v=function(e){var t=me.getState().router.activePanel,a=me.getState().router.panelsHistory;return"undefined"!==typeof a[e]&&(t=a[e][a[e].length-1]),t},b={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},f={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},y={forms:[]},O=Object(c.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],n=a.scrollLeft,r=a.scrollTop;return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:n,y:r}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel;window.history.pushState(null,null);var r=e.panelsHistory[a]||[],o=e.viewsHistory[e.activeStory]||[],i=o.indexOf(a);return-1!==i&&o.splice(i,1),-1===r.indexOf(n)&&(r=[].concat(Object(d.a)(r),[n])),r.length>1&&m.a.send("VKWebAppEnableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,r)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(d.a)(o),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var c=e.viewsHistory[t.payload.story]||[t.payload.story],s=e.storiesHistory,l=c[c.length-1],h=e.panelsHistory[l]||[t.payload.initial_panel],v=h[h.length-1];if(t.payload.story===e.activeStory)if(h.length>1){var f=h.shift();v=(h=[f])[h.length-1]}else if(c.length>1){var y=c.shift();l=(c=[y])[c.length-1],v=(h=e.panelsHistory[l])[h.length-1]}return t.payload.story===e.activeStory&&1===h.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===s.indexOf(t.payload.story)||s[0]===t.payload.story&&s[s.length-1]!==t.payload.story)&&(s=[].concat(Object(d.a)(s),[t.payload.story])),Object(p.a)({},e,{activeStory:t.payload.story,activeView:l,activePanel:v,storiesHistory:s,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},l,c)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},l,h)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var O=e.activeView,g=e.activePanel,w=e.activeStory,E=e.popouts;if(E[O])return E[O]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:E})});var j=e.modalHistory[O];if(void 0!==j&&0!==j.length){var S=j[j.length-2]||null;return null===S?j=[]:-1!==j.indexOf(S)?j=j.splice(0,j.indexOf(S)+1):j.push(S),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},O,S)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},O,j))})}var _=e.panelsHistory[O]||[],k=e.viewsHistory[e.activeStory]||[],H=e.storiesHistory;if(_.length>1)_.pop(),g=_[_.length-1];else if(k.length>1){k.pop(),O=k[k.length-1];var P=e.panelsHistory[O];g=P[P.length-1]}else if(H.length>1){H.pop(),w=H[H.length-1],O=e.viewsHistory[w][e.viewsHistory[w].length-1];var x=e.panelsHistory[O];g=x.length>1?x[x.length-1]:x[0]}else m.a.send("VKWebAppClose",{status:"success"}).then(function(e){return e}).catch(function(e){return e});return 1===_.length&&m.a.send("VKWebAppDisableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(p.a)({},e,{activeView:O,activePanel:g,activeStory:w,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,k)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,_))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var A=t.payload.id||null,D=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===A?D=[]:-1!==D.indexOf(A)?D=D.splice(0,D.indexOf(A)+1):D.push(A),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,A)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,D))});case"CLOSE_MODAL":var T=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,C=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===T?C=[]:-1!==C.indexOf(T)?C=C.splice(0,C.indexOf(T)+1):C.push(T),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,T)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,C))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),g=a(102),w=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},E=function(e,t){return{type:"SET_PAGE",payload:{view:e,panel:t}}},j=function(){return{type:"GO_BACK"}},S=function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},_=function(){return{type:"CLOSE_POPOUT"}},k=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},H=function(){return{type:"CLOSE_MODAL"}},P=(a(200),a(201),a(27)),x=a(28),A=a(30),D=a(29),T=a(31),C=a(3),V=a(17),L=a.n(V),M=a(23),B=a(21),z=a.n(B),F=a(231),I=a(232),N=a(233),U=a(234),K=a(235),W=a(33),R=a.n(W),G=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(A.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(o)))).state={course:100,logo:null,disableButton:!0,snackbar:null,isLoading:!0,profileData:{status:!1,shilings:0,shilings_bonus:0}},a.reload=Object(M.a)(L.a.mark(function e(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,a.getFetch();case 3:case"end":return e.stop()}},e)})),a.viewAd=Object(M.a)(L.a.mark(function e(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(z.a.supports("VKWebAppShowNativeAds")){e.next=2;break}return e.abrupt("return");case 2:return a.setState({disableButton:!0}),setTimeout(function(){return a.setState({disableButton:!1})},2e3),e.abrupt("return",z.a.send("VKWebAppShowNativeAds",{ad_format:"preloader"}).then(function(){var e=Object(M.a)(L.a.mark(function e(t){var n;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.result){e.next=3;break}return a.setState({snackbar:r.a.createElement(C.s,{onClose:function(){return a.setState({snackbar:null})},before:r.a.createElement(C.a,{size:28},r.a.createElement(F.a,{width:28,height:28}))},"\u0420\u0435\u043a\u043b\u0430\u043c\u0430 \u043d\u0435 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0430, \u0431\u043e\u043d\u0443\u0441 \u043d\u0435 \u0432\u044b\u0434\u0430\u043d.")}),e.abrupt("return",!1);case 3:return(n=new FormData).append("action","viewAd"),e.next=7,R.a.post("".concat(a.props.server),n,a.props.server_confg);case 7:return a.setState({profileData:{status:1,shilings_bonus:a.state.profileData.shilings_bonus+1}}),e.abrupt("return",!0);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(){return a.setState({snackbar:r.a.createElement(C.s,{onClose:function(){return a.setState({snackbar:null})},before:r.a.createElement(C.a,{size:28},r.a.createElement(F.a,{width:28,height:28}))},"\u0420\u0435\u043a\u043b\u0430\u043c\u0430 \u043d\u0435 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0430, \u0431\u043e\u043d\u0443\u0441 \u043d\u0435 \u0432\u044b\u0434\u0430\u043d.")}),!1}));case 6:case"end":return e.stop()}},e)})),a.transfer=Object(M.a)(L.a.mark(function e(){var t,n;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("action","withdraw"),e.next=4,R.a.post("".concat(a.props.server),t,a.props.server_confg);case 4:"success"===(n=e.sent).data.status?(a.setState({snackbar:r.a.createElement(C.s,{onClose:function(){return a.setState({snackbar:null})},before:r.a.createElement(C.a,{size:28},r.a.createElement(I.a,{width:28,height:28}))},"\u0411\u0430\u043b\u043b\u044b \u0431\u044b\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0432\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442")}),a.setState({profileData:{status:1,shilings_bonus:0}})):a.setState({snackbar:r.a.createElement(C.s,{onClose:function(){return a.setState({snackbar:null})},before:r.a.createElement(C.a,{size:28},r.a.createElement(F.a,{width:28,height:28}))},n.data.message)});case 6:case"end":return e.stop()}},e)})),a}return Object(T.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getFetch(),setTimeout(function(){return e.setState({disableButton:!1})},1e3)}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&this.getFetch()}},{key:"getFetch",value:function(){var e=Object(M.a)(L.a.mark(function e(){var t,a;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("action","getData"),e.next=4,R.a.post("".concat(this.props.server),t,this.props.server_confg);case 4:"success"===(a=e.sent).data.status&&this.setState({course:a.data.course,logo:a.data.logo,profileData:{status:1,shilings_bonus:a.data.shilings_bonus}}),this.setState({isLoading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,a=this.props,n=a.id;a.setPage,a.withoutEpic;return r.a.createElement(C.m,{id:n},r.a.createElement(C.n,{left:r.a.createElement(C.o,null,r.a.createElement(N.a,{height:24,width:24})),onClick:function(){return t.props.openModal("MODAL_PAGE_BOTS_LIST")}},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),this.state.isLoading&&r.a.createElement(C.p,null),!this.state.isLoading&&this.state.profileData.status&&r.a.createElement("div",null,r.a.createElement(C.g,null,r.a.createElement(C.q,{stretched:!0,icon:r.a.createElement("img",{src:this.state.logo}),action:z.a.supports("VKWebAppShowNativeAds")?r.a.createElement("div",null,r.a.createElement(C.c,null,r.a.createElement(C.b,{stretched:!0,before:r.a.createElement(U.a,null),size:"l",onClick:function(){return t.viewAd()},disabled:this.state.disableButton},"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043e\u0447\u043a\u0438")),r.a.createElement(C.c,null,r.a.createElement(C.b,(e={stretched:!0,size:"l",mode:"secondary"},Object(u.a)(e,"size","l"),Object(u.a)(e,"onClick",function(){return t.transfer()}),e),"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u043d\u0430 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"))):r.a.createElement(C.b,{stretched:!0,mode:"outline",size:"l",disabled:!0},"\u0414\u0430\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),header:"\u041f\u043e\u043b\u0443\u0447\u0438 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0443\u044e \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044e!"},"\u0417\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 1 \u043e\u0447\u043a\u043e",r.a.createElement("br",null),this.state.course," \u043e\u0447\u043a\u043e\u0432 = 1 \u0440\u0443\u0431\u043b\u044c"),r.a.createElement(C.g,null,r.a.createElement("center",null,r.a.createElement(C.w,{level:"2",weight:"regular",style:{marginTop:16,marginBottom:4,color:"var(--dynamic_gray)"}},"\u041e\u0447\u043a\u0438"),r.a.createElement(C.w,{level:"1",weight:"bold",style:{marginBottom:16,color:"var(--text_primary)"}},this.state.profileData.shilings_bonus))))),!this.state.isLoading&&!this.state.profileData.status&&r.a.createElement("div",null,r.a.createElement(C.g,{style:{height:"1000px"}},r.a.createElement(C.q,{icon:r.a.createElement(K.a,{width:56,height:56,fill:"rgb(255, 0, 4)"}),header:"\u0412\u044b \u043d\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043b\u0438 \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0412\u041a \u043a \u043f\u0440\u043e\u0444\u0438\u043b\u044e \u0444\u043e\u0440\u0443\u043c\u0430",action:r.a.createElement(C.b,{size:"m",onClick:this.reload,mode:"outline"},"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437")}))),this.state.snackbar)}}]),t}(r.a.Component),Y={setPage:E,goBack:j,openPopout:S,closePopout:_,openModal:k},q=Object(l.b)(null,Y)(G),J=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(A.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,profileData:{status:!1,login:null,avatar:null,shilings:0}},a.reload=Object(M.a)(L.a.mark(function e(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,a.getFetch();case 3:case"end":return e.stop()}},e)})),a}return Object(T.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.getFetch()}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&this.getFetch()}},{key:"getFetch",value:function(){var e=Object(M.a)(L.a.mark(function e(){var t,a;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("action","getData"),e.next=4,R.a.post("".concat(this.props.server),t,this.props.server_confg);case 4:"success"==(a=e.sent).data.status&&this.setState({profileData:{status:1,login:a.data.login,avatar:a.data.avatar,shilings:a.data.shilings}}),this.setState({isLoading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.id;e.setPage,e.withoutEpic;return r.a.createElement(C.m,{id:t},r.a.createElement(C.n,null,"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),this.state.isLoading&&r.a.createElement(C.p,null),!this.state.isLoading&&!this.state.profileData.status&&r.a.createElement("div",null,r.a.createElement(C.g,{style:{height:"1000px"}},r.a.createElement(C.q,{icon:r.a.createElement(K.a,{width:56,height:56,fill:"rgb(255, 0, 4)"}),header:"\u0412\u044b \u043d\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043b\u0438 \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0412\u041a \u043a \u043f\u0440\u043e\u0444\u0438\u043b\u044e \u0444\u043e\u0440\u0443\u043c\u0430",action:r.a.createElement(C.b,{size:"m",onClick:this.reload,mode:"outline"},"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437")}))),!this.state.isLoading&&this.state.profileData.status&&r.a.createElement("div",null,r.a.createElement(C.g,null,r.a.createElement(C.f,{style:{margin:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:32}},r.a.createElement(C.a,{size:96,src:this.state.profileData.avatar}),r.a.createElement(C.w,{style:{marginBottom:8,marginTop:20},level:"2",weight:"medium"},this.state.profileData.login),r.a.createElement(C.v,{style:{marginBottom:24,color:"var(--text_secondary)"}},"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(C.b,{size:"m",mode:"secondary",disabled:"true"},"\u0421\u043a\u043e\u0440\u043e \u0442\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0447\u0442\u043e-\u0442\u043e \u0435\u0449\u0435..")))))}}]),t}(r.a.Component),Q={setPage:E,goBack:j,openPopout:S,closePopout:_,openModal:k},X=Object(l.b)(null,Q)(J),Z=function(e){function t(){return Object(P.a)(this,t),Object(A.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id;e.setPage,e.withoutEpic;return r.a.createElement(C.m,{id:t},r.a.createElement(C.n,null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"),r.a.createElement("div",null,r.a.createElement("img",{className:"g_sticker",src:"https://cs-legenda.ru/files/stickers/stich/8752.png"})))}}]),t}(r.a.Component),$={setPage:E,goBack:j,openPopout:S,closePopout:_,openModal:k},ee=Object(l.b)(null,$)(Z),te=a(236),ae=a(237),ne=a(111),re=a.n(ne),oe=a(50),ie=a.n(oe),ce=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(A.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).state={users:null,isLoading:!0},a}return Object(T.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&this.getUsers()}},{key:"getUsers",value:function(){var e=Object(M.a)(L.a.mark(function e(){var t,a;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("app_id",this.props.app_id),t.append("action","getTop"),e.next=5,R.a.post("".concat(this.props.server),t,this.props.server_confg);case 5:"success"==(a=e.sent).data.status&&this.setState({isLoading:!1,users:a.data.users});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=(e.openModal,e.platform);return r.a.createElement(C.j,{id:t,header:r.a.createElement(C.k,{left:n!==C.h&&r.a.createElement(C.o,{onClick:a},r.a.createElement(ie.a,null)),right:n===C.h&&r.a.createElement(C.o,{onClick:a},r.a.createElement(re.a,null))},"\u0422\u043e\u043f 5 \u0438\u0433\u0440\u043e\u043a\u043e\u0432 \u043f\u043e \u043e\u0447\u043a\u0430\u043c"),onClose:a,settlingHeight:80},this.state.isLoading&&r.a.createElement("div",null,r.a.createElement(C.i,null,r.a.createElement(C.c,{description:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435..",before:r.a.createElement(C.a,{size:40})},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),r.a.createElement(C.c,{description:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435..",before:r.a.createElement(C.a,{size:40})},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),r.a.createElement(C.c,{description:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435..",before:r.a.createElement(C.a,{size:40})},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),r.a.createElement(C.c,{description:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435..",before:r.a.createElement(C.a,{size:40})},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),r.a.createElement(C.c,{description:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435..",before:r.a.createElement(C.a,{size:40})},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"))),!this.state.isLoading&&r.a.createElement("div",null,r.a.createElement(C.i,null,this.state.users.map(function(e,t){return r.a.createElement(C.c,{key:t,description:e.score,before:r.a.createElement(C.a,{size:40,src:e.avatar})},e.name)}))))}}]),t}(r.a.Component),se={openModal:k},le=Object(C.y)(Object(l.b)(null,se)(ce)),ue="http://a0513794.xsph.ru/api.php"+window.location.search,pe={headers:{"Content-Type":"application/x-www-form-urlencoded"}},de=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(A.a)(this,Object(D.a)(t).call(this,e))).state={balance:100},a.lastAndroidBackAction=0,a}return Object(T.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)(function(e){return m.a.subscribe(function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(m.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))}),m.a.send("VKWebAppInit",{}).then(function(e){return e}).catch(function(e){return e})}),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a()):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.activeView,o=n.activeStory,i=n.activePanel,c=n.scrollPosition;if(e.activeView!==r||e.activePanel!==i||e.activeStory!==o){var s=c[o+"_"+r+"_"+i]||0;window.scroll(0,s)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.setStory,n=e.closeModal,o=e.popouts,i=e.activeView,c=e.activeStory,s=e.activeModals,l=e.panelsHistory,u=e.colorScheme,p=void 0===l[i]?[i]:l[i],d=void 0===o[i]?null:o[i],h=void 0===s[i]?null:s[i],m=r.a.createElement(C.l,{activeModal:h},r.a.createElement(le,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return n()},server:ue,server_confg:pe}));return r.a.createElement(C.d,{isWebView:!0,scheme:u},r.a.createElement(C.e,{activeStory:c,tabbar:r.a.createElement(C.t,null,r.a.createElement(C.u,{onClick:function(){return a("home","base")},selected:"home"===c,text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},r.a.createElement(te.a,null)),r.a.createElement(C.u,{onClick:function(){return a("profile","base")},selected:"profile"===c,text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},r.a.createElement(ae.a,null)))},r.a.createElement(C.r,{id:"home",activeView:i,popout:d},r.a.createElement(C.x,{id:"home",modal:m,activePanel:v("home"),history:p,onSwipeBack:function(){return t()}},r.a.createElement(q,{id:"base",withoutEpic:!1,server:ue,server_confg:pe}))),r.a.createElement(C.r,{id:"profile",activeView:i,popout:d},r.a.createElement(C.x,{id:"profile",modal:m,activePanel:v("profile"),history:p,onSwipeBack:function(){return t()}},r.a.createElement(X,{id:"base",withoutEpic:!1,server:ue,server_confg:pe}))),r.a.createElement(C.r,{id:"news",activeView:i,popout:d},r.a.createElement(C.x,{id:"news",modal:m,activePanel:v("news"),history:p,onSwipeBack:function(){return t()}},r.a.createElement(ee,{id:"base",withoutEpic:!1,server:ue,server_confg:pe})))))}}]),t}(r.a.Component);var he=Object(l.b)(function(e){return{activeView:e.router.activeView,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}},function(e){return Object(p.a)({dispatch:e},Object(c.bindActionCreators)({setStory:w,goBack:j,closeModal:H},e))})(de);a.d(t,"store",function(){return me});var me=Object(c.createStore)(O,Object(g.composeWithDevTools)(Object(c.applyMiddleware)(s.a)));me.dispatch(w("home","base")),i.a.render(r.a.createElement(l.a,{store:me},r.a.createElement(he,null)),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.94f93c1f.chunk.js.map