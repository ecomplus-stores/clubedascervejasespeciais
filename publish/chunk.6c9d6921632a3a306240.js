(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{225:function(o,t,i){"use strict";var e=i(26),a=i(35),s={name:"AAlert",props:{canShow:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},data:()=>({count:1}),computed:{i19close:()=>Object(a.a)(e.P)},watch:{canShow(o){o&&this.count++}}},n=i(46),r=Object(n.a)(s,(function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("div",[i("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[o.canShow?i("div",{key:o.count},[o._m(0)]):o._e()])],1)}),[function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("div",{staticClass:"alert alert-dismissible fade show",class:"alert-"+o.variant,attrs:{role:"alert"}},[o._t("default"),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":o.i19close},on:{click:function(t){return o.$emit("dismiss")}}},[i("span",{attrs:{"aria-hidden":"true"}},[o._v("×")])])],2)}],!1,null,null,null);t.a=r.exports},227:function(o,t,i){var e=i(239);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);(0,i(160).default)("48117795",e,!0,{})},236:function(o,t,i){"use strict";var e={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:o,zIndex:t,transitionMs:i,opacity:e}=this;return{top:o,transition:`opacity ${i}ms linear`,opacity:e,zIndex:t}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth=`${document.body.offsetWidth}px`,document.body.style.overflow="hidden"}},watch:{isVisible(o){o?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(o){0===o?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},a=(i(238),i(46)),s=Object(a.a)(e,(function(){var o=this,t=o.$createElement;return(o._self._c||t)("div",{staticClass:"backdrop",style:o.style,on:{click:o.hide}})}),[],!1,null,null,null);t.a=s.exports},238:function(o,t,i){"use strict";i(227)},239:function(o,t,i){(t=i(159)(!0)).push([o.i,".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}","",{version:3,sources:["ABackdrop.scss"],names:[],mappings:"AAAA,UAAU,4BAA4B,CAAC,cAAc,CAAC,YAAY,CAAC,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,UAAU,CAAC,WAAW,CAAC,YAAY",file:"ABackdrop.scss",sourcesContent:[".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}"]}]),o.exports=t},285:function(o,t,i){var e=i(353);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);(0,i(160).default)("2101d4c1",e,!0,{})},352:function(o,t,i){"use strict";i(285)},353:function(o,t,i){(t=i(159)(!0)).push([o.i,".login-modal__box{border-radius:0;box-sizing:border-box;left:0;position:fixed;top:0;width:100vw;z-index:1090}@media(min-width:410px){.login-modal__box{border-radius:var(--border-radius);left:50%;margin-left:-200px;top:var(--spacer-4);width:400px}}@media(min-height:400px){.login-modal__box{top:15%}}.login-modal .alert{margin-bottom:var(--spacer-3)}.login-modal__logout{margin-top:var(--spacer-3)}.login-modal__btn{color:#fff;line-height:var(--line-height-lg);min-width:15rem;padding:.7rem;text-align:left}.login-modal__btn:hover{color:#fff}.login-modal__btn:focus{box-shadow:none}.login-modal__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login-modal__btn--facebook:hover{background:#274480;border-color:#274480}.login-modal__btn--google{background:#cb4023;border-color:#be3419}.login-modal__btn--google:hover{background:#c1361a;border-color:#c1361a}.login-modal__btn--windowslive{background:#329ffc;border-color:#2996f2}.login-modal__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login-modal__btn-icon{display:inline-block;margin-right:var(--spacer-1);text-align:center;width:1.4rem}.login-modal__back{display:block;padding-left:.3rem;padding-right:.3rem}.login-modal__back:focus{box-shadow:none}.login-modal__visitor-info{color:var(--text-muted);font-size:var(--font-size-sm);margin-top:var(--spacer-2);text-align:center}","",{version:3,sources:["LoginModal.scss"],names:[],mappings:"AAAA,kBAAkB,eAAe,CAAC,qBAAqB,CAAC,MAAM,CAAC,cAAc,CAAC,KAAK,CAAC,WAAW,CAAC,YAAY,CAAC,wBAAwB,kBAAkB,kCAAkC,CAAC,QAAQ,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,WAAW,CAAC,CAAC,yBAAyB,kBAAkB,OAAO,CAAC,CAAC,oBAAoB,6BAA6B,CAAC,qBAAqB,0BAA0B,CAAC,kBAAkB,UAAU,CAAC,iCAAiC,CAAC,eAAe,CAAC,aAAa,CAAC,eAAe,CAAC,wBAAwB,UAAU,CAAC,wBAAwB,eAAe,CAAC,4BAA4B,kBAAkB,CAAC,oBAAoB,CAAC,kCAAkC,kBAAkB,CAAC,oBAAoB,CAAC,0BAA0B,kBAAkB,CAAC,oBAAoB,CAAC,gCAAgC,kBAAkB,CAAC,oBAAoB,CAAC,+BAA+B,kBAAkB,CAAC,oBAAoB,CAAC,qCAAqC,kBAAkB,CAAC,oBAAoB,CAAC,uBAAuB,oBAAoB,CAAC,4BAA4B,CAAC,iBAAiB,CAAC,YAAY,CAAC,mBAAmB,aAAa,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,yBAAyB,eAAe,CAAC,2BAA2B,uBAAuB,CAAC,6BAA6B,CAAC,0BAA0B,CAAC,iBAAiB",file:"LoginModal.scss",sourcesContent:[".login-modal__box{border-radius:0;box-sizing:border-box;left:0;position:fixed;top:0;width:100vw;z-index:1090}@media(min-width:410px){.login-modal__box{border-radius:var(--border-radius);left:50%;margin-left:-200px;top:var(--spacer-4);width:400px}}@media(min-height:400px){.login-modal__box{top:15%}}.login-modal .alert{margin-bottom:var(--spacer-3)}.login-modal__logout{margin-top:var(--spacer-3)}.login-modal__btn{color:#fff;line-height:var(--line-height-lg);min-width:15rem;padding:.7rem;text-align:left}.login-modal__btn:hover{color:#fff}.login-modal__btn:focus{box-shadow:none}.login-modal__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login-modal__btn--facebook:hover{background:#274480;border-color:#274480}.login-modal__btn--google{background:#cb4023;border-color:#be3419}.login-modal__btn--google:hover{background:#c1361a;border-color:#c1361a}.login-modal__btn--windowslive{background:#329ffc;border-color:#2996f2}.login-modal__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login-modal__btn-icon{display:inline-block;margin-right:var(--spacer-1);text-align:center;width:1.4rem}.login-modal__back{display:block;padding-left:.3rem;padding-right:.3rem}.login-modal__back:focus{box-shadow:none}.login-modal__visitor-info{color:var(--text-muted);font-size:var(--font-size-sm);margin-top:var(--spacer-2);text-align:center}"]}]),o.exports=t},444:function(o,t,i){"use strict";i.r(t);var e=i(27),a=(i(6),i(26)),s=i(35),n=i(28),r=i(173),l=i(225),c=i(236),d={name:"LoginModal",components:{ALink:r.a,AAlert:l.a,ABackdrop:c.a},props:{isVisible:{type:Boolean,default:!0},getGreetingsMsg:Function,accountUrl:{type:String,default:"/app/#/account/"},ordersUrl:{type:String,default:"/app/#/account/orders"},favoritesUrl:{type:String,default:"/app/#/account/favorites"},ecomPassport:{type:Object,default:()=>n.a}},data:()=>({isLoading:!1,isWaitingPopup:!1,isLogged:!1,email:"",name:"",oauthProviders:[],isLoginForm:!1,hasLoginError:!1,hasNoProfileFound:!1,isWrongCode:!1}),computed:{i19close:()=>Object(s.a)(a.P),i19continueLoginOnPopup:()=>Object(s.a)(a.Z),i19email:()=>Object(s.a)(a.ob).toLowerCase(),i19guestCheckoutMsg:()=>Object(s.a)(a.Kb),i19loginErrorMsg:()=>Object(s.a)(a.fc),i19login:()=>Object(s.a)(a.ec),i19logout:()=>Object(s.a)(a.hc),i19myAccount:()=>Object(s.a)(a.oc),i19myFavorites:()=>Object(s.a)(a.pc),i19myOrders:()=>Object(s.a)(a.qc),i19noProfileFoundWithEmail:()=>Object(s.a)(a.zc),i19signInWith:()=>Object(s.a)(a.Td),i19signInWithAnotherEmail:()=>Object(s.a)(a.Ud),i19signUpWith:()=>Object(s.a)(a.Vd),greetings(){return"function"==typeof this.getGreetingsMsg?this.getGreetingsMsg(this.name):`${Object(s.a)(a.Mb)} ${this.name||Object(s.a)(a.se)}`}},methods:{hide(){this.$emit("update:is-visible",!1)},update(){const{checkLogin:o,getCustomerName:t}=this.ecomPassport;this.name=t(),this.isLogged=o(),this.email="",this.isWaitingPopup=!1},waitPromise(o){this.isLoading=!0,o.catch(console.error).finally((()=>{this.isLoading=!1}))},setOauthProviders(){const o=this.ecomPassport.fetchOauthProviders().then((o=>{let{host:t,baseUri:i,oauthPath:e,providers:a}=o;const s=[];for(const o in a)if(a[o]){const{faIcon:n,providerName:r}=a[o];let l=t+i+o+e;const c="object"==typeof window&&window.sessionStorage.getItem("ecomReferral");c&&(l+=`?referral=${c}`),s.push({link:l,faIcon:n,provider:o,providerName:r})}this.oauthProviders=s})).catch((o=>{throw this.presetOauthProviders(),o}));return this.waitPromise(o),o},presetOauthProviders(){this.oauthProviders=[{faIcon:"fa-facebook-f",providerName:"Facebook",provider:"facebook"},{faIcon:"fa-google",providerName:"Google",provider:"google"},{faIcon:"fa-windows",providerName:"Windows",provider:"windowslive"}]},openOauthPopup(o,t){if(this.hasLoginError=!1,o)this.ecomPassport.popupOauthLink(o),this.isWaitingPopup=!0;else{const o=this.setOauthProviders().then((()=>{const o=this.oauthProviders.find((o=>o.provider===t));this.openOauthPopup(o,t)})).catch((o=>{throw this.hasLoginError=!0,o}));this.waitPromise(o)}},submitEmail(){this.isLoginForm=!1;const o=this.ecomPassport.fetchLogin(this.email.toLowerCase()).catch((o=>{const{response:t}=o;if(!t||403!==t.status)throw setTimeout((()=>{this.hasLoginError=!0}),100),o;this.hasNoProfileFound=!0}));this.waitPromise(o)},logout(){this.ecomPassport.logout()}},watch:{hasNoProfileFound(o){!1===o&&(this.email=""),this.isLoginForm=!o},isLoginForm(o){this.hasLoginError=!1,o&&(this.isWaitingPopup=!1,this.$nextTick((()=>{setTimeout((()=>{this.$refs.input.focus()}),200)})))}},mounted(){["login","logout"].forEach((o=>{this.ecomPassport.on(o,(t=>{this.update(),this.$emit(o,t)}))})),this.update(),this.setOauthProviders()}},A=(i(352),i(46)),u=Object(A.a)(d,(function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("div",{staticClass:"login-modal"},[i("a-backdrop",{attrs:{"is-visible":o.isVisible},on:{hide:o.hide}}),i("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:o.isVisible,expression:"isVisible"}],staticClass:"login-modal__box card"},[o._t("header",(function(){return[i("div",{staticClass:"login-modal__header card-header"},[o._v(" "+o._s(o.greetings)+" "),i("button",{staticClass:"close",attrs:{type:"button","aria-label":o.i19close},on:{click:o.hide}},[i("span",{attrs:{"aria-hidden":"true"}},[o._v("×")])])])]})),i("div",{staticClass:"login-modal__body card-body"},[o.hasLoginError?i("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[o._v(" "+o._s(o.i19loginErrorMsg)+" ")]):o._e(),i("transition-group",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated position-absolute fadeOut faster"}},[o.isLoading?i("div",{key:"waiting"},[i("div",{staticClass:"spinner-border m-3",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[o._v("Loading...")])])]):o.isLogged?i("div",{key:"logged"},[i("div",{staticClass:"list-group list-group-flush"},[i("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:o.ordersUrl}},[o._v(" "+o._s(o.i19myOrders)+" ")]),i("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:o.accountUrl}},[o._v(" "+o._s(o.i19myAccount)+" ")]),i("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:o.favoritesUrl}},[o._v(" "+o._s(o.i19myFavorites)+" ")])],1),i("button",{staticClass:"login-modal__logout btn btn-block btn-danger",attrs:{type:"button"},on:{click:o.logout}},[i("i",{staticClass:"i-sign-out"}),o._v(" "+o._s(o.i19logout)+" ")])]):o.isLoginForm?i("div",{key:"form"},[i("form",{on:{submit:function(t){return t.preventDefault(),o.submitEmail.apply(null,arguments)}}},[i("div",{staticClass:"form-group"},[i("button",{staticClass:"login-modal__back btn",attrs:{type:"button"},on:{click:function(t){o.isLoginForm=!1}}},[i("i",{staticClass:"i-arrow-left"})]),i("label",{attrs:{for:"login-modal-email"}},[o._v(" "+o._s(o.i19signInWith+" "+o.i19email)+" ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:o.email,expression:"email"}],ref:"input",staticClass:"form-control",attrs:{type:"email",id:"login-modal-email",placeholder:"email@mail.com",required:""},domProps:{value:o.email},on:{input:function(t){t.target.composing||(o.email=t.target.value)}}})]),i("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[o._v(" "+o._s(o.i19login)+" ")])])]):i("div",{key:"oauth"},[!o.isWaitingPopup&&o.hasNoProfileFound?i("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[o._v(" "+o._s(o.i19noProfileFoundWithEmail)+" "),i("b",[o._v(o._s(o.email))]),o._v(". "),i("br"),i("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),o.hasNoProfileFound=!1}}},[o._v(" "+o._s(o.i19signInWithAnotherEmail)+" ")])]):o._e(),i("a-alert",{attrs:{"can-show":o.isWaitingPopup,variant:"info"}},[o._v(" "+o._s(o.i19continueLoginOnPopup)+". ")]),o._l(o.oauthProviders,(function(t){var e=t.link,a=t.faIcon,s=t.providerName,n=t.provider;return i("button",{key:n,staticClass:"login-modal__btn btn btn-block",class:"login-modal__btn--"+n,attrs:{type:"button"},on:{click:function(t){return o.openOauthPopup(e,n)}}},[i("span",{staticClass:"login-modal__btn-icon"},[i("i",{class:"fab "+a})]),o._v(" "+o._s(o.hasNoProfileFound?o.i19signUpWith:o.i19signInWith)+" "+o._s(s)+" ")])})),o.hasNoProfileFound?i("div",{staticClass:"login-modal__visitor-info"},[o._v(" "+o._s(o.i19guestCheckoutMsg)+" ")]):i("button",{key:"email",staticClass:"login-modal__btn btn btn-block btn-secondary",attrs:{type:"button"},on:{click:function(t){o.isLoginForm=!0}}},[i("span",{staticClass:"login-modal__btn-icon"},[i("i",{staticClass:"i-envelope"})]),o._v(" "+o._s(o.i19signInWith+" "+o.i19email)+" ")])],2)])],1)],2)])],1)}),[],!1,null,null,null),g=u.exports;t.default=function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"login-modal",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"user-button";const a=document.getElementById(t),s=document.getElementById(i);if(a&&s){const i=window.storefront&&window.storefront.getScopedSlots;new e.a({data:{isVisible:!1},created(){s.addEventListener("click",(o=>{o.preventDefault(),this.isVisible=!0}))},render(e){const s=this;return e(g,{attrs:{id:t},props:{...o.props,isVisible:s.isVisible},on:{"update:is-visible"(o){s.isVisible=o}},scopedSlots:"function"==typeof i?i(a,e):void 0})}}).$mount(a)}}}}]);