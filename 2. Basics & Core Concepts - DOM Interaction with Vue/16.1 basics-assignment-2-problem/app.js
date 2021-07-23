const app = Vue.createApp({
  data() {
    return {
      output: "OUTPUT",
      enteredValue: "OUTPUT",
      confirmed: "OUTPUT",
    };
  },

  methods: {
    alertMessage() {
      alert("Vue is the best!");
    },

    outputMessage(event) {
      this.output = event.target.value;

      if (this.output === "") {
        this.output = "OUTPUT";
      }
    },

    enter(event) {
      this.enteredValue = event.target.value;

      if (this.enteredValue === "") {
        this.enteredValue = "OUTPUT";
      }
    },

    confirmedOutput() {
      this.confirmed = this.enteredValue;
    },
  },
});

app.mount("#assignment");
