# ZingChart jQuery #
#### Less code. More win. ####
<br>
ZingChart jQuery is a wrapper for the [ZingChart charting library](http://www.zingchart.com/) that allows for jQuery-style use of the [**88** different API methods](#methods) and [**81** different API events](#events) that ZingChart has to offer. It's designed to allow maximum use of the various features with the simplest and most jQuery-esque syntax possible.

Intro
-----
Before we get started with this wrapper, it'd be a good idea to familiarize yourself with the [ZingChart library](http://www.zingchart.com/). There's even a [tutorial](http://www.zingchart.com/docs/tutorials/first-chart/) for creating your first chart with ZingChart. It should get you up to speed on how this library works.

Looking for more info? Check out any of the below tutorials to get up to speed on the ZingChart library or dig into our [docs pages](http://www.zingchart.com/docs/).

**Tutorials**
+ [Your First Chart](http://www.zingchart.com/docs/tutorials/first-chart/)
+ [Basic Scale Configuration](http://www.zingchart.com/docs/tutorials/configuring-scales/)
+ [Improving Data Indicators](http://www.zingchart.com/docs/tutorials/improving-data-indicators/)
+ [Adding Style](http://www.zingchart.com/docs/tutorials/adding-style/)
+ [Calling Attention](http://www.zingchart.com/docs/tutorials/calling-attention/)
+ [Customizing the Context-Menu](http://www.zingchart.com/docs/tutorials/context-menu/)
+ [Using Data From a Database](http://www.zingchart.com/docs/tutorials/database-data/)

Basics
------
The ZingChart jQuery wrapper works just like normal jQuery. Each method or event is tacked on to the standard jQuery selector method. Here's an example of creating a ZingChart object on a div with an ID of "myChart":

```javascript
$("#myChart").zingchart({
	"type": "line",
	"series": [
		{
			"values": [1,2,5,3,9,4]
		}
	]
});
```
All of the methods which take an object as a parameter can have it passed through directly or by reference. Both are equivalent.

**Directly**
```javascript
$("#myChart").zingchart({
	"type": "bar",
	"series": [
		{
			"values": [3,7,9,2]
		}
	]
});
```
**Reference**
```javascript
var myData = {
	"type": "bar",
	"series": [
		{
			"values": [3,7,9,2]
		}
	]
};

$("#myChart").zingchart(myData);
```
Woohoo! Congrats! You've just made your first ZingChart. Pretty straightforward, isn't it? Now we get into the nitty gritty of the API: how to make your chart do stuff.

To keep jQuery method blocking low, this wrapper only occupies one method "slot": .zingchart(); All other methods are done by accessing the individual ZingChart objects. To access your zingchart objects, just assign a variable to the chart at render time like so...

```javascript
var myChart = $("#myChart").zingchart({
	type: "bar",
	series: [
		{
			values: [3,7,9,2]
		}
	]
});
```
Sweetness. Our newly-rendered chart can now be accessed through the 'myChart' variable. We'll use that as the demo variable name for all examples below. Let's get down to business with the API.

Chaining
--------
One of the more user-friendly aspects of jQuery is the chaining of functions, allowing for users to specify the target once but call multiple functions that affect it. This wrapper supports chaining for any methods or events that return a jQuery object. For example, say you want to set a chart to the 3D view and resize it. Instead of calling each method on the chart separately, you could chain them like this:

```javascript
myChart.set3dView({"y-angle":10}).resizeChart({"width":600,"height":400});
```
myChart is now set to a 3D view and resized in just one line of code!
Pat yourself on the back for saving time by using chaining. You're a rockstar!

<br>
# Methods[](#methods) #
## Rendering ##

#### .zingchart( object ) ####
Creates a new ZingChart object

Values | Type | Details
--- | --- | ---
Parameter | Object | [ZingChart Object](http://www.zingchart.com/docs/reference/zingchart-object/#zingchart__render)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
var myChart = $("#myChart").zingchart({
	"type": "line",
	"title": {
		"text": "Hello, ZingChart World!"
	},
	"series": [
		{
			"values": [5, 10, 15, 5, 10, 5]
		}
	]
})
```
<br>
## Data Manipulation ##
#### .addNode( object ) ####
Adds a node to an existing plot

Values | Type | Details
--- | --- | ---
Parameter | Object | [Node Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__addnode)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#mychart").addNode({
	"plotindex": 1,
	"nodeindex": 2,
	"value": 12
});
```
<br>
#### .addPlot( object ) ####
Adds a new plot to an exising chart

Values | Type | Details
--- | --- | ---
Parameter | Object | [Plot Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__addplot)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").addPlot({
	"plotindex": 0,
	"data": {
		"values": [10,20,15]
	}
});
```
<br>
#### .appendSeriesData( object ) ####
Appends data to the existing series. Can be used on a single plot or the whole series. Note that the value arrays sent do not concatenate the existing ones.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__appendseriesdata)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").appendSeriesData({
	"plotindex": 0,
	data: {
		"lineColor": "red"
	}
});
```
<br>
#### .appendSeriesValues( object ) ####
Appends data to the end of a plot. Can be used on a single plot or the whole series.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__appendseriesdata)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").appendSeriesData({
	"plotindex": 1,
	"values": [19,28,13,42]
});
```
<br>
#### .getSeriesData( object ) ####
Returns the series data. If a series object is passed through, the data for that series is returned. If no argument is passed through, the data for every series of the chart is returned.

Values | Type | Details
--- | --- | ---
Parameter | Object (OPTIONAL) | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getseriesdata)
Return | Object | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getseriesdata)

```javascript
var myData = $("#myChart").getSeriesData({
	"plotindex": 1
});

// myData = the series data for plot[1] of the chart

var allData = $("#myChart").getSeriesData();

// allData = the series data for all plots of the chart
```
<br>
#### .getSeriesValues( object ) ####
Returns the series values. If a series object is passed through, the values for that series are returned. If no argument is passed through, the values for every series of the chart are returned concatenated in order from the first plot to the last plot.

Values | Type | Details
--- | --- | ---
Parameter | Object (OPTIONAL) | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getseriesvalues)
Return | Object | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getseriesvalues)

```javascript
var myValues = $("#myChart").getSeriesValues({
	"plotindex": 0
});

// myValues = the series values for plot[0] of the chart

var allValues = $("#myChart").getSeriesValues();

// allValues = the series values for all plots of the chart
```
<br>
#### .modifyPlot( object ) ####
Modifies an existing plot on the chart specified by **plotindex**.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Plot Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__modifyplot)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").modifyPlot({
	"plotindex": 0,
	"data": {
		"lineWidth": 2,
		"lineColor": "yellow",
	}
});
```
<br>
#### .removeNode( object ) ####
Removes a node specified by **plotindex** and **nodeindex**.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Node Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removenode)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").removeNode({
	"plotindex": 1,
	"nodeindex": 2
});
```
<br>
#### .removePlot( object ) ####
Removes a plot specified by **plotindex**.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Plot Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removeplot)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").removePlot({
	"plotindex": 0
});
```
<br>
#### .set3dView( object ) ####
Sets the new 3D parameters for the view. This overrides the settings from the **3d-aspect** attribute of the chart.

Values | Type | Details
--- | --- | ---
Parameter | Object | [3D View Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__set3dview)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").set3dView({
	"y-angle": 10,
	"depth": 60
});
```
<br>
#### .setNodeValue( object ) ####
Changes the value of a single node specified via **plotindex** and **nodeindex** to the new **value**.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Node Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__setnodevalue)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").setNodeValue({
	"plotindex": 1,
	"nodeindex": 2,
	"value": 22
});
```
<br>
#### .setSeriesData( object ) ####
Replaces the series data. It can be used on one plot or the whole series depending on if **plotindex** is set.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__setseriesdata)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Setting the series data for a single plot:
```javascript
$("#myChart").setSeriesData({
	"plotindex": 1,
	"data" : {
		"values": [12, 33, 20],
		"lineColor": "red"
	}
});
```

