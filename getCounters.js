

const request = require("request");
const { json } = require("stream/consumers");

var options = {
    method: 'GET',
    'url': 'http://192.168.1.135:8000/api/count/1',
}

request(options, function (error, response, body) {  //richiesta get che restituisce i conteggi (in & out) attuali
    if (error) throw new Error(error);

    var bodyCount = JSON.parse(body);



    const counters = [bodyCount.data[0].counter_zone1, bodyCount.data[0].counter_zone2]; //inserimento dei valori nel vettore counters

    console.log(bodyCount.data[0].counter_zone1);

});