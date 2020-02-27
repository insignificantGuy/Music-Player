	//check sign
	var v=0;
	var i=document.getElementById("start");
	function play(){
			if(v%2==0){
				i.play();
			}
			else{
				i.pause();
			}
			v++;
	}

	//change sign
	function myFunction(x){
		x.classList.toggle("fa-pause");
	}

	//Frame Function
	var o=i.duration;
	var width=0;
	var g=0;
	var id;
	var t=document.getElementById("bar");
	console.log(t);
	var n=t.style.width;
	console.log(n);
	var z=document.getElementById("progress");
	function move(){
		console.log("move invoked");
			clearInterval(id);
			id=setInterval(frame,10*o);
			function frame(){
				if(width>=100){
					clearInterval(id);
				}
				else{
					width++;
					z.style.width=width+"%";
					
				}
			}
		}


	function checks(){
		if(g%2==0){
			move();
			g++;
		}
		else{
			pause();
			g++;
		}
	}

	//function time
	var st=document.getElementById("starte")
	var et=document.getElementById("end");
	console.log(o);
	var startTime; var ide;
	var quo= Math.floor(o/60);
	var rem= Math.floor(o%60);
	var time=""+quo+"."+rem;
	var min=0;
	var sec1=0;
	var sec2=0;
	et.innerHTML=time;
	var timer=""+min+"."+sec1+""+sec2;
	st.innerHTML=timer;
	function start_time(){
		clearInterval(ide)
		ide=setInterval(timer,1000);
		function timer(){
			if(sec1==5&&sec2==9){
				sec1=0;
				sec2=0;
				min++;
			}
			else{
				if(sec2==9){
					sec1++;
					sec2=0;
				}
				else{
					sec2++;
				}
			}
			timer=""+min+"."+sec1+""+sec2;
			st.innerHTML=timer;
		}
}

    //function pause
	function pause(){
		clearInterval(id);
		clearInterval(ide);
		console.log("pause invoked")
	}