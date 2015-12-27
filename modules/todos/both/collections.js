Todos.both.collections.Todos = new Mongo.Collection('todos')

Todos.both.collections.TodosSchema = new SimpleSchema({
	title: {
		type: String,
		max: 80
	},
	content: {
		type: String,
		max: 1000
	},
  user: {
    type: String,
    max: 60
  },
  createdAt: {
		type: Date,
		autoValue: function() {
			return new Date()
		},
	}
})

Todos.both.collections.Todos.attachSchema(Todos.both.collections.TodosSchema)
