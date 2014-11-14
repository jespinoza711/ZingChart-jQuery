/* View the README.md for detailed documentation. */

(function ( $ ) {

	/**********************************************************************
	 ****************************** METHODS *******************************
	 *********************************************************************/

	// MAIN METHOD ========================================================
	$.fn.zingchart = function (chartdata) {
		var id = this[0].id;

		// RENDER =============================================================
		this.render = function (data) {
			zingchart.render(data);
			return this;
		};

		// LOAD THEME =========================================================
		this.loadTheme = function (themeurl) {
			var mydata = zingchart.exec(id,"getdata");
			zingchart.exec(id, "destroy");
			zingchart.render({
				"id": id,
				"data": mydata,
				"defaultsurl": themeurl
			});
			return this;
		};

		// DATA MANIPULATION ==================================================
		this.addNode = function (data) {
			zingchart.exec(id, "addnode", data);
			return this;
		};

		this.addPlot = function (data) {
			zingchart.exec(id, "addplot", data);
			return this;
		};

		this.appendSeriesData = function (opts) {
			console.log(opts);
			zingchart.exec(id, "appendseriesdata", opts);
			return this;
		};

		this.appendSeriesValues = function (data) {
			zingchart.exec(id, "appendseriesvalues", data);
			return this;
		};

		this.getSeriesData = function (opts) {
			if (opts) {
				return zingchart.exec(id, "getseriesdata", opts);
			}
			else {
				return zingchart.exec(id, "getseriesdata", {});
			}
		};

		this.getSeriesValues = function (opts) {
			if (opts) {
				return zingchart.exec(id, "getseriesvalues", opts);
			}
			else {
				return zingchart.exec(id, "getseriesvalues", {});
			}
		};

		this.modifyPlot = function (data) {
			zingchart.exec(id, "modifyplot", data);
			return this;
		};

		this.removeNode = function (data) {
			zingchart.exec(id, "removenode", data);
			return this;
		};

		this.removePlot = function (data) {
			zingchart.exec(id, "removeplot", data);
			return this;
		};

		this.set3dView = function (data) {
			zingchart.exec(id, "set3dview", data);
			return this;
		};

		this.setNodeValue = function (data) {
			zingchart.exec(id, "setnodevalue", data);
			return this;
		};

		this.setSeriesData = function (data) {
			zingchart.exec(id, "setseriesdata", data);
			return this;
		};

		this.setSeriesValues = function (data) {
			zingchart.exec(id, "setseriesvalues", data);
			return this;
		};

		// EXPORT METHODS =====================================================
		this.exportData = function () {
			zingchart.exec(id, "exportdata");
			return this;
		};

		this.getImageData = function (ftype) {
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

		this.print = function () {
			zingchart.exec(id, "print");
			return this;
		};

		this.saveAsImage = function () {
			zingchart.exec(id, "saveasimage");
			return this;
		};

		// FEED METHODS =======================================================
		this.clearFeed = function () {
			zingchart.exec(id, "clearfeed");
			return this;
		};

		this.getInterval = function () {
			return zingchart.exec(id, "getinterval");
		};

		this.setInterval = function (intr) {
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

		this.startFeed = function () {
			zingchart.exec(id, "startfeed");
			return this;
		};

		this.stopFeed = function () {
			zingchart.exec(id, "stopfeed");
			return this;
		};

		// GRAPH INFORMATION METHODS ==========================================
		this.getChartType = function (opts) {
			if (opts) {
				return zingchart.exec(id, "getcharttype", opts);
			}
			else {
				return zingchart.exec(id, "getcharttype");
			}
		};

		this.getData = function () {
			return zingchart.exec(id, "getdata");
		};

		this.getEditMode = function () {
			return zingchart.exec(id, "geteditmode");
		};

		this.getGraphLength = function () {
			return zingchart.exec(id, "getgraphlength");
		};

		this.getNodeLength = function (opts) {
			if (opts) {
				return zingchart.exec(id, "getnodelength", opts);
			}
			else {
				return zingchart.exec(id, "getnodelength");
			}
		};

		this.getNodeValue = function (opts) {
			return zingchart.exec(id, "getnodevalue", opts);
		};

		this.getObjectInfo = function (opts) {
			return zingchart.exec(id, "getobjectinfo", opts);
		};

		this.getPlotLength = function (opts) {
			if (opts) {
				return zingchart.exec(id, "getplotlength", opts);
			}
			else {
				return zingchart.exec(id, "getplotlength");
			}
		};

		this.getPlotValues = function (opts) {
			return zingchart.exec(id, "getplotvalues", opts);
		};

		this.getRender = function () {
			return zingchart.exec(id, "getrender");
		};

		this.getRules = function (opts) {
			return zingchart.exec(id, "getrules", opts);
		};

		this.getVersion = function () {
			return zingchart.exec(id, "getversion");
		};

		this.getXYInfo = function (opts) {
			return zingchart.exec(id, "getxyinfo", opts);
		};

		// GRAPH MANIPULATION =================================================
		this.addScaleValue = function (url) {
			zingchart.exec(id, "addscalevalue", {
				dataurl: url
			});
			return this;
		};

		this.destroy = function () {
			zingchart.exec(id, "destroy");
			return this;
		};

		this.load = function (opts) {
			zingchart.exec(id, "load", opts);
			return this;
		};

		this.modify = function (opts) {
			zingchart.exec(id, "modify", opts);
			return this;
		};

		this.reload = function (opts) {
			if (opts) {
				zingchart.exec(id, "reload", opts);
			}
			else {
				zingchart.exec(id, "reload");
			}
			return this;
		};

		this.removeScaleValue = function (opts) {
			zingchart.exec(id, "removescalevalue", opts);
			return this;
		};

		this.resizeChart = function (opts) {
			zingchart.exec(id, "resize", opts);
			return this;
		};

		this.setData = function (opts) {
			zingchart.exec(id, "setdata", opts);
			return this;
		};

		this.update = function (opts) {
			zingchart.exec(id, "update");
			return this;
		};

		// HISTORY METHODS ====================================================
		this.goBack = function () {
			zingchart.exec(id, "goback");
			return this;
		};

		this.goForward = function () {
			zingchart.exec(id, "goforward");
			return this;
		};

		// INTERACTIVE METHODS ================================================
		this.addNodeIA = function (opts) {
			if (opts) {
				zingchart.exec(id, "addnodeia", opts);
			}
			else {
				zingchart.exec(id, "addnodeia");
			}
			return this;
		};

		this.enterEditMode = function (opts) {
			if (opts) {
				zingchart.exec(id, "entereditmode", opts);
			}
			else {
				zingchart.exec(id, "entereditmode");
			}
			return this;
		};

		this.exitEditMode = function (opts) {
			if (opts) {
				zingchart.exec(id, "exiteditmode", opts);
			}
			else {
				zingchart.exec(id, "exiteditmode");
			}
			return this;
		};

		this.removeNodeIA = function (opts) {
			if (opts) {
				zingchart.exec(id, "removenodeia", opts);
			}
			else {
				zingchart.exec(id, "removenodeia");
			}
			return this;
		};

		this.removePlotIA = function (opts) {
			if (opts) {
				zingchart.exec(id, "removeplotia", opts);
			}
			else {
				zingchart.exec(id, "removeplotia");
			}
			return this;
		};

		// NOTES METHODS ======================================================
		this.addNote = function (opts) {
			zingchart.exec(id, "addnote", opts);
			return this;
		};

		this.removeNote = function (opts) {
			zingchart.exec(id, "removenote", {
				"id": opts
			});
			return this;
		};

		this.updateNode = function (opts) {
			zingchart.exec(id, "updatenote", opts);
			return this;
		};

		// OBJECTS METHODS ====================================================
		this.addObject = function (opts) {
			zingchart.exec(id, "addobject", opts);
			return this;
		};

		this.removeObject = function (opts) {
			zingchart.exec(id, "removeobject", opts);
			return this;
		};

		this.repaintObjects = function (opts) {
			if (opts) {
				zingchart.exec(id, "repaintobjects", opts);
			}
			else {
				zingchart.exec(id, "repaintobjects", {});
			}
			return this;
		};

		this.updateObject = function (opts) {
			zingchart.exec(id, "updateobject", opts);
			return this;
		};

		// RULES METHODS ======================================================
		this.addRule = function (opts) {
			zingchart.exec(id, "addrule", opts);
			return this;
		};

		this.removeRule = function (opts) {
			zingchart.exec(id, "removerule", opts);
			return this;
		};

		this.updateRule = function (opts) {
			zingchart.exec(id, "updaterule", opts);
			return this;
		};

		// SELECTION METHODS ==================================================
		this.clearSelection = function (opts) {
			if (opts) {
				zingchart.exec(id, "clearselection", opts);
			}
			else {
				zingchart.exec(id, "clearselection");
			}
			return this;
		};

		this.chartDeselect = function (opts) {
			zingchart.exec(id, "deselect", opts);
			return this;
		};

		this.getSelection = function (opts) {
			if (opts) {
				zingchart.exec(id, "getselection", opts);
			}
			else {
				zingchart.exec(id, "getselection");
			}
			return this;
		};

		this.chartSelect = function (opts) {
			zingchart.exec(id, "select", opts);
			return this;
		};

		this.setSelection = function (opts) {
			zingchart.exec(id, "setselection", opts);
			return this;
		};

		// TOGGLE METHODS =====================================================
		this.disable = function (message) {
			if (message) {
				zingchart.exec(id, "disable", {text: message});
			}
			else {
				zingchart.exec(id, "disable");
			}
			return this;
		};

		this.enable = function () {
			zingchart.exec(id, "enable");
			return this;
		};

		this.exitFullscreen = function () {
			zingchart.exec(id, "exitfullscreen");
			return this;
		};

		this.fullscreen = function () {
			zingchart.exec(id, "fullscreen");
			return this;
		};

		this.hideMenu = function () {
			zingchart.exec(id, "hidemenu");
			return this;
		};

		this.hidePlot = function (opts) {
			zingchart.exec(id, "hideplot", opts);
			return this;
		};

		this.legendMaximize = function (opts) {
			if (opts) {
				zingchart.exec(id, "legendmaximize", opts);
			}
			else {
				zingchart.exec(id, "legendmaximize");
			}
			return this;
		};

		this.legendMinimize = function (opts) {
			if (opts) {
				zingchart.exec(id, "legendminimize", opts);
			}
			else {
				zingchart.exec(id, "legendminimize");
			}
			return this;
		};

		this.showMenu = function () {
			zingchart.exec(id, "showmenu");
			return this;
		};

		this.showPlot = function (opts) {
			zingchart.exec(id, "showplot", opts);
			return this;
		};

		this.toggleAbout = function () {
			zingchart.exec(id, "toggleabout");
			return this;
		};

		this.toggleBugReport = function () {
			zingchart.exec(id, "togglebugreport");
			return this;
		};

		this.toggleDimension = function () {
			zingchart.exec(id, "toggledimension");
			return this;
		};

		this.toggleLegend = function () {
			zingchart.exec(id, "togglelegend");
			return this;
		};

		this.toggleLens = function () {
			zingchart.exec(id, "togglelens");
			return this;
		};

		this.toggleSource = function () {
			zingchart.exec(id, "togglesource");
			return this;
		};

		// ZOOM METHODS =======================================================
		this.viewAll = function () {
			zingchart.exec(id, "viewall");
			return this;
		};

		this.zoomIn = function (opts) {
			if (opts) {
				zingchart.exec(id, "zoomin", opts);
			}
			else {
				zingchart.exec(id, "zoomin");
			}
			return this;
		};

		this.zoomOut = function (opts) {
			if (opts) {
				zingchart.exec(id, "zoomout", opts);
			}
			else {
				zingchart.exec(id, "zoomout");
			}
			return this;
		};

		this.zoomTo = function (opts) {
			zingchart.exec(id, "zoomto", opts);
			return this;
		};

		this.zoomToValues = function (opts) {
			zingchart.exec(id, "zoomtovalues", opts);
			return this;
		};

		/**********************************************************************
		 ****************************** EVENTS *******************************
		 *********************************************************************/

		// ANIMATION EVENTS ===================================================
		this.animationStart = function (callback) {
			zingchart.bind(id, "animation_start", function (p){
				return callback.call(p);
			});
			return this;
		};

		this.animationEnd = function (callback) {
			zingchart.bind(id, "animation_end", function (p){
				return callback.call(p);
			});
			return this;
		};

		this.animationStep = function (callback) {
			zingchart.bind(id, "animation_step", function (p){
				return callback.call(p);
			});
			return this;
		};

		// DATA MANIPULATION EVENTS ===========================================
		this.onModify = function (callback) {
			zingchart.bind(id, "modify", function (p){
				return callback.call(p);
			});
			return this;
		};

		this.onNodeAdd = function (callback) {
			zingchart.bind(id, "node_add", function (p){
				return callback.call(p);
			});
			return this;
		};

		// CALLBACK METHODS ====================================================
		this.nodeClick = function (callback) {
			zingchart.bind(id, "node_click", function (p){
				return callback.call(p);
			});
			return this;
		};
		this.nodeMouseOver = function (callback) {
			zingchart.bind(id, "node_mouseover", function (p){
				return callback.call(p);
			});
			return this;
		};
		this.nodeMouseOut = function (callback) {
			zingchart.bind(id, "node_mouseout", function (p){
				return callback.call(p);
			});
			return this;
		};
		this.nodeHover = function (mouseover, mouseout) {
			this.nodeMouseOver(mouseover).nodeMouseOut(mouseout);
			return this;
		};
		this.plotMouseOver = function (callback) {
			zingchart.bind(id, "plot_mouseover", function (p){
				return callback.call(p);
			});
			return this;
		};
		this.plotMouseOut = function (callback) {
			zingchart.bind(id, "plot_mouseout", function (p){
				return callback.call(p);
			});
			return this;
		};
		this.plotHover = function (mouseover, mouseout) {
			this.plotMouseOver(mouseover).plotMouseOut(mouseout);
			return this;
		};
		this.chartClick = function (callback) {
			zingchart.bind(id, "click", function (p){
				return callback.call(p);
			});
			return this;
		};

		// GLOBAL RETURN ==================================================
		return this.render({id:id,data:chartdata});
	};

}( jQuery ));