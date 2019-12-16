
//jshint esversion:6

const mongoose = require('mongoose');



// Connection URL
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review:String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name:"Apple",
  rating: 7,
  review: "Pretty solid"

});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const Person = mongoose.model("person", personSchema);

const person = new Person({
  name: "John",
  age: 37
})

person.save();

fruit.save();



