(function(){
	'use struct';
	
	define(['stages/mainStage'], function(args){
		var stage = args['mainStage'].getStage();
		args['mainStage'].initStage();
		sfc.Director.stageChange(stage);
		try{
			sfc.Director.main();
		}catch(e){
			console.error(e)
		}
	})
	
}())
