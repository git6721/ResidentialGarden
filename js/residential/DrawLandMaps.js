function DrawLandMaps(){
	this.mapsData0=mapsData0;
	this.mapsData1=mapsData1;
	this.mapsData2=mapsData2;
	this.mapsData3=mapsData3;
	this.mapsData4=mapsData4;
	this.mapsData5=mapsData5;
	this.mapsData6=mapsData6;
	
	this.treeSize=new Array(10);//Ê÷µÄËæ»ú³ß´ç
	for(var i=0;i<10;i++)
	{
		var numF=Math.random()*2;
		this.treeSize[i]=numF;
	}
	
	this.treeNum=new Array(6);//Ê÷µÄ±àÂë
	for(var i=0;i<this.treeNum.length;i++)
	{
		var numF=Math.round(Math.random()*5);
		this.treeNum[i]=numF;
	}
	//alert(this.treeNum);
	this.R=6;//ÖÐÑëË®³ØµÄ´óÐ¡
	this.r=8;//±ßÉÏÖÖ»¨µÄ·¶Î§
	
	this.Radin =0.017453;
	
	this.FlowerSize=new Array(360);//»¨µÄËæ»ú³ß´ç
	for(var i=0;i<360;i++)
	{
		this.FlowerSize[i]=Math.random()*1.5;
	}
}
DrawLandMaps.prototype.drawLandMaps=function(ms)
{
	//¿ªÆô»ìºÏ
    gl.enable(gl.BLEND);  
    //ÉèÖÃ»ìºÏÒò×Ó
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	
	ms.pushMatrix();
	this.drawLeftBelowLand(this.mapsData0,ms);
	ms.popMatrix();
	
	ms.pushMatrix();
	this.drawRightBelowLand(this.mapsData1,ms);
	ms.popMatrix();
	
	ms.pushMatrix();
	this.drawMiddleLeftLand(this.mapsData2,ms);
	ms.popMatrix();
	
	ms.pushMatrix();
	this.drawMiddleRightLand(this.mapsData3,ms);
	ms.popMatrix();
	
	ms.pushMatrix();
	this.drawWestToNorthLand(this.mapsData4,ms);
	ms.popMatrix();
	
	ms.pushMatrix();
	this.drawEastToNorthLand(this.mapsData5,ms);
	ms.popMatrix();
	
	ms.pushMatrix();
	this.drawCenterLand(this.mapsData6,ms);
	ms.popMatrix();
	
	gl.disable(gl.BLEND);
	
};
DrawLandMaps.prototype.drawLeftBelowLand=function(plantData,ms)
{//¸ø×óÏÂ·½ÆÌÂ·
	ms.pushMatrix();
	for(var i=0;i<plantData.length/3;i++)
	{
		ms.pushMatrix();
		ms.translate(land[0]+plantData[i*3]*landSize,0,plantData[(i*3+1)]*landSize+land[1]);
		
		ms.pushMatrix();
		ms.scale(landSize,landSize,landSize);
		grand.drawSelf(ms,texMap[plantData[(i*3+2)]]);//²ÝÆº
		ms.popMatrix();
		
		if(plantData[(i*3+2)]=="grass1_1")
		{
			ms.pushMatrix();
			this.num=this.treeNum[plantData[i*3]%6];
			switch(this.num)
			{
				case 4:
				ms.pushMatrix();
				ms.scale(this.treeSize[plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+2,this.treeSize[plantData[i*3]%10]+1);
				trees[4].drawSelf(ms,texMap["tree"]);//×ØéµÊ÷
				ms.popMatrix();
				
				ms.pushMatrix();
				ms.translate(0,0,-0.2);
				ms.scale(this.treeSize[10-plantData[i*3]%10]+1.2,this.treeSize[10-plantData[i*3]%10]+1.8,this.treeSize[10-plantData[i*3]%10]+1);
				trees[4].drawSelf(ms,texMap["tree"]);//×ØéµÊ÷
				ms.popMatrix();
				
				break;
				case 5:
				ms.pushMatrix();
				ms.scale(this.treeSize[plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+6,this.treeSize[plantData[i*3]%10]+0.8);
				trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
				ms.popMatrix();
				
				ms.pushMatrix();
				ms.translate(0,0,-0.2);
				ms.scale(this.treeSize[plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+4,this.treeSize[plantData[i*3]%10]+0.8);
				trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
				ms.popMatrix();
				break;
				default :
				trees[this.num].drawSelf(ms,texMap["tree1"]);//×ØéµÊ÷
				break;
			}
			ms.popMatrix();
		}
		ms.popMatrix();
	}
	ms.popMatrix();
};
DrawLandMaps.prototype.drawRightBelowLand=function(plantData,ms)
{//¸øÓÒÏÂ·½ÆÌÂ·
	for(var i=0;i<plantData.length/3;i++)
	{
		ms.pushMatrix();
		ms.translate(land[2]-plantData[i*3]*landSize,0,plantData[(i*3+1)]*landSize+land[3]);
		
		ms.pushMatrix();
		ms.scale(landSize,landSize,landSize);
		grand.drawSelf(ms,texMap[plantData[(i*3+2)]]);//²ÝÆº
		ms.popMatrix();
		
		if(plantData[(i*3+2)]=="grass1_1")
		{
			ms.pushMatrix();
			this.num=this.treeNum[plantData[i*3]%6];
			switch(this.num)
			{
				case 4:
				ms.pushMatrix();
				ms.scale(this.treeSize[plantData[i*3]%10]+0.8,this.treeSize[plantData[i*3]%10]+2,this.treeSize[plantData[i*3]%10]+0.8);
				trees[4].drawSelf(ms,texMap["tree"]);//×ØéµÊ÷
				ms.popMatrix();
				
				ms.pushMatrix();
				ms.translate(0,0,-0.2);
				ms.scale(this.treeSize[plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+1.5,this.treeSize[plantData[i*3]%10]+0.8);
				trees[4].drawSelf(ms,texMap["tree"]);//×ØéµÊ÷
				ms.popMatrix();
				break;
				case 5:
				ms.pushMatrix();
				ms.scale(this.treeSize[plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+4,this.treeSize[plantData[i*3]%10]+0.8);
				trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
				ms.popMatrix();
				
				ms.pushMatrix();
				ms.translate(0,0,-0.2);
				ms.scale(this.treeSize[10-plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+3,this.treeSize[10-plantData[i*3]%10]+0.8);
				trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
				ms.popMatrix();
				break;
				default :
				trees[3-this.num].drawSelf(ms,texMap["tree1"]);//×ØéµÊ÷
				break;
			}
			
			ms.popMatrix();
		}
		
		ms.popMatrix();
	}
};
DrawLandMaps.prototype.drawMiddleRightLand=function(plantData,ms)
{//¸øÖÐÓÒ·½ÆÌÂ·
	ms.pushMatrix();
	for(var i=0;i<plantData.length/3;i++)
	{
		ms.pushMatrix();
		ms.translate(land[4]+plantData[i*3]*landSize,0,land[5]+plantData[(i*3+1)]*landSize);
		
		ms.pushMatrix();
		ms.scale(landSize,landSize,landSize);
		grand.drawSelf(ms,texMap[plantData[(i*3+2)]]);//²ÝÆº
		ms.popMatrix();
		
		if(plantData[(i*3+2)]=="grass4_1")
		{
			ms.pushMatrix();
			this.num=this.treeNum[plantData[i*3]%6];
			switch(this.num)
			{
				case 4:
				ms.pushMatrix();
				ms.scale(this.treeSize[plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+5,this.treeSize[plantData[i*3]%10]+0.8);
				trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
				ms.popMatrix();
				
				ms.pushMatrix();
				ms.translate(0,0,-0.2);
				ms.scale(this.treeSize[10-plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+4,this.treeSize[plantData[i*3]%10]+0.8);
				trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
				ms.popMatrix();
				break;
				
				case 5:
				ms.pushMatrix();
				ms.scale(this.treeSize[plantData[i*3]%10]+0.8,this.treeSize[plantData[i*3]%10]+2,this.treeSize[plantData[i*3]%10]+0.8);
				trees[4].drawSelf(ms,texMap["tree"]);//×ØéµÊ÷
				ms.popMatrix();
				
				ms.pushMatrix();
				ms.translate(0,0,-0.2);
				ms.scale(this.treeSize[plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+2.8,this.treeSize[10-plantData[i*3]%10]+0.8);
				trees[4].drawSelf(ms,texMap["tree"]);//×ØéµÊ÷
				ms.popMatrix();
				break;
				
				default :
				trees[this.num].drawSelf(ms,texMap["tree1"]);//×ØéµÊ÷
				break;
			}
			ms.popMatrix();
		}
		ms.popMatrix();
	}
	ms.popMatrix();
};
DrawLandMaps.prototype.drawMiddleLeftLand=function(plantData,ms)
{//¸øÖÐ×ó·½ÆÌÂ·
	for(var i=0;i<plantData.length/3;i++)
	{
		ms.pushMatrix();
		ms.translate(land[6]-plantData[i*3]*landSize,0,land[7]+plantData[(i*3+1)]*landSize);
		
		ms.pushMatrix();
		ms.scale(landSize,landSize,landSize);
		grand.drawSelf(ms,texMap[plantData[(i*3+2)]]);//²ÝÆº
		ms.popMatrix();
		
		if(plantData[(i*3+2)]=="grass4_1")
		{
			ms.pushMatrix();
			this.num=this.treeNum[plantData[i*3]%6];
			switch(this.num)
			{
				case 4:
				ms.pushMatrix();
				ms.scale(this.treeSize[plantData[i*3]%10]+0.5,this.treeSize[plantData[i*3]%10]+2,this.treeSize[plantData[i*3]%10]+0.3);
				trees[4].drawSelf(ms,texMap["tree"]);//×ØéµÊ÷
				ms.popMatrix();
				
				ms.pushMatrix();
				ms.translate(0,0,0.3);
				ms.scale(this.treeSize[plantData[i*3]%10]+0.8,this.treeSize[plantData[i*3]%10]+2.4,this.treeSize[plantData[i*3]%10]+0.5);
				trees[4].drawSelf(ms,texMap["tree"]);//×ØéµÊ÷
				ms.popMatrix();
				break;
				case 5:
				ms.pushMatrix();
				ms.scale(this.treeSize[plantData[i*3]%10]+0.8,this.treeSize[plantData[i*3]%10]+4,this.treeSize[plantData[i*3]%10]+1);
				trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
				ms.popMatrix();
				
				ms.pushMatrix();
				ms.translate(0,0,-0.2);
				ms.scale(this.treeSize[plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+6,this.treeSize[plantData[i*3]%10]+0.8);
				trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
				ms.popMatrix();
				break;
				default :
				trees[3-this.num].drawSelf(ms,texMap["tree1"]);//×ØéµÊ÷
				break;
			}
			ms.popMatrix();
		}
		ms.popMatrix();
	}
};
DrawLandMaps.prototype.drawWestToNorthLand=function(plantData,ms)
{//¸øÎ÷±±·½ÆÌÂ·
	ms.pushMatrix();
	for(var i=0;i<plantData.length/3;i++)
	{
		ms.pushMatrix();
		ms.translate(land[8]+plantData[i*3]*landSize,0,land[9]+plantData[(i*3+1)]*landSize);
		
		ms.pushMatrix();
		ms.scale(landSize,landSize,landSize);
		grand.drawSelf(ms,texMap[plantData[(i*3+2)]]);//²ÝÆº
		ms.popMatrix();
		
		if(plantData[(i*3+2)]=="grass1_1")
		{
			ms.pushMatrix();
			ms.scale(this.treeSize[plantData[i*3]%10]+1.2,this.treeSize[plantData[i*3]%10]+7,this.treeSize[plantData[i*3]%10]+0.8);
			trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
			ms.popMatrix();
			
			ms.pushMatrix();
			ms.translate(0,0,-0.3);
			ms.scale(this.treeSize[plantData[i*3]%10]+1,this.treeSize[(plantData[i*3]%10)]+8,this.treeSize[plantData[i*3]%10]+0.8);
			trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
			ms.popMatrix();
		}
		ms.popMatrix();
	}
	ms.popMatrix();
};
DrawLandMaps.prototype.drawEastToNorthLand=function(plantData,ms)
{//¸ø¶«±±·½ÆÌÂ·
	ms.pushMatrix();
	for(var i=0;i<plantData.length/3;i++)
	{
		ms.pushMatrix();
		ms.translate(land[10]-plantData[i*3]*landSize,0,land[11]+plantData[(i*3+1)]*landSize);
		
		ms.pushMatrix();
		ms.scale(landSize,landSize,landSize);
		grand.drawSelf(ms,texMap[plantData[(i*3+2)]]);//²ÝÆº
		ms.popMatrix();
		
		if(plantData[(i*3+2)]=="grass1_1")
		{
			ms.pushMatrix();
			ms.scale(this.treeSize[plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+7,this.treeSize[plantData[i*3]%10]+0.8);
			trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
			ms.popMatrix();
				
			ms.pushMatrix();
			ms.translate(0,0,-0.3);
			ms.scale(this.treeSize[plantData[i*3]%10]+0.8,this.treeSize[plantData[i*3]%10]+5,this.treeSize[plantData[i*3]%10]+0.8);
			trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
			ms.popMatrix();
		}
		ms.popMatrix();
	}
	ms.popMatrix();
};
DrawLandMaps.prototype.drawCenterLand=function(plantData,ms)
{//¸øÖÐÐÄ·½ÆÌÂ·
	ms.pushMatrix();
	for(var i=0;i<plantData.length/3;i++)
	{
		ms.pushMatrix();
		ms.translate(land[12]+plantData[i*3]*landSize,0,land[13]+plantData[(i*3+1)]*landSize);
		
		ms.pushMatrix();
		ms.scale(landSize,landSize,landSize);
		grand.drawSelf(ms,texMap[plantData[(i*3+2)]]);//²ÝÆº
		ms.popMatrix();
		
		if(plantData[(i*3+2)]=="grass1_1")
		{
			ms.pushMatrix();
			this.num=this.treeNum[plantData[i*3]%6];
			if(this.num<2)
			{
				this.num=5;
			}else
			{
				this.num=4;
			}
				
			switch(this.num)
			{
				case 4:
				ms.pushMatrix();
				ms.scale(this.treeSize[plantData[i*3]%10]+0.8,this.treeSize[plantData[i*3]%10]+2,this.treeSize[9-plantData[i*3]%10]+0.4);
				trees[4].drawSelf(ms,texMap["tree"]);//×ØéµÊ÷
				ms.popMatrix();
				
				ms.pushMatrix();
				ms.translate(0,0,-0.25);
				ms.scale(this.treeSize[plantData[i*3]%10]+0.8,this.treeSize[plantData[i*3]%10]+1.5,this.treeSize[9-plantData[i*3]%10]+0.4);
				trees[4].drawSelf(ms,texMap["tree"]);//×ØéµÊ÷
				ms.popMatrix();
				break;
				case 5:
				ms.pushMatrix();
				ms.scale(this.treeSize[plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+5,this.treeSize[plantData[i*3]%10]+0.8);
				trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
				ms.popMatrix();
				
				ms.pushMatrix();
				ms.translate(0,0,-0.25);
				ms.scale(this.treeSize[plantData[i*3]%10]+1,this.treeSize[plantData[i*3]%10]+6,this.treeSize[9-plantData[i*3]%10]+0.5);
				trees[5].drawSelf(ms,texMap["chuiliu"]);//´¹Áø
				ms.popMatrix();
				break;
			}
			ms.popMatrix();
		}
		ms.popMatrix();
	}
	ms.popMatrix();
	//»æÖÆÖÐÑëË®³Ø
	ms.pushMatrix();
	ms.scale(6,1,6);
	pool.drawSelf(ms,texMap["shuichi"]);
	ms.popMatrix();
	
	ms.pushMatrix();
	//»æÖÆÖÐÑëË®³Ø±ßµÄ»¨
	for(var angle=0;angle<360;angle=angle+5)
	{
		ms.pushMatrix();
		var angradElevation=this.Radin*angle;
		ms.translate(this.r*Math.sin(angradElevation),0,this.r*Math.cos(angradElevation));
		ms.scale(1+this.FlowerSize[angle],1.2+this.FlowerSize[angle],1+this.FlowerSize[angle]);
		flower.drawSelf(ms,texMap["suanFlower"]);//»¨
		ms.popMatrix();
	}
	ms.popMatrix();
};