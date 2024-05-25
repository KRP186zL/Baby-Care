import DrawerInitiator from "../utils/drawer-initiator";

class App {
  constructor({
    button,
    drawer,
    main,
    antropometri,
    gizi,
    blog,
    news,
    gallery,
    contact,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._main = main;
    this._antropometri = antropometri;
    this._gizi = gizi;
    this._blog = blog;
    this._news = news;
    this._gallery = gallery;
    this._contact = contact;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      main: this._main,
    });
  }
}

export default App;
