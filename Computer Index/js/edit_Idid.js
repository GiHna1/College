window.onload=function(){


	var setting = {
		async: {
			enable: true,
			url:"http://heartqiu.cn/login/name?bumen=kaifa&id=0",
			type: "get",
			dataType:"json",
			autoParam:["id", "name", "isParent","pId"],
			dataFilter: filter
		},


		view: {
			addHoverDom: addHoverDom,
			removeHoverDom: removeHoverDom,
			selectedMulti: false
		},
		edit: {
			enable: true,
			showRemoveBtn: showRemoveBtn,
			showRenameBtn:false,
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			beforeDrag: beforeDrag,
			beforeRemove: beforeRemove,
			beforeAsync:zTreeAsync,
			beforeRename:beforeEditName,
			onAsyncSuccess:onAsyncSuccess,
			onAsyncError:onAsyncError
		}
	};
	


	function zTreeAsync(){
		return true;
	}
	function onAsyncSuccess(e,treeId,treeNode,msg){
		var zTree = $.fn.zTree.getZTreeObj("treeDemo");
		var zNodes = msg;
		zNodes = eval(zNodes);
		var sNode = zTree.getSelectedNodes();
		zTree.addNodes(treeNode,-1,zNodes);
	}
	function onAsyncError(e,treeId,treeNode,XMLHttpRequest,textStatus,errorThrown){
		console.log(textStatus);
		console.log(errorThrown);

	}
	function filter(treeId, parentNode, childNodes) {
			
			
		}
	var log, className = "dark";
	function beforeDrag(treeId, treeNodes) {
		return false;
	}
	
	function beforeRemove(treeId, treeNode) {
		className = (className === "dark" ? "":"dark");
		var zTree = $.fn.zTree.getZTreeObj("treeDemo");
		zTree.selectNode(treeNode);
		var delNode = zTree.getSelectedNodes();
		var flag = confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
		if(flag){
			postModifyDel(delNode[0]);

		}
		return flag;
	}
	
	function showRemoveBtn(treeId, treeNode) {
		
		return false;
	}
	
	


	var newCount = 1;
	function addHoverDom(treeId, treeNode) {
		var sObj = $("#" + treeNode.tId + "_span");
		
		if ( $("#addBtn_"+treeNode.tId).length>0||!treeNode.isParent||$("#newBtn_"+treeNode.tId).length>0) return;
		var addStr = "<span class='button new' id='newBtn_" + treeNode.tId
		+ "' title='new' onfocus='this.blur();'></span>"+"<span class='button add' id='addBtn_" + treeNode.tId
		+ "' title='add' onfocus='this.blur();'></span>";
		sObj.after(addStr);
		if ($("#addBtn_"+treeNode.tId)) 
			$("#addBtn_"+treeNode.tId).bind("click", function(){
				var zTree = $.fn.zTree.getZTreeObj("treeDemo");
				newNodeT = zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"New" + (newCount++),isParent:false});
				if (newNodeT) {
					zTree.editName(newNodeT[0]);
				}
				
				
			});
		if ($("#newBtn_"+treeNode.tId)) 
			$("#newBtn_"+treeNode.tId).bind("click", function(){
				var zTree = $.fn.zTree.getZTreeObj("treeDemo");
				newNodeO = zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"New" + (newCount++),isParent:true});
				if (newNodeO) {
					zTree.editName(newNodeO[0]);
				}
				
				
			});

		

	};
	function postModifyAdd(treeNode){
		
		setTimeout(function() {
		var postResult = postPath(treeNode,"+");
		console.log(postResult);
				$.ajax({  
					　　　　type:'get',  
					　　　　url:'http://heartqiu.cn/login/wj/kaifa/',   
						   contentType: "application/json",  
					　　　　data:'path='+postResult,  
					　　　　success:function(data){  
						　　　　　　 console.log(data);
					　　　　},  
					　　　　error: function (XMLHttpRequest, textStatus, errorThrown){  
						　　　　　　console.log(errorThrown);  
					　　　　}  
				　　});  
			}, 0);
	}
	function postModifyDel(treeNode){
		

		setTimeout(function() {
			var postResult = postPath(treeNode,"-");
			console.log(postResult);
				$.ajax({  
					　　　　type:'post',  
					　　　　url:'http://heartqiu.cn/login/text?path=',   
							contentType: "application/json",  
					　　　　data:postResult,  
					　　　　dataType : 'json',   
					　　　　success:function(data){  
						　　　　　　 console.log(data);
					　　　　},  
					　　　　error: function (XMLHttpRequest, textStatus, errorThrown){  
						　　　　　　console.log(errorThrown);  
					　　　　}  
				　　});  
			}, 0);
	};
	function postModifyNew(treeNode){
		
		setTimeout(function() {
		var postResult = postPath(treeNode,"+");
		console.log(postResult);
				$.ajax({  
					　　　　type:'get',  
					　　　　url:'http://heartqiu.cn/login/ml/kaifa/',   
						   contentType: "application/json",  
					　　　　data:'path='+postResult,  
					　　　　success:function(data){  
						　　　　　　 console.log(data);
					　　　　},  
					　　　　error: function (XMLHttpRequest, textStatus, errorThrown){  
						　　　　　　console.log(errorThrown);  
					　　　　}  
				　　});  
			}, 0);
	}
	function removeHoverDom(treeId, treeNode) {
		$("#addBtn_"+treeNode.tId).unbind().remove();
	};
	function selectAll() {
		var zTree = $.fn.zTree.getZTreeObj("treeDemo");
		var sNodes = zTree.getSelectedNodes();
		if(sNodes&&!sNodes.isParent&&sNodes.length>0){
			setTimeout(function() {
			var postResult = postPath(sNodes[0],"+");
				$.ajax({  
					　　　　type:'get',  
					　　　　url:'http://heartqiu.cn/login/text',   
						   contentType: "application/json",  
					　　　　data:"path=/kaifa"+postResult,  
					　　　　success:function(data){  
									document.getElementById('documentText').value = data;
						　
					　　　　},  
					　　　　error: function (XMLHttpRequest, textStatus, errorThrown){  
						　　　　　　console.log(errorThrown);  
					　　　　}  
				　　});  
			}, 0);
		}
		else return;
		

	}
	function postPath(treeNode,flag){
		var path;
		if(treeNode.getPath().length==1){
			path="/"+treeNode.name;
		}
		else {
			var nowNode = treeNode;
			var path="";
			for(var i=0;i<treeNode.getPath().length;i++){
				path="/"+nowNode.name+path;
				nowNode = nowNode.getParentNode();
				}
		}
		if(flag=="+"){
			
			return path.toString();
		}
		else if(flag=="-"){
			return path.toString();
		}
		else{
			console.log("flag_parsenterror");
		}
		
		

	}
	function beforeEditName(treeId, treeNode, newName) {
				if (newName.length == 0) {
					console.log("节点名称不能为空");
					var zTree = $.fn.zTree.getZTreeObj("treeDemo");
					setTimeout(function(){zTree.editName(treeNode)}, 10);
					return false;
				}
				else if(!treeNode.isParent){
					
					postModifyAdd(treeNode);

				}
				else {
					postModifyNew(treeNode);
				}
				return true;
			}
	$(document).ready(function(){
		$.fn.zTree.init($("#treeDemo"), setting);
		$("#treeDemo").bind("click", selectAll);
	});

};

