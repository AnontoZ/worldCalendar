var months = [ "January","February","March","April","May","June","July","August","September",
	"October","November","December"];
var monthDays = [31,getFebDays(),31,30,31,30,31,31,30,31,30,31];

function dispDays() {
	month = getMonth();
	year = getYear();
	text = getDaysBefore(month,year);
	numDays = monthDays[month];
	currDay = getDay();
	for (i = 1; i <= numDays; i++) {
	  if (i == currDay) {
	  	text += "<li><span class='active'>" + i.toString() + "</span></li>"
	  } 
	  else {
	  	text += "<li>"+ i.toString() + "</li>";
	  }
	}
	text += getDaysAfter(month,year);
	document.getElementById("calDays").innerHTML = text;
}

function dispCalDays(month, year) {
	text = getDaysBefore(month,year);
	numDays = monthDays[month];
	currMonth = false;
	if (month == getMonth() && year == getYear()) {
		currMonth = true;
	}
	currDay = getDay();
	for (i = 1; i <= numDays; i++) {
	  if (i == currDay && currMonth) {
	  	text += "<li><span class='active'>" + i.toString() + "</span></li>"
	  } 
	  else {
	  	text += "<li>"+ i.toString() + "</li>";
	  }
	}
	text += getDaysAfter(month,year);
	document.getElementById("calDays").innerHTML = text;
}

function nextMonth() {
	month = months.indexOf(document.getElementById("currMonth").textContent);
	month = month+1;
	year = parseInt(String(document.getElementById("currYear").textContent));
	if (month > 11) {
		month -= 12;
		year = year + 1;
	}
	document.getElementById("currMonth").innerHTML = months[month];
	document.getElementById("currYear").innerHTML = year;
	dispCalDays(month,year);
}

function prevMonth() {
	month = months.indexOf(document.getElementById("currMonth").textContent);
	month = month-1;
	year = parseInt(String(document.getElementById("currYear").textContent));
	if (month < 0) {
		month += 12;
		year = year - 1;
	}
	document.getElementById("currMonth").innerHTML = months[month];
	document.getElementById("currYear").innerHTML = year;
	dispCalDays(month,year);
}

function getDate() {
	date = new Date();
	y = date.getFullYear();
	m = date.getMonth() + 1;
	d = date.getDate();
	day = date.getDay();
}

function getDay() {
	date = new Date();
	return date.getDate();
}

function getMonth() {
	date = new Date();
	return date.getMonth();
}

function getYear() {
	date = new Date();
	return date.getFullYear();
}

function getFebDays() {
	year = getYear();
	if (year % 4 > 0) {
		return 28;
	}
	else if (year % 100 > 0) { 
		return 28;
	}
	else if (year % 400 > 0) {
		return 28;
	}
	return 29;
}

function getDaysBefore(month,year) {
	indexFirst = indexFirstDay(month,year);
	if (month == 0) {
		month = 12;
	}
	lastDay = monthDays[month-1];
	start = lastDay-indexFirst+1;			//Plus 1 compensates for indexFirst automatically being ahead of the last day 9
	text = "";
	for (i = start; i <= lastDay; i++) {
	  text += "<li>"+ i.toString() + "</li>";
	}
	return text;
}

function getDaysAfter(month,year) {
	indexLast = indexLastDay(month,year);
	if (month  == 12) {
		month = 0;
	}
	start = 1;
	text = "";
	for (i = start; i < 7-indexLast; i++) {
	  	text += "<li>"+ i.toString() + "</li>";
	}
	return text;
}

function indexFirstDay(month, year) {
	var firstDay = new Date(year,month,1);
	return firstDay.getDay();
}

function indexLastDay(month, year) {
	var lastDay = new Date(year,month,monthDays[month]);
	return lastDay.getDay();
}

function writeMonth() {
	document.getElementById("currMonth").innerHTML = months[getMonth()];
}

function writeYear() {
	document.getElementById("currYear").innerHTML = getYear();	
}