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
        link: function (scope, element, attrs) {
            element.bind('keydown', function () {
                var val = element.val();
                var minl = attrs['zfMinlength'];
                if (!val || val.length < 6) {
                    scope.myform.username.$invalid = false;
                    scope.myform.username.$error['zfMinlength'] = '长度不能小于' + minl;
                    console.log('ddd');
                } else {
                    scope.myform.username.$error['zfMinlength'] = null;
                    scope.myform.username.$invalid = true;
                }
            });
        }
    };
});
/***
 * 唯一用户名的校验
 */
app.directive('zfUnique', function ($http) {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            scope.$watch(attrs.ngModel, function () {
                var options = {
                    url: '/check',
                    method: 'POST',
                    data: {usernick: scope.user.usernick}
                };
                $http(options).success(function (data, status, headers, config) {
                    console.log(data);
                    ngModelCtrl.$setValidity('unique', !data.exists);
                }).error(function (msg) {
                        console.log(msg);
                    });
            });
        }
    };
});