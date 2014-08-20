(function ( $ ) {

	$.fn.zingchart = function(options) {
		var self = this,
			id = options.id = $(this).attr('id') || options.id;

		/************************************/
		/*********** MAIN METHODS ***********/
		/************************************/

		this.bind = function(eventName, handler) {
			zingchart.bind(id, eventName, handler);
			return this;
		}

		this.unbind = function(eventName, handler) {
			zingchart.unbind(id, eventName, handler);
			return this;
		}

		this.render = function(opts) {
			zingchart.render(opts);
			return this;
		}

		/************************************/
		/************ ATTRIBUTES ************/
		/************************************/

		this.async = function(val) {
			if (val !== undefined) return zingchart.ASYNC;
			zingchart.ASYNC;
			return this; 
		}

		this.fontFamily = function(val) {
			if (val !== undefined) return zingchart.FONTFAMILY;
			zingchart.FONTFAMILY;
			return this; 
		}

		this.fontSize = function(val) {
			if (val !== undefined) return zingchart.FONTSIZE;
			zingchart.FONTSIZE;
			return this; 
		}

		this.zcOutput = function(val) {
			if (val !== undefined) return zingchart.ZCOUTPUT;
			zingchart.ZCOUTPUT;
			return this; 
		}


		/************************************/
		/************ API METHODS ***********/
		/************************************/

		/* Data Manipulation */
		this.addNode = this.addnode = function(opts) {
			zingchart.exec(id, 'addnode', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.addPlot = this.addplot = function(opts) {
			zingchart.exec(id, 'addplot', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.appendSeriesData = this.appendseriesdata = function(opts) {
			zingchart.exec(id, 'appendseriesdata', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.appendSeriesValues = this.appendseriesvalues = function(opts) {
			zingchart.exec(id, 'appendseriesvalues', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getSeriesData = this.getseriesdata = function(opts) {
			zingchart.exec(id, 'getseriesdata', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getSeriesValues = this.getseriesvalues = function(opts) {
			zingchart.exec(id, 'getseriesvalues', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.modifyPlot = this.modifyplot = function(opts) {
			zingchart.exec(id, 'modifyplot', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.removeNode = this.removenode = function(opts) {
			zingchart.exec(id, 'removenode', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.removePlot = this.removeplot = function(opts) {
			zingchart.exec(id, 'removeplot', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.set3dView = this.set3dview = function(opts) {
			zingchart.exec(id, 'set3dview', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.setNodeValue = this.setnodevalue = function(opts) {
			zingchart.exec(id, 'setnodevalue', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.setSeriesData = this.setseriesdata = function(opts) {
			zingchart.exec(id, 'setseriesdata', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.setSeriesValues = this.setseriesvalues = function(opts) {
			zingchart.exec(id, 'setseriesvalues', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}


		/* Export */
		this.exportData = this.exportdata = function(opts) {
			zingchart.exec(id, 'exportdata', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getImageData = this.getimagedata = function(opts) {
			zingchart.exec(id, 'getimagedata', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.print = this.print = function(opts) {
			zingchart.exec(id, 'print', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.exportImage = this.exportimage = function(opts) {
			zingchart.exec(id, 'exportimage', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}


		/* Feed */
		this.clearFeed = this.clearfeed = function(opts) {
			zingchart.exec(id, 'clearfeed', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getInterval = this.getinterval = function(opts) {
			zingchart.exec(id, 'getinterval', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.setInterval = this.setinterval = function(opts) {
			zingchart.exec(id, 'setinterval', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.startFeed = this.startfeed = function(opts) {
			zingchart.exec(id, 'startfeed', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.stopFeed = this.stopfeed = function(opts) {
			zingchart.exec(id, 'stopfeed', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}



		/* Graph Information */
		this.getChartType = this.getcharttype = function(opts) {
			zingchart.exec(id, 'getcharttype', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getData = this.getdata = function(opts) {
			zingchart.exec(id, 'getdata', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getEditMode = this.geteditmode = function(opts) {
			zingchart.exec(id, 'geteditmode', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getGraphLength = this.getgraphlength = function(opts) {
			zingchart.exec(id, 'getgraphlength', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getNodeLength = this.getnodelength = function(opts) {
			zingchart.exec(id, 'getnodelength', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getNodeValue = this.getnodevalue = function(opts) {
			zingchart.exec(id, 'getnodevalue', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getObjectInfo = this.getobjectinfo = function(opts) {
			zingchart.exec(id, 'getobjectinfo', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getPlotLength = this.getplotlength = function(opts) {
			zingchart.exec(id, 'getplotlength', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getPlotValues = this.getplotvalues = function(opts) {
			zingchart.exec(id, 'getplotvalues', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getRender = this.getrender = function(opts) {
			zingchart.exec(id, 'getrender', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getRules = this.getrules = function(opts) {
			zingchart.exec(id, 'getrules', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getVersion = this.getversion = function(opts) {
			zingchart.exec(id, 'getversion', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.showVersion = this.showversion = this.getVersion;

		this.getXYInfo = this.getxyinfo = function(opts) {
			zingchart.exec(id, 'getxyinfo', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		/* Graph Manipulation */
		this.addScaleValue = this.addscalevalue = function(opts) {
			zingchart.exec(id, 'addscalevalue', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.destroy = this.destroy = function(opts) {
			zingchart.exec(id, 'destroy', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			$('#' + id).empty();
			return this;
		}

		this.load = this.load = function(opts) {
			zingchart.exec(id, 'load', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.modify = this.modify = function(opts) {
			zingchart.exec(id, 'modify', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.breload = this.breload = function(opts) {
			zingchart.exec(id, 'breload', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.removeScaleValue = this.removescalevalue = function(opts) {
			zingchart.exec(id, 'removescalevalue', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.resize = this.resize = function(opts) {
			zingchart.exec(id, 'resize', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.setData = this.setdata = function(opts) {
			zingchart.exec(id, 'setdata', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.update = this.update = function(opts) {
			zingchart.exec(id, 'update', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}


		/* History */
		this.goBack = this.goback = function(opts) {
			zingchart.exec(id, 'goback', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.goForward = this.goforward = function(opts) {
			zingchart.exec(id, 'goforward', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}


		/* Interactive */
		this.addNodeIa = this.addnodeia = function(opts) {
			zingchart.exec(id, 'addnodeia', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.enterEditMode = this.entereditmode = function(opts) {
			zingchart.exec(id, 'entereditmode', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.exitEditMode = this.exiteditmode = function(opts) {
			zingchart.exec(id, 'exiteditmode', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.removeNodeIa = this.removenodeia = function(opts) {
			zingchart.exec(id, 'removenodeia', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.removePlotIa = this.removeplotia = function(opts) {
			zingchart.exec(id, 'removeplotia', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}


		/* Notes */
		this.addNote = this.addnote = function(opts) {
			zingchart.exec(id, 'addnote', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.removeNote = this.removenote = function(opts) {
			zingchart.exec(id, 'removenote', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.updateNote = this.updatenote = function(opts) {
			zingchart.exec(id, 'updatenote', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}


		/* Objects */
		this.addObject = this.addobject = function(opts) {
			zingchart.exec(id, 'addobject', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.chartRemoveObject = this.chartremoveobject = function(opts) {
			zingchart.exec(id, 'chartremoveobject', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.repaintObjects = this.repaintobjects = function(opts) {
			zingchart.exec(id, 'repaintobjects', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.updateObject = this.updateobject = function(opts) {
			zingchart.exec(id, 'updateobject', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}


		/* Rules */
		this.addRule = this.addrule = function(opts) {
			zingchart.exec(id, 'addrule', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.removeRule = this.removerule = function(opts) {
			zingchart.exec(id, 'removerule', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.updateRule = this.updaterule = function(opts) {
			zingchart.exec(id, 'updaterule', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}


		/* Selection */
		this.clearSelection = this.clearselection = function(opts) {
			zingchart.exec(id, 'clearselection', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.deselect = this.deselect = function(opts) {
			zingchart.exec(id, 'deselect', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.getSelection = this.getselection = function(opts) {
			zingchart.exec(id, 'getselection', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.select = this.select = function(opts) {
			zingchart.exec(id, 'select', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.setSelection = this.setselection = function(opts) {
			zingchart.exec(id, 'setselection', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}


		/* Toggle */
		this.disable = this.disable = function(opts) {
			zingchart.exec(id, 'disable', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.enable = this.enable = function(opts) {
			zingchart.exec(id, 'enable', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.exitFullscreen = this.exitfullscreen = function(opts) {
			zingchart.exec(id, 'exitfullscreen', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.fullscreen = this.fullscreen = function(opts) {
			zingchart.exec(id, 'fullscreen', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.hideMenu = this.hidemenu = function(opts) {
			zingchart.exec(id, 'hidemenu', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.plotHide = this.plothide = function(opts) {
			zingchart.exec(id, 'plothide', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.legendMaximize = this.legendmaximize = function(opts) {
			zingchart.exec(id, 'legendmaximize', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.legendMinimize = this.legendminimize = function(opts) {
			zingchart.exec(id, 'legendminimize', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.showMenu = this.showmenu = function(opts) {
			zingchart.exec(id, 'showmenu', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.plotShow = this.plotshow = function(opts) {
			zingchart.exec(id, 'plotshow', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.toggleAbout = this.toggleabout = function(opts) {
			zingchart.exec(id, 'toggleabout', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.toggleBugReport = this.togglebugreport = function(opts) {
			zingchart.exec(id, 'togglebugreport', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.toggleDimension = this.toggledimension = function(opts) {
			zingchart.exec(id, 'toggledimension', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.toggleLegend = this.togglelegend = function(opts) {
			zingchart.exec(id, 'togglelegend', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.toggleLens = this.togglelens = function(opts) {
			zingchart.exec(id, 'togglelens', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.toggleSource = this.togglesource = function(opts) {
			zingchart.exec(id, 'togglesource', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}


		/* Zoom */
		this.viewAll = this.viewall = function(opts) {
			zingchart.exec(id, 'viewall', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.zoomIn = this.zoomin = function(opts) {
			zingchart.exec(id, 'zoomin', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.zoomOut = this.zoomout = function(opts) {
			zingchart.exec(id, 'zoomout', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.zoomTo = this.zoomto = function(opts) {
			zingchart.exec(id, 'zoomto', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		this.zoomToValues = this.zoomtovalues = function(opts) {
			zingchart.exec(id, 'zoomtovalues', opts);
			if (opts && (opts.update || opts.update === undefined)) zingchart.exec(id, 'update');
			return this;
		}

		/************************************/
		/********* HELPER FUNCTIONS *********/
		/************************************/

		this.title = function(newTitle) {
			if (newTitle === undefined)
				return zingchart.exec(id, 'getdata').graphset[0].title.text;

			zingchart.exec(id, 'modify', {
				'object' : 'title',
				'data'   : { 'text': newTitle }
			});
			return this;
		}

		return this.render(options);
	} // end zingchart() function defenition
	
}( jQuery ));

// (function ( $ ) {
	
// 	$.fn.extend( {
	
// 		zingchart : function( options ) {
			
// 			var self = this;
			
// 			// refers to the 'id' html attribute, which ZingChart uses to bind a
// 			// chart to it's location on the page
// 			var id = $(this).attr('id'); // set id = the id of the object on which .zingchart was called
// 			this.getID = function() { return id; }
// 			//console.log('just set id to: ' + id);
			
// 			// object containing the JSON used to configure the chart
// 			var data = {};
// 			this.getData = function() {
// 				return data;
// 				// return zingchart.exec(id, 'getdata');
// 			}
			
// 			/**
// 			 * function setData()
// 			 * extends the core JSON data used in the chart with the new object submitted (so only updates 
// 			 * values explicitly included in the new object)
// 			 * args: newData [object] - the new JSON data to use
// 			 *       reRender [boolean] - if set to false, the JSON will be updated, but the chart will not 
// 			 *                            re-render with the new data yet. If left out, defaults to true.
// 			 */
// 			this.setData = function(newData, graphid, object, update) {
// 				// I don't believe this is necessary...
// 				var defaults = { type   : 'line',
// 									scaleX : { zooming: 'true' }
// 				};
// 				data = $.extend( true, {}, defaults, data, newData );
// 				var opts = {};

// 				if (newData == undefined) {
// 					return this;
// 				} else {
// 					opts.data = newData;
// 				}

// 				if (graphid != undefined && object != undefined && (typeof(graphid) == 'number' || typeof(graphid) == 'string')) opts.graphid = graphid;
// 				if (graphid != undefined && object == undefined && typeof(graphid) == 'string') opts.object = graphid;
// 				if (graphid != undefined && object == undefined && update == undefined && typeof(graphid) == 'boolean') opts.update = graphid;
// 				if (graphid != undefined && object != undefined && update == undefined && typeof(object) == 'string') opts.object = object;
// 				if (graphid != undefined && object != undefined && update == undefined && typeof(object) == 'boolean') opts.update = object;
// 				if (update != undefined) opts.update = update;
// 				else opts.update = true;

// 				console.log("Modifying chart:", JSON.stringify(opts));
				
// 				zingchart.exec(id, 'modify', opts);

// 				if (update !== false) {
// 					zingchart.exec(id, 'update');
// 				}

// 				return this;
// 			}			
			
			
// 			// object referring to the options that can be set when calling the zingchart.render() function
// 			// e.g. render() accepts an object as an arg, which contains various settings (e.g. width, height)
// 			// this object that zingchart.render() takes must have a 'data' section, which is the core JSON data
// 			// structure used to render the chart. the renderOptions object here refers to the portions of the render() 
// 			// arg besides 'data'
// 			var renderOptions = {};			
			
// 			this.setRenderOptions = function(newRenderOptions) {
// 				var renderOptionsDefault = { width: 'auto' }
// 				renderOptions = $.extend( true, {}, renderOptionsDefault, newRenderOptions );
// 				return this;
// 			}
// 			this.getRenderOptions = function() {
// 				return renderOptions;
// 			}
			
			
// 			//------------------------------------------------------------------------------
// 			// functions to set the global zingchart options
// 			//------------------------------------------------------------------------------		
// 			this.setASYNC = function(newValue) {
// 				if ( typeof(newValue) === 'boolean' || newValue == (0 || 1) ) {
// 					zingchart.ASYNC = newValue;
// 				}
// 				return this;
// 			}
// 			this.setFONTFAMILY = function(newValue) {
// 				zingchart.FONTFAMILY = newValue;
// 				return this;
// 			}
// 			this.setFONTSIZE = function(newValue) {
// 				if ( typeof(newValue) === 'number' ) {
// 					zingchart.FONTSIZE = newValue;
// 				}
// 				return this;
// 			}
// 			this.setZCOUTPUT = function(newValue) {
// 				if ( typeof(newValue) === 'boolean' || newValue == (0 || 1) ) {
// 					zingchart.ZCOUTPUT = newValue;
// 				}
// 				return this;
// 			}
			
			
// 			//-------------------------------------------------------------------------------
// 			// include the four core ZingChart object functions
// 			//-------------------------------------------------------------------------------
			
// 			// Binds an event to a chart (or to all charts in a page).
// 			this.bind = function(eventName, handler, global) {
// 				if (global === true) {
// 					zingchart.bind(null, eventName, handler);
// 				} else {
// 					// in this case only bind from the current object
// 					zingchart.bind(this.id, eventName, handler);
// 				}
// 				return this;
// 			}			
			
// 			// The API entry method, used to call various API commands against the chart.
// 			// this allows any ZingChart API function to be accessed via the jQuery object
// 			this.exec = function(apicall, options) {
// 				if (options == undefined) options = {};
// 				zingchart.exec(id, apicall, options);
// 				return this;
// 			}
			
// 			// calls the zingchart.render(), using the existing options our object has, 
// 			// while allowing these options to be extended with new ones
// 			this.render = function(newData, newRenderOptions) {
// 				if (newData !== undefined) {
// 					setData(newData);
// 				}

// 				if (newRenderOptions !== undefined) {
// 					setRenderOptions(newRenderOptions);
// 				}	
				
// 				var renderArgs = renderOptions;
// 				renderArgs.data = data;
				
// 				// push id of container (the element on which .zingchart() was called to the options 
// 				// object (this will be passed to the Zingchart render function)
// 				renderArgs.id = this.getID();

// 				zingchart.render( renderArgs );
				
// 				return this;
// 			} // end render()
			
// 			// Unbinds an event from a chart (or from all charts in a page).
// 			// if the third param is true, this will affect all charts on the page
// 			this.unbind = function(eventName, handler, global) {
// 				if (global === true) {
// 					zingchart.unbind(null, eventName, handler);
// 				} else {
// 					// in this case only unbind from the current object
// 					zingchart.unbind(id, eventName, handler);
// 				}
// 				return this;
// 			}


// 			//-------------------------------------------------------------------------------
// 			// some general utility functions to allow quick jquery style access to the ZingChart API
// 			//-------------------------------------------------------------------------------			
			

// 			// helper functions - basically an alias to calling exec() with the function name as the apicall
// 			// in some cases may also contain helper code to make use cases simpler
// 			this.resize = function(width, height) {
// 				if (width === undefined) {
// 					var width = 'auto';
// 				}
// 				if (height === undefined) {
// 					var height = 'auto';
// 				}
// 				zingchart.exec( id, 'resize', {
// 					width : width,
// 					height : height
// 				});
// 				return this;
// 			}
			
// 			this.zoomIn = function(zoomx, zoomy ) {
// 				if (zoomx === undefined) {
// 					var zoomx = true;
// 				}
// 				if (zoomy === undefined) {
// 					var zoomy = true;
// 				}
// 				zingchart.exec(id, 'zoomin', {
// 					graphid : 0,
// 					zoomx   : zoomx,
// 					zoomy   : zoomy
// 				});
// 				return this;
// 			}
			
// 			this.zoomOut = function( graphid, zoomx, zoomy ) {
// 				if (zoomx === undefined) {
// 					var zoomx = true;
// 				}
// 				if (zoomy === undefined) {
// 					var zoomy = true;
// 				}
// 				zingchart.exec(id, 'zoomout', {
// 					graphid : graphid,
// 					zoomx   : zoomx,
// 					zoomy   : zoomy
// 				});
// 				return this;
// 			}
			
// 			this.load = function() {
// 				zingchart.exec(id, 'load', { dataurl:'new.json' } );
// 				return this;
// 			}
			
// 			this.destroy = function() {
// 				zingchart.exec(id, 'destroy');
// 				$('#' + id).empty();
// 				return this;
// 			}
			
			
// 			this.title = function(newTitle) {
// 				if (newTitle === undefined) {
// 					return this.getData().title.text;
// 				} else {
// 					this.setData( { title: { text: newTitle } }, false);
// 					zingchart.exec(id, 'modify', {
// 						'object' : 'title',
// 						'data'   : { 'text': newTitle }
// 					});
// 				}

// 				return this;
// 			}
			
// 			this.modifyPlot = function(data, plotIndex) {
// 				zingchart.exec(id, 'modifyplot', {
// 					graphid : 0,
// 					plotindex : plotIndex,
// 					data : data
// 				});

// 				return this;
// 			}			
			
// 			// helper function to set the data variables
// 			// *note* possibly error check here? - verify legal chart type is being submitted
// 			// *question* what are the legal chart types accepted by Zingchart?
// 			this.setType = function( newType ) {
// 				data.type = newType;

// 				return this;
// 			}
// 			// end zingchart utility functions
			
			
// 			//-------------------------------------------------------------------------------
// 			//	now configure new jQuery ZingChart object based on params included
// 			//-------------------------------------------------------------------------------
			
// 			if (options !== undefined) {
// 				// when initializing ZingChart - set JSON if included
// 				if (options.hasOwnProperty('data')) {
// 					this.setData(options.data);
// 				}

// 				// initialize ZingChart object with renderOptions if included 
// 				if (options.hasOwnProperty('renderOptions')) {
// 					this.setRenderOptions(options.renderOptions);
// 				}			
				
// 				// check if user submitted additional data args for chart when initializing, 
// 				// if so render the chart accordingly (this is a shortcut so users can create and
// 				// render the chart in one line, rather than needing to call render() separately
// 				if (options.data !== undefined) {
// 					this.render();
// 				}
// 			}
			
// 			// return this so the function will create a jQuery-chainable object
// 			return this;
			
// 		} // end zingchart() function defenition
		
// 	}); // end $.fn.extend()
	
// }( jQuery ));


