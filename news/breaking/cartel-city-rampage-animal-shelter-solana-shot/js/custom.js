jQuery.noConflict();

(function($) {
"use strict";
	/*
	Thanks the code for http://www.queness.com/
	*/
	jQuery(document).ready(function(){
	
// TAB LATEST, POPULAR, COMMENTS 	
		$('#mask').css({'height':$('#panel-1').height()});
		$('#panel').width(parseInt($('#mask').width() * $('#panel div').length));
		$('#panel div').width($('#mask').width());
		$('a[rel=alternate]').click(function () {
			var panelheight = $($(this).attr('href')).height();
			$('a[rel=alternate]').removeClass('selected');
			$(this).addClass('selected');
			$('#mask').animate({'height':panelheight},{queue:false, duration:500});
			$('#mask').scrollTo($(this).attr('href'), 800);
			return false;
		});
//	J MODULE 5 HOTNEWS
			if( $('#carmod5').length ){
				$('#carmod5').carouFredSel({
					responsive: true,
					prev: '#prevmod5',
					next: '#nextmod5',
			        direction : "up",	
					auto: true,
					scroll: {
					duration: 750,
					pauseOnHover: true	
						},
					items: {
					height: 'variable',					
					visible: {
						min: 1,
						max: 1
						}
					}
				});
			}
//	progress bar
$(document).ready(function () {
    $('.bar span').each(function () {
        var $percent = $(this).data('width') * 0.8;
        $(this).animate({
            width: $percent + "%"
        }, {
            duration: 5000
        });
    });
});	
		
//	j MODULE 6 Carousel post by category
$('.carcat').each(function(i) {
	var newClass = 'newClass' + i;
	var newNext = 'nextNew' + i;
	var newPrev = 'prevNew' + i;

	$(this).addClass(newClass)
		.parent().find('.next6')
		.addClass(newNext);

	$(this).parent().find('.prev6')
		.addClass(newPrev);

	$('.' + newClass).carouFredSel({
		responsive: true,
		prev: '.' + newPrev,
		next: '.' + newNext,
		auto: true,
		scroll: {
		fx : "crossfade",	
		duration: 750,
		pauseOnHover: true
		},
		items: {
			height: 'variable',
			width: '100',			
		visible: {
			min: 1,
			max: 1
      }
    }

  });
});
//	CREATE COLUMNS
	$('.module5b-column,.module25-article, .module30-content').columnize({
		width:400,
		columns : 4,
		buildOnce : true,
		lastNeverTallest: true
	
	});
	$('.module9-content').columnize({
		width:400,
		columns : 2,
		lastNeverTallest: true
	});			
			



function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//	ADD SPAN TO MONTH ON CALENDAR
	$('#wp-calendar > caption').each(function(){
	var featureTitle = $(this);
		featureTitle.html( featureTitle.text().replace(/(^\w+)/,'<span>$1</span>') );
	});
//EQUAL THE HEIGHT on MODULE 4  
	var div_one_width = $(".module4-left").width(); //get the first div width
	var div_one_height = $(".module4-left").height(); // get the second div height.
	$(".module4-right").css({"height":div_one_height+'px'}) 

	var div_one_width = $(".module5-bottomleft").width(); //get the first div width
	var div_one_height = $(".module5-bottomleft").height(); // get the second div height.
	$(".module5-bottomright2").css({"height":div_one_height+'px'}) 	

//EQUAL THE HEIGHT on MODULE 4  
	var div_one_width = $(".module4-left").width(); //get the first div width
	var div_one_height = $(".module4-left").height(); // get the second div height.
	$(".module4-right").css({"height":div_one_height+'px'}) 

//EQUAL THE HEIGHT on MODULE 31  
	var div_one_width = $(".module31-left").width(); //get the first div width
	var div_one_height = $(".module31-left").height(); // get the second div height.
	$(".module31-right").css({"height":div_one_height+'px'}) 	

				
  });				
})(jQuery);
