

const request = require("request");
const { json } = require("stream/consumers");

request.get('http://192.168.1.135:8000/api/maskParameters/1', function (error, response, body) {  //restituisce i valori di maschere e thr. (xmin, xmax, ymin, ymax, thr1, thr2) attuali
    if (error) throw new Error(error);

    var bodyMasks = JSON.parse(body);

    console.log()



    const masks = [bodyMasks.data[0].xmin, bodyMasks.data[0].xmax, bodyMasks.data[0].ymin, bodyMasks.data[0].ymax, bodyMasks.data[0].threshold_zone1, bodyMasks.data[0].threshold_zone2]; //inserimento dei valori nel vettore masks

    for (var i=0; i < masks.length; i++) {
        console.log(masks[i]);
    }

});