var app = angular.module("chemMolarMass", [
    "chemistryTools",
    "chemistryData",
    "chemMolarMass.formulaInput",
    "chemMolarMass.molarMass",
    "chemMolarMass.formulaChart",
    "chemMolarMass.formulaBreakdown",
    "chemMolarMass.constants"
]);

/* App Configuration */

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {}).
        otherwise({redirectTo: '/'});
    //$locationProvider.html5Mode(true);
}]);

/* App Flow/Logic */

app.controller('chemRootCtrl', ['$scope', '$location', '_', 'chemistryUtils', function ($scope, $location, $_, chemU) {
    /* On URL Change, triggered by page load AND by user input */
    $scope.$on('$locationChangeSuccess', function (event, newLoc, oldLoc) {
        /* Split up URL */
        var urlFrags = newLoc.split("/");
        /* Extract formula from URL and save to $scope */
        $scope.formula = decodeURIComponent($_.last(urlFrags));
        /* Broadcast formula change */
        $scope.$broadcast('newFormula');
    });
}]);

app.controller('chemActionCtrl', ['$scope', 'chemistryFormulaAnalyzer', '_', function ($scope, $chemistryFA, $_) {
    'use strict';
    /* Initial values */
    $scope.ui = {};
    /* On formula change */
    $scope.$on('newFormula', function () {
        /* Parse formula */
        $scope.formulaAnalysis = $scope.f = $chemistryFA.parseFormula($scope.formula);
        /* Simply running the parser/analyzer is the most effective
         * way to decide if the formula is valid or not */
        $scope.populateView();
    });
    $scope.populateView = function () {
        if ($scope.formulaAnalysis != null) { // Valid formula
            /* Setup variables for managing view state */
            $scope.ui.isValid = true;
            $scope.ui.focused = "";
            $scope.ui.order = $_.sortKeys($scope.f.elems);
            /* Demo: */
            $_.forEachSorted($scope.f.elems, "total", false, function (v) {
                console.log(v);
            });
        } else { // Invalid formula, failed to parse
            $scope.ui.isValid = false;
        }
    }
}]);

/* General JS Assist Functions in a AngularJS Wrapper */

app.factory('_', function () {
    var REGEX_UPPERCASE = new RegExp("[A-Z]");
    var REGEX_LOWERCASE = new RegExp("[a-z]");
    return {
        isLetterUpperCase: function(c) {
            return REGEX_UPPERCASE.test(c);
        },
        isLetterLowerCase: function (c) {
            return REGEX_LOWERCASE.test(c);
        },
        isNumber: function (o) {
            return !isNaN(o * 1);
        },
        limitDecimals: function(n, l) {
            return Math.round(n*Math.pow(10, l))/Math.pow(10, l);
        },
        last: function (a) {
            return a[a.length - 1];
        },
        sortKeys: function (a, p, u) {
            var o = [];
            for (var k in a) {
                if (a.hasOwnProperty(k))
                    o.push(k);
            };
            o.sort(function (y, z) {
                if (u)
                    return a[y][p] - a[z][p];
                else
                    return a[z][p] - a[y][p];
             });
            return o;
        },
        /** param
         *   a - Array to loop through
         *   p - Property to sort by
         *   u - Sort A-Z or Z-A
         *   f - Function to call on each property
         */
        forEachSorted: function (a, p, u, f) {
            var o = this.sortKeys(a);
            for (var i = 0; i < o.length; i++) {
                f(a[o[i]]);
            }
        }
    }
});

/* AngularJS Helper Functions/Services/Filters/Directives */

app.filter('limitDecimal', function() {
    return function (n, d) {
        return Math.round(n*Math.pow(10, d))/Math.pow(10, d);
    }
});

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});