!function n(i,t,o){function e(s,c){if(!t[s]){if(!i[s]){var l="function"==typeof require&&require;if(!c&&l)return l(s,!0);if(a)return a(s,!0);var r=new Error("Cannot find module '"+s+"'");throw r.code="MODULE_NOT_FOUND",r}var d=t[s]={exports:{}};i[s][0].call(d.exports,function(n){var t=i[s][1][n];return e(t?t:n)},d,d.exports,n,i,t,o)}return t[s].exports}for(var a="function"==typeof require&&require,s=0;s<o.length;s++)e(o[s]);return e}({1:[function(n,i,t){"use strict";var o=n("./modules/form-styling-methods"),e=n("./modules/scroll"),a=n("./modules/chartmaker");$(function(){o.changeAutoCompleteColorAllFields(),"/dashboard"===top.location.pathname&&(e.init(),e.navigationScroll(),e.smoothScrolling(),a.init())})},{"./modules/chartmaker":2,"./modules/form-styling-methods":3,"./modules/scroll":4}],2:[function(n,i,t){"use strict";t.init=function(){var n,i,t,o,e,a,s=new Array,c=new Array,l=new Array,r="none",d="none",u="none";$(function(){$("#ignitionSortable li").not(".emptyMessage").click(function(){var t=this.id;s.push(t);var o="Ignition";$.ajax({url:"/getJson",data:{unitid:s,dataSelected:o},beforeSend:function(n){var i=$('meta[name="csrf_token"]').attr("content");return i?n.setRequestHeader("X-CSRF-TOKEN",i):void 0}}).done(function(t){"none"==r?(lava.loadData("ignitionLineChart",t,function(i){n=t}),$("#ignitionLineChart").css("visibility","visible"),lava.loadData("ignitionColumnChart",t,function(n){i=t}),$("#ignitionColumnChart").css("display","none"),$("#ignitionColumnChart").css("visibility","hidden")):(lava.loadData("ignitionLineChart",t,function(i){n=t}),lava.loadData("ignitionColumnChart",t,function(n){i=t}))}).fail(function(n){console.log(s),console.log(t)})})}),$(function(){$("#connectionSortable li").not(".emptyMessage").click(function(){var n=this.id;c.push(n);var i="Connection";$.ajax({url:"/getJson",data:{unitid:c,dataSelected:i},beforeSend:function(n){var i=$('meta[name="csrf_token"]').attr("content");return i?n.setRequestHeader("X-CSRF-TOKEN",i):void 0}}).done(function(n){"none"==d?(lava.loadData("connectionLineChart",n,function(i){t=n}),$("#connectionLineChart").css("visibility","visible"),lava.loadData("connectionColumnChart",n,function(i){o=n}),$("#connectionColumnChart").css("display","none"),$("#connectionColumnChart").css("visibility","hidden")):(lava.loadData("connectionLineChart",n,function(i){t=n}),lava.loadData("connectionColumnChart",n,function(i){o=n}))}).fail(function(i){console.log(c),console.log(n)})})}),$(function(){$("#speedSortable li").not(".emptyMessage").click(function(){var n=this.id;l.push(n);var i="Speed";$.ajax({url:"/getJson",data:{unitid:l,dataSelected:i},beforeSend:function(n){var i=$('meta[name="csrf_token"]').attr("content");return i?n.setRequestHeader("X-CSRF-TOKEN",i):void 0}}).done(function(n){"none"==u?(lava.loadData("speedLineChart",n,function(i){e=n}),$("#speedLineChart").css("visibility","visible"),lava.loadData("speedColumnChart",n,function(i){a=n}),$("#speedColumnChart").css("display","none"),$("#speedColumnChart").css("visibility","hidden")):(lava.loadData("speedLineChart",n,function(i){e=n}),lava.loadData("speedColumnChart",n,function(i){a=n}))}).fail(function(i){console.log(l),console.log(n)})})}),$(function(){$("#ignitionChartSortable li").not(".emptyMessage").click(function(){r=this.id,"linechartIgnition"==r&&($("#ignitionLineChart").css("visibility","visible"),$("#ignitionColumnChart").css("visibility","hidden"),$("#ignitionLineChart").css("display","inherit"),$("#ignitionColumnChart").css("display","none"),lava.loadData("ignitionLineChart",n,function(n){})),"columnchartIgnition"==r&&($("#ignitionLineChart").css("visibility","hidden"),$("#ignitionColumnChart").css("visibility","visible"),$("#ignitionLineChart").css("display","none"),$("#ignitionColumnChart").css("display","inherit"),lava.loadData("ignitionColumnChart",i,function(n){}))})}),$(function(){$("#connectionChartSortable li").not(".emptyMessage").click(function(){d=this.id,"linechartConnection"==d&&($("#connectionLineChart").css("visibility","visible"),$("#connectionColumnChart").css("visibility","hidden"),$("#connectionLineChart").css("display","inherit"),$("#connectionColumnChart").css("display","none"),lava.loadData("connectionLineChart",t,function(n){})),"columnchartConnection"==d&&($("#connectionLineChart").css("visibility","hidden"),$("#connectionColumnChart").css("visibility","visible"),$("#connectionLineChart").css("display","none"),$("#connectionColumnChart").css("display","inherit"),lava.loadData("connectionColumnChart",o,function(n){}))})}),$(function(){$("#speedChartSortable li").not(".emptyMessage").click(function(){u=this.id,"linechartSpeed"==u&&($("#speedLineChart").css("visibility","visible"),$("#speedColumnChart").css("visibility","hidden"),$("#speedLineChart").css("display","inherit"),$("#speedColumnChart").css("display","none"),lava.loadData("speedLineChart",e,function(n){})),"columnchartSpeed"==u&&($("#speedLineChart").css("visibility","hidden"),$("#speedColumnChart").css("visibility","visible"),$("#speedLineChart").css("display","none"),$("#speedColumnChart").css("display","inherit"),lava.loadData("speedColumnChart",o,function(n){}))})}),$(function(){$("#ignitionButton").click(function(){s=[],$("#ignitionLineChart").css("visibility","hidden"),$("#ignitionLineChart").css("display","none"),$("#ignitionColumnChart").css("display","none"),$("#ignitionColumnChart").css("visibility","hidden")})}),$(function(){$("#connectionButton").click(function(){c=[],$("#connectionLineChart").css("visibility","hidden"),$("#connectionLineChart").css("display","none"),$("#connectionColumnChart").css("display","none"),$("#connectionColumnChart").css("visibility","hidden")})}),$(function(){$("#speedButton").click(function(){l=[],$("#speedLineChart").css("visibility","hidden"),$("#speedLineChart").css("display","none"),$("#speedColumnChart").css("display","none"),$("#speedColumnChart").css("visibility","hidden")})})}},{}],3:[function(n,i,t){"use strict";t.changeAutoCompleteColor=function(n){$(n).attr("style","-webkit-box-shadow: inset 0 0 0 1000px white !important; width: 100%;")},t.removeAutoCompleteColor=function(n){$(n).css("-webkit-box-shadow","")},t.changeAutoCompleteColorAllFields=function(){$('#registration-form input[type="text"]').css("-webkit-box-shadow: inset 0 0 0 1000px white !important"),$('#registration-form input[type="password"]').css("-webkit-box-shadow: inset 0 0 0 1000px white !important"),$('#registration-form input[type="email"]').css("-webkit-box-shadow: inset 0 0 0 1000px white !important")},t.removeAutoCompleteColorAllFields=function(){$('#registration-form input[type="text"]').css("-webkit-box-shadow: inset 0 0 0 1000px white !important",""),$('#registration-form input[type="password"]').css("-webkit-box-shadow: inset 0 0 0 1000px white !important",""),$('#registration-form input[type="email"]').css("-webkit-box-shadow: inset 0 0 0 1000px white !important","")},t.tooltipsterConfig=function(n,i,t){$("#"+n).tooltipster({trigger:"custom",onlyOne:!1,position:t,theme:i,touchDevices:!1,delay:100,speed:300,animation:"grow"})}},{}],4:[function(n,i,t){"use strict";t.smoothScrolling=function(){$(".main-menu ul li .apply-smooth-scroll,.smooth-scroll").scrollingTo()},t.navigationScroll=function(){!function(n){n.fn.scrollingTo=function(i){var t={animationTime:1e3,easing:"",callbackBeforeTransition:function(){},callbackAfterTransition:function(){}},o=n.extend({},t,i);n(this).click(function(i){var t=i;i.preventDefault();var e=n(document).find(n(this).data("section"));if(e.length<1)return!1;n("html, body").is(":animated")&&n("html, body").stop(!0,!0);var a=e.offset().top;return n(window).scrollTop()==a?!1:(o.callbackBeforeTransition(t,e),void n("html, body").animate({scrollTop:a+"px"},o.animationTime,o.easing,function(){o.callbackAfterTransition(t,e)}))})}}(jQuery)},t.init=function(){smoothScroll.init()}},{}]},{},[1]);