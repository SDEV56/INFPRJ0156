!function e(o,t,i){function r(s,a){if(!t[s]){if(!o[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(n)return n(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var p=t[s]={exports:{}};o[s][0].call(p.exports,function(e){var t=o[s][1][e];return r(t?t:e)},p,p.exports,e,o,t,i)}return t[s].exports}for(var n="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,o,t){"use strict";var i=e("./registration"),r=e("./homepage"),n=e("./form-styling-methods");e("./admin");$(function(){n.changeAutoCompleteColorAllFields(),"/"===top.location.pathname&&(r.initTooltipsterContactForm(),r.validateContactForm(),r.initPlugins(),r.navigationScroll(),r.smoothScrolling(),r.portfolioFilter(),r.prettyPhoto()),"/register"===top.location.pathname&&(i.initTooltipsterRegistrationForm(i.requiredFieldsIds()),i.passwordStrenghtChecker(),i.validateRegistrationForm(),i.onResizeGrowOrShrink(),i.watchRadioGroupAndToggleTooltipster())})},{"./admin":2,"./form-styling-methods":3,"./homepage":4,"./registration":5}],2:[function(e,o,t){"use strict"},{}],3:[function(e,o,t){"use strict";t.changeAutoCompleteColor=function(e){$(e).attr("style","-webkit-box-shadow: inset 0 0 0 1000px white !important; width: 100%;")},t.removeAutoCompleteColor=function(e){$(e).css("-webkit-box-shadow","")},t.changeAutoCompleteColorAllFields=function(){$('#registration-form input[type="text"]').css("-webkit-box-shadow: inset 0 0 0 1000px white !important"),$('#registration-form input[type="password"]').css("-webkit-box-shadow: inset 0 0 0 1000px white !important"),$('#registration-form input[type="email"]').css("-webkit-box-shadow: inset 0 0 0 1000px white !important")},t.removeAutoCompleteColorAllFields=function(){$('#registration-form input[type="text"]').css("-webkit-box-shadow: inset 0 0 0 1000px white !important",""),$('#registration-form input[type="password"]').css("-webkit-box-shadow: inset 0 0 0 1000px white !important",""),$('#registration-form input[type="email"]').css("-webkit-box-shadow: inset 0 0 0 1000px white !important","")},t.tooltipsterConfig=function(e,o,t){$("#"+e).tooltipster({trigger:"custom",onlyOne:!1,position:t,theme:o,touchDevices:!1,delay:100,speed:300,animation:"grow"})}},{}],4:[function(e,o,t){"use strict";var i=e("./form-styling-methods");t.validateContactForm=function(){$("#main-contact-form").validate({errorPlacement:function(e,o){var t=$(o).data("lastError"),r=$(e).text();if($(o).data("lastError",r),""!==r&&r!==t){$(o).tooltipster("content",r),$(o).tooltipster("show");var n="#"+$(o).attr("id")+"1";$(o).closest(".form-group").addClass("has-error"),$(n).removeClass("glyphicon-ok").addClass("glyphicon-remove"),i.removeAutoCompleteColor(o)}},success:function(e,o){$(o).tooltipster("hide");var t="#"+$(o).attr("id")+"1";$(o).closest(".form-group").removeClass("has-error"),$(t).removeClass("glyphicon-remove").addClass("glyphicon-ok"),i.changeAutoCompleteColor(o)},submitHandler:function(e){r()},rules:{name:"required",subject:"required",message:"required",email:{required:!0,email:!0}}})},t.navigationScroll=function(){!function(e){e.fn.scrollingTo=function(o){var t={animationTime:1e3,easing:"",callbackBeforeTransition:function(){},callbackAfterTransition:function(){}},i=e.extend({},t,o);e(this).click(function(o){var t=o;o.preventDefault();var r=e(document).find(e(this).data("section"));if(r.length<1)return!1;e("html, body").is(":animated")&&e("html, body").stop(!0,!0);var n=r.offset().top;return e(window).scrollTop()==n?!1:(i.callbackBeforeTransition(t,r),void e("html, body").animate({scrollTop:n+"px"},i.animationTime,i.easing,function(){i.callbackAfterTransition(t,r)}))})}}(jQuery)},t.initTooltipsterContactForm=function(e){i.tooltipsterConfig("message","tooltipster-light","top-right"),i.tooltipsterConfig("name","tooltipster-light","top-right"),i.tooltipsterConfig("email","tooltipster-light","top-right"),i.tooltipsterConfig("subject","tooltipster-light","top-right")},t.smoothScrolling=function(){$(".main-menu ul li .apply-smooth-scroll,.smooth-scroll").scrollingTo()},$(document).ready(function(){function e(e){l=e,o(),t()}function o(){s=$("<div>",{id:"progressBar"}),a=$("<div>",{id:"bar"}),s.append(a).appendTo(l)}function t(){d=0,c=!1,p=setInterval(i,10)}function i(){c===!1&&(d+=1/m,a.css({width:d+"%"}),d>=100&&l.trigger("owl.next"))}function r(){c=!0}function n(){clearTimeout(p),t()}var s,a,l,c,p,d,m=7;$("#main-slider").find(".owl-carousel").owlCarousel({slideSpeed:500,paginationSpeed:500,singleItem:!0,navigation:!0,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],afterInit:e,afterMove:n,startDragging:r,transitionStyle:"fadeUp"})}),t.initPlugins=function(){(new WOW).init(),smoothScroll.init()},t.portfolioFilter=function(){$(window).load(function(){var e=$(".portfolio-filter >li>a"),o=$(".portfolio-items");o.isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"}),e.on("click",function(){e.removeClass("active"),$(this).addClass("active");var t=$(this).attr("data-filter");return o.isotope({filter:t}),!1})})};var r=function(){var e=$("#main-contact-form"),o=$('<div class="form_status"></div>');$.ajax({url:$(this).attr("action"),beforeSend:function(){e.prepend(o.html('<p><i class="fa fa-spinner fa-spin"></i> Email word verzonden...</p>').fadeIn())}}).done(function(e){o.html('<p class="text-success">Bedankt voor uw bericht, wij nemen zo spoedig mogelijk contact op...</p>').delay(3e3).fadeOut(),n()})};t.prettyPhoto=function(){$("a[rel^='prettyPhoto']").prettyPhoto({social_tools:!1})};var n=function(){$("#main-contact-form").find("input[type=text], input[type=email], textarea").val(""),$("#main-contact-form").find("input[type=text], input[type=email], textarea").removeClass("has-error"),$("#name1").removeClass("glyphicon-ok"),$("#email1").removeClass("glyphicon-ok"),$("#subject1").removeClass("glyphicon-ok")}},{"./form-styling-methods":3}],5:[function(e,o,t){"use strict";var i=e("./form-styling-methods");t.validateRegistrationForm=function(){$("#registration-form").validate({errorPlacement:function(e,o){var t=$(o).data("lastError"),r=$(e).text();if($(o).data("lastError",r),""!==r&&r!==t){$(o).tooltipster("content",r),$(o).tooltipster("show");var n="#"+$(o).attr("id")+"1";$(o).closest(".form-group").addClass("has-error"),$(n).removeClass("glyphicon-ok").addClass("glyphicon-remove"),i.removeAutoCompleteColor(o)}},success:function(e,o){$(o).tooltipster("hide");var t="#"+$(o).attr("id")+"1";$(o).closest(".form-group").removeClass("has-error"),$(t).removeClass("glyphicon-remove").addClass("glyphicon-ok"),i.changeAutoCompleteColor(o)},rules:{firstname:"required",lastname:"required",town:"required",province:"required",phonenumber:{required:{depends:function(){return $("#phonenumber").val().replace(/ /g,""),!0}},phoneNL:{depends:function(){return $("#else").is(":checked")?!1:!0}}},zip:{postalcodeNL:{depends:function(){return $("#else").is(":checked")?!1:!0}},required:!0,onkeyup:!1,remote:{depends:function(){""===$(this).val()||""===$("#streetnumber").val()||$("#else").is(":checked")||s($(this).val().replace(/ /g,""))}}},streetnumber:{required:!0,streetnumber:!0,onkeyup:!1,remote:{depends:function(){""===$(this).val()||""===$("#zip").val()||$("#else").is(":checked")||s($("#zip").val().replace(/ /g,""))}}},password:{required:!0,minlength:6},password_confirmation:{required:!0,minlength:6,equalTo:"#password"},email:{required:!0,email:!0},countries:{required:"#else:checked"}}}),r(),n()};var r=function(){$(".autocomplete").hide()};jQuery.validator.addMethod("streetnumber",function(e,o){return this.optional(o)||/^\d+[a-zA-Z]?$/.test(e)},"Voer een gelding huisnummer in Bijv. 10C of 7.");var n=function(){var e=$("#else"),o=e.is(":checked"),t=$("#countries")[o?"removeClass":"addClass"]("hide");$("#NL, #else").change(function(){$(".tooltipstered").tooltipster("reposition"),t[$("#NL").is(":checked")?"addClass":"removeClass"]("hide"),$("#NL").is(":checked")?$("#countries").val(""):"",$("#else").is(":checked")?"addClass":"removeClass",$("#town, #province, #zip, #streetnumber").val(""),$("#else").is(":checked")&&(""==$("#province").val()&&$("#province1").hasClass("glyphicon-ok")&&$("#province1").removeClass("glyphicon-ok"),""==$("#town").val()&&$("#town1").hasClass("glyphicon-ok")&&$("#town1").removeClass("glyphicon-ok"),""==$("#zip").val()&&$("#zip1").hasClass("glyphicon-ok")&&$("#zip1").removeClass("glyphicon-ok"),""==$("#streetnumber").val()&&$("#streetnumber1").hasClass("glyphicon-ok")&&$("#streetnumber1").removeClass("glyphicon-ok"),$(".autocomplete").show()),$("#NL").is(":checked")&&(""==$("#province").val()&&$("#province1").hasClass("glyphicon-ok")&&$("#province1").removeClass("glyphicon-ok"),""==$("#town").val()&&$("#town1").hasClass("glyphicon-ok")&&$("#town1").removeClass("glyphicon-ok"),""==$("#zip").val()&&$("#zip1").hasClass("glyphicon-ok")&&$("#zip1").removeClass("glyphicon-ok"),""==$("#streetnumber").val()&&$("#streetnumber1").hasClass("glyphicon-ok")&&$("#streetnumber1").removeClass("glyphicon-ok"),$(".autocomplete").hide()),$("#choice-select").prop("disabled",!0)})};t.initTooltipsterRegistrationForm=function(e){$.each(e,function(e,o){switch(o){case"zip":i.tooltipsterConfig(o,"tooltipster-light","top-right");break;case"town":i.tooltipsterConfig(o,"tooltipster-light","bottom-right");break;case"NL":break;case"else":break;default:i.tooltipsterConfig(o,"tooltipster-light","top-right")}})},t.passwordStrenghtChecker=function(){var e={};e.ui={container:"#pwd-container",showVerdictsInsideProgressBar:!0,viewports:{progress:".pwstrength_viewport_progress"}},$("#password").pwstrength(e)},t.requiredFieldsIds=function(){var e=["firstname","lastname","phonenumber","NL","else","zip","streetnumber","town","province","email","countries","password","password_confirmation"];return e};var s=function(e){$.ajax({type:"GET",url:"http://api.postcodeapi.nu/"+e,contentType:"application/x-www-form-urlencoded; charset=UTF-8",headers:{"Accept-Language":"nl","Api-key":"9bff6cf81e53a05567538da8bb93e84b30704e78"},dataType:"json"}).done(function(e){$("#town1, #province1").addClass("glyphicon-ok").removeClass("glyphicon-remove"),$("#province").val(e.resource.province),$("#town").val(e.resource.town),$(".autocomplete").show()}).fail(function(){$("#zip").tooltipster("show"),$("#zip").css("-webkit-box-shadow",""),$("#zip").closest(".form-group").addClass("has-error"),$("#zip").removeClass("valid").addClass("error"),$("#zip1, #town1, #province1").removeClass("glyphicon-ok").addClass("glyphicon-remove"),$("#province").val(""),$("#town").val(""),$(".autocomplete").hide(),console.clear()})};t.onResizeGrowOrShrink=function(){$(window).resize(function(){a()}),a()};var a=function(){var e=$("#countries"),o=$("#zip"),t=$("#streetnumber"),i=$("#province"),r=$("#town");$(window).width()<1200?($(e).css({width:"100%","border-radius":"0px"}),$(o).parent().removeClass("registration-form-shrink-field-60").addClass("registration-form-grow-field-max"),$(t).parent().removeClass("registration-form-shrink-field-35").addClass("registration-form-grow-field-max"),$(r).parent().removeClass("registration-form-shrink-field-60").addClass("registration-form-grow-field-max"),$(i).parent().removeClass("registration-form-shrink-field-35").addClass("registration-form-grow-field-max")):($(e).css({width:"100%","border-radius":"0px"}),$(o).parent().removeClass("registration-form-grow-field-max").addClass("registration-form-shrink-field-60"),$(t).parent().removeClass("registration-form-grow-field-max").addClass("registration-form-shrink-field-35"),$(r).parent().removeClass("registration-form-grow-field-max").addClass("registration-form-shrink-field-60"),$(i).parent().removeClass("registration-form-grow-field-max").addClass("registration-form-shrink-field-35"))};t.watchRadioGroupAndToggleTooltipster=function(){$("#NL").click(function(){$("#countries").tooltipster("hide"),$("#province").tooltipster("hide"),$("#town").tooltipster("hide")}),$("#else").click(function(){$("#countries").tooltipster("show"),$("#province").tooltipster("show"),$("#town").tooltipster("show"),$(".tooltipstered").tooltipster("reposition")})}},{"./form-styling-methods":3}]},{},[1]);