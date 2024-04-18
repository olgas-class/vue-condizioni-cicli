const { createApp } = Vue;

createApp({
  data() {
    return {
      greeting: "Ciao",
      // roundClass: "",
      // colorClass: ""
      isRound: false,
      isGreen: false,
    };
  },
  methods: {
    toggleRound: function () {
      // if (this.roundClass === "round") {
      //   this.roundClass = "";
      // } else {
      //   this.roundClass = "round";
      // }

      // if(this.isRound) {
      //   this.isRound = false;
      // } else {
      //   this.isRound = true;
      // }
      this.isRound = !this.isRound;
    },
    toggleGreen: function () {
      // if (this.colorClass === "green") {
      //   this.colorClass = "";
      // } else {
      //   this.colorClass = "green";
      // }
      this.isGreen = !this.isGreen;
    },
  },
}).mount("#app");

// css ---> classe
// chiave nel data che conterrà la classe dinamica
// chiave mettiamo in html nella classe dinamica traite binding (:class)
// creiamo la funzione nei methods
// collegiamo la funzione al bottone tramite @click
// implementiamo la logica che cambia il valore della chiave per fare toggle
