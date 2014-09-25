/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,n,r){"use strict";function l(e){if(typeof e=="string"||e instanceof String)e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"");return e}var i=function(t){var n=t.length,r=e("head");while(n--)r.has("."+t[n]).length===0&&r.append('<meta class="'+t[n]+'" />')};i(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){typeof FastClick!="undefined"&&typeof n.body!="undefined"&&FastClick.attach(n.body)});var s=function(t,r){if(typeof t=="string"){if(r){var i;if(r.jquery){i=r[0];if(!i)return r}else i=r;return e(i.querySelectorAll(t))}return e(n.querySelectorAll(t))}return e(t,r)},o=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},u=function(e){var t=e.split("-"),n=t.length,r=[];while(n--)n!==0?r.push(t[n]):this.namespace.length>0?r.push(this.namespace,t[n]):r.push(t[n]);return r.reverse().join("-")},a=function(t,n){var r=this,i=!s(this).data(this.attr_name(!0));s(this.scope).is("["+this.attr_name()+"]")?(s(this.scope).data(this.attr_name(!0)+"-init",e.extend({},this.settings,n||t,this.data_options(s(this.scope)))),i&&this.events(this.scope)):s("["+this.attr_name()+"]",this.scope).each(function(){var i=!s(this).data(r.attr_name(!0)+"-init");s(this).data(r.attr_name(!0)+"-init",e.extend({},r.settings,n||t,r.data_options(s(this)))),i&&r.events(this)});if(typeof t=="string")return this[t].call(this,n)},f=function(e,t){function n(){t(e[0])}function r(){this.one("load",n);if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}if(!e.attr("src")){n();return}e[0].complete||e[0].readyState===4?n():r.call(e)};t.matchMedia=t.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,i=e.createElement("body"),s=e.createElement("div");return s.id="mq-test-1",s.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(s),function(e){return s.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,r),t=s.offsetWidth===42,n.removeChild(i),{matches:t,media:e}}}(n),function(e){function a(){n&&(s(a),u&&jQuery.fx.tick())}var n,r=0,i=["webkit","moz"],s=t.requestAnimationFrame,o=t.cancelAnimationFrame,u="undefined"!=typeof jQuery.fx;for(;r<i.length&&!s;r++)s=t[i[r]+"RequestAnimationFrame"],o=o||t[i[r]+"CancelAnimationFrame"]||t[i[r]+"CancelRequestAnimationFrame"];s?(t.requestAnimationFrame=s,t.cancelAnimationFrame=o,u&&(jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!n&&(n=!0,a())},jQuery.fx.stop=function(){n=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-r)),s=t.setTimeout(function(){e(n+i)},i);return r=n+i,s},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(jQuery),t.Foundation={name:"Foundation",version:"5.4.3",media_queries:{small:s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:r},init:function(e,n,r,i,o){var u=[e,r,i,o],a=[];this.rtl=/rtl/i.test(s("html").attr("dir")),this.scope=e||this.scope,this.set_namespace();if(n&&typeof n=="string"&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&a.push(this.init_lib(n,u));else for(var f in this.libs)a.push(this.init_lib(f,n));return s(t).load(function(){s(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),e},init_lib:function(t,n){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),n&&n.hasOwnProperty(t)?(typeof this.libs[t].settings!="undefined"?e.extend(!0,this.libs[t].settings,n[t]):typeof this.libs[t].defaults!="undefined"&&e.extend(!0,this.libs[t].defaults,n[t]),this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])):(n=n instanceof Array?n:new Array(n),this.libs[t].init.apply(this.libs[t],n))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=o,e.add_namespace=u,e.bindings=a,e.S=this.utils.S},inherit:function(e,t){var n=t.split(" "),r=n.length;while(r--)this.utils.hasOwnProperty(n[r])&&(e[n[r]]=this.utils[n[r]])},set_namespace:function(){var t=this.global.namespace===r?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===r||/false/i.test(t)?"":t},libs:{},utils:{S:s,throttle:function(e,t){var n=null;return function(){var r=this,i=arguments;n==null&&(n=setTimeout(function(){e.apply(r,i),n=null},t))}},debounce:function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r;return clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},data_options:function(t,n){function f(e){return!isNaN(e-0)&&e!==null&&e!==""&&e!==!1&&e!==!0}function l(t){return typeof t=="string"?e.trim(t):t}n=n||"options";var r={},i,s,o,u=function(e){var t=Foundation.global.namespace;return t.length>0?e.data(t+"-"+n):e.data(n)},a=u(t);if(typeof a=="object")return a;o=(a||":").split(";"),i=o.length;while(i--)s=o[i].split(":"),s=[s[0],s.slice(1).join(":")],/true/i.test(s[1])&&(s[1]=!0),/false/i.test(s[1])&&(s[1]=!1),f(s[1])&&(s[1].indexOf(".")===-1?s[1]=parseInt(s[1],10):s[1]=parseFloat(s[1])),s.length===2&&s[0].length>0&&(r[l(s[0])]=l(s[1]));return r},register_media:function(t,n){Foundation.media_queries[t]===r&&(e("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[t]=l(e("."+n).css("font-family")))},add_custom_rule:function(e,t){if(t===r&&Foundation.stylesheet)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==r&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }")}},image_loaded:function(e,t){var n=this,r=e.length;r===0&&t(e),e.each(function(){f(n.S(this),function(){r-=1,r===0&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+(new Date)).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}})(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.4.3",settings:{active_class:"open",mega_class:"mega",align:"bottom",is_hover:!1,opened:function(){},closed:function(){}},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(n){var r=this,i=r.S;i(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(t){var n=i(this).data(r.attr_name(!0)+"-init")||r.settings;if(!n.is_hover||Modernizr.touch)t.preventDefault(),r.toggle(e(this))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t=i(this),n,s;clearTimeout(r.timeout),t.data(r.data_attr())?(n=i("#"+t.data(r.data_attr())),s=t):(n=t,s=i("["+r.attr_name()+"='"+n.attr("id")+"']"));var o=s.data(r.attr_name(!0)+"-init")||r.settings;i(e.target).data(r.data_attr())&&o.is_hover&&r.closeall.call(r),o.is_hover&&r.open.apply(r,[n,s])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t=i(this);r.timeout=setTimeout(function(){if(t.data(r.data_attr())){var e=t.data(r.data_attr(!0)+"-init")||r.settings;e.is_hover&&r.close.call(r,i("#"+t.data(r.data_attr())))}else{var n=i("["+r.attr_name()+'="'+i(this).attr("id")+'"]'),e=n.data(r.attr_name(!0)+"-init")||r.settings;e.is_hover&&r.close.call(r,t)}}.bind(this),150)}).on("click.fndtn.dropdown",function(t){var n=i(t.target).closest("["+r.attr_name()+"-content]");if(i(t.target).closest("["+r.attr_name()+"]").length>0)return;if(!i(t.target).data("revealId")&&n.length>0&&(i(t.target).is("["+r.attr_name()+"-content]")||e.contains(n.first()[0],t.target))){t.stopPropagation();return}r.close.call(r,i("["+r.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+r.attr_name()+"-content]",function(){r.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+r.attr_name()+"-content]",function(){r.settings.closed.call(this)}),i(t).off(".dropdown").on("resize.fndtn.dropdown",r.throttle(function(){r.resize.call(r)},50)),this.resize()},close:function(t){var n=this;t.each(function(){var r=e("["+n.attr_name()+"="+t[0].id+"]")||e("aria-controls="+t[0].id+"]");r.attr("aria-expanded","false"),n.S(this).hasClass(n.settings.active_class)&&(n.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(n.settings.active_class).prev("["+n.attr_name()+"]").removeClass(n.settings.active_class).removeData("target"),n.S(this).trigger("closed").trigger("closed.fndtn.dropdown",[t]))})},closeall:function(){var t=this;e.each(t.S("["+this.attr_name()+"-content]"),function(){t.close.call(t,t.S(this))})},open:function(e,t){this.css(e.addClass(this.settings.active_class),t),e.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),e.data("target",t.get(0)).trigger("opened").trigger("opened.fndtn.dropdown",[e,t]),e.attr("aria-hidden","false"),t.attr("aria-expanded","true"),e.focus()},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(e){var t=this.S("#"+e.data(this.data_attr()));if(t.length===0)return;this.close.call(this,this.S("["+this.attr_name()+"-content]").not(t)),t.hasClass(this.settings.active_class)?(this.close.call(this,t),t.data("target")!==e.get(0)&&this.open.call(this,t,e)):this.open.call(this,t,e)},resize:function(){var e=this.S("["+this.attr_name()+"-content].open"),t=this.S("["+this.attr_name()+"='"+e.attr("id")+"']");e.length&&t.length&&this.css(e,t)},css:function(e,t){var n=Math.max((t.width()-e.width())/2,8),r=t.data(this.attr_name(!0)+"-init")||this.settings;this.clear_idx();if(this.small()){var i=this.dirs.bottom.call(e,t,r);e.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:i.top}),e.css(Foundation.rtl?"right":"left",n)}else this.style(e,t,r);return e},style:function(t,n,r){var i=e.extend({position:"absolute"},this.dirs[r.align].call(t,n,r));t.attr("style","").css(i)},dirs:{_base:function(e){var t=this.offsetParent(),n=t.offset(),r=e.offset();return r.top-=n.top,r.left-=n.left,r},top:function(e,t){var n=Foundation.libs.dropdown,r=n.dirs._base.call(this,e);return this.addClass("drop-top"),(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu))&&n.adjust_pip(this,e,t,r),Foundation.rtl?{left:r.left-this.outerWidth()+e.outerWidth(),top:r.top-this.outerHeight()}:{left:r.left,top:r.top-this.outerHeight()}},bottom:function(e,t){var n=Foundation.libs.dropdown,r=n.dirs._base.call(this,e);return(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu))&&n.adjust_pip(this,e,t,r),n.rtl?{left:r.left-this.outerWidth()+e.outerWidth(),top:r.top+e.outerHeight()}:{left:r.left,top:r.top+e.outerHeight()}},left:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e);return this.addClass("drop-left"),{left:n.left-this.outerWidth(),top:n.top}},right:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e);return this.addClass("drop-right"),{left:n.left+e.outerWidth(),top:n.top}}},adjust_pip:function(e,t,n,r){var i=Foundation.stylesheet,s=8;e.hasClass(n.mega_class)?s=r.left+t.outerWidth()/2-8:this.small()&&(s+=r.left-8),this.rule_idx=i.cssRules.length;var o=".f-dropdown.open:before",u=".f-dropdown.open:after",a="left: "+s+"px;",f="left: "+(s-1)+"px;";i.insertRule?(i.insertRule([o,"{",a,"}"].join(" "),this.rule_idx),i.insertRule([u,"{",f,"}"].join(" "),this.rule_idx+1)):(i.addRule(o,a,this.rule_idx),i.addRule(u,f,this.rule_idx+1))},clear_idx:function(){var e=Foundation.stylesheet;this.rule_idx&&(e.deleteRule(this.rule_idx),e.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(t).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document),!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function t(e){return u.raw?e:encodeURIComponent(e)}function n(e){return u.raw?e:decodeURIComponent(e)}function r(e){return t(u.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(o," ")),u.json?JSON.parse(e):e}catch(t){}}function s(t,n){var r=u.raw?t:i(t);return e.isFunction(n)?n(r):r}var o=/\+/g,u=e.cookie=function(i,o,l){if(void 0!==o&&!e.isFunction(o)){if(l=e.extend({},u.defaults,l),"number"==typeof l.expires){var p=l.expires,v=l.expires=new Date;v.setTime(+v+864e5*p)}return document.cookie=[t(i),"=",r(o),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var m=i?void 0:{},g=document.cookie?document.cookie.split("; "):[],y=0,w=g.length;w>y;y++){var E=g[y].split("="),S=n(E.shift()),x=E.join("=");if(i&&i===S){m=s(x,o);break}i||void 0===(x=s(x))||(m[S]=x)}return m};u.defaults={},e.removeCookie=function(t,n){return void 0===e.cookie(t)?!1:(e.cookie(t,"",e.extend({},n,{expires:-1})),!e.cookie(t))}}),function(e,t,n,r){"use strict";var i=i||!1;Foundation.libs.joyride={name:"joyride",version:"5.4.3",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',prev_button:'<a href="#" class="small button joyride-prev-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(t,n,r){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||e.extend({},this.defaults,r||n),this.bindings(n,r)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var n=this;e(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(e){e.preventDefault(),this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(e){e.preventDefault(),this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(e){e.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.joyride",function(e){if(!this.settings.keyboard)return;switch(e.which){case 39:e.preventDefault(),this.go_next();break;case 37:e.preventDefault(),this.go_prev();break;case 27:e.preventDefault(),this.end(this.settings.abort_on_close)}}.bind(this)),e(t).off(".joyride").on("resize.fndtn.joyride",n.throttle(function(){if(e("["+n.attr_name()+"]").length>0&&n.settings.$next_tip&&n.settings.riding){if(n.settings.exposed.length>0){var t=e(n.settings.exposed);t.each(function(){var t=e(this);n.un_expose(t),n.expose(t)})}n.is_phone()?n.pos_phone():n.pos_default(!1)}},100))},start:function(){var t=this,n=e("["+this.attr_name()+"]",this.scope),r=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],i=r.length;if(!n.length>0)return;this.settings.init||this.events(),this.settings=n.data(this.attr_name(!0)+"-init"),this.settings.$content_el=n,this.settings.$body=e(this.settings.tip_container),this.settings.body_offset=e(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,typeof e.cookie!="function"&&(this.settings.cookie_monster=!1);if(!this.settings.cookie_monster||this.settings.cookie_monster&&!e.cookie(this.settings.cookie_name))this.settings.$tip_content.each(function(n){var s=e(this);this.settings=e.extend({},t.defaults,t.data_options(s));var o=i;while(o--)t.settings[r[o]]=parseInt(t.settings[r[o]],10);t.create({$li:s,index:n})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")},resume:function(){this.set_li(),this.show()},tip_template:function(t){var n,r;return t.tip_class=t.tip_class||"",n=e(this.settings.template.tip).addClass(t.tip_class),r=e.trim(e(t.li).html())+this.prev_button_text(t.prev_button_text,t.index)+this.button_text(t.button_text)+this.settings.template.link+this.timer_instance(t.index),n.append(e(this.settings.template.wrapper)),n.first().attr(this.add_namespace("data-index"),t.index),e(".joyride-content-wrapper",n).append(r),n[0]},timer_instance:function(t){var n;return t===0&&this.settings.start_timer_on_click&&this.settings.timer>0||this.settings.timer===0?n="":n=e(this.settings.template.timer)[0].outerHTML,n},button_text:function(t){return this.settings.tip_settings.next_button?(t=e.trim(t)||"Next",t=e(this.settings.template.button).append(t)[0].outerHTML):t="",t},prev_button_text:function(t,n){return this.settings.tip_settings.prev_button?(t=e.trim(t)||"Previous",n==0?t=e(this.settings.template.prev_button).append(t).addClass("disabled")[0].outerHTML:t=e(this.settings.template.prev_button).append(t)[0].outerHTML):t="",t},create:function(t){this.settings.tip_settings=e.extend({},this.settings,this.data_options(t.$li));var n=t.$li.attr(this.add_namespace("data-button"))||t.$li.attr(this.add_namespace("data-text")),r=t.$li.attr(this.add_namespace("data-button-prev"))||t.$li.attr(this.add_namespace("data-prev-text")),i=t.$li.attr("class"),s=e(this.tip_template({tip_class:i,index:t.index,button_text:n,prev_button_text:r,li:t.$li}));e(this.settings.tip_container).append(s)},show:function(t,n){var i=null;this.settings.$li===r||e.inArray(this.settings.$li.index(),this.settings.pause_after)===-1?(this.settings.paused?this.settings.paused=!1:this.set_li(t,n),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0?(t&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=e.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],/body/i.test(this.settings.$target.selector)||this.scroll_to(),this.is_phone()?this.pos_phone(!0):this.pos_default(!0),i=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(i.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){i.animate({width:i.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(i.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){i.animate({width:i.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip):this.settings.$li&&this.settings.$target.length<1?this.show():this.end()):this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||e(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(e.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(e,t){e?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(t?this.settings.$li=this.settings.$li.prev():this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=e(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var t=this.settings.$li.attr(this.add_namespace("data-class")),r=this.settings.$li.attr(this.add_namespace("data-id")),i=function(){return r?e(n.getElementById(r)):t?e("."+t).first():e("body")};this.settings.$target=i()},scroll_to:function(){var n,r;n=e(t).height()/2,r=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),r!=0&&e("html, body").stop().animate({scrollTop:r},this.settings.scroll_speed,"swing")},paused:function(){return e.inArray(this.settings.$li.index()+1,this.settings.pause_after)===-1},restart:function(){this.hide(),this.settings.$li=r,this.show("init")},pos_default:function(e){var t=this.settings.$next_tip.find(".joyride-nub"),n=Math.ceil(t.outerWidth()/2),r=Math.ceil(t.outerHeight()/2),i=e||!1;i&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show());if(!/body/i.test(this.settings.$target.selector)){var s=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,o=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+r+this.settings.$target.outerHeight()+s,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+o}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+r+this.settings.$target.outerHeight()+s,left:this.settings.$target.offset().left+o}),this.nub_position(t,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-r+s,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-r+s,left:this.settings.$target.offset().left+o}),this.nub_position(t,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+s,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+n+o}),this.nub_position(t,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+s,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-n+o}),this.nub_position(t,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(t.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}else this.settings.$li.length&&this.pos_modal(t);i&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(t){var n=this.settings.$next_tip.outerHeight(),r=this.settings.$next_tip.offset(),i=this.settings.$target.outerHeight(),s=e(".joyride-nub",this.settings.$next_tip),o=Math.ceil(s.outerHeight()/2),u=t||!1;s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),u&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(s):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-n-o}),s.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+i+o}),s.addClass("top")),u&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(e){this.center(),e.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var t=e(".joyride-modal-bg");t.length<1&&e("body").append(this.settings.template.modal).show(),/pop/i.test(this.settings.tip_animation)?t.show():t.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var n,r,i,s,o,u="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof e)i=arguments[0];else{if(!this.settings.$target||!!/body/i.test(this.settings.$target.selector))return!1;i=this.settings.$target}if(i.length<1)return t.console&&console.error("element not valid",i),!1;n=e(this.settings.template.expose),this.settings.$body.append(n),n.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),r=e(this.settings.template.expose_cover),s={zIndex:i.css("z-index"),position:i.css("position")},o=i.attr("class")==null?"":i.attr("class"),i.css("z-index",parseInt(n.css("z-index"))+1),s.position=="static"&&i.css("position","relative"),i.data("expose-css",s),i.data("orig-class",o),i.attr("class",o+" "+this.settings.expose_add_class),r.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(r),n.addClass(u),r.addClass(u),i.data("expose",u),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,i),this.add_exposed(i)},un_expose:function(){var n,r,i,s,o,u=!1;if(arguments.length>0&&arguments[0]instanceof e)r=arguments[0];else{if(!this.settings.$target||!!/body/i.test(this.settings.$target.selector))return!1;r=this.settings.$target}if(r.length<1)return t.console&&console.error("element not valid",r),!1;n=r.data("expose"),i=e("."+n),arguments.length>1&&(u=arguments[1]),u===!0?e(".joyride-expose-wrapper,.joyride-expose-cover").remove():i.remove(),s=r.data("expose-css"),s.zIndex=="auto"?r.css("z-index",""):r.css("z-index",s.zIndex),s.position!=r.css("position")&&(s.position=="static"?r.css("position",""):r.css("position",s.position)),o=r.data("orig-class"),r.attr("class",o),r.removeData("orig-classes"),r.removeData("expose"),r.removeData("expose-z-index"),this.remove_exposed(r)},add_exposed:function(t){this.settings.exposed=this.settings.exposed||[],t instanceof e||typeof t=="object"?this.settings.exposed.push(t[0]):typeof t=="string"&&this.settings.exposed.push(t)},remove_exposed:function(t){var n,r;t instanceof e?n=t[0]:typeof t=="string"&&(n=t),this.settings.exposed=this.settings.exposed||[],r=this.settings.exposed.length;while(r--)if(this.settings.exposed[r]==n){this.settings.exposed.splice(r,1);return}},center:function(){var n=e(t);return this.settings.$next_tip.css({top:(n.height()-this.settings.$next_tip.outerHeight())/2+n.scrollTop(),left:(n.width()-this.settings.$next_tip.outerWidth())/2+n.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(n){var r=e(t),i=r.height()/2,s=Math.ceil(this.settings.$target.offset().top-i+this.settings.$next_tip.outerHeight()),o=r.width()+r.scrollLeft(),u=r.height()+s,a=r.height()+r.scrollTop(),f=r.scrollTop();return s<f&&(s<0?f=0:f=s),u>a&&(a=u),[n.offset().top<f,o<n.offset().left+n.outerWidth(),a<n.offset().top+n.outerHeight(),r.scrollLeft()>n.offset().left]},visible:function(e){var t=e.length;while(t--)if(e[t])return!1;return!0},nub_position:function(e,t,n){t==="auto"?e.addClass(n):e.addClass(t)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(t){this.settings.cookie_monster&&e.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),e(this.scope).off("keyup.joyride"),this.settings.$next_tip.data("closed",!0),this.settings.riding=!1,e(".joyride-modal-bg").hide(),this.settings.$current_tip.hide();if(typeof t=="undefined"||t===!1)this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip);e(".joyride-tip-guide").remove()},off:function(){e(this.scope).off(".joyride"),e(t).off(".joyride"),e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),e(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate),this.settings={}},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.4.3",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,show_on:"all",tip_template:function(e,t){return'<span data-selector="'+e+'" id="'+e+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+t+'<span class="nub"></span></span>'}},cache:{},init:function(e,t,n){Foundation.inherit(this,"random_str"),this.bindings(t,n)},should_show:function(t,n){var r=e.extend({},this.settings,this.data_options(t));return r.show_on==="all"?!0:this.small()&&r.show_on==="small"?!0:this.medium()&&r.show_on==="medium"?!0:this.large()&&r.show_on==="large"?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(t){var n=this,r=n.S;n.create(this.S(t)),e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(t){var i=r(this),s=e.extend({},n.settings,n.data_options(i)),o=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&r(t.target).is("a"))return!1;if(/mouse/i.test(t.type)&&n.ie_touch(t))return!1;if(i.hasClass("open"))
Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&t.preventDefault(),n.hide(i);else{if(s.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type))return;!s.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&(t.preventDefault(),r(s.tooltip_class+".open").hide(),o=!0),/enter|over/i.test(t.type)?this.timer=setTimeout(function(){var e=n.showTip(i)}.bind(this),n.settings.hover_delay):t.type==="mouseout"||t.type==="mouseleave"?(clearTimeout(this.timer),n.hide(i)):n.showTip(i)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(t){if(/mouse/i.test(t.type)&&n.ie_touch(t))return!1;if(e(this).data("tooltip-open-event-type")=="touch"&&t.type=="mouseleave")return;e(this).data("tooltip-open-event-type")=="mouse"&&/MSPointerDown|touchstart/i.test(t.type)?n.convert_to_touch(e(this)):n.hide(e(this))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(e){n.hide(r(this))})},ie_touch:function(e){return!1},showTip:function(e){var t=this.getTip(e);if(this.should_show(e,t))return this.show(e);return},getTip:function(t){var n=this.selector(t),r=e.extend({},this.settings,this.data_options(t)),i=null;return n&&(i=this.S('span[data-selector="'+n+'"]'+r.tooltip_class)),typeof i=="object"?i:!1},selector:function(e){var t=e.attr("id"),n=e.attr(this.attr_name())||e.attr("data-selector");return(t&&t.length<1||!t)&&typeof n!="string"&&(n=this.random_str(6),e.attr("data-selector",n).attr("aria-describedby",n)),t&&t.length>0?t:n},create:function(n){var r=this,i=e.extend({},this.settings,this.data_options(n)),s=this.settings.tip_template;typeof i.tip_template=="string"&&t.hasOwnProperty(i.tip_template)&&(s=t[i.tip_template]);var o=e(s(this.selector(n),e("<div></div>").html(n.attr("title")).html())),u=this.inheritable_classes(n);o.addClass(u).appendTo(i.append_to),Modernizr.touch&&(o.append('<span class="tap-to-close">'+i.touch_close_text+"</span>"),o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(e){r.hide(n)})),n.removeAttr("title").attr("title","")},reposition:function(t,n,r){var i,s,o,u,a,f;n.css("visibility","hidden").show(),i=t.data("width"),s=n.children(".nub"),o=s.outerHeight(),u=s.outerHeight(),this.small()?n.css({width:"100%"}):n.css({width:i?i:"auto"}),f=function(e,t,n,r,i,s){return e.css({top:t?t:"auto",bottom:r?r:"auto",left:i?i:"auto",right:n?n:"auto"}).end()},f(n,t.offset().top+t.outerHeight()+10,"auto","auto",t.offset().left);if(this.small())f(n,t.offset().top+t.outerHeight()+10,"auto","auto",12.5,e(this.scope).width()),n.addClass("tip-override"),f(s,-o,"auto","auto",t.offset().left);else{var l=t.offset().left;Foundation.rtl&&(s.addClass("rtl"),l=t.offset().left+t.outerWidth()-n.outerWidth()),f(n,t.offset().top+t.outerHeight()+10,"auto","auto",l),n.removeClass("tip-override"),r&&r.indexOf("tip-top")>-1?(Foundation.rtl&&s.addClass("rtl"),f(n,t.offset().top-n.outerHeight(),"auto","auto",l).removeClass("tip-override")):r&&r.indexOf("tip-left")>-1?(f(n,t.offset().top+t.outerHeight()/2-n.outerHeight()/2,"auto","auto",t.offset().left-n.outerWidth()-o).removeClass("tip-override"),s.removeClass("rtl")):r&&r.indexOf("tip-right")>-1&&(f(n,t.offset().top+t.outerHeight()/2-n.outerHeight()/2,"auto","auto",t.offset().left+t.outerWidth()+o).removeClass("tip-override"),s.removeClass("rtl"))}n.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(t){var n=e.extend({},this.settings,this.data_options(t)),r=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(n.additional_inheritable_classes),i=t.attr("class"),s=i?e.map(i.split(" "),function(t,n){if(e.inArray(t,r)!==-1)return t}).join(" "):"";return e.trim(s)},convert_to_touch:function(t){var n=this,r=n.getTip(t),i=e.extend({},n.settings,n.data_options(t));r.find(".tap-to-close").length===0&&(r.append('<span class="tap-to-close">'+i.touch_close_text+"</span>"),r.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(e){n.hide(t)})),t.data("tooltip-open-event-type","touch")},show:function(e){var t=this.getTip(e);e.data("tooltip-open-event-type")=="touch"&&this.convert_to_touch(e),this.reposition(e,t,e.attr("class")),e.addClass("open"),t.fadeIn(150)},hide:function(e){var t=this.getTip(e);t.fadeOut(150,function(){t.find(".tap-to-close").remove(),t.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),e.removeClass("open")})},off:function(){var t=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(n){e("["+t.attr_name()+"]").eq(n).attr("title",e(this).text())}).remove()},reflow:function(){}}}(jQuery,window,window.document);

