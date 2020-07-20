var q=document.getElementById('loading-wrapper');
function remo(){
	q.style.display='none';
}




var e0=document.getElementById("prod0");
var e1=document.getElementById("prod1");
var e2=document.getElementById("prod2");
var e3=document.getElementById("prod3");
var e4=document.getElementById("prod4");
var e5=document.getElementById("prod5");
document.getElementById("prod0").addEventListener("mouseover",function(){
	e0.style.animationPlayState="paused";
	e1.style.animationPlayState="paused";
	e2.style.animationPlayState="paused";
	e3.style.animationPlayState="paused";
	e4.style.animationPlayState="paused";
	e5.style.animationPlayState="paused";
	var h=e0.offsetHeight;
	var b=e0.offsetWidth;
	var id=setInterval(frame,1);
	function frame(){
		if(h>=450 && b>=410.5)
			clearInterval(id);
		else{
			h++;
			b++;
			e0.style.height=h+'px';
			e0.style.width=b+'px';
		}
	}


})
document.getElementById("prod0").addEventListener("mouseout",function(){
	e0.style.animationPlayState="running";
	e1.style.animationPlayState="running";
	e2.style.animationPlayState="running";
	e3.style.animationPlayState="running";
	e4.style.animationPlayState="running";
	e5.style.animationPlayState="running";
	var h=e0.offsetHeight;
	var b=e0.offsetWidth;
	var id=setInterval(frame,1);
	function frame(){
		if(h<400 && b<295)
			clearInterval(id);
		else{
			h--;
			b--;
			e0.style.height=h+'px';
			e0.style.width=b+'px';
			
		}
	}


})
document.getElementById("prod1").addEventListener("mouseover",function(){
	e0.style.animationPlayState="paused";
	e1.style.animationPlayState="paused";
	e2.style.animationPlayState="paused";
	e3.style.animationPlayState="paused";
	e4.style.animationPlayState="paused";
	e5.style.animationPlayState="paused";
	var h=e1.offsetHeight;
	var b=e1.offsetWidth;
	var id=setInterval(frame,1);
	function frame(){
		if(h>=450 && b>=410.5)
			clearInterval(id);
		else{
			h++;
			b++;
			e1.style.height=h+'px';
			e1.style.width=b+'px';
		}
	}


})
document.getElementById("prod1").addEventListener("mouseout",function(){
	e0.style.animationPlayState="running";
	e1.style.animationPlayState="running";
	e2.style.animationPlayState="running";
	e3.style.animationPlayState="running";
	e4.style.animationPlayState="running";
	e5.style.animationPlayState="running";
	var h=e1.offsetHeight;
	var b=e1.offsetWidth;
	var id=setInterval(frame,1);
	function frame(){
		if(h<400 && b<295)
			clearInterval(id);
		else{
			h--;
			b--;
			e1.style.height=h+'px';
			e1.style.width=b+'px';
			
		}
	}


})

