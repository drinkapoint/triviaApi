var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var triviaQuestionSchema = new Schema({
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('triviaQuestion', triviaQuestionSchema);