Setting the series data for all plots:
```javascript
$("#myChart").setSeriesData({
	"data": [
		{
			"values": [10,15,20],
			"lineColor": "blue"
		},
		{
			"values": [12,17,10],
			"lineColor": "pink"
		}
	]
});
```
<br>
#### .setSeriesValues( object ) ####
Replaces the series values. It can be used on one plot or the whole series depending on if **plotindex** is set.

Values | Type | Details
--- | --- | ---
Parameter | Object | [Series Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__setseriesvalues)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Setting the series values for a single plot:
```javascript
$("#myChart").setSeriesValues({
	"plotindex": 1,
	"values": [99,98,97]
});
```

Setting the series values for all plots:
```javascript
$("#myChart").setSeriesValues({
	"values": [
		[19,28,13,42],
		[37,11,27,25]
	]
});
```
<br>
## Export ###
#### .exportData() ####
Exports the current data for the chart. This only works if the **exportdataurl** is set in the [render options](http://www.zingchart.com/docs/reference/zingchart-object/#zingchart__render).

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").exportData();
//Assuming the exportdataurl is set in the render options, the current data for the chart will be exported to that url.
```

<br>
#### .getImageData( string ) ####
Returns a Base64 encoded image string of the current chart.

Values | Type | Details
--- | --- | ---
Parameter | String | "png", "jpg", "bmp" (only if rendering in Flash)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").getImageData("png");

// or
$("#myChart").getImageData("jpg");

// or (if you're rendering via Flash)
$("#myChart").getImageData("bmp");
```

<br>
#### .print() ####
Creates a printable version of the chart and attempts to print it.

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
// Results in the printer dialog opening on the page
$("#myChart").print();
```

<br>
#### .saveAsImage() ####
Produces an image of the graph. This will only work if the **exportimageurl** is set in the [render options](http://www.zingchart.com/docs/reference/zingchart-object/#zingchart__render).

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
// Assuming the exportimageurl is set in the render options, an image of the current chart will be exported to that url.
$("#myChart").saveAsImage();
```

<br>
## Feed (Real-time Data) ##
#### .clearFeed() ####
Clears the current chart and starts the feed anew.

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("$myChart").clearFeed();
```

<br>
#### .getInterval() ####
Returns the current interval value set on the feed.

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | Number | Seconds (1,2,..) or Miliseconds (100,200,...)

```javascript
var myInterval = $("#myChart").getInterval();
```

<br>
#### .setInterval( number ) ####
Sets the feed update interval on a feed graph.

Values | Type | Details
--- | --- | ---
Parameter | Number | Seconds (1,2,...) or Miliseconds (100,200,...)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").setInterval(500);
// Sets the feed update interval to 500ms (1/2 sec)
```

<br>
#### .startFeed() ####
Starts the data feed of the chart.

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").startFeed();
```

<br>
#### .stopFeed() ####
Stops the data feed of the chart.

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").stopFeed();
```javascript
$("#myChart").stopFeed();
```

<br>
## Graph Information ##
#### .getChartType( object ) ####
Returns the chart's type. If a **graphid** is passed, it will return the chart type for the specified chart. If the chart is has multiple charts inside it (i.e. a graphset) and no object is passed specifying which graphid to get, the method returns the chart type of the first (index 0) chart in the graph set.

Values | Type | Details
--- | --- | ---
Parameter | Object (OPTIONAL) | [Graph Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getcharttype)
Return | String | The [chart type](http://www.zingchart.com/docs/chart-types/) in lowercase ("line", "pie", "area",...)

```javascript
var myType = $("#myChart").getChartType();
// myType = the type of the chart at #myChart

var indexOneType = $("#myChart").getChartType({
	"graphid": 1
});
// indexOneType = the type of the chart at index 1 of #myChart
```

<br>
#### .getData() ####
Returns the entire JSON for the chart. All of it. Every single nugget of info.

Values | Type | Details
--- | --- | ---
Parameter |  | 
Return | Object | [Chart Data Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getdata)

<br>
#### .getEditMode() ####
Returns 'true' if the user is in edit more for the chart or 'false' if not.

Values | Type | Details
--- | --- | ---
Parameter | |
Return | Boolean | true if in edit more, false if not

```javascript
if ( $("#myChart").getEditMode() ) {
	alert("I am editing my chart")
}

// If we were in edit more on the chart, the alert would fire.
```

<br>
#### .getGraphLength() ####
Returns the number of graph objects in the chart.

Values | Type | Details
--- | --- | ---
Parameter | |
Return | Number | 1,2,...

```javascript
var numberOfGraphs = $("#myChart").getGraphLength();

// numberOfGraphs = the number of graph objects in the chart
```

<br>
#### .getNodeLength( object ) ####
Returns the number of nodes in a plot specified by **plotindex**. If no object is passed, the function returns the number of nodes in the 0 index plot.

Values | Type | Details
--- | --- | ---
Parameter | Object (OPTIONAL) | [Plot Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getnodelength)
Return | Number | 1,2,...

```javascript
var numberOfNodes = $("#myChart").getNodeLength();

// numberOfNodes = the number of nodes in the 0 index plot

var nodesInPlot = $("#myChart").getNodeLength({
	"plotindex": 1
});

// nodesInPlot = the number of nodes in the plot at index 1
```

<br>
#### .getNodeValue( object ) ####
Returns the value of the node specified by **plotindex** and **nodeindex**.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Node Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getnodevalue)
Return | Number | 1,2,...

```javascript
var myValue = $("#myChart").getNodeValue({
	"plotindex": 1,
	"nodeindex": 5
});
```

<br>
#### .getObjectInfo( object ) ####
Returns various attributes for specific chart elements (graph, plotarea, scale, plot, node). Depending on the object passed, a subset of the following attributes will be returned:
```x, y, width, height, lineColor, lineWidth, borderColor, borderWidth, backgroundColor1, backgroundColor2, text, values, minValue, maxValue, step, stepSize```

Value | Type | Details
--- | --- | ---
Parameter | Object | [Info Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getobjectinfo)
Return | Object | Dependent on targeted object

```javascript
$("#myChart").getObjectInfo({
	"object": "graph"
});

// This would return all the object info available for the graph object.
```

<br>
#### .getPlotLength( object ) ####
Returns the number of plots in a given graph. If **graphid*** is specified, the number of plots for that graph are returned.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Graph ID Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getplotlength)
Return | Number | 1,2,...

```javascript
var myPlotLength = $("#myChart").getPlotLength();

// myPlotLength would then equal the number of plots in myChart
```

<br>
#### .getPlotValues( object ) ####
Returns the value of the plot specified by **plotindex**.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Plot Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getplotvalues)
Return | Array | ex: [12,23,45]

```javascript
var myPlotValues = $("#myChart").getPlotValues({
	"plotindex": 0
});

// myPlotValues = the array of values for the plot at index 0.
```

<br>
#### .getRender() ####
Returns the render mode for the chart.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | String | "svg", "canvas", "vml"

```javascript
var myRenderMode = $("#myChart").getRender();

// myRenderMode = the render more of myChart
```

<br>
#### .getRules( object ) ####
Returns an array containing the ids of the existing rules in the chart, specified by **plotindex**.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Plot Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getrules)
Return | Array | ["rule1", "rule2"]

```javascript
var myRules = $("#myChart").getRules({
	"plotindex": 0
});

myRules = the rules for the plot at index 0.
```

<br>
#### .getVersion() ####
Returns the version of the library you're currently running. This is usefulf for debugging and good information to provide if you need to contacting support.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | String | ex: "0.141015pre"

```javascript
var myVersion = $("#myChart").getVersion();

// myVersion = the version of the library you're currently running.
```

<br>
#### .getXYInfo( object ) ####
Returns various scale and node related information based on x and y positions in the chart. The returned data is an array of object holding information relative to key scales, value scales, and node proximity.

Value | Type | Details
--- | --- | ---
Parameter | Object | [XY Coords.](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__getxyinfo)
Return | Array | [Object1, Object2, ...]

```javascript
var myXYInfo = $("#myChart").getXYInfo({
	x: 100,
	y: 200
});

// myXYInfo = an array of information relative to the XY coordinates.
```

<br>
## Graph Manipulation ##
#### .addScaleValue( object ) ####
Adds a new scale value on the chart.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Scale Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__addscalevalue)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").addScaleValue({
	"scale": "scale-x",
	"nodeindex": 4,
	"value": 23
});
```

<br>
#### .destroy() ####
Destroys the chart, removing the associated DOM nodes and events. This is the recommended way to remove a chart from a page.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").destroy();

// jQuery Wrapper uses 'destroy'. It's super effective!
```

<br>
#### .load( string ) ####
Loads a new JSON packet from a URL.

Value | Type | Details
--- | --- | ---
Parameter | String | 'newjson.php', 'somedata.php', etc.
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").load("awholenewdata.php");
```

<br>
#### .modify( object ) ####
Modifies any part of the current graph that you specify in the passed object.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Modify Data Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__modify)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").modify({
	"data": {
		"title": {
			"text": "Supermodified"
		},
		"subtitle": {
			"text": "by Amon Tobin"
		}
	}
});

