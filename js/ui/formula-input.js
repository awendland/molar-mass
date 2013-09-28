var app = angular.module("chemMolarMass.formulaInput", [
    "chemMolarMass.constants"
]);

app.directive('formulaInput', ['$location', function($location) {
    return {
        restrict: 'A',
        template:   "<div class='input-container'>" +
                        '<input type="text" ng-model="formula" ng-enter="submit(formula)"></input>' +
                        '<span ng-click="submit(formula)" class="button"><strong>Go</strong></span>' +
                    "</div>",
        link: function(scope, elem, attrs) {
            scope.submit = function(f) {
                $location.path("/" + encodeURIComponent(f));
            }
        },
        replace: true
    }
}]);