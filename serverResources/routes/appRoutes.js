var triviaQuestion = require('../schemas/triviaQuestions');

exports.postQuestion = function(req, res){
    var trivia = new triviaQuestion();
    trivia.question = req.body.question;
    trivia.answer = req.body.answer;

    trivia.save(function(err){
        if(err){
            return res.send(err);
        }
        return res.json('Question successfully posted');
    });
};

exports.getQuestions = function(req, res){
    triviaQuestion.find({}).then(function(err, questions){
        if(err){
            return res.send(err);
        }
        return res.json(questions);
    });
};
