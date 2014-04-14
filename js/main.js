var store = (function () {

  var searchBox,
  infowindow,
  markers = [],
  myLatlng = new google.maps.LatLng(50.0019, 10.1419),
  myOptions = { zoom: 6, center: myLatlng, mapTypeId: google.maps.MapTypeId.ROADMAP, mapTypeControl: false, streetViewControl:false },
  customIcons = { iconblue: './icons/blue.png' };

  var init = function() {

    map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
    input = (document.getElementById('pac-input'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    searchBox = new google.maps.places.SearchBox((input));
    store.listener();
  }, 

  listener = function() {

    google.maps.event.addListener(searchBox, 'places_changed', function() {

        //search for places
        var places = searchBox.getPlaces(); 

        //set null
        for (var i = 0, marker; marker = markers[i]; i++) {
          marker.setMap(null);
        }

        //set markers zero 
        markers = [];
        $('.addaddress').empty();

        //get new bounds
        var bounds = new google.maps.LatLngBounds();

        for (var i = 0, place; place = places[i]; i++) {
          
          store.create_marker(place);
          
          //append to the table
          $('.addaddress').append('<tr><td>'+ place.name +'</td><td>'+ place.formatted_address +'</td></tr>');
          bounds.extend(place.geometry.location);
        }
        //set the map
        map.fitBounds(bounds);
      });
  }, 

  create_marker = function(info) {
    
    //create a marker for each place.
    var marker = new google.maps.Marker({ map: map, icon: customIcons.iconblue, title: info.name, position: info.geometry.location });

    //infowindow setup
    google.maps.event.addListener(marker, "click", function() {    
      
      if (infowindow) {
        infowindow.close();
      }
      infowindow = new google.maps.InfoWindow({content: info.name});
      infowindow.open(map, marker);  
    });   

    //push the marker
    markers.push(marker); 
  }
  
  return {
   init: init, 
   listener: listener, 
   create_marker: create_marker
 };

})();

google.maps.event.addDomListener(window, 'load', store.init);










