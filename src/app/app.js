'use strict';
require('angular');
var app = angular.module('appModule', ['chart.js']);

require('./../../node_modules/chart.js/dist/Chart.min.js');
require('./../../node_modules/angular-chart.js/dist/angular-chart.min.js');
require('./services/dataService');
require('./components/root/root.component');
require('./components/imgComponent/imgComponent');
require('./components/typesComponent/typesComponent');
require('./components/severitiesComponent/severitiesComponent');
require('./components/sourceComponent/sourceComponent'); 
 