(function ($) { 
        $(document).foundation();
}(jQuery));  

(function ($) {
    // Monkey patch jQuery 1.3.1+ css() method to support CSS 'transform'
    // property uniformly across Safari/Chrome/Webkit, Firefox 3.5+, IE 9+, and Opera 11+.
    // 2009-2011 Zachary Johnson www.zachstronaut.com
    // Updated 2011.05.04 (May the fourth be with you!)
    function getTransformProperty(element)
    {
        // Try transform first for forward compatibility
        // In some versions of IE9, it is critical for msTransform to be in
        // this list before MozTranform.
        var properties = ['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'];
        var p;
        while (p = properties.shift())
        {
            if (typeof element.style[p] != 'undefined')
            {
                return p;
            }
        }
        
        // Default to transform also
        return 'transform';
    }
    
    var _propsObj = null;
    
    var proxied = $.fn.css;
    $.fn.css = function (arg, val)
    {
        // Temporary solution for current 1.6.x incompatibility, while
        // preserving 1.3.x compatibility, until I can rewrite using CSS Hooks
        if (_propsObj === null)
        {
            if (typeof $.cssProps != 'undefined')
            {
                _propsObj = $.cssProps;
            }
            else if (typeof $.props != 'undefined')
            {
                _propsObj = $.props;
            }
            else
            {
                _propsObj = {}
            }
        }
        
        // Find the correct browser specific property and setup the mapping using
        // $.props which is used internally by jQuery.attr() when setting CSS
        // properties via either the css(name, value) or css(properties) method.
        // The problem with doing this once outside of css() method is that you
        // need a DOM node to find the right CSS property, and there is some risk
        // that somebody would call the css() method before body has loaded or any
        // DOM-is-ready events have fired.
        if
        (
            typeof _propsObj['transform'] == 'undefined'
            &&
            (
                arg == 'transform'
                ||
                (
                    typeof arg == 'object'
                    && typeof arg['transform'] != 'undefined'
                )
            )
        )
        {
            _propsObj['transform'] = getTransformProperty(this.get(0));
        }
        
        // We force the property mapping here because jQuery.attr() does
        // property mapping with jQuery.props when setting a CSS property,
        // but curCSS() does *not* do property mapping when *getting* a
        // CSS property.  (It probably should since it manually does it
        // for 'float' now anyway... but that'd require more testing.)
        //
        // But, only do the forced mapping if the correct CSS property
        // is not 'transform' and is something else.
        if (_propsObj['transform'] != 'transform')
        {
            // Call in form of css('transform' ...)
            if (arg == 'transform')
            {
                arg = _propsObj['transform'];
                
                // User wants to GET the transform CSS, and in jQuery 1.4.3
                // calls to css() for transforms return a matrix rather than
                // the actual string specified by the user... avoid that
                // behavior and return the string by calling jQuery.style()
                // directly
                if (typeof val == 'undefined' && jQuery.style)
                {
                    return jQuery.style(this.get(0), arg);
                }
            }

            // Call in form of css({'transform': ...})
            else if
            (
                typeof arg == 'object'
                && typeof arg['transform'] != 'undefined'
            )
            {
                arg[_propsObj['transform']] = arg['transform'];
                delete arg['transform'];
            }
        }
        
        return proxied.apply(this, arguments);
    };
})(jQuery);

