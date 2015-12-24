// Seed the database with random data

if (Todos.both.collections.Todos.find().count() === 0) {
  console.log("Seeding database")

  for (let i = 0; i < 5; i++) {
    Todos.both.collections.Todos.insert({
      title: Fake.sentence(Math.floor(Math.random() * 3) + 3),
      content: Fake.sentence(Math.floor(Math.random() * 40) + 10),
      user: Fake.user().fullname
    })
  }
}
