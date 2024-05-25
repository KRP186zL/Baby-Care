import "regenerator-runtime";
import "../styles/styles.css";
import App from "./views/app";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  main: document.querySelector("#main"),
});
