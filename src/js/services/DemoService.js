
import app from '../app';

export default class DemoService {

    constructor ( $log ) {

        'ngInject';

        $log.log( 'hello from service!' );
    }

};

app.service( 'DemoService', DemoService );
