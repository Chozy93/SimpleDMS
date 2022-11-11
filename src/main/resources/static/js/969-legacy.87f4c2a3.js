"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[969],{1969:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.currentCustomer?r("div",[r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"firstName"}},[e._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentCustomer.firstName,expression:"currentCustomer.firstName"}],staticClass:"form-control",attrs:{type:"text",id:"firstName",required:"",name:"firstName"},domProps:{value:e.currentCustomer.firstName},on:{input:function(t){t.target.composing||e.$set(e.currentCustomer,"firstName",t.target.value)}}})]),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"lastName"}},[e._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentCustomer.lastName,expression:"currentCustomer.lastName"}],staticClass:"form-control",attrs:{type:"text",id:"lastName",required:"",name:"lastName"},domProps:{value:e.currentCustomer.lastName},on:{input:function(t){t.target.composing||e.$set(e.currentCustomer,"lastName",t.target.value)}}})]),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentCustomer.email,expression:"currentCustomer.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:"",name:"email"},domProps:{value:e.currentCustomer.email},on:{input:function(t){t.target.composing||e.$set(e.currentCustomer,"email",t.target.value)}}})]),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"phone"}},[e._v("Phone")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.currentCustomer.phone,expression:"currentCustomer.phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone",required:"",name:"phone"},domProps:{value:e.currentCustomer.phone},on:{input:function(t){t.target.composing||e.$set(e.currentCustomer,"phone",t.target.value)}}})]),r("div",{staticClass:"mb-3"},[r("button",{staticClass:"btn btn-primary me-3",on:{click:e.updateCustomer}},[e._v("Update")]),r("button",{staticClass:"btn btn-danger",on:{click:e.deleteCustomer}},[e._v("Delete")])]),e.message?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v(" "+e._s(e.message)+" ")]):e._e()]):e._e()},a=[],n=r(5963),o={data:function(){return{currentCustomer:null,message:""}},methods:{getCustomer:function(e){var t=this;n.Z.get(e).then((function(e){t.currentCustomer=e.data,console.log(e.data)})).catch((function(e){console.log(e)}))},updateCustomer:function(){var e=this;n.Z.update(this.currentCustomer.cid,this.currentCustomer).then((function(t){console.log(t.data),e.message="The Customer was updated successfully!"})).catch((function(e){console.log(e)}))},deleteCustomer:function(){var e=this;n.Z["delete"](this.currentCustomer.cid).then((function(t){console.log(t.data),e.$router.push("/customer")})).catch((function(e){console.log(e)}))}},mounted:function(){this.message="",this.getCustomer(this.$route.params.cid)}},u=o,l=r(1001),c=(0,l.Z)(u,s,a,!1,null,null,null),i=c.exports},5963:function(e,t,r){var s=r(6133),a=r(2751),n=(r(2222),r(2327)),o=function(){function e(){(0,s.Z)(this,e)}return(0,a.Z)(e,[{key:"getAll",value:function(e,t,r){return n.Z.get("/customer?email=".concat(e,"&page=").concat(t,"&size=").concat(r))}},{key:"get",value:function(e){return n.Z.get("/customer/".concat(e))}},{key:"create",value:function(e){return n.Z.post("/customer",e)}},{key:"update",value:function(e,t){return n.Z.put("/customer/".concat(e),t)}},{key:"delete",value:function(e){return n.Z["delete"]("/customer/deletion/".concat(e))}},{key:"deleteAll",value:function(){return n.Z["delete"]("/customer/all")}}]),e}();t["Z"]=new o}}]);
//# sourceMappingURL=969-legacy.87f4c2a3.js.map