angular.module('triviaQuestionApp')
    .service('questionService', function($http){
        this.postQuestion = function(question, answer){
            return $http({
                method:"POST",
                url:"http://drinkpointtriviapi.herokuapp.com/api/questions",
                data:{
                    'question':question,
                    'answer':answer
                }
            });
        };
    });
