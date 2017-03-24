import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionFormShow: false,
  actions: {
    showUpdateQuestionForm(){
      this.set('updateQuestionFormShow', true)
    },
    update(question){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        note: this.get('note')
      };
      this.set('updateQuestionFormShow', false);
      this.sendAction('update', question, params);
    }
  }
});
