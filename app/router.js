import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', { path: '/results/:zip' });
  this.route('parties', { path: '/parties/:state'});
  this.route('awaiting-signature');
});

export default Router;
