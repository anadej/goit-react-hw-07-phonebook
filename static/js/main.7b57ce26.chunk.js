(this["webpackJsonpreact-app-init"]=this["webpackJsonpreact-app-init"]||[]).push([[0],{63:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var r,a,c,o,i,s,u=n(0),l=n.n(u),p=n(14),b=n.n(p),d=n(16),j=n(17),f=n(19),m=n(18),O=n(11),h=n(3),x=Object(h.b)("contacts/addContact"),v=Object(h.b)("contacts/deleteContact"),g=Object(h.b)("contacts/setContacts"),w=Object(h.b)("contacts/setFilter"),y=Object(h.b)("contacts/setLoader"),C=Object(h.b)("contacts/setError"),k=Object(h.b)("contacts/resetError"),F=n(9),N=n(10),A=N.a.label(r||(r=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n\n  .inputFilter {\n    width: 150px;\n    margin-top: 5px;\n\n    &:focus {\n      outline: none;\n      border: 2px solid lightblue;\n    }\n  }\n"]))),L=n(15),z=function(t){return t.contacts.isLoading},E=function(t){return t.contacts.filter},H=Object(L.a)([function(t){return t.contacts.items},E],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),S=n(1),Z=Object(O.b)((function(t){return{filter:E(t)}}),{setFilter:w})((function(t){var e=t.filter,n=t.setFilter;return Object(S.jsxs)(A,{children:["Find contacts by name:",Object(S.jsx)("input",{className:"inputFilter",type:"text",name:"filter",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0442\u0438\u0442\u0435 \u043d\u0430\u0439\u0442\u0438",required:!0,onChange:function(t){var e=t.target.value;n(e)}})]})})),B=n(2),q=n.n(B),D=n(7),J=n(6),M=n(8),T=N.a.div(a||(a=Object(F.a)(["\n  border: 2px solid black;\n  width: 40%;\n  padding: 20px;\n  margin-left: 20px;\n\n  .phoneForm {\n    display: flex;\n    flex-direction: column;\n  }\n  .labelForm {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n  }\n  .inputForm {\n    width: 150px;\n    margin-top: 5px;\n  }\n  .buttonForm {\n    width: 40%;\n    background-color: white;\n    border-radius: 5px;\n    margin-top: 10px;\n  }\n"]))),$=n(20),G=n.n($),I="https://phonebook-d66d1-default-rtdb.firebaseio.com",P=function(){var t=Object(D.a)(q.a.mark((function t(){var e,n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.get(I+"/contacts.json");case 3:return e=t.sent,n=Object.keys(e.data).map((function(t){return Object(M.a)({id:t},e.data[t])})),t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=Object(D.a)(q.a.mark((function t(e){var n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.post(I+"/contacts.json",e);case 3:return n=t.sent,t.abrupt("return",n.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=Object(D.a)(q.a.mark((function t(e){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.delete(I+"/contacts/".concat(e,".json"));case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),new Error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}(),K=["all","family","friends","work"],Q={name:"",number:"",group:K[0]},V=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state=Object(M.a)({},Q),t.onHandleChange=function(e){var n=e.target,r=n.name,a=n.value;t.setState(Object(J.a)({},r,a))},t.onHandleSubmit=function(){var e=Object(D.a)(q.a.mark((function e(n){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t.props.addContactOperation(Object(M.a)({},t.state)),t.setState(Object(M.a)({},Q));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.getContactsOperation()}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(S.jsxs)(T,{children:[this.props.isLoading&&Object(S.jsx)("p",{children:"...loading"}),Object(S.jsxs)("form",{className:"phoneForm",onSubmit:this.onHandleSubmit,children:[Object(S.jsxs)("label",{className:"labelForm",children:["Name:",Object(S.jsx)("input",{className:"inputForm",type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onHandleChange})]}),Object(S.jsxs)("label",{className:"labelForm",children:["Number:",Object(S.jsx)("input",{className:"inputForm",type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.onHandleChange})]}),Object(S.jsxs)("label",{className:"labelForm",children:["Group:",Object(S.jsx)("select",{name:"group",className:"inputForm",onChange:this.onHandleChange,children:K.map((function(t){return Object(S.jsx)("option",{value:t,children:t.toUpperCase()},t)}))})]}),Object(S.jsx)("button",{type:"submit",className:"buttonForm",children:"Add contact"})]})]})}}]),n}(u.Component),W=Object(O.b)((function(t){return{isLoading:z(t)}}),{addContactOperation:function(t){return function(){var e=Object(D.a)(q.a.mark((function e(n,r){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(y()),e.next=4,R(t);case 4:a=e.sent,n(x(Object(M.a)(Object(M.a)({},t),{},{id:a.name}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n(C(e.t0.message));case 11:return e.prev=11,n(y()),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t,n){return e.apply(this,arguments)}}()},getContactsOperation:function(){return function(){var t=Object(D.a)(q.a.mark((function t(e,n){var r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(y()),t.next=4,P();case 4:r=t.sent,e(g(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e(C(t.t0.message));case 11:return t.prev=11,e(y()),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e,n){return t.apply(this,arguments)}}()}})(V),X=N.a.div(c||(c=Object(F.a)(["\n  .contactBtn {\n    background-color: white;\n    border-radius: 5px;\n    margin-left: 20px;\n  }\n"]))),Y=Object(O.b)((function(t){return{contacts:H(t)}}),{deleteContactOperation:function(t){return function(){var e=Object(D.a)(q.a.mark((function e(n,r){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(y()),e.next=4,U(t);case 4:n(v(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n(C(e.t0.message));case 10:return e.prev=10,n(y()),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t,n){return e.apply(this,arguments)}}()}})((function(t){var e=t.contacts,n=t.deleteContactOperation;return Object(S.jsx)(X,{children:Object(S.jsx)("ul",{children:e.map((function(t){return Object(S.jsxs)("li",{children:[t.name,": ",t.number,Object(S.jsx)("button",{className:"contactBtn",type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})})),_=N.a.section(o||(o=Object(F.a)(["\n  .sectionTitle {\n    margin-left: 20px;\n  }\n"]))),tt=function(t){var e=t.title,n=t.children;return Object(S.jsxs)(_,{children:[Object(S.jsx)("h2",{className:"sectionTitle",children:e}),n]})},et=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(tt,{title:"Phonebook middleware, async Redux version",children:Object(S.jsx)(W,{})}),Object(S.jsxs)(tt,{title:"Contacts",children:[Object(S.jsx)(Z,{}),Object(S.jsx)(Y,{})]})]})}}]),n}(u.Component),nt=n(5),rt=n(35),at=Object(h.c)([],(i={},Object(J.a)(i,x,(function(t,e){return t.some((function(t){return t.name.toLowerCase()===e.payload.name.toLowerCase()}))?(alert(e.payload.name+" is already in contact list"),t):[].concat(Object(rt.a)(t),[e.payload])})),Object(J.a)(i,v,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),Object(J.a)(i,g,(function(t,e){return e.payload})),i)),ct=Object(h.c)("",Object(J.a)({},w,(function(t,e){return e.payload}))),ot=Object(h.c)(!1,Object(J.a)({},y,(function(t){return!t}))),it=(Object(h.c)("",(s={},Object(J.a)(s,C,(function(t,e){return e.payload})),Object(J.a)(s,k,(function(){return""})),s)),Object(nt.b)({items:at,filter:ct,isLoading:ot})),st=Object(nt.b)({contacts:it}),ut=Object(h.a)({reducer:st});n(63);b.a.render(Object(S.jsx)(O.a,{store:ut,children:Object(S.jsx)(l.a.StrictMode,{children:Object(S.jsx)(et,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.7b57ce26.chunk.js.map