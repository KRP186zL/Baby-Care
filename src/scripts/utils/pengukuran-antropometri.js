const PengukuranAntropometri = {
  init({
    buttonPanduan,
    buttonAntropometri,
    antropometri,
    pengukuranAntropometri,
  }) {
    buttonPanduan.addEventListener("click", (event) => {
      this._togglePanduan(event, antropometri);
      pengukuranAntropometri.classList.remove("open");
    });

    buttonAntropometri.addEventListener("click", (event) => {
      this._toggleAntropometri(event, pengukuranAntropometri);
      antropometri.classList.remove("open");
    });
  },

  _togglePanduan(event, antropometri) {
    event.stopPropagation();
    antropometri.classList.toggle("open");
  },

  _toggleAntropometri(event, pengukuranAntropometri) {
    event.stopPropagation();
    pengukuranAntropometri.classList.toggle("open");
  },
};

export default PengukuranAntropometri;
