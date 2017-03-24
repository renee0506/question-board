import Ember from 'ember';

export default Ember.Component.extend({
  questionFormShow: false,
  actions: {
    showQuestionForm(){
      this.set("questionFormShow", true)
    },
    saveQuestion(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        note: this.get('content')
      };
      this.set('questionFormShow', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
