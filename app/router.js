import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: ':question_id'}, function() {
    this.resource('new-answer');
  });
  this.resource('new-question');
  this.resource('recent-answers');
  this.resource('about');
});

export default Router;
