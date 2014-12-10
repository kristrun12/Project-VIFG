//Íbúar á starfsmann

AmCharts.makeChart("lineChartdiv",
				{
					"type": "serial",
					"pathToImages": "http://cdn.amcharts.com/lib/3/images/",
					"categoryField": "date",
					"dataDateFormat": "YYYY",
					"fontSize": 12,
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
							"lineColor": "#f9a65a",
							"title": "Læknar",
							"valueField": "column-1"
						},
						{
							"bullet": "",
							"id": "AmGraph-2",
							"lineThickness": 3,
							"lineColor": "#6666FF",
							"title": "Hjúkrunarfræðingar",
							"valueField": "column-2"
						},
						{
							"bullet": "",
							"id": "AmGraph-3",
							"lineThickness": 3,
							"lineColor": "#33CCCC",
							"title": "Sjúkraliðar",
							"valueField": "column-3"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"offset": -37
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
							"size": 25,
							"text": "Íbúar á starfsmann",
							"color": "#f8f8f8"
						}
					],
					"dataProvider": [
						{
							"date": "1998",
							"column-1": 303,
							"column-2": 125,
							"column-3": 184
						},
						{
							"date": "1999",
							"column-1": 297,
							"column-2": 126,
							"column-3": 186
						},
						{
							"date": "2000",
							"column-1": 293,
							"column-2": 127,
							"column-3": 190
						},
						{
							"date": "2001",
							"column-1": 289,
							"column-2": 123,
							"column-3": 202
						},
						{
							"date": "2002",
							"column-1": 280,
							"column-2": 123,
							"column-3": 196
						},
						{
							"date": "2003",
							"column-1": 278,
							"column-2": 117,
							"column-3": 197
						},
						{
							"date": "2004",
							"column-1": 278,
							"column-2": 116,
							"column-3": 199
						},
						{
							"date": "2005",
							"column-1": 280,
							"column-2": 118,
							"column-3": 187
						},
						{
							"date": "2006",
							"column-1": 281,
							"column-2": 120,
							"column-3": 192
						},
						{
							"date": "2007",
							"column-1": 280,
							"column-2": 116,
							"column-3": 193
						},
						{
							"date": "2008",
							"column-1": 276,
							"column-2": 117,
							"column-3": 160
						},
						{
							"date": "2009",
							"column-1": 272,
							"column-2": 118,
							"column-3": 145
						},
						{
							"date": "2010",
							"column-1": 278,
							"column-2": 120,
							"column-3": 161
						},
						{
							"date": "2011",
							"column-1": 285,
							"column-2": 116,
							"column-3": 163
						},
						{
							"date": "2012",
							"column-1": 282,
							"column-2": 111,
							"column-3": 165
						},
						{
							"date": "2013",
							"column-1": 277,
							"column-2": 108,
							"column-3": 165
						}
					]
				}
			);