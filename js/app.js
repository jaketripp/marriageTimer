function pluralize(count, word) {
    return count === 1 ? count + ' ' + word : count + ' ' + word + 's';
}

// converts hours to simplified time (1 year, 3 months, 2 weeks, 1 day, 9 hours) and appends string
function formatTime(hours) {
    var value = hours;

    var units = {
        "year": 24*365*60*60,
        "month": 24*30*60*60,
        "week": 24*7*60*60,
        "day": 24*60*60,
        "hour": 1*60*60,
        "minute": 1*60,
        "second": 1
    }

    var result = [];

    for(var name in units) {
        var p =  Math.floor(value/units[name]);
        if (p > 0) {
            result.push(pluralize(p,name));
        }
        value %= units[name];
    }

    var str = result[0];

    for (var i = 1; i < result.length; i++) {
        str += (', ' + result[i]);
    }

    return str;
}

function updateDom(){
	setTimeout(function(){
        $('#loader').hide();
    }, 1000);
	setInterval(function(){
		var marriageDate = new Date(2017, 6, 20, 11);
		var currentDate = Date.now();
		var seconds = (marriageDate - currentDate) / 1000; 
		var time = formatTime(seconds);
		$('h2').text(time);
	}, 1000);
}

updateDom();

