const test = require('tape'); // eslint-disable-line
const Formic = require('../index.js');

test('basic form test', function (t) { // eslint-disable-line
  let f = new Formic.FormFor("user");
  f.klass('hello')
  console.log(f.toString());
  t.end();
});
