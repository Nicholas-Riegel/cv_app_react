(this.webpackJsonpcv_react=this.webpackJsonpcv_react||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(7),r=n.n(i),o=(n(13),n(6)),d=n(1),l=n(8),u=n(0);function j(e){var t=e.data,n=e.setData,c=e.addEducation,a=e.addWork,i=e.clearAll;return Object(u.jsxs)("div",{className:"input",children:[Object(u.jsx)("div",{className:"contactInput",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Personal Information"}),Object(u.jsx)("input",{type:"text",placeholder:"Name...",onChange:function(e){return n(Object(d.a)(Object(d.a)({},t),{},{name:e.target.value}))},value:t.name}),Object(u.jsx)("input",{type:"text",placeholder:"Email...",onChange:function(e){return n(Object(d.a)(Object(d.a)({},t),{},{email:e.target.value}))},value:t.email}),Object(u.jsx)("input",{type:"text",placeholder:"Phone...",onChange:function(e){return n(Object(d.a)(Object(d.a)({},t),{},{phone:e.target.value}))},value:t.phone})]})}),Object(u.jsx)("div",{className:"educationInput",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Education"}),t.education.map((function(e){return Object(u.jsxs)("div",{className:"education_box",children:[Object(u.jsx)("input",{type:"text",placeholder:"Degree...",onChange:function(c){return n(Object(d.a)(Object(d.a)({},t),{},{education:t.education.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{degree:c.target.value}):t}))}))},value:t.education.find((function(t){return t.id===e.id})).degree}),Object(u.jsx)("input",{type:"text",placeholder:"School/University...",onChange:function(c){return n(Object(d.a)(Object(d.a)({},t),{},{education:t.education.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{school:c.target.value}):t}))}))},value:t.education.find((function(t){return t.id===e.id})).school}),Object(u.jsx)("input",{type:"text",placeholder:"Dates...",onChange:function(c){return n(Object(d.a)(Object(d.a)({},t),{},{education:t.education.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{dates:c.target.value}):t}))}))},value:t.education.find((function(t){return t.id===e.id})).dates}),Object(u.jsx)("button",{onClick:function(){return n(Object(d.a)(Object(d.a)({},t),{},{education:t.education.filter((function(t){return t.id!==e.id}))}))},children:"Delete"})]},e.id)})),Object(u.jsx)("button",{className:"btn_add",onClick:c,children:"Add"})]})}),Object(u.jsx)("div",{className:"experienceInput",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Experience"}),t.work.map((function(e){return Object(u.jsxs)("div",{className:"work_box",children:[Object(u.jsx)("input",{type:"text",placeholder:"Position...",onChange:function(c){return n(Object(d.a)(Object(d.a)({},t),{},{work:t.work.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{position:c.target.value}):t}))}))},value:t.work.find((function(t){return t.id===e.id})).position}),Object(u.jsx)("input",{type:"text",placeholder:"Employer...",onChange:function(c){return n(Object(d.a)(Object(d.a)({},t),{},{work:t.work.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{employer:c.target.value}):t}))}))},value:t.work.find((function(t){return t.id===e.id})).employer}),Object(u.jsx)("input",{type:"text",placeholder:"Dates...",onChange:function(c){return n(Object(d.a)(Object(d.a)({},t),{},{work:t.work.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{dates:c.target.value}):t}))}))},value:t.work.find((function(t){return t.id===e.id})).dates}),Object(u.jsx)("input",{type:"text",placeholder:"Details...",onChange:function(c){return n(Object(d.a)(Object(d.a)({},t),{},{work:t.work.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{details:c.target.value}):t}))}))},value:t.work.find((function(t){return t.id===e.id})).details}),Object(u.jsx)("button",{onClick:function(){return n(Object(d.a)(Object(d.a)({},t),{},{work:t.work.filter((function(t){return t.id!==e.id}))}))},children:"Delete"})]},e.id)})),Object(u.jsx)("button",{className:"btn_add",onClick:a,children:"Add"})]})}),Object(u.jsx)("button",{className:"btn_clear_all",onClick:i,children:"Clear All"})]})}function s(e){var t=e.data;return Object(u.jsx)("div",{className:"output",children:Object(u.jsx)("div",{className:"output_page",children:Object(u.jsxs)("div",{className:"output_content",children:[Object(u.jsxs)("div",{className:"contactOutput",children:[Object(u.jsx)("h2",{children:t.name}),Object(u.jsx)("p",{children:t.email}),Object(u.jsx)("p",{children:t.phone})]}),Object(u.jsxs)("div",{className:"educationOutput",children:[t.education.length>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:"Education"}),Object(u.jsx)("hr",{})]}):null,t.education.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:[e.degree,e.degree?", ":null,e.school,e.school?", ":null,e.dates]})},e.id)}))]}),Object(u.jsx)("div",{className:"workOutput",children:t.work.length>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:"Experience"}),Object(u.jsx)("hr",{}),t.work.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:[e.position,e.employer?", ":null,e.employer,e.dates?", ":null,e.dates]}),Object(u.jsx)("ul",{style:""===e.details?{listStyleType:"none"}:null,children:Object(u.jsx)("li",{children:e.details})})]},e.id)}))]}):null})]})})})}n(15);function b(){var e=Object(c.useState)({name:"",email:"",phone:"",education:[],work:[]}),t=Object(l.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){var e=localStorage.getItem("data"),t=JSON.parse(e);t&&a(t)}),[]),Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("data",e)}),[n]);return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{data:n,setData:a,addEducation:function(){var e={id:Date.now(),school:"",degree:"",dates:""};a(Object(d.a)(Object(d.a)({},n),{},{education:[].concat(Object(o.a)(n.education),[e])}))},addWork:function(){var e={id:Date.now(),employer:"",position:"",dates:"",details:""};a(Object(d.a)(Object(d.a)({},n),{},{work:[].concat(Object(o.a)(n.work),[e])}))},clearAll:function(){a({name:"",email:"",phone:"",education:[],work:[]}),localStorage.removeItem("data")}}),Object(u.jsx)(s,{data:n})]})}r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.134ec19e.chunk.js.map