/**
 * Created by Administrator on 15-10-21.
 */
var app = angular.module('myApp', []);
app.controller('StartCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.score=0;
}]);