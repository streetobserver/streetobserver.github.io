$(document).scroll(sticky);

function sticky() {
    const direct = 'top';
    const target_element = $('nav');
    const menuButton = $('#fix_menu_spacer').offset()[direct] - $('nav').outerHeight();
    // console.log(menuButton, window.scrollY);
    if(window.scrollY - menuButton > 0) {
        target_element.addClass('fix_menu');
    }
    else {
        target_element.removeClass('fix_menu');
    }
}
