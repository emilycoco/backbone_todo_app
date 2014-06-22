var AppView = Backbone.View.extend({
  tagName: 'div',

  template: _.template('<span><label for="new-task">Add a Task: </label><input type="text" id="new-task"></input></span><input type="button" id="add-task" value="add task"></input>'),

  initialize: function() {
    this.model.on('change', this.render, this);
    this.render();
  },


  events: {
    'click #add-task' : 'addTask'
  },

  addTask: function() {
    var newTask = $('#new-task').val();
    this.model.list.add([{name: newTask}]);
    $('#new-task').val('');
  },

  render: function() {
    return this.$el.html(this.template).append(this.subRender().render());
  },

  subRender: function() {
    return new ListView({collection: this.model.list});
  }
});
