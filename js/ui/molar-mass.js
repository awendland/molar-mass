var app = angular.module("chemMolarMass.molarMass", [
    "chemMolarMass.constants"
]);

app.directive('molarMass', ['_', function ($_) {
    return {
        restrict: 'A',
        template:   '<h3 class="molar-mass big-center">{{processedValue}}</h3>',
        scope: {
            massValue: '=',
            massUnits: '=?',
            numberDecimals: '=?'
        },
        replace: true,
        link: function(scope, elem, attrs) {
            scope.massUnits = scope.massUnits || "g/mol";
            scope.numberDecimals = scope.numberDecimals || 3;
            var processValue = function() {
                if ($_.isNumber(scope.massValue)) {
                    scope.processedValue = $_.limitDecimals(scope.massValue, scope.numberDecimals) + " " + scope.massUnits;
                } else {
                    scope.processedValue = scope.massValue;
                }
            }
            scope.$watch('massValue', function(oldVal, newVal) {
                if (newVal || (oldVal))
                    processValue();
            });
        }
    }
}]);