"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[957],{6957:function(t,e,n){n.r(e),n.d(e,{default:function(){return i}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.currentDept?n("div",{staticClass:"edit-form"},[n("h4",[t._v("Dept")]),n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"dname"}},[t._v("Dname")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentDept.dname,expression:"currentDept.dname"}],staticClass:"form-control",attrs:{type:"text",id:"dname"},domProps:{value:t.currentDept.dname},on:{input:function(e){e.target.composing||t.$set(t.currentDept,"dname",e.target.value)}}})]),n("div",{staticClass:"mt-3 form-group"},[n("label",{attrs:{for:"loc"}},[t._v("Loc")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentDept.loc,expression:"currentDept.loc"}],staticClass:"form-control",attrs:{type:"text",id:"loc"},domProps:{value:t.currentDept.loc},on:{input:function(e){e.target.composing||t.$set(t.currentDept,"loc",e.target.value)}}})])]),n("button",{staticClass:"mt-3 btn btn-danger",on:{click:t.deleteDept}},[t._v("Delete ")]),n("button",{staticClass:"ms-3 mt-3 btn btn-success",attrs:{type:"submit"},on:{click:t.updateDept}},[t._v(" Update ")]),n("p",[t._v(t._s(t.message))])]):n("div",[n("br"),n("p",[t._v("Please click on a Dept...")])])},a=[],c=n(1849),r={data:function(){return{currentDept:null,message:""}},methods:{getDept:function(t){var e=this;c.Z.get(t).then((function(t){e.currentDept=t.data,console.log(t.data)})).catch((function(t){console.log(t)}))},updateDept:function(){var t=this;c.Z.update(this.currentDept.dno,this.currentDept).then((function(e){console.log(e.data),t.message="The Dept was updated successfully!"})).catch((function(t){console.log(t)}))},deleteDept:function(){var t=this;c.Z["delete"](this.currentDept.dno).then((function(e){console.log(e.data),t.$router.push("/dept")})).catch((function(t){console.log(t)}))}},mounted:function(){this.message="",this.getDept(this.$route.params.dno)}},u=r,s=n(1001),l=(0,s.Z)(u,o,a,!1,null,null,null),i=l.exports},1849:function(t,e,n){var o=n(6133),a=n(2751),c=(n(2222),n(2327)),r=function(){function t(){(0,o.Z)(this,t)}return(0,a.Z)(t,[{key:"getAll",value:function(t,e,n){return c.Z.get("/dept?dname=".concat(t,"&page=").concat(e,"&size=").concat(n))}},{key:"get",value:function(t){return c.Z.get("/dept/".concat(t))}},{key:"create",value:function(t){return c.Z.post("/dept",t)}},{key:"update",value:function(t,e){return c.Z.put("/dept/".concat(t),e)}},{key:"delete",value:function(t){return c.Z["delete"]("/dept/deletion/".concat(t))}},{key:"deleteAll",value:function(){return c.Z["delete"]("/dept/all")}}]),t}();e["Z"]=new r}}]);
//# sourceMappingURL=957-legacy.bd833622.js.map