$(document).ready(function () {
  $.getJSON('https://freegeoip.net/json/?callback=?', function(data) {
    $('#ip').text(data.ip);
    $('#city').text(data.city);
    $('#country').text(data.country_name);
  })
});
