/* Compiled on: Wed Sep 04 2013 19:48:17 GMT-0400 (EDT)*/ 
var Handlebars={};!function(a,b){a.VERSION="1.0.0",a.COMPILER_REVISION=4,a.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"},a.helpers={},a.partials={};var c=Object.prototype.toString,d="[object Function]",e="[object Object]";a.registerHelper=function(b,d,f){if(c.call(b)===e){if(f||d)throw new a.Exception("Arg not supported with multiple helpers");a.Utils.extend(this.helpers,b)}else f&&(d.not=f),this.helpers[b]=d},a.registerPartial=function(b,d){c.call(b)===e?a.Utils.extend(this.partials,b):this.partials[b]=d},a.registerHelper("helperMissing",function(a){if(2===arguments.length)return b;throw new Error("Missing helper: '"+a+"'")}),a.registerHelper("blockHelperMissing",function(b,e){var f=e.inverse||function(){},g=e.fn,h=c.call(b);return h===d&&(b=b.call(this)),b===!0?g(this):b===!1||null==b?f(this):"[object Array]"===h?b.length>0?a.helpers.each(b,e):f(this):g(b)}),a.K=function(){},a.createFrame=Object.create||function(b){a.K.prototype=b;var c=new a.K;return a.K.prototype=null,c},a.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,methodMap:{0:"debug",1:"info",2:"warn",3:"error"},log:function(b,c){if(a.logger.level<=b){var d=a.logger.methodMap[b];"undefined"!=typeof console&&console[d]&&console[d].call(console,c)}}},a.log=function(b,c){a.logger.log(b,c)},a.registerHelper("each",function(b,e){var f,g=e.fn,h=e.inverse,i=0,j="",k=c.call(b);if(k===d&&(b=b.call(this)),e.data&&(f=a.createFrame(e.data)),b&&"object"==typeof b)if(b instanceof Array)for(var l=b.length;l>i;i++)f&&(f.index=i),j+=g(b[i],{data:f});else for(var m in b)b.hasOwnProperty(m)&&(f&&(f.key=m),j+=g(b[m],{data:f}),i++);return 0===i&&(j=h(this)),j}),a.registerHelper("if",function(b,e){var f=c.call(b);return f===d&&(b=b.call(this)),!b||a.Utils.isEmpty(b)?e.inverse(this):e.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn})}),a.registerHelper("with",function(b,e){var f=c.call(b);return f===d&&(b=b.call(this)),a.Utils.isEmpty(b)?void 0:e.fn(b)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)});var f=["description","fileName","lineNumber","message","name","number","stack"];a.Exception=function(){for(var a=Error.prototype.constructor.apply(this,arguments),b=0;b<f.length;b++)this[f[b]]=a[f[b]]},a.Exception.prototype=new Error,a.SafeString=function(a){this.string=a},a.SafeString.prototype.toString=function(){return this.string.toString()};var g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},h=/[&<>"'`]/g,i=/[&<>"'`]/,j=function(a){return g[a]||"&amp;"};a.Utils={extend:function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},escapeExpression:function(b){return b instanceof a.SafeString?b.toString():null==b||b===!1?"":(b=b.toString(),i.test(b)?b.replace(h,j):b)},isEmpty:function(a){return a||0===a?"[object Array]"===c.call(a)&&0===a.length?!0:!1:!0}},a.VM={template:function(b){var c={escapeExpression:a.Utils.escapeExpression,invokePartial:a.VM.invokePartial,programs:[],program:function(b,c,d){var e=this.programs[b];return d?e=a.VM.program(b,c,d):e||(e=this.programs[b]=a.VM.program(b,c)),e},merge:function(b,c){var d=b||c;return b&&c&&(d={},a.Utils.extend(d,c),a.Utils.extend(d,b)),d},programWithDepth:a.VM.programWithDepth,noop:a.VM.noop,compilerInfo:null};return function(d,e){e=e||{};var f=b.call(c,a,d,e.helpers,e.partials,e.data),g=c.compilerInfo||[],h=g[0]||1,i=a.COMPILER_REVISION;if(h!==i){if(i>h){var j=a.REVISION_CHANGES[i],k=a.REVISION_CHANGES[h];throw"Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+j+") or downgrade your runtime to an older version ("+k+")."}throw"Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+g[1]+")."}return f}},programWithDepth:function(a,b,c){var d=Array.prototype.slice.call(arguments,3),e=function(a,e){return e=e||{},b.apply(this,[a,e.data||c].concat(d))};return e.program=a,e.depth=d.length,e},program:function(a,b,c){var d=function(a,d){return d=d||{},b(a,d.data||c)};return d.program=a,d.depth=0,d},noop:function(){return""},invokePartial:function(c,d,e,f,g,h){var i={helpers:f,partials:g,data:h};if(c===b)throw new a.Exception("The partial "+d+" could not be found");if(c instanceof Function)return c(e,i);if(a.compile)return g[d]=a.compile(c,{data:h!==b}),g[d](e,i);throw new a.Exception("The partial "+d+" could not be compiled when running in runtime-only mode")}},a.template=a.VM.template}(Handlebars),this.solidus=this.solidus||{},this.solidus.templates=this.solidus.templates||{},Handlebars.registerPartial("index",this.solidus.templates.index=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),d=this.merge(d,a.partials),e=e||{};var f,g,h="",i="function",j=this.escapeExpression,k=this;return h+='\n\n<section class="wrapper">\n	<header class="logo">\n		<h1>'+j((f=b.page,f=null==f||f===!1?f:f.title,typeof f===i?f.apply(b):f))+'</h1>\n	</header>\n	<div class="video_wrapper">\n		',g=k.invokePartial(d.video,"video",b,c,d,e),(g||0===g)&&(h+=g),h+="\n	</div>\n	<footer>\n		<nav>\n			",g=k.invokePartial(d.social,"social",b,c,d,e),(g||0===g)&&(h+=g),h+="\n		</nav>\n	</footer>\n</section>\n"})),Handlebars.registerPartial("layout",this.solidus.templates.layout=Handlebars.template(function(a,b,c,d,e){function f(){return'\n	<!-- Livereload script. Automatically reloads CSS when changed. -->\n	<script src="http://localhost:35729/livereload.js?snipver=1"></script>\n	'}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k="function",l=this.escapeExpression,m=this,n=c.blockHelperMissing;return j+='<!DOCTYPE html>\n<!--[if lt IE 7]><html class="lt-ie9 lt-ie8 lt-ie7"><![endif]-->\n<!--[if IE 7]><html class="lt-ie9 lt-ie8"><![endif]-->\n<!--[if IE 8]><html class="lt-ie9"><![endif]-->\n<!--[if gt IE 8]><!--><html class="no-js"><!--<![endif]-->\n<head>\n\n	<title>'+l((g=b.page,g=null==g||g===!1?g:g.title,typeof g===k?g.apply(b):g))+'</title>\n	<link rel="stylesheet" href="/compiled/styles.css" />\n	<link href=\'http://fonts.googleapis.com/css?family=Oswald:400,300,700\' rel=\'stylesheet\' type=\'text/css\'>\n	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>\n	<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>\n	',i={hash:{},inverse:m.noop,fn:m.program(1,f,e),data:e},(h=c.dev)?h=h.call(b,i):(h=b.dev,h=typeof h===k?h.apply(b):h),c.dev||(h=n.call(b,h,i)),(h||0===h)&&(j+=h),j+="\n	<!-- Site context, made available for use in client side javascript -->\n	<script>",(h=c.context)?h=h.call(b,{hash:{},data:e}):(h=b.context,h=typeof h===k?h.apply(b):h),(h||0===h)&&(j+=h),j+='</script>\n    <script src="/compiled/scripts.js"></script>\n\n</head>\n<body id="page-'+l((g=b.page,g=null==g||g===!1?g:g.name,typeof g===k?g.apply(b):g))+'">\n\n	',(h=c.body)?h=h.call(b,{hash:{},data:e}):(h=b.body,h=typeof h===k?h.apply(b):h),(h||0===h)&&(j+=h),j+="\n\n</body>\n</html>"})),Handlebars.registerPartial("social",this.solidus.templates.social=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'  <div class="facebook icon"><a href="http://www.facebook.com" target="_blank"></a></div>\n  <div class="twitter icon"><a href="http://www.twitter.com" target="_blank"></a></div>\n  <div class="linkedin icon"><a href="http://www.linkedin.com" target="_blank"></a></div>\n  <div class="pinterest icon"><a href="http://www.pintrest.com" target="_blank"></a></div>\n  <div class="instagram icon"><a href="http://www.pintrest.com" target="_blank"></a></div>'})),Handlebars.registerPartial("video",this.solidus.templates.video=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div class="usernames" id="usernames">\n    \n</div>\n<section id="video_player1" class="video_player">\n    <video id="v1">\n        <source src="" type="video/mp4">\n    </video>\n</section>\n<section id="video_player2" class="video_player closed">\n    <video id="v2">\n        <source src="" type="video/mp4">\n    </video>\n</section>\n<section id="video_player3" class="video_player closed">\n    <video id="v3">\n        <source src="" type="video/mp4">\n    </video>\n</section>\n    <!--<div id="video-controls" class="controls">\n        <button type="button" id="play-pause">Play</button>\n        <button type="button" id="mute">Unmute</button>\n        <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1">\n    </div>-->\n    <div class="cover">\n        <div class="play_img" id="play_img"></div>\n        <div class="end_img closed"></div>\n    </div>\n</section>\n<audio id="a">\n  <source src="" type="audio/mpeg">\n</audio>'}));