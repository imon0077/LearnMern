//console.log('Hello from NPM!');

var _ = require('lodash');

var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
   
  //const result =  _.find(users, function(o) { return o.age < 40; });   // => object for 'barney'
  //console.log(result);

  const newresult = _.find(users, (u) => { return u.age < 40 });
  console.log(newresult);

