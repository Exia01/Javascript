var HOUR = 8;
var MINUTES = 50;
var PERIOD = "AM";
function currentTime(){    
if(HOUR == 8 && MINUTES == 50 && PERIOD =="AM"){
    console.log("It's almost 9 in the morning");
}
    else if(HOUR ==7 && MINUTES == 15 && PERIOD == "PM"){
        console.log("It's just after 7 in the evening");
    }
    else if(MINUTES < 30 && PERIOD == "AM")
    {
        console.log("It's just after" + HOUR + PERIOD);
    }
    else if(MINUTES > 30 && PERIOD == "AM")
    {
        console.log("It's just after" + HOUR + PERIOD);
    }
}

currentTime();