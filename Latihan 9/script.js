

function randomResult() {
  const angkaAcak = Math.random();

  if (angkaAcak < 0.34) return "gunting";
  if (angkaAcak >= 0.34 && angkaAcak < 0.64) return "batu";
  else return "kertas";

}

const hasil = document.querySelector(".hasil");
const komputer = document.querySelector(".komputer");
const gunting = document.querySelector(".gunting");

gunting.addEventListener("click", function() {
  const rand = randomResult();
  komputer.innerHTML = rand;
  if (rand == "gunting") {
    hasil.innerHTML = "Seri"
  }
  if (rand == "batu") {
    hasil.innerHTML = "kalah"
  }
  if (rand == "kertas") {
    hasil.innerHTML = "menang"
  }
})