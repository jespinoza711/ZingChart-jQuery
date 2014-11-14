/* View the README.md for detailed documentation. */

(function ( $ ) {

	/**********************************************************************
	 ****************************** METHODS *******************************
	 *********************************************************************/

	// MAIN METHOD ========================================================
	$.fn.zingchart = function (chartdata) {
		id = this[0].id;
		zingchart.render({
			id: id,
			data: chartdata
		});

		// DATA MANIPULATION ==============================================
		this.addNode = function (data) {
			zingchart.exec(id, "addnode", data);
			return this;
		};
		this.nodeClick = function (callback) {
			zingchart.bind(id, "node_click", function (p) {
				callback.call(p);
			});
		};
		// GLOBAL RETURN ==================================================
		return this;
	};

	// DATA MANIPULATION ===================================================
	
	$.fn.addNode = function (data) {
		zingchart.exec(id, "addnode", data);
		return this;
	};

	$.fn.addPlot = function (data) {
		zingchart.exec(id, "addplot", data);
		return this;
	};

	$.fn.appendSeriesData = function (data) {
		zingchart.exec(id, "appendseriesdata", data);
		return this;
	};

	$.fn.appendSeriesValues = function (data) {
		zingchart.exec(id, "appendseriesvalues", data);
		return this;
	};

	$.fn.getSeriesData = function (opts) {
		if (opts) {
			return zingchart.exec(id, "getseriesdata", opts);
		}
		else {
			return zingchart.exec(id, "getseriesdata", {});
		}
	};

	$.fn.getSeriesValues = function (opts) {
		if (opts) {
			return zingchart.exec(id, "getseriesvalues", opts);
		}
		else {
			return zingchart.exec(id, "getseriesvalues", {});
		}
	};

	$.fn.modifyPlot = function (data) {
		zingchart.exec(id, "modifyplot", data);
		return this;
	};

	$.fn.removeNode = function (data) {
		zingchart.exec(id, "removenode", data);
		return this;
	};

	$.fn.removePlot = function (data) {
		zingchart.exec(id, "removeplot", data);
		return this;
	};

	$.fn.set3dView = function (data) {
		zingchart.exec(id, "set3dview", data);
		return this;
	};

	$.fn.setNodeValue = function (data) {
		zingchart.exec(id, "setnodevalue", data);
		return this;
	};

	$.fn.setSeriesData = function (data) {
		zingchart.exec(id, "setseriesdata", data);
		return this;
	};

	$.fn.setSeriesValues = function (data) {
		zingchart.exec(id, "setseriesvalues", data);
		return this;
	};

	// EXPORT METHODS =====================================================
	$.fn.exportData = function () {
		zingchart.exec(id, "exportdata");
		return this;
	};

	$.fn.getImageData = function (ftype) {
		if (ftype == "png" || ftype == "jpg" || ftype == "bmp") {
			zingchart.exec(id, "getimagedata", {
				filetype: ftype
			});
			return this;
		}
		else {
			throw("Error: Got " + ftype + ", expected 'png' or 'jpg' or 'bmp'");
		}
	};

	$.fn.print = function () {
		zingchart.exec(id, "print");
		return this;
	};

	$.fn.saveAsImage = function () {
		zingchart.exec(id, "saveasimage");
		return this;
	};

	// FEED METHODS =======================================================
	$.fn.clearFeed = function () {
		zingchart.exec(id, "clearfeed");
		return this;
	};

	$.fn.getInterval = function () {
		return zingchart.exec(id, "getinterval");
	};

	$.fn.setInterval = function (intr) {
		if (typeof(intr) == "number") {
			zingchart.exec(id, "setinterval", {
				interval: intr
			});
			return this;
		}
		else {
			throw("Error: Got " + typeof(intr) + ", expected number");
		}
	};

	$.fn.startFeed = function () {
		zingchart.exec(id, "startfeed");
		return this;
	};

	$.fn.stopFeed = function () {
		zingchart.exec(id, "stopfeed");
		return this;
	};

	// GRAPH INFORMATION METHODS ==========================================
	$.fn.getChartType = function (opts) {
		if (opts) {
			return zingchart.exec(id, "getcharttype", opts);
		}
		else {
			return zingchart.exec(id, "getcharttype");
		}
	};

	$.fn.getData = function () {
		return zingchart.exec(id, "getdata");
	};

	$.fn.getEditMode = function () {
		return zingchart.exec(id, "geteditmode");
	};

	$.fn.getGraphLength = function () {
		return zingchart.exec(id, "getgraphlength");
	};

	$.fn.getNodeLength = function (opts) {
		if (opts) {
			return zingchart.exec(id, "getnodelength", opts);
		}
		else {
			return zingchart.exec(id, "getnodelength");
		}
	};

	$.fn.getNodeValue = function (opts) {
		return zingchart.exec(id, "getnodevalue", opts);
	};

	$.fn.getObjectInfo = function (opts) {
		return zingchart.exec(id, "getobjectinfo", opts);
	};

	$.fn.getPlotLength = function (opts) {
		if (opts) {
			return zingchart.exec(id, "getplotlength", opts);
		}
		else {
			return zingchart.exec(id, "getplotlength");
		}
	};

	$.fn.getPlotValues = function (opts) {
		return zingchart.exec(id, "getplotvalues", opts);
	};

	$.fn.getRender = function () {
		return zingchart.exec(id, "getrender");
	};

	$.fn.getRules = function (opts) {
		return zingchart.exec(id, "getrules", opts);
	};

	$.fn.getVersion = function () {
		return zingchart.exec(id, "getversion");
	};

	$.fn.getXYInfo = function (opts) {
		return zingchart.exec(id, "getxyinfo", opts);
	};

	// GRAPH MANIPULATION =================================================
	$.fn.addScaleValue = function (url) {
		zingchart.exec(id, "addscalevalue", {
			dataurl: url
		});
		return this;
	};

	$.fn.destroy = function () {
		zingchart.exec(id, "destroy");
		return this;
	};

	$.fn.load = function (opts) {
		zingchart.exec(id, "load", opts);
		return this;
	};

	$.fn.modify = function (opts) {
		zingchart.exec(id, "modify", opts);
		return this;
	};

	$.fn.reload = function (opts) {
		if (opts) {
			zingchart.exec(id, "reload", opts);
		}
		else {
			zingchart.exec(id, "reload");
		}
		return this;
	};

	$.fn.removeScaleValue = function (opts) {
		zingchart.exec(id, "removescalevalue", opts);
		return this;
	};

	$.fn.resizeChart = function (opts) {
		zingchart.exec(id, "resize", opts);
		return this;
	};

	$.fn.setData = function (opts) {
		zingchart.exec(id, "setdata", opts);
		return this;
	};

	$.fn.update = function (opts) {
		zingchart.exec(id, "update");
		return this;
	};

	// HISTORY METHODS ====================================================
	$.fn.goBack = function () {
		zingchart.exec(id, "goback");
		return this;
	};

	$.fn.goForward = function () {
		zingchart.exec(id, "goforward");
		return this;
	};

	// INTERACTIVE METHODS ================================================
	$.fn.addNodeIA = function (opts) {
		if (opts) {
			zingchart.exec(id, "addnodeia", opts);
		}
		else {
			zingchart.exec(id, "addnodeia");
		}
		return this;
	};

	$.fn.enterEditMode = function (opts) {
		if (opts) {
			zingchart.exec(id, "entereditmode", opts);
		}
		else {
			zingchart.exec(id, "entereditmode");
		}
		return this;
	};

	$.fn.exitEditMode = function (opts) {
		if (opts) {
			zingchart.exec(id, "exiteditmode", opts);
		}
		else {
			zingchart.exec(id, "exiteditmode");
		}
		return this;
	};

	$.fn.removeNodeIA = function (opts) {
		if (opts) {
			zingchart.exec(id, "removenodeia", opts);
		}
		else {
			zingchart.exec(id, "removenodeia");
		}
		return this;
	};

	$.fn.removePlotIA = function (opts) {
		if (opts) {
			zingchart.exec(id, "removeplotia", opts);
		}
		else {
			zingchart.exec(id, "removeplotia");
		}
		return this;
	};

	// NOTES METHODS ======================================================
	$.fn.addNote = function (opts) {
		zingchart.exec(id, "addnote", opts);
		return this;
	};

	$.fn.removeNote = function (opts) {
		zingchart.exec(id, "removenote", {
			"id": opts
		});
		return this;
	};

	$.fn.updateNode = function (opts) {
		zingchart.exec(id, "updatenote", opts);
		return this;
	};

	// OBJECTS METHODS ====================================================
	$.fn.addObject = function (opts) {
		zingchart.exec(id, "addobject", opts);
		return this;
	};

	$.fn.removeObject = function (opts) {
		zingchart.exec(id, "removeobject", opts);
		return this;
	};

	$.fn.repaintObjects = function (opts) {
		if (opts) {
			zingchart.exec(id, "repaintobjects", opts);
		}
		else {
			zingchart.exec(id, "repaintobjects", {});
		}
		return this;
	};

	$.fn.updateObject = function (opts) {
		zingchart.exec(id, "updateobject", opts);
		return this;
	};

	// RULES METHODS ======================================================
	$.fn.addRule = function (opts) {
		zingchart.exec(id, "addrule", opts);
		return this;
	};

	$.fn.removeRule = function (opts) {
		zingchart.exec(id, "removerule", opts);
		return this;
	};

	$.fn.updateRule = function (opts) {
		zingchart.exec(id, "updaterule", opts);
		return this;
	};

	// SELECTION METHODS ==================================================
	$.fn.clearSelection = function (opts) {
		if (opts) {
			zingchart.exec(id, "clearselection", opts);
		}
		else {
			zingchart.exec(id, "clearselection");
		}
		return this;
	};

	$.fn.chartDeselect = function (opts) {
		zingchart.exec(id, "deselect", opts);
		return this;
	};

	$.fn.getSelection = function (opts) {
		if (opts) {
			zingchart.exec(id, "getselection", opts);
		}
		else {
			zingchart.exec(id, "getselection");
		}
		return this;
	};

	$.fn.chartSelect = function (opts) {
		zingchart.exec(id, "select", opts);
		return this;
	};

	$.fn.setSelection = function (opts) {
		zingchart.exec(id, "setselection", opts);
		return this;
	};

	// TOGGLE METHODS =====================================================
	$.fn.disable = function (message) {
		if (message) {
			zingchart.exec(id, "disable", {text: message});
		}
		else {
			zingchart.exec(id, "disable");
		}
		return this;
	};

	$.fn.enable = function () {
		zingchart.exec(id, "enable");
		return this;
	};

	$.fn.exitFullscreen = function () {
		zingchart.exec(id, "exitfullscreen");
		return this;
	};

	$.fn.fullscreen = function () {
		zingchart.exec(id, "fullscreen");
		return this;
	};

	$.fn.hideMenu = function () {
		zingchart.exec(id, "hidemenu");
		return this;
	};

	$.fn.hidePlot = function (opts) {
		zingchart.exec(id, "hideplot", opts);
		return this;
	};

	$.fn.legendMaximize = function (opts) {
		if (opts) {
			zingchart.exec(id, "legendmaximize", opts);
		}
		else {
			zingchart.exec(id, "legendmaximize");
		}
		return this;
	};

	$.fn.legendMinimize = function (opts) {
		if (opts) {
			zingchart.exec(id, "legendminimize", opts);
		}
		else {
			zingchart.exec(id, "legendminimize");
		}
		return this;
	};

	$.fn.showMenu = function () {
		zingchart.exec(id, "showmenu");
		return this;
	};

	$.fn.showPlot = function (opts) {
		zingchart.exec(id, "showplot", opts);
		return this;
	};

	$.fn.toggleAbout = function () {
		zingchart.exec(id, "toggleabout");
		return this;
	};

	$.fn.toggleBugReport = function () {
		zingchart.exec(id, "togglebugreport");
		return this;
	};

	$.fn.toggleDimension = function () {
		zingchart.exec(id, "toggledimension");
		return this;
	};

	$.fn.toggleLegend = function () {
		zingchart.exec(id, "togglelegend");
		return this;
	};

	$.fn.toggleLens = function () {
		zingchart.exec(id, "togglelens");
		return this;
	};

	$.fn.toggleSource = function () {
		zingchart.exec(id, "togglesource");
		return this;
	};

	// ZOOM METHODS =======================================================
	$.fn.viewAll = function () {
		zingchart.exec(id, "viewall");
		return this;
	};

	$.fn.zoomIn = function (opts) {
		if (opts) {
			zingchart.exec(id, "zoomin", opts);
		}
		else {
			zingchart.exec(id, "zoomin");
		}
		return this;
	};

	$.fn.zoomOut = function (opts) {
		if (opts) {
			zingchart.exec(id, "zoomout", opts);
		}
		else {
			zingchart.exec(id, "zoomout");
		}
		return this;
	};

	$.fn.zoomTo = function (opts) {
		zingchart.exec(id, "zoomto", opts);
		return this;
	};

	$.fn.zoomToValues = function (opts) {
		zingchart.exec(id, "zoomtovalues", opts);
		return this;
	};

	/**********************************************************************
	 ****************************** EVENTS *******************************
	 *********************************************************************/

	// CALLBACK METHODS ====================================================
    $.fn.nodeClick = function (callback) {
		zingchart.bind(id, "node_click", function (){
			return callback;
		});
		return this;
	};
	$.fn.nodeMouseOver = function (callback) {
		zingchart.bind(id, "node_mouseover", function (p){
			$.extend(this, p);
			return callback.call(this);
		});
		return this;
	};
	$.fn.plotMouseOver = function (callback) {
		zingchart.bind(id, "plot_mouseover", function (p){
			$.extend(this, p);
			return callback.call(this);
		});
		return this;
	};
	$.fn.plotMouseOut = function (callback) {
		zingchart.bind(id, "plot_mouseout", function (p){
			$.extend(this, p);
			return callback.call(this);
		});
		return this;
	};
	$.fn.plotHover = function (mouseover, mouseout) {
		$(this).plotMouseOver(mouseover).plotMouseOut(mouseout);
		return this;
	};
	$.fn.zClick = function (callback) {
		zingchart.bind(id, "click", function (p){
			$.extend(this, p);
			return callback.call(this);
		});
		return this;
	};

}( jQuery ));