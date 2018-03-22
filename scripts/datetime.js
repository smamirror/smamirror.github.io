function updateTime() {
    var element = $("#time");
    var dateObj = new Date();

    var hour = dateObj.getHours();
    var minute = dateObj.getMinutes();
    var second = dateObj.getSeconds();

    hour = fixClockValue(hour);
    minute = fixClockValue(minute);
    second = fixClockValue(second);

    var timeStr = hour + ":" + minute + ":" + second;

    element.text(timeStr);

    setTimeout("updateTime()", 500);
}

function fixClockValue(input) {
    if (input < 10) {
        input = "0" + input;
    }
    return input;
};

function updateDate() {
    var element = $("#date");
    var dateObj = new Date();
    var locale = "sv-SE";

    var year = dateObj.getFullYear();
    var month = dateObj.toLocaleDateString(locale, { month: "long" });
    var day = dateObj.getDate();

    var dateStr = "den " + day + " " + month + " " + year;

    element.text(dateStr);

    setTimeout("updateTime()", 1000);
}