// Server only methods

Meteor.methods({
  'Todos.addFive' () {
    // Add 5 random items to todos
    if (Todos.both.collections.Todos.find().count() <= 25) {
      console.log("adding 5 random todos")
      for (let i = 0; i < 5; i++) {
        Todos.both.collections.Todos.insert({
          title: Fake.sentence(Math.floor(Math.random() * 3) + 3),
          content: Fake.sentence(Math.floor(Math.random() * 40) + 10),
          user: Fake.user().fullname
        })
      }
    } else {
      console.log("Too many items")
    }
  }
})
