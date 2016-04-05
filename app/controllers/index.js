import Ember from 'ember';

export default Ember.Controller.extend({
  isModalShown: false,
  actions: {
    toggleModal(){
      console.log(this.isModalShown);
      this.toggleProperty('isModalShown');
    }
  }
});
