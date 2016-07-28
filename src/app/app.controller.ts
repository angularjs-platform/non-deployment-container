export interface IAppController {
    theme: string;
}

export class AppController {

    public theme: string;

    constructor() {
        this.theme = 'non-theme-default';
    }
}
