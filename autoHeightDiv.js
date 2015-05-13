var autoHeightDiv = function(id,minHeight,wtHeight){
			//页面上特定div ,table 自动撑大，wtHeight:微调的高度;minHeight:最小高度
			var bodyHeight =parseInt(document.body.clientHeight);
			if(document.body["pre_clientHeight"]==bodyHeight){
					return;
			}
			document.body["pre_clientHeight"]=bodyHeight;
            console.log("body组件高度:"+bodyHeight);

			var divObj=document.getElementById(id);
			if(!minHeight){
				minHeight=60;
			}
			if(!wtHeight){
				wtHeight=0;
			}

			var node=document.body.firstChild;
			var heightT=0;
			while(node){
				if(node.offsetHeight){
					heightT+= parseInt(node.offsetHeight);
				}
				node=node.nextElementSibling;

			}
			console.log("其他组件高度："+heightT);
			var andH=bodyHeight-heightT;
			var divObjH=parseInt(divObj.offsetHeight);
			console.log(id+".offsetHeight高度："+divObjH);
			console.log(id+".height高度："+parseInt(divObj.style.height));
			var oH=divObjH+andH;
			if(oH>minHeight && (oH+wtHeight)>0){
				divObj.style.height=oH+wtHeight+"px";
				console.log("设置"+id+".height高度："+parseInt(divObj.style.height));
			}else{
				divObj.style.height=minHeight+"px";
				console.log("设置"+id+".height高度："+parseInt(divObj.style.height));
			}
		};
		$(document).ready(function() {
			autoHeightDiv("autoTableDiv",45,-2);
			$(window).bind('resize', function(event) {
				autoHeightDiv("autoTableDiv",45,-2);
			});
		});
