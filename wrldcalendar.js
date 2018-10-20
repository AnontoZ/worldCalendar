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
}

function nextMonth() {
	month = months.indexOf(document.getElementById("currMonth").textContent);
	month = month+1;
	year = parseInt(String(document.getElementById("currYear").textContent));
	if (month > 11) {
		month -= 11;
		year = year + 1;
	}
	document.getElementById("currMonth").innerHTML = months[month];
	document.getElementById("currYear").innerHTML = year;
}

function prevMonth() {
	month = months.indexOf(document.getElementById("currMonth").textContent);
	month = month-1;
	year = parseInt(String(document.getElementById("currYear").textContent));
	if (month < 0) {
		month += 11;
		year = year - 1;
	}
	document.getElementById("currMonth").innerHTML = months[month];
	document.getElementById("currYear").innerHTML = year;
}

