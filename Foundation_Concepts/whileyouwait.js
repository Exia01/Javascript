var daysUntilMyBirthday = 60;

function countDown(){
for(daysUntilMyBirthday<0; daysUntilMyBirthday--;){
    if(daysUntilMyBirthday>30){
        console.log( daysUntilMyBirthday + " days until my birthday. Such a long time... :[");
    }
    if(daysUntilMyBirthday ==0){
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*"+
            "♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪"+
            "*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«")
            break;
    }
    if(daysUntilMyBirthday<5 && daysUntilMyBirthday > 0){
        console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!!!")
    }
    if(daysUntilMyBirthday<29 && daysUntilMyBirthday > 4){
        console.log(daysUntilMyBirthday + " getting there!!!");
    }
}
}
countDown();

// function CountdownToBirthday(month,day){
// 	var now = new Date();
// 	var birthday;
// 	if (now.getMonth() < month-1 || (now.getMonth() == (month-1) && now.getDate() < day+1)){
// 		birthday = new Date(now.getFullYear(), month-1, day+1);
// 	}
// 	else {
// 		birthday = new Date(now.getFullYear(), month+11, day+1);
// 	}
// 	var diff = birthday - now;
// 	var oneDay = 1000 * 60 * 60 * 24;
// 	var day = Math.floor(diff / oneDay);
// 	if (day == 0){
// 		console.log('♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*'+ '\n' +
//                     '♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪'+ '\n' +
//                     '*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«');
// 	}
// 	else {
// 	console.log(day + ' days until my birthday. Such a long time... :(');
// 	}
// }

// CountdownToBirthday(3,3);
