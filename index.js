const { faker } = require('@faker-js/faker');
const _ = require('lodash');

console.log(faker.person.fullName());
console.log(_.chunk([1, 2, 3, 4, 5, 6], 2));
console.log(_.capitalize('hola mundo'));
