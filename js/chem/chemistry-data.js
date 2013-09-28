var app = angular.module("chemistryData", []);
app.service('chemistryElements', function () {
    var service = {
        get: function (a) {
            return elements[a];
        },
        lookup: function (a) {
            return elements[symToNum[a]];
        }
    }
    
    var elements = {
        "1": {
            "symbol": "H",
            "name": "Hydrogen",
            "mass": 1.00794
        },
        "2": {
            "symbol": "He",
            "name": "Helium",
            "mass": 4.002602
        },
        "3": {
            "symbol": "Li",
            "name": "Lithium",
            "mass": 6.941
        },
        "4": {
            "symbol": "Be",
            "name": "Beryllium",
            "mass": 9.012182
        },
        "5": {
            "symbol": "B",
            "name": "Boron",
            "mass": 10.811
        },
        "6": {
            "symbol": "C",
            "name": "Carbon",
            "mass": 12.0107
        },
        "7": {
            "symbol": "N",
            "name": "Nitrogen",
            "mass": 14.0067
        },
        "8": {
            "symbol": "O",
            "name": "Oxygen",
            "mass": 15.9994
        },
        "9": {
            "symbol": "F",
            "name": "Fluorine",
            "mass": 18.9984032
        },
        "10": {
            "symbol": "Ne",
            "name": "Neon",
            "mass": 20.1797
        },
        "11": {
            "symbol": "Na",
            "name": "Sodium",
            "mass": 22.9898
        },
        "12": {
            "symbol": "Mg",
            "name": "Magnesium",
            "mass": 24.3050
        },
        "13": {
            "symbol": "Al",
            "name": "Aluminum",
            "mass": 26.9815
        },
        "14": {
            "symbol": "Si",
            "name": "Silicon",
            "mass": 28.0855
        },
        "15": {
            "symbol": "P",
            "name": "Phosphorus",
            "mass": 30.9738
        },
        "16": {
            "symbol": "S",
            "name": "Sulfur",
            "mass": 32.0650
        },
        "17": {
            "symbol": "Cl",
            "name": "Chlorine",
            "mass": 35.4530
        },
        "18": {
            "symbol": "Ar",
            "name": "Argon",
            "mass": 39.9480
        },
        "19": {
            "symbol": "K",
            "name": "Potassium",
            "mass": 39.0983
        },
        "20": {
            "symbol": "Ca",
            "name": "Calcium",
            "mass": 40.0780
        },
        "21": {
            "symbol": "Sc",
            "name": "Scandium",
            "mass": 44.9559
        },
        "22": {
            "symbol": "Ti",
            "name": "Titanium",
            "mass": 47.8670
        },
        "23": {
            "symbol": "V",
            "name": "Vanadium",
            "mass": 50.9415
        },
        "24": {
            "symbol": "Cr",
            "name": "Chromium",
            "mass": 51.9961
        },
        "25": {
            "symbol": "Mn",
            "name": "Manganese",
            "mass": 54.9380
        },
        "26": {
            "symbol": "Fe",
            "name": "Iron",
            "mass": 55.8450
        },
        "27": {
            "symbol": "Co",
            "name": "Cobalt",
            "mass": 58.9332
        },
        "28": {
            "symbol": "Ni",
            "name": "Nickel",
            "mass": 58.6934
        },
        "29": {
            "symbol": "Cu",
            "name": "Copper",
            "mass": 63.5460
        },
        "30": {
            "symbol": "Zn",
            "name": "Zinc",
            "mass": 65.3800
        },
        "31": {
            "symbol": "Ga",
            "name": "Gallium",
            "mass": 69.7230
        },
        "32": {
            "symbol": "Ge",
            "name": "Germanium",
            "mass": 72.6300
        },
        "33": {
            "symbol": "As",
            "name": "Arsenic",
            "mass": 74.9216
        },
        "34": {
            "symbol": "Se",
            "name": "Selenium",
            "mass": 78.9600
        },
        "35": {
            "symbol": "Br",
            "name": "Bromine",
            "mass": 79.9040
        },
        "36": {
            "symbol": "Kr",
            "name": "Krypton",
            "mass": 83.7980
        },
        "37": {
            "symbol": "Rb",
            "name": "Rubidium",
            "mass": 85.4678
        },
        "38": {
            "symbol": "Sr",
            "name": "Strontium",
            "mass": 87.6200
        },
        "39": {
            "symbol": "Y",
            "name": "Yttrium",
            "mass": 88.9059
        },
        "40": {
            "symbol": "Zr",
            "name": "Zirconium",
            "mass": 91.2240
        },
        "41": {
            "symbol": "Nb",
            "name": "Niobium",
            "mass": 92.9064
        },
        "42": {
            "symbol": "Mo",
            "name": "Molybdenum",
            "mass": 95.9600
        },
        "43": {
            "symbol": "Tc",
            "name": "Technetium",
            "mass": 98
        },
        "44": {
            "symbol": "Ru",
            "name": "Ruthenium",
            "mass": 101.0700
        },
        "45": {
            "symbol": "Rh",
            "name": "Rhodium",
            "mass": 102.9055
        },
        "46": {
            "symbol": "Pd",
            "name": "Palladium",
            "mass": 106.4200
        },
        "47": {
            "symbol": "Ag",
            "name": "Silver",
            "mass": 107.8682
        },
        "48": {
            "symbol": "Cd",
            "name": "Cadmium",
            "mass": 112.4110
        },
        "49": {
            "symbol": "In",
            "name": "Indium",
            "mass": 114.8180
        },
        "50": {
            "symbol": "Sn",
            "name": "Tin",
            "mass": 118.7100
        },
        "51": {
            "symbol": "Sb",
            "name": "Antimony",
            "mass": 121.7600
        },
        "52": {
            "symbol": "Te",
            "name": "Tellurium",
            "mass": 127.6000
        },
        "53": {
            "symbol": "I",
            "name": "Iodine",
            "mass": 126.9045
        },
        "54": {
            "symbol": "Xe",
            "name": "Xenon",
            "mass": 131.293
        },
        "55": {
            "symbol": "Cs",
            "name": "Caesium",
            "mass": 132.9054
        },
        "56": {
            "symbol": "Ba",
            "name": "Barium",
            "mass": 137.3270
        },
        "72": {
            "symbol": "Hf",
            "name": "Hafnium",
            "mass": 178.4900
        },
        "73": {
            "symbol": "Ta",
            "name": "Tantalum",
            "mass": 180.9479
        },
        "74": {
            "symbol": "W",
            "name": "Tungsten",
            "mass": 183.8400
        },
        "75": {
            "symbol": "Re",
            "name": "Rhenium",
            "mass": 186.2070
        },
        "76": {
            "symbol": "Os",
            "name": "Osmium",
            "mass": 190.2300
        },
        "77": {
            "symbol": "Ir",
            "name": "Iridium",
            "mass": 192.2170
        },
        "78": {
            "symbol": "Pt",
            "name": "Platinum",
            "mass": 195.0840
        },
        "79": {
            "symbol": "Au",
            "name": "Gold",
            "mass": 196.9666
        },
        "80": {
            "symbol": "Hg",
            "name": "Mercury",
            "mass": 200.5900
        },
        "81": {
            "symbol": "Tl",
            "name": "Thallium",
            "mass": 204.3833
        },
        "82": {
            "symbol": "Pb",
            "name": "Lead",
            "mass": 207.2
        },
        "83": {
            "symbol": "Bi",
            "name": "Bismuth",
            "mass": 208.9804
        },
        "84": {
            "symbol": "Po",
            "name": "Polonium",
            "mass": 209
        },
        "85": {
            "symbol": "At",
            "name": "Astatine",
            "mass": 210
        },
        "86": {
            "symbol": "Rn",
            "name": "Radon",
            "mass": 222
        },
        "87": {
            "symbol": "Fr",
            "name": "Francium",
            "mass": 223
        },
        "88": {
            "symbol": "Ra",
            "name": "Radium",
            "mass": 226
        },
        "104": {
            "symbol": "Rf",
            "name": "Rutherfordium",
            "mass": 267
        },
        "105": {
            "symbol": "Db",
            "name": "Dubnium",
            "mass": 268
        },
        "106": {
            "symbol": "Sg",
            "name": "Seaborgium",
            "mass": 271
        },
        "107": {
            "symbol": "Bh",
            "name": "Bohrium",
            "mass": 272
        },
        "108": {
            "symbol": "Hs",
            "name": "Hassium",
            "mass": 270
        },
        "109": {
            "symbol": "Mt",
            "name": "Meitnerium",
            "mass": 276
        },
        "110": {
            "symbol": "Ds",
            "name": "Darmstadtium",
            "mass": 281
        },
        "111": {
            "symbol": "Rg",
            "name": "Roentgenium",
            "mass": 280
        },
        "112": {
            "symbol": "Cn",
            "name": "Copernicium",
            "mass": 285
        },
        "113": {
            "symbol": "Uut",
            "name": "Ununtrium",
            "mass": 284
        },
        "114": {
            "symbol": "Fl",
            "name": "Flerovium",
            "mass": 289
        },
        "115": {
            "symbol": "Uup",
            "name": "Ununpentium",
            "mass": 288
        },
        "116": {
            "symbol": "Lv",
            "name": "Livermorium",
            "mass": 293
        },
        "117": {
            "symbol": "Uus",
            "name": "Ununseptium",
            "mass": 294
        },
        "118": {
            "symbol": "Uuo",
            "name": "Ununoctium",
            "mass": 294
        },
        "57": {
            "symbol": "La",
            "name": "Lanthanum",
            "mass": 138.9055
        },
        "58": {
            "symbol": "Ce",
            "name": "Cerium",
            "mass": 140.1160
        },
        "59": {
            "symbol": "Pr",
            "name": "Praseodymium",
            "mass": 140.9077
        },
        "60": {
            "symbol": "Nd",
            "name": "Neodymium",
            "mass": 144.2420
        },
        "61": {
            "symbol": "Pm",
            "name": "Promethium",
            "mass": 145
        },
        "62": {
            "symbol": "Sm",
            "name": "Samarium",
            "mass": 150.3600
        },
        "63": {
            "symbol": "Eu",
            "name": "Europium",
            "mass": 151.9640
        },
        "64": {
            "symbol": "Gd",
            "name": "Gadolinium",
            "mass": 157.2500
        },
        "65": {
            "symbol": "Tb",
            "name": "Terbium",
            "mass": 158.9254
        },
        "66": {
            "symbol": "Dy",
            "name": "Dysprosium",
            "mass": 162.5000
        },
        "67": {
            "symbol": "Ho",
            "name": "Holmium",
            "mass": 164.9303
        },
        "68": {
            "symbol": "Er",
            "name": "Erbium",
            "mass": 167.259
        },
        "69": {
            "symbol": "Tm",
            "name": "Thulium",
            "mass": 168.9342
        },
        "70": {
            "symbol": "Yb",
            "name": "Ytterbium",
            "mass": 173.0540
        },
        "71": {
            "symbol": "Lu",
            "name": "Lutetium",
            "mass": 174.9668
        },
        "89": {
            "symbol": "Ac",
            "name": "Actinium",
            "mass": 227
        },
        "90": {
            "symbol": "Th",
            "name": "Thorium",
            "mass": 232.0381
        },
        "91": {
            "symbol": "Pa",
            "name": "Protactinium",
            "mass": 231.0359
        },
        "92": {
            "symbol": "U",
            "name": "Uranium",
            "mass": 238.0289
        },
        "93": {
            "symbol": "Np",
            "name": "Neptunium",
            "mass": 237
        },
        "94": {
            "symbol": "Pu",
            "name": "Plutonium",
            "mass": 244
        },
        "95": {
            "symbol": "Am",
            "name": "Americium",
            "mass": 243
        },
        "96": {
            "symbol": "Cm",
            "name": "Curium",
            "mass": 247
        },
        "97": {
            "symbol": "Bk",
            "name": "Berkelium",
            "mass": 247
        },
        "98": {
            "symbol": "Cf",
            "name": "Californium",
            "mass": 251
        },
        "99": {
            "symbol": "Es",
            "name": "Einsteinium",
            "mass": 252
        },
        "100": {
            "symbol": "Fm",
            "name": "Fermium",
            "mass": 257
        },
        "101": {
            "symbol": "Md",
            "name": "Mendelevium",
            "mass": 258
        },
        "102": {
            "symbol": "No",
            "name": "Nobelium",
            "mass": 259
        },
        "103": {
            "symbol": "Lr",
            "name": "Lawrencium",
            "mass": 262
        }
    }
    
    var symToNum = {
        "H": 1,
        "He": 2,
        "Li": 3,
        "Be": 4,
        "B": 5,
        "C": 6,
        "N": 7,
        "O": 8,
        "F": 9,
        "Ne": 10,
        "Na": 11,
        "Mg": 12,
        "Al": 13,
        "Si": 14,
        "P": 15,
        "S": 16,
        "Cl": 17,
        "Ar": 18,
        "K": 19,
        "Ca": 20,
        "Sc": 21,
        "Ti": 22,
        "V": 23,
        "Cr": 24,
        "Mn": 25,
        "Fe": 26,
        "Co": 27,
        "Ni": 28,
        "Cu": 29,
        "Zn": 30,
        "Ga": 31,
        "Ge": 32,
        "As": 33,
        "Se": 34,
        "Br": 35,
        "Kr": 36,
        "Rb": 37,
        "Sr": 38,
        "Y": 39,
        "Zr": 40,
        "Nb": 41,
        "Mo": 42,
        "Tc": 43,
        "Ru": 44,
        "Rh": 45,
        "Pd": 46,
        "Ag": 47,
        "Cd": 48,
        "In": 49,
        "Sn": 50,
        "Sb": 51,
        "Te": 52,
        "I": 53,
        "Xe": 54,
        "Cs": 55,
        "Ba": 56,
        "Hf": 72,
        "Ta": 73,
        "W": 74,
        "Re": 75,
        "Os": 76,
        "Ir": 77,
        "Pt": 78,
        "Au": 79,
        "Hg": 80,
        "Tl": 81,
        "Pb": 82,
        "Bi": 83,
        "Po": 84,
        "At": 85,
        "Rn": 86,
        "Fr": 87,
        "Ra": 88,
        "Rf": 104,
        "Db": 105,
        "Sg": 106,
        "Bh": 107,
        "Hs": 108,
        "Mt": 109,
        "Ds": 110,
        "Rg": 111,
        "Cn": 112,
        "Uut": 113,
        "Fl": 114,
        "Uup": 115,
        "Lv": 116,
        "Uus": 117,
        "Uuo": 118,
        "La": 57,
        "Ce": 58,
        "Pr": 59,
        "Nd": 60,
        "Pm": 61,
        "Sm": 62,
        "Eu": 63,
        "Gd": 64,
        "Tb": 65,
        "Dy": 66,
        "Ho": 67,
        "Er": 68,
        "Tm": 69,
        "Yb": 70,
        "Lu": 71,
        "Ac": 89,
        "Th": 90,
        "Pa": 91,
        "U": 92,
        "Np": 93,
        "Pu": 94,
        "Am": 95,
        "Cm": 96,
        "Bk": 97,
        "Cf": 98,
        "Es": 99,
        "Fm": 100,
        "Md": 101,
        "No": 102,
        "Lr": 103
    }
    
    return service;
});