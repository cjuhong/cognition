/* Fancybox */
$(document).ready(function() {

    /* Apply fancybox to multiple items */
    
    $("a#zoom-bild").fancybox({
        'hideOnContentClick': true,
        'titleShow': false
        /*'transitionIn' : 'elastic',
        'transitionOut' : 'elastic',
        'speedIn' : 600, 
        'speedOut' : 200, 
        'overlayShow' : false*/
    });
    
    $("a.zoom-bild").fancybox({
        'hideOnContentClick': true,
        'titlePosition' : 'inside',
        'titleShow': true
    });
    
    $("a.zoom-bildstrecke").fancybox({
        'transitionIn' : 'none',
        'transitionOut' : 'none',
        'titlePosition' : 'inside',
        'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-inside">Bild ' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
        }
    });
    
    $('.zoom-bild img').before('<div class="m-zoom-icon">Zum Vergrößern klicken</div>');
    
});