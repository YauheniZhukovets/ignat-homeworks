(this["webpackJsonpreact-homeworks"]=this["webpackJsonpreact-homeworks"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={message:"Message_message__3315Q",images:"Message_images__pQGcr",content:"Message_content__2T_LD",textContent:"Message_textContent__FVa3X",name:"Message_name__3Sc53",time:"Message_time__8DTlo",edge:"Message_edge__2GKrr",containerEdge:"Message_containerEdge__2FHCX"}},function(e,t,n){e.exports={blockAffairs:"Affairs_blockAffairs__3qfYo",affairs:"Affairs_affairs__2cQbF",buttons:"Affairs_buttons__1KE8o",button:"Affairs_button__36nYU",lowFilter:"Affairs_lowFilter__2H5zf",middleFilter:"Affairs_middleFilter__11LSf",highFilter:"Affairs_highFilter__q6jSd"}},,function(e,t,n){e.exports={activeLink:"Header_activeLink__2-X2_",item:"Header_item__2ENKE",containerBlockHeader:"Header_containerBlockHeader__1fAYl",triangle:"Header_triangle__pRSZ3",errorBlock:"Header_errorBlock__46kXe"}},,function(e,t,n){e.exports={blue:"HW4_blue__1OZV1",column:"HW4_column__K5EYz",superInput:"HW4_superInput__2yKfs",superButton:"HW4_superButton__B5hwx",superCheckbox:"HW4_superCheckbox__2plEN",testSpanError:"HW4_testSpanError__wa_dz"}},,,function(e,t,n){e.exports={blockClock:"HW9_blockClock__3huT6",stringTime:"HW9_stringTime__YSrPn",stringDate:"HW9_stringDate__2bnQo",buttonBlock:"HW9_buttonBlock__1xyi0"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2tJXo",errorInput:"SuperInputText_errorInput__wrum0",error:"SuperInputText_error__2wIFh"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__y0CzI",labelCheckBox:"SuperCheckbox_labelCheckBox__1gzb5",spanClassName:"SuperCheckbox_spanClassName__23qQ2"}},function(e,t,n){e.exports={blockButton:"HW8_blockButton__2jKMl",users:"HW8_users__7R0My",user:"HW8_user__1h2OG"}},,function(e,t,n){e.exports={default:"SuperButton_default__3GUe5",red:"SuperButton_red__zEHSu"}},function(e,t,n){e.exports={blockGreeting:"Greeting_blockGreeting__1KHF7",totalCount:"Greeting_totalCount__26WXm"}},function(e,t,n){e.exports={spanClass:"SuperEditableSpan_spanClass__2_bxX",icon:"SuperEditableSpan_icon__1fHrr"}},function(e,t,n){e.exports={blockEditableSpan:"HW6_blockEditableSpan__1KtOI",buttonBlock:"HW6_buttonBlock__3CfhW"}},function(e,t,n){e.exports={radioCheckbox:"SuperRadio_radioCheckbox__SeCsw",labelRadioCheckBox:"SuperRadio_labelRadioCheckBox__2r5X2"}},function(e,t,n){e.exports={selectWrapper:"SuperSelect_selectWrapper__3m0Xu","select-wrapper":"SuperSelect_select-wrapper__2ue20",selectArrow:"SuperSelect_selectArrow__2FI6L"}},,function(e,t,n){e.exports={blockPreloader:"HW10_blockPreloader__176zi",preloader:"HW10_preloader__3vyvw"}},,function(e,t,n){e.exports={App:"App_App__16P9H"}},function(e,t,n){e.exports={blockHW7:"HW7_blockHW7__K1cSf"}},,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(16),s=n.n(a);n(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(30),o=n.n(i),l=n(9),j=n(2),u=n(3),d=n(8),b=n.n(d),h=n(4),O=n(6),x=n(21),p=n.n(x),_=n(0),m=function(e){var t=e.red,n=e.className,c=Object(O.a)(e,["red","className"]),r="".concat(t?p.a.red:p.a.default," ").concat(n);return Object(_.jsx)("button",Object(h.a)({className:r},c))},f=function(e){return Object(_.jsxs)("div",{className:b.a.affairs,children:[Object(_.jsx)("span",{children:e.affair.name}),Object(_.jsxs)("span",{className:"low"===e.affair.priority?b.a.lowFilter:"middle"===e.affair.priority?b.a.middleFilter:b.a.highFilter,children:["[",e.affair.priority,"]"]}),Object(_.jsx)(m,{red:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},v=function(e){var t=e.data.map((function(t){return Object(_.jsx)(f,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){e.setFilter(t)};return Object(_.jsxs)("div",{className:b.a.blockAffairs,children:[Object(_.jsx)("div",{children:t}),Object(_.jsxs)("div",{className:b.a.buttons,children:[Object(_.jsx)(m,{onClick:function(){return n("all")},children:"All"}),Object(_.jsx)(m,{onClick:function(){return n("high")},children:"High"}),Object(_.jsx)(m,{onClick:function(){return n("middle")},children:"Middle"}),Object(_.jsx)(m,{onClick:function(){return n("low")},children:"Low"})]})]})},g=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}],k=function(){var e=Object(c.useState)(g),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("all"),s=Object(u.a)(a,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(n,i);return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 2",Object(_.jsx)(v,{filter:i,data:l,setFilter:o,deleteAffairCallback:function(e){r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},C=n(7),N=n.n(C),S=function(e){return Object(_.jsxs)("div",{className:N.a.message,children:[Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:N.a.images,src:e.avatar,alt:""})}),Object(_.jsx)("div",{className:N.a.containerEdge,children:Object(_.jsx)("div",{className:N.a.edge,children:" "})}),Object(_.jsxs)("div",{className:N.a.content,children:[Object(_.jsxs)("div",{className:N.a.textContent,children:[Object(_.jsx)("div",{className:N.a.name,children:e.name}),Object(_.jsx)("div",{children:e.message})]}),Object(_.jsx)("div",{className:N.a.time,children:e.time})]})]})},w="https://mtdata.ru/u7/photo8A7D/20488237865-0/original.png",y="Elena",H="Hi, Ignat. How are you?",B="23:59",E=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 1",Object(_.jsx)(S,{avatar:w,name:y,message:H,time:B}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},W=n(17),A=n.n(W),T=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(O.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(A.a.error," ").concat(i||""),j=a?A.a.errorInput:"".concat(s," ").concat(A.a.superInput);return Object(_.jsxs)("div",{children:[Object(_.jsx)("input",Object(h.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:j},o)),a&&Object(_.jsx)("div",{className:l,children:a})]})},I=n(12),F=n.n(I),P=n(18),D=n.n(P),K=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(O.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(D.a.checkbox," ").concat(c||"");return Object(_.jsxs)("label",{children:[Object(_.jsx)("input",Object(h.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),Object(_.jsx)("div",{className:D.a.labelCheckBox,children:" "}),r&&Object(_.jsxs)("span",{className:D.a.spanClassName,children:[" ",r," "]})]})},M=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=n?"":"Error!!! Input is empty",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(u.a)(i,2),l=o[0],j=o[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 4",Object(_.jsxs)("div",{className:F.a.column,children:[Object(_.jsxs)("div",{className:F.a.superInput,children:[Object(_.jsx)(T,{value:n,onChangeText:r,onEnter:s,error:a}),Object(_.jsx)(T,{className:F.a.blue})]}),Object(_.jsxs)("div",{className:F.a.superButton,children:[Object(_.jsx)(m,{children:"default"}),Object(_.jsx)(m,{red:!0,onClick:s,children:"delete "}),Object(_.jsx)(m,{disabled:!0,children:"disabled"})]}),Object(_.jsxs)("div",{className:F.a.superCheckbox,children:[Object(_.jsx)(K,{checked:l,onChangeChecked:j,children:"Click me! "}),Object(_.jsx)(K,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},L=n(33),G=n(22),R=n.n(G),U=function(e){var t=e.name,n=e.setNameCallback,c=e.setKeyPress,r=e.addUser,a=e.error,s=e.totalUsers;return Object(_.jsxs)("div",{className:R.a.blockGreeting,children:[Object(_.jsx)(T,{value:t,onChangeText:n,onEnter:c,error:a}),Object(_.jsx)(m,{disabled:!t,onClick:r,children:"add"}),Object(_.jsx)("span",{className:R.a.totalCount,children:s})]})},X=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),a=Object(u.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(""),l=Object(u.a)(o,2),j=l[0],d=l[1],b=function(){""!==s.trim()?(alert("Hello ".concat(s," !")),n(s.trim()),i("")):(d("Title is required!"),i(""))},h=t.length;return Object(_.jsx)(U,{name:s,setNameCallback:function(e){i(e),d("")},setKeyPress:function(){b(),i("")},addUser:b,error:j,totalUsers:h})},z=n(48),J=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 3",Object(_.jsx)(X,{users:n,addUserCallback:function(e){var t={_id:Object(z.a)(),name:e};r([t].concat(Object(L.a)(n)))}}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},Y=n(23),Q=n.n(Y),q=n.p+"static/media/pencil.582f957d.svg",V=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(O.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(u.a)(s,2),o=i[0],l=i[1],j=r||{},d=j.children,b=j.onDoubleClick,x=j.className,p=Object(O.a)(j,["children","onDoubleClick","className"]),m="".concat(Q.a.spanClass," ").concat(x);return Object(_.jsx)(_.Fragment,{children:o?Object(_.jsx)(T,Object(h.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},a)):Object(_.jsxs)("span",Object(h.a)(Object(h.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:m},p),{},{children:[Object(_.jsx)("img",{className:Q.a.icon,src:q,alt:""}),d||a.value]}))})};var Z=n(24),$=n.n(Z);var ee=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 6",Object(_.jsx)("div",{className:$.a.blockEditableSpan,children:Object(_.jsx)(V,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(_.jsxs)("div",{className:$.a.buttonBlock,children:[Object(_.jsx)("div",{children:Object(_.jsx)(m,{onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("editable-span-value",n)},children:"save"})}),Object(_.jsx)("div",{children:Object(_.jsx)(m,{onClick:function(){r(function(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}("editable-span-value",n))},children:"restore"})})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})};var te=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(E,{}),Object(_.jsx)(k,{}),Object(_.jsx)(J,{}),Object(_.jsx)(M,{}),Object(_.jsx)(ee,{})]})},ne=n(10),ce=n.n(ne);var re=function(){return Object(_.jsxs)("div",{className:ce.a.errorBlock,children:[Object(_.jsx)("img",{src:"https://railsware.com/images/shared/not-found-e12fa988.png"}),Object(_.jsx)("div",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430!"})]})};var ae=function(){return Object(_.jsx)("div",{})},se=n(25),ie=n.n(se),oe=function(e){e.type;var t=e.name,n=e.options,c=e.value,r=e.onChange,a=e.onChangeOption,s=e.className,i=(Object(O.a)(e,["type","name","options","value","onChange","onChangeOption","className"]),function(e){r&&r(e),a&&a(e.currentTarget.value)}),o="".concat(ie.a.radioCheckbox," ").concat(s||""),l=n?n.map((function(e,n){return Object(_.jsxs)("label",{children:[Object(_.jsx)("input",{type:"radio",onChange:i,value:e,name:t,checked:c===e,className:o}),e,Object(_.jsx)("div",{className:ie.a.labelRadioCheckBox,children:" "})]},t+"-"+n)})):[];return Object(_.jsx)(_.Fragment,{children:l})},le=n(26),je=n.n(le),ue=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,r=(e.className,Object(O.a)(e,["options","onChange","onChangeOption","className"])),a=t?t.map((function(e,t){return Object(_.jsxs)("option",{children:[" ",e," "]},t)})):[];return Object(_.jsxs)("div",{className:je.a.selectWrapper,children:[Object(_.jsx)("select",Object(h.a)(Object(h.a)({onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},r),{},{children:a})),Object(_.jsx)("div",{className:je.a.selectArrow,children:" "})]})},de=n(31),be=n.n(de),he=["x","y","z"];var Oe=function(){var e=Object(c.useState)(he[2]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 7",Object(_.jsxs)("div",{className:be.a.blockHW7,children:[Object(_.jsx)("div",{children:Object(_.jsx)(ue,{options:he,value:n,onChangeOption:r})}),Object(_.jsx)("div",{children:Object(_.jsx)(oe,{name:"radioCheckBox",options:he,value:n,onChangeOption:r})})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},xe=function(e,t){switch(t.type){case"SORT-UP":var n=e.map((function(e){return e}));return n.sort((function(e,t){return e.name<t.name?-1:1})),n;case"SORT-DOWN":var c=e.map((function(e){return e}));return c.sort((function(e,t){return t.name<e.name?-1:1})),c;case"AGE-CHECK":return e.filter((function(e){return e.age>t.payload}));default:return e}},pe=n(19),_e=n.n(pe),me=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var fe=function(){var e=Object(c.useState)(me),t=Object(u.a)(e,2),n=t[0],r=t[1],a=n.map((function(e){return Object(_.jsxs)("div",{className:_e.a.user,children:[Object(_.jsx)("span",{children:e.name}),Object(_.jsx)("span",{style:{color:"rgba(13, 39, 121, 0.75)"},children:e.age})]},e._id)}));return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 8",Object(_.jsx)("div",{className:_e.a.users,children:a}),Object(_.jsxs)("div",{className:_e.a.blockButton,children:[Object(_.jsx)("div",{children:Object(_.jsx)(m,{onClick:function(){return r(xe(me,{type:"SORT-UP"}))},children:"sort up"})}),Object(_.jsx)("div",{children:Object(_.jsx)(m,{onClick:function(){return r(xe(me,{type:"SORT-DOWN"}))},children:"sort down"})}),Object(_.jsx)("div",{children:Object(_.jsx)(m,{onClick:function(){return r(xe(me,{type:"AGE-CHECK",payload:18}))},red:!0,children:"check 18"})})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},ve=n(15),ge=n.n(ve);var ke=function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(new Date),s=Object(u.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(!1),j=Object(u.a)(l,2),d=j[0],b=j[1],h=function(){clearTimeout(n)},O=function(e){return e<10?"0"+e:e},x="".concat(O(i.getHours())," \n    : ").concat(O(i.getMinutes())," : ").concat(O(i.getSeconds())),p="".concat(O(i.getDate())," \n    : ").concat(O(i.getMonth()+1)," : ").concat(i.getFullYear());return Object(_.jsxs)("div",{className:ge.a.blockClock,children:[Object(_.jsx)("div",{className:ge.a.stringTime,onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:x}),d&&Object(_.jsx)("div",{className:ge.a.stringDate,children:p}),Object(_.jsxs)("div",{className:ge.a.buttonBlock,children:[Object(_.jsx)("div",{children:Object(_.jsx)(m,{onClick:function(){h();var e=+setInterval((function(){o(new Date)}),1e3);r(e)},children:"start"})}),Object(_.jsx)("div",{children:Object(_.jsx)(m,{onClick:h,children:"stop"})})]})]})};var Ce=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 9",Object(_.jsx)("div",{children:Object(_.jsx)(ke,{})}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},Ne=n(14),Se={isLoading:!1},we=function(e){return{type:"IS-LOADING",isLoading:e}},ye=n(28),He=n.n(ye),Be=n.p+"static/media/Spinner.b9ae601e.svg";var Ee=function(){var e=Object(Ne.b)(),t=Object(Ne.c)((function(e){return e.loading.isLoading}));return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 10",Object(_.jsx)("div",{className:He.a.blockPreloader,children:t?Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:He.a.preloader,src:Be,alt:"pic"})}):Object(_.jsx)("div",{children:Object(_.jsx)(m,{onClick:function(){e(we(!0));var t=setTimeout((function(){e(we(!1)),clearTimeout(t)}),2e3);console.log("loading...")},children:"set loading..."})})}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})};var We=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(Oe,{}),Object(_.jsx)(fe,{}),Object(_.jsx)(Ce,{}),Object(_.jsx)(Ee,{})]})},Ae="/pre-junior",Te="/junior",Ie="/plus-junior";var Fe=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(j.c,{children:[Object(_.jsx)(j.a,{path:"/",element:Object(_.jsx)(te,{})}),Object(_.jsx)(j.a,{path:Ae,element:Object(_.jsx)(te,{})}),Object(_.jsx)(j.a,{path:Te,element:Object(_.jsx)(We,{})}),Object(_.jsx)(j.a,{path:Ie,element:Object(_.jsx)(ae,{})}),Object(_.jsx)(j.a,{path:"/*",element:Object(_.jsx)(re,{})})]})})},Pe=function(e){return e.isActive?ce.a.activeLink:ce.a.item};var De=function(){return Object(_.jsxs)("div",{className:ce.a.containerBlockHeader,children:[Object(_.jsxs)("div",{children:[Object(_.jsxs)(l.b,{className:Pe,to:Ae,children:[" ",Object(_.jsx)("b",{children:" Pre-junior "})," "]}),Object(_.jsxs)(l.b,{className:Pe,to:Te,children:[" ",Object(_.jsx)("b",{children:"Junior"})]}),Object(_.jsxs)(l.b,{className:Pe,to:Ie,children:[" ",Object(_.jsx)("b",{children:"Junior-Plus"})," "]})]}),Object(_.jsx)("div",{className:ce.a.triangle,children:" "})]})};var Ke=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(l.a,{children:[Object(_.jsx)(De,{}),Object(_.jsx)(Fe,{})]})})},Me=function(){return Object(_.jsxs)("div",{className:o.a.App,children:[Object(_.jsx)("div",{children:"react homeworks:"}),Object(_.jsx)(Ke,{})]})},Le=n(29),Ge=Object(Le.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-LOADING":return Object(h.a)(Object(h.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),Re=Object(Le.b)(Ge),Ue=Re;window.store=Re,s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(Ne.a,{store:Ue,children:Object(_.jsx)(Me,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.539185d4.chunk.js.map