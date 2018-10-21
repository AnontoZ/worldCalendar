"use strict";


var months = [ "January","February","March","April","May","June","July","August","September","October","November","December"]; 

function dispDays(numDays, currDay) {
	document.getElementById("calDays").innerHTML = "";
	var text = "";
	for ( var i = 1; i < numDays; i++) {
	  if (i == currDay) {
	  	text += "<li><span class='active'>" + i.toString() + "<br></span></li>"
	  } 
	  else {
	  	text += "<li>"+ i.toString() + "<br></li>";
	  }
	}
	document.getElementById("calDays").innerHTML = text;
}

function nextMonth() {
	var month = months.indexOf(document.getElementById("currMonth").textContent);
	var month = month+1;
	var year = parseInt(String(document.getElementById("currYear").textContent));
	if (month > 11) {
		month -= 11;
		year = year + 1;
	}
	document.getElementById("currMonth").innerHTML = months[month];
	document.getElementById("currYear").innerHTML = year;
}

function prevMonth() {
	var month = months.indexOf(document.getElementById("currMonth").textContent);
	var month = month-1;
	var year = parseInt(String(document.getElementById("currYear").textContent));
	if (month < 0) {
		month += 11;
		year = year - 1;
	}
	document.getElementById("currMonth").innerHTML = months[month];
	document.getElementById("currYear").innerHTML = year;
}

