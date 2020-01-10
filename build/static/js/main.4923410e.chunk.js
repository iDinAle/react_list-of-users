(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,n){e.exports=n(299)},179:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(24),c=n.n(u),s=n(44),o=n(27),i=n.n(o),l=(n(179),n(45)),p=n(142),g=n(143),m=n(19),f=function(){var e;return i.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("https://my-json-server.typicode.com/iDinAle/demo/users"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},E={users:[],isLoading:!1,hasError:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_LOADING_START":return Object(m.a)({},e,{isLoading:!0,hasError:!1});case"USERS_LOADING_SUCCESS":return Object(m.a)({},e,{users:t.users,isLoading:!1});case"USERS_LOADING_FAIL":return Object(m.a)({},e,{isLoading:!1,hasError:!0});default:return e}},v={activeColumn:"",direction:"asc"},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_COLUMN":return Object(m.a)({},e,{activeColumn:t.activeColumn});case"SET_DIRECTION":return Object(m.a)({},e,{direction:t.direction});default:return e}},b={page:1,usersPerPage:5},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_PAGE":return Object(m.a)({},e,{page:t.page});case"SET_USERS_PER_PAGE":return Object(m.a)({},e,{usersPerPage:t.usersPerPage});default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return t.query;default:return e}},C=function(e){return e.usersLoading.isLoading},_=function(e){return e.usersLoading.hasError},P=function(e){return e.sorting.activeColumn},w=function(e){return e.sorting.direction},A=function(e){return e.pagination.page},O=function(e){return e.pagination.usersPerPage},L=Object(p.a)([function(e){return e.usersLoading.users},P,w,function(e){return e.query}],function(e,t,n,r){var a=e.filter(function(e){return(e.id+e.name+e.surname+e.desc).toLowerCase().includes(r)}),u={string:function(e,n){return e[t].localeCompare(n[t])},number:function(e,n){return e[t]-n[t]}},c="";e[0]&&(c=typeof e[0][t]);var s=u[c]||function(){return 0},o=a.sort(s);return"desc"===n&&o.reverse(),o}),U=Object(l.c)({usersLoading:d,sorting:h,pagination:y,query:S}),T=Object(l.d)(U,Object(l.a)(g.a)),k=n(159),N=function(e,t){return t&&e?e.toString().split(new RegExp("(".concat(t,")"),"gi")).map(function(e,n){return a.a.createElement(r.Fragment,{key:"".concat(e+n)},e.toLowerCase()===t.toLowerCase()?a.a.createElement("span",{style:{backgroundColor:"#f4fc03"}},e):e)}):e},j=function(e){var t=e.user,n=e.highlightedValue;return a.a.createElement("tr",null,a.a.createElement("td",null,N(t.id,n)),a.a.createElement("td",null,N(t.name,n)),a.a.createElement("td",null,N(t.surname,n)),a.a.createElement("td",null,N(t.desc,n)))},I=function(e){var t=e.firstUser,n=e.lastUser,r=e.usersAmount,u=e.pagesAmount,c=e.activePage,s=e.onSwitchPage,o=new Array(u).fill(0).map(function(e,t){return t+1}),i=c-1,l=c+1;1===c&&(i=c,l=c+2),c===u&&(i=c-2<1?1:c-2,l=c);var p=o.slice(i-1,l);return a.a.createElement("div",{className:"table-options"},a.a.createElement("div",null,"Showing ".concat(t," to ").concat(n," of ").concat(r," entries")),a.a.createElement("div",{className:"table-pagination"},a.a.createElement("button",{className:"table-pagination__prev-btn",type:"button",onClick:function(){return s(1)}},"<<"),a.a.createElement("button",{className:"table-pagination__prev-btn",type:"button",onClick:function(){return s(c-1<1?1:c-1)}},"<"),p.map(function(e){return a.a.createElement("button",{onClick:function(){return s(e)},type:"button",key:e},e)}),a.a.createElement("button",{className:"paginator__prev-btn",type:"button",onClick:function(){return s(c+1>u?u:c+1)}},">"),a.a.createElement("button",{className:"paginator__prev-btn",type:"button",onClick:function(){return s(u)}},">>")))},R=n(308),D=n(309),x=[{key:2,value:2,text:"2 users per page"},{key:3,value:3,text:"3 users per page"},{key:5,value:5,text:"5 users per page"},{key:10,value:10,text:"10 users per page"},{key:20,value:20,text:"20 users per page"}],G=function(e){var t=e.onChangeUsersPerPage,n=e.onSearchUsers,r=e.inputValue,u=e.selectValue;return a.a.createElement("div",{className:"table-options"},a.a.createElement(R.a,{placeholder:"Select users per page",options:x,onChange:t,value:u}),a.a.createElement(D.a,{icon:"search",placeholder:"Search...",iconPosition:"left",type:"search",onChange:n,value:r}))},V={id:"ID",name:"Name",surname:"Surname",desc:"Description"},q=function(e){var t=e.users,n=e.activeColumn,u=e.direction,c=e.setActiveColumn,s=e.setDirection,o=e.page,i=e.usersPerPage,l=e.setPage,p=e.setUsersPerPage,g=e.setQuery,m=Object(r.useState)(""),f=Object(k.a)(m,2),E=f[0],d=f[1],v=Object(r.useCallback)(function(e,t){var n;return function(){clearTimeout(n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];n=setTimeout.apply(void 0,[e,t].concat(a))}}(function(e){g(e)},500),[]),h=t.length,b=Math.ceil(h/i),y=(o-1)*i+1,S=o*i,C=t.slice(y-1,S);return S=S>h?h:S,a.a.createElement("div",null,a.a.createElement(G,{onChangeUsersPerPage:function(e,t){p(t.value),l(1)},onSearchUsers:function(e,t){var n=t.value.toLowerCase().replace(/[/\\+*()?[\]]/g,"");l(1),d(n),v(n)},inputValue:E,selectValue:i}),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,Object.keys(V).map(function(e){return a.a.createElement("th",{onClick:function(){var t;n!==(t=e)?(s("asc"),c(t)):s("asc"===u?"desc":"asc")},key:e},V[e])}))),a.a.createElement("tbody",null,C.map(function(e){return a.a.createElement(j,{key:e.id,user:e,highlightedValue:E})}))),a.a.createElement(I,{usersAmount:h,firstUser:y,lastUser:S,pagesAmount:b,activePage:o,onSwitchPage:function(e){l(e)}}))},F=Object(s.b)(function(e){return{activeColumn:P(e),direction:w(e),page:A(e),usersPerPage:O(e)}},{setActiveColumn:function(e){return{type:"SET_ACTIVE_COLUMN",activeColumn:e}},setDirection:function(e){return{type:"SET_DIRECTION",direction:e}},setPage:function(e){return{type:"SET_ACTIVE_PAGE",page:e}},setUsersPerPage:function(e){return{type:"SET_USERS_PER_PAGE",usersPerPage:e}},setQuery:function(e){return{type:"SET_QUERY",query:e}}})(q),Q=function(e){var t=e.users,n=e.isLoading,r=e.hasError,u=e.loadData;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Table of users"),t.length?a.a.createElement(F,{users:t}):a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,r?"Something went wrong ...":"No users yet!"),a.a.createElement("button",{className:"load-btn",type:"button",onClick:function(){return i.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(u());case 2:case"end":return e.stop()}})}},n?"Loading ...":"Load users")))},M=Object(s.b)(function(e){return{users:L(e),isLoading:C(e),hasError:_(e)}},{loadData:function(){return function(e){var t;return i.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"USERS_LOADING_START"}),n.prev=1,n.next=4,i.a.awrap(f());case 4:return t=n.sent,n.abrupt("return",e({type:"USERS_LOADING_SUCCESS",users:t.map(function(e){return Object(m.a)({},e,{id:+e.id})})}));case 8:n.prev=8,n.t0=n.catch(1),e({type:"USERS_LOADING_FAIL"});case 11:case"end":return n.stop()}},null,null,[[1,8]])}}})(Q);c.a.render(a.a.createElement(s.a,{store:T},a.a.createElement(M,null)),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.4923410e.chunk.js.map