(function() {
    'use strict';

    angular
        .module('trabajoApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope'];

    /* @ngInject */
    function MainCtrl($scope) {
        var vm = this;
        vm.title = 'Bienvenidos';

        $.material.init();
    }
})();