/*!
/**
 * Monkey patch jQuery 1.3.1+ to add support for setting or animating CSS
 * scale and rotation independently.
 * https://github.com/zachstronaut/jquery-animate-css-rotate-scale
 * Released under dual MIT/GPL license just like jQuery.
 * 2009-2012 Zachary Johnson www.zachstronaut.com
 */
(function ($) {
    // Updated 2010.11.06
    // Updated 2012.10.13 - Firefox 16 transform style returns a matrix rather than a string of transform functions.  This broke the features of this jQuery patch in Firefox 16.  It should be possible to parse the matrix for both scale and rotate (especially when scale is the same for both the X and Y axis), however the matrix does have disadvantages such as using its own units and also 45deg being indistinguishable from 45+360deg.  To get around these issues, this patch tracks internally the scale, rotation, and rotation units for any elements that are .scale()'ed, .rotate()'ed, or animated.  The major consequences of this are that 1. the scaled/rotated element will blow away any other transform rules applied to the same element (such as skew or translate), and 2. the scaled/rotated element is unaware of any preset scale or rotation initally set by page CSS rules.  You will have to explicitly set the starting scale/rotation value.
    
    function initData($el) {
        var _ARS_data = $el.data('_ARS_data');
        if (!_ARS_data) {
            _ARS_data = {
                rotateUnits: 'deg',
                scale: 1,
                rotate: 0
            };
            
            $el.data('_ARS_data', _ARS_data);
        }
        
        return _ARS_data;
    }
    
    function setTransform($el, data) {
        $el.css('transform', 'rotate(' + data.rotate + data.rotateUnits + ') scale(' + data.scale + ',' + data.scale + ')');
    }
    
    $.fn.rotate = function (val) {
        var $self = $(this), m, data = initData($self);
                        
        if (typeof val == 'undefined') {
            return data.rotate + data.rotateUnits;
        }
        
        m = val.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/);
        if (m) {
            if (m[3]) {
                data.rotateUnits = m[3];
            }
            
            data.rotate = m[1];
            
            setTransform($self, data);
        }
        
        return this;
    };
    
    // Note that scale is unitless.
    $.fn.scale = function (val) {
        var $self = $(this), data = initData($self);
        
        if (typeof val == 'undefined') {
            return data.scale;
        }
        
        data.scale = val;
        
        setTransform($self, data);
        
        return this;
    };

    // fx.cur() must be monkey patched because otherwise it would always
    // return 0 for current rotate and scale values
    var curProxied = $.fx.prototype.cur;
    $.fx.prototype.cur = function () {
        if (this.prop == 'rotate') {
            return parseFloat($(this.elem).rotate());
            
        } else if (this.prop == 'scale') {
            return parseFloat($(this.elem).scale());
        }
        
        return curProxied.apply(this, arguments);
    };
    
    $.fx.step.rotate = function (fx) {
        var data = initData($(fx.elem));
        $(fx.elem).rotate(fx.now + data.rotateUnits);
    };
    
    $.fx.step.scale = function (fx) {
        $(fx.elem).scale(fx.now);
    };
    
    /*
    
    Starting on line 3905 of jquery-1.3.2.js we have this code:
    
    // We need to compute starting value
    if ( unit != "px" ) {
        self.style[ name ] = (end || 1) + unit;
        start = ((end || 1) / e.cur(true)) * start;
        self.style[ name ] = start + unit;
    }
    
    This creates a problem where we cannot give units to our custom animation
    because if we do then this code will execute and because self.style[name]
    does not exist where name is our custom animation's name then e.cur(true)
    will likely return zero and create a divide by zero bug which will set
    start to NaN.
    
    The following monkey patch for animate() gets around this by storing the
    units used in the rotation definition and then stripping the units off.
    
    */
    
    var animateProxied = $.fn.animate;
    $.fn.animate = function (prop) {
        if (typeof prop['rotate'] != 'undefined') {
            var $self, data, m = prop['rotate'].toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);
            if (m && m[5]) {
                $self = $(this);
                data = initData($self);
                data.rotateUnits = m[5];
            }
            
            prop['rotate'] = m[1];
        }
        
        return animateProxied.apply(this, arguments);
    };
})(jQuery);

// Insert data here as Json or geojson

