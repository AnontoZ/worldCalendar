"use strict";
var months = [ "January","February","March","April","May","June","July","August","September",
	"October","November","December"];
var monthDays = [31,getFebDays(),31,30,31,30,31,31,30,31,30,31];

function dispDays() {
	var month = getMonth();
	var year = getYear();
	var text = getDaysBefore(month,year);
	var numDays = monthDays[month];
	var currDay = getDay();
	for (var i = 1; i <= numDays; i++) {
	  if (i == currDay) {
	  	text += "<li><span class='active'>" + i.toString() + "<br></span></li>"
	  } 
	  else {
	  	text += "<li>"+ i.toString() + "<br></li>";
	  }
	}
	text += getDaysAfter(month,year);
	document.getElementById("calDays").innerHTML = text;
}

function dispCalDays(month, year) {
	var text = getDaysBefore(month,year);
	var numDays = monthDays[month];
	var currMonth = false;
	if (month == getMonth() && year == getYear()) {
		currMonth = true;
	}
	var currDay = getDay();
	for (var i = 1; i <= numDays; i++) {
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
	var month = months.indexOf(document.getElementById("currMonth").textContent);
	var month = month+1;
	var year = parseInt(String(document.getElementById("currYear").textContent));
	if (month > 11) {
		month -= 12;
		year = year + 1;
	}
	document.getElementById("currMonth").innerHTML = months[month];
	document.getElementById("currYear").innerHTML = year;
	dispCalDays(month,year);
}

function prevMonth() {
	var month = months.indexOf(document.getElementById("currMonth").textContent);
	var month = month-1;
	var year = parseInt(String(document.getElementById("currYear").textContent));
	if (month < 0) {
		month += 12;
		year = year - 1;
	}
	document.getElementById("currMonth").innerHTML = months[month];
	document.getElementById("currYear").innerHTML = year;
	dispCalDays(month,year);
}

function getDate() {
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var day = date.getDay();
}

function getDay() {
	var date = new Date();
	return date.getDate();
}

function getMonth() {
	var date = new Date();
	return date.getMonth();
}

function getYear() {
	var date = new Date();
	return date.getFullYear();
}

function getFebDays() {
	var year = getYear();
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
	var indexFirst = indexFirstDay(month,year);
	if (month == 0) {
		month = 12;
	}
	var lastDay = monthDays[month-1];
	var start = lastDay-indexFirst+1;			//Plus 1 compensates for indexFirst automatically being ahead of the last day 9
	var text = "";
	for (var i = start; i <= lastDay; i++) {
	  text += "<li>"+ i.toString() + "</li>";
	}
	return text;
}

function getDaysAfter(month,year) {
	var indexLast = indexLastDay(month,year);
	if (month  == 12) {
		month = 0;
	}
	var start = 1;
	var text = "";
	for (var i = start; i < 7-indexLast; i++) {
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
