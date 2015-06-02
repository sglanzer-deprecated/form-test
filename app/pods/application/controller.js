import Ember from 'ember';

export default Ember.Controller.extend({
  form: {
    checkboxA: {alias: 'Checkbox A'},
    checkboxB: {alias: 'Checkbox B'},
    text: {
      validators: [function(value) { return value === 'test'}]
    }
  },

  formCheckboxObserver: function() {
    this.set('form.text.hidden',
      this.get('form.checkboxA.value') !== true &&
      this.get('form.checkboxB.value') !== true
    );
  }.observes('form.checkboxA.value', 'form.checkboxB.value').on('init'),

  actions: {
    formValueChange: function(id, value) {
      this.set(id + '.value', value);
    }
  }
});
