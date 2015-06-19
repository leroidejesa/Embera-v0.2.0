import DS from 'ember-data';

export default DS.Model.extend({
  questionTitle: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('date'),
  author: DS.attr('string'),
  answers: DS.hasMany('answer', {async: true})
});
