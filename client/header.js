Template.header.events({
  'click a': function(){
    var href = event.target.getAttribute('href');
    
    if (href == '#footer') { // footer link?
      var dist = $('#wrapper').css('top');
      var open = (dist == 'auto' | dist == '0px');
      $('#wrapper').animate({
          top: (390 * open) + 'px'
        }, 600, ['easeOutQuint','easeInBack'][open]); 
      $('#site-header').toggleClass('open');
      $('#main').toggleClass('lose-focus');
    }
  },
  'click a.filter': function(){
    var href = event.target.getAttribute('href').replace('#','.');
    if (href == '.all') {
      href = '*';
    }
    $grid.isotope({ filter: href});
  },
  'mouseenter #header': function(){
      $('.logo a').animate({
       textIndent: '110px'
      }, 400);
  },
  'mouseleave #header': function(){
      $('.logo a').animate({
        textIndent: '-999px'
      }, 400);
  },
});