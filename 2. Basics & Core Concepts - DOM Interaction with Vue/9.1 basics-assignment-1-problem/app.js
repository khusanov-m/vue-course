const app = Vue.createApp({
  data() {
    return {
      name: "Mukhammad Khojiakbar",
      age: 18,
      img: "https://w.wallhaven.cc/full/rd/wallhaven-rdgevq.jpg",
    };
  },

  methods: {
    futureAge() {
      return this.age + 5;
    },

    favNumber() {
      const number = Math.floor(Math.random() * 10);
      return number;
    },
  },
});

app.mount("#assignment");