// The title of myChart is now "Supermodified" and the subtitle is now "by Amon Tobin"
```

<br>
#### .reload( object ) ####
If an object is passed through specifying the **graphid** of a graph, only that graph will be reloaded. If no object is passed through, the entire chart is reloaded.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Graphset Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__reload)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Reloading the entire chart.
```javascript
$("#myChart").reload();
```

Reloading a single graph of the chart.
```javascript
$("#myChart").reload({
	"graphid": 0
});
```

<br>
#### .removeScaleValue( object ) ####
Removes a value from the scale specified by the **scale** and the **nodeindex**.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Scale Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removescalevalue)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").removeScaleValue({
	"scale": "scale-x",
	"nodeindex": 4
});

// The scale value at index 4 on the x-axis has now been removed.
```

<br>
#### .resizeChart( object ) ####
Resizes the chart according to new dimensions set by the **width** and **height**. For pixel-based widths and heights, you can just use a number (i.e. 600 instead of "600px"). For percentages, you'll need to use a string (i.e. "100%").

Value | Type | Details
--- | --- | ---
Parameter | Object | [Size Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__resize)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").resize({
	"width": 600,
	"height": 400
});

// Wha-Bam! Your chart is now 600px wide and 400px tall. 
```

<br>
#### .setData( object ) ####
Takes a full JSON packet to replace the current one. Like the .zingchart() method, you can pass the object through directly or by reference.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Data Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__setdata)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").setData({
	"data": {
		"type": "bar",
		"title": {
			"text": "A whole new chart"
		},
		"subtitle": {
			"text": "A new fantastic point of view"
		},
		"series": [
			{
				"values": [1,2,3,4,5,6,7]
			}
		]
	}
});
```

