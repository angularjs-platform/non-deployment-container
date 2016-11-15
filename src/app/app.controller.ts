import {IThemeService} from '@norn/non-framework';

export class AppController {

    constructor(public ThemeService: IThemeService) {
        'ngInject';
    }
}
