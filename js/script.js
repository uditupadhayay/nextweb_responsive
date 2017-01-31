$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 32)
    {
      $('.site-nav').addClass('no-display');
      $('.news-cat-nav').addClass('fixed-news-nav');
      $('.header-tnw-logo').addClass('bring-inl-block');
    }
    else {
      $('.site-nav').removeClass('no-display');
      $('.news-cat-nav').removeClass('fixed-news-nav');
      $('.header-tnw-logo').removeClass('bring-inl-block');
    }
  });

  $('#alternate-menu-but').click(function(){
    $('.site-nav').addClass('no-display');
    $('.news-cat-nav').addClass('no-display');
    $('main').addClass('no-display');
    $('footer').addClass('no-display');
    $('.wrapper').addClass('no-display');
    $('#alt-menu').removeClass('no-display');
  }
  );

  $('#close-alt-menu').click(function(){
    $('#alt-menu').addClass('no-display');
    $('.site-nav').removeClass('no-display');
    $('.news-cat-nav').removeClass('no-display');
    $('main').removeClass('no-display');
    $('footer').removeClass('no-display');
    $('.wrapper').removeClass('no-display');
  });
});
