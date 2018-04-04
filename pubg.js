var request = require("request");

var region = "pc-na";
var token =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwMDJiNmI3MC0xOTlmLTAxMzYtNjY0NS00ZDI4ZmVkOTQyNTUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyNzgxOTQzLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmdzdGF0cy0zMmVjMjA3Mi00ZDhmLTQxMzktYTU4NS1lMmY5ZGE3MzMwNjYiLCJzY29wZSI6ImNvbW11bml0eSIsImxpbWl0IjoxMH0.AONjkeAbUzTMc9H7B-dkbx6Nr1hnRJFypi5jBdi-Lvs";

var options = {
  method: "GET",
  url: "https://api.playbattlegrounds.com/shards/" + region + "/players",
  qs: { "filter[playerNames]": "psiinara" },
  headers: {
    Accept: "application/vnd.api+json",
    Authorization: token
  }
};

var output = request(options, function(error, response, body) {
  if (error) throw new Error(error);
  var obj = JSON.parse(body);
  return obj.data[0].id;
});

console.log(output);
