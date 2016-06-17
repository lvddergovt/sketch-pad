$(document).ready(function() {
    init();
});

function init () {

    $('button').on('click', function() {
        $(this).remove();
        // create container div
        $('body').append('<div id="container"</div>');

        // set the height and width of the canvas
        var height = prompt("Enter height: ");
        var width = prompt("Enter width: ");

        // container height with ul's
        for (var i = 0; i < width; i++) {
            $('#container').append("<ul></ul>");
        }

        // fill ul with li for width
        for (var j = 0; j < height; j++) {
            $('ul').append('<li class="pixel"></li>');
        }

        $('.pixel').mouseenter(function() {
            $(this).addClass('bg-color');
        });
    });
}
