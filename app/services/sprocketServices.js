/**
 * Created by SavioJoseph on 8/23/2016.
 */
(function () {
    'use strict';
    angular.module('sprocketApp.data')
    .factory("pollingService", function ($http, $timeout) {
            return{
                pollingVal: function (price) {
                    var value = $http({
                        method : 'GET',
                        url : 'sprocketModule/mocks/currentPriceMock.json'
                    });
                    value.success(function(data, status, headers, config) {
                        console.log(data.result);
                        price = data.result
                    });
                }
            };
        });
})();
