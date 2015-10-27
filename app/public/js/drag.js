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
app.directive('myDrag', ['$http', function ($http) {
    return{
        restrict: 'A',
        link: function (scope, element, attrs) {
            var disx = 0;
            var disy = 0;
            element.on('mousedown', function (event) {
                var self = this;
                //鼠标相当于边框的做偏移量
                disx = event.pageX - $(this).offset().left;
                disy = event.pageY - $(this).offset().top;
                console.log(disx);
                $(document).on('mousemove', function (ev) {
                    $(self).css('left', ev.pageX - disx);
                    $(self).css('top', ev.pageY - disy);
                });
                $(document).on('mouseup', function () {
                    $(document).off();//解除绑定
                });
            });
        }
    };
}]);