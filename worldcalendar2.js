"use strict";
$.getJSON("https://www.calendarindex.com/api/v1/holidays?country=US&year=2018&api_key=9a2465c2f5e78880dbd1ad74dd510cb121c3d102", function(data) {
    console.log(data);

    var months = [ "January","February","March","April","May","June","July","August","September", "October","November","December"];

    var holiday_array = [];
    for(var i = 0; i < data.response.holidays.length; i++) {
    	holiday_array[i] = {
    		day: data.response.holidays[i].date[8] + data.response.holidays[i].date[9],
    		month: months[parseInt(data.response.holidays[i].date[5] + data.response.holidays[i].date[6] - 1, 10)],
    		year: data.response.holidays[i].date[0] + data.response.holidays[i].date[1] + data.response.holidays[i].date[2] + data.response.holidays[i].date[3],
    		name: data.response.holidays[i].name,
    		note: data.response.holidays[i].note
    	};
    }
});