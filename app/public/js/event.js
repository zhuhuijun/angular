/**
 * Created by Administrator on 15-10-20.
 */
/**
 * Created by Administrator on 15-10-20.
 */
var app = angular.module('myApp', []);
app.controller('CartCtrl', ['$scope', '$http', function ($scope, $http) {

}]);

app.controller('TotalCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.total = 0;
    $scope.$on('changeAmount', function (event, mny) {
        var t = parseInt(mny);
        console.log(mny);
        $scope.total = mny;
    });

    $scope.change=function(){
        //向下发送事件
        $scope.$broadcast("changeTotal",$scope.total);
    }
}]);


app.controller('DetailCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.items = [
        {name: '网聚车', amount: 1, price: 12},
        {name: '化妆品', amount: 2, price: 132}
    ];
    /* $rootScope.total = 0;
     for (var i = 0; i < $scope.items.length; i++) {
     var tmp = $scope.items[i];
     $rootScope.total += tmp.amount * tmp.price;
     }*/
    $scope.change = function () {
        var a = 0;
        for (var i = 0; i < $scope.items.length; i++) {
            var tmp = $scope.items[i];
            a += tmp.amount * tmp.price;
        }
        $scope.$emit('changeAmount', a);
    };
    //监听上面发下来的事件
    $scope.$on('changeTotal', function (event, mny) {
        var t = parseInt(mny);
        console.log(mny);
        alert(t);
    });
}]);