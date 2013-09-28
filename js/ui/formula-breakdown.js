var app = angular.module("chemMolarMass.formulaBreakdown", [
    "chemMolarMass.constants"
]);

app.directive('formulaBreakdown', ['chemUIConst', function(uiConst) {
    return {
        restrict: 'A',
        scope: {
            elements: '=',
            elementOrder: '=',
            focusedElement: '='
        },
        template:   '<table class="breakdown"><tbody>' +
                        '<thead>' +
                            '<th></th><th class="name">Name</th><th class="count">Count</th><th class="mass">g / mol</th>' +
                        '</thead>' +
                        '<tr class="element" ng-class="{focused: focusedElement === sym}" ng-repeat="sym in elementOrder" name="{{sym}}" >' +
                            '<td class="symbol" style="background-color: {{uiConst.getColor(elementOrder.indexOf(sym))}}; border-color: {{uiConst.getColor(elementOrder.indexOf(sym))}}">' +
                                '<strong>{{sym}}</strong>' +
                            '</td>' +
                            '<td class="name">' +
                                '{{elements[sym].name}}' +
                            '</td>' +
                            '<td class="count">' +
                                '{{elements[sym].count}}' +
                            '</td>' +
                            '<td class="mass">' +
                                '{{elements[sym].mass.toFixed(2)}}' +
                            '</td>' +
                        '</tr>' +
                    '</tbody></table>',
        replace: true,
        link: function (scope, elem, attrs) {
            scope.uiConst = uiConst;
        }
    }
}]);