var data = [
  {
    "state":"Alabama",
    "code":"AL",
    "mil_btu":170.3,
    "btu":170300000,
    "wattage":5697,
    "burritos":35786,
    "coal":17615,
    "miles_driven":44777,
    "earth":1.80,
    "miles_flown":308,
    "origin":"Chicago",
    "destination":"St. Louis MO",
    "future":138,
    "dynamite":189133,
    "id":0,
    "line_id": "15"
  },
  {
    "state":"Alaska",
    "code":"AK",
    "mil_btu":334.2,
    "btu":334200000,
    "wattage":11181,
    "burritos":70228,
    "coal":34568,
    "miles_driven":87870,
    "earth":3.53,
    "miles_flown":605,
    "origin":"NYC",
    "destination":"Charlotte NC",
    "future":271,
    "dynamite":371158,
    "id":1,
    "line_id": "4"
  },
  {
    "state":"Arizona",
    "code":"AZ",
    "mil_btu":129.6,
    "btu":129600000,
    "wattage":4336,
    "burritos":27234,
    "coal":13405,
    "miles_driven":34075,
    "earth":1.37,
    "miles_flown":234,
    "origin":"NYC",
    "destination":"Boston, MA",
    "future":105,
    "dynamite":143932,
    "id":2,
    "line_id": "2"
  },
  {
    "state":"Arkansas",
    "code":"AR",
    "mil_btu":170.3,
    "btu":170300000,
    "wattage":5697,
    "burritos":35786,
    "coal":17615,
    "miles_driven":44777,
    "earth":1.80,
    "miles_flown":308,
    "origin":"Chicago",
    "destination":"St. Louis MO",
    "future":138,
    "dynamite":189133,
    "id":3,
    "line_id": "15"
  },
  {
    "state":"California",
    "code":"CA",
    "mil_btu":116.2,
    "btu":116200000,
    "wattage":3888,
    "burritos":24418,
    "coal":12019,
    "miles_driven":30552,
    "earth":1.23,
    "miles_flown":210,
    "origin":"NYC",
    "destination":"Baltimore, MD",
    "future":94,
    "dynamite":129050,
    "id":4,
    "line_id": "1"
  },
  {
    "state":"Colorado",
    "code":"CO",
    "mil_btu":144.7,
    "btu":144700000,
    "wattage":4841,
    "burritos":30407,
    "coal":14967,
    "miles_driven":38046,
    "earth":1.53,
    "miles_flown":262,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":117,
    "dynamite":160702,
    "id":5,
    "line_id": "16"
  },
  {
    "state":"Connecticut",
    "code":"CT",
    "mil_btu":130,
    "btu":130000000,
    "wattage":4349,
    "burritos":27318,
    "coal":13446,
    "miles_driven":34181,
    "earth":1.37,
    "miles_flown":235,
    "origin":"NYC",
    "destination":"Boston, MA",
    "future":106,
    "dynamite":144376,
    "id":6,
    "line_id": "2"
  },
  {
    "state":"Delaware",
    "code":"DE",
    "mil_btu":138.1,
    "btu":138100000,
    "wattage":4620,
    "burritos":29020,
    "coal":14284,
    "miles_driven":36310,
    "earth":1.46,
    "miles_flown":250,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":112,
    "dynamite":153372,
    "id":7,
    "line_id": "16"
  },
  {
    "state":"District of Columbia",
    "code":"DC",
    "mil_btu":86.2,
    "btu":86200000,
    "wattage":2884,
    "burritos":18114,
    "coal":8916,
    "miles_driven":22664,
    "earth":0.91,
    "miles_flown":156,
    "origin":"NYC",
    "destination":"Albany, NY",
    "future":70,
    "dynamite":95732,
    "id":8,
    "line_id": "0"
  },
  {
    "state":"Florida",
    "code":"FL",
    "mil_btu":136.3,
    "btu":136300000,
    "wattage":4560,
    "burritos":28642,
    "coal":14098,
    "miles_driven":35837,
    "earth":1.44,
    "miles_flown":247,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":111,
    "dynamite":151373,
    "id":9,
    "line_id": "16"
  },
  {
    "state":"Georgia",
    "code":"GA",
    "mil_btu":154.5,
    "btu":154500000,
    "wattage":5169,
    "burritos":32466,
    "coal":15981,
    "miles_driven":40622,
    "earth":1.63,
    "miles_flown":280,
    "origin":"Chicago",
    "destination":"Detroit, MI",
    "future":125,
    "dynamite":171585,
    "id":10,
    "line_id": "7"
  },
  {
    "state":"Hawaii",
    "code":"HI",
    "mil_btu":128.6,
    "btu":128600000,
    "wattage":4302,
    "burritos":27024,
    "coal":13302,
    "miles_driven":33812,
    "earth":1.36,
    "miles_flown":233,
    "origin":"NYC",
    "destination":"Boston, MA",
    "future":104,
    "dynamite":142821,
    "id":11,
    "line_id": "2"
  },
  {
    "state":"Idaho",
    "code":"ID",
    "mil_btu":156.3,
    "btu":156300000,
    "wattage":5229,
    "burritos":32844,
    "coal":16167,
    "miles_driven":41096,
    "earth":1.65,
    "miles_flown":283,
    "origin":"Chicago",
    "destination":"Detroit, MI",
    "future":127,
    "dynamite":173584,
    "id":12,
    "line_id": "7"
  },
  {
    "state":"Illinois",
    "code":"IL",
    "mil_btu":145.1,
    "btu":145100000,
    "wattage":4854,
    "burritos":30491,
    "coal":15008,
    "miles_driven":38151,
    "earth":1.53,
    "miles_flown":263,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":118,
    "dynamite":161146,
    "id":13,
    "line_id": "16"
  },
  {
    "state":"Indiana",
    "code":"IN",
    "mil_btu":172.2,
    "btu":172200000,
    "wattage":5761,
    "burritos":36186,
    "coal":17811,
    "miles_driven":45276,
    "earth":1.82,
    "miles_flown":312,
    "origin":"Chicago",
    "destination":"St. Louis MO",
    "future":140,
    "dynamite":191243,
    "id":14,
    "line_id": "15"
  },
  {
    "state":"Iowa",
    "code":"IA",
    "mil_btu":169.8,
    "btu":169800000,
    "wattage":5681,
    "burritos":35681,
    "coal":17563,
    "miles_driven":44645,
    "earth":1.79,
    "miles_flown":307,
    "origin":"Chicago",
    "destination":"St. Louis MO",
    "future":138,
    "dynamite":188577,
    "id":15,
    "line_id": "15"
  },
  {
    "state":"Kansas",
    "code":"KS",
    "mil_btu":170,
    "btu":170000000,
    "wattage":5687,
    "burritos":35723,
    "coal":17584,
    "miles_driven":44698,
    "earth":1.80,
    "miles_flown":308,
    "origin":"Chicago",
    "destination":"St. Louis MO",
    "future":138,
    "dynamite":188799,
    "id":16,
    "line_id": "15"
  },
  {
    "state":"Kentucky",
    "code":"KY",
    "mil_btu":185.8,
    "btu":185800000,
    "wattage":6216,
    "burritos":39043,
    "coal":19218,
    "miles_driven":48852,
    "earth":1.96,
    "miles_flown":336,
    "origin":"Chicago",
    "destination":"Des Moines IA",
    "future":151,
    "dynamite":206347,
    "id":17,
    "line_id": "6"
  },
  {
    "state":"Louisiana",
    "code":"LA",
    "mil_btu":217.9,
    "btu":217900000,
    "wattage":7290,
    "burritos":45789,
    "coal":22538,
    "miles_driven":57292,
    "earth":2.30,
    "miles_flown":394,
    "origin":"NYC",
    "destination":"Pittsburgh, PA",
    "future":177,
    "dynamite":241996,
    "id":18,
    "line_id": "12"
  },
  {
    "state":"Maine",
    "code":"ME",
    "mil_btu":149.6,
    "btu":149600000,
    "wattage":5005,
    "burritos":31436,
    "coal":15474,
    "miles_driven":39334,
    "earth":1.58,
    "miles_flown":271,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":121,
    "dynamite":166144,
    "id":19,
    "line_id": "16"
  },
  {
    "state":"Maryland",
    "code":"MD",
    "mil_btu":141.9,
    "btu":141900000,
    "wattage":4747,
    "burritos":29818,
    "coal":14677,
    "miles_driven":37309,
    "earth":1.50,
    "miles_flown":257,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":115,
    "dynamite":157592,
    "id":20,
    "line_id": "16"
  },
  {
    "state":"Massachusetts",
    "code":"MA",
    "mil_btu":129.3,
    "btu":129300000,
    "wattage":4326,
    "burritos":27171,
    "coal":13374,
    "miles_driven":33996,
    "earth":1.37,
    "miles_flown":234,
    "origin":"NYC",
    "destination":"Boston, MA",
    "future":105,
    "dynamite":143599,
    "id":21,
    "line_id": "2"
  },
  {
    "state":"Michigan",
    "code":"MI",
    "mil_btu":143.6,
    "btu":143600000,
    "wattage":4804,
    "burritos":30176,
    "coal":14853,
    "miles_driven":37756,
    "earth":1.52,
    "miles_flown":260,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":117,
    "dynamite":159480,
    "id":22,
    "line_id": "16"
  },
  {
    "state":"Minnesota",
    "code":"MN",
    "mil_btu":158.3,
    "btu":158300000,
    "wattage":5296,
    "burritos":33265,
    "coal":16374,
    "miles_driven":41621,
    "earth":1.67,
    "miles_flown":286,
    "origin":"Chicago",
    "destination":"Detroit, MI",
    "future":128,
    "dynamite":175806,
    "id":23,
    "line_id": "7"
  },
  {
    "state":"Mississippi",
    "code":"MS",
    "mil_btu":188.4,
    "btu":188400000,
    "wattage":6303,
    "burritos":39590,
    "coal":19487,
    "miles_driven":49535,
    "earth":1.99,
    "miles_flown":341,
    "origin":"NYC",
    "destination":"Richmond, VA",
    "future":153,
    "dynamite":209234,
    "id":24,
    "line_id": "14"
  },
  {
    "state":"Missouri",
    "code":"MO",
    "mil_btu":173.1,
    "btu":173100000,
    "wattage":5791,
    "burritos":36375,
    "coal":17904,
    "miles_driven":45513,
    "earth":1.83,
    "miles_flown":313,
    "origin":"NYC",
    "destination":"Portland, ME",
    "future":140,
    "dynamite":192242,
    "id":25,
    "line_id": "13"
  },
  {
    "state":"Montana",
    "code":"MT",
    "mil_btu":195.9,
    "btu":195900000,
    "wattage":6554,
    "burritos":41166,
    "coal":20263,
    "miles_driven":51507,
    "earth":2.07,
    "miles_flown":354,
    "origin":"Chicago",
    "destination":"Columbus OH",
    "future":159,
    "dynamite":217564,
    "id":26,
    "line_id": "5"
  },
  {
    "state":"Nebraska",
    "code":"NE",
    "mil_btu":185.3,
    "btu":185300000,
    "wattage":6199,
    "burritos":38938,
    "coal":19166,
    "miles_driven":48720,
    "earth":1.96,
    "miles_flown":335,
    "origin":"Chicago",
    "destination":"Des Moines IA",
    "future":150,
    "dynamite":205791,
    "id":27,
    "line_id": "6"
  },
  {
    "state":"Nevada",
    "code":"NV",
    "mil_btu":131.1,
    "btu":131100000,
    "wattage":4386,
    "burritos":27549,
    "coal":13560,
    "miles_driven":34470,
    "earth":1.38,
    "miles_flown":237,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":106,
    "dynamite":145598,
    "id":28,
    "line_id": "16"
  },
  {
    "state":"New Hampshire",
    "code":"NH",
    "mil_btu":137.8,
    "btu":137800000,
    "wattage":4610,
    "burritos":28957,
    "coal":14253,
    "miles_driven":36231,
    "earth":1.46,
    "miles_flown":249,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":112,
    "dynamite":153039,
    "id":29,
    "line_id": "16"
  },
  {
    "state":"New Jersey",
    "code":"NJ",
    "mil_btu":157.6,
    "btu":157600000,
    "wattage":5273,
    "burritos":33118,
    "coal":16301,
    "miles_driven":41437,
    "earth":1.66,
    "miles_flown":285,
    "origin":"Chicago",
    "destination":"Detroit, MI",
    "future":128,
    "dynamite":175028,
    "id":30,
    "line_id": "7"
  },
  {
    "state":"New Mexico",
    "code":"NM",
    "mil_btu":153.8,
    "btu":153800000,
    "wattage":5145,
    "burritos":32319,
    "coal":15908,
    "miles_driven":40438,
    "earth":1.62,
    "miles_flown":278,
    "origin":"Chicago",
    "destination":"Detroit, MI",
    "future":125,
    "dynamite":170808,
    "id":31,
    "line_id": "7"
  },
  {
    "state":"New York",
    "code":"NY",
    "mil_btu":106,
    "btu":106000000,
    "wattage":3546,
    "burritos":22275,
    "coal":10964,
    "miles_driven":27870,
    "earth":1.12,
    "miles_flown":192,
    "origin":"Chicago",
    "destination":"Indianapolis, IN",
    "future":86,
    "dynamite":117722,
    "id":32,
    "line_id": "8"
  },
  {
    "state":"North Carolina",
    "code":"NC",
    "mil_btu":139.4,
    "btu":139400000,
    "wattage":4664,
    "burritos":29293,
    "coal":14419,
    "miles_driven":36652,
    "earth":1.47,
    "miles_flown":252,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":113,
    "dynamite":154816,
    "id":33,
    "line_id": "16"
  },
  {
    "state":"North Dakota",
    "code":"ND",
    "mil_btu":283.3,
    "btu":283300000,
    "wattage":9478,
    "burritos":59532,
    "coal":29303,
    "miles_driven":74487,
    "earth":2.99,
    "miles_flown":513,
    "origin":"Chicago",
    "destination":"Charleston WV",
    "future":230,
    "dynamite":314629,
    "id":34,
    "line_id": "3"
  },
  {
    "state":"Ohio",
    "code":"OH",
    "mil_btu":154.4,
    "btu":154400000,
    "wattage":5166,
    "burritos":32445,
    "coal":15970,
    "miles_driven":40596,
    "earth":1.63,
    "miles_flown":279,
    "origin":"Chicago",
    "destination":"Detroit, MI",
    "future":125,
    "dynamite":171474,
    "id":35,
    "line_id": "7"
  },
  {
    "state":"Oklahoma",
    "code":"OK",
    "mil_btu":196.1,
    "btu":196100000,
    "wattage":6561,
    "burritos":41208,
    "coal":20283,
    "miles_driven":51560,
    "earth":2.07,
    "miles_flown":355,
    "origin":"Chicago",
    "destination":"Columbus OH",
    "future":159,
    "dynamite":217786,
    "id":36,
    "line_id": "5"
  },
  {
    "state":"Oregon",
    "code":"OR",
    "mil_btu":141.8,
    "btu":141800000,
    "wattage":4744,
    "burritos":29797,
    "coal":14667,
    "miles_driven":37283,
    "earth":1.50,
    "miles_flown":257,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":115,
    "dynamite":157481,
    "id":37,
    "line_id": "16"
  },
  {
    "state":"Pennsylvania",
    "code":"PA",
    "mil_btu":141.5,
    "btu":141500000,
    "wattage":4734,
    "burritos":29734,
    "coal":14636,
    "miles_driven":37204,
    "earth":1.49,
    "miles_flown":256,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":115,
    "dynamite":157148,
    "id":38,
    "line_id": "16"
  },
  {
    "state":"Rhode Island",
    "code":"RI",
    "mil_btu":112.9,
    "btu":112900000,
    "wattage":3777,
    "burritos":23724,
    "coal":11678,
    "miles_driven":29684,
    "earth":1.19,
    "miles_flown":204,
    "origin":"NYC",
    "destination":"Baltimore, MD",
    "future":92,
    "dynamite":125385,
    "id":39,
    "line_id": "1"
  },
  {
    "state":"South Carolina",
    "code":"SC",
    "mil_btu":165.7,
    "btu":165700000,
    "wattage":5544,
    "burritos":34820,
    "coal":17139,
    "miles_driven":43567,
    "earth":1.75,
    "miles_flown":300,
    "origin":"Chicago",
    "destination":"Louisville KY",
    "future":134,
    "dynamite":184024,
    "id":40,
    "line_id": "9"
  },
  {
    "state":"South Dakota",
    "code":"SD",
    "mil_btu":199.4,
    "btu":199400000,
    "wattage":6671,
    "burritos":41901,
    "coal":20625,
    "miles_driven":52428,
    "earth":2.11,
    "miles_flown":361,
    "origin":"NYC",
    "destination":"Norfolk, VA",
    "future":162,
    "dynamite":221451,
    "id":41,
    "line_id": "11"
  },
  {
    "state":"Tennessee",
    "code":"TN",
    "mil_btu":171,
    "btu":171000000,
    "wattage":5721,
    "burritos":35933,
    "coal":17687,
    "miles_driven":44961,
    "earth":1.81,
    "miles_flown":309,
    "origin":"Chicago",
    "destination":"St. Louis MO",
    "future":139,
    "dynamite":189910,
    "id":42,
    "line_id": "15"
  },
  {
    "state":"Texas",
    "code":"TX",
    "mil_btu":171.6,
    "btu":171600000,
    "wattage":5741,
    "burritos":36060,
    "coal":17749,
    "miles_driven":45118,
    "earth":1.81,
    "miles_flown":310,
    "origin":"Chicago",
    "destination":"St. Louis MO",
    "future":139,
    "dynamite":190576,
    "id":43,
    "line_id": "15"
  },
  {
    "state":"U.S. Average",
    "code":"US",
    "mil_btu":148.6,
    "btu":148600000,
    "wattage":4972,
    "burritos":31226,
    "coal":15370,
    "miles_driven":39071,
    "earth":1.57,
    "miles_flown":269,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":121,
    "dynamite":165033,
    "id":44,
    "line_id": "16"
  },
  {
    "state":"Utah",
    "code":"UT",
    "mil_btu":142,
    "btu":142000000,
    "wattage":4751,
    "burritos":29839,
    "coal":14688,
    "miles_driven":37336,
    "earth":1.50,
    "miles_flown":257,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":115,
    "dynamite":157703,
    "id":45,
    "line_id": "16"
  },
  {
    "state":"Vermont",
    "code":"VT",
    "mil_btu":138.7,
    "btu":138700000,
    "wattage":4640,
    "burritos":29146,
    "coal":14346,
    "miles_driven":36468,
    "earth":1.46,
    "miles_flown":251,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":113,
    "dynamite":154038,
    "id":46,
    "line_id": "16"
  },
  {
    "state":"Virginia",
    "code":"VA",
    "mil_btu":162.1,
    "btu":162100000,
    "wattage":5423,
    "burritos":34063,
    "coal":16767,
    "miles_driven":42621,
    "earth":1.71,
    "miles_flown":293,
    "origin":"Chicago",
    "destination":"Detroit, MI",
    "future":132,
    "dynamite":180026,
    "id":47,
    "line_id": "7"
  },
  {
    "state":"Washington",
    "code":"WA",
    "mil_btu":159.5,
    "btu":159500000,
    "wattage":5336,
    "burritos":33517,
    "coal":16498,
    "miles_driven":41937,
    "earth":1.68,
    "miles_flown":289,
    "origin":"Chicago",
    "destination":"Detroit, MI",
    "future":129,
    "dynamite":177138,
    "id":48,
    "line_id": "7"
  },
  {
    "state":"West Virginia",
    "code":"WV",
    "mil_btu":181.6,
    "btu":181600000,
    "wattage":6076,
    "burritos":38161,
    "coal":18784,
    "miles_driven":47748,
    "earth":1.92,
    "miles_flown":329,
    "origin":"NYC",
    "destination":"Montreal",
    "future":147,
    "dynamite":201682,
    "id":49,
    "line_id": "10"
  },
  {
    "state":"Wisconsin",
    "code":"WI",
    "mil_btu":143.4,
    "btu":143400000,
    "wattage":4798,
    "burritos":30134,
    "coal":14832,
    "miles_driven":37704,
    "earth":1.51,
    "miles_flown":259,
    "origin":"NYC",
    "destination":"Washington, DC",
    "future":116,
    "dynamite":159258,
    "id":50,
    "line_id": "16"
  },
  {
    "state":"Wyoming",
    "code":"WY",
    "mil_btu":286.3,
    "btu":286300000,
    "wattage":9578,
    "burritos":60162,
    "coal":29613,
    "miles_driven":75276,
    "earth":3.02,
    "miles_flown":518,
    "origin":"Chicago",
    "destination":"Charleston WV",
    "future":232,
    "dynamite":317961,
    "id":51,
    "line_id": "3"
  }
]

