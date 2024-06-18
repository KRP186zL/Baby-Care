const {
  dataLakiLaki,
  dataPerempuan,
} = require("../../data/local//data-stunting");
const Swal = require("sweetalert2");

const hasil = document.querySelector("#hasil");
const formStunting = document.querySelector("#formStunting");
const inputUmur = formStunting.umur;
const inputTinggi = formStunting.tinggi;
const inputNama = formStunting.nama;
const inputGender = formStunting.jk;
console.log(hasil);

formStunting.addEventListener("submit", (event) => {
  event.preventDefault();

  const isNumber = (value) => {
    value = value.replace(/,/g, ".");
    if (isNaN(value)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tinggi badan harus berupa angka",
      });
      hasil.innerHTML = "";
      return false;
    }
    return parseFloat(value);
  };

  const nama = inputNama.value;
  const umur = parseInt(inputUmur.value);
  const tinggi = isNumber(inputTinggi.value);
  const gender = inputGender.value;
  let zScore = null;

  const isStunting = (zScore) => {
    if (zScore < -3) {
      return {
        hasil: "Stunting parah",
        image: "./img/hasil-stunting/stunting-parah.png",
      };
    } else if (zScore >= -3 && zScore < -2) {
      return {
        hasil: "Stunting",
        image: "./img/hasil-stunting/stunting.png",
      };
    }

    return {
      hasil: "Normal",
      image: "./img/hasil-stunting/normal.png",
    };
  };

  if (gender === "lk") {
    const SDMIN1 = dataLakiLaki[`${umur}`].sdMin1;
    const MEDIAN = dataLakiLaki[`${umur}`].median;
    const SDPLUS1 = dataLakiLaki[`${umur}`].sdPlus1;

    if (tinggi < MEDIAN) {
      zScore = (tinggi - MEDIAN) / (MEDIAN - SDMIN1);
    } else {
      zScore = (tinggi - MEDIAN) / (SDPLUS1 - MEDIAN);
    }
  } else {
    const SDMIN1 = dataPerempuan[`${umur}`].sdMin1;
    const MEDIAN = dataPerempuan[`${umur}`].median;
    const SDPLUS1 = dataPerempuan[`${umur}`].sdPlus1;

    if (tinggi < MEDIAN) {
      zScore = (tinggi - MEDIAN) / (MEDIAN - SDMIN1);
    } else {
      zScore = (tinggi - MEDIAN) / (SDPLUS1 - MEDIAN);
    }
  }
  zScore = Math.floor(zScore * 100) / 100;
  const status = isStunting(zScore);

  if (nama && umur && tinggi) {
    hasil.innerHTML = `
          <div class="hasil-container">
            <div class="hasil-header">
              <h3>Hasil Perhitungan</h3>
            </div>
            <div class="hasil-subheader">
              <p>Z-Score:</p>
              <p>&lt;-3 = <span class="stunting-parah">Stunting parah</span></p>
              <p>-3 sd &lt;-2 = <span class="stunting">Stunting</span></p>
              <p>-2 sd +3 = <span class="normal">Normal</span></p>
            </div>
            <div class="hasil-content">
              <div class="hasil-content_data">
                <p><span class="text">Nama: ${nama}<span></p>
                <p><span class="text">Umur: ${umur} bulan<span></p>
                <p><span class="text">Tinggi: ${tinggi} cm<span></p>
                <p><span class="text">Z-Score: ${zScore}<span></p>
                <p><span class="text">Status: ${status.hasil}<span></p>
              </div>
              <div class hasil-content_image>
                <img src=${status.image} alt="${status.hasil}" />
              </div>
            </div>
          </div>
      `;

    hasil.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
