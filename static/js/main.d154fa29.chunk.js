(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),j=c(2),s=c.n(j),b=c(14),a=c.n(b),i=(c(20),c(3)),r=(c(21),c(5)),l=c.n(r);var o=function(){var e=Object(j.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],b=Object(j.useState)(0),a=Object(i.a)(b,2),r=a[0],o=a[1],u=Object(j.useState)(""),O=Object(i.a)(u,2),d=O[0],h=O[1],x=Object(j.useState)(""),p=Object(i.a)(x,2),g=p[0],f=p[1],m=Object(j.useState)(0),y=Object(i.a)(m,2),v=y[0],C=y[1],S=Object(j.useState)([]),q=Object(i.a)(S,2),w=q[0],N=q[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"foam",children:[Object(n.jsx)("label",{children:"Name:"}),Object(n.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Age:"}),Object(n.jsx)("input",{type:"number",onChange:function(e){o(e.target.value)},required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Country:"}),Object(n.jsx)("input",{type:"text",onChange:function(e){h(e.target.value)},required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Position:"}),Object(n.jsx)("input",{type:"text",onChange:function(e){f(e.target.value)},required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Wage(Year):"}),Object(n.jsx)("input",{type:"number",placeholder:"$",onChange:function(e){C(e.target.value)},required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:function(){l.a.post("http://localhost:3001/create/",{name:c,age:r,country:d,position:g,wage:v}).then((function(){console.log("success")}))},children:"Add Empoyee"})]}),Object(n.jsxs)("div",{className:"employees",children:[Object(n.jsx)("button",{onClick:function(){l.a.get("http://localhost:3001/employees/").then((function(e){N(e.data)}))},children:"Show Employees"}),w.map((function(e,t){return Object(n.jsx)("div",{children:Object(n.jsxs)("table",{id:"table",children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Age"}),Object(n.jsx)("th",{children:"Country"}),Object(n.jsx)("th",{children:"Position"}),Object(n.jsx)("th",{children:"Wage"})]}),Object(n.jsxs)("tbody",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.age}),Object(n.jsx)("td",{children:e.country}),Object(n.jsx)("td",{children:e.position}),Object(n.jsxs)("td",{children:["$ ",e.wage]})]})]})})}))]})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,j=t.getFCP,s=t.getLCP,b=t.getTTFB;c(e),n(e),j(e),s(e),b(e)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(o,{})}),document.getElementById("root")),u()}},[[40,1,2]]]);
//# sourceMappingURL=main.d154fa29.chunk.js.map