var farts = {"type": "FeatureCollection",
"features": 
[{ "type": "Feature", "line_id": "0", "properties": { "FID": 0.0 }, "geometry": { "type": "LineString", "coordinates": [[-73.9780035,40.7056308],[-74.01981,40.91587],[-74.04583,41.12865],[-74.05592,41.34278],[-74.05001,41.55706],[-74.02813,41.77031],[-73.99042,41.98133],[-73.9370,42.18896],[-73.86841,42.39202],[-73.78479,42.58941],[-73.754968,42.6511674]]}}
,{ "type": "Feature", "line_id": "1", "properties": { "FID": 1.0 }, "geometry": { "type": "LineString", "coordinates": [[-73.9780035,40.7056308],[-74.20832,40.69127],[-74.43709,40.66099],[-74.66322,40.61493],[-74.88561,40.55333],[-75.10320,40.47646],[-75.31492,40.3847],[-75.51983,40.27851],[-75.71686,40.15837],[-75.90509,40.02487],[-76.06439,39.89543],[-76.08363,39.87866],[-76.25161,39.72043],[-76.40822,39.55094],[-76.55272,39.37101],[-76.6108073,39.2908608]]}}
,{ "type": "Feature", "line_id": "2", "properties": { "FID": 2.0 }, "geometry": { "type": "LineString", "coordinates": [[-73.9780035,40.7056308],[-73.77467,40.91726],[-73.56012,41.11749],[-73.33497,41.30574],[-73.099,41.48144],[-72.85560,41.64408],[-72.60281,41.79316],[-72.58875,41.80091],[-72.34225,41.9282],[-72.07476,42.04892],[-71.80106,42.15486],[-71.52202,42.2457],[-71.23841,42.32124],[-71.0595678,42.3604823]]}}
,{ "type": "Feature", "line_id": "3", "properties": { "FID": 3.0 }, "geometry": { "type": "LineString", "coordinates": [[-87.7321555,41.8337329],[-87.39883,41.82940],[-87.0661,41.80908],[-86.73472,41.77282],[-86.40547,41.72071],[-86.07910,41.65286],[-85.7563,41.56943],[-85.43799,41.47061],[-85.12476,41.3566],[-84.8172,41.22775],[-84.51640,41.08427],[-84.222,40.92652],[-84.18045,40.90228],[-83.93698,40.75487],[-83.65979,40.56970],[-83.39180,40.37145],[-83.13363,40.16056],[-82.88587,39.93754],[-82.64910,39.70288],[-82.42386,39.45714],[-82.21067,39.20087],[-82.01002,38.93467],[-81.82238,38.65915],[-81.64817,38.37494],[-81.6337762,38.3500245]]}}
,{ "type": "Feature", "line_id": "4", "properties": { "FID": 4.0 }, "geometry": { "type": "LineString", "coordinates": [[-73.9780035,40.7056308],[-74.3891,40.57659],[-74.79525,40.43238],[-75.19571,40.27319],[-75.58998,40.09925],[-75.97753,39.91080],[-76.35781,39.70809],[-76.73031,39.49140],[-77.09450,39.26104],[-77.44990,39.01731],[-77.75520,38.79188],[-77.79600,38.76057],[-78.13234,38.49115],[-78.45844,38.20943],[-78.77386,37.91581],[-79.07816,37.61067],[-79.37093,37.29446],[-79.65176,36.96759],[-79.92026,36.63053],[-80.17607,36.28373],[-80.41882,35.92767],[-80.64820,35.56285],[-80.8431268,35.2270869]]}}
,{ "type": "Feature", "line_id": "5", "properties": { "FID": 5.0 }, "geometry": { "type": "LineString", "coordinates": [[-87.7321555,41.8337329],[-87.45918,41.87678],[-87.18418,41.90397],[-86.90806,41.91520],[-86.63176,41.91043],[-86.35619,41.88969],[-86.0822,41.85303],[-85.81097,41.80059],[-85.54313,41.73253],[-85.27969,41.64910],[-85.02151,41.55055],[-84.7694,41.43724],[-84.52440,41.30953],[-84.50690,41.29970],[-84.28715,41.1678],[-84.0584,41.01269],[-83.83916,40.84455],[-83.62995,40.66400],[-83.43154,40.47165],[-83.24459,40.26814],[-83.06972,40.05416],[-83.0007065,39.9622601]]}}
,{ "type": "Feature", "line_id": "6", "properties": { "FID": 6.0 }, "geometry": { "type": "LineString", "coordinates": [[-87.7321555,41.8337329],[-88.09865,41.93474],[-88.46908,42.02024],[-88.84278,42.09008],[-89.21909,42.14413],[-89.59733,42.18230],[-89.97685,42.20453],[-90.3569,42.21077],[-90.5391,42.20809],[-90.73701,42.20101],[-91.11631,42.17527],[-91.49419,42.13360],[-91.86998,42.07607],[-92.243,42.00277],[-92.61263,41.91385],[-92.9781,41.80945],[-93.33902,41.68976],[-93.6037149,41.5910641]]}}
,{ "type": "Feature", "line_id": "7", "properties": { "FID": 7.0 }, "geometry": { "type": "LineString", "coordinates": [[-87.7321555,41.8337329],[-87.43002,41.97316],[-87.12154,42.09790],[-86.80742,42.20768],[-86.48838,42.30222],[-86.16517,42.38133],[-85.83853,42.44481],[-85.5092,42.49252],[-85.23077,42.52035],[-85.17799,42.52435],[-84.84562,42.54021],[-84.5128,42.54009],[-84.18051,42.52397],[-83.8493,42.49190],[-83.52003,42.44394],[-83.19344,42.38022],[-83.0567375,42.3486635]]}}
,{ "type": "Feature", "line_id": "8", "properties": { "FID": 8.0 }, "geometry": { "type": "LineString", "coordinates": [[-87.7321555,41.8337329],[-87.55808,41.78423],[-87.38905,41.71956],[-87.22640,41.64022],[-87.07139,41.54682],[-86.92522,41.44011],[-86.78905,41.32091],[-86.66393,41.19016],[-86.55084,41.04887],[-86.45067,40.89815],[-86.37158,40.75414],[-86.36420,40.73917],[-86.29209,40.57318],[-86.23494,40.4014],[-86.19314,40.22539],[-86.16706,40.04631],[-86.1569,39.86562],[-86.1580447,39.7683795]]}}
,{ "type": "Feature", "line_id": "9", "properties": { "FID": 9.0 }, "geometry": { "type": "LineString", "coordinates": [[-87.7321555,41.8337329],[-87.518,41.70220],[-87.31403,41.55732],[-87.11904,41.39970],[-86.9344,41.22996],[-86.76114,41.04879],[-86.59969,40.85695],[-86.45081,40.65520],[-86.31509,40.44436],[-86.19314,40.22539],[-86.19310,40.22531],[-86.08532,39.99891],[-85.99217,39.7661],[-85.91415,39.5278],[-85.85136,39.28508],[-85.80422,39.03881],[-85.77289,38.79004],[-85.75748,38.53978],[-85.75806,38.28904],[-85.759407,38.2542376]]}}
,{ "type": "Feature", "line_id": "10", "properties": { "FID": 10.0 }, "geometry": { "type": "LineString", "coordinates": [[-73.9780035,40.7056308],[-74.02030,41.15369],[-74.04665,41.60297],[-74.05702,42.05290],[-74.05139,42.50291],[-74.02976,42.95245],[-73.9921,43.40093],[-73.93866,43.8477],[-73.86932,44.29246],[-73.78424,44.7343],[-73.68343,45.17302],[-73.5912827,45.5224507]]}}
,{ "type": "Feature", "line_id": "11", "properties": { "FID": 11.0 }, "geometry": { "type": "LineString", "coordinates": [[-73.9780035,40.7056308],[-74.21913,40.51286],[-74.44996,40.30787],[-74.66985,40.09119],[-74.87814,39.863],[-75.07452,39.62515],[-75.2582,39.37703],[-75.29972,39.31704],[-75.42880,39.11973],[-75.5851,38.8539],[-75.72888,38.58038],[-75.8575,38.29977],[-75.97155,38.01287],[-76.07052,37.72045],[-76.15421,37.42330],[-76.22238,37.12221],[-76.25730325,36.93083365]]}}
,{ "type": "Feature", "line_id": "12", "properties": { "FID": 12.0 }, "geometry": { "type": "LineString", "coordinates": [[-73.9780035,40.7056308],[-74.24617,40.84613],[-74.52138,40.97227],[-74.80288,41.08370],[-75.0898,41.18011],[-75.38154,41.26122],[-75.67710,41.32681],[-75.97571,41.37670],[-76.27653,41.41074],[-76.56383,41.42833],[-76.57874,41.42885],[-76.88145,41.4309],[-77.18390,41.41709],[-77.48518,41.38726],[-77.78445,41.34156],[-78.0809,41.28011],[-78.37368,41.20309],[-78.66199,41.11072],[-78.9453,41.0032],[-79.22197,40.88096],[-79.49208,40.74422],[-79.75459,40.59341],[-79.9900861,40.4416941]]}}
,{ "type": "Feature", "line_id": "13", "properties": { "FID": 13.0 }, "geometry": { "type": "LineString", "coordinates": [[-73.9780035,40.7056308],[-73.79611,40.98573],[-73.60101,41.25679],[-73.39315,41.51821],[-73.17302,41.76937],[-72.9411,42.00970],[-72.69796,42.23865],[-72.44412,42.45569],[-72.3758,42.51059],[-72.18018,42.66033],[-71.90675,42.85210],[-71.62444,43.03055],[-71.3339,43.19528],[-71.03584,43.34590],[-70.73088,43.48208],[-70.41976,43.60350],[-70.2548596,43.6610277]]}}
,{ "type": "Feature", "line_id": "14", "properties": { "FID": 14.0 }, "geometry": { "type": "LineString", "coordinates": [[-73.9780035,40.7056308],[-74.23911,40.64707],[-74.49626,40.57302],[-74.74853,40.48374],[-74.99501,40.37955],[-75.2348,40.26081],[-75.46712,40.12796],[-75.69161,39.981],[-75.9058,39.82185],[-76.11071,39.64968],[-76.30492,39.46559],[-76.40687,39.3596],[-76.48778,39.27022],[-76.65865,39.06427],[-76.81690,38.84848],[-76.96198,38.62362],[-77.09336,38.39049],[-77.21058,38.14993],[-77.31321,37.90279],[-77.40096,37.6499],[-77.43428,37.5385087]]}}
,{ "type": "Feature", "line_id": "15", "properties": { "FID": 15.0 }, "geometry": { "type": "LineString", "coordinates": [[-87.7321555,41.8337329],[-87.96099,41.73926],[-88.18324,41.63021],[-88.39799,41.50703],[-88.60436,41.3702],[-88.80142,41.22041],[-88.98842,41.05817],[-89.16455,40.88419],[-89.23867,40.80382],[-89.32907,40.69920],[-89.48131,40.50397],[-89.62062,40.29932],[-89.74643,40.08610],[-89.85820,39.86520],[-89.95547,39.63754],[-90.03784,39.40408],[-90.10496,39.16578],[-90.15655,38.92365],[-90.19240,38.67869],[-90.1978889,38.6272733]]}}
,{ "type": "Feature", "line_id": "16", "properties": { "FID": 16.0 }, "geometry": { "type": "LineString", "coordinates": [[-73.9780035,40.7056308],[-74.24409,40.66200],[-74.50713,40.60268],[-74.76618,40.52786],[-75.02035,40.43782],[-75.26872,40.33286],[-75.51044,40.21336],[-75.74463,40.0797],[-75.97051,39.93245],[-76.18725,39.77204],[-76.25161,39.72043],[-76.39409,39.59905],[-76.59031,39.41411],[-76.77522,39.21785],[-76.94817,39.01098],[-77.0363716,38.8951148]]}}

]
};

