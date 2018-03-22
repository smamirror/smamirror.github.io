function updateTime() {
    var dateObj = new Date();

    var hourElementId = "#time-hour";
    var minuteElementId = "#time-minute";
    var secondElementId = "#time-second";

    var hour = fixClockValue(dateObj.getHours());
    var minute = fixClockValue(dateObj.getMinutes());
    var second = fixClockValue(dateObj.getSeconds());

    $(hourElementId).text(hour + ":");
    $(minuteElementId).text(minute);
    $(secondElementId).text(second);

    setTimeout(updateTime, 500);
}

function fixClockValue(input) {
    if (input < 10) {
        input = "0" + input;
    }
    return input;
};

function updateDate(dateElementId) {
    var dateObj = new Date();

    var year = dateObj.getFullYear();
    var month = dateObj.toLocaleDateString("sv-SE", { month: "long" });
    var day = dateObj.getDate();

    $(dateElementId).text("den " + day + " " + month + " " + year);

    setTimeout(updateDate, 1000, dateElementId);
}