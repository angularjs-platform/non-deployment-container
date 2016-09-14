const moduleName: string = 'non.container';

// SCSS
import './container.scss';

// Favicon
import './favicon.ico';

// Internal modules
import app from './app/app.module';

angular.module(moduleName, ['non.framework', 'non.theme-base', 'non.theme-custom', 'non.ifu.main', 'non.ifu.home', 'non.ifu.login', 'non.ifu.organization', 'non.ifu.ui-showcase', app]);
