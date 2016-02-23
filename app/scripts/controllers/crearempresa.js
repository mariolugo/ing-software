(function() {
    'use strict';

    angular
        .module('trabajoApp')
        .controller('CrearempresaCtrl', CrearempresaCtrl);

    CrearempresaCtrl.$inject = ['$scope'];

    /* @ngInject */
    function CrearempresaCtrl($scope) {
        var vm = this;
        vm.title = 'CrearempresaCtrl';

        activate();
        $.material.init();

        ////////////////

        function activate() {
        }
    }
})();