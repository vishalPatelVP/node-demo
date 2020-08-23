var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{ type:String,require:true},
    email:{ type:String, require:true,unique:true},
    password: { type: String},
    phone: {type:String},
    hobbies:[{type:String}]
});

var User = mongoose.model('User', userSchema);
module.exports = User;