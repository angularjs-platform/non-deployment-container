export interface IMainController {
    userName: string;
}

export class MainController {

    public userName: string;

    constructor() {
        this.userName = 'Admin';
    }
}
