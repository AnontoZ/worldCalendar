"use strict";
var country = "US";
var date = new Date();
var year = date.getFullYear();

var isoCodes = ["BDBangladesh", "BEBelgium", "BFBurkina Faso", "BGBulgaria", "BABosnia and Herzegovina", "BBBarbados", "WFWallis and Futuna", "BLSaint Barthelemy", "BMBermuda", "BNBrunei", "BOBolivia", "BHBahrain", "BIBurundi", "BJBenin", "BTBhutan", "JMJamaica", "BVBouvet Island", "BWBotswana", "WSSamoa", "BQBonaire, Saint Eustatius and Saba ", "BRBrazil", "BSBahamas", "JEJersey", "BYBelarus", "BZBelize", "RURussia", "RWRwanda", "RSSerbia", "TLEast Timor", "REReunion", "TMTurkmenistan", "TJTajikistan", "RORomania", "TKTokelau", "GWGuinea-Bissau", "GUGuam", "GTGuatemala", "GSSouth Georgia and the South Sandwich Islands", "GRGreece", "GQEquatorial Guinea", "GPGuadeloupe", "JPJapan", "GYGuyana", "GGGuernsey", "GFFrench Guiana", "GEGeorgia", "GDGrenada", "GBUnited Kingdom", "GAGabon", "SVEl Salvador", "GNGuinea", "GMGambia", "GLGreenland", "GIGibraltar", "GHGhana", "OMOman", "TNTunisia", "JOJordan", "HRCroatia", "HTHaiti", "HUHungary", "HKHong Kong", "HNHonduras", "HMHeard Island and McDonald Islands", "VEVenezuela", "PRPuerto Rico", "PSPalestinian Territory", "PWPalau", "PTPortugal", "SJSvalbard and Jan Mayen", "PYParaguay", "IQIraq", "PAPanama", "PFFrench Polynesia", "PGPapua New Guinea", "PEPeru", "PKPakistan", "PHPhilippines", "PNPitcairn", "PLPoland", "PMSaint Pierre and Miquelon", "ZMZambia", "EHWestern Sahara", "EEEstonia", "EGEgypt", "ZASouth Africa", "ECEcuador", "ITItaly", "VNVietnam", "SBSolomon Islands", "ETEthiopia", "SOSomalia", "ZWZimbabwe", "SASaudi Arabia", "ESSpain", "EREritrea", "MEMontenegro", "MDMoldova", "MGMadagascar", "MFSaint Martin", "MAMorocco", "MCMonaco", "UZUzbekistan", "MMMyanmar", "MLMali", "MOMacao", "MNMongolia", "MHMarshall Islands", "MKMacedonia", "MUMauritius", "MTMalta", "MWMalawi", "MVMaldives", "MQMartinique", "MPNorthern Mariana Islands", "MSMontserrat", "MRMauritania", "IMIsle of Man", "UGUganda", "TZTanzania", "MYMalaysia", "MXMexico", "ILIsrael", "FRFrance", "IOBritish Indian Ocean Territory", "SHSaint Helena", "FIFinland", "FJFiji", "FKFalkland Islands", "FMMicronesia", "FOFaroe Islands", "NINicaragua", "NLNetherlands", "NONorway", "NANamibia", "VUVanuatu", "NCNew Caledonia", "NENiger", "NFNorfolk Island", "NGNigeria", "NZNew Zealand", "NPNepal", "NRNauru", "NUNiue", "CKCook Islands", "XKKosovo", "CIIvory Coast", "CHSwitzerland", "COColombia", "CNChina", "CMCameroon", "CLChile", "CCCocos Islands", "CACanada", "CGRepublic of the Congo", "CFCentral African Republic", "CDDemocratic Republic of the Congo", "CZCzech Republic", "CYCyprus", "CXChristmas Island", "CRCosta Rica", "CWCuracao", "CVCape Verde", "CUCuba", "SZSwaziland", "SYSyria", "SXSint Maarten", "KGKyrgyzstan", "KEKenya", "SSSouth Sudan", "SRSuriname", "KIKiribati", "KHCambodia", "KNSaint Kitts and Nevis", "KMComoros", "STSao Tome and Principe", "SKSlovakia", "KRSouth Korea", "SISlovenia", "KPNorth Korea", "KWKuwait", "SNSenegal", "SMSan Marino", "SLSierra Leone", "SCSeychelles", "KZKazakhstan", "KYCayman Islands", "SGSingapore", "SESweden", "SDSudan", "DODominican Republic", "DMDominica", "DJDjibouti", "DKDenmark", "VGBritish Virgin Islands", "DEGermany", "YEYemen", "DZAlgeria", "USUnited States", "UYUruguay", "YTMayotte", "UMUnited States Minor Outlying Islands", "LBLebanon", "LCSaint Lucia", "LALaos", "TVTuvalu", "TWTaiwan", "TTTrinidad and Tobago", "TRTurkey", "LKSri Lanka", "LILiechtenstein", "LVLatvia", "TOTonga", "LTLithuania", "LULuxembourg", "LRLiberia", "LSLesotho", "THThailand", "TFFrench Southern Territories", "TGTogo", "TDChad", "TCTurks and Caicos Islands", "LYLibya", "VAVatican", "VCSaint Vincent and the Grenadines", "AEUnited Arab Emirates", "ADAndorra", "AGAntigua and Barbuda", "AFAfghanistan", "AIAnguilla", "VIU.S. Virgin Islands", "ISIceland", "IRIran", "AMArmenia", "ALAlbania", "AOAngola", "AQAntarctica", "ASAmerican Samoa", "ARArgentina", "AUAustralia", "ATAustria", "AWAruba", "INIndia", "AXAland Islands", "AZAzerbaijan", "IEIreland", "IDIndonesia", "UAUkraine", "QAQatar", "MZMozambique"]
var isoSeparation = [];
for(var i = 0; i < isoCodes.length; i++) {
  var countryName = "";
  for(var j = 2; j < isoCodes[i].length; j++) {
    countryName += isoCodes[i][j];
  }
  isoSeparation[i] = {
    iso: isoCodes[i][0] + isoCodes[i][1],
    country: countryName
  }
}