var routes =
{"type":"FeatureCollection","features":[
{"type":"Feature","line_id": "0","properties":{},"geometry":{"type":"LineString","coordinates":[[40.7056308,-73.9780035],[40.91587,-74.01981],[41.12865,-74.04583],[41.34278,-74.05592],[41.55706,-74.05001],[41.77031,-74.02813],[41.98133,-73.99042],[42.18896,-73.937],[42.39202,-73.86841],[42.58941,-73.78479],[42.6511674,-73.754968]]}},
{"type":"Feature","line_id": "1","properties":{},"geometry":{"type":"LineString","coordinates":[[40.7056308,-73.9780035],[40.69127,-74.20832],[40.66099,-74.43709],[40.61493,-74.66322],[40.55333,-74.88561],[40.47646,-75.1032],[40.3847,-75.31492],[40.27851,-75.51983],[40.15837,-75.71686],[40.02487,-75.90509],[39.89543,-76.06439],[39.87866,-76.08363],[39.72043,-76.25161],[39.55094,-76.40822],[39.37101,-76.55272],[39.2908608,-76.6108073]]}},
{"type":"Feature","line_id": "2","properties":{},"geometry":{"type":"LineString","coordinates":[[40.7056308,-73.9780035],[40.91726,-73.77467],[41.11749,-73.56012],[41.30574,-73.33497],[41.48144,-73.099],[41.64408,-72.8556],[41.79316,-72.60281],[41.80091,-72.58875],[41.9282,-72.34225],[42.04892,-72.07476],[42.15486,-71.80106],[42.2457,-71.52202],[42.32124,-71.23841],[42.3604823,-71.0595678]]}},
{"type":"Feature","line_id": "3","properties":{},"geometry":{"type":"LineString","coordinates":[[41.8337329,-87.7321555],[41.8294,-87.39883],[41.80908,-87.0661],[41.77282,-86.73472],[41.72071,-86.40547],[41.65286,-86.0791],[41.56943,-85.7563],[41.47061,-85.43799],[41.3566,-85.12476],[41.22775,-84.8172],[41.08427,-84.5164],[40.92652,-84.222],[40.90228,-84.18045],[40.75487,-83.93698],[40.5697,-83.65979],[40.37145,-83.3918],[40.16056,-83.13363],[39.93754,-82.88587],[39.70288,-82.6491],[39.45714,-82.42386],[39.20087,-82.21067],[38.93467,-82.01002],[38.65915,-81.82238],[38.37494,-81.64817],[38.3500245,-81.6337762]]}},
{"type":"Feature","line_id": "4","properties":{},"geometry":{"type":"LineString","coordinates":[[40.7056308,-73.9780035],[40.57659,-74.3891],[40.43238,-74.79525],[40.27319,-75.19571],[40.09925,-75.58998],[39.9108,-75.97753],[39.70809,-76.35781],[39.4914,-76.73031],[39.26104,-77.0945],[39.01731,-77.4499],[38.79188,-77.7552],[38.76057,-77.796],[38.49115,-78.13234],[38.20943,-78.45844],[37.91581,-78.77386],[37.61067,-79.07816],[37.29446,-79.37093],[36.96759,-79.65176],[36.63053,-79.92026],[36.28373,-80.17607],[35.92767,-80.41882],[35.56285,-80.6482],[35.2270869,-80.8431268]]}},
{"type":"Feature","line_id": "5","properties":{},"geometry":{"type":"LineString","coordinates":[[41.8337329,-87.7321555],[41.87678,-87.45918],[41.90397,-87.18418],[41.9152,-86.90806],[41.91043,-86.63176],[41.88969,-86.35619],[41.85303,-86.0822],[41.80059,-85.81097],[41.73253,-85.54313],[41.6491,-85.27969],[41.55055,-85.02151],[41.43724,-84.7694],[41.30953,-84.5244],[41.2997,-84.5069],[41.1678,-84.28715],[41.01269,-84.0584],[40.84455,-83.83916],[40.664,-83.62995],[40.47165,-83.43154],[40.26814,-83.24459],[40.05416,-83.06972],[39.9622601,-83.0007065]]}},
{"type":"Feature","line_id": "6","properties":{},"geometry":{"type":"LineString","coordinates":[[41.8337329,-87.7321555],[41.93474,-88.09865],[42.02024,-88.46908],[42.09008,-88.84278],[42.14413,-89.21909],[42.1823,-89.59733],[42.20453,-89.97685],[42.21077,-90.3569],[42.20809,-90.5391],[42.20101,-90.73701],[42.17527,-91.11631],[42.1336,-91.49419],[42.07607,-91.86998],[42.00277,-92.243],[41.91385,-92.61263],[41.80945,-92.9781],[41.68976,-93.33902],[41.5910641,-93.6037149]]}},
{"type":"Feature","line_id": "7","properties":{},"geometry":{"type":"LineString","coordinates":[[41.8337329,-87.7321555],[41.97316,-87.43002],[42.0979,-87.12154],[42.20768,-86.80742],[42.30222,-86.48838],[42.38133,-86.16517],[42.44481,-85.83853],[42.49252,-85.5092],[42.52035,-85.23077],[42.52435,-85.17799],[42.54021,-84.84562],[42.54009,-84.5128],[42.52397,-84.18051],[42.4919,-83.8493],[42.44394,-83.52003],[42.38022,-83.19344],[42.3486635,-83.0567375]]}},
{"type":"Feature","line_id": "8","properties":{},"geometry":{"type":"LineString","coordinates":[[41.8337329,-87.7321555],[41.78423,-87.55808],[41.71956,-87.38905],[41.64022,-87.2264],[41.54682,-87.07139],[41.44011,-86.92522],[41.32091,-86.78905],[41.19016,-86.66393],[41.04887,-86.55084],[40.89815,-86.45067],[40.75414,-86.37158],[40.73917,-86.3642],[40.57318,-86.29209],[40.4014,-86.23494],[40.22539,-86.19314],[40.04631,-86.16706],[39.86562,-86.1569],[39.7683795,-86.1580447]]}},
{"type":"Feature","line_id": "9","properties":{},"geometry":{"type":"LineString","coordinates":[[41.8337329,-87.7321555],[41.7022,-87.518],[41.55732,-87.31403],[41.3997,-87.11904],[41.22996,-86.9344],[41.04879,-86.76114],[40.85695,-86.59969],[40.6552,-86.45081],[40.44436,-86.31509],[40.22539,-86.19314],[40.22531,-86.1931],[39.99891,-86.08532],[39.7661,-85.99217],[39.5278,-85.91415],[39.28508,-85.85136],[39.03881,-85.80422],[38.79004,-85.77289],[38.53978,-85.75748],[38.28904,-85.75806],[38.2542376,-85.759407]]}},
{"type":"Feature","line_id": "10","properties":{},"geometry":{"type":"LineString","coordinates":[[40.7056308,-73.9780035],[41.15369,-74.0203],[41.60297,-74.04665],[42.0529,-74.05702],[42.50291,-74.05139],[42.95245,-74.02976],[43.40093,-73.9921],[43.8477,-73.93866],[44.29246,-73.86932],[44.7343,-73.78424],[45.17302,-73.68343],[45.5224507,-73.5912827]]}},
{"type":"Feature","line_id": "11","properties":{},"geometry":{"type":"LineString","coordinates":[[40.7056308,-73.9780035],[40.51286,-74.21913],[40.30787,-74.44996],[40.09119,-74.66985],[39.863,-74.87814],[39.62515,-75.07452],[39.37703,-75.2582],[39.31704,-75.29972],[39.11973,-75.4288],[38.8539,-75.5851],[38.58038,-75.72888],[38.29977,-75.8575],[38.01287,-75.97155],[37.72045,-76.07052],[37.4233,-76.15421],[37.12221,-76.22238],[36.93083365,-76.25730325]]}},
{"type":"Feature","line_id": "12","properties":{},"geometry":{"type":"LineString","coordinates":[[40.7056308,-73.9780035],[40.84613,-74.24617],[40.97227,-74.52138],[41.0837,-74.80288],[41.18011,-75.0898],[41.26122,-75.38154],[41.32681,-75.6771],[41.3767,-75.97571],[41.41074,-76.27653],[41.42833,-76.56383],[41.42885,-76.57874],[41.4309,-76.88145],[41.41709,-77.1839],[41.38726,-77.48518],[41.34156,-77.78445],[41.28011,-78.0809],[41.20309,-78.37368],[41.11072,-78.66199],[41.0032,-78.9453],[40.88096,-79.22197],[40.74422,-79.49208],[40.59341,-79.75459],[40.4416941,-79.9900861]]}},
{"type":"Feature","line_id": "13","properties":{},"geometry":{"type":"LineString","coordinates":[[40.7056308,-73.9780035],[40.98573,-73.79611],[41.25679,-73.60101],[41.51821,-73.39315],[41.76937,-73.17302],[42.0097,-72.9411],[42.23865,-72.69796],[42.45569,-72.44412],[42.51059,-72.3758],[42.66033,-72.18018],[42.8521,-71.90675],[43.03055,-71.62444],[43.19528,-71.3339],[43.3459,-71.03584],[43.48208,-70.73088],[43.6035,-70.41976],[43.6610277,-70.2548596]]}},
{"type":"Feature","line_id": "14","properties":{},"geometry":{"type":"LineString","coordinates":[[40.7056308,-73.9780035],[40.64707,-74.23911],[40.57302,-74.49626],[40.48374,-74.74853],[40.37955,-74.99501],[40.26081,-75.2348],[40.12796,-75.46712],[39.981,-75.69161],[39.82185,-75.9058],[39.64968,-76.11071],[39.46559,-76.30492],[39.3596,-76.40687],[39.27022,-76.48778],[39.06427,-76.65865],[38.84848,-76.8169],[38.62362,-76.96198],[38.39049,-77.09336],[38.14993,-77.21058],[37.90279,-77.31321],[37.6499,-77.40096],[37.5385087,-77.43428]]}},
{"type":"Feature","line_id": "15","properties":{},"geometry":{"type":"LineString","coordinates":[[41.8337329,-87.7321555],[41.73926,-87.96099],[41.63021,-88.18324],[41.50703,-88.39799],[41.3702,-88.60436],[41.22041,-88.80142],[41.05817,-88.98842],[40.88419,-89.16455],[40.80382,-89.23867],[40.6992,-89.32907],[40.50397,-89.48131],[40.29932,-89.62062],[40.0861,-89.74643],[39.8652,-89.8582],[39.63754,-89.95547],[39.40408,-90.03784],[39.16578,-90.10496],[38.92365,-90.15655],[38.67869,-90.1924],[38.6272733,-90.1978889]]}},
{"type":"Feature","line_id": "16","properties":{},"geometry":{"type":"LineString","coordinates":[[40.7056308,-73.9780035],[40.662,-74.24409],[40.60268,-74.50713],[40.52786,-74.76618],[40.43782,-75.02035],[40.33286,-75.26872],[40.21336,-75.51044],[40.0797,-75.74463],[39.93245,-75.97051],[39.77204,-76.18725],[39.72043,-76.25161],[39.59905,-76.39409],[39.41411,-76.59031],[39.21785,-76.77522],[39.01098,-76.94817],[38.8951148,-77.0363716]]}}]}

