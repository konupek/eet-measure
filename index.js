
var request = require('request');
var colors = require('colors');

function ReplaceRange(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
}

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

var seconds = 0;
setInterval(() => {
    seconds++;
    console.log("The script is running: " + seconds + " seconds");
}, 1000)

calee = () => {
  var start = new Date();
  request.get({url:'https://prod.eet.cz:443/eet/services/EETServiceSOAP/v3', time: true}, (error, response, body) => {
    var responseTime = new Date() - start;
      var log = colors.blue('Request time: ' + FormatNumberLength(response.elapsedTime, 10) + ' ms ');
      var line = Array(100).join('_');
      var graph = Math.round((responseTime / 5));
      var graph_string = Array(graph).join('#');
      graph_string = ReplaceRange(line, 0, graph, graph_string);
      var green = colors.green(graph_string.substring(0, 40));
      var orange = colors.yellow(graph_string.substring(40, 60));
      var red = colors.red(graph_string.substring(60, 80));
      console.log(log + green + orange + red);
      calee();
  });
}

calee();
