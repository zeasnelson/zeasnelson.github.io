

function setNavigator(){
		document.getElementById("nav-1").innerHTML = navigator.appName;
		document.getElementById("nav-2").innerHTML = navigator.product;
		document.getElementById("nav-3").innerHTML = navigator.appVersion;
		document.getElementById("nav-4").innerHTML = navigator.userAgent;
		document.getElementById("nav-5").innerHTML = navigator.platform;
		document.getElementById("nav-6").innerHTML = navigator.language;
}


function setScreen(){
		document.getElementById("scr-1").innerHTML = screen.width + ' px';
		document.getElementById("scr-2").innerHTML = screen.height + ' px';
		document.getElementById("scr-3").innerHTML = screen.availWidth + ' px';
		document.getElementById("scr-4").innerHTML = screen.availHeight + ' px';
		document.getElementById("scr-5").innerHTML = screen.colorDepth + ' px';
		document.getElementById("scr-6").innerHTML = screen.pixelDepth + ' px';
}

function setLocation(){
		document.getElementById("loc-1").innerHTML = window.location.href;
		document.getElementById("loc-2").innerHTML = window.location.hostname;
		document.getElementById("loc-3").innerHTML = window.location.pathname;
		document.getElementById("loc-4").innerHTML = window.location.protocol;
}

function setWindow(){
		document.getElementById("win-1").innerHTML = window.innerHeight + ' px';
		document.getElementById("win-2").innerHTML = window.innerWidth + ' px';
}


function setGeolocation(){
	if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(showPosition);
  	} else { 
  		document.getElementById("lat-1").innerHTML = 'Not available';
  		document.getElementById("lon-2").innerHTML = 'Not available';
  	}
}

function showPosition(position) {
  	document.getElementById("lat-1").innerHTML =  position.coords.latitude;
  	document.getElementById("lon-2").innerHTML = position.coords.longitude;
}

function initBrowserSpecs(){
	setNavigator();
	setScreen();
	setLocation();
	setWindow();
	setGeolocation();
}







