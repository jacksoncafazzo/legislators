import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
   var url = 'http://congress.api.sunlightfoundation.com/bills?history.awaiting_signature=true&apikey=a9c257b102d6474f89312633237f65aa';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON);

     return responseJSON;
   });
 },
});
