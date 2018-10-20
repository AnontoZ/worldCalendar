var months = [ "January","February","March","April","May","June","July","August","September",
	"October","November","December"]

function dispDays(numDays, currDay) {
	text = "";
	for (i = 1; i < numDays; i++) {
	  if (i == currDay) {
	  	text += "<li><span class='active'>" + i.toString() + "</span></li>"
	  } 
	  else {
	  	text += "<li>"+ i.toString() + "</li>";
	  }
	}
	document.getElementById("calDays").innerHTML = text;
	console(document.getElementByID("currMonth"))
}

function nextMonth(currMonth) {
	numMonth = months.indexOf(currMonth);
	newMonth = numMonth+1;
	if (newMonth > 12) {
		newMonth -= 12;

	}
	return 
}