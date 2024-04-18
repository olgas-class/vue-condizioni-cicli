const { createApp } = Vue;

createApp({
  data() {
    return {
      greeting: "Ciao",
      isAwesome: true,
      number: 5
    };
  },
  methods: {},
}).mount("#app");
