

const urlAPI = "https://api.sampleapis.com/coffee/hot";

fetch("https://api.sampleapis.com/coffee/hot")
.then(resp => resp.json()).then(data => displayData(data))

function displayData(data) {
  console.log(data[0].description)
  const container = document.querySelector(".container");

  data.forEach(tampilData)

  function tampilData(item, index, data) {
    container.innerText =  item.description
    console.log(item.description)
  }

}