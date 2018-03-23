function Hallo() {
    
  var name = prompt("Wie ist dein Name?", "");
  if (name != null) {
      
    document.getElementById("Begrüßung").innerHTML =
    
      "Hallo " + name + "! Willkommen auf meiner Seite.Viel Spaß";
  }
      
}