{
	"palette" : {

		"pie" : [
			["#ffffff", "#25a6f7", "#25a6f7", "#25a6f7"],
			["#ffffff", "#f0f0f0", "#f0f0f0", "#f0f0f0"]
		],
		"line" : [
			["#4dbac0", "#4dbac0", "#4dbac0", "#4dbac0"],
			["#25a6f7", "#25a6f7", "#25a6f7", "#25a6f7"],
			["#c7c7c7", "#c7c7c7", "#c7c7c7", "#c7c7c7"]
		]
	},

	"graph" : {
		"title" : {
			"font-family":"Raleway",
			"font-color":"#444444",
			"background-color":"none",
			"align":"left",
			"font-size":"16px",
			"font-weight":"700",
			"height":"40px"
		},
		"subtitle":{
			"font-size":"12px",
            "font-family":"Raleway",
            "font-weight":"200",
            "font-color":"#666666",
            "offset-x":"-20px"
		},

		"scale-x" : {
				"line-color":"#666666",
				"line-width":"1px",
				"line-style":"solid",
				"font-color":"#666666",
				"tick" : {
					"visible":false,
					"line-color":"#666666",
					"line-width":"1px"
				},
				"guide":{
                    "rules":[
	                    {
	                        "rule":"%i == 0",
	                        "visible":false
	                    },
	                    {
	                        "rule":"%i > 0",
	                        "line-style":"solid",
	                        "line-width":"1px",
	                        "line-color":"#999999",
	                        "alpha":"0.25"
	                    },
	                    {
	                        "rule":"%i == 11",
	                        "visible":false
	                    }
	                ]
				},
				"item" : {
					"font-family":"Raleway",
					"font-color":"#666666",
					"font-size":"10px"
				}
			},
		"scale-y" : {
				"line-color":"none",
				"line-width":"0px",
				"line-style":"solid",
				"font-color":"#666666",
                "label":{
                	"font-color":"#666666"
                },
				"guide":{
	                "line-style":"solid",
	                "line-color":"#999999"
				},
				"tick" : {
					"visible":false
				},
				"item" : {
					"font-family":"Raleway",
					"font-color":"#666666",
					"font-size":"10px",
					"rules":[
	                    {
	                        "rule":"%i == 0",
	                        "visible":false
	                    },
	                    {
	                        "rule":"%i == 10",
	                        "visible":false
	                    }
	                ]
				}
		},
        "tooltip":{
            "padding":"5 10",
            "border-width":"1px",
            "border-radius":5,
            "shadow":false,
            "font-color":"#fff"
        }

	},

	"line" : {
		"plotarea":{
            "margin":"40 0 20 60"
        },
        "plot":{
        	"aspect":"spline",
        	"shadow":0
        }
	},

	"area" : {
		"plotarea":{
            "margin":"40 0 20 60"
        },
        "plot":{
        	"aspect":"spline",
        	"line-width":1,
        	"alpha-area":0.8,
        	"alpha":1,
        	"shadow":0
        }
	},

	"pie" : {
		"plot" : {
			"ref-angle":270,
			"slice":34,
			"shadow":false,
			"border-color":"none",
			"value-box":{
                "anchor":"c",
                "font-family":"Raleway",
                "type":"first",
                "connected":false,
                "placement":"in",
                "font-color":"#666666",
                "font-size":"20px"
            },
            "animate":true,
            "effect":2
		},
		"plotarea":{
            "margin-top":10,
            "x":"30%"
        }             
	}
}

