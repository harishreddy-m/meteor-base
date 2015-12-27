Todos.both.collections.Todos = new Mongo.Collection('todos')

Todos.both.collections.TodosSchema = new SimpleSchema({
	title: {
		type: String,
		max: 50,
		optional: true
	},
	content: {
		type: String,
		max: 1000,
		optional: true
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
		optional:true
	}
})

Todos.both.collections.Todos.attachSchema(Todos.both.collections.TodosSchema)
