	//check sign
	var v = 0;
	var io;
    var o;
	var i = document.getElementById("start");
	io = i;

	function play() {
	    //console.log(io);
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

	var width=0;
	var g=0;
	var id;
	var t = document.getElementById("bar");
	var z = document.getElementById("progress");
	//Frame Function
	function move() {
	    clearInterval(id);
	    id = setInterval(frame, 10 * o);

	    function frame() {
	        if (width >= 100) {
	            clearInterval(id);
	            z.style.width = 0 + "%";
	            document.getElementById("hy").classList.toggle("fa-pause");
	            v++;
	            width = 0;

	        } else {
	            width++;
	            z.style.width = width + "%";

	        }
	    }
	}


	//function time
	o=io.duration;
	var st = document.getElementById("starte")
	var et = document.getElementById("end");
	var ide;
	var startTime;
	var min = 0;
	var sec1 = 0;
	var sec2 = 0;
	var timer = "" + min + "." + sec1 + "" + sec2;
	st.innerHTML = timer;
	var n = t.style.width;
	var quo = Math.floor(o / 60);
	var rem = Math.floor(o % 60);
	var time = "" + quo + "." + rem;
	et.innerHTML = time;

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

	function pauseTimer() {
	    clearInterval(id);
	    // console.log("pause invoked")
	}

	//reload function
	function reloade() {
	    min = 0;
	    sec1 = 0;
	    sec2 = 0;
	    width = 0;
	    document.getElementById("starte").innerHTML = "" + min + "." + sec1 + "" + sec2;
	    document.getElementById("progress").style.width = width + "%";
	    io.currentTime = 0;
	    clearInterval(id);
	    clearInterval(ide);
	    start_time();
	    move();
	}

	//write function
	function write() {	
	console.log(o);
	var n = t.style.width;
	var quo = Math.floor(o / 60);
	var rem = Math.floor(o % 60);
	var time = "" + quo + "." + rem;
	et.innerHTML = time;
	}

	function dataWrite() {
		if(v%2!=0){
			io.pause();
			document.getElementById("hy").classList.toggle("fa-pause");
			v++;
		}
	    var aa = document.getElementById('startSide')
	   	io = aa;
	   	o=io.duration;
	   	reloade();
	    write();
	    // console.log(i)
	    console.log(io);
	    play();
	}

	    window.onload = function() {
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
            write();
        }
    }