"use strict";
exports.gameMain = {
		elements:[],
		init:function(){
			var mainupdate = new sfc.Sprite({});
			var i;
		
			var fiveButton = new sfc.Sprite({
				
				x:0,
				y:sfc.P.maxY-1200,
				width:100,
				height:100,
				type:SPRITE_TYPE_TEXT,
				color:"#7FFFD4",
				fontStyle:"120px Arial",
				text:"5",
				
			
		});
			var fourButton = new sfc.Sprite({
				
				x:200,
				y:sfc.P.maxY-1200,
				width:100,
				height:100,
				type:SPRITE_TYPE_TEXT,
				color:"#7FFFD4",
				fontStyle:"120px Arial",
				text:"4",
				
		
		});
			var sixButton = new sfc.Sprite({
				
				x:400,
				y:sfc.P.maxY-1200,
				width:100,
				height:100,
				type:SPRITE_TYPE_TEXT,
				color:"#7FFFD4",
				fontStyle:"120px Arial",
				text:"6",
				
		
		});
			var oneButton = new sfc.Sprite({
				
				x:800,
				y:sfc.P.maxY-1200,
				width:100,
				height:100,
				type:SPRITE_TYPE_TEXT,
				color:"#7FFFD4",
				fontStyle:"120px Arial",
				text:"1",
				
		
		});
			var twoButton = new sfc.Sprite({
				
				x:600,
				y:sfc.P.maxY-1200,
				width:100,
				height:100,
				type:SPRITE_TYPE_TEXT,
				color:"#7FFFD4",
				fontStyle:"120px Arial",
				text:"2",
				
		
		});
			var threeButton = new sfc.Sprite({
				
				x:0,
				y:sfc.P.maxY-500,
				width:100,
				height:100,
				type:SPRITE_TYPE_TEXT,
				color:"#7FFFD4",
				fontStyle:"120px Arial",
				text:"3",
				
			
		});
			var nineButton = new sfc.Sprite({
				
				x:200,
				y:sfc.P.maxY-500,
				width:100,
				height:100,
				type:SPRITE_TYPE_TEXT,
				color:"#7FFFD4",
				fontStyle:"120px Arial",
				text:"9",
				
			
		});
			var sevenButton = new sfc.Sprite({
				
				x:800,
				y:sfc.P.maxY-500,
				width:100,
				height:100,
				type:SPRITE_TYPE_TEXT,
				color:"#7FFFD4",
				fontStyle:"120px Arial",
				text:"7",
				
		
		});
			var eightButton = new sfc.Sprite({
				
				x:500,
				y:sfc.P.maxY-500,
				width:100,
				height:100,
				type:SPRITE_TYPE_TEXT,
				color:"#7FFFD4",
				fontStyle:"120px Arial",
				text:"8",
				
		
		});
			var zeroButton = new sfc.Sprite({
				
				x:650,
				y:sfc.P.maxY-500,
				width:100,
				height:100,
				type:SPRITE_TYPE_TEXT,
				color:"#7FFFD4",
				fontStyle:"120px Arial",
				text:"0",
				
		
		});
			var sprites = {
			s1:oneButton,
			s2:twoButton,
			s3:threeButton,
			s4:fourButton,
			s5:fiveButton,
			s6:sixButton,
			s7:sevenButton,
			s8:eightButton,
			s9:nineButton,
			};
			var unfive = {
			s1:oneButton,
			s2:twoButton,
			s3:threeButton,
			s4:fourButton,
			s6:sixButton,
			s7:sevenButton,
			s8:eightButton,
			s9:nineButton,
			};
			var Ssizeone = {
				o1:fourButton,
				o2:fiveButton,
				o3:sixButton,
			};
			var Ssizetwo = {
				t1:oneButton,
				t2:twoButton,
			};
			var Ssizethree = {
				th1:threeButton,
				th2:nineButton,
			};
			var Ssizefour = {
				f1:sevenButton,
				f2:eightButton,
			};
			var Sroadone = {
				r1:oneButton,
				r2:fourButton,
				r3:threeButton,
				r4:sevenButton,
			};
			var Sroadtwo = {
				r1:twoButton,
				r2:sixButton,
				r3:nineButton,
				r4:eightButton,
			};
			
		for(var i in Ssizeone){
		Ssizeone[i].update = function (){
       			this.x ++;
				this.y ++;
		
				if(this.y>=sfc.P.maxY-100)
				{
					
						this.y=sfc.P.maxY-1200;
						
			
				}
				if(this.x==750)
				{
						
						this.x=0;
					
				}
					
		}
	}
		for(var i in Ssizetwo){
		Ssizetwo[i].update = function (){
       			this.x --;
				this.y ++;
				
				
		
				if(this.y>=sfc.P.maxY-100)
				{
						
						this.y=sfc.P.maxY-1200;
						
			
				}
				if(this.x==0)
				{
						
						this.x=700;
						
				}
					
		}
	}
		for(var i in Ssizethree){
		Ssizethree[i].update = function (){
       			this.x ++;
				this.y --;
				
		
				if(this.y<=sfc.P.maxY-1200)
				{
						
						this.y=sfc.P.maxY;
						
			
				}
				if(this.x==750)
				{
						
						this.x=0;
						
				}
					
		}
	}
		for(var i in Ssizefour){
		Ssizefour[i].update = function (e){
       			this.x --;
				this.y --;
				
		
				if(this.y<=sfc.P.maxY-1200)
				{
						
						this.y=sfc.P.maxY;
						
			
				}
				if(this.x==0)
				{
						
						this.x=700;
						
				}
					
		}
	};
		zeroButton.update = function (e){
       			this.x --;
				this.y --;
				
		
				if(this.y<=sfc.P.maxY-1200)
				{
						
						this.y=sfc.P.maxY;
						
			
				}
				if(this.x==0)
				{
						
						this.x=700;
						
				}
					
		}
		var numone = Math.floor(Math.random()*100);
		var numtwo = Math.floor(Math.random()*10);
		
		var questionone = new sfc.Sprite({
				x:30,
				y:150,
				width:500,
				height:120,
				color:"#fff",
				type:SPRITE_TYPE_TEXT,
				fontStyle:"150px Arial",
				text:numone.toString()
		})
		var questiontwo = new sfc.Sprite({
				x:300,
				y:150,
				width:500,
				height:120,
				color:"#fff",
				type:SPRITE_TYPE_TEXT,
				fontStyle:"150px Arial",
				text:numtwo.toString()
		})
		var trueEnd=0;
		var tips = new sfc.Sprite({
				x:sfc.P.maxX-150,
				y:sfc.P.maxY-150,
				width:150,
				height:150,
				color:"#030303",
				type:SPRITE_TYPE_TEXT,
				fontStyle:"150px Arial",
				text:trueEnd.toString()
		})
		var answer = new sfc.Sprite({
				
				x:600,
				y:150,
				width:500,
				height:120,
				color:"#fff",
				type:SPRITE_TYPE_TEXT,
				fontStyle:"150px Arial",
				text:""
				
				
		});
		answer.update = function (){
			var trueresult = numone*numtwo;
			for(var i in Sroadone)
					{
      		 					for(var j in Sroadtwo){
									if(sfc.Collider.touchCheck(Sroadone[i],Sroadtwo[j]))
								{			
										
										Sroadone[i].y=sfc.P.maxY-600;
										
										Sroadtwo[j].y=sfc.P.maxY-700;
								
								}
					}
}
			for(var i in Sroadone)
					{
      		 					for(var j in Sroadone){
									if(Sroadone[i]!=Sroadone[j]){
									if(sfc.Collider.touchCheck(Sroadone[i],Sroadone[j]))
								{			
										
										Sroadone[i].y=sfc.P.maxY-400;
										
										Sroadone[j].y=sfc.P.maxY-200;
								
								}
									}
					}
}
			for(var i in Sroadtwo)
					{
      		 					for(var j in Sroadtwo){
									if(Sroadtwo[i]!=Sroadtwo[j]){
									if(sfc.Collider.touchCheck(Sroadtwo[i],Sroadtwo[j]))
								{			
										
										Sroadtwo[i].y=sfc.P.maxY-100;
										
										Sroadtwo[j].y=sfc.P.maxY-300;
								
								}
									}
					}
}
			
			for(var i in unfive)
		{
      		
					if(sfc.Collider.touchCheck(unfive[i],fiveButton))
					{
						unfive[i].x=450;
						unfive[i].y=650;
						fiveButton.x=550;
						fiveButton.y=750;
						
					}
		}
			for(var i in sprites)
		{
					if(sfc.Collider.touchCheck(sprites[i],zeroButton))
					{
						sprites[i].x=sfc.P.maxX/4;
						sprites[i].y=sfc.P.maxY/4;
						zeroButton.x=sfc.P.maxX/2;
						zeroButton.y=sfc.P.maxY/2;
						
					}
		}
			
			if(fontnum>=trueresult.toString().length)
				{
					
					if(trueresult==parseInt(answer.text))
					{
						trueEnd++;
						tips.text=trueEnd.toString();
					}
					else
					{
						tips.text=trueEnd.toString();
					}
					answer.text = "";
					fontnum=0;
					numone = Math.floor(Math.random()*100);
					numtwo = Math.floor(Math.random()*10);
					questionone.text=numone.toString();
					questiontwo.text=numtwo.toString();
					
				}
		}
			
		
		var temptext = answer.text;
		var fontnum=0;
		for(var i in sprites){
		sprites[i].on('touchstart',function(){
					var _temp= answer.text;
					answer.text = _temp+this.text;
					fontnum++;
					
	})
		zeroButton.on('touchstart',function(){
					var _temp= answer.text;
					answer.text = _temp+this.text;
					fontnum++;
					
	})
		}
		
		
	
	
		
		this.elements.push(questionone);
		this.elements.push(questiontwo);
		this.elements.push(zeroButton);
		this.elements.push(answer);
		for(var i in sprites){
		this.elements.push(sprites[i]);
		}
		this.elements.push(tips);
		return this.elements;
	      
	}
}