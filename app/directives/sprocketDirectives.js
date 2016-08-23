/**
 * Created by SavioJoseph on 8/23/2016.
 */
(function () {
    'use strict';
    angular.module('sprocketApp.directives')
        .directive('numbersOnly', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attr, ngModelCtrl) {
                    function fromUser(text) {
                        if (text) {
                            var transformedInput = text.replace(/[^0-9]/g, '');

                            if (transformedInput !== text) {
                                ngModelCtrl.$setViewValue(transformedInput);
                                ngModelCtrl.$render();
                            }
                            return transformedInput;
                        }
                        return undefined;
                    }

                    ngModelCtrl.$parsers.push(fromUser);
                }
            };
        })
        .directive('clock', function ($interval,$timeout) {
            return {
                scope: true, // isolate
                transclude: true, // bring in any text or elements
                template: "<span class='clock'><span class='clock-text' ng-transclude></span><span class='clock-time'>{{date.now() | date: timeFormat}}</span></span>",
                link: function (scope, element, attr) {
                            scope.timeFormat = (attr.format === '12') ? 'hh:mm:ss a' : 'HH:mm:ss';
                            scope.date = Date;
                                $interval(null, 1000);

                }
            }
        })
})();

