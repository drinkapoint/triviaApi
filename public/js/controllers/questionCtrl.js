angular.module('triviaQuestionApp')
    .controller('triviaCtrl', function($scope, questionService){
        $scope.submit= function(){
            questionService.postQuestion($scope.question,$scope.answer).then(function(res){
                alert('question submitted, click on the api link to see full json stuffy stuff');
            });
        };
    });
