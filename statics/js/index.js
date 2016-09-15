$(document).ready(function () {
  $.getJSON('http://freegeoip.net/json/?callback=?', function(data) {
    $('#ip').text(data.ip);
    //console.log(JSON.stringify(data, null, 2));
  })
});
