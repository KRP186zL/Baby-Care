import DrawerInitiator from "../utils/drawer-initiator";
import PengukuranAntropometri from "../utils/pengukuran-antropometri";

class App {
  constructor({
    button,
    drawer,
    body,
    antropometriSection,
    buttonPanduan,
    buttonAntropometri,
    antropometri,
    pengukuranAntropometri,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._body = body;
    this._antropometriSection = antropometriSection;
    this._buttonPanduan = buttonPanduan;
    this._antropometri = antropometri;
    this._pengukuranAntropometri = pengukuranAntropometri;
    this._buttonAntropometri = buttonAntropometri;

    this._initialAppShell();
    this._initializePengukuranAntropometri();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      body: this._body,
    });
  }
  _initializePengukuranAntropometri() {
    PengukuranAntropometri.init({
      antropometriSection: this._antropometriSection,
      buttonPanduan: this._buttonPanduan,
      buttonAntropometri: this._buttonAntropometri,
      antropometri: this._antropometri,
      pengukuranAntropometri: this._pengukuranAntropometri,
    });
  }
}

export default App;
