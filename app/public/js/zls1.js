/**
 * Created by Administrator on 15-10-21.
 */
/**
 * Created by Administrator on 15-10-21.
 */
var app = angular.module('myApp', []);
app.controller('GirlCtrl', function ($scope) {
    $scope.girlname = 'linqq';
    $scope.hit = function () {
        console.log('hit you');
    };
    $scope.word = {
        name: 'word'
    };
});
//指令
app.directive('girl', function () {
    return {
        restrict: 'E',
        template: '<div>{{girlname01}}{{age}}{{money}}</div>',//在此处使用 girlname01
        controller: function ($scope) {
            $scope.style = [];//拥有的品德
            this.add = function (item) {
                $scope.style.push(item);
                //这种情况会导致多个指令调用时覆盖原有的指令
                //需要为每一个指令单独创建独立的作用域
            };
        },
        scope: {
            word: '=',
            hit: '&',//调用父控制器上的函数和传递参数
            girlname01: '@name',//把当前的name指令的值{{girlname}}等于本指令girlname01
            age: '@',//如果名字一样可以省略相当于"'@age'"
            money: '='//把当前的money指向当前的scope上的money
        },//伪指令创建独立的scope
        /**
         *
         * @param scope:指令的范围
         * @param element:元素
         * @param attrs:属性
         */
        link: function (scope, element, attrs) {
            element.bind('mouseover', function () {
                element.addClass('red');
            });
            element.bind('click', function () {
                console.log(scope.style);
                scope.hit();
                console.log(scope.word.name);
            });
        }
    }
});
app.directive('kind', function () {
    return{
        restrict: 'A',
        require: '^girl',//依赖的属性
        link: function (scope, element, attrs, girlCtrl) {//会多出一个属性
            girlCtrl.add('kind');
        }
    };
});
app.directive('beautify', function () {
    return{
        restrict: 'A',
        require: '^girl',//依赖的属性
        link: function (scope, element, attrs, girlCtrl) {//会多出一个属性
            girlCtrl.add('beautify');
        }
    };
});