<br>
#### .update() ####
Flushes and applies all queued data manipulation changes set via API calls.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").update();
```

<br>
## History ##
#### .goBack() ####
Goes to the previous page in the chart history. This is very useful for navigating drilldown charts.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").goBack();
```

<br>
#### .goForward() ####
Goes forward one page in the chart history. This is very useful for navigating drilldown charts.

Value | Type | Details
--- | --- | ---
Parameter | |
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").goForward();
```

<br>
## Interactive ##
#### .addNodeIA( object ) ####
Turns on the ability to add a node to the selected plot through clicking on the graph. An object argument need only be passed if you wish to 1) specify a specific graph in the graph set for which you wish to turn on interactive node adding or 2) in the case of a bubble graph which you pass through the object with "size": number where number is the size of the added node(s).

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Added Node Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__addnodeia)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

For a non-bubble graph
```javascript
$("#myChart").addNodeIA();
```

For a bubble graph
```javascript
$("#myChart").addNodeIA({
	"size": 10
});
```

<br>
#### .enterEditMode( object ) ####
Turns on interactive mode, allowing the selection of a node or plot by clicking on it. The object need only be passed through if you wish you specify a graph in the graphset for which you wish to turn on edit mode.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Graph ID](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__entereditmode)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").enterEditMode();
```

