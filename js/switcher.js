jQuery(document).ready(function(e){e(".preset-list li a").on("click",function(o){o.preventDefault();var t=e(this).data("color"),o="css/presets/"+t+".css";logoSrc="img/presets/"+t+"/logo.png",e("#logo img").attr("src",logoSrc),e("#preset").attr("href",o)}),e(".toggoler").on("click",function(){e(this).toggleClass("hide-icon"),e(".style-chooser").toggleClass("active")})});
