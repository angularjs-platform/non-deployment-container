const moduleName: string = 'non.app';

import * as angular from 'angular';

// Theme
import './app.scss';
import themeBase from '@norn/non-theme-base';
import themeDefault from '@norn/non-theme-default';

// Core
import nonFramework from '@norn/non-framework';
import loginIfu from '@norn/non-ifu-login';

import {UIRouterConfig} from './app.routes';
import {HTTPConfig} from './app.http.config';

import {MainController} from './main.controller';
import {AppController} from './app.controller';

angular.module(moduleName, [nonFramework, themeDefault, themeBase, loginIfu])
    .controller('MainController', MainController)
    .controller('AppController', AppController)
    .config(UIRouterConfig)
    .config(HTTPConfig);

export default moduleName;
