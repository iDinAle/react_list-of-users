(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,n){e.exports=n(299)},179:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),u=n.n(c),o=n(44),s=n(27),i=n.n(s),l=(n(179),n(45)),p=n(142),m=n(143),g=n(19),d=function(){var e;return i.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("https://my-json-server.typicode.com/iDinAle/demo/users"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},f={users:[],isLoading:!1,hasError:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_LOADING_START":return Object(g.a)({},e,{isLoading:!0,hasError:!1});case"USERS_LOADING_SUCCESS":return Object(g.a)({},e,{users:t.users,isLoading:!1});case"USERS_LOADING_FAIL":return Object(g.a)({},e,{isLoading:!1,hasError:!0});default:return e}},b={activeColumn:"",direction:"asc"},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_COLUMN":return Object(g.a)({},e,{activeColumn:t.activeColumn});case"SET_DIRECTION":return Object(g.a)({},e,{direction:t.direction});default:return e}},_={page:1,usersPerPage:5},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_PAGE":return Object(g.a)({},e,{page:t.page});case"SET_USERS_PER_PAGE":return Object(g.a)({},e,{usersPerPage:t.usersPerPage});default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return t.query;default:return e}},S=function(e){return e.usersLoading.isLoading},C=function(e){return e.usersLoading.hasError},P=function(e){return e.sorting.activeColumn},N=function(e){return e.sorting.direction},w=function(e){return e.pagination.page},A=function(e){return e.pagination.usersPerPage},O=Object(p.a)([function(e){return e.usersLoading.users},P,N,function(e){return e.query}],function(e,t,n,a){var r=e.filter(function(e){return(e.id+e.name+e.surname+e.desc).toLowerCase().includes(a)}),c={string:function(e,n){return e[t].localeCompare(n[t])},number:function(e,n){return e[t]-n[t]}},u="";e[0]&&(u=typeof e[0][t]);var o=c[u]||function(){return 0},s=r.sort(o);return"desc"===n&&s.reverse(),s}),L=Object(l.c)({usersLoading:E,sorting:v,pagination:h,query:y}),U=Object(l.d)(L,Object(l.a)(m.a)),T=n(159),k=function(e,t){return t&&e?e.toString().split(new RegExp("(".concat(t,")"),"gi")).map(function(e,n){return r.a.createElement(a.Fragment,{key:"".concat(e+n)},e.toLowerCase()===t.toLowerCase()?r.a.createElement("span",{style:{backgroundColor:"#f4fc03"}},e):e)}):e},j=function(e){var t=e.user,n=e.highlightedValue;return r.a.createElement("tr",null,r.a.createElement("td",{className:"table__cell"},k(t.id,n)),r.a.createElement("td",{className:"table__cell"},k(t.name,n)),r.a.createElement("td",{className:"table__cell"},k(t.surname,n)),r.a.createElement("td",{className:"table__cell"},k(t.desc,n)))},I=function(e){var t=e.firstUser,n=e.lastUser,a=e.usersAmount,c=e.pagesAmount,u=e.activePage,o=e.onSwitchPage,s=new Array(c).fill(0).map(function(e,t){return t+1}),i=u-1,l=u+1;1===u&&(i=u,l=u+2),u===c&&(i=u-2<1?1:u-2,l=u);var p=s.slice(i-1,l);return r.a.createElement("div",{className:"table-options"},r.a.createElement("div",null,"Showing ".concat(t," to ").concat(n," of ").concat(a," entries")),r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{className:"pagination__button pagination__button--control",type:"button",onClick:function(){return o(1)}},"<<"),r.a.createElement("button",{className:"pagination__button pagination__button--control",type:"button",onClick:function(){return o(u-1<1?1:u-1)}},"<"),p.map(function(e){return r.a.createElement("button",{onClick:function(){return o(e)},type:"button",key:e,className:"pagination__button\n              ".concat(e===u&&"pagination__button--active")},e)}),r.a.createElement("button",{className:"pagination__button pagination__button--control",type:"button",onClick:function(){return o(u+1>c?c:u+1)}},">"),r.a.createElement("button",{className:"pagination__button pagination__button--control",type:"button",onClick:function(){return o(c)}},">>")))},R=n(308),D=n(309),x=[{key:2,value:2,text:"2 users per page"},{key:3,value:3,text:"3 users per page"},{key:5,value:5,text:"5 users per page"},{key:10,value:10,text:"10 users per page"},{key:20,value:20,text:"20 users per page"}],G=function(e){var t=e.onChangeUsersPerPage,n=e.onSearchUsers,a=e.inputValue,c=e.selectValue;return r.a.createElement("div",{className:"table-options"},r.a.createElement(R.a,{placeholder:"Select users per page",options:x,onChange:t,value:c}),r.a.createElement(D.a,{icon:"search",placeholder:"Search...",iconPosition:"left",type:"search",onChange:n,value:a}))},V={id:"ID",name:"Name",surname:"Surname",desc:"Description"},q=function(e){var t=e.users,n=e.activeColumn,c=e.direction,u=e.setActiveColumn,o=e.setDirection,s=e.page,i=e.usersPerPage,l=e.setPage,p=e.setUsersPerPage,m=e.setQuery,g=Object(a.useState)(""),d=Object(T.a)(g,2),f=d[0],E=d[1],b=Object(a.useCallback)(function(e,t){var n;return function(){clearTimeout(n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];n=setTimeout.apply(void 0,[e,t].concat(r))}}(function(e){m(e)},500),[]),v=t.length,_=Math.ceil(v/i),h=(s-1)*i+1,y=s*i,S=t.slice(h-1,y);return y=y>v?v:y,r.a.createElement("div",{className:"table-wrapper"},r.a.createElement(G,{onChangeUsersPerPage:function(e,t){p(t.value),l(1)},onSearchUsers:function(e,t){var n=t.value.toLowerCase().replace(/[/\\+*()?[\]]/g,"");l(1),E(n),b(n)},inputValue:f,selectValue:i}),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,Object.keys(V).map(function(e){return r.a.createElement("th",{onClick:function(){var t;n!==(t=e)?(o("asc"),u(t)):o("asc"===c?"desc":"asc")},className:"table__header",key:e},V[e])}))),r.a.createElement("tbody",null,S.map(function(e){return r.a.createElement(j,{key:e.id,user:e,highlightedValue:f})}))),r.a.createElement(I,{usersAmount:v,firstUser:h,lastUser:y,pagesAmount:_,activePage:s,onSwitchPage:function(e){l(e)}}))},F=Object(o.b)(function(e){return{activeColumn:P(e),direction:N(e),page:w(e),usersPerPage:A(e)}},{setActiveColumn:function(e){return{type:"SET_ACTIVE_COLUMN",activeColumn:e}},setDirection:function(e){return{type:"SET_DIRECTION",direction:e}},setPage:function(e){return{type:"SET_ACTIVE_PAGE",page:e}},setUsersPerPage:function(e){return{type:"SET_USERS_PER_PAGE",usersPerPage:e}},setQuery:function(e){return{type:"SET_QUERY",query:e}}})(q),Q=function(e){var t=e.users,n=e.isLoading,a=e.hasError,c=e.loadData;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"main-title"},"Table of users"),t.length?r.a.createElement(F,{users:t}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"message-title"},a?"Something went wrong ...":"No users yet!"),r.a.createElement("button",{className:"load-btn",type:"button",onClick:function(){return i.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(c());case 2:case"end":return e.stop()}})}},n?"Loading ...":"Load users")))},M=Object(o.b)(function(e){return{users:O(e),isLoading:S(e),hasError:C(e)}},{loadData:function(){return function(e){var t;return i.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"USERS_LOADING_START"}),n.prev=1,n.next=4,i.a.awrap(d());case 4:return t=n.sent,n.abrupt("return",e({type:"USERS_LOADING_SUCCESS",users:t.map(function(e){return Object(g.a)({},e,{id:+e.id})})}));case 8:n.prev=8,n.t0=n.catch(1),e({type:"USERS_LOADING_FAIL"});case 11:case"end":return n.stop()}},null,null,[[1,8]])}}})(Q);u.a.render(r.a.createElement(o.a,{store:U},r.a.createElement(M,null)),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.49e9b062.chunk.js.map