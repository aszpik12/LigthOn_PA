class Lampa {
  #allapot;
  #id;
  #divElem;
  constructor(szuloElem, villagit, i) {
    this.#allapot = villagit;
    this.#id = i;
    if (this.#allapot === 1) {
      szuloElem.append(`
          <div class="vilagit">
              
          </div>
      `);
    } else {
      szuloElem.append(`
      <div class="nemvilagit">
          
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
    const divvilagit = document.querySelector("vilagit");
    const divnemvilagit = document.querySelector("nemvilagit");

    this.#szinBeallit();
  }

  #szinBeallit() {
    if (this.class == "vilagit") {
      divvilagit.classList.replace("vilagit", "nemvilagit");
    } else {
      divnemvilagit.classList.replace("nemvilagit", "vilagit");
    }
  }

  trigger() {
    const ev = new CustomEvent("kapcsolas", { detail: this.#allapot });
    window.dispatchEvent(ev);
  }
}
export default Lampa;
