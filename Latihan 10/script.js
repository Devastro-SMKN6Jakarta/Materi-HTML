

//Define Object

const motor = {
  merk: "Yamaha",
  tipe: "Aerox",
  bbm: "bensin",
  cc: 150,
  kondisi_mesin: false,
  starter() {
    if(this.kondisi_mesin == false) {
      alert("Motor Dinyalakan!");
      this.kondisi_mesin = true;
    } else {
      alert("Motor Sudah Menyala")
    }
  },
  switchOff() {
    if(this.kondisi_mesin == true) {
      alert("Motor Dimatikan!");
      this.kondisi_mesin = false;
    } else {
      alert("Motor Sudah Dimatikan!")
    }
  }
}