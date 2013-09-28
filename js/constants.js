var app = angular.module("chemMolarMass.constants", []);
/* App Views/UI*/
app.service('chemUIConst', function() {
    this.colors = ['#2ECC71','#3498DB','#9B59B6',
                   '#F1C40F','#E67E22','#E74C3C','#34495E',
                   '#27AE60','#2980B9','#8E44AD','#F39C12',
                   '#D35400','#C0392B','#BDC3C7'];
    this.getColor = function (i) {
        return this.colors[i % this.colors.length];
    }
});