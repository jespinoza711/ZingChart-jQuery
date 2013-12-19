$(document).ready( function() {

	$.fn.extend( {
	
		zingify : function( options ) {
			
			if (options === undefined) {
				options = {};
			}

			if ( $(this).is('table') ) {
				return convertToChart.call(this, 0, options);
			} else {
				var charts = [];
				$(this).find('table').each( function(i) {
					charts.push( convertToChart.call(this, i, options) );
				});
				return charts;
			}
			
			function convertToChart(i, options) {
				
				if ( options.target !== undefined) {
					var target = $('#' + options.target);
					console.log(target);
				} else {
					var target = $('<div></div>').insertAfter(this);
				}
				
				if (options.hideTable === true) {
					$(this).hide();
				}
				
				$(target).width( options.hasOwnProperty('width') ? options.width : '500px' );
				$(target).height( options.hasOwnProperty('height') ? options.height : '500px' );

				$(target).attr('id', 'zc_chart_' + i);
				
				var data = {};
				
				// extract the columns from the table into a data object
				var columns = $(this).find('thead th').map(function() {
					return $(this).text();
				});
				
				// the first <th> in <thead> corresponds to the data that will be 
				// represented on the x-axis, so we'll use that value for the x-axis label
				data['scale-x'] = { label: { text: columns[0] }, values: [] };
				
				
				// the remaining <td>s are the labels for each data series the chart will support
				// so we'll create each series array, and push each series object onto with with text
				data.series = [];
				for (var i = 1; i < columns.length; i++) {
					data.series.push( { text: columns[i], values: [] } );
				}
				
				$(this).find('tbody tr').each( function() {
					$(this).find('td').each( function(i) {
						if (i === 0) {
							data['scale-x'].values.push( $(this).html() );
						} else {
							data.series[i - 1].values.push( parseInt( $(this).html() ));
						}
					});
				});
				
				// set the title from the <caption> element if present
				if ( $(this).find('caption').html() !== undefined ) {
					data.title = { text: $(this).find('caption').html() }
				}
				
				data.legend = {};
				
				
				// now we extract JSON structure from any custom html data attributes
				
				// get key-value mapped object of all the <table> attributes
				// these will be parsed and the custom zingchart data extracted
				var attributes = {};
				$(this).each(function() {
					$.each(this.attributes, function() {
						if(this.specified) {
							attributes[this.name] = this.value;
						}
					});
				});
				
				// convert 'data-zingchart_' to 'data-zc_' (so user can specify it either way)
				for (var key in attributes) {
					if (key.substring(0,14) === 'data-zingchart') {
						newKey = key.replace('data-zingchart', 'data-zc');
						attributes[newKey] = attributes[key];
						delete attributes[key];
					}
				}
				
				// now filter out any attributes that do not begin with 'data-zc'
				for (var key in attributes) {
					if (key.substring(0,8) !== 'data-zc-') {
						delete attributes[key];
					}
				}
				
				var attrData = {};
				
				for (var key in attributes) {
					var attributeKey = key;
				
					// strip off 'data-zc_' section
					key = key.substring(8);
					
					// separate into each JSON specification, which are delimited by underscores. 
					key = key.split('_');
					
					// create a temp variable with the JSON struct corresponding to the values specified in the data attribute
					var temp = generateJSON(-1);
					
					// recursive function that generates a multi-level JSON struct from the 'flat' data attribute array
					function generateJSON(count) {
						count++;
						if (count === key.length) {
							// the last layer is not another object, but rather the value of the deepest JSON key specified
							return attributes[attributeKey]; 
						} else {
							// the keys at the outer layers specify an object as their value, so recurse the function to generate the next step
							var obj = {};
							obj[key[count]] = generateJSON(count);
							return obj;
						}
					}
					
					$.extend(attrData, temp); // for each data attribute, attrData will gain additional key-value pairs	
					
				}

				$.extend(true, data, attrData); // finally, extend all the JSON data collected from attributes into the main data variable
				
				// allow user to include JSON options in the standard form while invoking the zingify function
				if (options.hasOwnProperty('JSON')) {
					$.extend(true, data, options.JSON);
				}
				
				// temp fix: convert data['scale-x'] into data['scaleX']
				data['scaleX'] = data['scale-x'];
				
				return $(target).zingchart( { JSON: data } ); // and render the chart
				
			} // end convertToChart() function
		} // end zingify function
	}); // end $.fn.extend()
});