const moduleName: string = 'non.container.app';

import {UIRouterConfig} from './app.routes';
import {HTTPConfig} from './app.http.config';
import {Run} from './app.run';

import {MainController} from './main.controller';
import {AppController} from './app.controller';

angular.module(moduleName, [])
    .controller('MainController', MainController)
    .controller('AppController', AppController)
    .run(Run)
    .config(UIRouterConfig)
    .config(HTTPConfig);

export default moduleName;
