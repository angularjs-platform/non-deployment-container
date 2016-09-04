import {IThemeService} from '@norn/non-framework';

export class AppController {

    public theme: string;

    constructor(private ThemeService: IThemeService) {
        'ngInject';

        this.theme = this.ThemeService.getTheme();
    }
}
