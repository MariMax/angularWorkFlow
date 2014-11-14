(function(angular) {
    'use strict';
    function experimentsTableFactory() {
        function link(scope, element) {
           
            element.handsontable({
                data: scope.data,
                minSpareRows: 0,
                currentRowClassName: 'currentRow',
                autoWrapRow: false,
                rowHeaders: false,
                colHeaders: false,
                readOnly: true,
                multiSelect: false
            });

            function render(){
                console.log(scope.data);
                element.handsontable('render');
            }

            if (angular.isFunction(scope.render)){
                scope.render(render);
            }
        }

        return {
            restrict: 'AE',
            replace: true,
            template: '<div class=\'handsontable\'></div>',
            link: link,
            scope:{
              data: '=',
              render: '='
            }
        };
    }

    angular.module('mainModule')
        .directive('experimentsTable', experimentsTableFactory);
})(angular);
