import DrawerInitiator from "../utils/drawer-initiator";

class App {
  constructor({
    button,
    drawer,
    body,
    antropometri,
    gizi,
    blog,
    news,
    gallery,
    contact,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._body = body;
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
      body: this._body,
    });
  }
}

export default App;
