// Must include jquery and jquery color

$(document).ready(function() {
  
    var scroll_pos = 0;
    var animation_begin_pos = 0; //where you want the animation to begin
    var animation_end_pos = 4000; //where you want the animation to stop
    var beginning_color = new $.Color( '#B5E5F5' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
    var ending_color = new $.Color( '#001547' );//what color we want to use in the end
  
    $(document).scroll(function() {
      
        scroll_pos = $(this).scrollTop();

        var landpush = 0 - (scroll_pos * 1.2);
        $('#land').css('bottom', landpush);

        var cloudpush = 0 + (scroll_pos * 1.18);
        $('#clouds').css('top', cloudpush);

        var shippush = 20 + scroll_pos * 0.05;
        $('#ship').css('bottom', shippush);

        var treetwist1 = scroll_pos / 20;
        var treetwist2 = scroll_pos / 30;
        var treetwist3 = scroll_pos / 40;

        $('#tree1').css('-webkit-transform', 'rotate(-' + treetwist1 + 'deg)');
        $('#tree2').css('-webkit-transform', 'rotate(-' + treetwist3 + 'deg)');
        $('#tree3').css('-webkit-transform', 'rotate(' + treetwist3 + 'deg)');
        $('#tree4').css('-webkit-transform', 'rotate(' + treetwist2 + 'deg)');
        $('#tree5').css('-webkit-transform', 'rotate(' + treetwist1 + 'deg)');

        // $('#smoke1').css('animation', 'smoke1 3s ease');
        // $('#smoke1').css('animation-fill-mode', 'forwards');
      
        if (scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 

            //we want to calculate the relevant transitional rgb value
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            
            $('body').animate({ backgroundColor: newColor }, 0);

        } else if ( scroll_pos > animation_end_pos ) {

             $('body').animate({ backgroundColor: ending_color }, 0);

        } else if ( scroll_pos < animation_begin_pos ) {

             $('body').animate({ backgroundColor: beginning_color }, 0);

        } else { }

        if (scroll_pos > 700) {
            $('.smoketrail').css({
                'animation': 'smokefadein 2s linear',
                'animation-fill-mode': 'forwards'
            });
        }

        if (scroll_pos > 3900) {

            $('#flamebody').css({
                'animation': 'flamefade 2s linear',
                'animation-fill-mode': 'forwards'
            });

            $('#ship').css({
                'animation': 'shipspin 25s linear',
                'animation-fill-mode': 'forwards'
            });

            $('.part1').css({
                'animation': 'textfade 2s linear 2s',
                'animation-fill-mode': 'forwards'
            });

            $('.part2').css({
                'animation': 'textfade 2s linear 5s',
                'animation-fill-mode': 'forwards'
            });

            $('.smoketrail').css({
                'animation': 'smokefadeout 1s linear',
                'animation-fill-mode': 'forwards'
            });

        }
    });
  
});