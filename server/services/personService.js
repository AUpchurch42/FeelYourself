/**
 * Status Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database.
 */
'use strict';
// Load Chance

import {Person} from '../models/Person.model';


export let getAllPerson = (list, next) => {
  Person.find(list, next);
};

export let createPerson = (p, next) => {
  Person.create(p, next);
};

export let deletePerson = (p, next) => {
  Person.findOneAndRemove(p, next);
};

export let getPerson = (p, next) => {
  Person.findById(p, next);
};

export let putPerson = (id, p, next) => {
  Person.findByIdAndUpdate(id, {$set:p}, next);
};

