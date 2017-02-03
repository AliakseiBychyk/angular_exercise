import angular from 'angular';
import ngRoute from 'angular-route';
import _ from 'underscore';

import MainController from './home/main.controller';
const controllers = [MainController];

const components = angular.module('angular_eggly.components', ['ng']);

controllers.forEach(controller => {
  _.each(controller, (controller, name) => {
    components.controller(name, controller);
  });
});

const app = angular.module('angular_eggly', ['angular_eggly.components', 'ngRoute']);

app.config(($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'MainController'
    });
  $locationProvider.hashPrefix('');
});