$(".btn").click(function() {
    var monthDays = [31,getFebDays(),31,30,31,30,31,31,30,31,30,31];
    country = prompt("Choose a Country").toUpperCase();
    var post_country = country;
    year = prompt("Choose a Year");
    var month = date.getMonth();
    var text = getDaysBefore(date.getMonth(), year);
    var numDays = monthDays[date.getMonth()];
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
    for(var i in isoCodes) {
        if (isoSeparation[i].country.toUpperCase() === country.toUpperCase()) {
            country = isoSeparation[i].iso;
            post_country = isoSeparation[i].country
            $("#currYear").html(year);
            $("#currCountry").html(post_country);
            break;
        }
    }

    for(var i in isoCodes) {
        if (isoSeparation[i].iso.toUpperCase() === country.toUpperCase()) {
            post_country = isoSeparation[i].country
            $("#currYear").html(year);
            $("#currCountry").html(post_country);
            break;
        }
    }
    displayHoliday();
});

$( document ).ready(displayHoliday());

country = country;
year = year;

$(".next").click(function() {
    $.getJSON("https://www.calendarindex.com/api/v1/holidays?country=" + country + "&year=" + year + "&api_key=9a2465c2f5e78880dbd1ad74dd510cb121c3d102", function(data) {

        var months = [ "January","February","March","April","May","June","July","August","September", "October","November","December"];

        var holiday_array = [];
        for(var i = 0; i < data.response.holidays.length; i++) {
            holiday_array[i] = {
                day: data.response.holidays[i].date[8] + data.response.holidays[i].date[9],
                month: months[parseInt(data.response.holidays[i].date[5] + data.response.holidays[i].date[6] - 1, 10)],
                year: data.response.holidays[i].date[0] + data.response.holidays[i].date[1] + data.response.holidays[i].date[2] + data.response.holidays[i].date[3],
                name: data.response.holidays[i].name
            };
        }

        var dayNodes = $("#calDays").children();

        var x = 0;
        while(parseInt(dayNodes[x].innerHTML) != 1) {
            x++;
        }

        for(var i = x; i < dayNodes.length; i ++) {
            if(parseInt(dayNodes[i].innerHTML) === 1 && i > 28) {
                break;
            }
            for(var j = 0; j < holiday_array.length; j++) {
                if (parseInt(holiday_array[j].day) === parseInt(dayNodes[i].innerHTML)) {
                    if (holiday_array[j].month === $("#currMonth").html()) {
                        dayNodes[i].innerHTML = dayNodes[i].innerHTML + "<br>" + holiday_array[j].day + "       " + holiday_array[j].name;
                    }
                }
            } 
        }
    });
});

