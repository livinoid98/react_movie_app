(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(63)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),i=a.n(o),s=a(7),c=a(1),l=a(15),m=a.n(l),u=a(29),v=a(10),p=a(11),d=a(13),E=a(12),f=a(30),h=a.n(f);a(55);var y=function(e){e.id;var t=e.year,a=e.title,n=e.summary,o=e.poster,i=e.genres;return r.a.createElement(s.b,{to:{pathname:"/movie-detail",state:{year:t,title:a,summary:n,poster:o,genres:i}}},r.a.createElement("div",{class:"movie"},r.a.createElement("img",{src:o,alt:""}),r.a.createElement("div",{class:"movie_data"},r.a.createElement("h3",{class:"movie_title"},a),r.a.createElement("h5",{class:"movie_year"},t),r.a.createElement("ul",{className:"movie_genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{class:"movie_summary"},n.slice(0,180)+"..."))))},b=(a(61),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,console.log(a.data.data.movies),e.setState({movies:a.data.data.movies,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));var g=function(){return r.a.createElement("span",null,"About this page : I built it")},_=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component);a(62);var j=function(){return r.a.createElement("div",null,r.a.createElement(s.b,{to:"/"},r.a.createElement("button",null,"Home")),r.a.createElement(s.b,{to:"/about"},r.a.createElement("button",null,"About")))};var k=function(){return r.a.createElement(s.a,null,r.a.createElement(j,null),r.a.createElement(c.a,{path:"/",component:b,exact:!0}),r.a.createElement(c.a,{path:"/about",component:g}),r.a.createElement(c.a,{path:"/movie-detail",component:_}))};i.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.515c042f.chunk.js.map