/**
 * Created by SavioJoseph on 8/23/2016.
 */
(function () {
    'use strict';
    angular.module('sprocketApp.controllers')
        .controller('placeOrderController', ['$state', '$scope', 'placeOrderDal','$timeout','$http',function ($state, $scope, placeOrderDal,$timeout,$http) {
            var placeOrderCtrl = this;
            placeOrderCtrl.calculate = calculate;
            placeOrderCtrl.submitOrder = submitOrder;
            $scope.action = [
                {value: 'Buy'},
                {value: 'Sell'}
            ];
            placeOrderCtrl.action = $scope.action[0];

            //function for polling
            var polling = function(price) {
                var url=appUrl.baseUrl+'/sprocketValue';
                $http.get(url).success(function(data) {
                    console.log(data.currentValue);
                    placeOrderCtrl.priceDetail = data.currentValue;
                    console.log("price Detail",placeOrderCtrl.priceDetail);

                });

                $timeout(function() {
                    polling();
                }, 100000);
            };
            polling();


            placeOrderDal.getOrderDetails().then(function (data) {
                console.log(data);
                placeOrderCtrl.sprockets = data[0].sprockets;
                placeOrderCtrl.availableCash = data[0].availableCash;
            });

            //function to calculate the total
            function calculate() {
                    $timeout(function(){
                        placeOrderCtrl.total = placeOrderCtrl.amount * placeOrderCtrl.priceDetail;
                    });
            }

            //function to submit order
            function submitOrder() {
                placeOrderDal.postOrderDetails().then(function (data) {

                })
            }


        }]);

})();