// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   actions: {
//     edit: function() {
//       this.set('isEditing', true);
//     },
//     save: function() {
//       this.set('isEditing', false);
//     },
//     delete: function() {
//       if (confirm('Are you sure?')) {
//         this.get('model').destroyRecord();
//       }
//       this.transitionToRoute('questions');
//     }
//   }
// });


import Ember from "ember";

var QuestionController = {
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    delete: function() {
      if (confirm("Are you sure?")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },
    doneEditing: function() {
      this.get('model').save();
      this.set('isEditing', false);
    }
  }
};

export default Ember.ObjectController.extend(QuestionController);
