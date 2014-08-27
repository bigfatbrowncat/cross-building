function loadHTMLPart(targetId, address) {
    var xmlhttp;
	
	var opts = {
	  lines: 9, // The number of lines to draw
	  length: 2, // The length of each line
	  width: 2, // The line thickness
	  radius: 4, // The radius of the inner circle
	  corners: 1, // Corner roundness (0..1)
	  rotate: 0, // The rotation offset
	  direction: 1, // 1: clockwise, -1: counterclockwise
	  color: '#000', // #rgb or #rrggbb or array of colors
	  speed: 2, // Rounds per second
	  trail: 60, // Afterglow percentage
	  shadow: false, // Whether to render a shadow
	  hwaccel: false, // Whether to use hardware acceleration
	  className: 'spinner', // The CSS class to assign to the spinner
	  zIndex: 2e9, // The z-index (defaults to 2000000000)
	  position: 'relative',
	  top: '50%',           // center vertically
	  left: '50%'          // center horizontally
	};
	
	var spinnerId = targetId + '_spinner';
	var target = document.getElementById(targetId);
	target.innerHTML = '<div style="width: 100%; height: 20pt" id="' + spinnerId + '"></div>';
	var spinner = document.getElementById(spinnerId);
	new Spinner(opts).spin(spinner);

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 ) {
           if(xmlhttp.status == 200){
               target.innerHTML = xmlhttp.responseText;
           }
           else {
               target.innerHTML = "Error " + xmlhttp.status;
           }
        }
    }

    xmlhttp.open("GET", address, true);
    xmlhttp.send();
}
