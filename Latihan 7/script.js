console.log("Helo Panda");
alert("Haloo gais apa kabs");

const nama = "<h1>Hello</h1>";
// document.getElementById("tulisan").innerHTML = nama;
// document.getElementById("tulisan").style.color = "deepSkyBlue";

const objek = document.getElementById("tulisan");

objek.innerHTML = nama;
objek.style.color = "deepSkyBlue";

const mobil = document.getElementById("mobil");

const merk = "DD";
console.log(mobil.innerHtml = merk);

const getNama = document.getElementById("nama");

const tombol = document.getElementById("tombol");



tombol.onclick = function() {
  console.log(getNama.value);
  const nama = "<h1>" + getNama.value + "</h1>";
  objek.innerHTML = nama;
}