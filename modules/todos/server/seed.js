// Seed the database with random data

if (Todos.both.collections.Todos.find().count() === 0) {
  console.log("Seeding database")
  Meteor.call('Todos.addFive')
}
