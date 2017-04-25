// Create the Google Map…
var map = new google.maps.Map(d3.select("#map").node(), {
  zoom: 12,
  center: new google.maps.LatLng(40.7291, -73.9965),
  mapTypeId: google.maps.MapTypeId.SATELLITE
});

$.getJSON("data/zip_radius_20mi.json", function(data){
        for (i in data.zip_codes){
          // $.getJSON('/data/zips/byzipcode/zip_'+data.zip_codes[i].zip_code + '.json', function(data){
          //     console.log(data);
          // });
          file = '/data/zips/byzipcode/zip_'+data.zip_codes[i].zip_code + '.json';
          try{
            $.getJSON(file, function(data){
              loadZip(data);
            });
          }catch(e){
            console.log("no file ... "+ file);
          }
          
        }
      }); 


function loadZip(geoJSON){
  features = map.data.addGeoJson(geoJSON);

  geoid10 = features[0].f.GEOID10;
  if (geoid10 == "07640"){
    map.data.overrideStyle(features[0], {fillColor: 'red'});
  }
}

function displayDetailedInfo(geoid10){
  current = $("#detailedInfo").html();

  addition = '<div id="'+geoid10+'">';

  addition += "Zip Code : " + geoid10

  addition += '</div>';

  $("#detailedInfo").html(current + addition);
}
function clearDetailedInfo(geoid10){
  $("#detailedInfo #"+geoid10).remove();
}

// Handle Click on Zip location
map.data.addListener('click', function(event) {
  status = event.feature.getProperty("active");
  if (status == "undefined" || status == "false"){
      map.data.overrideStyle(event.feature, {fillColor: 'red'});
      event.feature.setProperty("active","true")
      displayDetailedInfo(event.feature.f.GEOID10);
  }else{
    map.data.revertStyle(event.feature);
    event.feature.setProperty("active","false")
    clearDetailedInfo(event.feature.f.GEOID10);
  }
});

