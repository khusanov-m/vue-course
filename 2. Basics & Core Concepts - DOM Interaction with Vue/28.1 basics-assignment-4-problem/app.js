const app = Vue.createApp({
  data() {
    return {
      input: "",
      entered: "",
      toggleVisibility: false,
      inlineStyleCode: "",
      inlineStyleCodeConfirmed: "",
    };
  },

  methods: {
    read(event) {
      this.input = event.target.value;
    },

    confirmed() {
      this.entered = this.input;
    },

    inlineStyle(event) {
      this.inlineStyleCode = event.target.value;
    },

    confirmedStyle() {
      this.inlineStyleCodeConfirmed = this.inlineStyleCode;
    },
  },

  computed: {
    userChoice() {
      return {
        user1: this.entered === "user1",
        user2: this.entered === "user2",
        hidden: this.toggleVisibility,
        visible: !this.toggleVisibility,
      };
    },
  },
});

app.mount("#assignment");