<br>
#### .exitEditMode( object ) ####
Deselects the previously selected plot or node when interactive mode is on and exits interactive mode. The object need only be passed through if you wish to specify a graph in the graphset for which you wish to turn off edit mode.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Graph ID](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__exiteditmode)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").exitEditMode();
```

<br>
#### .removeNodeIA( object ) ####
Removes a node selected in interactive mode. The object need only be passed through if you wish to specify a graph in the graphset for which you wish to remove a selected node.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Graph ID](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removenodeia)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").removeNodeIA();
```

<br>
#### .removePlotIA( object ) ####
Removes a plot selected in interactive mode. The object need only be passed through if you wish to specify a graph in the graphset for which you wish to remove a selected plot.

Value | Type | Details
--- | --- | ---
Parameter | Object (optional) | [Graph ID](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removeplotia)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").removePlotIA();
```

<br>
## Notes ##

**Requires the zingchart-html5-api-annotations-min.js module**

***
#### .addNote( object ) ####
Adds a note to a chart. The **id** of the note allows it to be updated or removed later.

Value | Type | Details
--- | --- | ---
Parameter | Object | [Note Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__addnote)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").addNote({
	"id": "note1",
	"type": "node",
	"text": "I am a note. Hear me roar.",
	"plotindex": 0,
	"nodeindex": 3,
	"style": {
		"background-color": "#F90"
	}
});
```

<br>
#### .removeNote( string OR array) ####
Removes a note, specified by **id** from a chart. If you wish to remove a single note, pass just the **id** of that note as a string. If you wish to remove multiple notes, pass an array of the **ids** of the notes you wish to remove.

Value | Type | Details
--- | --- | ---
Parameter | String OR Array | [Note Name or Note Array](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__removenote)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

Removing a single note
```javascript
$("#myChart").removeNote("note1");
```

Removing multiple notes
```javascript
$("#myChart").removeNote(["note1","note2","note3"]);
```

<br>
#### .updateNote( object ) ####
Updates an existing note specified by the **id** of the passed note object. The note's position can be moved, the type can be changed, the style can be modified, and much more.

Value | Type | Details
--- | --- | ---
Parameter | Object [Node Object](http://www.zingchart.com/docs/api/api-methods/#zingchart__exec__api__updatenote)
Return | jQuery | [jQuery Object](http://api.jquery.com/Types/#jQuery)

```javascript
$("#myChart").updateNote({
	"id": "note1",
	"style": {
		"border-color": "#F7A93E"
	},
	"type": "node",
	"text": "I have been updated."
});
```

<br>
## Objects ##
#### .addObject( object )