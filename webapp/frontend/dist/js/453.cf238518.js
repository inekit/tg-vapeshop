"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[453],{3089:function(t,e,r){r.d(e,{z9:function(){return n}});var i=r(3396),s=function(){return Math.random().toString(36).substring(2)},a=(0,i.aZ)({name:"ContentLoader",props:{width:{type:[Number,String]},height:{type:[Number,String]},viewBox:{type:String},preserveAspectRatio:{type:String,default:"xMidYMid meet"},speed:{type:Number,default:2},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},setup:function(t){var e=(0,i.Fl)((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idClip"):s()})),r=(0,i.Fl)((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idGradient"):s()})),a=(0,i.Fl)((function(){var e;return null!==(e=t.width)&&void 0!==e?e:400})),n=(0,i.Fl)((function(){var e;return null!==(e=t.height)&&void 0!==e?e:130})),o=(0,i.Fl)((function(){var e;return null!==(e=t.viewBox)&&void 0!==e?e:"0 0 ".concat(a.value," ").concat(n.value)}));return{idClip:e,idGradient:r,computedViewBox:o}},render:function(){return(0,i.Wm)("svg",{width:this.width,height:this.height,viewBox:this.computedViewBox,version:"1.1",preserveAspectRatio:this.preserveAspectRatio},[(0,i.Wm)("rect",{style:{fill:"url(".concat(this.baseUrl,"#").concat(this.idGradient,")")},"clip-path":"url(".concat(this.baseUrl,"#").concat(this.idClip,")"),x:"0",y:"0",width:"100%",height:"100%"},null),(0,i.Wm)("defs",null,[(0,i.Wm)("clipPath",{id:this.idClip},[this.$slots["default"]?this.$slots["default"]():(0,i.Wm)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"},null)]),(0,i.Wm)("linearGradient",{id:this.idGradient},[(0,i.Wm)("stop",{offset:"0%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-2; 1",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,i.Wm)("stop",{offset:"50%","stop-color":this.secondaryColor,"stop-opacity":this.secondaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,i.Wm)("stop",{offset:"100%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-1; 2",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null])])])])}}),n=((0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,r,{default:function(){return[(0,i.Wm)("circle",{cx:"10",cy:"20",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"50",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"80",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"110",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,r,{default:function(){return[(0,i.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"},null),(0,i.Wm)("rect",{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"},null),(0,i.Wm)("rect",{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"},null),(0,i.Wm)("rect",{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,i.Wm)("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,i.Wm)("rect",{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"},null),(0,i.Wm)("rect",{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,i.Wm)("rect",{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,i.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,r,{default:function(){return[(0,i.Wm)("rect",{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"},null),(0,i.Wm)("rect",{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"},null),(0,i.Wm)("circle",{cx:"30",cy:"30",r:"30"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,r,{default:function(){return[(0,i.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"},null),(0,i.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(a,(0,i.dG)(r,{viewBox:"0 0 400 480"}),{default:function(){return[(0,i.Wm)("circle",{cx:"30",cy:"30",r:"30"},null),(0,i.Wm)("rect",{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"},null),(0,i.Wm)("rect",{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"},null),(0,i.Wm)("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"},null)]}})}})))},2646:function(t,e,r){r.d(e,{Z:function(){return $}});var i=r(3396),s=r(7139);const a={class:"search-block"},n=["value"],o=["src"],l=["src"],c={ref:"sort-list",class:"sort-list"},u=(0,i._)("span",null,"Сортировать по",-1),h=["for"],d=["id","checked","value"],m={ref:"categories-list",class:"categories-list"},g=(0,i._)("span",null,"Категория",-1),p=["checked"],y=(0,i._)("label",{for:"null-name"},"Все категории",-1),f=["id","checked","value","label"],w=["for"];function x(t,e,x,v,W,b){return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("input",{type:"search",value:t.$store.state.searchQuery,onChange:e[0]||(e[0]=(...t)=>b.openResults&&b.openResults(...t)),placeholder:"Поиск.."},null,40,n),(0,i._)("div",{class:"sort",onClick:e[1]||(e[1]=(...t)=>b.toggleSort&&b.toggleSort(...t))},[(0,i._)("img",{src:r(8752)},null,8,o)]),(0,i._)("div",{class:"categories",onClick:e[2]||(e[2]=(...t)=>b.toggleCategories&&b.toggleCategories(...t))},[(0,i._)("img",{src:r(9001)},null,8,l)]),(0,i._)("div",c,[u,((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)({newing:"Новизна",ascending:"По возрастанию",descending:"По убыванию"},((r,a)=>(0,i._)("div",null,[(0,i._)("label",{for:a},(0,s.zw)(r),9,h),(0,i._)("input",{id:a,checked:a===t.$store.state.filters.sort_type,onClick:e[3]||(e[3]=(...t)=>b.changeSort&&b.changeSort(...t)),type:"radio",name:"project-name",value:a},null,8,d)]))),64))],512),(0,i._)("div",m,[g,(0,i._)("div",null,[(0,i._)("input",{id:"null-name",checked:!t.$store.state.filters.category_name,onClick:e[4]||(e[4]=(...t)=>b.changeCategory&&b.changeCategory(...t)),type:"radio",name:"project-name",value:""},null,8,p),y]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(W.categories,(r=>((0,i.wg)(),(0,i.iD)("div",{key:r.name},[(0,i._)("input",{id:r.name,checked:r.name===t.$store.state.filters.category_name,onChange:e[5]||(e[5]=(...t)=>b.changeCategory&&b.changeCategory(...t)),type:"radio",name:"project-name",value:r.name,label:r.name},null,40,f),(0,i._)("label",{for:r.name},(0,s.zw)(r.name),9,w)])))),128))],512),(0,i._)("div",{ref:"close-block",class:"close-block",onClick:e[6]||(e[6]=(...t)=>b.closeAll&&b.closeAll(...t))},null,512)])}r(7658);var v=r(7123),W={data(){return{categories:{}}},async beforeMount(){this.categories=await this.getCategories();let t=window.location.search.substring(1);this.params=new URLSearchParams(t),this.$store.state.filters={category_name:this.params.get("category"),sort_type:this.params.get("sort")??"newing"}},methods:{search(t){this.$store.state.searchQuery=t.target.value},openResults(t){this.clickInput(),this.$store.state.searchQuery=t.target.value,"Filters"!==this.$route.name&&"Cities"!==this.$route.name||this.$router.push("/results/"+this.$route.params.city)},async getCategories(){return await this.$store.state.myApi.get(this.$store.state.restAddr+"/categories").then((t=>t.data)).catch((t=>{v.Z.$emit("noresponse",t)}))},toggleCategories(){this.$refs["categories-list"].classList.toggle("shown"),this.$refs["close-block"].classList.toggle("shown"),document.body.classList.toggle("h-100")},toggleSort(){this.$refs["sort-list"].classList.toggle("shown"),this.$refs["close-block"].classList.toggle("shown"),document.body.classList.toggle("h-100")},closeAll(){this.$refs["sort-list"].classList.remove("shown"),this.$refs["categories-list"].classList.remove("shown"),this.$refs["close-block"].classList.remove("shown")},changeSort(t){this.$store.state.filters={category_name:this.$store.state.filters.category_name,sort_type:t.target.value};const e=new URL(window.location);e.searchParams.set("sort",t.target.value),window.history.pushState({},"",e),this.toggleSort()},changeCategory(t){this.$store.state.filters={sort_type:this.$store.state.filters.sort_type,category_name:t.target.value};const e=new URL(window.location);e.searchParams.set("category",t.target.value),window.history.pushState({},"",e),this.toggleCategories()},clickInput(){document.activeElement.blur()}}},b=r(89);const _=(0,b.Z)(W,[["render",x]]);var $=_},5453:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}});var i=r(3396),s=r(7139);const a={class:"result-item"},n={class:"img-container"},o=["src"],l={class:"text-container"};function c(t,e,r,c,u,h){const d=(0,i.up)("InstagramLoader"),m=(0,i.up)("router-link"),g=(0,i.up)("MasonryWall");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(d,{class:"preloader",ref:"preloader",viewBox:"0 0 300 250"},null,512),(0,i.Wm)(d,{class:"preloader",ref:"preloader",viewBox:"0 0 300 200"},null,512),(0,i.Wm)(d,{class:"preloader",ref:"preloader",viewBox:"0 0 300 200"},null,512),(0,i.Wm)(g,{class:"categories-block",items:t.$store.state.categories??[],"ssr-columns":3,"column-width":t.bodyWidth/9,gap:12},{default:(0,i.w5)((({item:e,index:r})=>[(0,i._)("div",a,[(0,i.Wm)(m,{to:`/results/${t.$store.state.userId}?category=${e.name}`},{default:(0,i.w5)((()=>[(0,i._)("div",n,[(0,i._)("img",{src:`/colorsserver/public/pics/${e.preview}`},null,8,o)]),(0,i._)("div",l,[(0,i._)("h2",null,(0,s.zw)(e.name),1)])])),_:2},1032,["to"])])])),_:1},8,["items","column-width"])],64)}r(7658);var u=r(2646),h=r(7123),d=r(3089),m={components:{searchBlock:u.Z,InstagramLoader:d.z9},data(){return{}},watch:{},beforeMount(){this.bodyWidth=document.body.clientHeight},async mounted(){window.Telegram?.WebApp.BackButton.hide(),window.Telegram?.WebApp.expand(),this.updatePage(300);let t=window.location.search.substring(1);this.params=new URLSearchParams(t);const e=window.Telegram?.WebApp?.initDataUnsafe?.user?.id;this.$store.state.userId=e??this.$route.params?.userId,window.Telegram?.WebApp.enableClosingConfirmation(),await this.haveBasketItems()?(window.Telegram?.WebApp.MainButton.onClick(this.routeToBasket),window.Telegram?.WebApp.MainButton.show(),window.Telegram?.WebApp.MainButton.setText("Корзина")):(window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket),window.Telegram?.WebApp.MainButton.hide())},async beforeUnmount(){window.Telegram?.WebApp.MainButton.offClick(this.routeToBasket),window.Telegram?.WebApp.MainButton.hide()},methods:{routeToBasket(){this.$router.push("/basket")},async haveBasketItems(){const t=await this.$store.state.myApi.get(this.$store.state.restAddr+"/basket_data",{params:{user_id:this.$store.state.userId}}).then((t=>t.data?.favorites?.length)).catch((t=>{alert(t),h.Z.$emit("noresponse",t)}));return t},async updatePage(t){this.$store.state.categories=await this.getCategories(!0),this.$refs["results-block"]?.classList.add("hidden"),document.body.classList.add("stop-scrolling"),setTimeout((()=>{const t=document.getElementsByClassName("preloader");console.log(t);for(let e of t)e.classList.add("hidden");this.$refs["results-block"]?.classList.remove("hidden"),document.body.classList.remove("stop-scrolling")}),t)},async getCategories(){const t="/categories",e=await this.$store.state.myApi.get(this.$store.state.restAddr+t,{params:{}}).then((t=>t.data)).catch((t=>{h.Z.$emit("noresponse",t)}));return e}}},g=r(89);const p=(0,g.Z)(m,[["render",c]]);var y=p},9001:function(t,e,r){t.exports=r.p+"img/categories.bbc4e0ea.svg"},8752:function(t,e,r){t.exports=r.p+"img/sort.f8248c7d.svg"}}]);
//# sourceMappingURL=453.cf238518.js.map