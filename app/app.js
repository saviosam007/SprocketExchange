'use strict';

// Declare app level module which depends on views, and components
angular.module('sprocketApp', [
    'ui.router',
    'sprocketApp.controllers',
    'ds.clock'
]);
angular.module('sprocketApp.data',[]);
angular.module('sprocketApp.services',['sprocketApp.data']);
angular.module('sprocketApp.directives',['sprocketApp.services']);
angular.module('sprocketApp.controllers',['sprocketApp.directives']);


