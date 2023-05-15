window.addEventListener('load', function () {
    // get mymap :
    mymap = this.document.getElementById('showMap');


});//end of load
function getlocation() {
    // check availability of geilocatiion in user browser
    if (navigator.geolocation) {
        // geolocation available
        //2- get permission : geolocation.getCurrentPosition(success callback , errorcallback);
        navigator.geolocation.getCurrentPosition(getposition, errorhandeler);

    } else {
        mymap.innerText = "Sorry , Update Your Browser ANd Try Again !";
    }
}
function getposition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    accur = position.coords.accuracy;
    time =new Date( position.timestamp);
    var location = new google.maps.LatLng(lat, lon);
    var specs = { zoom: 17, center: location };
    new google.maps.Map(mymap, specs);
    console.log(lat);
}
function errorhandeler() {
    alert('error')
}

function showData(){
    let mapData= document.getElementById("mapData");
    let latP=document.querySelector('.lat');
    let longP=document.querySelector('.long');
    let AccP=document.querySelector('.Acc');
    let timeP=document.querySelector('.time');
    latP.innerText=lat;
    longP.innerText=lon;
    AccP.innerText=accur;
    timeP.innerText=time;



    mapData.style.display='block';
    mymap.style.display="none";

    console.log(lat);
}