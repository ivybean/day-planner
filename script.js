$(document).ready(function() {
  // listen for save button clicks

  $(".saveBtn").on("click", function() {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log('value:', value);
    console.log('time:', time);

    // save the value in localStorage as time

    localStorage.setItem(time, value);

    console.log(localStorage);  
  });
  $('textarea').text(window.localStorage.getItem("value"));

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    console.log('current hour:', currentHour);

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      console.log("block hour:", blockHour);

      // check if we've moved past this time

      
      // if the current hour is greater than the block hour
      // then add class "past"   
      // if they are equal
      // then remove class "past" and add class "present"
      // else
      // remove class "past", remove class "present", add class "future"
      
      //comparing currentHour to 9
      if (currentHour > 9){
        $(".textarea9").addClass("past")
        console.log(blockHour + " " + "past");
  
      } else if (currentHour == 9){
        $(".textarea9").removeClass("past");
        $(".textarea9").addClass("present");
        console.log(blockHour + " " + "present");
        
      } else if (currentHour < 9){
        $(".textarea9").removeClass("past");
        $(".textarea9").removeClass("present");
        $(".textarea9").addClass("future");
        console.log(blockHour + " " + "future");
      }

      //comparing currentHour to 10
      if (currentHour > 10){
        $(".textarea10").addClass("past")
  
      } else if (currentHour == 10){
        $(".textarea10").removeClass("past");
        $(".textarea10").addClass("present");
    
        
      } else if (currentHour < 10){
        $(".textarea10").removeClass("past");
        $(".textarea10").removeClass("present");
        $(".textarea10").addClass("future");
      }
    
      //comparing currentHour to 11
      if (currentHour > 11){
        $(".textarea11").addClass("past")
  
      } else if (currentHour == 11){
        $(".textarea11").removeClass("past");
        $(".textarea11").addClass("present");
    
        
      } else if (currentHour < 11){
        $(".textarea11").removeClass("past");
        $(".textarea11").removeClass("present");
        $(".textarea11").addClass("future");
      }
    
      //comparing currentHour to 12
      if (currentHour > 12){
        $(".textarea12").addClass("past")
  
      } else if (currentHour == 12){
        $(".textarea12").removeClass("past");
        $(".textarea12").addClass("present");
    
        
      } else if (currentHour < 12){
        $(".textarea12").removeClass("past");
        $(".textarea12").removeClass("present");
        $(".textarea12").addClass("future");
      }
      
      //comparing currentHour to 1pm
      if (currentHour > 13){
        $(".textarea13").addClass("past")
  
      } else if (currentHour == 13){
        $(".textarea13").removeClass("past");
        $(".textarea13").addClass("present");
    
        
      } else if (currentHour < 13){
        $(".textarea13").removeClass("past");
        $(".textarea13").removeClass("present");
        $(".textarea13").addClass("future");
      }

      //comparing currentHour to 2pm
      if (currentHour > 14){
        $(".textarea14").addClass("past")
  
      } else if (currentHour == 14){
        $(".textarea14").removeClass("past");
        $(".textarea14").addClass("present");
    
        
      } else if (currentHour < 14){
        $(".textarea14").removeClass("past");
        $(".textarea14").removeClass("present");
        $(".textarea14").addClass("future");
      }

      //comparing currentHour to 3pm
      if (currentHour > 15){
        $(".textarea15").addClass("past")
  
      } else if (currentHour == 15){
        $(".textarea15").removeClass("past");
        $(".textarea15").addClass("present");
    
        
      } else if (currentHour < 15){
        $(".textarea15").removeClass("past");
        $(".textarea15").removeClass("present");
        $(".textarea15").addClass("future");
      }

      //comparing currentHour to 4pm
      if (currentHour > 16){
        $(".textarea16").addClass("past")
  
      } else if (currentHour == 16){
        $(".textarea16").removeClass("past");
        $(".textarea16").addClass("present");
    
        
      } else if (currentHour < 16){
        $(".textarea16").removeClass("past");
        $(".textarea16").removeClass("present");
        $(".textarea16").addClass("future");
      }

      //comparing currentHour to 5pm
      if (currentHour > 17){
        $(".textarea17").addClass("past")
  
      } else if (currentHour == 17){
        $(".textarea17").removeClass("past");
        $(".textarea17").addClass("present");
    
        
      } else if (currentHour < 17){
        $(".textarea17").removeClass("past");
        $(".textarea17").removeClass("present");
        $(".textarea17").addClass("future");
      }

      
        
    });
  }

  hourUpdater();



  // set up interval to check if current time needs to be updated
  // which means execute hourUpdater function every 15 seconds

  // load any saved data from localStorage
  

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  $("#currentTime").text("Current Time: " + moment().format('LT')
  );
});