document.getElementById("prod2").addEventListener("mouseover",function(){
	e0.style.animationPlayState="paused";
	e1.style.animationPlayState="paused";
	e2.style.animationPlayState="paused";
	e3.style.animationPlayState="paused";
	e4.style.animationPlayState="paused";
	e5.style.animationPlayState="paused";
    var h=e2.offsetHeight;
	var b=e2.offsetWidth;
	var id=setInterval(frame,1);
	function frame(){
		if(h>=450 && b>=410.5)
			clearInterval(id);
		else{
			h++;
			b++;
			e2.style.height=h+'px';
			e2.style.width=b+'px';
		}
	}


})
document.getElementById("prod2").addEventListener("mouseout",function(){
	e0.style.animationPlayState="running";
	e1.style.animationPlayState="running";
	e2.style.animationPlayState="running";
	e3.style.animationPlayState="running";
	e4.style.animationPlayState="running";
	e5.style.animationPlayState="running";
	var h=e2.offsetHeight;
	var b=e2.offsetWidth;
	var id=setInterval(frame,1);
	function frame(){
		if(h<400 && b<295)
			clearInterval(id);
		else{
			h--;
			b--;
			e2.style.height=h+'px';
			e2.style.width=b+'px';
			
		}
	}


})
document.getElementById("prod3").addEventListener("mouseover",function(){
	e0.style.animationPlayState="paused";
	e1.style.animationPlayState="paused";
	e2.style.animationPlayState="paused";
	e3.style.animationPlayState="paused";
	e4.style.animationPlayState="paused";
	e5.style.animationPlayState="paused";
    var h=e3.offsetHeight;
	var b=e3.offsetWidth;
	var id=setInterval(frame,1);
	function frame(){
		if(h>=450 && b>=410.5)
			clearInterval(id);
		else{
			h++;
			b++;
			e3.style.height=h+'px';
			e3.style.width=b+'px';
		}
	}


})
document.getElementById("prod3").addEventListener("mouseout",function(){
	e0.style.animationPlayState="running";
	e1.style.animationPlayState="running";
	e2.style.animationPlayState="running";
	e3.style.animationPlayState="running";
	e4.style.animationPlayState="running";
	e5.style.animationPlayState="running";
	var h=e3.offsetHeight;
	var b=e3.offsetWidth;
	var id=setInterval(frame,1);
	function frame(){
		if(h<400 && b<295)
			clearInterval(id);
		else{
			h--;
			b--;
			e3.style.height=h+'px';
			e3.style.width=b+'px';
			
		}
	}


})
document.getElementById("prod4").addEventListener("mouseover",function(){
	e0.style.animationPlayState="paused";
	e1.style.animationPlayState="paused";
	e2.style.animationPlayState="paused";
	e3.style.animationPlayState="paused";
	e4.style.animationPlayState="paused";
	e5.style.animationPlayState="paused";
    var h=e4.offsetHeight;
	var b=e4.offsetWidth;
	var id=setInterval(frame,1);
	function frame(){
		if(h>=450 && b>=410.5)
			clearInterval(id);
		else{
			h++;
			b++;
			e4.style.height=h+'px';
			e4.style.width=b+'px';
		}
	}


})
document.getElementById("prod4").addEventListener("mouseout",function(){
	e0.style.animationPlayState="running";
	e1.style.animationPlayState="running";
	e2.style.animationPlayState="running";
	e3.style.animationPlayState="running";
	e4.style.animationPlayState="running";
	e5.style.animationPlayState="running";
	var h=e4.offsetHeight;
	var b=e4.offsetWidth;
	var id=setInterval(frame,1);
	function frame(){
		if(h<400 && b<295)
			clearInterval(id);
		else{
			h--;
			b--;
			e4.style.height=h+'px';
			e4.style.width=b+'px';
			
		}
	}


})
document.getElementById("prod5").addEventListener("mouseover",function(){
	e0.style.animationPlayState="paused";
	e1.style.animationPlayState="paused";
	e2.style.animationPlayState="paused";
	e3.style.animationPlayState="paused";
	e4.style.animationPlayState="paused";
	e5.style.animationPlayState="paused";
    var h=e5.offsetHeight;
	var b=e5.offsetWidth;
	var id=setInterval(frame,1);
	function frame(){
		if(h>=450 && b>=410.5)
			clearInterval(id);
		else{
			h++;
			b++;
			e5.style.height=h+'px';
			e5.style.width=b+'px';
		}
	}


})
document.getElementById("prod5").addEventListener("mouseout",function(){
	e0.style.animationPlayState="running";
	e1.style.animationPlayState="running";
	e2.style.animationPlayState="running";
	e3.style.animationPlayState="running";
	e4.style.animationPlayState="running";
	e5.style.animationPlayState="running";
	var h=e5.offsetHeight;
	var b=e5.offsetWidth;
	var id=setInterval(frame,1);
	function frame(){
		if(h<400 && b<295)
			clearInterval(id);
		else{
			h--;
			b--;
			e5.style.height=h+'px';
			e5.style.width=b+'px';
			
		}
	}


})
