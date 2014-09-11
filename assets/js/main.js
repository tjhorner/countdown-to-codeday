var codeDay = new Date('November 8, 2014 12:00:00');

function fixIntegers(integer){
	if (integer < 0)
		integer = 0;
	if (integer < 10)
		return "0" + integer;
	return "" + integer;
}

function formatMs(integer){
	if (integer < 0)
		integer = 0;
	if (integer < 100 && !(integer < 10))
		return "0" + integer;
	if (integer < 10)
		return "00" + integer;
	return "" + integer;
}

function updateDate(){
	var now = new Date();
	var difference = Math.floor((codeDay - now) / 1000);
	var seconds = fixIntegers(difference % 60);
	difference = Math.floor(difference / 60);
	var minutes = fixIntegers(difference % 60);
	difference = Math.floor(difference / 60);
	var hours = fixIntegers(difference % 24);
	difference = Math.floor(difference / 24);
	var days = difference;
	$('#days').text(days);
	$('#hours').text(hours);
	$('#mins').text(minutes);
	$('#secs').text(seconds);
	$('#ms').text(formatMs(Math.abs((now.getMilliseconds() - codeDay.getMilliseconds()) - 1000)));
}

updateDate();

setInterval(function(){
	updateDate();
}, 1);