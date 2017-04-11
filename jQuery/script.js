//$(document).ready(function() {
  //$('#submitButton').click(function() {
    //if($('input[name=q1]:checked').length<=0)
  //  {
  //   alert("Please select an option for every questio in order to continue.")
  //  }
//  });
//});



$(document).ready(
  function(){
    $("#show_pip_rates").hide();
    $("#show_dla_rates").hide();
    $("#show_weekly_rates").hide();

    $("#show_pip").click(function () {
      $("#show_pip_rates").toggle();
    });
    $("#show_dla").click(function () {
      $("#show_dla_rates").toggle();
    });
    $("#show_allowance").click(function () {
      $("#show_weekly_rates").toggle();
    });
});
