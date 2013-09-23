var lmuSlider = {

	jQuery: $,

	options: {
		play: 6000,
		height: 200,
		width: 535,
		selectorId: "#slides_1",
		effect: "slide",
		pagination: 'pagination',
                pause: 6000
		},
		
	init: function(config) {
	
		var lmuSlider = this,
			$=this.jQuery;
	
		$.extend( lmuSlider.options,config);
		var mySlider = $( lmuSlider.options.selectorId);
		
		$('.mod-slidesjs').css({width:  lmuSlider.options.width + 'px'});
		
		mySlider.find('.slides-container').css({
			display: 'none', 
			height:  lmuSlider.options.height + 'px', 
			width:  lmuSlider.options.width + 'px', 
			margin: '0'
		});
		mySlider.find('.slide').css({height:  lmuSlider.options.height + 'px'});
		
		mySlider.slides({
			play: lmuSlider.options.play,
			container: 'slides-container',
			preload: true,
			generateNextPrev: true,
			effect:  lmuSlider.options.effect,
			paginationClass: lmuSlider.options.pagination,
			hoverPause: true,
			crossfade: true,
                        pause: lmuSlider.options.pause
		});
		
		var $paginationBullet = $('.pagination_bullet');
		var $paginationList = $paginationBullet.find('li');
		$paginationList.find('a').html('&bull;');
		
		/*var $paginationBullet = $('.pagination_bullet');
		var $paginationSize = $paginationBullet.find('li');
		$paginationBullet.css({paddingLeft: (lmuSlider.options.width - ( $paginationSize.length * 25)) / 2 + 'px' });*/
	}
}