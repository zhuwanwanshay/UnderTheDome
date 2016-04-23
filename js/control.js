/*悬浮导航*/
	var name = "#floatMenu";
	var menuYloc = null;
	
		$(document).ready(function(){
			menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
			$(window).scroll(function () { 
				offset = menuYloc+$(document).scrollTop()+"px";
				$(name).animate({top:offset},{duration:500,queue:false});
			});
		}); 
/*登陆 注册*/
	jQuery(document).ready(function($){							
		$('#ads_close').click(function(e){
			$('#ads_box').fadeOut();
			e.preventDefault();
		});
	});
