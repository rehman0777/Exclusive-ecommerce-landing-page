$(document).ready(function () {
  // Toggle the dropdown visibility when clicking the button
  $("#womenFashion").click(function () {
    $("#womenFashionDropdown").toggleClass("hidden");
  });

  $(".womenDropdown-item").click(function () {
    $("#womenFashionDropdown").addClass("hidden");
  });
});
$(document).ready(function () {
  // Toggle the dropdown visibility when clicking the button
  $("#menFashion").click(function () {
    $("#menFashionDropdown").toggleClass("hidden");
  });

  $(".menDropdown-item").click(function () {
    $("#menFashionDropdown").addClass("hidden");
  });
});
