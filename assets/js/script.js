// load saved local storage

// uses moment to get current day and format
var currentDate = moment().format("dddd, MMM Do, YYYY");
var currentTime = moment().format('L');

// holds event
var tasks = {};

$("#currentDay").text(currentDate);

// creates time block for standard business hours
var createTimeblock = function (setHour) {
    // set the hours for the scheduler
    var currentHour = moment().hour(setHour);

    var timeblock = $("<li>")
        .addClass("row");

    var hourSlot = $("<span>")
        .addClass("hour col-1")
        .text(currentHour.format("hA"));

    var taskTextArea = $("<textarea>")
        .addClass("description col-10");

    var savebtn = $("<button>")
        .addClass("saveBtn col-1")
        .html("<i class='bi bi-save'></i>");

    // compares set time with current time and sets class
    if (currentHour.isSame(moment())) {
        taskTextArea.addClass("present");
    }
    else if (currentHour.isBefore(moment())) {
        taskTextArea.addClass("past");
    }
    else if (currentHour.isAfter(moment())) {
        taskTextArea.addClass("future");
    };


    timeblock.append(hourSlot, taskTextArea, savebtn);

    $(".time-block").append(timeblock);

}

// create the calendar
var createSchedule = function () {
    // Variable is used to set standard business hour
    var setHour = 9;
    for (i = 0; i < 9; i++) {
        createTimeblock(setHour);
        setHour++;
    }
}

// save tasks to local storage when save buttton is clicked
$(".time-block").on("click", ".saveBtn", function () {
    var index = $(this.parentNode)
        .index();

    var text = $(this.parentNode)
        .children("textarea")
        .val()
        .trim();
    tasks[index] = ({
        index: index,
        text: text
    });

    save();

});

// performs the save to local storage
var save = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// loads localstorage to page
var load = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = ({
            index: [],
            text: []
        });
    };

    $.each(tasks, function (list, arr) {
        // finds the index in the list item and replaces text area with saved text
        $("textarea").eq(list).val(arr.text);
    })

};

createSchedule();
load();
