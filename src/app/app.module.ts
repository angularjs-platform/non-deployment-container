const moduleName: string = 'non.container.app';

import {UIRouterConfig} from './app.routes';
import {HTTPConfig} from './app.http.config';
import {Run} from './app.run';
import {LoadingBarConfig} from './app.loading-bar.config';

import {AppController} from './app.controller';

angular.module(moduleName, [])
    .controller('AppController', AppController)
    .run(Run)
    .config(UIRouterConfig)
    .config(HTTPConfig)
    .config(LoadingBarConfig);

export default moduleName;
