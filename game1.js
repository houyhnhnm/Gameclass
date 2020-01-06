var gamedata = []; 
var looper;
var gamecounter=0;
for (looper = 0; looper < 20*20; looper++) {
	gamedata.push(2);
} 

function displayarray(){
	document.getElementById("gamespace").innerHTML="";
	var l1;
	var l2=0;
	var l3=0;
	for(l1=0;l1< 20*20; l1++){
		switch (gamedata[l1]) {
			case 0:
				document.getElementById("gamespace").innerHTML=document.getElementById("gamespace").innerHTML+"0";
			break;
			case 1:
				document.getElementById("gamespace").innerHTML=document.getElementById("gamespace").innerHTML+"1";
			break;
			case 2:
				document.getElementById("gamespace").innerHTML=document.getElementById("gamespace").innerHTML+"-";
			break;
			case 3:
				document.getElementById("gamespace").innerHTML=document.getElementById("gamespace").innerHTML+"3";
			break;
			case 4:
				document.getElementById("gamespace").innerHTML=document.getElementById("gamespace").innerHTML+"4";
			break;
		}
		if((l1+1)%20==0){
			document.getElementById("gamespace").innerHTML=document.getElementById("gamespace").innerHTML+"<p></p>";
		}
	}
}

function Pcheck(){
	var Paxis1=document.getElementById("Pa1").selectedIndex;
	var Paxis2=document.getElementById("Pa2").selectedIndex;
	var Ptype1=document.getElementById("Pt1").selectedIndex;
	var l1=0;
	var l2=0;
	var checkval=true;
	if((Paxis1==-1)||(Paxis2==-1)||(Ptype1==-1)){
		document.getElementById("errormessage").innerHTML="have not selected an axis or type for Puser"
	}
	else if(gamedata[(Paxis1*20)+Paxis2]!=2){ 
		document.getElementById("errormessage").innerHTML="Spot already taken for Puser"
	}
	else {
		checkval=true;
		switch(Ptype1){
			case 0:
				l1=Paxis1; l2=0;
				while((l2<20)&&(checkval==true)){
					if((gamedata[(l1*20)+l2]==3)||(gamedata[(l1*20)+l2]==0)){
						checkval=false;
						document.getElementById("errormessage").innerHTML="horizontal collision Puser can't use space"
					}
					l2++;
				}
				l1=0; l2=Paxis2;
				while((l1<20)&&(checkval==true)){
					if(gamedata[(l1*20)+l2]==4){
						checkval=false;
						document.getElementById("errormessage").innerHTML="vertical collision Puser can't use space"
					}
					l1++;
				}
			break;
			case 1:
				l1=0; l2=Paxis2;
				while((l1<20)&&(checkval==true)){
					if((gamedata[(l1*20)+l2]==1)||(gamedata[(l1*20)+l2]==4)){
						checkval=false;
						document.getElementById("errormessage").innerHTML="vertical collision Puser can't use space"
					}
					l1++;
				}
				l1=Paxis1; l2=0;
				while((l2<20)&&(checkval==true)){
					if(gamedata[(l1*20)+l2]==3){
						checkval=false;
						document.getElementById("errormessage").innerHTML="horizontal collision Puser can't use space"
					}
					l2++;
				}
			break;
		}
		if(checkval==true){//place in element
			gamedata[(Paxis1*20)+Paxis2]=Ptype1;
			document.getElementById("Pb1").disabled=true;
			document.getElementById("Nb1").disabled=false;
			document.getElementById("actionmessage").innerHTML="Go Nuser";
			document.getElementById("errormessage").innerHTML="";
			gamecounter++;
		}
		else{}//error message set already and do nothing
	}
	displayarray();
}
function Ncheck(){
	var Naxis1=document.getElementById("Na1").selectedIndex;
	var Naxis2=document.getElementById("Na2").selectedIndex;
	var Ntype1=document.getElementById("Nt1").selectedIndex;
	var l1=0;
	var l2=0;
	var checkval=true;
	if((Naxis1==-1)||(Naxis2==-1)||(Ntype1==-1)){
		document.getElementById("errormessage").innerHTML="have not selected an axis or type for Nuser"
	}
	else if(gamedata[(Naxis1*20)+Naxis2]!=2){ //FORMER has diagonals if(gamedata[(Naxis1*20)+Naxis2]!=4)
		document.getElementById("errormessage").innerHTML="Spot already taken for Nuser"
	}
	else {
		checkval=true;
		switch(Ntype1){
			case 0:
				l1=Naxis1; l2=0;
				while((l2<20)&&(checkval==true)){
					if((gamedata[(l1*20)+l2]==3)||(gamedata[(l1*20)+l2]==0)){
						checkval=false;
						document.getElementById("errormessage").innerHTML="horizontal collision Nuser can't use space"
					}
					l2++;
				}
				l1=0; l2=Naxis2;
				while((l1<20)&&(checkval==true)){
					if(gamedata[(l1*20)+l2]==1){
						checkval=false;
						document.getElementById("errormessage").innerHTML="vertical collision Nuser can't use space"
					}
					l1++;
				}
			break;
			case 1:
				l1=0; l2=Naxis2;
				while((l1<20)&&(checkval==true)){
					if((gamedata[(l1*20)+l2]==1)||(gamedata[(l1*20)+l2]==4)){
						checkval=false;
						document.getElementById("errormessage").innerHTML="vertical collision Nuser can't use space"
					}
					l1++;
				}
				l1=Naxis1; l2=0;
				while((l2<20)&&(checkval==true)){
					if(gamedata[(l1*20)+l2]==0){
						checkval=false;
						document.getElementById("errormessage").innerHTML="horizontal collision Nuser can't use space"
					}
					l2++;
				}
			break;
		}
		if(checkval==true){//place in element
			gamedata[(Naxis1*20)+Naxis2]=Ntype1+3;
			document.getElementById("Nb1").disabled=true;
			document.getElementById("Pb1").disabled=false;
			document.getElementById("actionmessage").innerHTML="Go Puser";
			document.getElementById("errormessage").innerHTML="";
			gamecounter++;
		}
		else{}//error message set already and do nothing
	}

	displayarray();
}
function getcountermain(){
document.getElementById("counterspace").innerHTML=gamecounter;
}