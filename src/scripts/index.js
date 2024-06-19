import "../styles/styles.css";
import App from "./views/app";
import "./views/pages/stunting-calculate";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  body: document.querySelector("body"),
  antropometriSection: document.querySelector("#antropometri"),
  buttonPanduan: document.querySelector("#panduanPengukuran"),
  antropometri: document.querySelector(".antropometri"),
  pengukuranAntropometri: document.querySelector(".pengukuran-antropometri"),
  buttonAntropometri: document.querySelector("#buttonAntropometri"),
});

// MENAMPILKAN GIZI
const getGizidata = async () => {
  try {
    const response = await fetch(
      "https://innate-garnet-aunt.glitch.me/api/gizi"
    );
    const Apigizi = await response.json();
    let giziElement = "";
    Apigizi.data.forEach((gizi) => {
      giziElement += `
      <div class="gizi_card">
                        <div class="gizi_image">
                            <img class="foto" src="${gizi.ImageUrl}" alt="${gizi.Title}" crossorigin="anonymous" loading="lazy">
                        </div>
                        <div class="gizi_card_content">
                            <h4>${gizi.Title}</h4>
                        </div>
                        <p>
                        ${gizi.Description}
                        </p>
                    </div>
      `;
    });

    document.querySelector(".gizi_grid").innerHTML = giziElement;
  } catch (error) {
    console.error(error);
  }
};

getGizidata();
