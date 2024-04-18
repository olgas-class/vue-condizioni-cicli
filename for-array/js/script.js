const { createApp } = Vue;

createApp({
  data() {
    return {
      students: ["Pippo", "Pluto", "Paperino"],
      product: {
        name: "Cuffie",
        color: "bianchi",
        size: "grandi"
      }
    };
  },
  methods: {
    getRnd: function() {
      return Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
    }
  },
}).mount("#app");


