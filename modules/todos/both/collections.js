Todos.both.collections.Todos = new Mongo.Collection('todos')

Todos.both.collections.TodosSchema = new SimpleSchema({
	title: {
		type: String,
		max: 50,
		label: 'Title'
	},
	content: {
		type: String,
		max: 1000,
		label: 'Content'
	},
  user: {
    type: String,
		label: 'Username',
    max: 60,
		optional: true
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
