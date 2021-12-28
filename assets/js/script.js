// add divs with time, event, and submit button
// make time blocks editbale with click
// add save button functionality
// add classes to color code time block based on time of day

// used moment to get current day and format
var currentTime = moment().format("dddd, MMM Do, YYYY");

$("#currentDay").text(currentTime);