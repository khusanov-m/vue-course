const app = Vue.createApp({
  data() {
    return {
      taskValue: "",
      tasks: [],
      visibility: true,
      text: "Hide",
    };
  },

  methods: {
    addTask() {
      this.tasks.push(this.taskValue);
    },

    visibile() {
      if (this.visibility) {
        this.visibility = !this.visibility;
        this.text = "Show";
      } else {
        this.visibility = !this.visibility;
        this.text = "Hide";
      }
    },
  },
});

app.mount("#assignment");
