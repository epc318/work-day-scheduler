// Display current date
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".tasks").val();
        var time = $(this).parent().attr("id");

        // save input to local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current hour
        var timeNow = moment().hour();

        // loop through time rows
        $(".time-row").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hourslot")[1]);

            
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get input from storage
    $("#9am .tasks").val(localStorage.getItem("9am"));
    $("#10am .tasks").val(localStorage.getItem("10am"));
    $("#11am .tasks").val(localStorage.getItem("11am"));
    $("#12pm .tasks").val(localStorage.getItem("12pm"));
    $("#1pm .tasks").val(localStorage.getItem("1pm"));
    $("#2pm .tasks").val(localStorage.getItem("2pm"));
    $("#3pm .tasks").val(localStorage.getItem("3pm"));
    $("#4pm .tasks").val(localStorage.getItem("4pm"));
    $("#5pm .tasks").val(localStorage.getItem("5pm"));

    timeTracker();
})