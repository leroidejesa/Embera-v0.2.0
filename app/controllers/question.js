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
