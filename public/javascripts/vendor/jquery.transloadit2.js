/*
 jQuery Easing v1.3: Copyright (c) 2008 George McGinley Smith | BSD License: http://www.opensource.org/licenses/bsd-license.php
 jQuery JSONP Core Plugin 2.1.2: Copyright (c) 2010 Julian Aubourg | MIT License: http://www.opensource.org/licenses/mit-license.php
 json2: Douglas Crockford | Public domain
 jquery.transloadit2.js: Copyright (c) 2010 Felix Geisendörfer | MIT License: http://www.opensource.org/licenses/mit-license.php

 Fork this on Github: http://github.com/transloadit/jquery-sdk
 jQuery Tools 1.2.3: Tero Piirainen | Public domain
*/
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(c,a,f,e,b){return jQuery.easing[jQuery.easing.def](c,a,f,e,b)},easeInQuad:function(c,a,f,e,b){return e*(a/=b)*a+f},easeOutQuad:function(c,a,f,e,b){return-e*(a/=b)*(a-2)+f},easeInOutQuad:function(c,a,f,e,b){if((a/=b/2)<1)return e/2*a*a+f;return-e/2*(--a*(a-2)-1)+f},easeInCubic:function(c,a,f,e,b){return e*(a/=b)*a*a+f},easeOutCubic:function(c,a,f,e,b){return e*((a=a/b-1)*a*a+1)+f},easeInOutCubic:function(c,a,f,e,b){if((a/=b/2)<1)return e/
2*a*a*a+f;return e/2*((a-=2)*a*a+2)+f},easeInQuart:function(c,a,f,e,b){return e*(a/=b)*a*a*a+f},easeOutQuart:function(c,a,f,e,b){return-e*((a=a/b-1)*a*a*a-1)+f},easeInOutQuart:function(c,a,f,e,b){if((a/=b/2)<1)return e/2*a*a*a*a+f;return-e/2*((a-=2)*a*a*a-2)+f},easeInQuint:function(c,a,f,e,b){return e*(a/=b)*a*a*a*a+f},easeOutQuint:function(c,a,f,e,b){return e*((a=a/b-1)*a*a*a*a+1)+f},easeInOutQuint:function(c,a,f,e,b){if((a/=b/2)<1)return e/2*a*a*a*a*a+f;return e/2*((a-=2)*a*a*a*a+2)+f},easeInSine:function(c,
a,f,e,b){return-e*Math.cos(a/b*(Math.PI/2))+e+f},easeOutSine:function(c,a,f,e,b){return e*Math.sin(a/b*(Math.PI/2))+f},easeInOutSine:function(c,a,f,e,b){return-e/2*(Math.cos(Math.PI*a/b)-1)+f},easeInExpo:function(c,a,f,e,b){return a==0?f:e*Math.pow(2,10*(a/b-1))+f},easeOutExpo:function(c,a,f,e,b){return a==b?f+e:e*(-Math.pow(2,-10*a/b)+1)+f},easeInOutExpo:function(c,a,f,e,b){if(a==0)return f;if(a==b)return f+e;if((a/=b/2)<1)return e/2*Math.pow(2,10*(a-1))+f;return e/2*(-Math.pow(2,-10*--a)+2)+f},
easeInCirc:function(c,a,f,e,b){return-e*(Math.sqrt(1-(a/=b)*a)-1)+f},easeOutCirc:function(c,a,f,e,b){return e*Math.sqrt(1-(a=a/b-1)*a)+f},easeInOutCirc:function(c,a,f,e,b){if((a/=b/2)<1)return-e/2*(Math.sqrt(1-a*a)-1)+f;return e/2*(Math.sqrt(1-(a-=2)*a)+1)+f},easeInElastic:function(c,a,f,e,b){var c=1.70158,d=0,g=e;if(a==0)return f;if((a/=b)==1)return f+e;d||(d=b*0.3);g<Math.abs(e)?(g=e,c=d/4):c=d/(2*Math.PI)*Math.asin(e/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*b-c)*2*Math.PI/d))+f},easeOutElastic:function(c,
a,f,e,b){var c=1.70158,d=0,g=e;if(a==0)return f;if((a/=b)==1)return f+e;d||(d=b*0.3);g<Math.abs(e)?(g=e,c=d/4):c=d/(2*Math.PI)*Math.asin(e/g);return g*Math.pow(2,-10*a)*Math.sin((a*b-c)*2*Math.PI/d)+e+f},easeInOutElastic:function(c,a,f,e,b){var c=1.70158,d=0,g=e;if(a==0)return f;if((a/=b/2)==2)return f+e;d||(d=b*0.3*1.5);g<Math.abs(e)?(g=e,c=d/4):c=d/(2*Math.PI)*Math.asin(e/g);if(a<1)return-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*b-c)*2*Math.PI/d)+f;return g*Math.pow(2,-10*(a-=1))*Math.sin((a*b-c)*
2*Math.PI/d)*0.5+e+f},easeInBack:function(c,a,f,e,b,d){d==void 0&&(d=1.70158);return e*(a/=b)*a*((d+1)*a-d)+f},easeOutBack:function(c,a,f,e,b,d){d==void 0&&(d=1.70158);return e*((a=a/b-1)*a*((d+1)*a+d)+1)+f},easeInOutBack:function(c,a,f,e,b,d){d==void 0&&(d=1.70158);if((a/=b/2)<1)return e/2*a*a*(((d*=1.525)+1)*a-d)+f;return e/2*((a-=2)*a*(((d*=1.525)+1)*a+d)+2)+f},easeInBounce:function(c,a,f,e,b){return e-jQuery.easing.easeOutBounce(c,b-a,0,e,b)+f},easeOutBounce:function(c,a,f,e,b){return(a/=b)<1/
2.75?e*7.5625*a*a+f:a<2/2.75?e*(7.5625*(a-=1.5/2.75)*a+0.75)+f:a<2.5/2.75?e*(7.5625*(a-=2.25/2.75)*a+0.9375)+f:e*(7.5625*(a-=2.625/2.75)*a+0.984375)+f},easeInOutBounce:function(c,a,f,e,b){if(a<b/2)return jQuery.easing.easeInBounce(c,a*2,0,e,b)*0.5+f;return jQuery.easing.easeOutBounce(c,a*2-b,0,e,b)*0.5+e*0.5+f}});
(function(c,a){function f(){}function e(a){A=[a]}function b(a,d,c){return a&&a.apply(d.context||d,c)}function d(d){function D(c){!w++&&a(function(){x();y&&(C[m]={s:[c]});E&&(c=E.apply(d,[c]));b(d.success,d,[c,h]);b(F,d,[d,h])},0)}function B(c){!w++&&a(function(){x();y&&c!=G&&(C[m]=c);b(d.error,d,[d,c]);b(F,d,[d,c])},0)}var d=c.extend({},H,d),F=d.complete,E=d.dataFilter,I=d.callbackParameter,J=d.callback,N=d.cache,y=d.pageCache,K=d.charset,m=d.url,r=d.data,L=d.timeout,z,w=0,x=f;d.abort=function(){!w++&&
x()};if(b(d.beforeSend,d,[d])===!1||w)return d;m=m||j;r=r?typeof r=="string"?r:c.param(r,d.traditional):j;m+=r?(/\?/.test(m)?"&":"?")+r:j;I&&(m+=(/\?/.test(m)?"&":"?")+escape(I)+"=?");!N&&!y&&(m+=(/\?/.test(m)?"&":"?")+"_"+(new Date).getTime()+"=");m=m.replace(/=\?(&|$)/,"="+J+"$1");y&&(z=C[m])?z.s?D(z.s[0]):B(z):a(function(d,b,h){if(!w){h=L>0&&a(function(){B(G)},L);x=function(){h&&clearTimeout(h);d[s]=d[u]=d[o]=d[p]=null;v[t](d);b&&v[t](b)};window[J]=e;d=c(n)[0];d.id=q+O++;K&&(d[l]=K);var j=function(a){(d[u]||
f)();a=A;A=void 0;a?D(a[0]):B(k)};M.msie?(d.event=u,d.htmlFor=d.id,d[s]=function(){d.readyState=="loaded"&&j()}):(d[p]=d[o]=j,M.opera?(b=c(n)[0]).text="jQuery('#"+d.id+"')[0]."+p+"()":d[g]=g);d.src=m;v.insertBefore(d,v.firstChild);b&&v.insertBefore(b,v.firstChild)}},0);return d}var g="async",l="charset",j="",k="error",q="_jqjsp",u="onclick",p="on"+k,o="onload",s="onreadystatechange",t="removeChild",n="<script/>",h="success",G="timeout",M=c.browser,v=c("head")[0]||document.documentElement,C={},O=0,
A,H={callback:q,url:location.href};d.setup=function(a){c.extend(H,a)};c.jsonp=d})(jQuery,setTimeout);if(!this.JSON)this.JSON={};
(function(){function c(a){return a<10?"0"+a:a}function a(a){b.lastIndex=0;return b.test(a)?'"'+a.replace(b,function(a){var d=l[a];return typeof d==="string"?d:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function f(c,b){var e,l,o,s,t=d,n,h=b[c];h&&typeof h==="object"&&typeof h.toJSON==="function"&&(h=h.toJSON(c));typeof j==="function"&&(h=j.call(b,c,h));switch(typeof h){case "string":return a(h);case "number":return isFinite(h)?String(h):"null";case "boolean":case "null":return String(h);
case "object":if(!h)return"null";d+=g;n=[];if(Object.prototype.toString.apply(h)==="[object Array]"){s=h.length;for(e=0;e<s;e+=1)n[e]=f(e,h)||"null";o=n.length===0?"[]":d?"[\n"+d+n.join(",\n"+d)+"\n"+t+"]":"["+n.join(",")+"]";d=t;return o}if(j&&typeof j==="object"){s=j.length;for(e=0;e<s;e+=1)l=j[e],typeof l==="string"&&(o=f(l,h))&&n.push(a(l)+(d?": ":":")+o)}else for(l in h)Object.hasOwnProperty.call(h,l)&&(o=f(l,h))&&n.push(a(l)+(d?": ":":")+o);o=n.length===0?"{}":d?"{\n"+d+n.join(",\n"+d)+"\n"+
t+"}":"{"+n.join(",")+"}";d=t;return o}}if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+c(this.getUTCMonth()+1)+"-"+c(this.getUTCDate())+"T"+c(this.getUTCHours())+":"+c(this.getUTCMinutes())+":"+c(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,d,g,l={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},j;if(typeof JSON.stringify!=="function")JSON.stringify=function(a,c,e){var b;g=d="";if(typeof e==="number")for(b=0;b<e;b+=1)g+=" ";else typeof e==="string"&&(g=e);if((j=c)&&typeof c!=="function"&&(typeof c!=="object"||typeof c.length!=="number"))throw Error("JSON.stringify");return f("",
{"":a})};if(typeof JSON.parse!=="function")JSON.parse=function(a,d){function c(a,e){var b,g,f=a[e];if(f&&typeof f==="object")for(b in f)Object.hasOwnProperty.call(f,b)&&(g=c(f,b),g!==void 0?f[b]=g:delete f[b]);return d.call(a,e,f)}var b,a=String(a);e.lastIndex=0;e.test(a)&&(a=a.replace(e,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return b=eval("("+a+")"),typeof d==="function"?c({"":b},""):b;throw new SyntaxError("JSON.parse");}})();
(function(c){function a(){if(c.browser.msie){var a=c(document).height(),d=c(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a-d<20?d:a]}return[c(document).width(),c(document).height()]}function f(a){if(a)return a.call(c.mask)}c.tools=c.tools||{version:"1.2.3"};var e;e=c.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:!0,closeOnEsc:!0,zIndex:9998,opacity:0.8,startOpacity:0,color:"#fff",onLoad:null,onClose:null}};
var b,d,g,l,j;c.mask={load:function(k,q){if(g)return this;typeof k=="string"&&(k={color:k});k=k||l;l=k=c.extend(c.extend({},e.conf),k);b=c("#"+k.maskId);b.length||(b=c("<div/>").attr("id",k.maskId),c("body").append(b));var u=a();b.css({position:"absolute",top:0,left:0,width:u[0],height:u[1],display:"none",opacity:k.startOpacity,zIndex:k.zIndex});k.color&&b.css("backgroundColor",k.color);if(f(k.onBeforeLoad)===!1)return this;k.closeOnEsc&&c(document).bind("keydown.mask",function(a){a.keyCode==27&&
c.mask.close(a)});k.closeOnClick&&b.bind("click.mask",function(a){c.mask.close(a)});c(window).bind("resize.mask",function(){c.mask.fit()});q&&q.length&&(j=q.eq(0).css("zIndex"),c.each(q,function(){var a=c(this);/relative|absolute|fixed/i.test(a.css("position"))||a.css("position","relative")}),d=q.css({zIndex:Math.max(k.zIndex+1,j=="auto"?0:j)}));b.css({display:"block"}).fadeTo(k.loadSpeed,k.opacity,function(){c.mask.fit();f(k.onLoad)});g=!0;return this},close:function(){if(g){if(f(l.onBeforeClose)===
!1)return this;b.fadeOut(l.closeSpeed,function(){f(l.onClose);d&&d.css({zIndex:j})});c(document).unbind("keydown.mask");b.unbind("click.mask");c(window).unbind("resize.mask");g=!1}return this},fit:function(){if(g){var d=a();b.css({width:d[0],height:d[1]})}},getMask:function(){return b},isLoaded:function(){return g},getConf:function(){return l},getExposed:function(){return d}};c.fn.mask=function(a){c.mask.load(a);return this};c.fn.expose=function(a){c.mask.load(a,this);return this}})(jQuery);
(function(c){function a(){this.timer=this.documentTitle=this.instance=this.assemblyId=null;this._options={};this.uploads=[];this.results={};this.pollStarted=this.ended=null;this.seq=this.pollRetries=0;this.started=!1;this.params=this.assembly=null;this.lastPoll=this.bytesReceivedBefore=0;this.$modal=this.$iframe=this.$fileClones=this.$files=this.$form=this.$params=null}var f=document.location.protocol=="https:"?"https://":"http://",e={service:f+"api2.transloadit.com/",assets:f+"assets.transloadit.com/",
onStart:function(){},onProgress:function(){},onUpload:function(){},onResult:function(){},onCancel:function(){},onError:function(){},onSuccess:function(){},interval:2500,wait:!1,autoSubmit:!0,modal:!0,exclude:"",fields:!1,debug:!0},b=!1;c.fn.transloadit=function(){var d=Array.prototype.slice.call(arguments),c;(d.length==1&&typeof d[0]=="object"||d[0]===void 0)&&d.unshift("init");c=d.shift();c=="init"?(uploader=new a,d.unshift(this),this.data("transloadit.uploader",uploader)):uploader=this.data("transloadit.uploader");
if(!uploader)throw Error("Element is not initialized for transloadit!");d=uploader[c].apply(uploader,d);return d===void 0?this:d};a.prototype.init=function(a,b){this.$form=a;this.options(c.extend({},e,b||{}));var f=this;a.bind("submit.transloadit",function(){f.getBoredInstance();return!1});this.includeCss()};a.prototype.getBoredInstance=function(){var a=this;this.instance=null;c.jsonp({url:this._options.service+"instances/bored",timeout:6E3,callbackParameter:"callback",success:function(c){c.error?
(a.ended=!0,a.renderError(c),a._options.onError(c)):(a.instance=c.api2_host,a.start())},error:function(c,b){a.ended=!0;var e={error:"CONNECTION_ERROR",message:"There was a problem connecting to the upload server",reason:"JSONP request status: "+b};a.renderError(e);a._options.onError(e)}});this._options.modal&&this.showModal()};a.prototype.start=function(){var a=this;this.ended=this.started=!1;this.seq=this.pollRetries=this.bytesReceivedBefore=0;this.uploads=[];this.results={};this.assemblyId=this.uuid();
var b=this.$form.find("input[name=params]");if(b.length){try{this.params=JSON.parse(b.val())}catch(e){alert("Error: input[name=params] seems to contain invalid JSON.");return}if(this.params.redirect_url)this.$form.attr("action",this.params.redirect_url);else if(this._options.autoSubmit&&this.$form.attr("action")==this._options.service+"assemblies"){alert("Error: input[name=params] does not include a redirect_url");return}this.$files=this.$form.find("input[type=file]").not(this._options.exclude);a.$fileClones=
c().not(document);this.$files.each(function(){var b=c(this).clone(!0);a.$fileClones=a.$fileClones.add(b);b.insertAfter(this)});this.$iframe=c('<iframe id="transloadit-'+this.assemblyId+'" name="transloadit-'+this.assemblyId+'"/>').appendTo("body").hide();this.$uploadForm=c('<form enctype="multipart/form-data" />').attr("action",f+this.instance+"/assemblies/"+this.assemblyId+"?redirect=false").attr("target","transloadit-"+this.assemblyId).attr("method","POST").append(this.$files).appendTo("body").hide();
var j="[name=params], [name=signature]";this._options.fields===!0?j="*":typeof this._options.fields=="string"&&(j+=", "+this._options.fields);this.$form.find(":input[type!=file]").filter(j).clone().prependTo(this.$uploadForm);this.$params=b;this.$uploadForm.submit();this.lastPoll=+new Date;setTimeout(function(){a._poll()},300)}else alert("Could not find input[name=params] in your form.")};a.prototype._poll=function(a){var b=this;if(!this.ended){if(c.browser.mozilla&&!this.documentTitle)this.documentTitle=
document.title,document.title="Loading...";this.pollStarted=+new Date;c.jsonp({url:f+this.instance+"/assemblies/"+this.assemblyId+(a||"?seq="+this.seq),timeout:6E3,callbackParameter:"callback",success:function(a){if(!b.ended)if(b.assembly=a,a.error=="ASSEMBLY_NOT_FOUND")b.pollRetries++,b.pollRetries>15?(document.title=b.documentTitle,b.ended=!0,b.renderError(a),b._options.onError(a)):setTimeout(function(){b._poll()},400);else if(a.error)b.ended=!0,b.renderError(a),document.title=b.documentTitle,b._options.onError(a);
else{b.seq=a.last_seq;if(!b.started)b.started=!0,b._options.onStart(a);b.pollRetries=0;var d=a.ok=="ASSEMBLY_EXECUTING",c=a.ok=="ASSEMBLY_CANCELED",e=a.ok=="ASSEMBLY_COMPLETED";b._options.onProgress(a.bytes_received,a.bytes_expected,a);for(var f=0;f<a.uploads.length;f++)b._options.onUpload(a.uploads[f],a),b.uploads.push(a.uploads[f]);for(var p in a.results){b.results[p]=b.results[p]||[];for(f=0;f<a.results[p].length;f++)b._options.onResult(p,a.results[p][f],a),b.results[p].push(a.results[p][f])}c?
(b.ended=!0,document.title=b.documentTitle,b._options.onCancel(a)):(b.renderProgress(a),e||!b._options.wait&&d?(b.ended=!0,document.title=b.documentTitle,a.uploads=b.uploads,a.results=b.results,b._options.onSuccess(a),b._options.modal&&b.cancel(),b._options.autoSubmit&&b.submitForm()):(a=b.pollStarted-+new Date,b.timer=setTimeout(function(){b._poll()},a<b._options.interval?b._options.interval:a),b.lastPoll=+new Date))}},error:function(a,d){if(!b.ended)if(b.pollRetries++,b.pollRetries>3){document.title=
b.documentTitle;b.ended=!0;var c={error:"CONNECTION_ERROR",message:"There was a problem connecting to the upload server",reason:"JSONP request status: "+d};b.renderError(c);b._options.onError(c)}else setTimeout(function(){b._poll()},350)}})}};a.prototype.stop=function(){document.title=this.documentTitle;this.ended=!0};a.prototype.cancel=function(){if(!this.ended){var a=this;this.$params.prependTo(this.$form);this.$fileClones.each(function(b){var b=c(a.$files[b]),e=c(this);b.insertAfter(e);e.remove()});
clearTimeout(a.timer);this._poll("?method=delete");this.$iframe[0].contentWindow.stop();setTimeout(function(){a.$iframe.remove()},500)}this._options.modal&&(c.mask.close(),this.$modal.remove())};a.prototype.submitForm=function(){this.$fileClones.remove();c("<textarea/>").attr("name","transloadit").text(JSON.stringify(this.assembly)).prependTo(this.$form).hide();this.$form.unbind("submit.transloadit").submit()};a.prototype.showModal=function(){this.$modal=c('<div id="transloadit"><div class="content"><a href="#close" class="close"></a><p class="status"></p><div class="progress"><label>starting upload ...</label><span></span></div><p class="error"></p></div></div>').appendTo("body");
c.extend(this.$modal,{$status:this.$modal.find(".status"),$content:this.$modal.find(".content"),$close:this.$modal.find(".close"),$label:this.$modal.find("label"),$progress:this.$modal.find(".progress"),$progressSpan:this.$modal.find(".progress span"),$error:this.$modal.find(".error")});var a=this;this.$modal.$close.click(function(){a.cancel()});this.$modal.$error.hide();a=this;this.$modal.expose({api:!0,maskId:"transloadit_expose",opacity:0.9,loadSpeed:250,closeOnEsc:!1,closeOnClick:!1}).load();
this.$modal.$close.click(function(){a.cancel();return!1})};a.prototype.renderError=function(a){this._options.modal&&(this.$modal.$content.addClass("content-error"),this.$modal.$progress.hide(),this.$modal.$error.html(this._options.debug?a.error+": "+a.message+"<br><br>"+(a.reason||""):"There was an internal error, please try your upload again.").show())};a.prototype.renderProgress=function(a){if(this._options.modal){var b=a.bytes_received/a.bytes_expected,c=a.bytes_received-this.bytesReceivedBefore,
e=+new Date-this.lastPoll,f=b==1?1E3:this._options.interval*2,c=b==1?"processing ...":(a.bytes_received/1024/1024).toFixed(2)+" MB / "+(a.bytes_expected/1024/1024).toFixed(2)+" MB ("+(c/1024/(e/1E3)).toFixed(1)+" kB / sec)";this.bytesReceivedBefore=a.bytes_received;this.$modal.$label.text(c);this.$modal.$progressSpan.stop().animate({width:b*100+"%"},f,"easeOutCubic")}};a.prototype.includeCss=function(){!b&&this._options.modal&&(b=!0,c('<link rel="stylesheet" type="text/css" href="'+this._options.assets+
'css/transloadit2.css" />').appendTo("head"))};a.prototype.uuid=function(){var a="";for(i=0;i<32;i++)a+=Math.floor(Math.random()*16).toString(16);return a};a.prototype.options=function(a){if(arguments.length==0)return this._options;c.extend(this._options,a)};a.prototype.option=function(a,b){if(arguments.length==1)return this._options[a];this._options[a]=b}})(jQuery);
