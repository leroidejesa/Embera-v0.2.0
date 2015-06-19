import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var newDate = new Date();
      var answer = this.store.createRecord('answer', {
        text: this.get('text'),
        user: this.get('user'),
        date: newDate
      });

      var question = this.get('controllers.question.model');
      answer.save().then(function() {
        question.get('answers').pushObject(answer);
        question.save();
      });

      this.transitionToRoute('question', question.id);
    }
  }
});
