exports.header = {
	elements:[],
	init:function(){
		var headDown = new sfc.Sprite({
			x:0,
			y:0,
			width:900,
			height:200,
			color:"#63B8FF"
		});
		var headUp = new sfc.Sprite({
			x:15,
			y:15,
			width:870,
			height:170,
			color:"#87CEFA"
		});
		var headend = new sfc.Sprite({
			x:30,
			y:30,
			width:840,
			height:140,
			color:"#B0E0E6"
		});
		var times = new sfc.Sprite({
			x:220,
			y:185,
			width:150,
			height:150,
			color:"#fff",
			type:SPRITE_TYPE_TEXT,
			fontStyle:"150px Arial",
			text:"*"
		 });
		var equal = new sfc.Sprite({
			x:500,
			y:150,
			width:150,
			height:150,
			color:"#fff",
			type:SPRITE_TYPE_TEXT,
			fontStyle:"150px Arial",
			text:"="
		 });
		this.elements.push(headDown);
		this.elements.push(headUp);
		this.elements.push(headend);
		this.elements.push(times);
		this.elements.push(equal);
	
		return this.elements;
	}
}