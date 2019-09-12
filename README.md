# Welcome to NOdeSQL
## this is ment to be a local lite weight database
### to settup add packet to any node project 
- then in the db folder and the models you want 
- by running setup.NewModel('model_name');
- for all the models you would like 
- once this is done in the termainal run $ node db/setup.js
### now you have models!!!
## next
you can look in test.js to see some of the things you can do
first you will need to require the model var Access_var = require('db/model_name'); from there you can
- Access_var.new_(new_obj) adds obj to db
- Access_var.grabByID(id_num) returns obj from db note: you can change the obj see test.js for exsample
-  Access_var.grabALL() returns all obj in model
-  Access_var.deleteByID(id_num) deletes obj with id of
-  Access_var.save() save any changes to model if you remove t.save() from test and run it when you run test 2 it wont have the changes

