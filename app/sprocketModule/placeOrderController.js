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
                var value = $http({
                    method : 'GET',
                    url : 'sprocketModule/mocks/currentPriceMock.json'//TODO the services should return a random value
                });

                value.success(function(data, status, headers, config) {
                    console.log(data.result);
                    placeOrderCtrl.priceDetail = data.result
                });

                $timeout(function() {
                    polling();
                }, 10000);
            };
            polling();


            placeOrderDal.getOrderDetails().then(function (data) {
                placeOrderCtrl.sprockets = data.result.sprockets;
                placeOrderCtrl.availableCash = data.result.availableCash;
            });

            //function to calculate the total
            function calculate() {
                //TODO the value 97 should be replaced with the value that will be fetched by polling service
                placeOrderCtrl.total = placeOrderCtrl.amount * 97;
            }

            //function to submit order
            function submitOrder() {
                placeOrderDal.postOrderDetails().then(function (data) {

                })
            }


        }]);

})();