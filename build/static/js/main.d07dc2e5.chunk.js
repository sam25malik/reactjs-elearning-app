(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(76)},46:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(9),i=a.n(s),o=(a(46),a(10)),c=a(11),r=a(13),u=a(12),d=a(14),m=a(37),p=a(8),h=a(20),v=a(26),g=a.n(v),E=a(36),b=a.n(E),D=(a(69),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"routeChange",value:function(){var e=this.props.popUpData.url;console.log(e),window.location.replace(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"popup"},l.a.createElement("div",{className:"popup_inner"},l.a.createElement("button",{onClick:this.props.closePopup,id:"close"},l.a.createElement("i",{className:"fa fa-close"})," Close"),l.a.createElement("div",{className:"col-md-12 popover_title"},l.a.createElement("h2",{className:"title underline"},this.props.popUpData.title)),l.a.createElement("div",{className:"col-md-6 left_side"},l.a.createElement("div",{className:"left_inner_content"},l.a.createElement("div",{className:"description"},l.a.createElement("div",{className:"desc_title"},l.a.createElement("strong",null,"Description:"))," ",this.props.popUpData.description_short),l.a.createElement("div",null,l.a.createElement("div",{className:"desc_title"},l.a.createElement("strong",null,"Rating: ")),l.a.createElement(b.a,{rating:this.props.popUpData.rating.stars,starRatedColor:"blue",starDimension:"30px",starSpacing:"5px",numberOfStars:5,name:"rating"})))),l.a.createElement("div",{className:"col-md-6 right_side"},l.a.createElement("div",{className:"right_inner_content"},l.a.createElement("div",null,l.a.createElement("div",{className:"desc_title"},l.a.createElement("strong",null,"Age: ")),this.props.popUpData.age.min," to ",this.props.popUpData.age.max),l.a.createElement("div",null,l.a.createElement("div",{className:"desc_title"},l.a.createElement("strong",null,"Provider: ")),this.props.popUpData.provider_name),l.a.createElement("div",null,l.a.createElement("div",{className:"desc_title"},l.a.createElement("strong",null,"Location: ")),this.props.popUpData.location),l.a.createElement("div",null,l.a.createElement("div",{className:"desc_title"},l.a.createElement("strong",null,"Package: "))," ",this.props.popUpData.packages[0].price," ",this.props.popUpData.packages[0].currency))),l.a.createElement("center",null,l.a.createElement("button",{type:"button",className:"detailsBtn",onClick:this.routeChange.bind(this)},"View All Details"))))}}]),t}(n.Component)),f=a(40),y=(a(70),[{value:7,label:"None"},{value:0,label:"Sunday"},{value:1,label:"Monday"},{value:2,label:"Tuesday"},{value:3,label:"Wednesday"},{value:4,label:"Thursday"},{value:5,label:"Friday"},{value:6,label:"Saturday"}]);var k=function(e){function t(e){var a,n,l;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).onChangeStart=function(e){return a.setState({startDate:e,visibleStart:!1,visibleEnd:!1})},a.onChangeEnd=function(e){return a.setState({endDate:e,visibleStart:!1,visibleEnd:!1})},a.handleSelect=function(e){a.setState({selectedOption:e}),console.log("Option selected:",e)},a.handler=function(e){var t=e.target.getAttribute("id");console.log(t),a.quickView(t)},a.getList=function(){console.log("getList called()"),console.log(a.formatDate(a.state.startDate));var e=Object(h.a)(a),t=a.formatDate(a.state.startDate),n=a.formatDate(a.state.endDate);console.log(t),console.log(n);var l="https://skilldeer.com/calendar/list?start=".concat(t,"&end=").concat(n);fetch(l,{method:"get"}).then(function(t){console.log(t.body),t.ok?(console.log(t),t.json().then(function(t){var a;console.log(t),a=null!=e.state.selectedOption?7==e.state.selectedOption.value?t:t.filter(function(t){var a=new Date(t.start);console.log(a.getDay());var n=a.getDay();if(console.log(e.state.selectedOption.value),n==e.state.selectedOption.value)return t}):t,console.log(a);var n=a.filter(function(e,t,a){return t===a.findIndex(function(t){return t.id===e.id})});console.log(n),e.setState({listData:n})})):console.log("invalid")}).catch(function(e){console.log(e)})},a.state={listData:"",startDate:new Date,endDate:(n=new Date,l=7,n.setDate(n.getDate()+l),n),visibleStart:!1,visibleEnd:!1,buttonStart:"",buttonEnd:"",quickViewData:"",open:!1,selectedOption:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toggleVisibilityStart",value:function(){this.setState({visibleStart:!this.state.visibleStart,visibleEnd:!1})}},{key:"toggleVisibilityEnd",value:function(){this.setState({visibleEnd:!this.state.visibleEnd,visibleStart:!1})}},{key:"componentDidMount",value:function(){this.getList()}},{key:"componentDidUpdate",value:function(){console.log(this.state.startDate),console.log(this.state.endDate)}},{key:"formatDate",value:function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),l=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[l,a,n].join("-")}},{key:"quickView",value:function(e){console.log("getPlanet"),console.log(this.state.listData[e].id);var t=this.state.listData[e].id,a=this,n="https://skilldeer.com/course/quick-view?id=".concat(t);fetch(n,{method:"get"}).then(function(e){console.log(e.body),e.ok?(console.log(e),e.json().then(function(e){console.log(e),a.setState({quickViewData:e,open:!0})})):console.log("invalid")}).catch(function(e){console.log(e)})}},{key:"togglePopup",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-2 col-lg-2 sidebarHome"},l.a.createElement("div",{className:"searchFilter"},l.a.createElement("h2",{className:"sidebarTitle"},"FILTERS")),l.a.createElement("h2",{className:"sidebarHeader"},"FILTER BY DATE"),l.a.createElement("div",{className:"date"},l.a.createElement("button",{onClick:this.toggleVisibilityStart.bind(this),className:"startDate"},this.formatDate(this.state.startDate)),l.a.createElement("button",{onClick:this.toggleVisibilityEnd.bind(this),className:"endDate"},this.formatDate(this.state.endDate))),l.a.createElement("div",{style:{display:this.state.visibleStart?"block":"none"}},l.a.createElement(g.a,{onChange:this.onChangeStart,value:this.state.startDate})),l.a.createElement("div",{style:{display:this.state.visibleEnd?"block":"none"}},l.a.createElement(g.a,{onChange:this.onChangeEnd,value:this.state.endDate,minDate:this.state.startDate})),l.a.createElement("h2",{className:"sidebarHeader"},"FILTER BY DAY"),l.a.createElement(f.a,{value:this.state.selectedOption,onChange:this.handleSelect,options:y}),l.a.createElement("button",{type:"button",className:"searchBtn",onClick:this.getList},"Search")),l.a.createElement("div",{className:"col-sm-12 col-md-9 col-lg-9 mainSection"},l.a.createElement("h2",{className:"mainHeader"},"Available Classes"),l.a.createElement("div",{className:"row mainContent"},this.state.listData&&this.state.listData.map(function(e,t){return l.a.createElement("div",{id:t,key:t,className:"box",style:{backgroundImage:"url(".concat(e.photo,")")}},l.a.createElement("ul",{className:"box-ul"},l.a.createElement("li",null,l.a.createElement("h2",{className:"listHeader"},e.title)),l.a.createElement("li",null,l.a.createElement("div",{className:"overlay"},l.a.createElement("button",{id:t,type:"button",className:"searchBtn",onClick:this.handler},"Quick View")))))}.bind(this))),this.state.open?l.a.createElement(D,{text:"Close Me",closePopup:this.togglePopup.bind(this),popUpData:this.state.quickViewData}):null)))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/",component:k})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75);i.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.d07dc2e5.chunk.js.map