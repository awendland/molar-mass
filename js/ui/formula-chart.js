var app = angular.module("chemMolarMass.formulaChart", [
    "chemMolarMass.constants"
]);

app.directive('formulaChart', ['chemUIConst', function(uiConst) {
    return {
        restrict: 'A',
        scope: {
            elements: '=',
            focusedElement: '='
        },
        template: '<div class="chart"></div>',
        replace: true,
        link: function(scope, elem, attrs) {
            var r = Raphael(elem[0]);
            scope.$watch('elements', function (newVal, oldVal) {
                if (newVal) {
                    r.clear();
                    var elems = newVal, portions = [];
                    for (var s in elems) {
                        portions.push({value: elems[s].fraction, id: s});
                    }
                    var pie = r.piechart(120, 120, 100, portions, {colors:uiConst.colors});
                   /* for(var index_i=0;index_i < pie.covers.items.length;index_i++){
                        pie.covers.items[index_i].click(function() {
                            console.log(this.id);});
                    }*/
                    var onHover = function (slice) {
                        scope.$apply(function () {
                            scope.focusedElement = slice.value.identifier;
                        });
                        slice.sector.stop();
                        slice.sector.animate({
                            transform: 's1.1 1.1 ' + slice.cx + ' ' + slice.cy
                        }, 150, "<>");
                    }
                    var offHover = function (slice) {
                        scope.$apply(function () {
                            scope.focusedElement = "";
                        });
                        slice.sector.animate({
                            transform: 's1 1 ' + slice.cx + ' ' + slice.cy
                        }, 500, "bounce");
                    }
                    pie.hover(function () {
                            onHover(this);
                        },function () {
                            offHover(this);
                    });
                }
            });
        }
    }
}]);