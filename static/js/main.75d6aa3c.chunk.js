(this["webpackJsonpreact-homeworks"]=this["webpackJsonpreact-homeworks"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={message:"Message_message__3315Q",images:"Message_images__pQGcr",content:"Message_content__2T_LD",textContent:"Message_textContent__FVa3X",name:"Message_name__3Sc53",time:"Message_time__8DTlo",edge:"Message_edge__2GKrr",containerEdge:"Message_containerEdge__2FHCX"}},function(e,t,n){e.exports={blockAffairs:"Affairs_blockAffairs__3qfYo",affairs:"Affairs_affairs__2cQbF",buttons:"Affairs_buttons__1KE8o",button:"Affairs_button__36nYU",lowFilter:"Affairs_lowFilter__2H5zf",middleFilter:"Affairs_middleFilter__11LSf",highFilter:"Affairs_highFilter__q6jSd"}},,function(e,t,n){e.exports={activeLink:"Header_activeLink__2-X2_",item:"Header_item__2ENKE",containerBlockHeader:"Header_containerBlockHeader__1fAYl",triangle:"Header_triangle__pRSZ3",errorBlock:"Header_errorBlock__46kXe"}},,function(e,t,n){e.exports={blue:"HW4_blue__1OZV1",column:"HW4_column__K5EYz",superInput:"HW4_superInput__2yKfs",superButton:"HW4_superButton__B5hwx",superCheckbox:"HW4_superCheckbox__2plEN",testSpanError:"HW4_testSpanError__wa_dz"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2tJXo",errorInput:"SuperInputText_errorInput__wrum0",error:"SuperInputText_error__2wIFh"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__y0CzI",labelCheckBox:"SuperCheckbox_labelCheckBox__1gzb5",spanClassName:"SuperCheckbox_spanClassName__23qQ2"}},function(e,t,n){e.exports={blockButton:"HW8_blockButton__2jKMl",users:"HW8_users__7R0My",user:"HW8_user__1h2OG"}},,function(e,t,n){e.exports={default:"SuperButton_default__3GUe5",red:"SuperButton_red__zEHSu"}},function(e,t,n){e.exports={blockGreeting:"Greeting_blockGreeting__1KHF7",totalCount:"Greeting_totalCount__26WXm"}},function(e,t,n){e.exports={spanClass:"SuperEditableSpan_spanClass__2_bxX",icon:"SuperEditableSpan_icon__1fHrr"}},function(e,t,n){e.exports={blockEditableSpan:"HW6_blockEditableSpan__1KtOI",buttonBlock:"HW6_buttonBlock__3CfhW"}},function(e,t,n){e.exports={radioCheckbox:"SuperRadio_radioCheckbox__SeCsw",labelRadioCheckBox:"SuperRadio_labelRadioCheckBox__2r5X2"}},function(e,t,n){e.exports={selectWrapper:"SuperSelect_selectWrapper__3m0Xu","select-wrapper":"SuperSelect_select-wrapper__2ue20",selectArrow:"SuperSelect_selectArrow__2FI6L"}},,function(e,t,n){e.exports={App:"App_App__16P9H"}},function(e,t,n){e.exports={blockHW7:"HW7_blockHW7__K1cSf"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(24),s=n.n(r);n(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(25),o=n.n(i),l=n(9),j=n(2),u=n(3),d=n(8),b=n.n(d),h=n(6),O=n(5),x=n(18),p=n.n(x),m=n(0),_=function(e){var t=e.red,n=e.className,c=Object(O.a)(e,["red","className"]),a="".concat(t?p.a.red:p.a.default," ").concat(n);return Object(m.jsx)("button",Object(h.a)({className:a},c))},f=function(e){return Object(m.jsxs)("div",{className:b.a.affairs,children:[Object(m.jsx)("span",{children:e.affair.name}),Object(m.jsxs)("span",{className:"low"===e.affair.priority?b.a.lowFilter:"middle"===e.affair.priority?b.a.middleFilter:b.a.highFilter,children:["[",e.affair.priority,"]"]}),Object(m.jsx)(_,{red:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},v=function(e){var t=e.data.map((function(t){return Object(m.jsx)(f,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){e.setFilter(t)};return Object(m.jsxs)("div",{className:b.a.blockAffairs,children:[Object(m.jsx)("div",{children:t}),Object(m.jsxs)("div",{className:b.a.buttons,children:[Object(m.jsx)(_,{onClick:function(){return n("all")},children:"All"}),Object(m.jsx)(_,{onClick:function(){return n("high")},children:"High"}),Object(m.jsx)(_,{onClick:function(){return n("middle")},children:"Middle"}),Object(m.jsx)(_,{onClick:function(){return n("low")},children:"Low"})]})]})},g=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}],k=function(){var e=Object(c.useState)(g),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("all"),s=Object(u.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(n,i);return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 2",Object(m.jsx)(v,{filter:i,data:l,setFilter:o,deleteAffairCallback:function(e){a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})},C=n(7),N=n.n(C),S=function(e){return Object(m.jsxs)("div",{className:N.a.message,children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:N.a.images,src:e.avatar,alt:""})}),Object(m.jsx)("div",{className:N.a.containerEdge,children:Object(m.jsx)("div",{className:N.a.edge,children:" "})}),Object(m.jsxs)("div",{className:N.a.content,children:[Object(m.jsxs)("div",{className:N.a.textContent,children:[Object(m.jsx)("div",{className:N.a.name,children:e.name}),Object(m.jsx)("div",{children:e.message})]}),Object(m.jsx)("div",{className:N.a.time,children:e.time})]})]})},w="https://mtdata.ru/u7/photo8A7D/20488237865-0/original.png",y="Elena",H="Hi, Ignat. How are you?",E="23:59",B=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 1",Object(m.jsx)(S,{avatar:w,name:y,message:H,time:E}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})},A=n(14),W=n.n(A),F=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(O.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(W.a.error," ").concat(i||""),j=r?W.a.errorInput:"".concat(s," ").concat(W.a.superInput);return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",Object(h.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:j},o)),r&&Object(m.jsx)("div",{className:l,children:r})]})},I=n(12),T=n.n(I),K=n(15),P=n.n(K),M=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(O.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(P.a.checkbox," ").concat(c||"");return Object(m.jsxs)("label",{children:[Object(m.jsx)("input",Object(h.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),Object(m.jsx)("div",{className:P.a.labelCheckBox,children:" "}),a&&Object(m.jsxs)("span",{className:P.a.spanClassName,children:[" ",a," "]})]})},R=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=n?"":"Error!!! Input is empty",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(u.a)(i,2),l=o[0],j=o[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 4",Object(m.jsxs)("div",{className:T.a.column,children:[Object(m.jsxs)("div",{className:T.a.superInput,children:[Object(m.jsx)(F,{value:n,onChangeText:a,onEnter:s,error:r}),Object(m.jsx)(F,{className:T.a.blue})]}),Object(m.jsxs)("div",{className:T.a.superButton,children:[Object(m.jsx)(_,{children:"default"}),Object(m.jsx)(_,{red:!0,onClick:s,children:"delete "}),Object(m.jsx)(_,{disabled:!0,children:"disabled"})]}),Object(m.jsxs)("div",{className:T.a.superCheckbox,children:[Object(m.jsx)(M,{checked:l,onChangeChecked:j,children:"Click me! "}),Object(m.jsx)(M,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})},G=n(27),U=n(19),X=n.n(U),D=function(e){var t=e.name,n=e.setNameCallback,c=e.setKeyPress,a=e.addUser,r=e.error,s=e.totalUsers;return Object(m.jsxs)("div",{className:X.a.blockGreeting,children:[Object(m.jsx)(F,{value:t,onChangeText:n,onEnter:c,error:r}),Object(m.jsx)(_,{disabled:!t,onClick:a,children:"add"}),Object(m.jsx)("span",{className:X.a.totalCount,children:s})]})},z=function(e){var t=e.users,n=e.addUserCallback,a=Object(c.useState)(""),r=Object(u.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),l=Object(u.a)(o,2),j=l[0],d=l[1],b=function(){""!==s.trim()?(alert("Hello ".concat(s," !")),n(s.trim()),i("")):(d("Title is required!"),i(""))},h=t.length;return Object(m.jsx)(D,{name:s,setNameCallback:function(e){i(e),d("")},setKeyPress:function(){b(),i("")},addUser:b,error:j,totalUsers:h})},J=n(36),L=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 3",Object(m.jsx)(z,{users:n,addUserCallback:function(e){var t={_id:Object(J.a)(),name:e};a([t].concat(Object(G.a)(n)))}}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})},q=n(20),Q=n.n(q),Y=n.p+"static/media/pencil.582f957d.svg",V=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,r=Object(O.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(u.a)(s,2),o=i[0],l=i[1],j=a||{},d=j.children,b=j.onDoubleClick,x=j.className,p=Object(O.a)(j,["children","onDoubleClick","className"]),_="".concat(Q.a.spanClass," ").concat(x);return Object(m.jsx)(m.Fragment,{children:o?Object(m.jsx)(F,Object(h.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(m.jsxs)("span",Object(h.a)(Object(h.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:_},p),{},{children:[Object(m.jsx)("img",{className:Q.a.icon,src:Y,alt:""}),d||r.value]}))})};var Z=n(21),$=n.n(Z);var ee=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 6",Object(m.jsx)("div",{className:$.a.blockEditableSpan,children:Object(m.jsx)(V,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(m.jsxs)("div",{className:$.a.buttonBlock,children:[Object(m.jsx)("div",{children:Object(m.jsx)(_,{onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("editable-span-value",n)},children:"save"})}),Object(m.jsx)("div",{children:Object(m.jsx)(_,{onClick:function(){a(function(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}("editable-span-value",n))},children:"restore"})})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})};var te=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(B,{}),Object(m.jsx)(k,{}),Object(m.jsx)(L,{}),Object(m.jsx)(R,{}),Object(m.jsx)(ee,{})]})},ne=n(10),ce=n.n(ne);var ae=function(){return Object(m.jsxs)("div",{className:ce.a.errorBlock,children:[Object(m.jsx)("img",{src:"https://railsware.com/images/shared/not-found-e12fa988.png"}),Object(m.jsx)("div",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430!"})]})};var re=function(){return Object(m.jsx)("div",{})},se=n(22),ie=n.n(se),oe=function(e){e.type;var t=e.name,n=e.options,c=e.value,a=e.onChange,r=e.onChangeOption,s=e.className,i=(Object(O.a)(e,["type","name","options","value","onChange","onChangeOption","className"]),function(e){a&&a(e),r&&r(e.currentTarget.value)}),o="".concat(ie.a.radioCheckbox," ").concat(s||""),l=n?n.map((function(e,n){return Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"radio",onChange:i,value:e,name:t,checked:c===e,className:o}),e,Object(m.jsx)("div",{className:ie.a.labelRadioCheckBox,children:" "})]},t+"-"+n)})):[];return Object(m.jsx)(m.Fragment,{children:l})},le=n(23),je=n.n(le),ue=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,a=(e.className,Object(O.a)(e,["options","onChange","onChangeOption","className"])),r=t?t.map((function(e,t){return Object(m.jsxs)("option",{children:[" ",e," "]},t)})):[];return Object(m.jsxs)("div",{className:je.a.selectWrapper,children:[Object(m.jsx)("select",Object(h.a)(Object(h.a)({onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},a),{},{children:r})),Object(m.jsx)("div",{className:je.a.selectArrow,children:" "})]})},de=n(26),be=n.n(de),he=["x","y","z"];var Oe=function(){var e=Object(c.useState)(he[2]),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 7",Object(m.jsxs)("div",{className:be.a.blockHW7,children:[Object(m.jsx)("div",{children:Object(m.jsx)(ue,{options:he,value:n,onChangeOption:a})}),Object(m.jsx)("div",{children:Object(m.jsx)(oe,{name:"radioCheckBox",options:he,value:n,onChangeOption:a})})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})},xe=function(e,t){switch(t.type){case"SORT-UP":var n=e.map((function(e){return e}));return n.sort((function(e,t){return e.name<t.name?-1:1})),n;case"SORT-DOWN":var c=e.map((function(e){return e}));return c.sort((function(e,t){return t.name<e.name?-1:1})),c;case"AGE-CHECK":return e.filter((function(e){return e.age>t.payload}));default:return e}},pe=n(16),me=n.n(pe),_e=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var fe=function(){var e=Object(c.useState)(_e),t=Object(u.a)(e,2),n=t[0],a=t[1],r=n.map((function(e){return Object(m.jsxs)("div",{className:me.a.user,children:[Object(m.jsx)("span",{children:e.name}),Object(m.jsx)("span",{style:{color:"rgba(13, 39, 121, 0.75)"},children:e.age})]},e._id)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 8",Object(m.jsx)("div",{className:me.a.users,children:r}),Object(m.jsxs)("div",{className:me.a.blockButton,children:[Object(m.jsx)("div",{children:Object(m.jsx)(_,{onClick:function(){return a(xe(_e,{type:"SORT-UP"}))},children:"sort up"})}),Object(m.jsx)("div",{children:Object(m.jsx)(_,{onClick:function(){return a(xe(_e,{type:"SORT-DOWN"}))},children:"sort down"})}),Object(m.jsx)("div",{children:Object(m.jsx)(_,{onClick:function(){return a(xe(_e,{type:"AGE-CHECK",payload:18}))},red:!0,children:"check 18"})})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})};var ve=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(Oe,{}),Object(m.jsx)(fe,{})]})},ge="/pre-junior",ke="/junior",Ce="/plus-junior";var Ne=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/",element:Object(m.jsx)(te,{})}),Object(m.jsx)(j.a,{path:ge,element:Object(m.jsx)(te,{})}),Object(m.jsx)(j.a,{path:ke,element:Object(m.jsx)(ve,{})}),Object(m.jsx)(j.a,{path:Ce,element:Object(m.jsx)(re,{})}),Object(m.jsx)(j.a,{path:"/*",element:Object(m.jsx)(ae,{})})]})})},Se=function(e){return e.isActive?ce.a.activeLink:ce.a.item};var we=function(){return Object(m.jsxs)("div",{className:ce.a.containerBlockHeader,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(l.b,{className:Se,to:ge,children:" Pre-junior "}),Object(m.jsx)(l.b,{className:Se,to:ke,children:" Junior "}),Object(m.jsx)(l.b,{className:Se,to:Ce,children:" Junior-Plus "})]}),Object(m.jsx)("div",{className:ce.a.triangle,children:" "})]})};var ye=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(we,{}),Object(m.jsx)(Ne,{})]})})},He=function(){return Object(m.jsxs)("div",{className:o.a.App,children:[Object(m.jsx)("div",{children:"react homeworks:"}),Object(m.jsx)(ye,{})]})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(He,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[34,1,2]]]);
//# sourceMappingURL=main.75d6aa3c.chunk.js.map