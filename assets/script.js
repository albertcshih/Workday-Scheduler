//JQuery functions (Remove before submitting.)
var Currentdate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(Currentdate);

$(document).ready(function () {
    
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

    })
   
    function timeTracker() {
    
        var currenttime = moment().startOf('hour').fromNow();;

     
        $(".time-block").each(function () {
            var Timeblock = parseInt($(this).attr("id").split("hour")[1]);

           
            if (Timeblock < currenttime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (Timeblock === currenttime) {
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
})
