import {IThemeService} from '@norn/non-framework';

export class AppController {

    public ThemeService: IThemeService;

    constructor(ThemeService: IThemeService) {
        'ngInject';

        this.ThemeService = ThemeService;
    }
}
