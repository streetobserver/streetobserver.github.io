$(document).scroll(sticky);

function sticky() {
    const direct = 'top';
    const target_element = $('nav');
    const menuTop = $('nav').offset()[direct];
    const menuBottom = $('nav').offset()[direct];
    const spacerTop = $('#fix_menu_spacer').offset()[direct];
    console.log(window.scrollY, menuBottom, spacerTop);
    if(window.scrollY > menuTop) {
        target_element.addClass('fix_menu');
    }
    else if (window.scrollY < spacerTop){
        target_element.removeClass('fix_menu');
    }
}
