function iniciarJogo() {

  // Retrieve the selected level in select
  var nivel = document.getElementById('nivel').value;

  // Set the href value to point to another web site
  location.href = "estourando-baloes.html?" + nivel;

}