$('i[rel="pre"]').replaceWith(function() {
    return $('<pre><code>' + $(this).html() + '</code></pre>');
});

var pres = document.querySelectorAll('pre,kbd,blockquote');
for (var i = 0; i < pres.length; i++) {
    pres[i].addEventListener("dblclick", function () {
        var selection = getSelection();
        var range = document.createRange();
        range.selectNodeContents(this);
        selection.removeAllRanges();
        selection.addRange(range);
    }, false);
}

$(document).ready(function() {
    $('[data-toggle="collapse"]').click(function() {
    $(this).toggleClass( "active" );
        if ($(this).hasClass("active")) {
            $(this).html('<i class="fa fa-code" aria-hidden="true"></i> Hide Code');
        } else {
            $(this).html('<i class="fa fa-code" aria-hidden="true"></i> Show Code');
        }
    });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
});