//ngambil header
const header = document.querySelector("header");

console.log(header)

//ketika di scroll
window.addEventListener("scroll", function() {

  //kasih class scroll pas lagi di scroll
  header.classList.toggle("scroll", this.window.scrollY > 0);

  // console.log(this.window.scrollY)
  // if (this.window.scrollY > 100) {
  //   this.alert("Sudah sampai 100 px layar");
  // }
});