var ListView = Backbone.View.extend({
  tagName: 'ul',

  initialize: function() {
    this.collection.on('change', this.render, this);
  },

  events: {
    'dblclick li' : 'edit'
  },

  edit: function() {
    this.collection.add([{name: 'go on vacay'}])
  },

  render: function() {
    this.$el.children().detach();
    _.each(this.collection.models, function(task) {
      var taskView = new TaskView({model: task});
      this.$el.append(taskView.render());
    }, this);
    return this.el;
  }
})
