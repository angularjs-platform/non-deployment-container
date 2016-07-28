const moduleName: string = 'non.container';

// SCSS
import './container.scss';

// Internal modules
import app from './app/app.module';

angular.module(moduleName, ['non.framework', 'non.theme-default', 'non.theme-base', 'non.ifu.login', 'non.ifu.organization', app]);
