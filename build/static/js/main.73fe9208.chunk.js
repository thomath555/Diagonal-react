(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMxJREFUeNrsl9ENgzAMRGMm6AiM0JFgBCboKGaTsgFswAiwQWoQkfJRVQQhNQd3kpXf9+JEcZxjGOaUeO8fViUyfG81WT1R4UNwJL7A40j8gM9fYgd8vhIJ8CEjMnw+HSA84QlPeMJfEl5ieFveVilAjdXwd4GD8Fmk2NYXIvzagW33J9SvbIG687HAjCwQLvEys5eoHVhSIx8hJyIdskT8Elc+LUoJSlCCEpSgBCVOmIX2T38i7Z3GDkWWUOROKPJxUuQ7oY5hsPIRYABvzTavpLSmGQAAAABJRU5ErkJggg=="},28:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkRJREFUeNrsmdFxwjAMhh0m8AjZoNmg2QBGSDdgg2YT6AShE4ROEJggbBA2cOU7p8dxiSxsyyE0utPlAbD5bOmPLCcigCmlJDyygY9OSZJcxQSWOIKk8NiAv4Pn4BL5ugY7gv+AHwD0Ip7NACgHr5Sf6d/nzwKUgtcqrFVm5yeDKsA7xWN63GIKqJ2KY7tXhGKBS8ag4EENkRP4t1G+e9MisR55FQzZHlTzg2unSmJulNTkN+JTEneu5JJzm9WuavaAuuahwdoYeUDI3za0rEcLEUJoFjF2azeB8rbcu9WaIpcDTFoWtPCdoGIPCbdFrXwH509ixzTgkvhtJLBtaOlfWaqCY6QKDpsncwUbFQYob05RTrv4PNI1DMYqgTrySSLo/1iJF7WXBrsGjW13k0gzyAnsHFKNPGxsvrMr2AV7x8XqfiEfX1zBMKldR9qtteWE7rxiHXJSlsy7JbH5fVXxgCQ0d1m1RYTjwNkS6Lgam6ZV0LG2CCznooYJrGGfEwbaxOz7Efoemxj12m2HSgYQC+s8sWO+bxXkHrncEnqWKUfcF8TGZk0NFxPm1NuaICE41uLWrbZP4hj9xd7ZVAnaU+Nvwn4xeG978K/+5Rz8RnSCS4lBZWQpEB4IS++blingMkLCu5oeNyMoMhucNC3pUDeb3X3LnCAuDVvdegPYeuxQOfQHiZf2DXdR3odoaVa6RUBq872MsGjNU8AxRcQCt8AtcAvcArfA/Xs4MTejwok5GgGuEHM1BG6+UAjcH9SvAAMAy5K2QTwDnF4AAAAASUVORK5CYII="},33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),s=(a(38),a(39),a(40),a(7)),l=a(8),i=a(10),u=a(9),A=a(11),h=a(27),m=a.n(h),p=a(28),d=a.n(p),g=a(4),f=a(30),v=a.n(f),E=(a(62),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchValue:""},a.__onChangeHandler=function(e){a.props.searchApi(e.target.value),a.setState({searchValue:e.target.value})},a.__onClickHandler=function(){a.props.searchApi(""),a.setState({searchValue:""})},a}return Object(A.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.searchValue;return r.a.createElement("div",{className:"app__header px-6 pb-12 flex items-end",id:"header"},r.a.createElement("div",{className:"app__header-back"},r.a.createElement("img",{className:"w-8 pb-2",onClick:this.__onClickHandler,src:m.a,alt:"back-btn"})),r.a.createElement("input",{className:"px-8 font-normal text-4xl",type:"text",placeholder:"Search",value:e,onChange:this.__onChangeHandler}),r.a.createElement("div",{className:"app__header-search"},r.a.createElement("img",{className:"w-8 pb-2",src:d.a,alt:"search-btn"})))}}]),t}(n.Component)),S=Object(g.b)(function(e){return{dataSet:e.dataSet,searchValue:e.searchValue}},function(e){return{searchApi:function(t){return e(function(e){return{type:"SEARCH",value:e}}(t))}}})(E),b=(a(63),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={dataSet:[],currentApiIndex:1,searchDataSet:[],searchValue:""},a.onImgError=function(e,t){var n=a.state,r=n.dataSet,c=n.searchDataSet;"search"===e?(c[t]["poster-image"]="placeholder_for_missing_posters.png",a.setState({searchDataSet:c})):(r[t]["poster-image"]="placeholder_for_missing_posters.png",a.setState({dataSet:r}))},a}return Object(A.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.currentApiIndex;this.props.apiCall(e);var t=this,a=document.getElementById("content");a.onscroll=function(){!function(){a.scrollTop>50||a.scrollTop>50?document.getElementById("header").classList.add("gradient-header"):document.getElementById("header").classList.remove("gradient-header");var e=t.state.currentApiIndex,n=a.scrollTop||a.scrollTop,r=a.scrollHeight-a.clientHeight;n/r*100>=75&&e<3&&t.setState({currentApiIndex:e+1},function(){t.props.apiCall(t.state.currentApiIndex)})}()}}},{key:"componentWillReceiveProps",value:function(e){this.setState({dataSet:e.dataSet,searchDataSet:e.searchDataSet,searchValue:e.searchValue})}},{key:"render",value:function(){var e=this,t=this.state,a=t.dataSet,n=t.searchDataSet,c=t.searchValue;return r.a.createElement("div",{className:"app__content p-6",id:"content"},c?n.length?n.map(function(t,a){return r.a.createElement("div",{key:a,className:"movie-single pb-8"},r.a.createElement("img",{src:"/assets/img/poster/".concat(t["poster-image"]),alt:"".concat(t["poster-image"]),onError:function(){e.onImgError("search",a)}}),r.a.createElement("p",{className:"text-3xl text-gray-500 pt-2 font-light"},t.name))}):r.a.createElement("p",{className:"error text-center text-white text-3xl mt-16"},"Not found. Please try another movie !!!!"):a&&a.length&&a.map(function(t,a){return r.a.createElement("div",{key:a,className:"movie-single pb-8"},r.a.createElement("img",{src:"/assets/img/poster/".concat(t["poster-image"]),alt:"".concat(t["poster-image"]),onError:function(){e.onImgError("full",a)}}),r.a.createElement("p",{className:"text-3xl text-gray-500 pt-2 font-light"},t.name))}))}}]),t}(n.Component)),x=Object(g.b)(function(e){return{dataSet:e.dataSet,searchDataSet:e.searchDataSet,searchValue:e.searchValue}},function(e){return{apiCall:function(t){return e(function(e){return function(t){v.a.get("./api/CONTENTLISTINGPAGE-PAGE".concat(e,".json")).then(function(e){var a=e.data;t({type:"API",value:a.page["content-items"].content})}).catch(function(e){console.log(e)})}}(t))}}})(b),N=function(){return r.a.createElement("div",{className:"App max-w-3xl"},r.a.createElement(S,null),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(16),C=a(15),y=a(31),O=a.n(y),j={dataSet:[],searchDataSet:[],searchValue:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,a=e.dataSet;switch(t.type){case"API":var n=[].concat(Object(C.a)(a),Object(C.a)(t.value));return Object(w.a)({},e,{dataSet:n});case"SEARCH":var r=new O.a(a,["name"]);return Object(w.a)({},e,{searchDataSet:r.search(t.value),searchValue:t.value});default:return e}},J=a(5),G=a(32),R=Object(J.c)(I,Object(J.a)(G.a)),k=r.a.createElement(g.a,{store:R},r.a.createElement(N,null));o.a.render(k,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.73fe9208.chunk.js.map