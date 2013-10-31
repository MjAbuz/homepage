$(window).load(function () {

    var tabs = $('ul.tabs li');
    var links = $('ul.tabs li a');
    var content = $('div#content');

    // iframe show function
    function showIframe(pageid, url) {

        if ($('#' + pageid).length == 0) {

            var page = $('<iframe style="width:100%"></iframe>');
            page.attr('src', url);
            page.attr('id', pageid);
            page.hide();
            content.append(page);
            page.fadeIn('slow');

        } else {

            var page = $('#' + pageid);
            page.fadeIn('slow');
        }
    }

    // Click callback
    links.click(function (e) {

        e.preventDefault();

        var link = $(this);
        var parent = link.parent();
        if (parent.hasClass('current')) {
            return;
        }

        var url = link.attr('href');
        var pageid = 'page-' + parent.index();
        var visible = $('div#content iframe:visible');
        if (visible.length == 0) {
            showIframe(pageid, url);
        } else {
            visible.fadeOut('slow', showIframe(pageid, url));
        }

        // Visual
        tabs.removeClass('current');
        parent.addClass('current');
    });

    // Set first page
    links.first().click();
});
