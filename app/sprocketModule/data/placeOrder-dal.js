/**
 * Created by SavioJoseph on 8/23/2016.
 */
angular.module("sprocketApp.data")
    .factory("placeOrderDal", ['$http', '$q', function ($http, $q) {
        return {
            getOrderDetails: function () {
                var deferred = $q.defer();
                //var url = "sprocketModule/mocks/sampleMockData.json";
                var url=appUrl.baseUrl+'/sprocketdetail';
                $http.get(url).success(function (data) {
                    deferred.resolve(data);
                })
                    .error(function (data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            },
            postOrderDetails: function () {
                var deferred = $q.defer();
                var url = appUrl.baseUrl+'/sprocketHistory';//add the post url;
                $http.post(url).success(function (data) {
                    deferred.resolve(data);
                })
                    .error(function (data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            },
            getHistoryDetails: function () {
                var deferred = $q.defer();
                var url = "sprocketModule/mocks/historyMock.json";
                $http.get(url).success(function (data) {
                    deferred.resolve(data);
                })
                    .error(function (data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            }
        }

    }]);