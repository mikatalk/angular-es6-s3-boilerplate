
import template from '../../templates/demo.directive.tpl.html';

import app from '../app';

export function demoDirective () {
    
    'ngInject';

    return {
        restrict: 'E',
        scope: {
            bindingExample: '@'
        },
        templateUrl: template,
        link: function( scope, element, attrs ) {
        }
    };
};

app.directive( 'demoDirective', demoDirective );
