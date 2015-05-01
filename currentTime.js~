//現在時刻
var now = new Date();
console.log(now);

var currentHour = now.getHours();
console.log(currentHour);

var currentMinute = now.getMinutes();
console.log(currentHour+"時"+currentMinute+"分");

document.addEventListener("DOMContentLoaded", showCurrentTime, false);


function showCurrentTime(){

	
	var now = new Date();
	var currentHour = now.getHours();
	var currentMinute = now.getMinutes();

	console.log(currentMinute);

	var showHour = document.getElementById("showHour");
	var showMinute = document.getElementById("showMinute");
	showHour.innerHTML = currentHour;
	showMinute.innerHTML = currentMinute;

	if(currentHour == localStorage.setHour && currentMinute == localStorage.setMinute){
		
		var alarmButton = document.getElementById("alarmButton");
		alarmButton.click();

		if(shakeTimes >= 50){
			stopAlarm();
		}

	}

	setTimeout(showCurrentTime,10000);

}


/*
function getCurrentTime(){
	
	var currentHour = now.getHours();
	var currentMinute = now.getMinutes();
}

*/


function selectTimeButtonClick(){
	
	var hourForm = document.getElementById("setTimeForm");
	var hourSelect  = document.getElementById("selectHour");

	var minuteForm = document.getElementById("setTimeForm");
	var minuteSelect  = document.getElementById("selectMinute");

	localStorage.setHour = hourSelect.options[hourSelect.selectedIndex].value;
	localStorage.setMinute = minuteSelect.options[minuteSelect.selectedIndex].value;
}


function ringAlarm(){

		try{

			var alarmSound = document.getElementById("alarmSound")
			alarmSound.play();
		}catch(e){
			alert(e);
		}
}

function stopAlarm(){

		try{

			var alarmSound = document.getElementById("alarmSound")
			alarmSound.stop();
		}catch(e){
			alert(e);
		}
}

