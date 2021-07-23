Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector("button"),
//   inputEl = document.querySelector("input"),
//   listEl = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputEl.value,
//     listItemEl = document.createElement("li");

//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = "";
// }

// buttonEl.addEventListener("click", addGoal);
