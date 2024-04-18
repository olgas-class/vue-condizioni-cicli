const { createApp } = Vue;

createApp({
  data() {
    return {
      curIndex: 0,
      studentsArray: [
        {
          name: "Giuseppe",
          lastname: "Neri",
          age: 36,
        },
        {
          name: "Mario",
          lastname: "Rossi",
          age: 24,
        },
        {
          name: "Giovanni",
          lastname: "Verdi",
          age: 36,
        },
      ],
    };
  },
  methods: {
    showStudent: function(index) {
      this.curIndex = index;
    }
  },
}).mount("#app");
