<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->

  <!-- FOR COMPOSITION API -->
  <!-- REGULAR WAY
  <h3 v-if="visible">{{ goal }}</h3>
  <button @click="toggleVisibility">Toggle Goal</button> -->

  <!-- FOR REF 
  <h3 v-if="visible">{{ courseGoal }}</h3>
  <button @click="toggleVisibility">Toggle Goal</button> -->

  <!-- FOR REACTIVE
  <h3 v-if="goal.visible">{{ goal.first }}</h3>
  <button @click="toggleVisibility">Toggle Goal</button> -->

  <!-- FOR OPTIONS API -->
  <h3 v-if="visible">{{ goal }}</h3>
  <button @click="toggleVisibility">Toggle Goal</button>

  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';
// import { reactive } from 'vue';

export default {
  // Options API
  data() {
    return {
      visible: true,
      goal: 'Develop High Level SPA Projects with help of VueJS'
    };
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    }
  }

  // Composition API
  // setup() {
  // Regular way
  // const goal = 'Develop High Level SPA Projects with help of VueJS';
  // let visible = false;
  // function toggleVisibility() {
  // visible = !visible;
  // }

  // return { goal, visible, toggleVisibility: changeVisibility };

  // Ref
  //   const goal = ref('Develop High Level SPA Projects with help of VueJS');
  //   const visible = ref(true);

  //   function changeVisibility() {
  //     visible.value = !visible.value;
  //   }

  //   return { courseGoal: goal, visible, toggleVisibility: changeVisibility };
  // }

  // Reactive
  // const goal = reactive({
  //   first: 'Develop High Level SPA Projects with help of VueJS',
  //   visible: true
  // });

  // function changeVisibility() {
  //   goal.visible = !goal.visible;
  // }

  // return { goal: goal, toggleVisibility: changeVisibility };
  // }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
