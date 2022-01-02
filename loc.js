var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    {
        attribution: false
    });

var map = L.map('map',
    {
        zoomControl: true,
        layers: [tileLayer],
        maxZoom: 18,
        minZoom: 6
    })
    .setView([53.9, 27.56667], 12);

   setTimeout(function () { map.invalidateSize() }, 800);
   
L.marker([53.926021, 27.517830]).addTo(map)
.bindPopup('ТЦ Замок/2-этаж').openPopup()


