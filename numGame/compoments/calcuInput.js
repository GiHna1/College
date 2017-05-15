exports.calcuInput = {
		elements:[],
		init:function(){
			var inputShow = new sfc.Sprite({
				x:40,
				y:90,
				width:320,
				height:70,
				type:SPRITE_TYPE_INPUT,
				color:"#999",
				fontStyle:"50px Arial",
			
		});
			
		this.elements.push(inputShow);
		return this.elements;
		}
}