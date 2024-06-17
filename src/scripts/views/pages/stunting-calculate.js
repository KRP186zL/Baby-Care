const {
  dataLakiLaki,
  dataPerempuan,
} = require("../../data/local//data-stunting");
const hasil = document.querySelector("#hasil");
const hitungStunting = document.querySelector("#hitungStunting");
const inputUmur = document.querySelector("#umur");
const inputBerat = document.querySelector("#berat");
const inputNama = document.querySelector("#nama");

const nama = inputNama.value;
const umur = parseInt(inputUmur.value);
const berat = parseFloat(inputBerat.value);

hitungStunting.addEventListener("click", () => {
  const data = dataLakiLaki.find((item) => item.umur === umur);
  if (umur > data.median) {
    const hasilStunting = (berat - data.median) / data.sd;
  }
  const zScore = Math.abs(hasilStunting).toFixed(2);
  const status = zScore > 2 ? "Stunting" : "Normal";

  hasil.innerHTML = `
        <h2>${nama}</h2>
        <p>Status Gizi: ${status}</p>
        <p>Z-Score: ${zScore}</p>
    `;
});
