//Fjöldi skurðaðgerða 

var chart1 = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "none",
    "pathToImages": "http://www.amcharts.com/lib/3/images/",
    "legend": {
        "equalWidths": true,
        "periodValueText": "total: [[value.sum]]",
        "position": "top",
        "valueAlign": "right",
        "valueWidth": 100
    },
    "dataProvider": [{
        "year": 2000,
        "Almennar Skurðlækningar": 2466,
        "Augnlækningar": 1112 ,
        "Brjóstholsskurðlækningar" : 525,
        "Bæklunarlækningar" : 2443,
        "Háls-, nef- og eyrnalækningar" : 1474,
        "Heila- og taugaskurðlækningar" : 618,
        "Lýtalækningar" : 320,
        "Þvagfæraskurðlækningar" : 1466,
        "Æðaskurðlækningar" : 546,
        "Kvenlækningar" : 3329,
        "Barnaskurðlækningar" : 0,
        "Annað/óflokkað" : 0
    }, {
        "year": 2001,
        "Almennar Skurðlækningar": 2248 ,
        "Augnlækningar": 1435,
        "Brjóstholsskurðlækningar" : 598,
        "Bæklunarlækningar" : 2337,
        "Háls-, nef- og eyrnalækningar" : 1431,
        "Heila- og taugaskurðlækningar" : 545,
        "Lýtalækningar" : 264,
        "Þvagfæraskurðlækningar" : 1165,
        "Æðaskurðlækningar" : 515,
        "Kvenlækningar" : 3297,
        "Barnaskurðlækningar" : 0,
        "Annað/óflokkað" : 0
    }, {
        "year": 2002,
        "Almennar Skurðlækningar": 2033 ,
        "Augnlækningar": 1598 ,
        "Brjóstholsskurðlækningar" : 575,
        "Bæklunarlækningar" : 2169,
        "Háls-, nef- og eyrnalækningar" : 437,
        "Heila- og taugaskurðlækningar" : 607,
        "Lýtalækningar" : 350,
        "Þvagfæraskurðlækningar" : 1086,
        "Æðaskurðlækningar" : 32,
        "Kvenlækningar" : 3320,
        "Barnaskurðlækningar" : 636,
        "Annað/óflokkað" : 9
    }, {
        "year": 2003,
        "Almennar Skurðlækningar": 2054,
        "Augnlækningar": 309,
        "Brjóstholsskurðlækningar" : 599,
        "Bæklunarlækningar" : 2320,
        "Háls-, nef- og eyrnalækningar" : 1439,
        "Heila- og taugaskurðlækningar" : 699,
        "Lýtalækningar" : 378,
        "Þvagfæraskurðlækningar" : 1068,
        "Æðaskurðlækningar" : 380,
        "Kvenlækningar" : 3315,
        "Barnaskurðlækningar" : 661,
        "Annað/óflokkað" : 6
    }, {
        "year": 2004,
        "Almennar Skurðlækningar": 2234 ,
        "Augnlækningar": 348 ,
        "Brjóstholsskurðlækningar" : 597,
        "Bæklunarlækningar" : 2339,
        "Háls-, nef- og eyrnalækningar" : 1419,
        "Heila- og taugaskurðlækningar" : 725,
        "Lýtalækningar" : 290,
        "Þvagfæraskurðlækningar" : 1058,
        "Æðaskurðlækningar" : 426,
        "Kvenlækningar" : 3118,
        "Barnaskurðlækningar" : 699,
        "Annað/óflokkað" : 13
    }, {
        "year": 2005,
        "Almennar Skurðlækningar": 2304 ,
        "Augnlækningar": 341,
        "Brjóstholsskurðlækningar" : 631,
        "Bæklunarlækningar" : 2284,
        "Háls-, nef- og eyrnalækningar" : 1383,
        "Heila- og taugaskurðlækningar" : 795,
        "Lýtalækningar" : 336,
        "Þvagfæraskurðlækningar" : 1025,
        "Æðaskurðlækningar" : 390,
        "Kvenlækningar" : 3275,
        "Barnaskurðlækningar" : 675,
        "Annað/óflokkað" : 6
    }, {
        "year": 2006,
        "Almennar Skurðlækningar": 2100,
        "Augnlækningar": 323 ,
        "Brjóstholsskurðlækningar" : 608,
        "Bæklunarlækningar" : 2394,
        "Háls-, nef- og eyrnalækningar" : 1292,
        "Heila- og taugaskurðlækningar" : 835,
        "Lýtalækningar" : 315,
        "Þvagfæraskurðlækningar" : 983,
        "Æðaskurðlækningar" : 352,
        "Kvenlækningar" : 3058,
        "Barnaskurðlækningar" : 675,
        "Annað/óflokkað" : 2
    }, {
        "year": 2007,
        "Almennar Skurðlækningar": 2226 ,
        "Augnlækningar": 346,
        "Brjóstholsskurðlækningar" : 738,
        "Bæklunarlækningar" : 2464,
        "Háls-, nef- og eyrnalækningar" : 1341,
        "Heila- og taugaskurðlækningar" : 724,
        "Lýtalækningar" : 340,
        "Þvagfæraskurðlækningar" : 1004,
        "Æðaskurðlækningar" : 298,
        "Kvenlækningar" : 2894,
        "Barnaskurðlækningar" : 732,
        "Annað/óflokkað" : 4
    }, {
        "year": 2008,
        "Almennar Skurðlækningar": 2177 ,
        "Augnlækningar": 384,
        "Brjóstholsskurðlækningar" : 807,
        "Bæklunarlækningar" : 2530,
        "Háls-, nef- og eyrnalækningar" : 1375,
        "Heila- og taugaskurðlækningar" : 701,
        "Lýtalækningar" : 329,
        "Þvagfæraskurðlækningar" : 998,
        "Æðaskurðlækningar" : 287,
        "Kvenlækningar" : 3047,
        "Barnaskurðlækningar" : 779,
        "Annað/óflokkað" : 9
    }, {
        "year": 2009,
        "Almennar Skurðlækningar": 2277 ,
        "Augnlækningar": 1442,
        "Brjóstholsskurðlækningar" : 622,
        "Bæklunarlækningar" : 2610,
        "Háls-, nef- og eyrnalækningar" : 1219,
        "Heila- og taugaskurðlækningar" : 706,
        "Lýtalækningar" : 312,
        "Þvagfæraskurðlækningar" : 978,
        "Æðaskurðlækningar" : 242,
        "Kvenlækningar" : 2776,
        "Barnaskurðlækningar" : 624,
        "Annað/óflokkað" : 6
    }, {
        "year": 2010,
        "Almennar Skurðlækningar": 2324,
        "Augnlækningar": 1257 ,
        "Brjóstholsskurðlækningar" : 622,
        "Bæklunarlækningar" : 2650,
        "Háls-, nef- og eyrnalækningar" : 1114,
        "Heila- og taugaskurðlækningar" : 758,
        "Lýtalækningar" : 352,
        "Þvagfæraskurðlækningar" : 928,
        "Æðaskurðlækningar" : 236,
        "Kvenlækningar" : 2798,
        "Barnaskurðlækningar" : 653,
        "Annað/óflokkað" : 10
    }, {
        "year": 2011,
        "Almennar Skurðlækningar": 2603 ,
        "Augnlækningar": 1213,
        "Brjóstholsskurðlækningar" : 625,
        "Bæklunarlækningar" : 2780,
        "Háls-, nef- og eyrnalækningar" : 1200,
        "Heila- og taugaskurðlækningar" : 741,
        "Lýtalækningar" : 382,
        "Þvagfæraskurðlækningar" : 958,
        "Æðaskurðlækningar" : 260,
        "Kvenlækningar" : 2220,
        "Barnaskurðlækningar" : 635,
        "Annað/óflokkað" : 766
    }, {
        "year": 2012,
        "Almennar Skurðlækningar": 2498 ,
        "Augnlækningar": 4388,
        "Brjóstholsskurðlækningar" : 538,
        "Bæklunarlækningar" : 2721,
        "Háls-, nef- og eyrnalækningar" : 1116,
        "Heila- og taugaskurðlækningar" : 797,
        "Lýtalækningar" : 487,
        "Þvagfæraskurðlækningar" : 949,
        "Æðaskurðlækningar" : 229,
        "Kvenlækningar" : 2067,
        "Barnaskurðlækningar" : 682,
        "Annað/óflokkað" : 798
    }, {
        "year": 2013,
        "Almennar Skurðlækningar": 2310 ,
        "Augnlækningar": 4859,
        "Brjóstholsskurðlækningar" : 652,
        "Bæklunarlækningar" : 2605,
        "Háls-, nef- og eyrnalækningar" : 1097,
        "Heila- og taugaskurðlækningar" : 702,
        "Lýtalækningar" : 375,
        "Þvagfæraskurðlækningar" : 991,
        "Æðaskurðlækningar" : 203,
        "Kvenlækningar" : 2008,
        "Barnaskurðlækningar" : 529,
        "Annað/óflokkað" : 778
    }, {
        "year":"2014okt",
        "Almennar Skurðlækningar": 1821,
        "Augnlækningar": 4360,
        "Brjóstholsskurðlækningar" : 533,
        "Bæklunarlækningar" : 2173,
        "Háls-, nef- og eyrnalækningar" : 891,
        "Heila- og taugaskurðlækningar" : 583,
        "Lýtalækningar" : 320,
        "Þvagfæraskurðlækningar" : 743,
        "Æðaskurðlækningar" : 210,
        "Kvenlækningar" : 1849,
        "Barnaskurðlækningar" : 473,
        "Annað/óflokkað" : 0
    }],
    "valueAxes": [{
        "stackType": "regular",
        "gridAlpha": 0.07,
        "position": "left",
        "title": null
    }],
    "graphs": [{
        "balloonText":null,
        "fillAlphas": 0.6,
        "hidden": false,
        "lineAlpha": 0.4,
        "title": "Almennar Skurðlækningar",
        "valueField": "Almennar Skurðlækningar",
        "lineColor": "#f1595f"
    }, 
               {
        "balloonText": null,
        "fillAlphas": 0.6,
        "hidden": false,
        "lineAlpha": 0.4,
        "title": "Augnlækningar",
        "valueField": "Augnlækningar",
         "lineColor": "#727272"
    },
                      {
        "balloonText": null,
        "fillAlphas": 0.6,
        "hidden": false,
        "lineAlpha": 0.4,
        "title": "Brjóstholsskurðlækningar",
        "valueField": "Brjóstholsskurðlækningar",
        "lineColor": "#79c36a"
    },
                {
        "balloonText": null,
        "fillAlphas": 0.6,
        "hidden": false,
        "lineAlpha": 0.4,
        "title": "Bæklunarlækningar",
        "valueField": "Bæklunarlækningar",
         "lineColor": "#599ad3"
    },
                {
        "balloonText": null,
        "fillAlphas": 0.6,
        "hidden": false,
        "lineAlpha": 0.4,
        "title": "Háls-, nef- og eyrnalækningar",
        "valueField": "Háls-, nef- og eyrnalækningar",
        "lineColor": "#f9a65a"
    },
                {
        "balloonText": null,
        "fillAlphas": 0.6,
        "hidden": false,
        "lineAlpha": 0.4,
        "title": "Heila- og taugaskurðlækningar",
        "valueField": "Heila- og taugaskurðlækningar",
        "lineColor": "#9e66ab"

    },
                {
        "balloonText": null,
        "fillAlphas": 0.6,
        "hidden": false,
        "lineAlpha": 0.4,
        "title": "Lýtalækningar",
        "valueField": "Lýtalækningar",
        "lineColor": "#CC3366"
    },
                {
        "balloonText": null,
        "fillAlphas": 0.6,
        "hidden": false,
        "lineAlpha": 0.4,
        "title": "Þvagfæraskurðlækningar",
        "valueField": "Þvagfæraskurðlækningar",
        "lineColor": "#d77fb3"
    },
                {
        "balloonText": null,
        "fillAlphas": 0.6,
        "hidden": false,
        "lineAlpha": 0.4,
        "title": "Æðaskurðlækningar",
        "valueField": "Æðaskurðlækningar",
        "lineColor": "#6666FF"
    },
                {
        "balloonText": null,
        "fillAlphas": 0.6,
        "hidden": false,
        "lineAlpha": 0.4,
        "title": "Kvenlækningar",
        "valueField": "Kvenlækningar"
    },
                {
        "balloonText": null,
        "fillAlphas": 0.6,
        "hidden": false,
        "lineAlpha": 0.4,
        "title": "Barnaskurðlækningar",
        "valueField": "Barnaskurðlækningar",
        "lineColor": "#666699"
    },
                {
        "balloonText": null,
        "fillAlphas": 0.6,
        "hidden": false,
        "lineAlpha": 0.4,
        "title": "Annað/óflokkað",
        "valueField": "Annað/óflokkað",
        "lineColor": "#33CCCC"
    }
               
               
    ],
    "plotAreaBorderAlpha": 0,
    "marginTop": 10,
    "marginLeft": 0,
    "marginBottom": 0,
    "chartScrollbar": {},
    "chartCursor": {
        "cursorAlpha": 0
    },
    "categoryField": "year",
    "categoryAxis": {
        "startOnAxis": true,
        "axisColor": "#DADADA",
        "gridAlpha": 0.07,
        "guides": [{
        }]
    },
    "exportConfig": {
        "menuTop": "10px",
        "menuRight": "10px",
        "menuItems": [{
            "icon": '/lib/3/images/export.png',
            "format": 'png'
        }]
    }
});

