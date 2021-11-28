// Date Conversion and insert into HTML
const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
];

const date = new Date();
const currentDay = day[date.getDay()];
const currentDate = dateConv(date.getDate());
const currentMonth = month[date.getMonth() - 1];
const currentYear = date.getFullYear();

function dateConv(num) {
    switch (num) {
        case 1:
        case 21:
        case 31:
            return `${num}st`;
        case 2:
        case 22:
            return `${num}nd`;
        case 3:
        case 23:
            return `${num}rd`;
        default:
            return `${num}th`;
    }
}

document.querySelector(
    "#date"
).innerText = `${currentDay}, ${currentDate} ${currentMonth} ${currentYear}`;

// Time Conversion and insert into HTML
setInterval(clockTimer, 1000);

function clockTimer() {
    const time = new Date();
    document.getElementById("clock").innerHTML = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
}
