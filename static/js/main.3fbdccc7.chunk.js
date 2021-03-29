(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{18:function(e,t,n){e.exports={contactFormLable:"ContactForm_contactFormLable__24Pjp"}},24:function(e,t,n){e.exports={contactListItemBtn:"ContactListItem_contactListItemBtn__Zz2BS"}},25:function(e,t,n){e.exports={FilterLable:"Filter_FilterLable__3aYIw"}},39:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),o=n(13),i=n.n(o),b=n(26),l=n(10),s=n(8),j=n(4),u=n(7),d=n(28),m=n(6),O="@contact/add",f="@contact/delete",h="@contact/initial",p="@filter/change",x=Object(s.c)({items:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},(c={},Object(u.a)(c,O,(function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{items:[].concat(Object(d.a)(e.items),[n])})})),Object(u.a)(c,f,(function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{items:e.items.filter((function(e){return e.id!==n}))})})),Object(u.a)(c,p,(function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{filter:n})})),Object(u.a)(c,h,(function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{items:n})})),c)),v=Object(j.c)({contacts:x}),C=Object(s.a)({reducer:v}),g=(n(39),n(27)),L=n(46),y=n(18),F=n.n(y),S=n(1),w={name:"",number:""},_=function(e){var t=e.addToPhonebook,n=Object(a.useState)(Object(m.a)({},w)),c=Object(g.a)(n,2),r=c[0],o=r.name,i=r.number,b=c[1],l=function(e){var t=e.target,n=t.value,c=t.name;b((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},c,n))}))};return Object(S.jsx)("div",{children:Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:o,number:i,id:Object(L.a)()};t(n),b(w)},children:[Object(S.jsx)("label",{className:F.a.contactFormLable,children:Object(S.jsx)("input",{onChange:l,type:"text",name:"name",placeholder:"Enter name...",value:o})}),Object(S.jsx)("label",{className:F.a.contactFormLable,children:Object(S.jsx)("input",{onChange:l,type:"tel",name:"number",placeholder:"Enter number...",value:i})}),Object(S.jsx)("button",{type:"submit",children:"Add contact"})]})})},k=n(24),I=n.n(k),E=function(e){var t=e.id,n=e.name,c=e.number,a=e.deleteContact;return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("li",{children:[n,":",c,Object(S.jsx)("button",{className:I.a.contactListItemBtn,onClick:function(){return a(t)},children:"Delete"})]},t)})},N=function(e){var t=e.filteredContacts,n=e.deleteContact;return Object(S.jsx)("ul",{children:t.map((function(e){return Object(S.jsx)(E,{id:e.id,name:e.name,number:e.number,deleteContact:n},e.id)}))})},B=n(25),J=n.n(B),P=function(e){var t=e.filter,n=e.inputHandler;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("p",{children:"Find contacts by name"}),Object(S.jsx)("label",{className:J.a.FilterLable,children:Object(S.jsx)("input",{onChange:n,type:"text",name:"filter",placeholder:"Enter name...",value:t})})]})},H=Object(s.b)(O),A=Object(s.b)(f),D=Object(s.b)(p),T=Object(s.b)(h),z=function(){var e=Object(l.c)((function(e){return e.contacts.items})),t=Object(l.c)((function(e){return e.contacts.filter})),n=Object(l.b)();Object(a.useEffect)((function(){try{var e=localStorage.getItem("contacts");e&&n(T(JSON.parse(e)))}catch(t){console.log("\u041d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 JSON")}}),[]);return Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(e))}),[e]),Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"Phonebook"}),Object(S.jsx)(_,{addToPhonebook:function(t){var c;c=t.name,e.some((function(e){return e.name.toLowerCase()===c.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):n(H(t))}}),Object(S.jsx)("h2",{children:"Contacts"}),Object(S.jsx)(P,{filter:t,inputHandler:function(e){var t=e.target.value;n(D(t))}}),Object(S.jsx)(N,{filteredContacts:t.length?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e,deleteContact:function(e){n(A(e))}})]})};i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(l.a,{store:C,children:Object(S.jsx)(b.a,{children:Object(S.jsx)(z,{})})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.3fbdccc7.chunk.js.map