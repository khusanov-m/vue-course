const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },

  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
