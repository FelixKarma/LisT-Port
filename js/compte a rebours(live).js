var countdownDate = localStorage.getItem('countdownDate');

if (!countdownDate) {
    countdownDate = new Date("2023-04-01T23:59:59").getTime() + (1 * 60 * 1000);
    localStorage.setItem("countdownDate", countdownDate);
}
else {
    countdownDate = parseInt(countdownDate);
}

function countdown() {
    return countdownDate;
}

var x = setInterval(countdown, 1000);

var now = new Date('2023-03-24T10:17:50').getTime('2023-03-24T10:35:40');

var distance = countdownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML = days + "j " + hours + "h " + minutes + "m " + seconds + "s ";

if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Terminé";

    countdownDate = new Date('2023-03-24T10:30:00').getTime() + (1 * 60 * 1000);
    localStorage.setItem("countdownDate", countdownDate);
}
