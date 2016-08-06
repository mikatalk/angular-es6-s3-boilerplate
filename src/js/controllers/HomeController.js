
import app from '../app';

export default class HomeController {

    constructor ( $scope, $location, Info ) {

        'ngInject';
        
        $scope.message = Info.welcomeMessage;

        $scope.show404 = function () {
        	$location.path('/test-404');
        }

    }

};

app.controller( 'HomeController', HomeController );
