const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("open");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
new Glider(document.querySelector('.glider'), {
  slidesToShow: 4,
  slidesToScroll: 4,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      breakpoint: 775,
      settings: {
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25
      }
    },{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});

var mymap = L.map('mapid').setView([33.3528508,10.4813842], 18);
googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleHybrid.addTo(mymap);
var redMarker = L.AwesomeMarkers.icon({
  icon: 'home',
  markerColor: 'red',
  prefix: 'fa',
});
L.marker([33.3528508,10.4813842], {icon: redMarker}).addTo(mymap).bindPopup("<b>Notre Locale</b><br>xxxxxxxxxxx.").openPopup();