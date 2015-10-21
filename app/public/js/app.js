/**
 * Created by Administrator on 15-10-20.
 */
var app = angular.module('myApp', []);
app.controller('formCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.save = function () {
        var options = {
            url: '/user',
            method: 'POST',
            data: $scope.user
        };
        console.log($scope.user);
        $http(options).success(function (data) {
            console.log(data);
        }).error(function (msg) {
                console.log(msg);
            });
    };
}]);