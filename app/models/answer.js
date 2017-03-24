import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  upvote: DS.attr('number', { defaultValue: 1 }),
  question: DS.belongsTo('question', { async: true })
});
