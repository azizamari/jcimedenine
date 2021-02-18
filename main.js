ScrollReveal().reveal('.headline' , { delay: 700 });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

links.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("open");
    });
    hamburger.classList.toggle("toggle");
  })
})
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

new Glider(document.querySelector('.glider2'), {
  slidesToShow: 1,
  dots: '.dots2',
  draggable: true,
  // arrows: {
  //   prev: '.glider-prev2',
  //   next: '.glider-next2'
  // },
  responsive: [
    {
      breakpoint: 775,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
L.marker([33.3528508,10.4813842], {icon: redMarker}).addTo(mymap).bindPopup("<b>Notre Locale</b><br>route gabes 1KM.").openPopup();

window.addEventListener('load', (event) => {
  if(document.body.clientWidth<=580){
    $('#card1').html('<img src="assets/bureau2.png" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Aymen Ounis</h5> <h6>Président</h6> <p class="card-text">ounisaymen403@gmail.com</p> </div>');
    $('#card2').html('<img src="assets/bureau3.png" class="card-img-top" alt="..." > <div class="card-body"> <h5 class="card-title">Haythem Yahyaoui</h5> <h6>Vice Président - VPPRE</h6> <p class="card-text">haithem717@gmail.com</p> </div>');
  }
});