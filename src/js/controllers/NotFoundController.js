
import app from '../app';

export default class NotFoundController {

    constructor ( $scope, $location, Info ) {

        'ngInject';
        
        $scope.message = Info.pageNotFound;

    }

};

app.controller( 'NotFoundController', NotFoundController );
