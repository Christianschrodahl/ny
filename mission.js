function getQueryStringValue (key) {
    return decodeURIComponent(parent.location.hash.replace(encodeURIComponent(key)));
    
}
// variable for the id
var id = getQueryStringValue("id");

function activeTab(evt, rocketName) {
  var i, tabContent, tablinks;
  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
  }
  document.getElementById(rocketName).style.display = "block";
  evt.currentTarget.className += " activeTab";
  
  parent.location.hash = rocketName;
}

//open tab by link matched
var openTab = document.querySelectorAll(".tabContent");
for(var i = 0; i < openTab.length; i++){
		if("#" + openTab[i].getAttribute("id") == id){
			openTab[i].style.display = "block";
		}
	}