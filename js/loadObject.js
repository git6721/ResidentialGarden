function loadObjFile(url,object,id)
{
	var req = new XMLHttpRequest();
	req.onreadystatechange = function () { processObjectLoadObj(req,object,id) };
	req.open("GET", url, true);
	req.responseType = "text";
	req.send(null);
}
function createObject(objDataIn,object,id)
{
	if(shaderProgArray[id])
	{
		//创建绘制用的物体
		switch(object)
		{
			case 0:
				map=new ObjObject(gl,objDataIn.vertices,objDataIn.normals,objDataIn.texcoords,shaderProgArray[id]);
			break;
	  
			case 1:
				skybox=new ObjObject(gl,objDataIn.vertices,objDataIn.normals,objDataIn.texcoords,shaderProgArray[id]);
			break;
		  
			case 2:
				rectangle=new ObjObject(gl,objDataIn.vertices,objDataIn.normals,objDataIn.texcoords,shaderProgArray[id]); 
			break;
		  
			case 3://喷泉
				pool=new ObjObject(gl,objDataIn.vertices,objDataIn.normals,objDataIn.texcoords,shaderProgArray[id]);
			break;
		  
			case 4://草坪
				grand=new ObjObject(gl,objDataIn.vertices,objDataIn.normals,objDataIn.texcoords,shaderProgArray[id]);
			break;
			
			case 5://主界面的2D对象
				obj=new ObjObject(gl,objDataIn.vertices,objDataIn.normals,objDataIn.texcoords,shaderProgArray[id]);//
				
				//mainView_2D=new BasicObject(obj,48,2,600,50,texMap["bg1"]);//3.05
				mainView_rectangle=new BasicObject(obj,48,12,600,300,texMap["bg"]);//3.05
				
				//普通状态的按钮
				lable[0]=new BasicObject(obj,7,2,1050,290,texMap["label1_1"]);
				lable[1]=new BasicObject(obj,7,2,1050,440,texMap["label0_1"]);
				
				lable[2]=new BasicObject(obj,6.4,1.4,160,236,texMap["label2_1"]);
				lable[3]=new BasicObject(obj,6.4,1.4,160,316,texMap["label3_1"]);
				lable[4]=new BasicObject(obj,6.4,1.4,160,396,texMap["label4_1"]);
				lable[5]=new BasicObject(obj,6.4,1.4,160,476,texMap["label5_1"]);
				
				lable[6]=new BasicObject(obj,12.8,9,160,326,texMap["rightView"]);
				lable[7]=new BasicObject(obj,12.8,9,1040,326,texMap["leftView"]);
				
				//按下的图标
				lable_down[0]=new BasicObject(obj,7,2,1050,290,texMap["label1_2"]);
				lable_down[1]=new BasicObject(obj,7,2,1050,440,texMap["label0_2"]);
				lable_down[2]=new BasicObject(obj,6.4,1.4,160,236,texMap["label2_2"]);
				lable_down[3]=new BasicObject(obj,6.4,1.4,160,316,texMap["label3_2"]);
				lable_down[4]=new BasicObject(obj,6.4,1.4,160,396,texMap["label4_2"]);
				lable_down[5]=new BasicObject(obj,6.4,1.4,160,476,texMap["label5_2"]);
			break;
		}
	}
	else
	{
		setTimeout(function(){createObject(objDataIn,object,id);},10); //休眠10毫秒
	}
}

function processObjectLoadObj(req,object,id)
{
	if (req.readyState == 4) 
	{
		var objStr = req.responseText;			
		this.dataTemp=fromObjStrToObjectData(objStr);
		createObject(dataTemp,object,id); 	
	}
} 