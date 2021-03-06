import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newDate = new Date();
      var newQuestion = this.store.createRecord('question', {
        questionTitle: this.get('question-title'),
        author: this.get('author'),
        description: this.get('description'),
        date: newDate
      });
      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});
