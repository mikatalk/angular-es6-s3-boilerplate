
// main dependencies
import angular from 'angular';
import 'angular-route';

// main scss
import '../sass/app.scss';

// get app instance
import app from './app';

// route templates
import HomeTpl from '../templates/home.tpl.html';
import NotFoundTpl from '../templates/not.found.tpl.html';

// import constants
import './constants/Info';

// import services 
import './services/DemoService';

// import controllers
import './controllers/NotFoundController';
import './controllers/HomeController';

// import directives
import './directives/demo-directive'

// main module config
app.config( function( $locationProvider, $routeProvider, $compileProvider ) {
    'ngInject';

    $routeProvider
        .when( '/', {
            name: 'home',
            templateUrl: HomeTpl,
            controller: 'HomeController'
        })
        .otherwise({
            name: 'not-found',
            templateUrl: NotFoundTpl,
            controller: 'NotFoundController'
        });
});

// initial run + setup
app.run( function( $rootScope, Info ) {
    'ngInject';
    console.log( Info.greetings );
});
