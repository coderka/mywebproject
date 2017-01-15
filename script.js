var contactform = document.getElementById("contactform");
var name = document.getElementById("name");
var companyname = document.getElementById("companyname");
var category = document.getElementById("category");
var subject = document.getElementById("subject");
var comment = document.getElementById("comment");
var emailcostumer = document.getElementById("email");
var upload = document.getElementById("upload");
var send = document.getElementById("sendform");

var search = document.getElementById("search");

var support = document.getElementById("support");
var help = document.getElementById("help");

var en = document.getElementById("en");
var sk = document.getElementById("sk");

function allLetter (inputtxt)
 {
 var letters = /^[A-Za-z]+$/;
 if (inputtxt.value.match(inputtxt))
{return true;} 
else
{alert("please use only alphabet characters");
return false;}
}

/*


/*document.getElementById("map"){    
}
document.getElementsByTagName("nav"){
}
//for (var i=0; i < myList.length; i++) {}
/*
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(48.2, 16.3),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCTeVZzErK8G1GLRwZbD3uzrMRTaQK9d2wcallback=myMap">;
*/




