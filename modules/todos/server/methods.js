// Server only methods

Meteor.methods({
  'Todos.addFive'(){
    // Add 5 random items to todos
    console.log("adding 5 random todos")
    for (let i = 0; i < 5; i++) {
      Todos.both.collections.Todos.insert({
        title: Fake.sentence(Math.floor(Math.random() * 3) + 3),
        content: Fake.sentence(Math.floor(Math.random() * 40) + 10),
        user: Fake.user().fullname
      })
    }
  }
})
