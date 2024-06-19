(window.webpackJsonp=window.webpackJsonp||[]).push([[33,31,32],{243:function(t,i,e){"use strict";e(6),e(101),e(102),e(103);var s=e(26),a=e(35),o=e(23),n=e(77),r=e(29),c=e(89),d=e(36),u=e(87),l=e(86),p=e(75),y=e(39),_=e(25),h=e(45),b=e(4),m=e(56),f=e(8),v=e(2),g=e(44),k=e(226),O=e(229),C=e(231),S=e(237),I=e(173),w=e(225),P=e(175),j=e(174),V=e(250),B=e(249),x=e(251),T=e(252),q=e(253),A=e(228),$=e(254),F=e(28),L=e(163);const z="object"==typeof window&&window.storefront||{},Q=()=>z.context&&z.context.body||{},E=()=>Q()._id,D=t=>{const i=Object.assign({},t);return delete i.body_html,delete i.body_text,delete i.specifications,delete i.inventory_records,delete i.price_change_records,i};var M={name:"TheProduct",components:{Portal:S.a,ALink:I.a,AAlert:w.a,APicture:P.a,APrices:j.a,AShare:V.a,KitProductVariations:x.a,ProductVariations:B.a,ProductGallery:T.a,QuantitySelector:q.a,ShippingCalculator:A.a,PaymentOption:$.a},props:{productId:{type:String,default:()=>E()},product:Object,headingTag:{type:String,default:"h1"},buyText:String,galleryColClassName:{type:String,default:"col-12 col-md-6"},hasPromotionTimer:Boolean,hasStickyBuyButton:{type:Boolean,default:!0},hasQuantitySelector:Boolean,canAddToCart:{type:Boolean,default:!0},hasBuyButton:{type:Boolean,default:!0},lowQuantityToWarn:{type:Number,default:12},maxVariationOptionsBtns:Number,isQuickview:Boolean,paymentAppsSort:{type:Array,default:()=>window.ecomPaymentApps||[]},quoteLink:String,isSSR:Boolean,ecomPassport:{type:Object,default:()=>F.a},accountUrl:{type:String,default:"/app/#/account/"}},data:()=>({body:{},fixedPrice:null,selectedVariationId:null,currentGalleyImg:1,isOnCart:!1,qntToBuy:1,isStickyBuyVisible:!1,isFavorite:!1,hasClickedBuy:!1,hasLoadError:!1,paymentOptions:[],customizations:[],kitItems:[],currentTimer:null}),computed:{i19addToFavorites:()=>Object(a.a)(s.m),i19close:()=>Object(a.a)(s.P),i19days:()=>Object(a.a)(s.gb),i19discountOf:()=>Object(a.a)(s.kb),i19endsIn:()=>Object(a.a)(s.sb),i19freeShippingFrom:()=>Object(a.a)(s.Db),i19loadProductErrorMsg:()=>Object(a.a)(s.dc),i19offer:()=>Object(a.a)(s.Ic),i19only:()=>Object(a.a)(s.Lc),i19outOfStock:()=>Object(a.a)(s.Sc),i19paymentOptions:()=>Object(a.a)(s.Wc),i19perUnit:()=>Object(a.a)(s.Xc),i19productionDeadline:()=>Object(a.a)(s.hd),i19removeFromFavorites:()=>Object(a.a)(s.vd),i19retry:()=>Object(a.a)(s.yd),i19selectVariationMsg:()=>Object(a.a)(s.Od),i19unavailable:()=>Object(a.a)(s.je),i19quoteProduct:()=>"Cotar produto",i19units:()=>Object(a.a)(s.ke).toLowerCase(),i19unitsInStock:()=>Object(a.a)(s.le),i19workingDays:()=>Object(a.a)(s.ve),selectedVariation(){return this.selectedVariationId?this.body.variations.find((t=>{let{_id:i}=t;return i===this.selectedVariationId})):{}},name(){return this.selectedVariation.name||Object(o.a)(this.body)},isInStock(){return Object(n.a)(this.body)},isWithoutPrice(){return!Object(r.a)(this.body)},isVariationInStock(){return Object(n.a)(this.selectedVariationId?this.selectedVariation:this.body)},isLogged:()=>F.a.checkAuthorization(),thumbnail(){return Object(c.a)(this.body,null,"small")},productQuantity(){return this.selectedVariation.quantity?this.selectedVariation.quantity:this.body.quantity?this.body.quantity:void 0},isLowQuantity(){return this.productQuantity>0&&this.lowQuantityToWarn>0&&this.productQuantity<=this.lowQuantityToWarn},strBuy(){return this.buyText||Object(a.a)(s.z)},discount(){const{body:t}=this,i=this.fixedPrice||Object(r.a)(t);return Object(d.a)(t)||t.price>i?Math.round(100*(t.base_price-i)/t.base_price):0},isOnSale(){const{body:t}=this;return this.hasPromotionTimer&&Object(d.a)(t)&&t.price_effective_date&&t.price_effective_date.end&&Date.now()<new Date(t.price_effective_date.end).getTime()},ghostProductForPrices(){const t={};["price","base_price"].forEach((i=>{let e=this.selectedVariation[i]||this.body[i];void 0!==e&&this.customizations.forEach((t=>{t.add_to_price&&(e+=this.getAdditionalPrice(t.add_to_price))})),t[i]=e}));const i={...this.body};return this.selectedVariationId&&(Object.assign(i,this.selectedVariation),delete i.variations),{...i,...t}},hasVariations(){return this.body.variations&&this.body.variations.length},isKit(){return this.body.kit_composition&&this.body.kit_composition.length},isKitWithVariations(){return this.kitItems.some((t=>t.variations&&t.variations.length))}},methods:{getVariationsGrids:u.a,getSpecValueByText:l.a,setBody(t){this.body={...t,body_html:"",body_text:"",inventory_records:[]},this.$emit("update:product",t)},fetchProduct(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{productId:i}=this;return Object(b.g)({url:`/products/${i}.json`,axiosConfig:{timeout:t?2500:6e3}}).then((t=>{let{data:e}=t;this.setBody(e),E()===i&&(z.context.body=this.body),this.hasLoadError=!1})).catch((i=>{console.error(i);const{response:e}=i;e&&e.status>=400&&e.status<500||(t?(this.setBody(Q()),this.body.name&&this.body.price&&this.body.pictures||(this.hasLoadError=!0)):this.fetchProduct(!0))}))},getAdditionalPrice(t){let{type:i,addition:e}=t;return"fixed"===i?e:Object(r.a)(this.body)*e/100},formatAdditionalPrice(t){return t&&t.addition?Object(p.a)(this.getAdditionalPrice(t)):""},setCustomizationOption(t,i){const e=this.customizations.findIndex((i=>{let{_id:e}=i;return e===t._id}));i?e>-1?this.customizations[e].option={text:i}:this.customizations.push({_id:t._id,label:t.label,add_to_price:t.add_to_price,option:{text:i}}):e>-1&&this.customizations.splice(e,1)},showVariationPicture(t){if(t.picture_id){const i=this.body.pictures.findIndex((i=>{let{_id:e}=i;return e===t.picture_id}));this.currentGalleyImg=i+1}},handleGridOption(t){let{gridId:i,gridIndex:e,optionText:s}=t;if(0===e){const t=this.body.variations.find((t=>Object(y.a)(t,i)===s));t&&this.showVariationPicture(t)}},toggleFavorite(){this.isLogged&&(this.isFavorite=Object(L.b)(this.body._id,this.ecomPassport))},buy(){this.hasClickedBuy=!0;const t=D(this.body);let i;if(this.hasVariations){if(!this.selectedVariationId)return;i=this.selectedVariationId}const e=[...this.customizations];this.$emit("buy",{product:t,variationId:i,customizations:e}),this.canAddToCart&&f.a.addProduct({...t,customizations:e},i,this.qntToBuy),this.isOnCart=!0},buyOrScroll(){this.hasVariations||this.isKit?Object(C.a)(this.$refs.actions):this.buy()}},watch:{selectedVariationId(t){if(t){this.hasClickedBuy&&(this.hasClickedBuy=!1);const{pathname:i}=window.location,e=new URLSearchParams(window.location.search);e.set("variation_id",t),window.history.pushState({pathname:i,params:e.toString()},"",`${i}?${e.toString()}`),this.showVariationPicture(this.selectedVariation)}},fixedPrice(t){t>0&&!this.isQuickview&&Object(O.a)((()=>{Object(b.c)({url:"/list_payments.json",method:"POST",data:{amount:{total:t},items:[{...D(this.body),product_id:this.body._id}],currency_id:this.body.currency_id||_.$ecomConfig.get("currency"),currency_symbol:this.body.currency_symbol||_.$ecomConfig.get("currency_symbol")}}).then((t=>{let{data:i}=t;Array.isArray(this.paymentAppsSort)&&this.paymentAppsSort.length&&Object(k.a)(i.result,this.paymentAppsSort),this.paymentOptions=i.result.reduce(((t,i)=>(i.validated&&t.push({app_id:i.app_id,...i.response}),t)),[]).sort(((t,i)=>!t.discount_option||!t.discount_option.value||i.discount_option&&i.discount_option.value?1:-1))})).catch(console.error)}))},isKit:{handler(t){if(console.log(t),t&&!this.kitItems.length){const t=this.body.kit_composition,i=new m.a;i.setPageSize(t.length).setProductIds(t.map((t=>{let{_id:i}=t;return i}))).removeFilter("visible").fetch(!0).then((()=>{i.getItems().forEach((i=>{const{quantity:e}=t.find((t=>{let{_id:e}=t;return e===i._id}));(t=>{const s=f.a.parseProduct(i,t,e);e?s.min_quantity=s.max_quantity=e:s.quantity=0,this.kitItems.push({...s,_id:Object(h.a)()})})()}))})).catch(console.error)}},immediate:!0}},created(){const t=()=>{this.qntToBuy=this.body.min_quantity||1};this.product?(this.body=this.product,this.isSSR?this.fetchProduct().then(t):t()):this.fetchProduct().then(t),this.isFavorite=Object(L.a)(this.body._id||this.productId,this.ecomPassport)},mounted(){var t=this;if(this.$refs.sticky&&!this.isWithoutPrice){let i=!1;const e=function(){let s=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const a=t.$refs[s?"sticky":"buy"];if(!a)return;const o=document.createElement("div");a.parentNode.insertBefore(o,a),s&&(o.style.position="absolute",o.style.bottom=v.isMobile?"-1600px":"-1000px");Object(g.a)(o,{rootMargin:"100px",threshold:0,load:()=>{t.isStickyBuyVisible=s,s&&!i&&t.$nextTick((()=>{const e=t.$refs.sticky.offsetHeight;document.body.style.paddingBottom=`${e+4}px`,i=!0})),o.remove(),setTimeout((()=>{const t=function(){e(!s),document.removeEventListener("scroll",t)};document.addEventListener("scroll",t)}),100)}}).observe()};e()}if(this.isOnSale){const t=new Date(this.body.price_effective_date.end),i=Date.now();if(t.getTime()>i){let e;const s=864e5;Math.floor((t.getTime()-i)/s)>2?(e=new Date,e.setHours(23,59,59,999)):e=t;const a=t=>t<10?`0${t}`:t,o=()=>{const t=e.getTime()-Date.now(),i=Math.floor(t/s),o=Math.floor(t%s/36e5),n=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3);return(i>0?`${a(i)}:`:"")+`${a(o)}:${a(n)}:${a(r)}`};this.currentTimer=setInterval((()=>{this.$refs.timer.innerHTML=o()}),1e3)}}},destroyed(){this.currentTimer&&clearInterval(this.currentTimer)}};i.a=M},256:function(t,i,e){"use strict";e.d(i,"a",(function(){return s})),e.d(i,"b",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"product",attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku,"data-selected-variation":t.selectedVariationId}},[e("a-alert",{attrs:{"can-show":t.hasLoadError,variant:"danger"}},[t._v(" "+t._s(t.i19loadProductErrorMsg)+" "),e("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.fetchProduct.apply(null,arguments)}}},[t._v(" "+t._s(t.i19retry)+" ")])]),e("transition",{attrs:{"enter-active-class":"animated fadeIn slower"}},[t.body._id?e("div",{staticClass:"row"},[t._t("gallery-col",(function(){return[e("div",{class:t.galleryColClassName},[e(t.isSSR?"portal":"div",{tag:"component",attrs:{selector:"#product-gallery"}},[t._t("stamps"),e("product-gallery",{attrs:{product:t.body,"can-add-to-cart":t.canAddToCart&&t.body.available&&t.isInStock,"current-slide":t.currentGalleyImg,"is-s-s-r":t.isSSR},on:{"update:currentSlide":function(i){t.currentGalleyImg=i},"update:current-slide":function(i){t.currentGalleyImg=i}}},[t._t("first-picture")],2),t._t("gallery-footer")],2)],1)]})),e("div",{ref:"actions",staticClass:"col"},[t.isSSR?t._e():t._t("heading",(function(){return[e(t.headingTag,{tag:"component",staticClass:"product__name"},[t._v(" "+t._s(t.name)+" ")]),e("p",{staticClass:"product__sku"},[t._v(" COD: "+t._s(t.body.sku)+" ")])]})),e(t.isSSR?"portal":"div",{tag:"component",attrs:{selector:"#product-actions"}},[t._t("rating",(function(){return[t._m(0)]})),t.body.available?t.isInStock?t.isWithoutPrice?e("div",{staticClass:"product__without-price"},[t._t("without-price",(function(){return[t.quoteLink?e("a",{attrs:{target:"_blank",rel:"noopener",href:t.quoteLink}},[t._v(" "+t._s(t.i19quoteProduct)+" ")]):t._e()]}))],2):[t._t("prices",(function(){return[e("p",{staticClass:"product__prices"},[e("a-prices",{attrs:{product:t.ghostProductForPrices,"is-literal":!0,"is-big":!0},on:{"fix-price":function(i){return t.fixedPrice=i}}}),t._t("discount-tag",(function(){return[t.discount>0?e("span",{staticClass:"product__discount"},[t._v(" "+t._s(t.i19discountOf)+" "),e("strong",[t._v(t._s(t.discount)+"%")])]):t._e()]}),null,{discount:t.discount})],2)]})),t.hasVariations?t._t("variations",(function(){return[e("product-variations",{attrs:{product:t.body,"selected-id":t.selectedVariationId,"max-options-btns":t.maxVariationOptionsBtns},on:{"update:selectedId":function(i){t.selectedVariationId=i},"update:selected-id":function(i){t.selectedVariationId=i},"select-option":t.handleGridOption}}),e("a-alert",{attrs:{"can-show":t.hasClickedBuy&&!t.selectedVariationId}},[t._v(" "+t._s(t.i19selectVariationMsg)+" ")]),t._t("variations-info")]})):t._e(),t.body.customizations?t._t("customizations",(function(){return t._l(t.body.customizations,(function(i){return i.custom_value?e("div",{key:i._id,staticClass:"product__customization form-group",class:i.grid_id?"product__customization--"+i.grid_id:null},[e("label",{attrs:{for:"c-"+i._id}},[t._v(" "+t._s(i.label)+" "),i.add_to_price?e("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(t.formatAdditionalPrice(i.add_to_price))+" ")]):t._e()]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"c-"+i._id},on:{keyup:function(e){return t.setCustomizationOption(i,e.target.value)}}})]):t._e()}))})):t._e(),t.isKit?e("div",{staticClass:"product__kit"},[t._t("kit",(function(){return[e("transition",{attrs:{"enter-active-class":"animated fadeInUp"}},[t.kitItems.length&&!t.isKitWithVariations?e("quantity-selector",{attrs:{items:t.kitItems,min:t.body.min_quantity,max:t.body.quantity,slug:t.body.slug,"kit-product-id":t.body._id,"kit-name":t.name,"kit-price":t.fixedPrice},on:{buy:function(i){return t.$emit("buy",i)}},scopedSlots:t._u([{key:"buy-button-content",fn:function(){return[t._t("buy-button-content")]},proxy:!0}],null,!0)}):t._e(),t.kitItems.length&&t.isKitWithVariations?e("kit-product-variations",{attrs:{items:t.kitItems,min:t.body.min_quantity,max:t.body.quantity,slug:t.body.slug,"kit-product-id":t.body._id,"kit-name":t.name,"kit-price":t.fixedPrice,"max-options-btns":t.maxVariationOptionsBtns},scopedSlots:t._u([{key:"buy-button-content",fn:function(){return[t._t("buy-button-content")]},proxy:!0}],null,!0)}):t._e()],1),t.kitItems.length?t._e():e("span",{staticClass:"product__kit-loading spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])]}),null,{kitItems:t.kitItems})],2):[t.isVariationInStock?t.hasBuyButton?e("div",{ref:"buy",staticClass:"product__buy"},[e(t.hasQuantitySelector?"quantity-selector":"div",{tag:"component",attrs:{items:t.hasQuantitySelector?[{_id:t.body._id,quantity:t.body.min_quantity||1}]:null,min:t.body.min_quantity,max:t.body.quantity,"has-buy-button":!1},on:{"set-quantity":function(i){var e=i.quantity;return t.qntToBuy=e}}},[e("span",{on:{click:t.buy}},[t._t("buy",(function(){return[e("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button",disabled:t.hasClickedBuy&&!t.isOnCart}},[t._t("buy-button-content",(function(){return[e("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")]}))],2)]}),null,{hasClickedBuy:t.hasClickedBuy,isOnCart:t.isOnCart})],2)])],1):t._e():e("div",{staticClass:"product__out-of-stock"},[t._t("out-of-stock",(function(){return[t._v(" "+t._s(t.i19outOfStock)+" ")]}))],2),t.isLowQuantity?e("p",{staticClass:"product__short-stock"},[e("i",{staticClass:"i-forward mr-1"}),t._v(" "+t._s(t.i19only)+" "),e("strong",[t._v(t._s(t.productQuantity))]),t._v(" "+t._s(t.i19unitsInStock)+" ")]):t._e()],t._t("sale-timer",(function(){return[t.isOnSale?e("div",{staticClass:"product__sale-timer mb-3"},[e("div",[t._v(" "+t._s(t.i19offer)+" "),e("br"),e("small",[t._v(t._s(t.i19endsIn))])]),e("div",{ref:"timer",staticClass:"h1 ml-3 mb-0"},[t._v(" 00:00:00 ")])]):t._e()]})),t._t("favorite",(function(){return[e("div",[e("a",{staticClass:"btn btn-sm product__favorite",attrs:{href:t.isLogged?null:t.accountUrl},on:{click:t.toggleFavorite}},[e("i",{staticClass:"i-heart mr-1",class:t.isFavorite?"active":null}),e("span",[t._v(" "+t._s(t.isFavorite?t.i19removeFromFavorites:t.i19addToFavorites)+" ")])])])]})),t._t("share",(function(){return[t.body.slug?e("a-share",{staticClass:"mb-3",attrs:{url:"/"+t.body.slug,title:t.body.name,description:t.body.short_description}}):t._e()]})),e("transition",{attrs:{"enter-active-class":"animated fadeInUp"}},[!t.isQuickview&&t.paymentOptions.length?t._t("payment-gateways",(function(){return[e("article",[e("div",{staticClass:"product__payment card mb-3"},[e("a",{staticClass:"card-header",attrs:{id:"product-payment-header",role:"button",href:"#product-payment","data-toggle":"collapse","aria-expanded":"false","aria-controls":"product-payment"}},[e("span",[t._v(t._s(t.i19paymentOptions))]),e("i",{staticClass:"i-chevron-down"})]),e("div",{staticClass:"collapse",attrs:{id:"product-payment","aria-labelledby":"product-payment-header"}},[e("div",{staticClass:"card-body pb-0"},t._l(t.paymentOptions,(function(i){return e("div",{key:i.app_id,staticClass:"mb-3",attrs:{id:"product-payment-"+i.app_id}},[t._t("payment-"+i.app_id,(function(){return t._l(i.payment_gateways,(function(s,a){return e("payment-option",{key:i.app_id+"-"+a,attrs:{"payment-gateway":s,"installments-option":i.installments_option,price:t.fixedPrice}})}))}))],2)})),0)])])])]}),null,{paymentOptions:t.paymentOptions}):t._e()],2),t.body.production_time&&t.body.production_time.days?e("p",{staticClass:"product__production"},[e("i",{staticClass:"i-info-circle mr-1"}),t._v(" "+t._s(t.i19productionDeadline)+": "),e("strong",[t._v(" "+t._s(t.body.production_time.days)+" "+t._s(t.body.production_time.working_days?t.i19workingDays:t.i19days)+" "),t.body.production_time.cumulative?[t._v(" "+t._s(t.i19perUnit)+" ")]:t._e()],2)]):t._e(),t.isQuickview||t.isKit&&!t.kitItems.length?t._e():t._t("shipping",(function(){return[e("shipping-calculator",{attrs:{shippedItems:t.isKit?t.kitItems:[Object.assign({},t.body,t.selectedVariation,{product_id:t.body._id,quantity:t.qntToBuy||t.body.min_quantity||1})]},scopedSlots:t._u([{key:"free-from-value",fn:function(i){var s=i.amountSubtotal,a=i.freeFromValue;return[e("div",{staticClass:"product__free-shipping-from"},[t._v(" "+t._s(t.i19freeShippingFrom)+" "),e("strong",[t._v(" "+t._s(Math.ceil(a/s))+" "+t._s(t.i19units)+" ")])])]}}],null,!1,3999804120)})]})),t._t("track-price",(function(){return[t._m(1)]}))]:e("div",{staticClass:"product__out-of-stock"},[t._t("out-of-stock",(function(){return[t._v(" "+t._s(t.i19outOfStock)+" ")]}))],2):e("div",{staticClass:"product__unavailable"},[t._t("unavailable",(function(){return[t._v(" "+t._s(t.i19unavailable)+" ")]}))],2)],2),!t.isSSR&&t.body.short_description?t._t("short-description",(function(){return[e("p",{staticClass:"product__info lead"},[t._v(" "+t._s(t.body.short_description)+" ")])]})):t._e()],2)],2):t._e()]),!t.isQuickview&&t.hasStickyBuyButton&&t.body.available&&t.isInStock?[e("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut fast"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isStickyBuyVisible,expression:"isStickyBuyVisible"}],ref:"sticky",staticClass:"product__sticky"},[e("div",{staticClass:"product__sticky-container container"},[e("div",{staticClass:"product__sticky-info"},[e("a-picture",{staticClass:"product__sticky-picture",attrs:{"can-calc-height":!1,src:t.thumbnail}}),e("h5",[t._v(t._s(t.name))])],1),e("div",{staticClass:"product__sticky-buy"},[e("a-prices",{attrs:{product:t.ghostProductForPrices,"is-literal":!1,"can-show-price-options":!0}}),e("a",{staticClass:"btn btn-lg btn-primary",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.buyOrScroll.apply(null,arguments)}}},[e("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")])],1)])])])]:t._e(),t.body._id?t._e():t._t("default")],2)},a=[function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"product__rating",attrs:{"data-sku":t.body.sku}})},function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"product__track-price",attrs:{"data-sku":t.body.sku}})}]}},0,[41,42]]);