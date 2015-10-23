var app = angular.module('myApp', []);
app.controller('OpenCtrl', function ($scope) {
    $scope.openers = [
    {title: 'title1', content: 'content1'},
    {title: 'title2', content: 'content2'},
    {title: 'title3', content: 'content3'}
    ];
});
/**
 * 子容器
 */
 app.directive('opener', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^group',//依赖的元素
        templateUrl: 'opens.html',
        scope: {
            title: '='
        },
        link: function (scope, element, attrs, groupCtrl) {
            scope.show = false;
            scope.toogle = function () {
                groupCtrl.open(scope);
                //保留当前的现状
                scope.show = !scope.show;
            };
            //将每一个容器放入父容器中
            groupCtrl.addOpener(scope);
        }
    };
});
/***
 * 父容器
 */
 app.directive('group', function () {
    return{
        restrict: 'EA',
        replace: true,
        transclude: true,
        template: '<div ng-transclude></div>',
        controller: function ($scope) {//此处的scope指的是OpenCtrl
            var openers = [];
            $scope.i=0;
            this.addOpener = function (opener) {
                openers.push(opener);
                $scope.i=$scope.i+1;
            };

            this.open = function (current) {
                angular.forEach(openers, function (item) {
                    if (item != current) {
                        item.show = false;
                    }
                });
            };
        },
        link: function (scope,element,attrs) {
            element.bind('click',function(){
                console.log(">>>>",scope.i);
            });
        }
    };
});