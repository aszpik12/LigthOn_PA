class Lampa {
  #allapot;
  #id;
  #divElem;
  constructor(szuloElem, villagit, i) {
    this.#allapot = villagit == 1;
    this.#id = i;
    if (this.#allapot) {
      szuloElem.append(`
          <div id="id${this.#id}" class="vilagit">
              
          </div>
      `);
    } else {
      szuloElem.append(`
      <div class="sotet">
          
      </div>
  `);
    }

    this.#divElem = $("div");
    this.#divElem.on("click", () => {
      this.setAllapot();
      this.trigger();
    });
  }

  setAllapot() {
    this.#szinBeallit();
  }

  #szinBeallit() {
    const VILAGOS = document.querySelector(".vilagit");
    const SOTET = document.querySelector(".sotet");

    if (this.#allapot) {
      VILAGOS.classList.replace("vilagit", "sotet");
      this.#allapot == false;
    } else {
      SOTET.classList.replace("sotet", "vilagit");
      this.#allapot == true;
    }
  }

  trigger() {
    const ev = new CustomEvent("kapcsolas", { detail: this.#allapot });
    window.dispatchEvent(ev);
  }
}
export default Lampa;
