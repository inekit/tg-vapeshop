"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[908],{3089:function(e,t,r){r.d(t,{z9:function(){return l}});var i=r(3396),a=function(){return Math.random().toString(36).substring(2)},n=(0,i.aZ)({name:"ContentLoader",props:{width:{type:[Number,String]},height:{type:[Number,String]},viewBox:{type:String},preserveAspectRatio:{type:String,default:"xMidYMid meet"},speed:{type:Number,default:2},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},setup:function(e){var t=(0,i.Fl)((function(){return e.uniqueKey?"".concat(e.uniqueKey,"-idClip"):a()})),r=(0,i.Fl)((function(){return e.uniqueKey?"".concat(e.uniqueKey,"-idGradient"):a()})),n=(0,i.Fl)((function(){var t;return null!==(t=e.width)&&void 0!==t?t:400})),l=(0,i.Fl)((function(){var t;return null!==(t=e.height)&&void 0!==t?t:130})),s=(0,i.Fl)((function(){var t;return null!==(t=e.viewBox)&&void 0!==t?t:"0 0 ".concat(n.value," ").concat(l.value)}));return{idClip:t,idGradient:r,computedViewBox:s}},render:function(){return(0,i.Wm)("svg",{width:this.width,height:this.height,viewBox:this.computedViewBox,version:"1.1",preserveAspectRatio:this.preserveAspectRatio},[(0,i.Wm)("rect",{style:{fill:"url(".concat(this.baseUrl,"#").concat(this.idGradient,")")},"clip-path":"url(".concat(this.baseUrl,"#").concat(this.idClip,")"),x:"0",y:"0",width:"100%",height:"100%"},null),(0,i.Wm)("defs",null,[(0,i.Wm)("clipPath",{id:this.idClip},[this.$slots["default"]?this.$slots["default"]():(0,i.Wm)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"},null)]),(0,i.Wm)("linearGradient",{id:this.idGradient},[(0,i.Wm)("stop",{offset:"0%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-2; 1",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,i.Wm)("stop",{offset:"50%","stop-color":this.secondaryColor,"stop-opacity":this.secondaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,i.Wm)("stop",{offset:"100%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-1; 2",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null])])])])}}),l=((0,i.aZ)((function(e,t){var r=t.attrs;return function(){return(0,i.Wm)(n,r,{default:function(){return[(0,i.Wm)("circle",{cx:"10",cy:"20",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"50",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"80",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"110",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"},null)]}})}})),(0,i.aZ)((function(e,t){var r=t.attrs;return function(){return(0,i.Wm)(n,r,{default:function(){return[(0,i.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"},null),(0,i.Wm)("rect",{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"},null),(0,i.Wm)("rect",{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"},null),(0,i.Wm)("rect",{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,i.Wm)("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,i.Wm)("rect",{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"},null),(0,i.Wm)("rect",{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,i.Wm)("rect",{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,i.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"},null)]}})}})),(0,i.aZ)((function(e,t){var r=t.attrs;return function(){return(0,i.Wm)(n,r,{default:function(){return[(0,i.Wm)("rect",{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"},null),(0,i.Wm)("rect",{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"},null),(0,i.Wm)("circle",{cx:"30",cy:"30",r:"30"},null)]}})}})),(0,i.aZ)((function(e,t){var r=t.attrs;return function(){return(0,i.Wm)(n,r,{default:function(){return[(0,i.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"},null),(0,i.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"},null)]}})}})),(0,i.aZ)((function(e,t){var r=t.attrs;return function(){return(0,i.Wm)(n,(0,i.dG)(r,{viewBox:"0 0 400 480"}),{default:function(){return[(0,i.Wm)("circle",{cx:"30",cy:"30",r:"30"},null),(0,i.Wm)("rect",{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"},null),(0,i.Wm)("rect",{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"},null),(0,i.Wm)("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"},null)]}})}})))},908:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var i=r(3396),a=r(9242),n=r(7139);const l=(0,i._)("h1",null,"Оформление заказа",-1),s={class:"order-block"},o={class:"payment"},u=(0,i._)("h2",null,"Метод оплаты",-1),d={class:"select-group"},c=["id","value"],h=["for","onClick"],p={class:"delivery"},y=(0,i._)("h2",null,"Способ доставки",-1),m={class:"select-group"},w=["id","value"],g=["for","onClick"],f=(0,i._)("h2",null,"Получатель",-1),x={class:"input-group"},v=(0,i._)("h2",{class:"total"},"Итого",-1),b={class:"pricing"},W={class:"pricing"};function _(e,t,r,_,k,D){return(0,i.wg)(),(0,i.iD)(i.HY,null,[l,(0,i._)("div",s,[(0,i._)("button",{class:"",onClick:t[0]||(t[0]=(...e)=>D.order&&D.order(...e))},"Оформить заказ"),(0,i._)("div",o,[u,(0,i._)("div",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.paymentOptions,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i.wy)((0,i._)("input",{type:"radio",id:e,value:e,"onUpdate:modelValue":t[1]||(t[1]=e=>k.selected_po=e)},null,8,c),[[a.G2,k.selected_po]]),(0,i._)("label",{for:e,onClick:t=>k.selected_po=e},(0,n.zw)(e),9,h)])))),128))])]),(0,i._)("div",p,[y,(0,i._)("div",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.deliveryMethods,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i.wy)((0,i._)("input",{type:"radio",id:e,value:e,"onUpdate:modelValue":t[2]||(t[2]=e=>k.selected_dm=e),onChange:t[3]||(t[3]=(...e)=>D.getDeliveryPrice&&D.getDeliveryPrice(...e))},null,40,w),[[a.G2,k.selected_dm]]),(0,i._)("label",{for:e,onClick:t=>{k.selected_dm=e,D.getDeliveryPrice()}},(0,n.zw)(e),9,g)])))),128))])]),f,(0,i._)("div",x,[(0,i.wy)((0,i._)("input",{type:"text",id:"name",name:"name",placeholder:"Имя","onUpdate:modelValue":t[4]||(t[4]=e=>k.basketData.name=e)},null,512),[[a.nr,k.basketData.name]]),(0,i.wy)((0,i._)("input",{type:"text",id:"surname",name:"surname",placeholder:"Фамилия","onUpdate:modelValue":t[5]||(t[5]=e=>k.basketData.surname=e)},null,512),[[a.nr,k.basketData.surname]]),(0,i.wy)((0,i._)("input",{type:"text",id:"patronymic",name:"patronymic",placeholder:"Отчество","onUpdate:modelValue":t[6]||(t[6]=e=>k.basketData.patronymic=e)},null,512),[[a.nr,k.basketData.patronymic]]),(0,i.wy)((0,i._)("input",{type:"tel",id:"phone",name:"phone",placeholder:"Телефон","onUpdate:modelValue":t[7]||(t[7]=e=>k.basketData.phone=e)},null,512),[[a.nr,k.basketData.phone]]),(0,i.wy)((0,i._)("input",{type:"text",id:"address",name:"address",placeholder:"Адрес доставки","onUpdate:modelValue":t[8]||(t[8]=e=>k.basketData.address=e),onInput:t[9]||(t[9]=(...e)=>D.getDeliveryPrice&&D.getDeliveryPrice(...e))},null,544),[[a.nr,k.basketData.address]]),(0,i.wy)((0,i._)("input",{type:"text",id:"text",pattern:"[0-9]+",name:"postal code",placeholder:"Почтовый индекс","onUpdate:modelValue":t[10]||(t[10]=e=>k.basketData.postal_code=e),onInput:t[11]||(t[11]=(...e)=>D.getDeliveryPrice&&D.getDeliveryPrice(...e))},null,544),[[a.nr,k.basketData.postal_code,void 0,{number:!0}]])]),v,(0,i._)("div",b,[(0,i.Uk)("Стоимость доставки"),(0,i._)("span",null,(0,n.zw)(k.deliveryPrice?`${k.deliveryPrice} ₽`:"Не определена"),1)]),(0,i._)("div",W,[(0,i.Uk)("К оплате"),(0,i._)("span",null,(0,n.zw)(k.basketData.total+k.deliveryPrice)+" ₽",1)])])],64)}var k=r(7123),D=r(3089),C={components:{InstagramLoader:D.z9},data(){return{basketData:{},paymentOptions:["yookassa"],selected_po:"yookassa",deliveryMethods:["Я. Доставка","CДЭК"],selected_dm:"CДЭК",deliveryPrice:null}},watch:{},async mounted(){window.Telegram?.WebApp.BackButton.onClick(this.routeBack),window.Telegram?.WebApp.BackButton.show(),window.Telegram?.WebApp.MainButton.onClick(this.order),window.Telegram?.WebApp.MainButton.enable(),window.Telegram?.WebApp.MainButton.show(),window.Telegram?.WebApp.MainButton.setText("Заказ подтверждаю"),this.basketData=await this.getBasketData(),await this.getDeliveryPrice()},async beforeUnmount(){window.Telegram?.WebApp.MainButton.offClick(this.order),window.Telegram?.WebApp.MainButton.hide(),window.Telegram?.WebApp.BackButton.offClick(this.routeBack),window.Telegram?.WebApp.BackButton.hide()},methods:{order(){return this.basketData.address&&this.basketData.phone&&this.basketData.name&&this.basketData.surname&&this.basketData.patronymic?this.deliveryPrice?void this.$store.state.myApi.post(this.$store.state.restAddr+"/orders",{user_id:this.$store.state.userId,address:this.basketData.address,selected_dm:this.selected_dm,selected_po:this.selected_po,phone:this.basketData.phone,name:this.basketData.name,surname:this.basketData.surname,postal_code:this.basketData.postal_code,patronymic:this.basketData.patronymic,total:this.basketData.total+this.deliveryPrice}).then((async e=>{window.Telegram?.WebApp.disableClosingConfirmation(),window.Telegram?.WebApp.close()})).catch((e=>{k.Z.$emit("noresponse",e)})):alert("Пожалуйста, укажите верные данные для доставки"):alert("Пожалуйста, заполните все поля")},async getDeliveryPrice(){const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/delivery_price",{params:{operator:this.selected_dm,address:this.basketData.address,count:this.basketData.total_count,postal_code:this.basketData.postal_code}}).then((e=>{this.deliveryPrice=e.data?.price})).catch((e=>{console.log(e),this.deliveryPrice=null}));return e??{}},routeBack(){this.$router.go(-1)},async getBasketData(){const e=await this.$store.state.myApi.get(this.$store.state.restAddr+"/basket_data",{params:{user_id:this.$store.state.userId}}).then((e=>e.data)).catch((e=>{k.Z.$emit("noresponse",e)}));return e??{}}}},B=r(89);const A=(0,B.Z)(C,[["render",_]]);var P=A}}]);
//# sourceMappingURL=908.7b4a4dfc.js.map