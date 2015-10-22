/**
 * Created by Administrator on 15-10-21.
 */
/**
 * Created by Administrator on 15-10-21.
 */
var app = angular.module('myApp', []);
/***
 * Ctrl1
 */
app.controller('Ctrl1', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.log = function () {
        console.log('i start write log~~')
    };
    $scope.hoby = '打架';
    $scope.fight = function () {
        console.log('i like' + $scope.hoby);
    };
}]);
/**
 * Ctrl2
 */
app.controller('Ctrl2', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.hoby = '美女';
    $scope.eat = function () {
        console.log('i eat' + $scope.hoby);
    };

}]);
//指令
app.directive('person', function () {
    return {
        restrict: 'E',
        /**
         *
         * @param scope:指令的范围
         * @param element:元素
         * @param attrs:属性
         */
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                //1调用scope的方法
                scope.log();
                //2直接调用控制器的方法
                // scope.fight();//如果没有会报错
                // scope.$apply('fight()')
                //3.根据属性获得方法
                // scope.$apply(element.attr('like'));
                scope.$apply(attrs.like)
            });
        }
    }
});