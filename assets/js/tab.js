$(function () {
    $.FindContainer = function () {
        $('.tab-content>div').each(function findcontent() {
            var newindex = $('.activetab').index();
            var newheight = $('.activetab').height();
            $('.tab-content').animate({
                'height': newheight+20
            }, 100);
            var otherindex = $(this).index();
            var substractindex = otherindex - newindex;
            var currentwidth = $('.multipletab').width();
            var newpositions = substractindex * currentwidth;
            $(this).animate({
                'left': newpositions
            });
        });
    };
    $.FindId = function () {
        $('.tab-content>div').each(function () {
            if ($(this).attr('id') == $('.active').attr('id')) {
                $('.tab-content>div').removeClass('activetab');
                $(this).addClass('activetab');
            }
        });
    };
    $('.tab-buttons>span').first().addClass('active');
    $('.tab-content>div').each(function () {
        var activeid = $('.active').attr('id');
        if ($(this).attr('id') == activeid) {
            $(this).addClass('activetab');
        }
        var currentheight = $('.activetab').height();
        var currentwidth = $('.multipletab').width();
        var currentindex = $(this).index();
        var currentposition = currentindex * currentwidth;
        $(this).css({
            'left': currentposition,
                'width': currentwidth - 40,
                'padding': '10px 20px'
        });
        $(this).attr('data-position', currentposition);
        $('.tab-content').css('height', currentheight+20);
    });
    $('.tab-buttons>span').click(function () {

        $('.tab-buttons>span').removeClass('active');
        $(this).addClass('active');
        var currentid = $('.active').attr('id');
        $.FindId();
        $.FindContainer();
    });
});