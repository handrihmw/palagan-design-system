$(document).ready(function() { 
    new Clipboard('.palette');

    $(".palette").click(function (e) {
    
        console.log('clicked');
        
        // Remove any old one
        $(".ripple").remove();
        $(".copied").remove();

        // Setup
        var width = $(this).width();
        var height =  $(this).height();
        
        console.log(width);
        console.log(height);
        
        // Add the element
        $(this).prepend("<span class='copied'>Copied!</span>");
        $(this).prepend("<span class='ripple'></span>");
        
        // Add the ripples CSS and start the animation
        $(".ripple").css({
            width: width,
            height: height,
            top: width/2,
            left: height/2,
        }).addClass("rippleEffect");
        
        $(".copied").css({
        }).addClass("copiedEffect");
    });
});