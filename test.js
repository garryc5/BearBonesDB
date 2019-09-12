var t = require('./db/test1');
t.new_({user:'joe',age:29});
t.grabByID(1).ssn = '101293';
t.grabByID(1).dopeness = 'af';
t.new_({user:'mr.lil',working:'yes'});
console.log(t.grabByID(1));
console.log(t.grabAll());
t.deleteByID(1);
t.save();
