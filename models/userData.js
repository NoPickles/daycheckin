var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    code    : Boolean,
    gym     : Boolean,
    date    : String

});


module.exports = mongoose.model('userLog', userSchema);