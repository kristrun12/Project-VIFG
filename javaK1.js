//Íbúar á starfsmann

AmCharts.makeChart("lineChartdiv",
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
							//"position": "right",
							//"title": "Fjöldi íbúa pr starfsmann"
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
							//"column-4": 1332
						},
						{
							"date": "1999",
							"column-1": 297,
							"column-2": 126,
							"column-3": 186
							//"column-4": 1335
						},
						{
							"date": "2000",
							"column-1": 293,
							"column-2": 127,
							"column-3": 190
							//"column-4": 1376
						},
						{
							"date": "2001",
							"column-1": 289,
							"column-2": 123,
							"column-3": 202
							//"column-4": 1309
						},
						{
							"date": "2002",
							"column-1": 280,
							"column-2": 123,
							"column-3": 196
							//"column-4": 1387
						},
						{
							"date": "2003",
							"column-1": 278,
							"column-2": 117,
							"column-3": 197
							//"column-4": 1345
						},
						{
							"date": "2004",
							"column-1": 278,
							"column-2": 116,
							"column-3": 199
							//"column-4": 1311
						},
						{
							"date": "2005",
							"column-1": 280,
							"column-2": 118,
							"column-3": 187
							//"column-4": 1293
						},
						{
							"date": "2006",
							"column-1": 281,
							"column-2": 120,
							"column-3": 192
							//"column-4": 1282
						},
						{
							"date": "2007",
							"column-1": 280,
							"column-2": 116,
							"column-3": 193
							//"column-4": 1277
						},
						{
							"date": "2008",
							"column-1": 276,
							"column-2": 117,
							"column-3": 160
							//"column-4": 1271
						},
						{
							"date": "2009",
							"column-1": 272,
							"column-2": 118,
							"column-3": 145
							//"column-4": 1271
						},
						{
							"date": "2010",
							"column-1": 278,
							"column-2": 120,
							"column-3": 161
							//"column-4": 1274
						},
						{
							"date": "2011",
							"column-1": 285,
							"column-2": 116,
							"column-3": 163
							//"column-4": 1150
						},
						{
							"date": "2012",
							"column-1": 282,
							"column-2": 111,
							"column-3": 165
							//"column-4": 1257
						},
						{
							"date": "2013",
							"column-1": 277,
							"column-2": 108,
							"column-3": 165
							//"column-4": 1234
						}
					]
				}
			);