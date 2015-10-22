var app = angular.module('myApp', []);
/***
 * Ctrl1
 */
app.controller('InCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.hello = {html: 'hello.html'};
}]);
app.controller('OpenCtrl', function ($scope) {
    $scope.title = "hello";
    $scope.content = "ddddddddddddd";
    $scope.show = false;
    $scope.toogle = function () {
        $scope.show = !$scope.show
    };
});
app.directive('opener', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        templateUrl: 'open.html',
        link: function (scope, element, attrs) {

        }
    };
});