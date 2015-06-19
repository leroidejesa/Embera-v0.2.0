// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   actions: {
//     save: function() {
//       var newQuestion = this.store.createRecord('question', {
//         questionTitle: this.get('question-title'),
//         author: this.get('author'),
//         description: this.get('description')
//       });
//       newQuestion.save();
//       this.transitionToRoute('questions');
//     }
//   }
// });



import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        questionTitle: this.get('question-title'),
        author: this.get('author'),
        description: this.get('description')
      });
      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});


//
// import Ember from "ember";
//
// var NewQuestionController = {
//   actions: {
//     save: function() {
//       var newQuestion = this.store.createRecord('question', {
//         questionTitle: this.get('question-title'),
//         author: this.get('author'),
//         description: this.get('description')
//       });
//       newQuestion.save();
//       this.transitionToRoute('questions');
//     }
//   }
// };
//
// export default Ember.ObjectController.extend(NewQuestionController);
