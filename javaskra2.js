//Fjöldi manns á biðlistum

var chart2 = AmCharts.makeChart("chartdiv2", {
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
        "Almennar Skurðlækningar": 466,
        "Augnlækningar": 420 ,
        "Brjóstholsskurðlækningar" : 83,
        "Bæklunarlækningar" : 274,
        "Háls-, nef- og eyrnalækningar" : 0,
        "Heila- og taugaskurðlækningar" : 0,
        "Lýtalækningar" : 313,
        "Þvagfæraskurðlækningar" : 110,
        "Æðaskurðlækningar" : 43,
        "Kvenlækningar" : 0,
        "Barnaskurðlækningar" : 0,
        "Annað/óflokkað" : 0
    }, {
        "year": 2001,
        "Almennar Skurðlækningar": 500 ,
        "Augnlækningar": 670,
        "Brjóstholsskurðlækningar" : 62,
        "Bæklunarlækningar" : 820,
        "Háls-, nef- og eyrnalækningar" : 480,
        "Heila- og taugaskurðlækningar" : 0,
        "Lýtalækningar" : 460,
        "Þvagfæraskurðlækningar" : 93,
        "Æðaskurðlækningar" : 133,
        "Kvenlækningar" : 601,
        "Barnaskurðlækningar" : 0,
        "Annað/óflokkað" : 0
    }, {
        "year": 2002,
        "Almennar Skurðlækningar": 658 ,
        "Augnlækningar": 921,
        "Brjóstholsskurðlækningar" : 25,
        "Bæklunarlækningar" : 799,
        "Háls-, nef- og eyrnalækningar" : 555,
        "Heila- og taugaskurðlækningar" : 0,
        "Lýtalækningar" : 478,
        "Þvagfæraskurðlækningar" : 71,
        "Æðaskurðlækningar" : 192,
        "Kvenlækningar" : 193,
        "Barnaskurðlækningar" : 0,
        "Annað/óflokkað" : 0
    }, {
        "year": 2003,
        "Almennar Skurðlækningar": 743,
        "Augnlækningar": 1109,
        "Brjóstholsskurðlækningar" : 35,
        "Bæklunarlækningar" : 634,
        "Háls-, nef- og eyrnalækningar" : 639,
        "Heila- og taugaskurðlækningar" : 0,
        "Lýtalækningar" : 343,
        "Þvagfæraskurðlækningar" : 93,
        "Æðaskurðlækningar" : 139,
        "Kvenlækningar" : 129,
        "Barnaskurðlækningar" : 175,
        "Annað/óflokkað" : 6
    }, {
        "year": 2004,
        "Almennar Skurðlækningar": 307,
        "Augnlækningar": 1248,
        "Brjóstholsskurðlækningar" : 34,
        "Bæklunarlækningar" : 413,
        "Háls-, nef- og eyrnalækningar" : 277,
        "Heila- og taugaskurðlækningar" : 5,
        "Lýtalækningar" : 225,
        "Þvagfæraskurðlækningar" : 62,
        "Æðaskurðlækningar" : 85,
        "Kvenlækningar" : 138,
        "Barnaskurðlækningar" : 181,
        "Annað/óflokkað" : 0
    }, {
        "year": 2005,
        "Almennar Skurðlækningar": 270,
        "Augnlækningar": 1198,
        "Brjóstholsskurðlækningar" : 42,
        "Bæklunarlækningar" : 439,
        "Háls-, nef- og eyrnalækningar" : 276,
        "Heila- og taugaskurðlækningar" : 0,
        "Lýtalækningar" : 150,
        "Þvagfæraskurðlækningar" : 121,
        "Æðaskurðlækningar" : 89,
        "Kvenlækningar" : 192,
        "Barnaskurðlækningar" : 175,
        "Annað/óflokkað" : 0
    }, {
        "year": 2006,
        "Almennar Skurðlækningar": 138,
        "Augnlækningar": 848,
        "Brjóstholsskurðlækningar" : 25,
        "Bæklunarlækningar" : 420,
        "Háls-, nef- og eyrnalækningar" : 321,
        "Heila- og taugaskurðlækningar" : 0,
        "Lýtalækningar" : 246,
        "Þvagfæraskurðlækningar" : 119,
        "Æðaskurðlækningar" : 50,
        "Kvenlækningar" : 0,
        "Barnaskurðlækningar" : 0,
        "Annað/óflokkað" : 0
    }, {
        "year": 2007,
        "Almennar Skurðlækningar": 178,
        "Augnlækningar": 716,
        "Brjóstholsskurðlækningar" : 33,
        "Bæklunarlækningar" : 462,
        "Háls-, nef- og eyrnalækningar" : 462,
        "Heila- og taugaskurðlækningar" : 0,
        "Lýtalækningar" : 280,
        "Þvagfæraskurðlækningar" : 103,
        "Æðaskurðlækningar" : 34,
        "Kvenlækningar" : 87,
        "Barnaskurðlækningar" : 0,
        "Annað/óflokkað" : 0
    }, {
        "year": 2008,
        "Almennar Skurðlækningar": 57,
        "Augnlækningar": 1356,
        "Brjóstholsskurðlækningar" : 47,
        "Bæklunarlækningar" : 544,
        "Háls-, nef- og eyrnalækningar" : 242,
        "Heila- og taugaskurðlækningar" : 16,
        "Lýtalækningar" : 181,
        "Þvagfæraskurðlækningar" : 44,
        "Æðaskurðlækningar" : 31,
        "Kvenlækningar" : 58,
        "Barnaskurðlækningar" : 0,
        "Annað/óflokkað" : 0
    }, {
        "year": 2009,
        "Almennar Skurðlækningar": 12,
        "Augnlækningar": 1003,
        "Brjóstholsskurðlækningar" : 31,
        "Bæklunarlækningar" : 326,
        "Háls-, nef- og eyrnalækningar" : 66,
        "Heila- og taugaskurðlækningar" : 5,
        "Lýtalækningar" : 195,
        "Þvagfæraskurðlækningar" : 42,
        "Æðaskurðlækningar" : 19,
        "Kvenlækningar" : 8,
        "Barnaskurðlækningar" : 8,
        "Annað/óflokkað" : 0
    }, {
        "year": 2010,
        "Almennar Skurðlækningar": 31,
        "Augnlækningar": 435,
        "Brjóstholsskurðlækningar" : 27,
        "Bæklunarlækningar" : 342,
        "Háls-, nef- og eyrnalækningar" : 122,
        "Heila- og taugaskurðlækningar" : 12,
        "Lýtalækningar" : 150,
        "Þvagfæraskurðlækningar" : 21,
        "Æðaskurðlækningar" : 16,
        "Kvenlækningar" : 10,
        "Barnaskurðlækningar" : 10,
        "Annað/óflokkað" : 0
    }, {
        "year": 2011,
        "Almennar Skurðlækningar": 45 ,
        "Augnlækningar": 371,
        "Brjóstholsskurðlækningar" : 16,
        "Bæklunarlækningar" : 504,
        "Háls-, nef- og eyrnalækningar" : 131,
        "Heila- og taugaskurðlækningar" : 14,
        "Lýtalækningar" : 124,
        "Þvagfæraskurðlækningar" : 20,
        "Æðaskurðlækningar" : 15,
        "Kvenlækningar" : 3,
        "Barnaskurðlækningar" : 3,
        "Annað/óflokkað" : 0
    }, {
        "year": 2012,
        "Almennar Skurðlækningar": 76 ,
        "Augnlækningar": 590,
        "Brjóstholsskurðlækningar" : 18,
        "Bæklunarlækningar" : 393,
        "Háls-, nef- og eyrnalækningar" : 143,
        "Heila- og taugaskurðlækningar" : 11,
        "Lýtalækningar" : 111,
        "Þvagfæraskurðlækningar" : 18,
        "Æðaskurðlækningar" : 8,
        "Kvenlækningar" : 19,
        "Barnaskurðlækningar" : 19,
        "Annað/óflokkað" : 0
    }, {
        "year": 2013,
        "Almennar Skurðlækningar": 60 ,
        "Augnlækningar": 703,
        "Brjóstholsskurðlækningar" : 30,
        "Bæklunarlækningar" : 442,
        "Háls-, nef- og eyrnalækningar" : 121,
        "Heila- og taugaskurðlækningar" : 13,
        "Lýtalækningar" : 139,
        "Þvagfæraskurðlækningar" : 49,
        "Æðaskurðlækningar" : 10,
        "Kvenlækningar" : 5,
        "Barnaskurðlækningar" : 5,
        "Annað/óflokkað" : 0
    }, {
        "year": 2014,
        "Almennar Skurðlækningar": 383,
        "Augnlækningar": 1276,
        "Brjóstholsskurðlækningar" : 128,
        "Bæklunarlækningar" : 860,
        "Háls-, nef- og eyrnalækningar" : 189,
        "Heila- og taugaskurðlækningar" : 54,
        "Lýtalækningar" : 138,
        "Þvagfæraskurðlækningar" : 158,
        "Æðaskurðlækningar" : 15,
        "Kvenlækningar" : 570,
        "Barnaskurðlækningar" : 0,
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
