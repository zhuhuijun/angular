/**
 * Created by Administrator on 15-10-21.
 */
/**
 * Created by Administrator on 15-10-21.
 */
var app = angular.module('myApp', []);
//angular加载完所有模块后实现的第一个方法
//这个模板要在所有模块中使用类似于map
app.run(function ($templateCache) {
        $templateCache.put('word', {desc:"<div> hello word</div>"});
    }
);
app.controller('StartCtrl', ['$scope', '$http', function ($scope, $http) {


}]);
app.directive('hello', function ($templateCache) {
    /**
     * E：元素
     * C：类
     * A：属性
     * M:Comment 注释
     * replace是否完全替换
     */
    return{
        restrict: 'EAMC',
        //template: '<div>hello angular</div>',
        template: $templateCache.get('word').desc,
        replace: false
    };
});
/**
 * 链接页面
 */
app.directive('word', function () {
    /**
     * E：元素
     * C：类
     * A：属性
     * M:Comment 注释
     * replace是否完全替换
     * transclude:是否保留原属性
     */
    return{
        restrict: 'EAMC',
        templateUrl: 'word.html',
        replace: true,
        transclude:true
    };
});