var totalBTU = document.getElementById('totalBTU');
var statename = document.getElementById('dropdiv');
var flight = document.getElementById('flight');
// var world = document.getElementById('world');
var marty = document.getElementById('marty');
// var power = document.getElementById('power');
var burritosDiv = document.getElementById('burritosDiv');
var dynamiteDiv = document.getElementById('dynamiteDiv');
var dynamiteDiv2 = document.getElementById('dynamiteDiv2');
var coalDiv = document.getElementById('coalDiv');
var burritoInfo = document.getElementById('burrito-info');
var dynamiteInfo = document.getElementById('dynamite-info');
var coalInfo = document.getElementById('coal-info');

var bbelow  =  document.getElementById('b-below');
var d1below =  document.getElementById('d1-below');
var d2below =  document.getElementById('d2-below');
var cbelow  =  document.getElementById('c-below');

var w = -1;



// Initial Script

		var map = L.map('map', {
			scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: false,
      boxZoom: false,
      zoomControl: false

		}).fitBounds([
              [38.7, -70.979],[41.2, -80.4]
            ]);

		var cloudmade = L.tileLayer("http://a.tiles.mapbox.com/v3/energy.j3enm2ea/{z}/{x}/{y}.png").addTo(map);


    //Load/add the data        
(function ($) { 
$( document ).ready(function() {


// should be 44 for us instead of 1 for alaska.
  addNumbers(data[44].id);
  addMap(data[44].id);
  addD3(data[44].id);

  var mySelect = $('#drop');

  $.each(data, function(i) {
      mySelect.append(
          $('<li class="doink"></li>').val(data[i].id).html(data[i].state)
      );
  });

  // Turn stuff on when you click on the dropdown
  $('#dropdiv').click(function (e){             
    $('#drop').toggleClass('open')
    $('#drop').toggleClass('close')
    $('#dropdiv').toggleClass('open')    
  });                  

  $('.doink').click(function (e){             
    $('#drop').removeClass('open')
    $('#drop').addClass('close')
    $('#dropdiv').removeClass('open')           
    var i = this.value;

    addNumbers(i); 
    addMap(i);      
    addD3(i);
    var w = i; //why doesn't this work?

  });

// Swipe to switch
  // $("#swipe").swipe({
  //   swipe:function(event, direction, distance, duration, fingerCount) {
  //     $(this).text("You swiped " + direction );
  //   }
  // });

// Add left/right navigation
  $(document).keydown(function ( event ) {
    if (event.which == 39) {ToTheRight();}
    else if (event.which == 37) {ToTheLeft(event.which);}
    ;
  });

  $('#right-tri-box').click(ToTheRight);
  $('#left-tri-box').click(ToTheLeft);
  
// CANT FIGURE OUT SWIPE :(
  // $('#totalBTU').on("swipe", ToTheLeft());




  


  $(document).click(function(event) {             
    if(!$(event.target).closest('#drop').length && !$(event.target).closest('#dropdiv').length) {
      if($('#drop').is(":visible")) {
        $('#drop').addClass('close')
      }
    }        
  })
// addNumbershigh();

});
}(jQuery));  


function ToTheRight(e){
  if (w == 51) {
    w -= 7;
  } else if (w == 44) {
    w -= 44;        
  } else if (w == 43) {
    w += 2;
  } else {
    w += 1;
  };    

  addNumbers(w); 
  addMap(w);     
  addD3(w);   
}

function ToTheLeft(e){      
  if (w == -1) {
    w += 52;
  } else if (w == 0) {
    w += 44;
  } else if (w == 44) {
    w += 7;        
  } else if (w == 45) {
    w -= 2;
  } else {
    w -= 1;
  };    

    addNumbers(w); 
    addMap(w);  
    addD3(w);
}

function addNumbers(i) {
  statename.innerHTML = '<h4>' + data[i].state + '</h4>';
  totalBTU.innerHTML = '<h1>' + numberWithCommas(data[i].btu) + ' BTU</h1>';
  flight.innerHTML = 'Fly a Boeing 747 from ' + data[i].origin + ' to ' +  data[i].destination;
  // world.innerHTML = data[i].earth;
  marty.innerHTML = data[i].future;
//  power.innerHTML = '<h1>' + numberWithCommas(data[i].wattage) + ' W</h1> <p>You used ' + numberWithCommas(data[i].wattage / 100) + 
  ' times as much energy as a 100-watt lightbulb this second...and this second...and now. You get the idea.</p>';

  burritosDiv.innerHTML = numberWithCommas(data[i].burritos);
  burritoInfo.innerHTML = data[i].state;
  dynamiteDiv.innerHTML = numberWithCommas(data[i].dynamite);
  dynamiteDiv2.innerHTML = Math.floor(data[i].dynamite / 1000);;
  dynamiteInfo.innerHTML = data[i].state;
  coalDiv.innerHTML = numberWithCommas(data[i].coal)
  coalInfo.innerHTML = data[i].state;

  burinter =   numberWithCommas(Math.abs(data[i].burritos - data[44].burritos));
  burdynamite =   numberWithCommas(Math.abs(data[i].dynamite - data[44].dynamite));
  burcoal =   numberWithCommas(Math.abs(data[i].coal - data[44].coal));

if (data[i].burritos - data[44].burritos > 0) {
  aboveBelow = "above";
  redBlue = "red";
} else if (data[i].burritos - data[44].burritos < 0) {
  aboveBelow = "below"
  redBlue = "blue";
} else {
  aboveBelow = "above" 
  redBlue = "";
};

bbelow.innerHTML = burinter + ' burritos <span class="' + redBlue + '">' + aboveBelow + '</span> <br>the U.S. Average.';
d1below.innerHTML = burdynamite + ' sticks <span class="' + redBlue + '">' + aboveBelow + '</span> <br>the U.S. Average.';
d2below.innerHTML = burdynamite + ' sticks <span class="' + redBlue + '">' + aboveBelow + '</span> <br>the U.S. Average.';
cbelow.innerHTML = burcoal + ' lbs. of coal <span class="' + redBlue + '">' + aboveBelow + '</span> <br>the U.S. Average.';

}

//function to add commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var origin;
var destination;
var firstpolyline;

//Get the first city 
for (var i = 0; i < routes.features.length; i++) {
	// console.log(routes.features[i].geometry.coordinates[0]);

	final_origin = routes.features[i].geometry.coordinates[0];
	line_length = routes.features[i].geometry.coordinates.length - 1;
	final_destination = routes.features[i].geometry.coordinates[line_length];
};

	function addMap(i) {		
		var x = data[i].line_id
		// console.log(data[i].line_id);
		final_origin = routes.features[x].geometry.coordinates[0];
		line_length = routes.features[x].geometry.coordinates.length - 1;
		final_destination = routes.features[x].geometry.coordinates[line_length];
		// console.log(final_origin);
		// console.log(final_destination);


		var LeafIcon = L.Icon.extend({
		    options: {
		        iconSize:     [18, 17],
		        iconAnchor:   [9, 8]
		    }
		});

		if (destination != null) {
			map.removeLayer(destination); 
			map.removeLayer(origin); 
			map.removeLayer(firstpolyline);
		};
 
		var blueIcon = new LeafIcon({iconUrl: 'img/star_blue.png'}),
		    redIcon = new LeafIcon({iconUrl: 'img/star_red.png'});

		// add origin		
			origin = L.marker(final_origin, {icon: redIcon}).addTo(map);		

		// add destination
			destination = L.marker(final_destination, {icon: blueIcon}).addTo(map);
		
		//resize bounds
			map.fitBounds([
	            final_destination,final_origin
            ]);
			
			var pointList = routes.features[x].geometry.coordinates
			// console.log(pointList)

			firstpolyline = new L.Polyline(pointList, {
			color: 'red',
			weight: 3,
			opacity: 0.5,
			smoothFactor: 0,
			dashArray: '10'

			});
			firstpolyline.addTo(map);

	};

(function ($) { 
          
  // Move the Clouds
  $(document).ready(function del(){
    $("#flames").
    delay(2000).
    animate({opacity:1},100, 'linear').
    delay(1500).
    animate({opacity:0},500, 'linear'),
      $("#delorean").        
        delay(1000).
        animate({left:'+=150%'},2000).
        animate({opacity: 0},0).
        animate({left:'-=300%'},0).
        delay(2000).
        animate({opacity: 1},0).
        animate({left:'+=150%'},2000,del)           
  }); 

}(jQuery));  

// burrito, dynamite, and coal scalar
	bS = 5000;	
	dS = 10000;
	cS = 1000;

  var d3burrito = d3.select("#burrito-fill");
  var usaburrito = d3.select("#burrito-fill-usa");

  var d3dynamite = d3.select("#dynamite-fill");
  var usadynamite = d3.select("#dynamite-fill-usa");

  var d3coal = d3.select("#coal-fill");
  var usacoal = d3.select("#coal-fill-usa");

// Add USA
// Wish list is to have this run on FIRST click, but not before then! ORRRRR have first load be Alabama instead of USA
var AmericanBurrito = (Math.floor(data[44].burritos / bS) / 2);
var	AmericanBurRemainder = Math.floor(((data[44].burritos / bS) - Math.floor(data[i].burritos / bS)) * 2);
var AmericanDynamite = data[44].dynamite / dS;
var AmericanCoal = Math.floor(data[44].burritos / cS);

// If I wanted to, I could use this but would have to generalize from d3burrito to usaburrito
// This runs on load?? I think 8/12/14
UsaBurritofunction(AmericanBurrito);
UsaDynamitefunction(AmericanDynamite);
UsaCoalfunction(AmericanCoal);

