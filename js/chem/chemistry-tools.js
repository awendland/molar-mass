var app = angular.module("chemistryTools", ["chemistryData"]);
app.service('chemistryFormulaAnalyzer', ['chemistryElements', '_', function (elements, utils) {
    /* For API convenience */
    this.analyze = this.parseFormula;

    /* Runs the works on the supplied formula */
    this.parseFormula = function(f) {
        var nodeTree = this.buildNodeTree(f);
        if (nodeTree === null)
            return null;
        return this.analyzeNodeTree(nodeTree);
    }

    /* Example result:
     *
     * Input: "H2O"
     * Return: {
     *      elems: {
     *          H: {
     *              count: 2,
     *              fraction: 0.1118983440,
     *              mass: 1.00794,
     *              name: "Hydrogen",
     *              symbol: "H",
     *              total: 2.01588
     *          },
     *          O: {
     *              count: 1,
     *              fraction: 0.8881016559,
     *              mass: 15.9994,
     *              name: "Oxygen",
     *              symbol: "O",
     *              total: 15.9994
     *          }
     *      },
     *      total: 18.01528
     * }
     */

    /* The real work begins here */

    this.buildNodeTree = function(f) {
        try {
            // Check for a zero length input
            if (!f || f.length < 1)
                return null;
            
            var o = {type: 'root', value: []}, p = o;
            for (var i = 0; i < f.length; i++) {
                var c = f[i];
                if (c === "(") {
                    // If opening parenthesis
                    p.value.push({type: 'group', value: [], parent: p});
                    p = p.value[p.value.length - 1];
                } else if (c === ")") {
                    // If closing parenthesis
                    p = p.parent;
                } else if (utils.isLetterUpperCase(c)) {
                    // If is uppercase
                    p.value.push({type: 'elem', value: c});
                } else if (utils.isLetterLowerCase(c)) {
                    // if is lowercase
                    var v = p.value[p.value.length - 1].value;
                    /* Garuntee that the previous value should be appended */
                    if (!(utils.isLetterUpperCase(v) || utils.isLetterLowerCase(v)))
                        throw {name: "ParseError"};
                    p.value[p.value.length - 1].value += c;
                } else if (utils.isNumber(c)) {
                    // If is number
                    if (utils.isNumber(p.value[p.value.length - 1].value))
                        p.value[p.value.length - 1].value += c;
                    else
                        p.value.push({type: 'mult', value: c});
                }
            }
            return o;
        } catch (e) {
            return null;
        }
    }
    this.analyzeNodeTree = function(n) {
        try {
            var data = {total: 0, elems: {/*"Cl": {name: "Chloride", symbol: "Cl", count: 2, total: 70.91, mass: 30.45, fraction: .673}*/}};
            var lv = [];
            for (var i = 0; i < n.value.length; i++) {
                var o = n.value[i];
                if (o.type === 'elem') {
                    var e = elements.lookup(o.value);
                    if (e === 'undefined')
                        throw {name: "InvalidElementError"};
                    var eData = data.elems[e.symbol] = data.elems[e.symbol] || {};
                    eData.count = (eData.count || 0) + 1;
                    eData.total = (eData.total || 0) + e.mass;
                    eData.mass = e.mass;
                    eData.symbol = e.symbol;
                    eData.name = e.name;
                    lv = {total: eData.mass, elems: {}};
                    lv.elems[e.symbol] = eData;
                } else if (o.type === 'mult') {
                    for (var sym in lv.elems) {
                        if (lv.elems.hasOwnProperty(sym)) {
                            if (!data.elems.hasOwnProperty(sym)) {
                                data.elems[sym] = lv.elems[sym];
                            }
                            data.elems[sym].count += lv.elems[sym].count * (o.value - 1);
                            data.elems[sym].total += lv.elems[sym].total * (o.value - 1);
                        }
                    }
                } else if (o.type === 'group') {
                    var rtn = this.analyzeNodeTree(o);
                    for (var sym in rtn.elems) {
                        if (rtn.elems.hasOwnProperty(sym)) {
                            if (!data.elems.hasOwnProperty(sym)) {
                                data.elems[sym] = rtn.elems[sym];
                            } else {
                                data.elems[sym].count += rtn.elems[sym].count;
                                data.elems[sym].total += rtn.elems[sym].total;
                            }
                        }
                    }
                    lv = rtn;
                }
            }
            for (var elem in data.elems) {
                if (data.elems.hasOwnProperty(elem)) {
                    data.total += data.elems[elem].total;
                }
            }
            for (var elem in data.elems) {
                if (data.elems.hasOwnProperty(elem)) {
                    data.elems[elem].fraction = data.elems[elem].total / data.total;
                }
            }
            return data;
        } catch(e) {
            return null;
        }
    }
}]);

app.service('chemistryUtils', function() {
    var REGEX_CHEMICAL_FORMULA = new RegExp("^(([A-Z][a-z]{0,2})|[\(\)\d])+$");
    this.isPossibleChemicalFormula = function(c) {
        return REGEX_CHEMICAL_FORMULA.test(c);
    }
});