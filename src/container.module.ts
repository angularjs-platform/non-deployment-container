const moduleName: string = 'non.container';

// SCSS
import './container.scss';

// Favicon
import './favicon.ico';

// Internal modules
import app from './app/app.module';

angular.module(moduleName, ['non.framework', 'non.theme-base', 'non.ifu.main', 'non.ifu.home', 'non.ifu.login', 'non.ifu.organization', app]);
