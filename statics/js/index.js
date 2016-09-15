$(document).ready(function () {
  $.getJSON('https://freegeoip.net/json/?callback=?', function(data) {
    $('#ip').text(data.ip);
    //console.log(JSON.stringify(data, null, 2));
  })
});
