(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(6),r=c.n(s),l=(c(12),c(7)),a=c(2),o=(c(13),c(14),c(0)),u=function(e){var t=Object(n.useState)(""),c=Object(a.a)(t,2),i=c[0],s=c[1];return Object(o.jsx)("form",{className:"ui form",onSubmit:function(t){t.preventDefault(),i.trim().length<=0||(e.addForm({title:i,completed:!1}),s(""))},children:Object(o.jsx)("div",{className:"ui grid center aligned",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"column five wide",children:Object(o.jsx)("input",{style:{display:"block",width:"100%",border:" 1px solid #ccc",font:"inherit",lineHeight:"1.5rem",padding:"0 0.25rem"},value:i,onChange:function(e){s(e.target.value)},type:"text",placeholder:"Enter something to do..."})}),Object(o.jsx)("div",{className:"column one wide",children:Object(o.jsx)("button",{type:"submit",className:"ui button circular icon green",children:Object(o.jsx)("i",{className:"white plus icon"})})})]})})})},d=function(e){return Object(o.jsx)("div",{style:{margin:"50px",background:"#f57f17",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.26)",color:"white",borderRadius:"12px"},children:e.children})},j=function(e){var t=Object(n.useState)(!1),c=Object(a.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(e.title),l=Object(a.a)(r,2),u=l[0],d=l[1],j=Object(n.useState)(e.completed),b=Object(a.a)(j,2),m=b[0],h=b[1];return i?Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"column seven wide",children:Object(o.jsx)("div",{className:"ui input fluid",children:Object(o.jsx)("input",{autoFocus:!0,value:u,onChange:function(e){d(e.target.value)}})})}),Object(o.jsx)("button",{onClick:function(e){s(!1)},className:"ui button circular icon green",children:Object(o.jsx)("i",{className:"white check icon"})})]}):Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"column five wide",onDoubleClick:function(){s(!0)},children:Object(o.jsx)("h2",{className:"ui header"+(m?" green":"white"),children:u})}),Object(o.jsx)("div",{className:"column one wide",onClick:function(){h((function(e){return!e}))},children:Object(o.jsx)("button",{className:"ui button circular icon"+(m?" blue":" green"),children:Object(o.jsx)("i",{className:"white check icon"})})}),Object(o.jsx)("div",{className:"column one wide",children:Object(o.jsx)("button",{onClick:e.remove,className:"ui button circular icon red",style:{marginLeft:"10px"},children:Object(o.jsx)("i",{className:"white remove icon"})})})]})},b=function(e){var t=e.list.map((function(t){return Object(o.jsx)(j,{title:t.title,completed:t.completed,remove:function(c){return e.remove(t.id)}},t.title)}));return Object(o.jsx)("div",{className:"ui grid center aligned",children:t})},m=[{id:1,title:"Test #1",completed:!1},{id:2,title:"Test #2",completed:!1},{id:3,title:"Test #3",completed:!1}],h=function(){var e=Object(n.useState)(m),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(o.jsxs)("div",{className:"ui container center aligned",children:[Object(o.jsx)(d,{children:Object(o.jsx)("h1",{className:"header",children:"To-do App"})}),Object(o.jsx)(d,{children:Object(o.jsx)(u,{addForm:function(e){i((function(t){return[].concat(Object(l.a)(t),[e])}))}})}),Object(o.jsx)(d,{children:Object(o.jsx)(b,{remove:function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))},list:c})})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.f602a7a5.chunk.js.map