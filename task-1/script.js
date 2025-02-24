function clock(){
    var monthNames = [ "January", "February", "march", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December" ];
    var dayName = [ "Sunday", "Monday", "Tusedy", "Wednesday", "Thursday", "Friday", "Seturday", "Sunday" ];

    var today = new Date();

document.getElementById('Date').innerHTML = (dayName[today.getDay()] + ' '+ today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());

var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var Day = h<11? 'AM': 'PM';

h = h<10? '0'+h : h;
m = m<10? '0'+m : m;
s = s<10? '0'+s : s;

document.getElementById("hours").innerHTML = h;
document.getElementById("min").innerHTML = m;
document.getElementById("sec").innerHTML = s;

}var inter = setInterval(clock,400);
