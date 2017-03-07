$(document).ready(
  function(){
    $("#show_pip_rates").hide();
    $("#show_dla_rates").hide();

    $("#show_pip").click(function () {
      $("#show_pip_rates").toggle();
    });
    $("#show_dla").click(function () {
      $("#show_dla_rates").toggle();
    });
});
