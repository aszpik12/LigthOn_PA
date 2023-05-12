import Lampa from "./Lampa.js";

class JatekTer {
  #db = 0;
  #allapotLista = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  #meret = 9;
  #lepes = 0;
  constructor() {
    console.log("Jatekter");
    const ARTICLE = $("article");
    this.setAllapotLista();
    for (let i = 0; i < this.#meret; i++) {
      const lampa = new Lampa(ARTICLE, this.#allapotLista[i], i);
    }

    $(window).on("kapcsolas", (event) => {

    });
  }

  setAllapotLista() {
    for (let i = 0; i < this.#allapotLista.length; i++) {
      this.#allapotLista[i] = Math.floor(Math.random() * 5 + 1);
      if (this.#allapotLista[i] > 1) {
        this.#allapotLista[i] = 0;
      }
    }
  }
}
export default JatekTer;
