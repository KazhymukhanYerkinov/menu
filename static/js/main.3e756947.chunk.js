(this.webpackJsonpmenu=this.webpackJsonpmenu||[]).push([[0],{10:function(e,t,c){e.exports={order:"Order_order__1oT2q",order__inner:"Order_order__inner__1RVaw",order__input:"Order_order__input__3Wj2u",order__phone:"Order_order__phone__3sOkI",order__comment:"Order_order__comment__1Vicq",label:"Order_label__1C0Am",order__subtotal:"Order_order__subtotal__1Ea7r",order__row:"Order_order__row__2Cte5",order__desc:"Order_order__desc__1ffli",order__price:"Order_order__price__2W5aH",order__total:"Order_order__total__1YRLF",order__button:"Order_order__button__3skyc",subcom:"Order_subcom__1Alwc",input:"Order_input__113Ow",textarea:"Order_textarea__1imSV"}},12:function(e,t,c){e.exports={detail__inner:"Detail_detail__inner___nVqM",detail__image:"Detail_detail__image__2ILVi",detail__name:"Detail_detail__name__BH1Km",discount:"Detail_discount__UerPj",detail__price:"Detail_detail__price__3ipNg",detail__discount:"Detail_detail__discount__3RyZW",quantity:"Detail_quantity__2sD4F",quantity__text:"Detail_quantity__text__1yMOx",quantity__input:"Detail_quantity__input__3KbPC",minus:"Detail_minus__Lmsi_",plus:"Detail_plus__2Phpa",quantity__count:"Detail_quantity__count__2B31j",detail__button:"Detail_detail__button__3eaI5",detail__desc:"Detail_detail__desc__3RbDg",desc__title:"Detail_desc__title__3BfQF",desc__text:"Detail_desc__text__PArhy",quantity__minus:"Detail_quantity__minus__2WT-l",quantity__plus:"Detail_quantity__plus__2GPbq"}},163:function(e,t,c){},23:function(e,t,c){e.exports={base__block:"Product_base__block__2QeBq",product:"Product_product__3bX5k",product__link:"Product_product__link__crFsN",image__block:"Product_image__block__xyF1d",product__image:"Product_product__image__3uEJz",product__name:"Product_product__name__1mrP_",product__desc:"Product_product__desc__3C1Cv",product__price:"Product_product__price__1Qql3",del__text:"Product_del__text__1Q-cu",product__add:"Product_product__add__1OBc8"}},26:function(e,t,c){e.exports={item:"Item_item__3Y4by",item__inner:"Item_item__inner__2sJVs",item__name:"Item_item__name__2WZD9",item__price:"Item_item__price__S7TE0",item__quantity:"Item_item__quantity__3MFGA",minus:"Item_minus__2qCJR",plus:"Item_plus__21QIZ",item__minus:"Item_item__minus__2j5e8",item__plus:"Item_item__plus__2ng_A"}},281:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(1),s=c.n(r),n=c(62),A=c.n(n),o=c(30),_=c(14),d=c(11),i=c(22),l=(c(163),c(9)),u=c.p+"static/media/loader.a084b4bb.svg",j=c(36),m=c.n(j),b=c.p+"static/media/cart.59267ca9.svg",O=c.p+"static/media/back.0337f42c.svg",h=c.p+"static/media/close.0875a3a5.svg",v=c(8),p=c.n(v),g=c(26),Q=c.n(g),x=function(e){var t=e.item,c=e.rootName,r=e.onHideCart,s=e.onRemoveProduct,n=e.onAddProduct,A=e.onRemoveLast;return Object(a.jsx)("div",{className:Q.a.item,children:Object(a.jsxs)("div",{className:Q.a.item__inner,children:[Object(a.jsx)(_.b,{to:"".concat(c,"/product/").concat(t[0].id),onClick:r,children:Object(a.jsxs)("div",{className:Q.a.item__info,children:[Object(a.jsxs)("div",{className:Q.a.item__name,children:[" ",t[0].name,"  ( ",Object(a.jsxs)("span",{children:[" ",t[1],"X "]})," ) "]}),Object(a.jsxs)("div",{className:Q.a.item__price,children:[" ",t[0].is_discounted?t[0].total_price:t[0].price," KZT "]})]})}),Object(a.jsxs)("div",{className:Q.a.item__quantity,children:[Object(a.jsx)("div",{className:Q.a.minus,onClick:function(){1===t[1]?A(t[0]):s(t[0])},children:Object(a.jsx)("span",{className:"span__minus cart__minus"})}),Object(a.jsx)("div",{className:Q.a.plus,onClick:function(){return n(t[0])},children:Object(a.jsx)("span",{className:"span__plus"})})]})]})})},f=c(37),C=c.n(f),N=function(e){var t=e.lastItem,c=e.setLastItem,r=e.onDeleteLast;return Object(a.jsx)("div",{className:C.a.delete,children:Object(a.jsxs)("div",{className:C.a.delete__inner,children:[Object(a.jsxs)("div",{className:C.a.delete__text,children:[" \u0432\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c ",t.name," ? "]}),Object(a.jsxs)("div",{className:C.a.delete__buttons,children:[Object(a.jsx)("div",{className:C.a.close,onClick:function(){c(null)},children:" \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c "}),Object(a.jsx)("div",{className:C.a.ok,onClick:function(){r(t),c(null)},children:" \u041e\u041a "})]})]})})},B=function(e){var t=e.products,c=e.onHideCart,r=e.rootName,n=e.rootTable,A=e.sum,o=e.onRemoveProduct,d=e.onAddProduct,l=e.onDeleteLast,u=Math.ceil(A/100*15),j=s.a.useState(null),m=Object(i.a)(j,2),b=m[0],O=m[1],v=function(e){O(e)};return Object(a.jsxs)("div",{className:p.a.cart,children:[Object(a.jsxs)("div",{className:p.a.cart__inner,children:[Object(a.jsx)("img",{className:p.a.cart__close,src:h,alt:"",onClick:c}),t.length>0&&Object(a.jsx)("div",{className:p.a.cart__title,children:" \u0427\u0415\u041a "}),Object(a.jsxs)("div",{className:p.a.cart__content,children:[t.length>0?Object(a.jsx)("div",{className:p.a.cart__items,children:t.map((function(e,t){return Object(a.jsx)(x,{item:e,rootName:r,onHideCart:c,onRemoveProduct:o,onRemoveLast:v,onAddProduct:d},t)}))}):Object(a.jsxs)("div",{className:p.a.cart__image,children:[Object(a.jsx)("div",{className:p.a.empty__cart,children:" \u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f  "}),Object(a.jsx)("div",{className:p.a.empty__text,children:" \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0434\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443. "})]}),Object(a.jsxs)("div",{className:p.a.cart__result,children:[Object(a.jsxs)("div",{className:p.a.cart__subtotal,children:[Object(a.jsxs)("div",{className:p.a.cart__row,children:[Object(a.jsx)("div",{className:p.a.cart__desc,children:" \u041f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0439 \u0438\u0442\u043e\u0433: "}),Object(a.jsxs)("div",{className:p.a.cart__price,children:[" ",A," KZT "]})]}),Object(a.jsxs)("div",{className:p.a.cart__row,children:[Object(a.jsx)("div",{className:p.a.cart__desc,children:" O\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435: "}),Object(a.jsxs)("div",{className:p.a.cart__price,children:[" ",u," KZT "]})]})]}),Object(a.jsx)("div",{className:p.a.cart__total,children:Object(a.jsxs)("div",{className:p.a.cart__row,children:[Object(a.jsx)("div",{className:p.a.cart__desc,children:" \u0412\u0441\u0435\u0433\u043e: "}),Object(a.jsxs)("div",{className:p.a.cart__price,children:[" ",A+u," KZT "]})]})}),t.length>0?Object(a.jsx)(_.b,{to:"/".concat(r,"/").concat(n,"/order"),className:p.a.cart__button,onClick:c,children:" O\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 "}):Object(a.jsx)("div",{className:p.a.cart__button,onClick:c,children:" \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434 "})]})]})]}),null!==b&&Object(a.jsx)(N,{lastItem:b,setLastItem:O,onDeleteLast:l})]})},D=function(e){var t=e.name,c=e.products,r=e.rootName,n=(e.del,e.rootTable),A=e.sum,o=e.onRemoveProduct,l=e.onAddProduct,u=e.onDeleteLast,j=Object(d.e)(),h=s.a.useState(!1),v=Object(i.a)(h,2),p=v[0],g=v[1];return Object(a.jsxs)("div",{className:m.a.header,children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:m.a.header__inner,children:[Object(a.jsx)("div",{className:m.a.header__back,onClick:function(){return j.goBack()},children:Object(a.jsx)("img",{src:O,alt:"back button"})}),Object(a.jsx)(_.b,{to:"/".concat(r,"/").concat(n),children:Object(a.jsx)("div",{className:m.a.header__name,children:t})}),Object(a.jsxs)("div",{className:m.a.header__cart,onClick:function(){g(!0)},children:[Object(a.jsx)("img",{src:b,alt:"cart button"}),Object(a.jsx)("div",{className:m.a.cart__count,children:Object(a.jsxs)("div",{children:[" ",c.length?c.length:0," "]})})]})]})}),p&&Object(a.jsx)(B,{onHideCart:function(){g(!1)},onDeleteLast:u,products:c,rootName:r,sum:A,rootTable:n,onAddProduct:l,onRemoveProduct:o})]})},P=c(13),H=c(125),I=c.n(H),E=c(65),z=c(88),y=c.n(z),T=c(126),U=c.n(T),X=function(e){var t=e.activeCategory,c=e.name,r=e.id,s=e.onClickSetCategory,n=e.handleClick;return Object(a.jsx)("div",{onClick:function(){return n(r)},children:Object(a.jsx)("div",{className:U()(y.a.item,Object(E.a)({},y.a.active,t===r)),onClick:function(){return s(r)},children:c})})},q=c(32),K=c.n(q),w=c(23),F=c.n(w),G="data:image/png;base64,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",k=function(e){var t=e.foods,c=e.rootName,r=e.onAddProduct,s=e.rootTable,n=e.BASE_URL;return Object(a.jsx)("div",{className:F.a.base__block,children:t.map((function(e,t){return Object(a.jsx)("div",{className:F.a.product,children:Object(a.jsxs)("div",{className:F.a.product__inner,children:[Object(a.jsxs)(_.b,{to:"/".concat(c,"/").concat(s,"/product/").concat(e.id),className:F.a.product__link,children:[Object(a.jsx)("div",{className:F.a.image__block,children:Object(a.jsx)("img",{src:e.image?"".concat(n).concat(e.image):G,alt:"Product photos",className:F.a.product__image})}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:F.a.product__name,children:[" ",e.name," "]}),Object(a.jsxs)("div",{className:F.a.product__price,children:[" ",e.is_discounted?Object(a.jsxs)("span",{children:[" ",e.total_price," KZT  ",Object(a.jsxs)("span",{className:F.a.del__text,children:[" ",e.price," KZT"]})]}):Object(a.jsxs)("span",{children:[" ",e.price," KZT "]})," "]})]})]}),Object(a.jsx)("div",{className:F.a.product__add,onClick:function(){return r(e)},children:Object(a.jsx)("span",{className:"span__plus"})})]})},t)}))})},Z=[],L=function(e){var t=e.data,c=e.rootName,r=e.rootTable,n=e.onAddProduct,A=e.BASE_URL;I.a.polyfill();for(var o=s.a.useState(0),_=Object(i.a)(o,2),d=_[0],l=_[1],u=0;u<t.cafe.categories.length;u++)Z.push({id:u,name:"section_".concat(u)});var j=Z.reduce((function(e,t){return e[t.id]=s.a.createRef(),e}),{}),m=function(e){return j[e].current.scrollIntoView({behavior:"smooth",block:"start"})},b=function(e){l(e)};return Object(a.jsx)("div",{className:K.a.content,children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:K.a.position,children:Object(a.jsx)("div",{className:K.a.content__categories,children:t.cafe.categories.map((function(e,t){return e.foods.length>0&&Object(a.jsx)(X,{id:t,handleClick:m,name:e.name,activeCategory:d,onClickSetCategory:b},t)}))})}),Object(a.jsxs)("div",{className:K.a.content__products,children:[Object(a.jsx)("div",{className:K.a.empty}),t.cafe.categories.map((function(e,t){return e.foods.length>0&&Object(a.jsxs)("div",{className:K.a.content__width,ref:j[t],children:[Object(a.jsxs)("section",{className:K.a.title,children:[" ",e.name," "]}),Object(a.jsx)(k,Object(P.a)(Object(P.a)({id:t,BASE_URL:A},e),{},{rootName:c,rootTable:r,onAddProduct:n}))]},t)}))]})]})})},W=function(e,t){return e.data===t.data},M=s.a.memo(L,W),V=c(12),R=c.n(V),S=Object(d.f)((function(e){var t=e.data,c=e.match,r=e.BASE_URL,n=e.onAddProduct,A=s.a.useState(1),o=Object(i.a)(A,2),_=o[0],d=o[1],l=s.a.useState({}),u=Object(i.a)(l,2),j=u[0],m=u[1];return s.a.useEffect((function(){for(var e=t.categories,a=0;a<e.length;a++)for(var r=0;r<e[a].foods.length;r++)e[a].foods[r].id===parseInt(c.params.productID)&&m(e[a].foods[r])}),[]),Object(a.jsx)("div",{className:R.a.detail,children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:R.a.detail__inner,children:[j.image?Object(a.jsx)("img",{src:r+""+j.image,alt:"",className:R.a.detail__image}):Object(a.jsx)("img",{src:G,alt:"",className:R.a.detail__image}),Object(a.jsxs)("div",{className:R.a.detail__name,children:[" ",j.name," "]}),Object(a.jsxs)("div",{className:R.a.discount,children:[Object(a.jsxs)("div",{className:R.a.detail__price,children:[" ",j.is_discounted?j.total_price:j.price," KZT "]}),j.is_discounted&&Object(a.jsxs)("div",{className:R.a.detail__discount,children:[" ",j.price," KZT "]})]}),Object(a.jsxs)("div",{className:R.a.quantity,children:[Object(a.jsx)("div",{className:R.a.quantity__text,children:" \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: "}),Object(a.jsxs)("div",{className:R.a.quantity__input,children:[Object(a.jsx)("div",{className:R.a.minus,onClick:function(){_>1&&d((function(e){return e-1}))},children:Object(a.jsx)("span",{className:"span__minus"})}),Object(a.jsxs)("div",{className:R.a.quantity__count,children:[" ",_," "]}),Object(a.jsx)("div",{className:R.a.plus,onClick:function(){d((function(e){return e+1}))},children:Object(a.jsx)("span",{className:"span__plus"})})]})]}),Object(a.jsx)("div",{className:R.a.detail__button,onClick:function(){return n(j,_)},children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"}),Object(a.jsxs)("div",{className:R.a.detail__desc,children:[Object(a.jsx)("div",{className:R.a.desc__title,children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(a.jsx)("div",{className:R.a.desc__text,children:j.description})]})]})})})})),Y=c(121),J=c(122),$=function(e){if(!e)return"\u041f\u043e\u043b\u0435, \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},ee=function(e){return e&&!/^[0-9\b]+$/.test(e)?"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":e.length<10?"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 10":void 0},te=c(52),ce=c.n(te),ae=function(e){var t=e.meta,c=e.children,r=t.touched&&t.error;return Object(a.jsxs)("div",{className:ce.a.form__control,children:[Object(a.jsx)("div",{children:c}),r&&Object(a.jsxs)("small",{className:ce.a.errorr,children:[" ",t.error," "]})]})},re=function(e){var t=e.input,c=(e.meta,e.placeholder),r=e.type;return Object(a.jsx)(ae,Object(P.a)(Object(P.a)({},e),{},{children:Object(a.jsx)("textarea",Object(P.a)(Object(P.a)({},t),{},{className:ce.a.textarea,placeholder:c,type:r}))}))},se=function(e){var t=e.input,c=(e.meta,e.placeholder),r=e.type;return Object(a.jsx)(ae,Object(P.a)(Object(P.a)({},e),{},{children:Object(a.jsx)("input",Object(P.a)(Object(P.a)({},t),{},{className:ce.a.input,placeholder:c,type:r}))}))},ne=c.p+"static/media/success.693b0fb4.svg",Ae=c(43),oe=c.n(Ae),_e=function(e){var t=e.setSuccess,c=e.rootName,r=e.rootTable;return Object(a.jsx)("div",{className:oe.a.success,children:Object(a.jsxs)("div",{className:oe.a.success__inner,children:[Object(a.jsx)("img",{className:oe.a.success__image,src:ne,alt:""}),Object(a.jsx)("div",{className:oe.a.success__title,children:" \u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0432\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d "}),Object(a.jsx)(_.b,{to:"/".concat(c,"/").concat(r),className:oe.a.success__button,onClick:function(){return t(!1)},children:" \u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 "})]})})},de=c(10),ie=c.n(de),le=Object(J.a)({form:"order"})((function(e){var t=e.sum,c=e.obs,r=e.handleSubmit;return Object(a.jsxs)("form",{className:ie.a.order__form,onSubmit:r,children:[Object(a.jsxs)("div",{className:ie.a.order__input,children:[Object(a.jsx)("label",{className:ie.a.label,children:" \u0418\u043c\u044f "}),Object(a.jsx)(Y.a,{name:"name",component:se,placeholder:"\u0418\u043c\u044f",type:"text",validate:$})]}),Object(a.jsxs)("div",{className:ie.a.order__phone,children:[Object(a.jsx)("label",{className:ie.a.label,children:" \u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 "}),Object(a.jsx)(Y.a,{name:"phone",component:se,type:"tel",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",validate:[$,ee]})]}),Object(a.jsxs)("div",{className:ie.a.order__comment,children:[Object(a.jsxs)("label",{className:ie.a.label,children:[" \u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0437\u0430\u043a\u0430\u0437\u0443 ",Object(a.jsx)("span",{className:ie.a.subcom,children:" (*\u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e) "})]}),Object(a.jsx)(Y.a,{name:"comment",component:re,type:"text",placeholder:"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0437\u0430\u043a\u0430\u0437\u0443"})]}),Object(a.jsxs)("div",{className:ie.a.order__subtotal,children:[Object(a.jsxs)("div",{className:ie.a.order__row,children:[Object(a.jsx)("div",{className:ie.a.order__desc,children:" \u041f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0439 \u0438\u0442\u043e\u0433 "}),Object(a.jsxs)("div",{className:ie.a.order__price,children:[" ",t," KZT "]})]}),Object(a.jsxs)("div",{className:ie.a.order__row,children:[Object(a.jsx)("div",{className:ie.a.order__desc,children:" O\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435 "}),Object(a.jsxs)("div",{className:ie.a.order__price,children:[" ",c," KZT "]})]})]}),Object(a.jsx)("div",{className:ie.a.order__total,children:Object(a.jsxs)("div",{className:ie.a.order__row,children:[Object(a.jsx)("div",{className:ie.a.order__desc,children:" \u0412\u0441\u0435\u0433\u043e "}),Object(a.jsxs)("div",{className:ie.a.order__price,children:[" ",t+c," KZT "]})]})}),Object(a.jsx)("button",{className:ie.a.order__button,children:" \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c "})]})})),ue=Object(d.f)((function(e){for(var t=e.products,c=e.success,r=e.sum,s=e.rootName,n=e.rootTable,A=e.postOrderThunk,o=e.setSuccess,_=e.onClearProduct,d=Math.ceil(r/100*15),i=[],l=0;l<t.length;l++){var u={food:t[l][0].id,count:t[l][1]};i.push(u)}return Object(a.jsxs)("div",{className:ie.a.order,children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:ie.a.order__inner,children:Object(a.jsx)(le,{onSubmit:function(e){A(e.name,e.phone,n,e.comment,i),_()},sum:r,obs:d})})}),c&&Object(a.jsx)(_e,{rootName:s,rootTable:n,setSuccess:o})]})})),je=c(53),me=c.n(je),be=c(91),Oe=c(128).create({baseURL:"https://q-menu.ru/"});Oe.interceptors.request.use((function(e){return e.headers["Content-Type"]="application/json",e.headers.Accept="application/json",e}));var he=function(e){return Oe.get("api/v1/foods/list?cafe=".concat(e)).then((function(e){return e.data}))},ve=function(e,t,c,a,r){var s=JSON.stringify({name:e,phone:t,table:c,comment:a,items:r});return Oe.post("api/v1/foods/order",s).then((function(e){return console.log(e),e}))},pe=c(64),ge="SET_DATA_PRODUCTS",Qe="SET_SUCCESS_PRODUCTS",xe={cafe:null,success:!1},fe=function(e){return{type:Qe,success:e}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(P.a)(Object(P.a)({},e),{},{cafe:t.cafe});case Qe:return Object(P.a)(Object(P.a)({},e),{},{success:t.success});default:return e}},Ne=new Map,Be=0;var De=Object(l.d)(Object(o.b)((function(e){return{data:e.dataPage.cafe,success:e.dataPage.success}}),{getDataProductsThunk:function(e){return function(){var t=Object(be.a)(me.a.mark((function t(c){var a;return me.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,he(e);case 3:a=t.sent,c({type:ge,cafe:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},postOrderThunk:function(e,t,c,a,r){return function(){var s=Object(be.a)(me.a.mark((function s(n){return me.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,ve(e,t,c,a,r);case 3:200===s.sent.status&&(n(fe(!0)),n(Object(pe.a)("order"))),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),console.log(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(e){return s.apply(this,arguments)}}()},setSuccess:fe}),d.f)((function(e){var t=e.data,c=e.getDataProductsThunk,r=e.postOrderThunk,n=e.setSuccess,A=e.success,o=e.match,_=s.a.useState([]),l=Object(i.a)(_,2),j=l[0],m=l[1],b=o.params.root,O=o.params.tableID,h="https://q-menu.ru";if(s.a.useEffect((function(){c(b)}),[]),null===t)return Object(a.jsx)("div",{className:"loader__block",children:Object(a.jsx)("img",{className:"loader",src:u,alt:""})});var v=function(){Ne=new Map,m([])},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(Ne.has(e)){var c=Ne.get(e);c+=t,Ne.set(e,c),Be+=(e.is_discounted?e.total_price:e.price)*t,m(Array.from(Ne))}else Ne.set(e,t),Be+=(e.is_discounted?e.total_price:e.price)*t,m(Array.from(Ne))};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(D,{name:t.cafe.name,products:j,rootName:b,rootTable:O,sum:Be,onRemoveProduct:function(e){var t=Ne.get(e);t--,Ne.set(e,t),Be-=e.is_discounted?e.total_price:e.price,m(Array.from(Ne))},onAddProduct:p,onDeleteLast:function(e){Ne.delete(e),Be-=e.is_discounted?e.total_price:e.price,m(Array.from(Ne))}}),Object(a.jsx)(d.a,{exact:!0,path:"/".concat(b,"/").concat(O),render:function(){return Object(a.jsx)(M,{data:t,rootName:b,BASE_URL:h,rootTable:O,onAddProduct:p})}}),Object(a.jsx)(d.a,{exact:!0,path:"/".concat(b,"/").concat(O,"/product/:productID"),render:function(){return Object(a.jsx)(S,{data:t.cafe,BASE_URL:h,onAddProduct:p})}}),Object(a.jsx)(d.a,{exact:!0,path:"/".concat(b,"/").concat(O,"/order"),render:function(){return Object(a.jsx)(ue,{products:j,success:A,sum:Be,rootName:b,rootTable:O,postOrderThunk:r,setSuccess:n,onClearProduct:v})}})]})})),Pe=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(d.a,{path:"/:root/:tableID",render:function(){return Object(a.jsx)(De,{})}})})},He=c(129),Ie=c(123),Ee=Object(l.c)({dataPage:Ce,form:Ie.a}),ze=Object(l.e)(Ee,Object(l.a)(He.a));window.store=ze;var ye=ze;A.a.render(Object(a.jsx)(_.a,{children:Object(a.jsx)(o.a,{store:ye,children:Object(a.jsx)(Pe,{})})}),document.getElementById("root"))},32:function(e,t,c){e.exports={position:"Content_position__MQmiR",content__categories:"Content_content__categories__3hevT",content__products:"Content_content__products__1KSyR",content__width:"Content_content__width__29kf2",title:"Content_title__3t82c"}},36:function(e,t,c){e.exports={header:"Header_header__1spJH",header__inner:"Header_header__inner__2SPQr",header__back:"Header_header__back__3c-Ux",header__name:"Header_header__name__o79eJ",header__cart:"Header_header__cart__cl040",cart__count:"Header_cart__count__1LGxT"}},37:function(e,t,c){e.exports={delete:"Delete_delete__CUhl0",delete__inner:"Delete_delete__inner__3-vl4",delete__text:"Delete_delete__text__1umax",delete__buttons:"Delete_delete__buttons__3vkog",close:"Delete_close__2vUPQ",ok:"Delete_ok__XwHtC"}},43:function(e,t,c){e.exports={success:"Success_success__3yYhH",success__inner:"Success_success__inner__1U9M5",success__image:"Success_success__image__HRLqB",success__title:"Success_success__title__25iW2",success__button:"Success_success__button__Ygc9h"}},52:function(e,t,c){e.exports={input:"FormControl_input__3yDoQ",textarea:"FormControl_textarea__3ovcg",errorr:"FormControl_errorr__1_JQa"}},8:function(e,t,c){e.exports={cart:"Cart_cart__1kO1y",cart__inner:"Cart_cart__inner__3dejM",cart__close:"Cart_cart__close__13JRP",cart__title:"Cart_cart__title__Ldl0E",cart__content:"Cart_cart__content__nFJSa",cart__items:"Cart_cart__items__2xMdN",cart__image:"Cart_cart__image__31vzF",empty__cart:"Cart_empty__cart__3gm22",empty__text:"Cart_empty__text__2QETd",cart__subtotal:"Cart_cart__subtotal__xmsOF",cart__row:"Cart_cart__row__fNpLb",cart__desc:"Cart_cart__desc__1xQzT",cart__price:"Cart_cart__price__1QqgR",cart__total:"Cart_cart__total__xmnpw",cart__button:"Cart_cart__button__2Gbxn"}},88:function(e,t,c){e.exports={item:"Category_item__r9x4z",active:"Category_active__3YLUP"}}},[[281,1,2]]]);
//# sourceMappingURL=main.3e756947.chunk.js.map