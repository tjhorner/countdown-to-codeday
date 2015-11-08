function start(codeDay){
	var codeDay = new Date(codeDay * 1000);
	var today = false;

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
		$('#ms').text(formatMs(Math.abs((now.getMilliseconds() - codeDay.getMilliseconds()) - 1000)));

		if(!today){
			if(days === -1){
				$('h1').text('TIME REMAINING');
				codeDay = new Date('November 8, 2015 12:00:00');
				today = true;
			}

			if(days <= -2){
				$('h1').html('<span class="codeday">CODEDAY</span> ENDED!');
				days = 0;
				$('#ms').text("000");
				$('#days').text("0");
				clearInterval(dateInterval);
				return;
			}
		}

		if(parseInt(days) === 0 && parseInt(hours) === 0 && parseInt(minutes) === 0){
			secondsInt = parseInt(seconds);
			switch(secondsInt){
				case 2:
					$('h1').text('READY!');
					break;
				case 1:
					$('h1').text('SET!');
					break;
				case 0:
					$('h1').text('CODE!');
					break;
				default:
					break;
			}
		}

		$('#days').text(days);
		$('#hours').text(hours);
		$('#mins').text(minutes);
		$('#secs').text(seconds);
	}

	updateDate();

	var dateInterval = setInterval(function(){
		updateDate();
	}, 1);

}
