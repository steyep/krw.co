Template.nav.helpers({
  'categories': function(){
    var uniq = _.uniq(Products.find().fetch(), false, function(s) {return s.category});
    return uniq;
  }
});

Template.nav.events({
  'click nav a': function(){
    var href = event.target.getAttribute('href');
    if (href != "#" && href != "#footer") {
      $('nav a').removeClass('current-page');
      $(event.target).addClass('current-page');
    }
  },
});
