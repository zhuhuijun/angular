var app = angular.module('myApp', []);
app.controller('FormCtrl', function ($scope) {
    $scope.user = {
        username: 'zhj',
        userpwd: 'zhj'
    };
    $scope.save = function () {
        console.log($scope.user.username, $scope.user.userpwd);
    };
});
app.directive('zfMinlength', function () {
    return {
        restrict: 'A',
        link:function(scope,element,attrs){
            
        }
    };
});