// This is called and calls everything else.
function addD3(i) {

	//calculations
	burritos = Math.floor(data[i].burritos / bS); 
	burRemainder = Math.floor(((data[i].burritos / bS) - burritos) * 2);
	dynamite = data[i].dynamite / dS;
	dynBundle = Math.floor(dynamite / 5);
	dynSingle = Math.floor(dynamite % 5);
	coal = Math.floor(data[i].coal / cS);  

  // Begin by removing previous rect's (can i do it by class?)    
  d3.select("#burrito-fill").selectAll("div").data([]).exit().remove();
	d3.select("#dynamite-fill").selectAll("div").data([]).exit().remove();
	d3.select("#coal-fill").selectAll("div").data([]).exit().remove();

	// Do the Burrito Work
	if (burritos % 2 == 0) {
		b = burritos / 2; 
		o = 0; 
	} else {
		b = (burritos - 1) / 2;
		o = 1;
		middleBurrito(b);
	};
	fullBurrito(b);

	if (burRemainder == 1) {
		halfBurrito(b, o);

	};


	d3burrito.selectAll(".burritoBar").append("img")
			.attr("src", "img/burritoSmall2.jpg")

	d3burrito.selectAll(".burritohalf").append("img")
			.attr("src", "img/burritohalf.jpg")			

	// if (burRemainder != 0 ) {
	// 	partialBurrito(b, burRemainder);	
	// };

	// Do the Dynamite Work
	if (dynBundle % 2 == 0) {
		q = dynBundle / 2;
	} else {
		q = (dynBundle - 1) / 2;
		middleDynamite(q);
	};
	fullDynamite(q)
	
	if (dynSingle % 2 == 0) {
		qs = dynSingle / 2;
	} else {
		qs = (dynSingle - 1) / 2;
		middleDynamiteSingle(qs);
	};
	fullDynamiteSingle(qs);

	d3dynamite.selectAll("div").append("img")
		.attr("src", "img/bundle.jpg")

		// Remove the above appended jpg, add the below jpg
	d3dynamite.selectAll(".dynamiteBarSingle").selectAll("img").data([]).exit().remove();

	d3dynamite.selectAll(".dynamiteBarSingle").append("img")
			.attr("src", "img/dynamite.jpg")

	// Do the Coal Work

	if (coal % 4 == 0) {
		c = coal / 4;
	};
	if (coal % 4 >= 1) {
		c = Math.floor((coal - 1) / 4); 
		oneCoal(c);		
	};
	if (coal % 4 >= 2) {
		c = Math.floor((coal - 2) / 4);
		twoCoal(c);
	};
	if (coal % 4 >= 3) {
		c = Math.floor((coal - 3) / 4);
		threeCoal(c);
	};
fullCoal(c);

	d3coal.selectAll(".coalBar1").append("img")
			.attr("src", "img/coal1.jpg")	
	d3coal.selectAll(".coalBar2").append("img")
			.attr("src", "img/coal2.jpg")	
}

// /////////////////////////////////////////
// Functions
// ////////////////////////////////////////
// Coal functions 

function fullCoal(c) {
	for (var i = 0; i < c; i++) {
		var d = c;

		for (var j = 0; j < 4; j++) {
				d3coal.append("div")
	    .attr("class", function(d) {
			  	if (j % 2 == 0) {
			  		return "coalBar1"
			  	} else {
			  		return "coalBar2"
			  	}    	    	
	    	})
	    .style("left", function(d) {
	     	if (i % 2 == 0) {
					var coalLeft = j * 25;    		
	    	} else {	
	    		var coalLeft = (j * 25) + 8;    		
	    	};
	    		return coalLeft + "px";
	    })
	    .style("bottom", function(d) {
	    	var barBottom = i * 20;    		
	    		return barBottom + "px";
	    });
		};
	};
}

function oneCoal(c) {
	d3coal.append("div")
		.attr("class", "coalBar2")
		.style("left", function(d){
			if (c % 2 == 0) {
				var coalLeft = 25;
			} else {
				var	coalLeft = 33;
			};
			return coalLeft + "px";
		})
		.style("bottom", function(d) {
	    	var barBottom = (c) * 20;    		
	    		return barBottom + "px";
	    });
}

function twoCoal(c) {
	d3coal.append("div")
		.attr("class", "coalBar1")
		.style("left", function(d){
			if (c % 2 == 0) {
				var coalLeft = 50;
			} else {
				var	coalLeft = 58;
			};
			return coalLeft + "px";
		})
		.style("bottom", function(d) {
	    	var barBottom = (c) * 20;    		
	    		return barBottom + "px";
	    });
}

function threeCoal(c) {
	d3coal.append("div")
		.attr("class", "coalBar1")
		.style("left", function(d){
			if (c % 2 == 0) {
				var coalLeft = 0;
			} else {
				var	coalLeft = 8;
			};
			return coalLeft + "px";
		})
		.style("bottom", function(d) {
	    	var barBottom = (c) * 20;    		
	    		return barBottom + "px";
	    });
}

function UsaCoalfunction(AmericanCoal) {

	c = Math.floor((AmericanCoal - 3) / 4);
		
		// Do the Coal Work

		usacoal.append("div")
			.attr("class", "coalBar2")
			.style("right", "33px")
			.style("bottom", "60px");
		usacoal.append("div")
			.attr("class", "coalBar1")
			.style("right", "8px")
			.style("bottom", "60px");
		usacoal.append("div")
			.attr("class", "coalBar1")
			.style("right", "58px")
			.style("bottom", "60px");

		for (var i = 0; i < 3; i++) {
		var d = c;

		for (var j = 0; j < 4; j++) {
				usacoal.append("div")
	    .attr("class", function(d) {
			  	if (j % 2 == 0) {
			  		return "coalBar1"
			  	} else {
			  		return "coalBar2"
			  	}    	    	
	    	})
	    .style("right", function(d) {
	     	if (i % 2 == 0) {
					var coalLeft = j * 25;    		
	    	} else {	
	    		var coalLeft = (j * 25) + 8;    		
	    	};
	    		return coalLeft + "px";
	    })
	    .style("bottom", function(d) {
	    	var barBottom = i * 20;    		
	    		return barBottom + "px";
	    });
		};
	};

	usacoal.selectAll(".coalBar1").append("img")
			.attr("src", "img/coal2.jpg")	
	usacoal.selectAll(".coalBar2").append("img")
			.attr("src", "img/coal1.jpg")	
}


// Dymamite functions
function fullDynamite(q) {
	for (var i = 0; i < q; i++) {
	var d = q;

	d3dynamite.append("div")
    .attr("class", "dynamiteBar")
    .style("left", "0")
    .style("bottom", function(d) {
    	var barBottom = i * 52;
    		return barBottom + "px";
    });
	d3dynamite.append("div")
    .attr("class", "dynamiteBar")
    .style("left", "30px")
    .style("bottom", function(d) {
    	var barBottom = i * 52;
    		return barBottom + "px";
    });    
	};
}

function middleDynamite(q)  {
	d3dynamite.append("div")
    .attr("class", "dynamiteBar")
    .style("left", "15px")
    .style("bottom", function(d) {
    	var barBottom = ((q) * 52);
    		return barBottom + "px";
    });
}

// Single dynamite
function fullDynamiteSingle(qs) {
	for (var i = 0; i < qs; i++) {
	var d = q;

	d3dynamite.append("div")
    .attr("class", "dynamiteBarSingle")
    .style("left", "60px")
    .style("bottom", function(d) {
    	var barBottom = i *  39;
    		return barBottom + "px";
    });
	d3dynamite.append("div")
    .attr("class", "dynamiteBarSingle")
    .style("left", "80px")
    .style("bottom", function(d) {
    	var barBottom = i * 39;
    		return barBottom + "px";
    });    
	};
}

function middleDynamiteSingle(qs)  {
	d3dynamite.append("div")
    .attr("class", "dynamiteBarSingle")
    .style("left", "70px")
    .style("bottom", function(d) {
    	var barBottom = ((qs) * 39);
    		return barBottom + "px";
    });
}

// Burrito Functions
function fullBurrito(b) {
	for (var i = 0; i < b; i++) {
	var d = i;

	d3burrito.append("div")
    .attr("class", "burritoBar")
    .style("left", "0")
    .style("bottom", function(d) {
    	var barBottom = i * 25;
    		return barBottom + "px";
    });
	d3burrito.append("div")
    .attr("class", "burritoBar")
    .style("left", "54px")
    .style("bottom", function(d) {
    	var barBottom = i * 25;
    		return barBottom + "px";
    });    
	};
	
}

function middleBurrito(b)  {
	d3burrito.append("div")
    .attr("class", "burritoBar")
    .style("left", "27px")
    .style("bottom", function(d) {
    	var barBottom = ((b) * 25);
    		return barBottom + "px";
    });
}

function halfBurrito(b, o)  {
		d3burrito.append("div")
	    .attr("class", "burritohalf")
	    .style("left", "36px")
	    .style("bottom", function(d) {

	    	if (o == 0) {
	    		var barBottom = (((b) * 25) - 3);
	    	}
	    	else {
	    		var barBottom = (((b) * 25) + 22);
	    	};    	

	    	
	    		return barBottom + "px";
	    });
};

function UsaBurritofunction(AmericanBurrito) {

	for (var i = 0; i < AmericanBurrito; i++) {
		var d = i;

		usaburrito.append("div")
	    .attr("class", "burritoBar")
	    .style("right", "0")
	    .style("bottom", function(d) {
	    	var barBottom = i * 25;
	    		return barBottom + "px";
	    });
		usaburrito.append("div")
	    .attr("class", "burritoBar")
	    .style("right", "54px")
	    .style("bottom", function(d) {
	    	var barBottom = i * 25;
	    		return barBottom + "px";
    });    
	};

// usaburrito.append("div")
//     .attr("class", "burritohalf")
//     .style("right", "36px")
//     .style("bottom", function(d) {
//     	var barBottom = (((i) * 25) - 3);    	
//     		return barBottom + "px";
//     });

	usaburrito.selectAll(".burritoBar").append("img")
		.attr("src", "img/burritoSmall2.jpg")
	// usaburrito.selectAll(".burritohalf").append("img")
	// 	.attr("src", "img/burritohalf.jpg")
};

function UsaDynamitefunction(o) {
	

	dynBundle = Math.floor(o / 5);
	dynSingle = Math.floor(o % 5);


	// Do the Dynamite Work
	if (dynBundle % 2 == 0) {
		q = dynBundle / 2;
	} else {
		q = (dynBundle - 1) / 2;
		// add the middle
			usadynamite.append("div")
	    .attr("class", "dynamiteBar")
	    .style("right", "25px")
	    .style("bottom", function(d) {
	    	var barBottom = ((q) * 52);
	    		return barBottom + "px";
	    });
	};

// Add the full
	for (var i = 0; i < q; i++) {
	var d = q;

	usadynamite.append("div")
    .attr("class", "dynamiteBar")
    .style("right", "10px")
    .style("bottom", function(d) {
    	var barBottom = i * 52;
    		return barBottom + "px";
    });
	usadynamite.append("div")
    .attr("class", "dynamiteBar")
    .style("right", "40px")
    .style("bottom", function(d) {
    	var barBottom = i * 52;
    		return barBottom + "px";
    });    
	};
	
	if (dynSingle % 2 == 0) {
		qs = dynSingle / 2;
	} else {
		qs = (dynSingle - 1) / 2;
			usadynamite.append("div")
		    .attr("class", "dynamiteBarSingle")
		    .style("right", "80px")
		    .style("bottom", function(d) {
		    	var barBottom = ((qs) * 39);
		    		return barBottom + "px";
		    });
		  };
		for (var i = 0; i < qs; i++) {
			var d = q;

			// usadynamite.append("div")
		 //    .attr("class", "dynamiteBarSingle")
		 //    .style("left", "60px")
		 //    .style("bottom", function(d) {
		 //    	var barBottom = i *  39;
		 //    		return barBottom + "px";
		 //    });
			// usadynamite.append("div")
		 //    .attr("class", "dynamiteBarSingle")
		 //    .style("left", "80px")
		 //    .style("bottom", function(d) {
		 //    	var barBottom = i * 39;
		 //    		return barBottom + "px";
		 //    });    
			};

			usadynamite.selectAll("div").append("img")
				.attr("src", "img/bundle.jpg")

				// Remove the above appended jpg, add the below jpg
			usadynamite.selectAll(".dynamiteBarSingle").selectAll("img").data([]).exit().remove();

			usadynamite.selectAll(".dynamiteBarSingle").append("img")
					.attr("src", "img/dynamite.jpg")
};
