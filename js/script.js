"use strict"
const date = new Date();
let launchDate = {
	day: 13,
	hours: 0,
	minutes: 8,
	month: 2,
	seconds: 21,
	year: 2022
};
let currayDate = {};
let diffDate = {};
let timerIn = {
	year: 0,
	month: 0,
	day: 30,
	hours: 0,
	minutes: 0,
	seconds: 0
}
let timerOut = {};
let exceptionNumber = [1, 21, 31, 41, 51]
//let timeTracing = document.querySelector('.timer__time_tracing');
let time = document.querySelector('.timer__time');
let timeReflection = document.querySelector('.timer__time-reflection');
/*
if (localStorage.getItem('launchDate')) {
	launchDate = JSON.parse(localStorage.getItem('launchDate'));
}
*/
Date.prototype.getNumberOfDaysInMonth = function (monthOffset) {
	if (monthOffset !== undefined) {
		return new Date(this.getFullYear(), this.getMonth() + monthOffset, 0).getDate();
	} else {
		return new Date(this.getFullYear(), this.getMonth(), 0).getDate();
	}
}
function daysInMonth(iMonth, iYear) {
	return 32 - new Date(iYear, iMonth, 32).getDate();
}
/*
function getLaunchDate() {
	launchDate.year = date.getFullYear();
	launchDate.month = (date.getMonth() + 1);
	launchDate.day = date.getDate();
	launchDate.hours = date.getHours();
	launchDate.minutes = date.getMinutes();
	launchDate.seconds = date.getSeconds();
	//console.log(launchDate)


}
getLaunchDate()
*/
//localStorage.setItem('launchDate', JSON.stringify(launchDate));
function getCurrayDate() {
	currayDate.year = date.getFullYear();
	currayDate.month = (date.getMonth() + 1);
	currayDate.day = date.getDate();
	currayDate.hours = date.getHours();
	currayDate.minutes = date.getMinutes();
	currayDate.seconds = date.getSeconds();
	//console.log(currayDate);
}
function calcDiffDate() {
	diffDate.year = currayDate.year - launchDate.year;
	diffDate.month = currayDate.month - launchDate.month;
	if (diffDate.month < 0) {
		diffDate.month = 12 + diffDate.month
		diffDate.year--
	}
	diffDate.day = currayDate.day - launchDate.day;
	if (diffDate.day < 0) {
		diffDate.day = date.getNumberOfDaysInMonth(date.getMonth()) + diffDate.day
		diffDate.month--
		if (diffDate.month < 0) {
			diffDate.month = 12 + diffDate.month
			diffDate.year--
		}

	}
	diffDate.hours = currayDate.hours - launchDate.hours;
	if (diffDate.hours < 0) {
		diffDate.hours = 24 + diffDate.hours
		diffDate.day--
		if (diffDate.day < 0) {
			diffDate.day = date.getNumberOfDaysInMonth(date.getMonth()) + diffDate.day
			diffDate.month--
			if (diffDate.month < 0) {
				diffDate.month = 12 + diffDate.month
				diffDate.year--
			}

		}
	}
	diffDate.minutes = currayDate.minutes - launchDate.minutes;
	if (diffDate.minutes < 0) {
		diffDate.minutes = 60 + diffDate.minutes
		diffDate.hours--
		if (diffDate.hours < 0) {
			diffDate.hours = 24 + diffDate.hours
			diffDate.day--
			if (diffDate.day < 0) {
				diffDate.day = date.getNumberOfDaysInMonth(date.getMonth()) + diffDate.day
				diffDate.month--
				if (diffDate.month < 0) {
					diffDate.month = 12 + diffDate.month
					diffDate.year--
				}

			}
		}
	}
	diffDate.seconds = currayDate.seconds - launchDate.seconds;
	if (diffDate.seconds < 0) {
		diffDate.seconds = 60 + diffDate.seconds;
		diffDate.minutes--
		if (diffDate.minutes < 0) {
			diffDate.minutes = 60 + diffDate.minutes
			diffDate.hours--
			if (diffDate.hours < 0) {
				diffDate.hours = 24 + diffDate.hours
				diffDate.day--
				if (diffDate.day < 0) {
					diffDate.day = date.getNumberOfDaysInMonth(date.getMonth()) + diffDate.day
					diffDate.month--
					if (diffDate.month < 0) {
						diffDate.month = 12 + diffDate.month
						diffDate.year--
					}

				}
			}
		}
	}
	//console.log(diffDate)

}
function calcTimer() {

	timerOut.year = timerIn.year - diffDate.year;
	timerOut.month = timerIn.month - diffDate.month;
	if (timerOut.month < 0) {
		timerOut.month = 12 + timerOut.month
		timerOut.year--
	}
	timerOut.day = timerIn.day - diffDate.day;
	if (timerOut.day < 0) {
		timerOut.day = date.getNumberOfDaysInMonth(date.getMonth()) + timerOut.day
		timerOut.month--
		if (timerOut.month < 0) {
			timerOut.month = 12 + timerOut.month
			timerOut.year--
		}
	}
	timerOut.hours = timerIn.hours - diffDate.hours;
	if (timerOut.hours < 0) {
		timerOut.hours = 24 + timerOut.hours
		timerOut.day--
		if (timerOut.day < 0) {
			timerOut.day = date.getNumberOfDaysInMonth(date.getMonth()) + timerOut.day
			timerOut.month--
			if (timerOut.month < 0) {
				timerOut.month = 12 + timerOut.month
				timerOut.year--
			}
		}
	}
	timerOut.minutes = timerIn.minutes - diffDate.minutes;
	if (timerOut.minutes < 0) {
		timerOut.minutes = 60 + timerOut.minutes
		timerOut.hours--
		if (timerOut.hours < 0) {
			timerOut.hours = 24 + timerOut.hours
			timerOut.day--
			if (timerOut.day < 0) {
				timerOut.day = date.getNumberOfDaysInMonth(date.getMonth()) + timerOut.day
				timerOut.month--
				if (timerOut.month < 0) {
					timerOut.month = 12 + timerOut.month
					timerOut.year--
				}
			}

		}
	}
	timerOut.seconds = timerIn.seconds - diffDate.seconds;
	if (timerOut.seconds < 0) {
		timerOut.seconds = 60 + timerOut.seconds;
		timerOut.minutes--
		if (timerOut.minutes < 0) {
			timerOut.minutes = 60 + timerOut.minutes
			timerOut.hours--
			if (timerOut.hours < 0) {
				timerOut.hours = 24 + timerOut.hours
				timerOut.day--
				if (timerOut.day < 0) {
					timerOut.day = date.getNumberOfDaysInMonth(date.getMonth()) + timerOut.day
					timerOut.month--
					if (timerOut.month < 0) {
						timerOut.month = 12 + timerOut.month
						timerOut.year--
					}
				}

			}
		}
	}

	//console.log(timerOut)

}
function calcTimerCycle() {
	timerOut.seconds--
	if (timerOut.seconds < 0) {
		timerOut.seconds = 59
		timerOut.minutes--
		if (timerOut.minutes < 0) {
			timerOut.minutes = 59
			timerOut.hours--
			if (timerOut.hours < 0) {
				timerOut.hours = 59
				timerOut.day--
				if (timerOut.day < 0) {
					timerOut.day = date.getNumberOfDaysInMonth(date.getMonth());
					timerOut.year--
				}
			}
		}
	}
	return timerOut
}

function displayTimer() {
	let timer = '';
	let days = 'days';
	let hours = 'hours';
	let minutes = 'minutes';
	let seconds = 'seconds';
	for (let Num of exceptionNumber) {
		if (timerOut.day === Num) {
			days = 'day';
		}
		if (timerOut.hours === Num) {
			hours = 'hour';
		}
		if (timerOut.minutes === Num) {
			minutes = 'minute';
		}
		if (timerOut.seconds === Num) {
			seconds = 'second';
		}
	}
	timer = `
	<span> <span>${timerOut.day}</span> ${days} <span>${timerOut.hours}</span> ${hours} <span>${timerOut.minutes}</span> ${minutes} <span>${timerOut.seconds}</span> ${seconds} </span>
	`;
	//timeTracing.innerHTML = timer;
	time.innerHTML = timer;
	timeReflection.innerHTML = timer;
};
getCurrayDate()
calcDiffDate()
calcTimer()
displayTimer()


setInterval(() => {
	//getLaunchDate()
	calcTimerCycle()
	displayTimer()
}, 1000);
