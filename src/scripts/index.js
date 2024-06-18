import "regenerator-runtime";
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
