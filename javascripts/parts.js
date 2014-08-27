function loadHTMLPart(targetId, address, errorText) {
    var xmlhttp;

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
               document.getElementById(targetId).innerHTML = xmlhttp.responseText;
           }
           else {
               document.getElementById(targetId).innerHTML = errorText;
           }
        }
    }

    xmlhttp.open("GET", address, true);
    xmlhttp.send();
}
