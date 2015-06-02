import Ember from 'ember';

// https://github.com/emberjs/ember.js/blob/v1.12.0/packages/ember-views/lib/views/checkbox.js#L10
export default Ember.Component.extend({
  tagName: 'input',
  classNames: ['input', 'frost-checkbox'],
  attributeBindings: [
    'type'
  ],

  type: 'checkbox',

  formValueChange: 'formValueChange',
  valueChange: function() {
    this.sendAction('formValueChange', this.get('elementId'), this.$().prop('checked'));
  },

  changeObserver: function() {
    this.on('change', this, this.valueChange);
  }.on('willInsertElement')
});
