"use strict";(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[621],{2621:function(e,t,l){l.r(t),l.d(t,{default:function(){return _}});var s=l(3396),u=l(9242);const a={class:"bg-light min-vh-100 d-flex flex-row align-items-center"},o=(0,s._)("h1",null,"Register",-1),r=(0,s._)("p",{class:"text-medium-emphasis"},"Create your account",-1),i={class:"d-grid"};function n(e,t,l,n,c,d){const m=(0,s.up)("CIcon"),p=(0,s.up)("CInputGroupText"),h=(0,s.up)("CFormInput"),w=(0,s.up)("CInputGroup"),_=(0,s.up)("CButton"),f=(0,s.up)("CForm"),C=(0,s.up)("CCardBody"),g=(0,s.up)("CCard"),W=(0,s.up)("CCol"),v=(0,s.up)("CRow"),b=(0,s.up)("CContainer");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(b,null,{default:(0,s.w5)((()=>[(0,s.Wm)(v,{class:"justify-content-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{md:9,lg:7,xl:6},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{class:"mx-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{class:"p-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{onSubmit:(0,u.iM)(d.callAuth,["prevent"])},{default:(0,s.w5)((()=>[o,r,(0,s.Wm)(w,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{icon:"cil-user"})])),_:1}),(0,s.Wm)(h,{placeholder:"Логин",autocomplete:"username",modelValue:c.login,"onUpdate:modelValue":t[0]||(t[0]=e=>c.login=e)},null,8,["modelValue"])])),_:1}),(0,s.Wm)(w,{class:"mb-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{icon:"cil-lock-locked"})])),_:1}),(0,s.Wm)(h,{type:"password",placeholder:"Пароль",autocomplete:"new-password",modelValue:c.password,"onUpdate:modelValue":t[1]||(t[1]=e=>c.password=e)},null,8,["modelValue"])])),_:1}),(0,s._)("div",i,[(0,s.Wm)(_,{type:"submit",color:"success"},{default:(0,s.w5)((()=>[(0,s.Uk)("Create Account")])),_:1})])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}l(7658);var c=l(6265),d=l.n(c);const m=d().create({withCredentials:!0});var p={name:"Register",data(){return{login:"",password:"",isempty:!0,iscorrect:""}},methods:{callAuth(){const e=this.$store.state.publicPath+"/api/admin/register";this.iscorrect&&(this.iscorrect=!1),this.login&&this.password?(this.isempty=!1,m.put(e,{login:this.login,password:this.password}).then((()=>{this.$router.push("/")})).catch((()=>{alert("Неверные данные")}))):this.isempty=!0}}},h=l(89);const w=(0,h.Z)(p,[["render",n]]);var _=w}}]);
//# sourceMappingURL=621.ea2ebadf.js.map