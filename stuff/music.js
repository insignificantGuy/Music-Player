	//check sign
	var v = 0,io;
	var i = document.getElementById("start");
	io=i;
	function play() {
	console.log(io);
	    if (v % 2 == 0) {
	        io.play();
	        move();
	        document.getElementById("hy").classList.toggle("fa-pause");
	        start_time();
	    } else {
	        io.pause();
	        pauseBar();
	        pauseTimer();
	        document.getElementById("hy").classList.toggle("fa-pause");
	    }
	    v++;
	}

	//Frame Function
		var o = io.duration;
		var width = 0;
		var g = 0;
		var id;
		var t = document.getElementById("bar");
		var n = t.style.width;
		var z = document.getElementById("progress");
	function move() {
	    console.log("move invoked");
	    clearInterval(id);
	    id = setInterval(frame, 10 * o);

	    function frame() {
	        if (width >= 100) {
	            clearInterval(id);
	            z.style.width = 0 + "%";
	            document.getElementById("hy").classList.toggle("fa-pause");
	            v++;
	            width=0;

	        } else {
	            width++;
	            z.style.width = width + "%";

	        }
	    }
	}


	//function time
	var st = document.getElementById("starte")
	var et = document.getElementById("end");
	var ide;
	var startTime;
	var min = 0;
	var sec1 = 0;
	var sec2 = 0;
	var quo = Math.floor(o / 60);
	var rem = Math.floor(o % 60);
	var time = "" + quo + "."+rem;
	et.innerHTML = time;
	var timer = "" + min + "." + sec1 + "" + sec2;
	st.innerHTML = timer;

	function start_time() {
	    clearInterval(ide);
	    ide = setInterval(timers, 1000);

	    function timers() {
	        if (timer != time) {
	            if (sec1 == 5 && sec2 == 9) {
	                sec1 = 0;
	                sec2 = 0;
	                min++;
	            } else {
	                if (sec2 == 9) {
	                    sec1++;
	                    sec2 = 0;
	                } else {
	                    sec2++;
	                }
	            }
	            timer = "" + min + "." + sec1 + "" + sec2;
	            st.innerHTML = timer;
	        } else {
	            clearInterval(ide)
	            min = 0
	            sec1 = 0;
	            sec2 = 0;
	            timer = "" + min + "." + sec1 + "" + sec2;
	            st.innerHTML = timer;
	        }
	    }
	}

	//function pause
	function pauseBar() {
		clearInterval(ide);
	}

	function pauseTimer(){
	    clearInterval(id);
	    console.log("pause invoked")
	}

	//reload function
	function reloade(){
		min = 0;
		sec1 = 0;
		sec2 = 0;
		width=0;
		document.getElementById("starte").innerHTML=""+min+"."+sec1+""+sec2;
		document.getElementById("progress").style.width=width+"%";
		document.getElementById("start").currentTime=0;
		clearInterval(id);
		clearInterval(ide);
		start_time();
		move();
	}

	//write function
	function write(){
	var eta = document.getElementById("end");
	var quot = Math.floor(o / 60);
	var rema = Math.floor(o % 60);
	var times = "" + quot + "."+rema;
	et.innerHTML = times;
	}

	function dataWrite(){
	var aa=document.getElementById('startSide')
	console.log(i)
	io=aa;
	console.log(i);
	play();
}