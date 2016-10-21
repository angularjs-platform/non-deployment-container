const moduleName: string = 'non.container.app';

import {UIRouterConfig} from './app.routes';
import {HTTPConfig} from './app.http.config';
import {Run} from './app.run';
import {LocalizationConfig} from './app.localization.config';
import {LoadingBarConfig} from './app.loading-bar.config';
import {LocalStorageConfig} from './app.localstorage.config';

import {AppController} from './app.controller';

angular.module(moduleName, [])
    .controller('AppController', AppController)
    .run(Run)
    .config(UIRouterConfig)
    .config(HTTPConfig)
    .config(LocalizationConfig)
    .config(LoadingBarConfig)
    .config(LocalStorageConfig);

export default moduleName;
