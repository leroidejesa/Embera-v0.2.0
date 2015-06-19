import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
      }
    }
  }
});
