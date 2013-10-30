$(window).load(function () {

    var tabs = $('#tabs li');
    var links = $('#tabs li a');
    var content = $('#content');

    links.click(function (e) {

        e.preventDefault();

        var link = $(this);
        var parent = link.parent();
        if (parent.hasClass('current')) {
            return;
        }

        $('#content iframe').hide('slow');

        var pagid = 'page-' + parent.index();
        if ($('#' + pagid).length == 0) {

            var page = $('<iframe style="width:100%"></iframe>');
            page.attr('src', link.attr('href'));
            page.attr('id', pagid);
            content.append(page);

        } else {

            var page = $('#' + pagid);
            page.show('slow');
        }

        // Visual
        tabs.removeClass('current');
        parent.addClass('current');
    });
});
