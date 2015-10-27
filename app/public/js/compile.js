/**
 * Created by Administrator on 15-10-21.
 */
/**
 * Created by Administrator on 15-10-21.
 */
var app = angular.module('myApp', []);
app.controller('OpenCtrl', function ($scope) {
    $scope.words = 'hello';
});
app.directive('times', ['$http', function ($http) {
    return{
        restrict: 'A',
        /***
         *
         * @param element 当前的div
         * @param attrs
         * @param transclude  <p>{{words}}</p>
         */
        compile: function (element, attrs, transclude) {
            //对标签的模板进行转换
            var tpl = element.children();
            for (var i = 0; i < attrs.times - 1; i++) {
                var w = tpl.clone();
                if (i % 2 == 0) {
                    w.addClass('red');
                    w.bind('click', function () {
                        console.log(w.html());
                    });
                }
                element.append(w);
            }
            console.log('compile');
            //返回link函数
            return function (scope, element, attrs, controller) {
                console.log('link');
            };
        }
    };
}]);