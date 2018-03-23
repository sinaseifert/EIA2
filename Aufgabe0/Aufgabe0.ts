function Hallo() {
    
  var name = prompt("Wie heißt du?", "");
  if (name != null) {
      
    document.getElementById("Begrüßung").innerHTML =
    
      "Hallo " + name + "! Willkommen auf meiner Seite.Viel Spa�";
  }
      
}