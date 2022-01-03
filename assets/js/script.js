// add divs with time, event, and submit button
// make time blocks editable with click
// add save button functionality
// add classes to color code time block based on time of day

var startHour = 9;
var endHour = 5;

// uses moment to get current day and format
var currentTime = moment().format("dddd, MMM Do, YYYY");

$("#currentDay").text(currentTime);



// creates time block for standard business hours
var createTimeblock = function (setHour) {
    var timeblock = $("<li>")
        .addClass("row");

    var hourSlot = $("<span>")
        .addClass("hour col-1")
        .text(setHour);

    var taskTextArea = $("<textarea>")
        .addClass("description col-10")

    var savebtn = $("<button>")
        .addClass("saveBtn col-1")
        .text("save");

    timeblock.append(hourSlot, taskTextArea, savebtn);

    $(".time-block").append(timeblock);

}

var createSchedule = function () {
    var setHour = 9;
    for (i = 0; i < 9; i++) {
        createTimeblock(setHour);
        setHour++;
    }
}
createSchedule();