$(".prev").click(function() {
    $.getJSON("https://www.calendarindex.com/api/v1/holidays?country=" + country + "&year=" + year + "&api_key=9a2465c2f5e78880dbd1ad74dd510cb121c3d102", function(data) {

        var months = [ "January","February","March","April","May","June","July","August","September", "October","November","December"];

        var holiday_array = [];
        for(var i = 0; i < data.response.holidays.length; i++) {
            holiday_array[i] = {
                day: data.response.holidays[i].date[8] + data.response.holidays[i].date[9],
                month: months[parseInt(data.response.holidays[i].date[5] + data.response.holidays[i].date[6] - 1, 10)],
                year: data.response.holidays[i].date[0] + data.response.holidays[i].date[1] + data.response.holidays[i].date[2] + data.response.holidays[i].date[3],
                name: data.response.holidays[i].name
            };
        }

        var dayNodes = $("#calDays").children();

        var x = 0;
        while(parseInt(dayNodes[x].innerHTML) != 1) {
            x++;
        }

        for(var i = x; i < dayNodes.length; i ++) {
            if(parseInt(dayNodes[i].innerHTML) === 1 && i > 28) {
                break;
            }
            for(var j = 0; j < holiday_array.length; j++) {
                if (parseInt(holiday_array[j].day) === parseInt(dayNodes[i].innerHTML)) {
                    if (holiday_array[j].month === $("#currMonth").html()) {
                        dayNodes[i].innerHTML = dayNodes[i].innerHTML + "<br>" + holiday_array[j].day + "       " + holiday_array[j].name;
                    }
                }
            } 
        }
    });
});

function displayHoliday() {
    $.getJSON("https://www.calendarindex.com/api/v1/holidays?country=" + country + "&year=" + year + "&api_key=9a2465c2f5e78880dbd1ad74dd510cb121c3d102", function(data) {

        var months = [ "January","February","March","April","May","June","July","August","September", "October","November","December"];

        var holiday_array = [];
        for(var i = 0; i < data.response.holidays.length; i++) {
            holiday_array[i] = {
                day: data.response.holidays[i].date[8] + data.response.holidays[i].date[9],
                month: months[parseInt(data.response.holidays[i].date[5] + data.response.holidays[i].date[6] - 1, 10)],
                year: data.response.holidays[i].date[0] + data.response.holidays[i].date[1] + data.response.holidays[i].date[2] + data.response.holidays[i].date[3],
                name: data.response.holidays[i].name
            };
        }

        var dayNodes = $("#calDays").children();

        var x = 0;
        while(parseInt(dayNodes[x].innerHTML) != 1) {
            x++;
        }

        for(var i = x; i < dayNodes.length; i ++) {
            if(parseInt(dayNodes[i].innerHTML) === 1 && i > 28) {
                break;
            }
            for(var j = 0; j < holiday_array.length; j++) {
                if (parseInt(holiday_array[j].day) === parseInt(dayNodes[i].innerHTML)) {
                    if (holiday_array[j].month === $("#currMonth").html()) {
                        dayNodes[i].innerHTML = dayNodes[i].innerHTML + "<br>" + holiday_array[j].day + "       " + holiday_array[j].name;
                    }
                }
            } 
        }
    });
};