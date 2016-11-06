const moduleName: string = 'non.container';

// SCSS
import './scss/theme-base.scss';
import './scss/theme-custom.scss';

// Favicon
import './favicon.ico';

// Internal modules
import app from './app/app.module';

angular.module(moduleName, ['non.framework', 'non.theme-base', 'non.theme-custom',
    'non.shared.common', 'non.shared.system-administration', 'non.shared.authentication-management',
    'non.ifu.home', 'non.ifu.login', 'non.ifu.organization', 'non.ifu.ui-showcase', app]);
