//Línurit fyrir spá um fjölda manns á biðlistum

var chart = AmCharts.makeChart("lineChartdiv3", {
    "type": "serial",
	"theme": "none",
    "pathToImages": "http://www.amcharts.com/lib/3/images/",
    "dataProvider": [{
        "lineColor": "#f1595f",
        "date": "2000",
        "duration": 1709
    }, {
        "date": "2001",
        "duration": 3819
    }, {
        "date": "2002",
        "duration": 3892
    }, {
        "date": "2003",
        "duration": 4039
    }, {
        "date": "2004",
        "duration": 2975
    }, {
        "date": "2005",
        "duration": 2952
    }, {
        "date": "2006",
        "duration": 2167
    }, {

        "date": "2007",
        "duration": 2355
    }, {

        "date": "2008",
        "duration": 2576,
    }, {

        "date": "2009",
        "duration": 1715
    }, {

        "date": "2010",
        "duration": 1176
    }, {

        "date": "2011",
        "duration": 1246
    }, {

        "date": "2012",
        "duration": 1406
    },
    {

        "date": "2013",
        "duration": 1577
    },
    {
        "lineColor": "#727272",
        "date": "2014",
        "duration": 3777
    },
    {
        
        "date": "2015",
        "duration": 5000
       
    },
    {
        "date": "2016",
        "duration": 5500

    }],
    "balloon": {
        "cornerRadius": 6
    },
    "valueAxes": [{
       /* "duration": "mm",
        "durationUnits": {
            "hh": "h ",
            "mm": "min"
        },*/
        "axisAlpha": 0
    }],
    "graphs": [{
       // "bullet": "square",
        "bulletBorderAlpha": 1,
        "bulletBorderThickness": 3,
        "lineThickness": 3,
        //"fillAlphas": 0.3,
        "fillColorsField": "lineColor",
        "legendValueText": "[[value]]",
        "lineColorField": "lineColor",
        "title": "duration",
        "valueField": "duration"
    }],
    "chartScrollbar": {},
    /*"chartCursor": {
        "categoryBalloonDateFormat": "YYYY",
        "cursorAlpha": 0,
        "zoomable": false
    },*/
    "dataDateFormat": "YYYY",
    "categoryField": "date",
    "categoryAxis": {
        "dateFormats": [{
            "period": "DD",
            "format": "DD"
        }, {
            "period": "WW",
            "format": "MMM DD"
        }, {
            "period": "MM",
            "format": ""
        }, {
            "period": "YYYY",
            "format": "YYYY"
        }],
        "parseDates": true,
        "autoGridCount": false,
        "axisColor": "#555555",
        "gridAlpha": 0,
        "gridCount": 50
    }
});