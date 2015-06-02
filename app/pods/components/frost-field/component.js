import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['frost-field'],

  fieldModel: function() {
    var fieldModel = Ember.Object.create(this.get('model'));
    fieldModel.set('id', this.get('modelBinding._label'));
    return fieldModel;
  }.property(),

  formValueChange: 'formValueChange',
  actions: {
    formValueChange: function(id, value) {
      this.sendAction('formValueChange', id, value);
    }
  }
});
