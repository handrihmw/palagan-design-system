$(document).ready(function(){
    $(".collapse.show").each(function(){
        $(this).prev(".card__box").find(".fa").addClass("fa-angle-up").removeClass("fa-angle-down");
    });

    $(".collapsed").on('show.bs.collapse', function(){
        $(this).prev(".card__box").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card__box").find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    });
});