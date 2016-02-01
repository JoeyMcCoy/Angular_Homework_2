var app = angular.module('tutorialsList',[]);
$http.get('tutorials.json').success(function(data) {
    $scope.tutorials = data;
});
tutorialsList.controller('TutorialCtrl', function ($scope, $http) {
   $http.get('tutorials.json').success(function(data) {
       $scope.tutorials = data;
   });
});