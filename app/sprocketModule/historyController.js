/**
 * Created by SavioJoseph on 8/23/2016.
 */
(function () {
    'use strict';
    angular.module('sprocketApp.controllers')
        .controller('historyController',['$state','$scope','historyDetails',function ($state,$scope,historyDetails) {
            var historyCtrl=this;

            console.log("historyController loaded");
            historyCtrl.orderHistory=historyDetails.result;
        }]);

})();