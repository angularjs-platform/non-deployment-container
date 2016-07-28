describe('NoN Frontend Artifact: Main Controller', function() {

    var mainController;

    beforeEach(function() {
        module('non.app');

        inject(function($controller) {
            mainController = $controller('MainController', {});
        });
    });

    it('should be properly setup', function() {
        expect(mainController, 'Main Controller should exist').to.not.be.null;
        expect(mainController.userName, 'Main Controller should have a username').to.be.defined;
    });
});
