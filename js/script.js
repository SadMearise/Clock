function clock() {
    const today = new Date();
    let hours = (today.getHours() < 10) ? ('0' + today.getHours()) : today.getHours();
    let minutes = (today.getMinutes() < 10) ? ('0' + today.getMinutes()) : today.getMinutes();
    let seconds = (today.getSeconds() < 10) ? ('0' + today.getSeconds()) : today.getSeconds();

    let current_time = [hours, minutes, seconds].join(":");

    document.getElementById('time').innerHTML = current_time;

    t = setInterval(function() { 
        clock();
    }, 500);
  
}

function date() {
    const today = new Date();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

    document.querySelector('.month').innerHTML = months[today.getMonth()];
    document.querySelector('.day').innerHTML = today.getDate();
    document.querySelector('.year').innerHTML = today.getFullYear();
}

clock();
date();