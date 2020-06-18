(this.webpackJsonpthe=this.webpackJsonpthe||[]).push([[0],{10:function(e,a,t){e.exports={container:"Loading_container__21xZy",bar1:"Loading_bar1__b3ObC",bar2:"Loading_bar2__3enN9",bar3:"Loading_bar3__3IjDy",bar4:"Loading_bar4__2xaMu",bar5:"Loading_bar5__1BxDU",bar6:"Loading_bar6__Peilj",bar7:"Loading_bar7__3FO9L",bar8:"Loading_bar8__1SGkf",bar9:"Loading_bar9__3SXV2",bar10:"Loading_bar10__vAfba",progress:"Loading_progress__3Hafb",Progress:"Loading_Progress__f3F5y",Bar:"Loading_Bar__2fWB5"}},12:function(e,a,t){e.exports={intro:"DishInfo_intro__2vk5r",button:"DishInfo_button__1R6Z9",subheader:"DishInfo_subheader__14KkC",subheader2:"DishInfo_subheader2__3gXXk",subheader3:"DishInfo_subheader3__3EsKV",root:"DishInfo_root__PTRFQ",lists:"DishInfo_lists__1lkzI"}},35:function(e,a,t){e.exports={container:"SearchBar_container__1ly9S",button:"SearchBar_button__pPsD_"}},38:function(e,a,t){e.exports={card:"Recipes_card__2pexa"}},39:function(e,a,t){e.exports={container:"App_container__3ZDxI",image:"App_image__Q56gg"}},57:function(e,a,t){e.exports={lists:"Intro_lists__UOulH"}},59:function(e,a,t){e.exports=t.p+"static/media/logo.09701bd3.png"},69:function(e,a,t){e.exports=t(97)},74:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(7),i=t.n(s),c=(t(74),t(19)),o=t.n(c),l=t(27),d=t(51),m=t(52),u=t(61),h=t(60),b=t(35),p=t.n(b),_=t(134),g=t(129),E=function(e){var a=e.handleFoodChange;return r.a.createElement("div",{className:p.a.container},r.a.createElement(_.a,{fullWidth:!0,label:"Search for Food...",variant:"outlined",type:"text",className:p.a.input,id:"searchFood"}),r.a.createElement(g.a,{variant:"contained",color:"secondary",className:p.a.button,onClick:function(e){return a(document.getElementById("searchFood").value)}},"Search Food"))},f=t(38),v=t.n(f),N=t(130),y=t(131),I=t(33),x=function(e){var a=e.showDishInfo,t=e.searchedData;return t[0]?r.a.createElement("div",{className:v.a.container},r.a.createElement(N.a,{container:!0,spacing:4,justify:"center"},t.map((function(e,t){return r.a.createElement(N.a,{item:!0,component:y.a,xs:12,md:4,className:v.a.card,key:t},r.a.createElement("div",{onClick:function(t){return a(e.recipe)}},r.a.createElement(I.NewsHeaderCard,{thumbnail:e.recipe.image,title:e.recipe.label,author:Math.round(e.recipe.calories)+" CALORIES | "+e.recipe.ingredients.length+" INGREDIENTS",tags:e.recipe.healthLabels.slice(0,2)})))})))):""},D=t(12),k=t.n(D),w=t(128),L=t(132),S=t(133),C=t(135),O=function(e){return r.a.createElement("div",{className:k.a.container},r.a.createElement("div",{className:k.a.intro},r.a.createElement(N.a,{container:!0},r.a.createElement(N.a,{item:!0,xs:12,sm:12,md:4},r.a.createElement(I.TaggedContentCard,{thumbnail:e.dish.image,title:e.dish.label,description:Math.round(e.dish.calories)+" CALORIES | "+e.dish.ingredients.length+" INGREDIENTS",tags:[]})),r.a.createElement(N.a,{item:!0,xs:12,sm:12,md:6,className:k.a.root},r.a.createElement(w.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:r.a.createElement(L.a,{component:"div",id:"nested-list-subheader",className:k.a.subheader2},"Health Labels")},e.dish.healthLabels.map((function(e,a){return r.a.createElement(S.a,{button:!0,key:a,className:k.a.lists},r.a.createElement(C.a,{primary:e}))})))))),r.a.createElement(N.a,{container:!0,spacing:3},r.a.createElement(N.a,{item:!0,xs:12,sm:12,md:5,className:k.a.root},r.a.createElement(w.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:r.a.createElement(L.a,{component:"div",id:"nested-list-subheader",className:k.a.subheader},"Ingredients")},e.dish.ingredients.map((function(e,a){return r.a.createElement(S.a,{button:!0,key:a,className:k.a.lists},r.a.createElement(C.a,{primary:e.text}))})))),r.a.createElement(N.a,{item:!0,xs:12,md:5,className:k.a.root},r.a.createElement(w.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:r.a.createElement(L.a,{component:"div",id:"nested-list-subheader",className:k.a.subheader3},"Nutrition")},e.dish.digest.map((function(e,a){return r.a.createElement(S.a,{button:!0,key:a,className:k.a.lists},r.a.createElement(C.a,{primary:e.label}),r.a.createElement(C.a,{primary:Math.round(e.total)+e.unit}))}))))),r.a.createElement("a",{href:e.dish.url,target:"blank"},r.a.createElement(g.a,{variant:"contained",color:"secondary",className:k.a.button},"Learn How to Make this dish and more")))},R=t(10),F=t.n(R),j=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Retriving Data...(this could take a minute.)"),r.a.createElement("div",{className:F.a.container},r.a.createElement("div",{className:F.a.bar1}),r.a.createElement("div",{className:F.a.bar2}),r.a.createElement("div",{className:F.a.bar3}),r.a.createElement("div",{className:F.a.bar4}),r.a.createElement("div",{className:F.a.bar5}),r.a.createElement("div",{className:F.a.bar6}),r.a.createElement("div",{className:F.a.bar7}),r.a.createElement("div",{className:F.a.bar8}),r.a.createElement("div",{className:F.a.bar9}),r.a.createElement("div",{className:F.a.bar10}),r.a.createElement("div",{className:F.a.progressContainer},r.a.createElement("div",{className:F.a.progress}))))},B=t(57),A=t.n(B),M=function(){return r.a.createElement("div",null,r.a.createElement(w.a,{component:"nav","aria-labelledby":"nested-list-subheader"},r.a.createElement(S.a,{button:!0},r.a.createElement(C.a,{className:A.a.lists,primary:"Search over 2 million recipes by diets, calories and nutrient ranges"}))))},H=t(58),P=t.n(H),T=function(){var e=Object(l.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("https://api.edamam.com/search?q=".concat(a,"&app_id=").concat("d57c60e9","&app_key=").concat("04723ebf8cb2099e90bcee4dfb397504"));case 3:return t=e.sent,e.abrupt("return",t.data.hits);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),W=t(39),G=t.n(W),X=t(59),Z=t.n(X),J=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={data:{},dish:{},toggleRecipes:!0,toggleDishInfo:!1,loading:!1},e.handleFoodChange=function(){var a=Object(l.a)(o.a.mark((function a(t){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T(t);case 2:0===(n=a.sent)?(e.setState({loading:!0}),setTimeout(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.reload();case 1:case"end":return e.stop()}}),e)}))),1e5)):e.setState({data:n,dish:{},toggleDishInfo:!1,toggleRecipes:!0,loading:!1});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.showDishInfo=function(a){e.setState({dish:a,toggleDishInfo:!0,toggleRecipes:!1})},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:G.a.container},r.a.createElement("img",{src:Z.a,className:G.a.image,alt:"logo"}),this.state.loading?"":r.a.createElement(E,{handleFoodChange:this.handleFoodChange}),this.state.data.length?"":r.a.createElement(M,null),this.state.loading?"":r.a.createElement("div",null,this.state.toggleRecipes?r.a.createElement(x,{showDishInfo:this.showDishInfo,searchedData:this.state.data}):"",this.state.toggleDishInfo?r.a.createElement(O,{dish:this.state.dish}):""),this.state.loading?r.a.createElement(j,null):"")}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.0e91f50c.chunk.js.map