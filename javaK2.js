AmCharts.makeChart("lineChartdiv2",
				{
					"type": "serial",
					"pathToImages": "http://cdn.amcharts.com/lib/3/images/",
					"categoryField": "date",
					"dataDateFormat": "YYYY",
					"fontSize": 20,
					"theme": "default",
					"categoryAxis": {
						"minPeriod": "YYYY",
						"parseDates": true,
						"autoGridCount": true,
						"axisThickness": 2
					},
					"chartCursor": {
						"animationDuration": 0,
						"categoryBalloonDateFormat": "YYYY"
					},
					"chartScrollbar": {},
					"trendLines": [],
					"graphs": [
						{
							"bullet": "",
							"id": "AmGraph-1",
							"lineThickness": 3,
							"lineColor": "#666633",
							"title": "Læknar",
							"valueField": "column-1"
						},
						{
							"bullet": "",
							"id": "AmGraph-2",
							"lineThickness": 3,
							"lineColor": "#FF00CC",
							"title": "Hjúkrunarfræðingar",
							"valueField": "column-2"
						},
						{
							"bullet": "",
							"id": "AmGraph-3",
							"lineThickness": 3,
							"lineColor": "#3399CC",
							"title": "Sjúkraliðar",
							"valueField": "column-3"
						}
						/*{
							"bullet": "",
							"id": "AmGraph-4",
							"title": "Ljósmæður",
							"valueField": "column-4"
						}*/
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"offset": -50
							//"title": "Fjöldi starfsmanna"
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"useGraphSettings": true,
						"valueAlign": "left",
						"valueWidth":45
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 35,
							"text": "Fjöldi starfsmanna"
						}
					],
					"dataProvider": [
						{
							"date": "1998",
							"column-1": 909,
							"column-2": 2205,
							"column-3": 1496
							//"column-4": 5
						},
						{
							"date": "1999",
							"column-1": 938,
							"column-2": 2216,
							"column-3": 1501
							//"column-4": 5
						},
						{
							"date": "2000",
							"column-1": 968,
							"column-2": 2237,
							"column-3": 1491
							//"column-4": 5
						},
						{
							"date": "2001",
							"column-1": 990,
							"column-2": 2325,
							"column-3": 1420
							//"column-4": 5
						},
						{
							"date": "2002",
							"column-1": 1029,
							"column-2": 2342,
							"column-3": 1474
							//"column-4": 7
						},
						{
							"date": "2003",
							"column-1": 1049,
							"column-2": 2474,
							"column-3": 1474
							//"column-4": 3
						},
						{
							"date": "2004",
							"column-1": 1056,
							"column-2": 2525,
							"column-3": 1474
						},
						{
							"date": "2005",
							"column-1": 1070,
							"column-2": 2546,
							"column-3": 1600
						},
						{
							"date": "2006",
							"column-1": 1093,
							"column-2": 2567,
							"column-3": 1600
						},
						{
							"date": "2007",
							"column-1": 1127,
							"column-2": 2729,
							"column-3": 1632
						},
						{
							"date": "2008",
							"column-1": 1158,
							"column-2": 2729,
							"column-3": 1997
						},
						{
							"date": "2009",
							"column-1": 1166,
							"column-2": 2686,
							"column-3": 2185
						},
						{
							"date": "2010",
							"column-1": 1146,
							"column-2": 2653,
							"column-3": 1972
						},
						{
							"date": "2011",
							"column-1": 1120,
							"column-2": 2765,
							"column-3": 1950//vantar gögn
						},
						{
							"date": "2012",
							"column-1": 1140,
							"column-2": 2909,
							"column-3": 1954
						},
						{
							"date": "2013",
							"column-1": 1174,
							"column-2": 3025,
							"column-3": 1978
						}
					]
				}
			);