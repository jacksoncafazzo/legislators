import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

   var url = 'http://politicalpartytime.org/api/v1/event/?format=json&beneficiaries__state='+ params.state + '&apikey=a9c257b102d6474f89312633237f65aa';

   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON;
   });
 },
});
