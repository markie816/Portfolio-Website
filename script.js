/* The map */
var map = L.map('map').setView([50.95956, 5.825261], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([50.95956, 5.825261]).addTo(map);

/* Open dropdown */
function openDropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
// https://www.w3schools.com/howto/howto_js_dropdown.asp    --> LINK WAAR IK HET VANDAAG HEB
window.onclick = function(event) {
    if (!event.target.matches('.menu_container')) {
      var dropdowns = document.getElementsByClassName(".dropdown-content"); //Zou zonder . moeten werken, werkt echter alleen met
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


