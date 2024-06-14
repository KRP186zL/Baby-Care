const PengukuranAntropometri = {
  init({
    antropometriSection,
    buttonPanduan,
    buttonAntropometri,
    antropometri,
    pengukuranAntropometri,
  }) {
    console.log("button panduan:", buttonPanduan);
    console.log("button antropometri:", buttonAntropometri);
    console.log("antropometri:", antropometri);
    console.log("pengukuran antropometri:", pengukuranAntropometri);

    buttonPanduan.addEventListener("click", (event) => {
      this._togglePanduan(event, antropometri);
      pengukuranAntropometri.classList.remove("open");
    });

    buttonAntropometri.addEventListener("click", (event) => {
      this._toggleAntropometri(event, pengukuranAntropometri);
      antropometri.classList.remove("open");
    });
  },

  _togglePanduan(event, antropometri, pengukuranAntropometri) {
    event.stopPropagation();
    antropometri.classList.toggle("open");
  },

  _toggleAntropometri(event, pengukuranAntropometri, antropometri) {
    event.stopPropagation();
    pengukuranAntropometri.classList.toggle("open");
  },
};

export default PengukuranAntropometri;
