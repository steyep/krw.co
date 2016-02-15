Meteor.startup(function(){
  // Add default products
  if (!Products.find().count()){
    for(var i=1; i<=67; i++) {
      var cats = ['alphabet','prints', 'bundles'] 
      var cat = cats[i%cats.length];
      Products.insert({
        'name': i,
        'title': cat + ' ' + i,
        'description': 'Description' + i,
        'category': cat,
        'price': '$50'
      });
    }
  }
});