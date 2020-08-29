(function(e){function t(t){for(var n,i,l=t[0],c=t[1],s=t[2],u=0,p=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var c=a[l];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"352d":function(e,t,a){"use strict";var n=a("73d5"),r=a.n(n);r.a},"3f46":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.loading?a("div",{staticClass:"statusBar"},[e._v("Cargando...")]):e._e(),a("Generador"),a("hr"),a("ListaEmpleados")],1)},o=[],i=a("5530"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"com-generador"},[a("Empleado",{attrs:{editable:!0,empleado:e.currentEmpleado}})],1)},c=[],s=(a("7db0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"empleado",class:{editable:e.editable,current:e.current},on:{click:e.selectEmpleado}},[e.editable?[a("div",{staticClass:"profilePic"},[a("input",{ref:"profilePicUploadInput",staticClass:"editLayerInput",attrs:{accept:"image/*",type:"file"},on:{change:e.uploadImage}}),a("button",{staticClass:"editLayer",attrs:{title:"Cambiar imagen",type:"button"},on:{click:function(t){return e.$refs.profilePicUploadInput.click()}}},[a("span",[e._v("📷")])]),e.localProfilePic?a("img",{attrs:{src:e.localProfilePic,alt:e.localName}}):a("img",{attrs:{src:"/placeholder.png",alt:"No image"}})]),a("div",{staticClass:"fields"},[a("div",{staticClass:"inputGroup"},[a("label",{attrs:{for:"name"}},[e._v("Nombre")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.localName,expression:"localName"}],attrs:{id:"name",type:"text",placeholder:"Nombre"},domProps:{value:e.localName},on:{input:function(t){t.target.composing||(e.localName=t.target.value)}}})]),a("div",{staticClass:"inputGroup"},[a("label",{attrs:{for:"lastname"}},[e._v("Apellido")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.localLastname,expression:"localLastname"}],attrs:{id:"lastname",type:"text",placeholder:"Apellido"},domProps:{value:e.localLastname},on:{input:function(t){t.target.composing||(e.localLastname=t.target.value)}}})]),a("div",{staticClass:"inputGroup"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.localAdmin,expression:"localAdmin"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.localAdmin=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("¿Acceso?")]),a("option",{attrs:{value:"true"}},[e._v("Sí")]),a("option",{attrs:{value:"false"}},[e._v("No")])])]),a("button",{attrs:{type:"button",disabled:e.isDisabled},on:{click:e.save}},[a("span",[e._v(e._s(e.empleado.id?"Guardar":"Crear"))])]),e.empleado.id?a("button",{attrs:{type:"button"},on:{click:e.cancel}},[a("span",[e._v("Cancelar")])]):e._e()])]:[a("div",{staticClass:"profilePic"},[a("img",{attrs:{src:e.empleado.profilePic,alt:e.empleado.name}})]),a("div",{staticClass:"fields"},[a("p",{staticClass:"name"},[e._v(e._s(e.empleado.name))]),a("p",{staticClass:"lastname"},[e._v(e._s(e.empleado.lastname))])])]],2)}),d=[],u=(a("b0c0"),a("96cf"),a("1da1")),p=a("2f62"),m={name:"Empleado",props:{editable:{type:Boolean,default:function(){return!1}},empleado:{type:Object,default:function(){return{id:null,name:"",lastname:"",admin:""}}}},data:function(){return{localName:this.empleado.name,localLastname:this.empleado.lastname,localAdmin:this.empleado.admin,localProfilePic:this.empleado.profilePic}},watch:{empleado:function(e){this.localName=e.name,this.localLastname=e.lastname,this.localAdmin=e.admin,this.localProfilePic=e.profilePic}},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(p["c"])(["setCurrentEmpleadoId","setLoading"])),Object(p["b"])(["addEmpleadoToFirebase","editEmpleadoOnFirebase"])),{},{save:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.empleado.id){t.next=5;break}return t.next=3,e.editEmpleadoOnFirebase({id:e.empleado.id,name:e.localName,lastname:e.localLastname,admin:e.localAdmin,profilePic:e.localProfilePic});case 3:t.next=7;break;case 5:return t.next=7,e.addEmpleadoToFirebase({name:e.localName,lastname:e.localLastname,admin:e.localAdmin,profilePic:e.localProfilePic});case 7:e.localName="",e.localLastname="",e.localAdmin="",e.localProfilePic="";case 11:case"end":return t.stop()}}),t)})))()},selectEmpleado:function(){this.setCurrentEmpleadoId(this.empleado.id)},cancel:function(){this.setCurrentEmpleadoId(null)},uploadImage:function(){var e=this;if(this.$refs.profilePicUploadInput.files.length){this.setLoading(!0);var t=new FileReader;t.onload=function(){var a=t.result;e.localProfilePic=a,e.setLoading(!1)},t.readAsDataURL(this.$refs.profilePicUploadInput.files[0])}}}),computed:Object(i["a"])(Object(i["a"])({},Object(p["d"])(["empleados","currentEmpleadoId"])),{},{isDisabled:function(){return!this.localName||!this.localLastname||!this.localAdmin||!this.localProfilePic},current:function(){return this.empleado.id===this.currentEmpleadoId&&!this.editable}})},f=m,v=(a("f501"),a("2877")),b=Object(v["a"])(f,s,d,!1,null,"422ed74a",null),h=b.exports,g={name:"Generador",components:{Empleado:h},computed:Object(i["a"])(Object(i["a"])({},Object(p["d"])(["empleados","currentEmpleadoId"])),{},{currentEmpleado:function(){var e=this;return this.empleados.find((function(t){return t.id===e.currentEmpleadoId}))}})},O=g,E=(a("352d"),Object(v["a"])(O,l,c,!1,null,"1caa17ec",null)),P=E.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"com-lista-empleados"},[a("div",{staticClass:"conAcceso"},[a("h3",[e._v("Con acceso")]),a("div",{staticClass:"gridArea"},[e.empleadosConAcceso.length?e._l(e.empleadosConAcceso,(function(e,t){return a("Empleado",{key:t,attrs:{empleado:e}})})):a("span",[e._v("No hay empleados con acceso todavía")])],2)]),a("div",{staticClass:"sinAcceso"},[a("h3",[e._v("Sin acceso")]),e.empleadosSinAcceso.length?[a("div",{staticClass:"gridArea"},e._l(e.empleadosSinAcceso,(function(e,t){return a("Empleado",{key:t,attrs:{empleado:e}})})),1)]:a("span",[e._v("No hay empleados sin acceso todavía")])],2)])},y=[],j=(a("4de4"),{name:"ListaEmpleados",components:{Empleado:h},filters:{adminFormat:function(e){return"true"===e?"Con permisos":"Sin permisos"}},computed:Object(i["a"])(Object(i["a"])({},Object(p["d"])(["empleados"])),{},{empleadosSinAcceso:function(){return this.empleados.filter((function(e){return"false"===e.admin}))},empleadosConAcceso:function(){return this.empleados.filter((function(e){return"true"===e.admin}))}})}),w=j,C=(a("f8d2"),Object(v["a"])(w,_,y,!1,null,"d61ffeec",null)),x=C.exports,L={name:"App",components:{Generador:P,ListaEmpleados:x},computed:Object(i["a"])({},Object(p["d"])(["loading"]))},A=L,I=(a("5c0b"),Object(v["a"])(A,r,o,!1,null,null,null)),k=I.exports,N=(a("c740"),a("a434"),a("2ca0"),a("59ca")),S=(a("66ce"),a("588e"),{apiKey:"AIzaSyCIL6qvHfVrmNZssJ0X1LAdu9dLRSjS5qE",authDomain:"seguridad-sl-30669.firebaseapp.com",databaseURL:"https://seguridad-sl-30669.firebaseio.com",projectId:"seguridad-sl-30669",storageBucket:"seguridad-sl-30669.appspot.com",messagingSenderId:"780801507324",appId:"1:780801507324:web:978bf3f4b1742cca653c79",measurementId:"G-QM7SMZLSTW"});N["initializeApp"](S);var R=N["database"](),F=N["storage"](),G=R.ref("/users");G.on("child_added",(function(e){T.commit("addEmpleado",Object(i["a"])({id:e.key},e.val()))})),G.on("child_changed",(function(e){T.commit("editEmpleado",Object(i["a"])({id:e.key},e.val()))})),G.on("child_removed",(function(e){T.commit("removeEmpleado",e.key)}));var U=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=G.push(),n=F.ref().child(a.key),e.next=4,n.putString(t.profilePic,"data_url");case 4:return e.next=6,n.getDownloadURL();case 6:return t.profilePic=e.sent,a.set(t),e.abrupt("return",Object(i["a"])({id:a.key},t));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=F.ref().child(t.id),!t.profilePic.startsWith("data:")){e.next=7;break}return e.next=4,a.putString(t.profilePic,"data_url");case 4:return e.next=6,a.getDownloadURL();case 6:t.profilePic=e.sent;case 7:G.child(t.id).update(t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n["a"].use(p["a"]);var T=new p["a"].Store({state:{currentEmpleadoId:null,empleados:[],loading:!1},mutations:{addEmpleado:function(e,t){var a=e.empleados;a.push(t)},removeEmpleado:function(e,t){var a=e.empleados;a.splice(a.findIndex((function(e){return e.id===t})),1)},editEmpleado:function(e,t){var a=e.empleados,n=a.findIndex((function(e){return e.id===t.id}));Object.assign(a[n],t)},setCurrentEmpleadoId:function(e,t){e.currentEmpleadoId=t},setEmpleados:function(e,t){e.empleados=t},setLoading:function(e,t){e.loading=t}},actions:{addEmpleadoToFirebase:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,n("setLoading",!0),a.next=4,U(t);case 4:n("setLoading",!1),n("setCurrentEmpleadoId",null);case 6:case"end":return a.stop()}}),a)})))()},editEmpleadoOnFirebase:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,n("setLoading",!0),a.next=4,$(t);case 4:n("setLoading",!1),n("setCurrentEmpleadoId",null);case 6:case"end":return a.stop()}}),a)})))()}}});n["a"].config.productionTip=!1,new n["a"]({store:T,render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"73d5":function(e,t,a){},"97ba":function(e,t,a){},"9c0c":function(e,t,a){},f501:function(e,t,a){"use strict";var n=a("97ba"),r=a.n(n);r.a},f8d2:function(e,t,a){"use strict";var n=a("3f46"),r=a.n(n);r.a}});
//# sourceMappingURL=app.73d1e89e.js.map