	//check sign
	var v = 0;
	var io;
	var o;
	var i = document.getElementById("start");
	io = i;

	function play() {
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
	var width = 0;
	var g = 0;
	var id;
	var t = document.getElementById("bar");
	var z = document.getElementById("progress");

	function move() {
	    o = io.duration;
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
	var po;
	var st = document.getElementById("starte")
	var et = document.getElementById("end");
	var ide;
	var startTime;
	var initalTime = 0;
	var endTime = io.duration.toFixed();
	var min = 0;
	var sec1 = 0;
	var sec2 = 0;
	var timer = "" + "0" + min + "." + sec1 + "" + sec2;
	st.innerHTML = timer;
	var n = t.style.width;
	o = io.duration;
	o = o.toFixed();
	var quo = Math.floor(o / 60);
	var rem = o - quo * 60;
	if (rem < 10) {
	    rem = "" + 0 + rem;

	}
	quo = quo.toString();
	quo = "0" + quo;
	var time = quo.concat('.', rem);
	et.innerHTML = time;


	function start_time() {
		initalTime=0;
	    var n = t.style.width;
	    o = io.duration;
	    o = io.duration.toFixed();
	    endTime = o;
	    var quo = Math.floor(o / 60);
	    var rem = o - quo * 60;
	    if (rem < 10) {
	        rem = "" + 0 + rem;
	    }
	    quo = quo.toString();
	    quo = "0" + quo;
	    var time = quo.concat('.', rem);
	    et.innerHTML = time;
	    clearInterval(ide);
	    ide = setInterval(timers, 1000);

	    function timers() {
	        if (initalTime != endTime) {
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
	            initalTime++;
	            timer = "" + "0" + min + "." + sec1 + "" + sec2;
	            st.innerHTML = timer;
	        } else {
	            clearInterval(ide)
	            min = 0
	            sec1 = 0;
	            sec2 = 0;
	            timer = "" + "0" + min + "." + sec1 + "" + sec2;
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
	    var n = t.style.width;
	    o = io.duration.toFixed();
	    var quo = Math.floor(o / 60);
	    var rem = o - quo * 60;
	    if (rem < 10) {
	        rem = "" + 0 + rem;
	    }
	    quo = quo.toString();
	    quo = "0" + quo;
	    var time = quo.concat('.', rem);
	    et.innerText = time;

	}

	//Next Function Playing
	function number() {
	    if(po>=document.getElementsByClassName('which').length-1){
	    	po=0; 
	    }
	    else{
	     po++;
	}
	    var nextSong = document.getElementsByClassName('which')[po];
	    var oo = nextSong.firstElementChild
	    if (v % 2 != 0) {
	        io.pause();
	        document.getElementById("hy").classList.toggle("fa-pause");
	        v++;
	    }
	    var name = nextSong.firstElementChild.firstElementChild.attributes[0].nodeValue;
	    name = name.split('/');
	    name = name[name.length - 1];
	    name = name.split('.');
	    name = name[0];
	    document.getElementById("Songname").innerHTML = name;
	    io = oo;
	    o = io.duration;
	    reloade();
	    write();
	    play();
	}

	//Writing Function Data
	function dataWrite(el) {
	    var index = Array.from(document.getElementsByClassName('playButton')).findIndex(x => x === el);
	    po = index;
	    var aa;
	    document.addEventListener('click', ({ target }) => {
	        if (target.tagName !== 'BUTTON') return;

	        if (v % 2 != 0) {
	            io.pause();
	            document.getElementById("hy").classList.toggle("fa-pause");
	            v++;
	        }
	        var name = target.parentElement.firstElementChild.firstElementChild.attributes[0].nodeValue;
	        name = name.split('/');
	        name = name[name.length - 1];
	        name = name.split('.');
	        name = name[0];
	        document.getElementById("Songname").innerHTML = name;
	        aa = target.parentElement.firstElementChild;
	        io = aa;
	        o = io.duration;
	        reloade();
	        write();
	        play();
	    });
	}

	window.onload = function() {
	    if (!window.location.hash) {
	        window.location = window.location + '#loaded';
	        window.location.reload();
	    }
	    write();
	}


	//Table
	// Change the selector if needed
	var $table = $('table'),
	    $bodyCells = $table.find('tbody tr:first').children(),
	    colWidth;

	// Get the tbody columns width array
	colWidth = $bodyCells.map(function() {
	    return $(this).width();
	}).get();

	// Set the width of thead columns
	$table.find('thead tr').children().each(function(i, v) {
	    $(v).width(colWidth[i]);
	});