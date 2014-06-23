var AppView = Backbone.View.extend({
  tagName: 'div',

  template: _.template('<div class="input-container cf"><span><input type="text" id="new-task"></input></span><input type="button" class="button" id="add-task" value="add task"></input></div>'),

  initialize: function() {
    this.model.on('change', this.render, this);
    this.render();
  },


  events: {
    'click #add-task' : 'addTask',
    'click li' : 'deleteTask'
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
