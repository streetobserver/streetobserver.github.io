$(document).scroll(fixedNav);

function fixedNav() {
  const menuButton = $('#fix_menu_spacer').offset().top - $('nav').outerHeight();
  console.log(menuButton, window.scrollY);
  if(window.scrollY > menuButton) {
    $('nav').addClass('fix_menu');
  }
  else {
    $('nav').removeClass('fix_menu');
  }
}
