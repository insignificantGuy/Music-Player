	//check sign
	var v = 0;
	var i = document.getElementById("start");

	function play() {
	    if (v % 2 == 0) {
	        i.play();
	        move();
	        document.getElementById("hy").classList.toggle("fa-pause");
	        start_time();
	    } else {
	        i.pause();
	        pause();
	        document.getElementById("hy").classList.toggle("fa-play");

	    }
	    v++;
	}

	//Frame Function
	var o = i.duration;
	var width = 0;
	var g = 0;
	var id;
	var t = document.getElementById("bar");
	console.log(t);
	var n = t.style.width;
	console.log(n);
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
	var startTime;
	var ide;
	var quo = Math.floor(o / 60);
	var rem = Math.floor(o % 60);
	var time = "" + quo + "."+rem;
	var min = 0;
	var sec1 = 0;
	var sec2 = 0;
	et.innerHTML = time;
	var timer = "" + min + "." + sec1 + "" + sec2;
	st.innerHTML = timer;

	function start_time() {
	    clearInterval(ide);
	    ide = setInterval(timer, 1000);

	    function timer() {
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
	function pause() {
	    clearInterval(id);
	    clearInterval(ide);
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