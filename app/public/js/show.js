var app=angular.module('myApp',[]);
app.controller('FirstCtrl',function($scope){
	
});
app.directive('girl', function () {
	return {
		restrict: 'E',
		template: '<div>hello <span ng-transclude></span></div>',
		controller: function ($scope) {
            $scope.style = [];//拥有的品德
            this.add = function (item) {
            	$scope.style.push(item);
                //这种情况会导致多个指令调用时覆盖原有的指令
                //需要为每一个指令单独创建独立的作用域
            };
        },
        scope: {},//伪指令创建独立的scope
        replace: false,
        transclude: true,
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
         	});
         }
     }
 });
app.directive('kind',  function(){
	return{
		restrict: 'A',
        require: '^girl',//依赖的属性
        link: function (scope, element, attrs, girlCtrl) {//会多出一个属性
        	girlCtrl.add('kind');
        }
    };
});
app.directive('beautify',  function(){
	return{
		restrict: 'A',
        require: '^girl',//依赖的属性
        link: function (scope, element, attrs, girlCtrl) {//会多出一个属性
        	girlCtrl.add('beautify');
        }
    };
});