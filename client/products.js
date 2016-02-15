Meteor.subscribe('products');

Template.products.rendered = function () {
    $grid = $('#grid').isotope({
      itemSelector: '.grid-item',
      sortBy: 'random',
      percentPosition: true,
      masonry: {
        // columnWidth: '.grid-item-wrapper',
        isFitWidth: true,
        containerStyle: null,
      }
  });
  // Meteor.defer(function(){
  //   $('#grid').isotope('reloadItems');
  //   $('#grid').isotope({filter: '*'});
  // });
};

Template.product.rendered = function() {
  $('#grid').isotope('reloadItems');
  $('#grid').isotope({filter: '*'});
  $('nav a.filter').first().addClass('current-page');
}

Template.products.helpers({
  'products': function () {
    return Products.find({}, {sort: {name: 1}})
  }
});