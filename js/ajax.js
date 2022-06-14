$(document).ready(function () {
  //최신간행물
  $.ajax({
    url: "/data/dummy_data.json",
    dataType: "json",
    type: "GET",
    success: function (data) {
      var show = "";
      var dataResult = data.slice(-5);
      $.each(dataResult, function (idx, item) {
        show += "<tr>";
        show += "<td><a href='#'>" + item.title + "</a></td>";
        show += "<td>" + item.date + "</td>";
        show += "</tr>";
      });
      $("tbody").append(show);
    },
  });
});
