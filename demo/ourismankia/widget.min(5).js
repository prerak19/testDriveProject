$(document).ready(function(){var o=$(".page-header,.container-header,.header"),e=o.find(".header-logo"),t=function(o){var e=o.height();return logoHeight=o.find(".dealer-path-override-img:last").height(),topValue=Math.floor((e-logoHeight)/2)},a=function(o,e){o.css("top",e+"px")};o.attr("role","header"),e.length&&(sessionStorage.logoTopVal?a(e,sessionStorage.logoTopVal):$(window).on("load",function(){(999==Math.abs(parseInt(e.css("top").replace("px","")))||"auto"==e.css("top"))&&(topVal=t(o),a(e,topVal),sessionStorage.setItem("logoTopVal",topValue))}))});