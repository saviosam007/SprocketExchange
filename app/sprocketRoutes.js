/**
 * Created by SavioJoseph on 8/23/2016.
 */
angular.module('sprocketApp.data')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('placeOrder', {
                url: "/placeOrder",
                templateUrl: "sprocketModule/placeOrderView.html",
                controller: "placeOrderController",
                controllerAs: "placeOrderCtrl"
            })
            .state('history', {
                url: "/history",
                templateUrl: "sprocketModule/historyView.html",
                controller: "historyController",
                controllerAs: "historyCtrl",
                resolve:{
                    historyDetails:function(placeOrderDal){
                        return placeOrderDal.getHistoryDetails();
                    }
                }

            })
        ;
        $urlRouterProvider.otherwise("/placeOrder");
    }])
;