"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[447],{3089:function(t,e,r){r.d(e,{z9:function(){return l}});var i=r(3396),s=function(){return Math.random().toString(36).substring(2)},n=(0,i.aZ)({name:"ContentLoader",props:{width:{type:[Number,String]},height:{type:[Number,String]},viewBox:{type:String},preserveAspectRatio:{type:String,default:"xMidYMid meet"},speed:{type:Number,default:2},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},setup:function(t){var e=(0,i.Fl)((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idClip"):s()})),r=(0,i.Fl)((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idGradient"):s()})),n=(0,i.Fl)((function(){var e;return null!==(e=t.width)&&void 0!==e?e:400})),l=(0,i.Fl)((function(){var e;return null!==(e=t.height)&&void 0!==e?e:130})),a=(0,i.Fl)((function(){var e;return null!==(e=t.viewBox)&&void 0!==e?e:"0 0 ".concat(n.value," ").concat(l.value)}));return{idClip:e,idGradient:r,computedViewBox:a}},render:function(){return(0,i.Wm)("svg",{width:this.width,height:this.height,viewBox:this.computedViewBox,version:"1.1",preserveAspectRatio:this.preserveAspectRatio},[(0,i.Wm)("rect",{style:{fill:"url(".concat(this.baseUrl,"#").concat(this.idGradient,")")},"clip-path":"url(".concat(this.baseUrl,"#").concat(this.idClip,")"),x:"0",y:"0",width:"100%",height:"100%"},null),(0,i.Wm)("defs",null,[(0,i.Wm)("clipPath",{id:this.idClip},[this.$slots["default"]?this.$slots["default"]():(0,i.Wm)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"},null)]),(0,i.Wm)("linearGradient",{id:this.idGradient},[(0,i.Wm)("stop",{offset:"0%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-2; 1",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,i.Wm)("stop",{offset:"50%","stop-color":this.secondaryColor,"stop-opacity":this.secondaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),(0,i.Wm)("stop",{offset:"100%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?(0,i.Wm)("animate",{attributeName:"offset",values:"-1; 2",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null])])])])}}),l=((0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(n,r,{default:function(){return[(0,i.Wm)("circle",{cx:"10",cy:"20",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"50",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"80",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"},null),(0,i.Wm)("circle",{cx:"10",cy:"110",r:"8"},null),(0,i.Wm)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(n,r,{default:function(){return[(0,i.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"},null),(0,i.Wm)("rect",{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"},null),(0,i.Wm)("rect",{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"},null),(0,i.Wm)("rect",{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,i.Wm)("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),(0,i.Wm)("rect",{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"},null),(0,i.Wm)("rect",{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,i.Wm)("rect",{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),(0,i.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(n,r,{default:function(){return[(0,i.Wm)("rect",{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"},null),(0,i.Wm)("rect",{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"},null),(0,i.Wm)("rect",{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"},null),(0,i.Wm)("circle",{cx:"30",cy:"30",r:"30"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(n,r,{default:function(){return[(0,i.Wm)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"},null),(0,i.Wm)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"},null),(0,i.Wm)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"},null)]}})}})),(0,i.aZ)((function(t,e){var r=e.attrs;return function(){return(0,i.Wm)(n,(0,i.dG)(r,{viewBox:"0 0 400 480"}),{default:function(){return[(0,i.Wm)("circle",{cx:"30",cy:"30",r:"30"},null),(0,i.Wm)("rect",{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"},null),(0,i.Wm)("rect",{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"},null),(0,i.Wm)("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"},null)]}})}})))},8824:function(t,e,r){r.d(e,{Z:function(){return u}});var i=r(3396);const s={class:"search-block"},n=["value"];function l(t,e,r,l,a,o){return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("input",{type:"search",value:t.$store.state.searchQuery,onChange:e[0]||(e[0]=(...t)=>o.openResults&&o.openResults(...t)),placeholder:"Поиск.."},null,40,n)])}r(7658);var a={data(){return{}},mounted(){},methods:{search(t){this.$store.state.searchQuery=t.target.value},openResults(t){this.clickInput(),this.$store.state.searchQuery=t.target.value,this.$router.push("/results/"+this.$route.params.city)},clickInput(){document.activeElement.blur()}}},o=r(89);const c=(0,o.Z)(a,[["render",l]]);var u=c},9447:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var i=r(3396),s=r(7139);const n=(0,i._)("h1",null,"Каталог",-1),l={class:"result-item"},a={class:"img-container"},o=["src"],c={class:"text-container"};function u(t,e,r,u,h,d){const m=(0,i.up)("searchBlock"),p=(0,i.up)("InstagramLoader"),y=(0,i.up)("router-link"),f=(0,i.up)("MasonryWall");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i.Wm)(m),(0,i.Wm)(p,{class:"preloader",ref:"preloader",viewBox:"0 0 300 250"},null,512),(0,i.Wm)(p,{class:"preloader",ref:"preloader",viewBox:"0 0 300 200"},null,512),(0,i.Wm)(p,{class:"preloader",ref:"preloader",viewBox:"0 0 300 200"},null,512),(0,i.Wm)(f,{class:"results-block",items:t.$store.state.results??[],"ssr-columns":1,"column-width":t.bodyWidth/5,gap:12},{default:(0,i.w5)((({item:t,index:e})=>[(0,i._)("div",l,[(0,i.Wm)(y,{to:`/items/${t.id}`},{default:(0,i.w5)((()=>[(0,i._)("div",a,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)([0],(e=>(0,i._)("img",{key:e,src:`/api/img/${"Москва"===t.city_name?"mos":"spb"}/${t.id}/${e}`},null,8,o))),64))]),(0,i._)("div",c,[(0,i._)("h2",null,(0,s.zw)(t.name),1)])])),_:2},1032,["to"])])])),_:1},8,["items","column-width"])],64)}var h=r(8824),d=r(7123),m=r(3089),p={components:{searchBlock:h.Z,InstagramLoader:m.z9},data(){return{page:1,perPage:10}},watch:{"$store.state.searchQuery":async function(){this.$store.state.results=await this.sendSearchRequest()},$route(t,e){}},async mounted(){this.scroll(),this.bodyWidth=document.body.clientHeight,window.Telegram?.WebApp.MainButton.hide(),window.Telegram?.WebApp.MainButton.disable(),window.Telegram?.WebApp.BackButton.show(),console.log(this.$route.params);const t=this.$route.params?.page,e=this.$route.params?.filter;"city"!==this.$route.params?.city&&(this.city=this.$route.params?.city),"2"===t?this.property_class=e:"3"===t?this.commissioning_year=e:"1"===t?(this.sale_percent_min=this.$store.state.filters.find((e=>t==e.id))?.values.find((t=>t.max==e))?.min,this.sale_percent_max=e):"4"===t&&(this.meter_price_min=this.$store.state.filters.find((e=>t==e.id))?.values.find((t=>t.max==e))?.min,this.meter_price_max=e),this.$store.state.results=await this.sendSearchRequest(),this.$refs["results-block"]?.classList.add("hidden"),document.body.classList.add("stop-scrolling"),setTimeout((()=>{const t=document.getElementsByClassName("preloader");console.log(t);for(let e of t)e.classList.add("hidden");this.$refs["results-block"]?.classList.remove("hidden"),document.body.classList.remove("stop-scrolling")}),400),document.onload=()=>{const t=document.getElementsByClassName("preloader");console.log(t);for(let e of t)e.classList.add("hidden");this.$refs["results-block"]?.classList.remove("hidden")},console.log(1,this.results)},methods:{scroll(){window.onscroll=async()=>{let t=window.scrollY+window.innerHeight+1e3>document.documentElement.scrollHeight;if(t&&!this.loadingUpdate&&!this.isEnded){this.loadingUpdate=!0;const t=await this.sendSearchRequest();this.$store.state.results=[...this.$store.state.results,...t]}}},async sendSearchRequest(){const t=await this.$store.state.myApi.get(this.$store.state.restAddr+"/items",{params:{property_class:this.property_class,sale_percent_min:this.sale_percent_min,sale_percent_max:this.sale_percent_max,commissioning_year:this.commissioning_year,meter_price_min:this.meter_price_min,meter_price_max:this.meter_price_max,searchQuery:this.$store.state.searchQuery,city:this.city,take:10,page:this.page??1}}).then((t=>{const e=t.data;return e.length<this.perPage?this.isEnded=!0:this.page++,this.loadingUpdate=!1,e})).catch((t=>{d.Z.$emit("noresponse",t)}));return console.log(t),t}}},y=r(89);const f=(0,y.Z)(p,[["render",u]]);var g=f}}]);
//# sourceMappingURL=447.3a550657.js.map