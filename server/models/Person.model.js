"use strict";
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
//gender, first name, last name, age, school, job, email, password, statuses
let PersonSchema = new Schema({
  feeling: {type: String, required: true},
  date: {type: Date, default: Date.now}
});

// the schema is useless so far
// we need to create a model using it
export let Person = mongoose.model('Person', PersonSchema);
