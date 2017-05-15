exports.mainStage = {
	stage:null,
	layer:null,
	getStage:function(){
		var stage = new sfc.Stage();
		var layer = new sfc.Layer({
			x:0,
			y:0,
			width:100,
			height:100
		});
		stage.add(layer);
		var bg = new sfc.Sprite();
		bg.x = 0;
		bg.y = 0;
		bg.width = sfc.canvas.width;
		bg.height = sfc.canvas.height;
		bg.color = "#fff";
		layer.add(bg);
		this.stage = stage;
		this.layer = layer;
		return stage;
	},

	initStage:function(){
		var that = this;
		define(['compoments/header','compoments/gameMain'], function(args){
			var header = args['header'].init();
			for(var i =0;i<header.length;i++){
				that.layer.add(header[i]);
			}
			var gameMain = args['gameMain'].init();
			for(var i =0;i<gameMain.length;i++){
				that.layer.add(gameMain[i]);
			}
		})
	}
}