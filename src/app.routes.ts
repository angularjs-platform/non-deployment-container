const template: string = require('./main.tpl');

export class UIRouterConfig {

    constructor(
        private $stateProvider: ng.ui.IStateProvider,
        private $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        'ngInject';

        this.$urlRouterProvider.otherwise('/login');

        this.$stateProvider
            .state('app', {
                template: template,
                controller: 'MainController',
                controllerAs: 'mainCtrl',
                abstract: true
            });
    }
}

