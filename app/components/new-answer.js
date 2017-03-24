import Ember from 'ember';

export default Ember.Component.extend({
  answerFormShow: false,
  actions: {
    showAnswerForm(){
      this.set('answerFormShow', true);
    },
    saveAnswer(){
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.set('answerFormShow', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
