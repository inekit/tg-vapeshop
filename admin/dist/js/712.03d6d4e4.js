(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[712],{4234:function(e){let t={year:"numeric",month:"long",day:"numeric"};e.exports={dateFormatter:e=>new Date(e).toLocaleDateString("ru-RU",t),getAgeStr(e){return e>12?`${Math.trunc(e/12)} лет ${e%12} месяцев`:`${e} месяцев`}}},7942:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var i=a(3396),d=a(7139);const o={key:1},l={class:"d-grid gap-2 d-md-flex justify-content-md-center"};function n(e,t,a,n,s,r){const u=(0,i.up)("CCardHeader"),m=(0,i.up)("CTableHeaderCell"),c=(0,i.up)("CTableRow"),p=(0,i.up)("CTableHead"),h=(0,i.up)("CFormInput"),f=(0,i.up)("CTableDataCell"),w=(0,i.up)("CButton"),_=(0,i.up)("CTableBody"),g=(0,i.up)("CTable"),v=(0,i.up)("CCardBody"),k=(0,i.up)("CCard"),b=(0,i.up)("CCol"),C=(0,i.up)("CRow"),y=(0,i.up)("CPaginationItem"),D=(0,i.up)("CPagination");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Wm)(b,{md:12},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{class:"mb-4"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(a.name),1)])),_:1}),(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,{align:"middle",class:"mb-0 border",hover:"",responsive:""},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{color:"light"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.fieldNames,(e=>((0,i.wg)(),(0,i.j4)(m,{key:e+"header",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(e),1)])),_:2},1024)))),128)),(0,i.Wm)(m,{class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Uk)("Действия")])),_:1})])),_:1})])),_:1}),(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.transformData(a.rows),((n,u)=>((0,i.wg)(),(0,i.j4)(c,{key:u+"row"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n,((e,t)=>((0,i.wg)(),(0,i.j4)(f,{key:t+"row",class:"text-center"},{default:(0,i.w5)((()=>[s.updatingId===a.rows[u]?.id?((0,i.wg)(),(0,i.j4)(h,{key:0,modelValue:s.formData[a.fields[t]?.name],"onUpdate:modelValue":e=>s.formData[a.fields[t]?.name]=e},null,8,["modelValue","onUpdate:modelValue"])):((0,i.wg)(),(0,i.iD)("span",o,(0,d.zw)(e),1))])),_:2},1024)))),128)),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i._)("div",l,[s.updatingId===a.rows[u]?.id?((0,i.wg)(),(0,i.j4)(w,{key:0,color:"primary",size:"md",onClick:e=>r.editRow(u)},{default:(0,i.w5)((()=>[(0,i.Uk)(" Сохранить")])),_:2},1032,["onClick"])):(0,i.kq)("",!0),s.updatingId===a.rows[u]?.id?((0,i.wg)(),(0,i.j4)(w,{key:1,color:"light",size:"md",onClick:t[0]||(t[0]=e=>s.updatingId=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" Отменить")])),_:1})):((0,i.wg)(!0),(0,i.iD)(i.HY,{key:2},(0,i.Ko)(a.actions,((t,a)=>((0,i.wg)(),(0,i.j4)(w,{key:a+"action",color:t?.color,size:"sm",onClick:i=>r.chooseAction(a,t,u,e.j,e.column)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(a),1)])),_:2},1032,["color","onClick"])))),128))])])),_:2},1024)])),_:2},1024)))),128)),(0,i.Wm)(c)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(D,{"aria-label":"Page navigation example"},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{onClick:r.previousPage},{default:(0,i.w5)((()=>[(0,i.Uk)("Назад")])),_:1},8,["onClick"]),(0,i.Wm)(y,{disabled:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(s.page),1)])),_:1}),(0,i.Wm)(y,{onClick:r.nextPage},{default:(0,i.w5)((()=>[(0,i.Uk)("Далее")])),_:1},8,["onClick"])])),_:1})],64)}a(7658);var s=a(4234),r={props:{name:{type:String},fields:[],actions:[],rows:[],postData:{type:Function,default:()=>{}},updateRow:{type:Function,default:()=>{}},editMode:{type:String,default:"inline"}},data(){return{fieldNames:[],perPage:10,page:1,updatingId:!1,formData:{}}},async mounted(){this.fieldNames=this.fields.map((e=>"object"===typeof e?e.title??e.name:e)),await this.postData(this.perPage,this.page)},methods:{dateFormatter:s.dateFormatter,chooseAction(e,t,a){t&&(console.log("Изменить"===e&&"inline"===this.editMode,a),"Изменить"===e&&"inline"===this.editMode?(this.updatingId=this.rows[a]?.id,this.formData=this.rows[a]):t?.action(this.rows[a]))},async nextPage(){const e=await this.postData(this.perPage,this.page+1);e?.length>0&&this.page++},previousPage(){this.page>1&&this.page--,this.postData(this.perPage,this.page)},toPage(e){this.page=e,this.postData(this.perPage,this.page)},editRow(e){this.updatingId=!1,this.updateRow(this.rows[e]?.id,this.formData)},transformData(e){return e?.map(this.transformDataEl)},transformDataEl(e){let t=[];for(let a of this.fields){const i=a.name.split(".")??a.split(".");let d=e;i?.forEach((e=>d=d?.[e])),"creation_date"!==a?.name&&"publication_date"!==a?.name||(d=(0,s.dateFormatter)(d)),"text"===a?.name&&(d=d.substr(0,100)),t.push(d??"")}return t}}},u=a(89);const m=(0,u.Z)(r,[["render",n]]);var c=m},8712:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return B}});var i=a(3396),d=a(7139);const o={key:0,class:"change-basket-buttons"},l={key:1,class:"user-individual-container"},n=(0,i._)("h2",null,"Индивидуальная позиция: ",-1),s=(0,i._)("span",null,"Цена: ",-1),r={key:2,class:"change-basket-buttons"},u={key:3,class:"user-individual-input"};function m(e,t,a,m,c,p){const h=(0,i.up)("CFormInput"),f=(0,i.up)("AddBasketItemModal"),w=(0,i.up)("FormBasketModal"),_=(0,i.up)("CButton"),g=(0,i.up)("CInputGroup"),v=(0,i.up)("Table");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(h,{class:"mb-4",type:"search",modelValue:c.user_id,"onUpdate:modelValue":t[0]||(t[0]=e=>c.user_id=e),onChange:p.get,placeholder:"Поиск по UID"},null,8,["modelValue","onChange"]),(0,i.Wm)(f,{visible:c.formVisible,formData:c.formData,mode:e.formMode},null,8,["visible","formData","mode"]),c.user_id?((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=e=>c.showBasket=!0)},"Сформировать заказ")])):(0,i.kq)("",!0),(0,i.Wm)(w,{visible:c.showBasket,user_id:c.user_id},null,8,["visible","user_id"]),c.individual?((0,i.wg)(),(0,i.iD)("div",l,[n,(0,i._)("p",null,(0,d.zw)(c.individual.text),1),(0,i._)("p",null,[s,(0,i.Uk)((0,d.zw)(c.individual.price)+" руб.",1)])])):(0,i.kq)("",!0),c.user_id?((0,i.wg)(),(0,i.iD)("div",r,[c.individual?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"btn btn-secondary",onClick:t[3]||(t[3]=(...e)=>p.dropIndividual&&p.dropIndividual(...e))},"Удалить индивидуальную позицию")):((0,i.wg)(),(0,i.iD)("button",{key:0,class:"btn btn-secondary",onClick:t[2]||(t[2]=e=>c.showIndividual=!c.showIndividual)},"Добавить индивидуальную позицию"))])):(0,i.kq)("",!0),c.showIndividual&&c.user_id?((0,i.wg)(),(0,i.iD)("div",u,[(0,i.Wm)(g,{class:"mb-3"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"w-75 h-38",placeholder:"Введите описание индивидуальной позицию",modelValue:c.tempIndividualText,"onUpdate:modelValue":t[4]||(t[4]=e=>c.tempIndividualText=e)},null,8,["modelValue"]),(0,i.Wm)(h,{class:"h-38",type:"number",placeholder:"Введите цену",modelValue:c.tempIndividualPrice,"onUpdate:modelValue":t[5]||(t[5]=e=>c.tempIndividualPrice=e)},null,8,["modelValue"]),(0,i.Wm)(_,{type:"button",color:"secondary",variant:"outline",id:"button-addon2",onClick:p.addIndividual},{default:(0,i.w5)((()=>[(0,i.Uk)(" Добавить к заказу")])),_:1},8,["onClick"])])),_:1})])):(0,i.kq)("",!0),(0,i.Wm)(v,{fields:c.tableFieldNames,postData:p.get,actions:c.dataActions,rows:c.rows,editMode:"form",name:"Позиции"},null,8,["fields","postData","actions","rows"])])}var c=a(7942),p=a(7123),h=a(4234),f=a(6265),w=a.n(f),_=a(9242);function g(e,t,a,o,l,n){const s=(0,i.up)("CModalTitle"),r=(0,i.up)("CModalHeader"),u=(0,i.up)("CFormInput"),m=(0,i.up)("CForm"),c=(0,i.up)("CModalBody"),p=(0,i.up)("CButton"),h=(0,i.up)("CModalFooter"),f=(0,i.up)("CModal");return(0,i.wg)(),(0,i.j4)(f,{backdrop:"static",alignment:"center",visible:a.visible,onClose:n.closeModal},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)("new"===a.mode?"Добавить позицию":"Редактировать позицию"),1)])),_:1})])),_:1}),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{ref:"add-file-form",novalidate:"",validated:l.formValid,onSubmit:t[1]||(t[1]=(0,_.iM)((t=>e.addCategory()),["prevent"])),class:"add-user",style:{display:"'none'"}},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{class:"mb-3",modelValue:a.formData.count,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.count=e),placeholder:"Категория",id:"inputName","aria-describedby":"inputGroupPrepend",maxlength:"255",required:"",feedbackValid:"Все ок",type:"number",feedbackInvalid:"Введите корректное название категории"},null,8,["modelValue"])])),_:1},8,["validated"])])),_:1}),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p,{color:"secondary",onClick:n.closeModal},{default:(0,i.w5)((()=>[(0,i.Uk)(" Отменить ")])),_:1},8,["onClick"]),"new"===a.mode?((0,i.wg)(),(0,i.j4)(p,{key:0,color:"primary",onClick:n.addBasketItem},{default:(0,i.w5)((()=>[(0,i.Uk)("Добавить позицию")])),_:1},8,["onClick"])):((0,i.wg)(),(0,i.j4)(p,{key:1,color:"primary",onClick:n.editBasketItem},{default:(0,i.w5)((()=>[(0,i.Uk)("Редактировать позицию")])),_:1},8,["onClick"]))])),_:1})])),_:1},8,["visible","onClose"])}const v=w().create({withCredentials:!0});var k={props:{mode:{required:!0,type:String,validator:e=>["new","edit"].includes(e.toLowerCase())},visible:!1,formData:{name:"",description:""}},data(){return{formValid:!1}},mounted(){},updated(){this.formValid=!1},methods:{addNewOrderItem(){p.Z.$emit("addNewOrderItem")},closeModal(){p.Z.$emit("closeModal")},constractFromData(){if(!this.formData.count)throw new Error;var e=new FormData;return this.formData.mainside_id&&e.append("mainside_id",this.formData.mainside_id),e.append("item_option_id",this.formData.id),e.append("order_id",this.formData.order_id),e.append("count",this.formData.count),e},addBasketItem(){},editBasketItem(){try{const e=this.constractFromData(!0);v.put(this.$store.state.publicPath+"/api/admin/orders_items",e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{p.Z.$emit("orderItemEdited")})).catch((e=>{p.Z.$emit("noresponse",e)}))}catch(e){console.log(e),this.formValid=!0}}}},b=a(89);const C=(0,b.Z)(k,[["render",g],["__scopeId","data-v-67e45fbb"]]);var y=C;const D={class:"user-iframe-container"},I=["src"];function W(e,t,a,d,o,l){const n=(0,i.up)("CModalTitle"),s=(0,i.up)("CModalHeader"),r=(0,i.up)("CModalBody"),u=(0,i.up)("CButton"),m=(0,i.up)("CModalFooter"),c=(0,i.up)("CModal");return(0,i.wg)(),(0,i.j4)(c,{backdrop:"static",alignment:"center",visible:a.visible,onClose:l.closeModal},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Формирование корзины")])),_:1})])),_:1}),a.visible?((0,i.wg)(),(0,i.j4)(r,{key:0,style:{padding:"0 !important"}},{default:(0,i.w5)((()=>[(0,i._)("div",D,[(0,i._)("iframe",{src:`https://fotodesire.ru/colorsfront/${o.subpath}/${a.user_id}`,width:"495",height:"730",align:"left"},"\r\n                    Ваш браузер не поддерживает плавающие фреймы!\r\n                ",8,I)])])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{color:"secondary",onClick:t[0]||(t[0]=e=>o.subpath="results")},{default:(0,i.w5)((()=>[(0,i.Uk)(" Товары ")])),_:1}),(0,i.Wm)(u,{color:"secondary",onClick:t[1]||(t[1]=e=>o.subpath="basket")},{default:(0,i.w5)((()=>[(0,i.Uk)("Корзина")])),_:1})])),_:1})])),_:1},8,["visible","onClose"])}var M={props:{mode:{required:!0,type:String,validator:e=>["new","edit"].includes(e.toLowerCase())},user_id:Number,visible:Boolean},data(){return{subpath:"basket"}},mounted(){},updated(){},methods:{closeModal(){p.Z.$emit("closeModal")}}};const V=(0,b.Z)(M,[["render",W],["__scopeId","data-v-c4fcd394"]]);var U=V;const $=w().create({withCredentials:!0,credentials:"include"});var P={components:{Table:c.Z,AddBasketItemModal:y,FormBasketModal:U},data(){return{myApi:$,formVisible:!1,formData:{},order:{},rows:[],user_id:null,showIndividual:!1,showBasket:!1,tempIndividualText:null,tempIndividualPrice:null,dataActions:{"Изменить":{action:this.change,color:"warning"},"Удалить":{action:this.delete,color:"danger"}},individual:null,tableFieldNames:[{name:"id",title:"Артикул"},{name:"title",title:"Название"},{name:"size",title:"Размер"},{name:"material",title:"Материал"},{name:"count",title:"Количество"}]}},created(){p.Z.$on("addNewOrderItem",(()=>{this.formMode="new",this.formVisible=!0})),p.Z.$on("closeModal",(()=>{this.formVisible=!1,this.showBasket=!1,this.formData={}})),p.Z.$on("orderItemAdded",(()=>{this.formVisible=!1,this.get(),this.formData={}})),p.Z.$on("orderItemEdited",(()=>{this.formVisible=!1,this.get(),this.formData={}}))},methods:{constractFromData(){var e=new FormData;return e.append("change_individual","true"),e.append("individual_text",this.tempIndividualText),e.append("individual_price",this.tempIndividualPrice),e},addIndividual(){$.post(this.$store.state.publicPath+"/api/favorites/",{change_individual:!0,individual_text:this.tempIndividualText,individual_price:this.tempIndividualPrice}).then((()=>{this.individual={text:this.tempIndividualText,price:this.tempIndividualPrice},this.showIndividual=!1})).catch((e=>{p.Z.$emit("noresponse",e)}))},dropIndividual(){$.delete(this.$store.state.publicPath+"/api/favorites/",{data:{change_individual:!0}}).then((()=>{this.individual=null,this.showIndividual=!1})).catch((e=>{p.Z.$emit("noresponse",e)}))},change(e){if(e.mainside_id)return alert("Нельзя изменить зависимую сторону");this.formVisible=!0,e.tags_array=new Set(e.tags_array),this.formData=e,this.formMode="edit"},dateFormatter:h.dateFormatter,get(){return console.log(this.tag),$.get(this.$store.state.publicPath+"/api/favorites/",{params:{user_id:this.user_id}}).then((e=>{this.rows=e.data?.map((e=>(e.mainside_id&&(e.title=`${e.title} (обр - ${e.mainside_id})`),e)))})).catch((e=>(p.Z.$emit("noresponse",e),!1)))},delete(e){const t=confirm("Вы действительно хотите удалить позицию из заказа?");if(t)return $.delete(this.$store.state.publicPath+"/api/admin/orders_items/",{data:{mainside_id:e.mainside_id,item_option_id:e.id,order_id:e.order_id}}).then((()=>{this.get(),p.Z.$emit("tagDeleted")})).catch((e=>{p.Z.$emit("noresponse",e)}))}}};const F=(0,b.Z)(P,[["render",m]]);var B=F}}]);
//# sourceMappingURL=712.03d6d4e4.js.map